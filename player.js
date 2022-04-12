
    startplayer();

var player;

// const volume = document.getElementById('xdxd');

function startplayer() {
  player = document.getElementById("video_player");
  player.controls = false;
}
function play_vid() {
  player.play();
}
function pause_vid() {
  player.pause();
}
function stop_vid() {
  player.pause();
  player.currentTime = 0;
}
function change_vol() {
  player.volume = document.getElementById("change_vol").value;
}



var commands = [
    {
        indexes: ["play"],
        action: function(){
            console.log('play');
            play_vid();
        }
    },
    {
        indexes: ["pause"],
        action: function(){
            console.log('pause');
            pause_vid();
        }
    },
    {
        indexes: ["stop"],
        action: function(){
            console.log('stop');
            stop_vid();
        }
    }
];

var artyom = new Artyom();

artyom.addCommands(commands);



artyom.initialize({
    lang:"en-GB",
    debug:true, // Show what recognizes in the Console
    listen:true, // Start listening after this
    speed:1.5, // Talk a little bit slow
    continuous:true,
    mode:"normal" // This parameter is not required as it will be normal by default
});