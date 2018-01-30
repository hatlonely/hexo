hexo.extend.helper.register('tag_count', function(tagname) {
    tags = this.site.tags
    count = 0
    tags.forEach(function(tag) {
        if (tag.name == tagname) {
            count = tag.length;
        }
    });

    return count;
});
