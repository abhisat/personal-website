$(function() {
    $(document).foundation();

    $('[data-toggle-menu]').on("click", function(){
        $("#overlay-nav-menu").toggleClass("is-open");
        $('[data-toggle-menu]').hide();
    });
    $('.top-bar-left ul, a').hover(function(){
    	$(this).find('.logo_black').show();
    	$(this).find('.logo').hide();
    }, function(){
    	$(this).find('.logo_black').hide();
    	$(this).find('.logo').show();
    });

});