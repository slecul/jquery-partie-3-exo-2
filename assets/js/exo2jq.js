$(function() {
  var count = 0;
  $('#plus1').click(function() {
    count++;
    $('#number').val(count);
  });
  $('#moins1').click(function() {
    count--;
    $('#number').val(count);
  });
});
