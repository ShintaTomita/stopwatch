$(document).ready(function() {
  $('#start').click(function() {
    $('#timer').animate({'opacity':'0'},6000);
    $(this).css('opacity','0.3');
    $('#stop').css('opacity','1');
    $('#reset').css('opacity','1');
  });
  $('#stop').click(function() {
    $('#timer').animate({'opacity':'1'},500)
    $(this).css('opacity','0.3');
    $('#start').css('opacity','1');
  });
  $('#reset').click(function() {
    $('#timer').animate({'opacity':'1'},500)
    $(this).css('opacity','0.3');
    $('#start').css('opacity','1');
    $('#stop').css('opacity','1');
  });
  
})