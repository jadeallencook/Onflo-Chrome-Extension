function getHashtag() {
  var hashtag = document.getElementById('hashtag').value;
  return hashtag;
}

document.getElementById('twitter').onclick = function() {
  var url = 'https://twitter.com/search?f=tweets&vertical=news&q=' + getHashtag() + '#onflo';
  chrome.tabs.create({ url: url });
}

document.getElementById('instagram').onclick = function() {
  var url = 'https://www.instagram.com/explore/tags/' + getHashtag() + '/#onflo';
  chrome.tabs.create({ url: url });
}