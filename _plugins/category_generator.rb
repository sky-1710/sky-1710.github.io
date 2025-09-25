# _plugins/category_generator.rb
module Jekyll
  class CategoryPage < Page
    def initialize(site, base, dir, category_title, posts)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      self.process(@name)
      self.read_yaml(File.join(base, "_layouts"), "category.html")
      self.data["title"] = category_title
      self.data["posts"] = posts
      # permalink를 명시적으로 고정 (중복 방지)
      self.data["permalink"] = "/" + dir + "/"
    end
  end

  class CategoryGenerator < Generator
    safe true
    priority :low

    def generate(site)
      buckets = {} # { "대학교/2025s/3-2/programming-language" => {name: "대학교 / 2025s / 3-2 / programming language", posts: [...] } }

      site.posts.docs.each do |post|
        cats = Array(post.data["categories"])
        next if cats.empty?

        slug = cats.map { |c| Jekyll::Utils.slugify(c) }.join("/")
        title = cats.join(" / ")
        buckets[slug] ||= { "name" => title, "posts" => [] }
        buckets[slug]["posts"] << post
      end

      # 이미 같은 URL의 페이지가 있으면 만들지 않음(중복 가드)
      existing_urls = site.pages.map { |p| p.url }.to_set

      buckets.each do |slug, data|
        dir = File.join("categories", slug)
        url = "/" + dir + "/"
        next if existing_urls.include?(url)

        site.pages << CategoryPage.new(site, site.source, dir, data["name"], data["posts"])
      end
    end
  end
end
