// Can also be used with $(document).ready()
jQuery(window).load(function() {
  var animation = drupalSettings.aegan.flexslider.animation;
  var slideSpeed = drupalSettings.aegan.flexslider.slide_speed;
  var animationSpeed = drupalSettings.aegan.flexslider.animation_speed;
  jQuery('.flexslider').flexslider({
    animation: animation,
    slideshowSpeed: slideSpeed,
    animationSpeed: animationSpeed,
    smoothHeight: true
  });

  jQuery('.btn-btt').smoothScroll({speed: 1000});
  jQuery(window).scroll(function() {
    if(jQuery(window).scrollTop() > 200) {
        jQuery('.btn-btt').show();
      }
      else {
        jQuery('.btn-btt').hide();
      }
  }).resize(function(){
    if(jQuery(window).scrollTop() > 200) {
        jQuery('.btn-btt').show();
      }
      else {
        jQuery('.btn-btt').hide();
      }
  });
});
