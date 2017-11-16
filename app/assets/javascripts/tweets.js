// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function() {
  var newTweet = document.getElementById('new_tweet');
  var tweets = document.querySelector('.tweets')

  newTweet.addEventListener('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: newTweet.action,
      method: newTweet.method,
      dataType: 'json',
      data: $(newTweet).serialize()
    }).done(function(data) {
      console.log(data);
      var newTweet = document.createElement('li');
      newTweet.className = 'tweet'
      var tweetMessage = document.createElement('p');
      tweetMessage.innerHTML = data.message;
      var tweetTime = document.createElement('time');
      tweetTime.innerHTML = data.created_at;
      newTweet.append(tweetMessage);
      newTweet.append(tweetTime);
      tweets.prepend(newTweet);
    })
  })
})
