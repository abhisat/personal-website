$(function() {
    $(document).foundation();

    $('[data-toggle-menu]').on("click", function(){
        $("#overlay-nav-menu").toggleClass("is-open");
        $('[data-toggle-menu]').hide();
    });

});