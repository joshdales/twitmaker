// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function() {
  var newTweet = document.getElementById('new_tweet');

  newTweet.addEventListener('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: newTweet.action,
      method: newTweet.method,
      dataType: 'html',
      data: $(newTweet).serialize()
    })
  })
})
