# frozen_string_literal: true
# usage: ruby scripts/gen_leaf_categories.rb
#
# 리프(마지막) 카테고리 페이지만 생성

require 'yaml'
require 'fileutils'
require 'date'   # Date 허용

POST_DIRS = ["_posts", "docs/_posts"].select { |d| Dir.exist?(d) }
OUT_DIR   = "_pages/categories"
FileUtils.mkdir_p(OUT_DIR)

def strip_bom(s) = s&.sub(/\A\uFEFF/, '')

# 맨 위 Front Matter 블록만 인식 (본문 --- 무시), BOM/Date/Time 허용
def parse_front_matter(file_path)
  raw = strip_bom(File.read(file_path))
  lines = raw.lines
  return {} unless lines.first&.strip == '---'   # 첫 줄이 --- 여야 FM 인정

  close_idx = lines[1..].index { |l| strip_bom(l).strip == '---' }
  return {} unless close_idx

  fm_lines = lines[1..(close_idx)]
  YAML.safe_load(
    fm_lines.join,
    permitted_classes: [Date, Time],  # date 처리 허용
    aliases: true
  ) || {}
rescue => e
  warn "YAML parse error in #{file_path}: #{e.message}"
  {}
end

# 카테고리 정규화: 배열은 그대로, 문자열은 / 또는 , 로 분리
def normalize_categories(data)
  cats = data['categories'] || data['category']
  return [] if cats.nil?
  arr = cats.is_a?(Array) ? cats : cats.to_s.split(/[\/,]+/).map(&:strip)
  arr.reject!(&:empty?)
  arr[0, 8]
end

def label_from(cats) = cats.join('||')

# ⚠️ 파일명 안전 슬러그: /, \, :, ?, *, ", <, >, | 등 금지문자 치환
def unicode_slug(str)
  s = str.to_s.strip
  s = s.gsub(/[\/\\:?*"<>|]/, '-')  # 금지문자 → -
  s = s.gsub(/\s+/, '-')            # 공백 → -
  s = s.gsub(/-+/, '-')             # 연속 하이픈 정리
  s = s.gsub(/\A-+|-+\z/, '')       # 앞뒤 하이픈 제거
  s.downcase
end

# 1) 포스트에서 카테고리 경로 수집
paths = []
POST_DIRS.each do |dir|
  Dir.glob("#{dir}/**/*.{md,markdown,MD,MARKDOWN}").each do |f|
    data = parse_front_matter(f)
    cats = normalize_categories(data)
    next if cats.empty?
    paths << label_from(cats)
  end
end
paths.uniq!

if paths.empty?
  puts "⚠️  No categories found. Check your posts' front matter/encoding."
  puts "   Example:\n   ---\n   title: ...\n   categories: [대학교, 2025s, 3-2, Programming Language]\n   ---"
end

# 2) 리프 판정 (자신을 prefix로 갖는 다른 경로가 없으면 leaf)
leaves = paths.select { |x| !paths.any? { |y| y != x && y.start_with?(x + '||') } }

# 3) 리프 카테고리 페이지 생성
created = 0
leaves.each do |label|
  parts = label.split('||')
  title = parts.last
  slug  = unicode_slug(title)               # ← 안전 슬러그 사용
  out   = File.join(OUT_DIR, "#{slug}.md")
  FileUtils.mkdir_p(File.dirname(out))      # 혹시 모를 상위 경로 보장

  next if File.exist?(out)
  File.write(out, <<~MD)
  ---
  layout: leaf-category
  title: #{title}
  permalink: /categories/#{slug}/
  category_path: #{label}
  ---
  MD

  created += 1
  puts "✅ Created #{out}"
end

puts "✨ Done. #{created} leaf pages ensured."
