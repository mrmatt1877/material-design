$( document ).ready(function(){
  var options = [
    {selector: '.card', offset: 200, callback: function(el) {
      Materialize.fadeInImage($(el));
     } }
  ];
  Materialize.scrollFire(options);

  $(".button-collapse").sideNav();
})
