// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

 var feed1 = new Instafeed({
    get: 'user',
    userId: '1764704879',
    clientID: 'dbcceff3161447718f1616c5e14eb0a5',
    target: 'wow',
    useHttp: 'true',
    limit: '1',
    resolution: 'standard_resolution',
    accessToken: '1764704879.1677ed0.d0c89a49730347f1ab1c8ce2a787bb3a'
});
feed1.run();

 var feed2 = new Instafeed({
    get: 'user',
    userId: '1764704879',
    clientID: 'dbcceff3161447718f1616c5e14eb0a5',
    target: 'photos',
    useHttp: 'true',
    limit: '60',
    resolution: 'low_resolution',
    template: '<li><a target="_blank" href="{{link}}"><img src="{{image}}" /></a></li>',
    accessToken: '1764704879.1677ed0.d0c89a49730347f1ab1c8ce2a787bb3a',
    after: function() {
        // disable button if no more results to load
        if (!this.hasNext()) {
          loadButton.setAttribute('disabled', 'disabled');
        }
      },
});
feed2.run();

// grab out load more button
var loadButton = document.getElementById('load-more');

// bind the load more button
loadButton.addEventListener('click', function() {
  feed2.next();
});


/* Sticky Header*/
/*$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 1) {
        //clearHeader, not clearheader - caps H
        $("#banner").addClass("smallheader");
    }else{
        $("#banner").removeClass("smallheader");
    }
});*/

/* Sticky Sidebar Function */
$(function(){ // document ready
   if ($('.sticky').length) { // make sure "#sticky" element exists
      var el = $('.sticky');
      var stickyTop = $('.sticky').offset().top; // returns number
      var stickyHeight = $('.sticky').height();

      $(window).scroll(function(){ // scroll event
          var limit = $('#contact-info').offset().top - stickyHeight - 20;

          var windowTop = $(window).scrollTop(); // returns number

          if (stickyTop < windowTop && stickyHeight <= $(window).height()){
             el.addClass("stuck");
          }
          else {
             el.removeClass("stuck");
          }

          if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({top: diff});
          }
        });
   }
});