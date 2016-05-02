//
//
//
//
// Programmed by CSxKING of Electric Gaming.
//
//
// This is Copyright (C) Electric Gaming, 2016. We are found here: https://electricgaming.ga/en/ or https://pad.electricgaming.ga
//
//
//
// THIS CODE IS OPEN SOURCE, ALL I REQUIRE YOU DO TO USE IT IS LEAVE THIS SECTION OF COMMENTS IN THE CODE!
//
//
//
// BEGIN CODE

playing = false;
mode = 1;

function init() {
  console.log('[API] Initalizeing...');
  defaultVideo();
  console.log('[API] Initalized!');
  console.info('Hello! I see you like fiddleing with websites and their code. You can view the API by typing api();');
  checkMode();
}

function checkMode() {
  $('#content').append('<div id="info"></div>');
  $('#info').addClass('center');
  $('#info').prepend('<div id="infohead"></div>');
  $('#infohead').addClass('infohead');
  if ( mode === 1 ) {
    $('#infohead').append('<label class="headlabel">Maintenance!</label>');
    $('#info').append('<label class="contentlabel">We are in maintenance mode! We will be back in a bit!</label>');
  } else {
    $('#infohead').append('<label class="headlabel">Whitelist!</label>');
    $('#info').append('<label class="contentlabel">This server is Whitelisted! Click <a href="http://pad.electricgaming.ga/whitelist_signup.html" target="_blank">here</a> to request access!</label>');
  }
  $('#info').append('<div id="btns"></div>')
  $('#btns').append('<text class="center centerFix btnTxt" onclick="defaultVideo()">Random Video</text>');
  $('#btns').append('<text class="center centerFix btnTxt" onclick="customVideo()">Custom Video</text>');
}

function customVideo() {
  var idToSet = prompt('Enter a video ID. This is what comes after the v= in a youtube link. (Ex. PouTKHztN-M');
  playYouTube(idToSet);
}

function api() {
  console.info("N/A");
}

function defaultVideo() {
  var videos = ["FtveSk1N7Uo", "vBH0tDqGjts", "T8fcbqDUwbU", "yteXdnQQSUc"];
  var selectedVideo = videos[Math.floor(Math.random() * videos.length)];
  playYouTube(selectedVideo);
}

function playYouTube(id) {
  player = "<iframe id='player' width='560' height='315' src='https://www.youtube.com/embed/" + id + "?autoplay=1&controls=0' frameborder='0' allowFullScreen></iframe>";
  if( $('#player').length ) {
    $('#player').remove();
    $('#ply').append(player);
    console.log('[API] Now Playing: ' + id);
  } else {
    playing = true;
    $('#ply').append(player);
    console.log('[API] Now Playing: ' + id);
  }
}

init();
