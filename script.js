$(function() {
  console.log('ready');

  $(window).scroll(function() {
    var currPos = $(this).scrollTop();

    if(currPos > 70) {
      $("#logo").addClass("shrink");
    } else {
      $("#logo").removeClass("shrink");
    }
  });
  
  $(".accordion span").click(function() {
    $(this).toggleClass('active');
    $(this).next('.content').toggleClass('active');
  });
  
  $(".btn-next").click(function(e) {
    var currPage = e.target.dataset.current;
    var nextPage = e.target.dataset.next;
    //console.log(currPage, nextPage);
    
    $('#' + currPage).fadeOut('fast');
    $('#' + nextPage).fadeIn();
  });
  
  $('.btn-back').click(function(e) {
    var currPage = e.target.dataset.current;
    var prevPage = e.target.dataset.previous;
    //console.log('current ' + currPage, 'previous ' + prevPage);
    
    $('#' + currPage).fadeOut();
    $('#' + prevPage).fadeIn();
  });
  
});