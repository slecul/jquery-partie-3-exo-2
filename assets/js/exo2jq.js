$(function() {
  var count = 0;
  $('#plus1').click(function() {
    count++;
    $('#number').text(count);
  });
  $('#moins1').click(function() {
    count--;
    $('#number').text(count);
  });
});
