Jekyll::Hooks.register :site, :post_write do |site|
  site.tags.each do |tag, posts|
    dir = File.join(site.dest, 'tags', Jekyll::Utils.slugify(tag))
    FileUtils.mkdir_p(dir)
    File.write(File.join(dir, 'index.html'), <<~HTML)
      ---
      layout: tag
      tag: #{tag}
      permalink: /tags/#{Jekyll::Utils.slugify(tag)}/
      ---
    HTML
  end
end
