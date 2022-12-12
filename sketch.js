let musicFile;
let musicFile2;
let button;
let button2;
let button3;
let button4
var jumpButton;
var a=0;
var b=0;
let amp;
var rB;
let music;

let vol; //신규 변수

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
    vol =0.5; //신규 변수
}
function togglePlaying1(){
    if(music === 1){
        if(!musicFile.isPlaying()){
            // musicFile.jump(200);
            // rB=musicFile.reverseBuffer();
            musicFile.setVolume(vol); //처음에 숫자로 세팅하니까 더하기 빼기가 동작을 못함
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
            musicFile.setVolume(vol);//처음에 숫자로 세팅하니까 더하기 빼기가 동작을 못함
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

 function togglePlaying5(){ //이 버튼이 그냥 전체 볼룸을 컨트롤 하게 바꿔줌
    
    vol = vol + 0.1; //볼륨 더하기
    if(vol >= 1){  //볼륨이 1이 넘어가면 그냥 몽땅 1로 처리
        vol = 1;
    }
    console.log(vol);
    musicFile.setVolume(vol); //음악파일 둘다 변수 vol이 관여, 이 경우 음악을 바꾸면 원래 음악의 볼륨이 그대로 적용됨
    musicFile2.setVolume(vol); //음악파일 둘다 변수 vol이 관여, 이 경우 음악을 바꾸면 원래 음악의 볼륨이 그대로 적용됨
 }
 function togglePlaying6(){ //이 버튼이 그냥 전체 볼룸을 컨트롤 하게 바꿔줌

    vol = vol - 0.1; //볼륨 빼기
    if(vol <= 0){   //볼륨이 0이 넘어가면 그냥 몽땅 0로 처리
        vol = 0;
    }
    console.log(vol);
    musicFile.setVolume(vol); //음악파일 둘다 변수 vol이 관여, 이 경우 음악을 바꾸면 원래 음악의 볼륨이 그대로 적용됨
    musicFile2.setVolume(vol); //음악파일 둘다 변수 vol이 관여, 이 경우 음악을 바꾸면 원래 음악의 볼륨이 그대로 적용됨
 }

 function togglePlaying7(){
    if(music ===1){
        a = a+1;
        musicFile.rate(a);
    }
    if(music ===2){
        b = b+1;
        musicFile2.rate(b);
    }

 }

 function togglePlaying8(){
    if(music ===1){
        a = a-1;
        musicFile.rate(a);
    }
    if(music ===2){
        b = b-1;
        musicFile2.rate(b);
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

