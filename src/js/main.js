//= plugins.js
$(document).ready(function() {
    $('[data-slick]').each(function () {
        var self = $(this);
        if(self.hasClass('slick-initialized')){
            return;
        }
        var slickConfig = $.parseJSON(self.attr('data-slick'));
        self.on('init', function () {
          var caption = self.find('.slider-item__caption'),
            arrows = $('.slider-arrow');

          arrows.css('margin-top', '-' + caption.height() + 'px');
        });
        self.slick(slickConfig);
    });
});
