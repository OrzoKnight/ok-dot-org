// jQuery best practices by Greg Franko: http://gregfranko.com/jquery-best-practices/#/
(function(ourStuff) {
  // The global jQuery object is passed as a parameter
  ourStuff(window.jQuery, window, document);
}(function($, window, document) {
  // Our stuff goes here. Wrap everything in a function so it will load after the DOM is ready

// ScrollTo ====================== //
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $(document).on("scroll", function(){
    if
      ($(document).scrollTop() > 500){
      $(".top-bar").addClass("dark-bg");
    }
    else
    {
      $(".top-bar").removeClass("dark-bg");
    }
  });

}));
