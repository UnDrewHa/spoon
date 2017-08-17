//= plugins.js
$(document).ready(function() {
    $('[data-slick]').each(function () {
        var self = $(this);
        if(self.hasClass('slick-initialized')){
            return;
        }
        var slickConfig = $.parseJSON(self.attr('data-slick'));

        self.slick(slickConfig);
    });
});
