


{//ここから神経衰弱
var cardCase=[];
var countf=true;
var time;

var timerFlg=false;
var timerFlg2=false;

var titleMcflg=false;
var titleMcflg2=false;
var titleMcflg3=false;


var irohaflg=false;
var kaguyaflg=false;
var shianflg=false;

var lastFlg=true;
var cardss;
var cardss2;
var soimgArr=[];
var co;
var sound;
var startT;
var cardIn=0;
var text;
var classname;

var newtime=[];
var newtime2=[];
var newtime3=[];


var lastFlg2=true;
var lastFlg3=true;

var images=[];
var images2=[];
var images3=[];

var soundArr=[
  'voice/iroha1.mp3',
  'voice/iroha2.mp3',
  'voice/iroha3.mp3',
  'voice/iroha4.mp3',
  'voice/iroha5.mp3',
  'voice/iroha6.mp3',
  'voice/iroha7.mp3',
  'voice/iroha8.mp3',
  'voice/iroha9.mp3',
  'voice/iroha10.mp3',
  'voice/iroha11.mp3',
  'voice/iroha12.mp3',
  'voice/iroha13.mp3',
  'voice/iroha14.mp3',
  'voice/iroha15.mp3',
  'voice/iroha16.mp3',
  'voice/iroha17.mp3',
  'voice/iroha18.mp3',
  'voice/iroha19.mp3',
  'voice/iroha20.mp3'
];

var kaguyaSE=[
  'voice/kaguya1.mp3',
  'voice/kaguya2.mp3',
  'voice/kaguya3.mp3',
  'voice/kaguya4.mp3',
  'voice/kaguya5.mp3',
  'voice/kaguya6.mp3',
  'voice/kaguya7.mp3',
  'voice/kaguya8.mp3',
  'voice/kaguya9.mp3',
  'voice/kaguya10.mp3',
  'voice/kaguya11.mp3',
  'voice/kaguya12.mp3',
  'voice/kaguya13.mp3',
  'voice/kaguya14.mp3',
  'voice/kaguya15.mp3',
  'voice/kaguya16.mp3',
  'voice/kaguya17.mp3',
  'voice/kaguya18.mp3',
  'voice/kaguya19.mp3',
  'voice/kaguya20.mp3'
];

var shianSE=[
  "voice/shian1.wav",
  "voice/shian2.wav",
  "voice/shian3.wav",
  "voice/shian4.wav",
  "voice/shian5.wav",
  "voice/shian6.wav",
  "voice/shian7.wav",
  "voice/shian8.wav",
  "voice/shian9.wav",
  "voice/shian10.wav",
  "voice/shian11.wav",
  "voice/shian12.wav",
  "voice/shian13.wav",
  "voice/shian14.wav",
  "voice/shian15.wav",
  "voice/shian16.wav",
  "voice/shian17.wav",
  "voice/shian18.wav",
  "voice/shian19.wav",
  "voice/shian20.wav"
];
const soundoj=new Audio();

const shianSound=document.getElementById('shianSound');
const shianvoice=document.getElementById('shianvoice');
var playlistC;

const finishBtn3=document.getElementById('finish3');

finishBtn3.addEventListener('click',function(){
  endSE.src=endBGM[2];
  endSE.load();
  endSE.loop=true;
  endSE.play();

  shianSound.addEventListener('click',()=>{
    endSE.pause();
    soundoj.pause();
    playlistC=0;

    soundoj.src=shianSE[playlistC];
    soundoj.play();

    soundoj.addEventListener('ended',()=>{
      playlistC++;
      soundoj.src=shianSE[playlistC];
      soundoj.play();
    });
  });

  shianvoice.addEventListener('click',()=>{
    soundoj.pause();
    endSE.play();
  });

$(function(){
  $('#cardnone').slideUp(1000);
  $('#finish3').hide();
  $('#shianResult').slideDown(1000);
  $('.close').remove();
});
});
//ここまでシアン
const finishBtn2=document.getElementById('finished');
const kaguyaSound=document.getElementById('kaguyaSound');
const kaguyavoice=document.getElementById('kaguyavoice');

//かぐや
finishBtn2.addEventListener('click',function(){
  endSE.src=endBGM[1];
  endSE.load();
  endSE.loop=true;
  endSE.play();

  irohaSound.addEventListener('click',()=>{
    const kagS=new Audio();
    endSE.pause();
    kagS.pause();
    playlistC=0;

    kagS.src=kaguyaSE[playlistC];
    kagS.play();

    kagS.addEventListener('ended',()=>{
      playlistC++;
      kagS.src=kaguyaSE[playlistC];
    kagS.play();
    });
  });

  kaguyavoice.addEventListener('click',()=>{
    kagS.pause();
    endSE.play();
  });

$(function(){
  $('#cardnone').slideUp(1000);
  $('#finished').hide();
  $('#kaguyaResult').slideDown(1000);
  $('.close').remove();
});
});
//ここまでかぐや


const finishBtn=document.getElementById('finish');
const irohaSound=document.getElementById('irohaSound');
const irohavoice=document.getElementById('irohavoice');

finishBtn.addEventListener('click',function(){

  endSE.src=endBGM[0];
  endSE.load();
  endSE.loop=true;
  endSE.play();

  irohaSound.addEventListener('click',()=>{
    const iroS=new Audio();
    endSE.pause();
    iroS.pause();
    playlistC=0;

    iroS.src=soundArr[playlistC];
    iroS.play();

    iroS.addEventListener('ended',()=>{
      playlistC++;
      iroS.src=soundArr[playlistC];
    iroS.play();
    });
  });

  irohavoice.addEventListener('click',()=>{
    iroS.pause();
    endSE.play();
  });

$(function(){
  $('#cardnone').slideUp(1000);
  $('#finish').hide();
  $('#irohaResult').slideDown(1000);
  $('.close').remove();
});
});


for(var iij=1;iij<=20;iij++){
  images.push(iij);
  images2.push(iij);
  images3.push(iij);
}


const timeI=document.getElementById('timeI');
const timeK=document.getElementById('timeK');
const timeS=document.getElementById('timeS');


const titleBtn=document.getElementById('titleBtn');
const cardBox=document.getElementById('cardBox');

const titleMc=new Audio('harumodoki.mp3');
const endSE=new Audio();
var endBGM=['megumi.mp3','kaguya.mp3','tiruno.wav'];


//ここからいろは編
$('.iroha').on('click',function(){

  classname="defaulut";
  kaguyaflg=false;
  irohaflg=true;

  pageEffect();

  if(titleMcflg2){
    endSE.pause();
    endSE.currentTime=0;
  }

  if(titleMcflg) titleMc.pause();

  sample1(classname);
  shuffle2(soundArr,images);//ここに使う音声画像を入れる
});
//ここまでいろは編

//ここからかぐや編
$('.kaguya').on('click',function(){

  classname="kaguyaBack";
  kaguyaflg=true;
  irohaflg=false;

  if(titleMcflg2){
    endSE.pause();
    endSE.currentTime=0;
  }
  pageEffect();

  if(titleMcflg) titleMc.pause();

  sample1(classname);
  shuffle2(kaguyaSE,images2);
});//かぐや編onclick

//ここからオールスター編
$('.shian').on('click',function(){

  classname="shianBack";
  kaguyaflg=false;
  irohaflg=false;
  shianflg=true;

  pageEffect();

  if(titleMcflg2){
    endSE.pause();
    endSE.currentTime=0;
  }

  if(titleMcflg) titleMc.pause();

  sample1(classname);
  shuffle2(shianSE,images3);//ここに使う音声画像を入れる
});


function pageEffect(){
$(function(){
  $('#resultWp').hide();
  $('#kaguyaResult').hide();
  $('#irohaResult').hide();
  $('#shianResult').hide();
  $('#cardnone').fadeIn(1000);
  $('h4').show();
});
}



//div作成のための関数
function sample1(classname){

var arr=[];
for(var i=0;i<10;i++){
  //2組の数値を同じ配列に代入
  arr.push(i);
  arr.push(i);
  //0~9が2つずつある状態計20個
}
shuffl(arr);//ナンバーシャッフル

//div生成
for(var i=0;i<20;i++){6
const div=document.createElement('div');
div.className="card";//最初は裏
div.classList.add(classname);
div.index=i;
div.number=arr[i];
//soundとdiv.numberは対応している
div.innerHTML="";
div.addEventListener('click',turn);

cardBox.appendChild(div);
cardCase.push(div);
}
startT=new Date();
timestart();
}
//ここまでsample1

//ここから共通スタート画面
titleBtn.addEventListener('click',function(){
  $(function(){
    $('#firstDisplays').fadeOut(500);
    $('#resultWp').fadeIn(2000);

    $(window).scroll(function(){
      $('.effect').each(function(){
        var zahyou=$(this).offset().top;
        var scleantop=$(window).scrollTop();
        var windowheight=$(window).height();
        if(scleantop > zahyou - windowheight + 200){
          $(this).addClass('effect-scroll');
        }
      });
    });
  });

setTimeout(function(){

titleMc.load();
  titleMc.loop=true;
  titleMc.play();
  titleMcflg=true;
},500);
});

  //配列シャッフル　かぐや編でも使用
function shuffle2(soundArr,images){

  soimgArr.splice(0,2);
  var n2=soundArr.length;
  var j2,temp2;

  while(n2){//n2は10
  j2=Math.floor(Math.random()*n2--);
  temp2=soundArr[n2];
  soundArr[n2]=soundArr[j2];
  soundArr[j2]=temp2;

  temp2=images[n2];
  images[n2]=images[j2];
  images[j2]=temp2;
}
 soimgArr.push(soundArr,images);
 return soimgArr;
}

function shuffl(arr){
  var n=arr.length;
  var j,temp;
  while(n){//20回繰り返す

  j=Math.floor(Math.random()*n--);//nを1減らす
temp=arr[n];//元の19～0番目の値が順にtempに入る。
arr[n]=arr[j];//元の配列0～19番目(ランダム)の値を順に代入
  arr[j]=temp;//元の0番目、1番目...をランダムj位置に代入
}
return arr;//元の値がランダムに入っている。
}//シャッフル終了





//かぐや編でも使う
function turn(e){
var div=e.target;


if(irohaflg){
  text="bg";
}else if(kaguyaflg){
  text="bgk";
}else if(soimgArr[0][div.number] == "voice/shian14.wav"){
  text="bgs14";
}else{
  text="bgs";
}

if(timerFlg) return;

if(timerFlg2){
  cardss2.className="card";
  cardss2.classList.add(classname);
  cardss2.innerHTML="";
  cardss.className="card";
  cardss.classList.add(classname);
  cardss.innerHTML="";
  timerFlg2=false;
}

  if(co === 1){
     sound.pause();
   }

  if(div.innerHTML == ""){
    if(shianflg){
      div.classList.add(text);
      div.classList.remove(classname);
      div.innerHTML=div.number;
    }else{
      div.classList.add(text + soimgArr[1][div.number]);
      div.classList.remove(classname);
      div.innerHTML=div.number;
    }//もし裏なら

  sound=new Audio(soimgArr[0][div.number]);
  sound.play();

  co=1;
  //その数字になる
    }else{
      return;
    }
    //1回目とか関係なくあくまで裏かどうかのみ
  if(countf){ //初めて引いた
    cardss=div; //1回目に引いたカード(numberやindexは.を付ける)
    countf=false;

  }else{ //2回目

    if(cardss.number == div.number){

      cardIn++;
      cardss2=div;
      timerFlg=true;


        sound.addEventListener('ended',function(){

          if(cardIn === 10){

            $(function(){
              $('h4').hide();
            });

            if(irohaflg){

              skindevelop(timearr,lastFlg,timeI,newtime);

              $(function(){
                $('#finish').fadeIn();
              });

          }else if(kaguyaflg){
            var timearr2=[];

            timearr2.push((timearr[0]));
            timearr2.push((timearr[1]));
            timearr2.push((timearr[2]));
            timearr2.push((timearr[3]));

            skindevelop(timearr2,lastFlg2,timeK,newtime2);

            $(function(){
              $('#finished').fadeIn();
            });
          }else{
            var timearr3=[];

            timearr3.push((timearr[0]));
            timearr3.push((timearr[1]));
            timearr3.push((timearr[2]));
            timearr3.push((timearr[3]));

            skindevelop(timearr3,lastFlg3,timeS,newtime3);

            $(function(){
              $('#finish3').fadeIn();
            });
          }
            cardIn=0;
            titleMcflg2=true;
          }
          cardss2.className="card close";
          cardss.className="card close";
          timerFlg=false;
        });

    }else{ //2回目で外れ 裏に戻す作業
      cardss2=div;
      timerFlg2=true;

      sound.addEventListener('ended',function(){

      cardss2.className="card";
      cardss2.classList.add(classname);
      cardss2.innerHTML="";
      cardss.className="card";
      cardss.classList.add(classname);
      cardss.innerHTML="";
      timerFlg2=false;
    });
  }
  countf=true;
}
}
}//turn()の終了
//ここまで神経衰弱

//タイムの比較
const record=document.getElementById('record');
const record2=document.getElementById('record2');
const record3=document.getElementById('record3');


function skindevelop(timearr,flg,times,newtime){

record.className='new-record-none';
record2.className='new-record-none';
record3.className='new-record-none';


clearInterval(time);
times.innerHTML='CLEAR! '+ timearr[3];

if(flg){
  newtime.push(timearr[0]);
  newtime.push(timearr[1]);
  newtime.push(timearr[2]);
}

if(newtime[0] > timearr[0]){
  newRecord(timearr,newtime);
}
if(newtime[0] === timearr[0]){
  if(newtime[1] > timearr[1]){
    newRecord(timearr,newtime);
  }
}

if(newtime[0] === timearr[0]){
  if(newtime[1] === timearr[1]){
    if(newtime[2] > timearr[2]){
      newRecord(timearr,newtime);
    }
  }
}
flg=false;
}

//オールスターサウンド


//タイム更新と配列削除追加
function newRecord(timearr,newtime){
  record.className='newRecords';
  record2.className='newRecords';
  record3.className='newRecords';


timeI.innerHTML=timearr[3];
timeK.innerHTML=timearr[3];
timeS.innerHTML=timearr[3];


newtime.splice(0,3);
newtime.push(timearr[0]);
newtime.push(timearr[1]);
newtime.push(timearr[2]);
}

//タイマー
var timing=new Date();
var Ms;
var myT;
var str;
var timearr=[];
const h4=document.querySelector('h4');

function timestart(){

time=setInterval(function(){
  timearr=[];

  timing=new Date();//現在の時間に更新している

myT=Math.floor((timing.getTime() - startT.getTime()));
//現在ースタート時
var M=Math.floor(myT/(1000*60));
myT=myT - (M*60*1000);
var S=Math.floor(myT/1000);
Ms=myT%1000;

var md=M;
var sd=S;
var msd=Ms;

str=h4.innerHTML='TIME '+ M + ':' + S + ':' + Ms;
timearr.push(md,sd,msd,str);

return timearr;
},1);
}
