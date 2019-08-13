var song = $('p');
//for Aquarius
var aq = $('#aq');
aq.on("click", showAqSong);
function showAqSong() {
  console.log("determining...");
  song.text (aqSongs[Math.floor(Math.random()*aqSongs.length)]);
}
var aqSongs = ["The Outside",
"The Way I Loved You",
"Mine",
"Holy Ground",
"This Love",
"So It Goes..."
];

//for Pisces
var p = $('#p');
p.on("click", showPSong);
function showPSong() {
  console.log("determining...");
  song.text (pSongs[Math.floor(Math.random()*pSongs.length)]);
}
var pSongs = ["Tim McGraw",
"Love Story",
"If This Was a Movie",
"Red",
"Wildest Dreams",
"Call It What You Want"
];

//for Aries
var ar = $('#ar');
ar.on("click", showArSong);
function showArSong() {
  console.log("determining...");
  song.text (arSongs[Math.floor(Math.random()*arSongs.length)]);
}
var arSongs = ["Our Song",
"Fearless",
"Speak Now",
"I Almost Do",
"New Romantics",
"Getaway Car"];

//for Taurus
var t = $('#t');
t.on("click", showTSong);
function showTSong() {
  console.log("determining...");
  song.text (tSongs[Math.floor(Math.random()*tSongs.length)]);
}
var tSongs = ["Stay Beautiful",
"Fifteen",
"Back To December",
"Begin Again",
"I Know Places",
"New Year's Day"];

//for Gemini
var g = $('#g');
g.on("click", showGSong);
function showGSong() {
  console.log("determining...");
  song.text (gSongs[Math.floor(Math.random()*gSongs.length)]);
}
var gSongs = ["I'm Only Me When I'm With You",
"Hey Stephen",
"Better Than Revenge",
"Stay Stay Stay",
"Blank Space",
"Dancing With Our Hands Tied"];

//for Cancer
var can = $('#can');
can.on("click", showCanSong);
function showCanSong() {
  console.log("determining...");
  song.text (canSongs[Math.floor(Math.random()*canSongs.length)]);
}
var canSongs = ["Tied Together With a Smile",
"The Best Day",
"Long Live",
"The Moment I Knew",
"I Wish You Would",
"Delicate"
];

//for leo
var leo = $('#leo');
leo.on("click", showLeoSong);
function showLeoSong() {
  console.log("determining...");
  song.text (leoSongs[Math.floor(Math.random()*leoSongs.length)]);
}
var leoSongs = ["Teardrops On My Guitar",
"You Belong With Me",
"Mean",
"22",
"How You Get the Girl",
"Look What You Made Me Do"
];

//for Virgo
var v = $('#v');
v.on("click", showVSong);
function showVSong() {
  console.log("determining...");
  song.text (vSongs[Math.floor(Math.random()*vSongs.length)]);
}
var vSongs = ["I'd Lie",
"Superstar",
"Never Grow Up",
"Everything Has Changed",
"You Are In Love",
"Gorgeous"
];

//for Libra
var li = $('#li');
li.on("click", showLiSong);
function showLiSong() {
  console.log("determining...");
  song.text (liSongs[Math.floor(Math.random()*liSongs.length)]);
}
var liSongs = ["Should've Said No",
"Forever and Always",
"Ours",
"All Too Well",
"Shake It Off",
"This Is Why We Can't Have Nice Things"
];

// for Scorpio
var sc = $('#sc');
sc.on("click", showScSong);
function showScSong() {
  console.log("determining...");
  song.text (scSongs[Math.floor(Math.random()*scSongs.length)]);
}
var scSongs = ["Cold As You",
"The Other Side of the Door",
"Enchanted",
"Sad Beautiful Tragic",
"Style",
"Dress"
];

//for Sagittarius
var sa = $('#sa');
sa.on("click", showSaSong);
function showSaSong() {
  console.log("determining...");
  song.text (saSongs[Math.floor(Math.random()*saSongs.length)]);
}
var saSongs = ["A Place In This World",
"Jump Then Fall",
"Sparks Fly",
"Starlight",
"Welcome to New York",
"End Game"
];

//for Capricorn
var cap = $('#cap');
cap.on("click", showCapSong);
function showCapSong() {
  console.log("determining...");
  song.text (capSongs[Math.floor(Math.random()*capSongs.length)]);
}
var capSongs = ["Picture to Burn",
"Come In With the Rain",
"Dear John",
"Treacherous",
"All You Had to Do Was Stay",
"King of My Heart"
];
