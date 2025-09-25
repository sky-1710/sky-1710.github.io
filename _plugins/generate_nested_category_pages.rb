# _plugins/generate_nested_category_pages.rb
require 'set'

module Jekyll
  class NestedCategoryPage < Page
    def initialize(site, base, dir, segments_original)
      @site = site
      @base = base
      @dir  = dir            # e.g. "categories/daehak/3-2/s-w"
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'category_archive.html')

      self.data['layout']        = 'category_archive'
      # 원본(비슬러그) 세그먼트를 레이아웃에서 제목 등에 쓸 수 있도록 전달
      self.data['category_path'] = segments_original
      self.data['title']         = "Category: #{segments_original.join(' / ')}"
      # permalink는 dir/index.html 구조로 자연 생성됨
    end
  end

  class NestedCategoryPageGenerator < Generator
    safe true
    priority :low

    def generate(site)
      # 1) 모든 포스트의 카테고리 경로를 수집하되,
      #    "slugify된 디렉토리 문자열"을 key로 dedupe 한다.
      unique_dirs = {}  # key: "categories/slug/slug", val: original_segments(array)

      site.posts.docs.each do |post|
        cats = post.data['categories'] || []
        next if cats.empty?

        orig = cats.map(&:to_s)
        (1..orig.size).each do |k|
          # 부분 경로
          segs_orig  = orig[0...k]
          segs_slug  = segs_orig.map { |s| Jekyll::Utils.slugify(s) }
          dir_key    = File.join('categories', *segs_slug)

          # 슬러그 경로를 key로 **단 한 번만** 등록
          unique_dirs[dir_key] ||= segs_orig
        end
      end

      # 2) 이미 큐(site.pages)에 동일 경로가 있으면 제거(안전)
      site.pages.reject! do |pg|
        next false unless pg.name == 'index.html'
        # dir 표기 다양성 고려: "/dir/", "dir/", "dir"
        unique_dirs.keys.any? { |dir| ["/#{dir}/", "#{dir}/", dir, "/#{dir}"].include?(pg.dir) }
      end

      # 3) 최종 생성 (중복 없음)
      unique_dirs.each do |dir_key, segs_orig|
        site.pages << NestedCategoryPage.new(site, site.source, dir_key, segs_orig)
      end
    end
  end
end
