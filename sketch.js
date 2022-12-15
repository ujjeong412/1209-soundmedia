let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4
var jumpButton;
var a=0;
var b=0;
var c=0;
var d=0;
let amp;
var rB;
let music;

let vol;



function setup()
{
    createCanvas(640, 480);
    soundFormats('mp3', 'ogg');
    musicFile = loadSound('music', loadMusic);
    musicFile2 = loadSound('music2', loadMusic);

    button = createButton("play");
    button.mousePressed(togglePlaying1);

    button2 = createButton("Music1");
    button2.mousePressed(togglePlaying2);
    music = 1;

    button4 = createButton("-10(s)");
    button4.mousePressed(togglePlaying4);

    button10 = createButton("-5(s)");
    button10.mousePressed(togglePlaying10);

    button9 = createButton("+5(s)");
    button9.mousePressed(togglePlaying9);


    button3 = createButton("+10(s)");
    button3.mousePressed(togglePlaying3);

    button11 = createButton("+15(s)");
    button11.mousePressed(togglePlaying11);

    button5 = createButton("Volume Up");
    button5.mousePressed(togglePlaying5);

    button6 = createButton("Volume Down");
    button6.mousePressed(togglePlaying6);

    button7 = createButton("rate Up");
    button7.mousePressed(togglePlaying7);

    button8 = createButton("rate Down");
    button8.mousePressed(togglePlaying8);

    amp = new p5.Amplitude();
    vol = 0.5;
}
function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // musicFile.jump(200);
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(vol);
            musicFile.rate(1);
            musicFile.play();
            button.html('pause');
        }else{
            musicFile.stop();
            button.html('play');
        }
    }
    if(music === 2){
        if(!musicFile2.isPlaying()){
            // rB=musicFile.reverseBuffer();
            // musicFile2.jump(200);
            musicFile.setVolume(vol);
            musicFile.rate(1);
            musicFile2.play();
            button.html('pause');
        }else{
            musicFile2.stop();
            button.html('play');
        }
    }
 }
 function togglePlaying2(){
    if(music === 1){
        music = 2;
        button2.html('Music2');
    }else{
        music = 1;
        button2.html('Music1');
    }
    // console.log(music);
 }

 function togglePlaying3(){
    if(music === 1){
        a=a+10;
        musicFile.jump(a);
    }
    if(music === 2){
        b=b+10;
        musicFile2.jump(b);
    }
 }

 function togglePlaying4(){
    if(music === 1){
        a=a-10;
        musicFile.jump(a);
    }
    if(music === 2){
        b=b-10;
        musicFile2.jump(b);
    }
 }

 
 function togglePlaying5(){
    vol = vol + 0.1;
    if(vol >= 1){
        vol = 1;
    }
    console.log(vol);
    musicFile.setVolume(vol);
    musicFile2.setVolume(vol);
 }

 function togglePlaying6(){
    vol = vol - 0.1;
    if(vol <= 0){
        vol = 0;
    }
    console.log(vol);
    musicFile.setVolume(vol);
    musicFile2.setVolume(vol);
 }

 function togglePlaying7(){
    if(music ===1){
        c = c+1;
        musicFile.rate(c);
    }
    if(music ===2){
        d = d+1;
        musicFile2.rate(d);
    }

 }

 function togglePlaying8(){
    if(music ===1){
        c = c-1;
        musicFile.rate(c);
    }
    if(music ===2){
        d = d-1;
        musicFile2.rate(d);
    }

 }

 function togglePlaying9(){
    if(music === 1){
        a=a+5;
        musicFile.jump(a);
    }
    if(music === 2){
        b=b+5;
        musicFile2.jump(b);
    }
 }

 function togglePlaying10(){
    if(music === 1){
        a=a-5;
        musicFile.jump(a);
    }
    if(music === 2){
        b=b-5;
        musicFile2.jump(b);
    }
 }

 function togglePlaying11(){
    if(music === 1){
        a=a+15;
        musicFile.jump(a);
    }
    if(music === 2){
        b=b+15;
        musicFile2.jump(b);
    }
 }




function loadMusic()
{
    // console.log("It's Working");
}

function draw(){
    console.log(a);
// console.log(amp.getLevel(), musicFile.duration());
// console.log(amp.getLevel(), musicFile2.duration());


if(music === 1){
    fill(255, 0, 0);
    ellipse(musicFile.currentTime()*20,480-amp.getLevel()*3000, 20, 20);
}
if(music === 2){
    fill(0, 0, 255);
    rect(musicFile2.currentTime()*20,480-amp.getLevel()*1000, 20, 20);
}
}
// ellipse(musicFile.currentTime()*20,480-amp.getLevel()*3000, 20, 20);
// rect(musicFile2.currentTime()*20,480-amp.getLevel()*3000, 20, 20);

