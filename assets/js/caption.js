$('.gallery-item').featherlightGallery({
    filter: "a",
    afterContent: function() {
        this.$legend = this.$legend || $('<div class="legend"/>').insertAfter(this.$content);
        this.$legend.text(this.$currentTarget.attr('alt'));
    }
});
