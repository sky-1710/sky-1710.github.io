require "set"

Jekyll.logger.info "CategoryGenerator", "start"

module Jekyll
  class CategoryPage < Page
    def initialize(site, base, dir, category_title, posts)
      @site = site
      @base = base
      @dir  = dir
      @name = "index.html"

      process(@name)
      read_yaml(File.join(base, "_layouts"), "category.html")
      self.data["title"] = category_title
      self.data["posts"] = posts
      self.data["permalink"] = "/" + dir + "/"
    end
  end

  class CategoryGenerator < Generator
    safe true
    priority :low

    def generate(site)
      buckets = {} # { "대학교/2025s/3-2/programming-language" => { "name" => "...", "posts" => [...] } }

      site.posts.docs.each do |post|
        cats = Array(post.data["categories"])
        next if cats.empty?

        slug  = cats.map { |c| Jekyll::Utils.slugify(c, mode: "raw") }.join("/")
        title = cats.join(" / ")
        buckets[slug] ||= { "name" => title, "posts" => [] }
        buckets[slug]["posts"] << post
      end

      Jekyll.logger.info "CategoryGenerator", "bucket_count=#{buckets.keys.size}"

      existing_urls = site.pages.map { |p| p.url }.to_set
      created = 0

      buckets.each do |slug, data|
        dir = File.join("categories", slug)
        url = "/" + dir + "/"
        next if existing_urls.include?(url)

        site.pages << CategoryPage.new(site, site.source, dir, data["name"], data["posts"])
        created += 1
        Jekyll.logger.info "CategoryGenerator", "created #{url} (#{data['posts'].size} posts)"
      end

      Jekyll.logger.info "CategoryGenerator", "done, created=#{created}"
    end
  end
end
