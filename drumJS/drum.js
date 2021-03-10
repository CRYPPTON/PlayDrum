var canvas = document.getElementById('canvas_'),
context = canvas.getContext('2d');
var EO  = 0;
function effectDraw(){
    context.beginPath();
    context.font = "15px Arial";
    context.fillText("[ y ]", 288, 455);    
    context.fillText("[ x ]", 563, 455);  
    context.fillText("[ s ]", 430, 182);    
    context.fillText("[ a ]", 275, 240);  
    context.fillText("[ d ]", 583, 240);
    context.fillText("[ e ]", 430, 350);   
    context.fillText("[ c ]", 102, 500);    
    context.fillText("[ v ]", 88, 366); 
    context.fillText("[ q ]", 105, 220); 
    context.fillText("[ f ]", 780, 390);
    context.fillText("[ t ]", 670, 198); 
    context.fillText("[ g ]", 732, 192);
    context.fillText("[ w ]", 302, 128);     
    context.fillText("[ w ]", 540, 128);   
    
    context.stroke();
    
}

function drawCircleEffectCrash(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(553, 94, 70, 0, 2 * Math.PI);
    context.stroke();
}
function drawCircleEffectSplash(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(316, 90, 70, 0, 2 * Math.PI);
    context.stroke();
}
function drawCircleEffectSplashB(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(119, 169, 110, 0, 2 * Math.PI);
    context.stroke();
}
function drawCircleEffectRide(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(746, 149, 102, 0, 2 * Math.PI);
    context.stroke();
}
function drawCircleEffectRideS(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(745, 149, 30, 0, 2 * Math.PI);
    context.stroke();
}
function drawCircleEffectFloor(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(796, 360, 102, 0, 2 * Math.PI);
    context.stroke();
} 

function drawCircleEffectBassR(){
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = '#8A8E8E';
    context.arc(575, 420, 123, 1.42*Math.PI, 1.09 * Math.PI);
    context.stroke();
} 

function drawCircleEffectBassL(){
    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = '#8A8E8E';
    context.arc(301, 419, 123, 1.92 * Math.PI, 1.6 * Math.PI);
    context.stroke();
} 
function drawCircleEffectOpenH(){
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#8A8E8E';
    context.arc(113, 465, 71, 1.58 * Math.PI, 1.3599* Math.PI);
    context.stroke();
}
function drawCircleEffectCloseH(){
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = '#8A8E8E';
    context.arc(100, 324, 78, 1.77 * Math.PI, 1.32* Math.PI);
    context.stroke();
}

function drawCircleEffectTON1(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(290, 215, 79, 1.72 * Math.PI, 0.95* Math.PI);
    
    context.stroke();
    context.beginPath();
    context.arc(290, 215, 79, 1.21 * Math.PI, 1.41* Math.PI);
    context.stroke();
}
function drawCircleEffectTON2(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(444, 160, 78, 1.98 * Math.PI, 1.1* Math.PI);
    
    context.stroke();
    context.beginPath();
    context.arc(444, 160, 80, 1.23 * Math.PI, 1.67* Math.PI);
    context.stroke();
}
function drawCircleEffectTON3(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(598, 216, 78, 0.019 * Math.PI, 1.24* Math.PI);
    
    context.stroke();
    context.beginPath();
    context.arc(598, 216, 78, 1.53 * Math.PI, 1.70* Math.PI);
    context.stroke();
}

function drawCircleEffectSnare(){
    context.beginPath();
    context.lineWidth = 3;
    context.strokeStyle = '#8A8E8E';
    context.arc(444, 288, 102, 1.97 * Math.PI, 1.03* Math.PI);
    
    context.stroke();
    context.beginPath();
    context.arc(444, 288, 102, 1.713 * Math.PI, 1.75* Math.PI);
    context.stroke();

    context.stroke();
    context.beginPath();
    context.arc(444, 288, 102, 1.247 * Math.PI, 1.288* Math.PI);
    context.stroke();
}



var a = document.getElementById("audio1")
var s = document.getElementById("audio2")
var d = document.getElementById("audio3")
var q = document.getElementById("audio4")
var y = document.getElementById("audio5")
var x = document.getElementById("audio6")
var c = document.getElementById("audio7")
var v = document.getElementById("audio8")
var g = document.getElementById("audio9")
var t = document.getElementById("audio10")
var r = document.getElementById("audio11")
var f = document.getElementById("audio12")
var er = document.getElementById("audio13")
var w = document.getElementById("audio14")


window.addEventListener("keydown", function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
   // console.log("key up = " + key, e.key);
   switch (e.key) {
                case "a":
                    drawCircleEffectTON1()
                    make_base()
                    a.pause();
                    a.currentTime = 0;
                    a.play();
                   
                break;
                case "s":
                    drawCircleEffectTON2()
                    make_base() 
                    s.pause();
                    s.currentTime = 0;
                    s.play();                 
                break;
                case "d":
                    drawCircleEffectTON3() 
                    make_base() 
                    d.pause();
                    d.currentTime = 0;
                    d.play();                
                break;
                case "f":
                    drawCircleEffectFloor()
                    make_base()
                    f.pause();
                    f.currentTime = 0;
                    f.play(); 
                break;
                case "y":
                    drawCircleEffectBassL()
                    make_base() 
                    y.pause();
                    y.currentTime = 0;
                    y.play();
                    
                break;
                case "x":
                    drawCircleEffectBassR()
                    make_base() 
                    y.pause();
                    y.currentTime = 0;
                    y.play();
                    
                break;
                case "c":
                    drawCircleEffectCloseH()
                    make_base() 
                    c.pause();
                    c.currentTime = 0;
                    c.play();
                    
                break;
                case "v":
                    drawCircleEffectOpenH()
                    make_base() 
                    v.pause();
                    v.currentTime = 0;
                    v.play();
                    
                break;
                case "q":
                    drawCircleEffectSplashB()
                    make_base() 
                    q.pause();
                    q.currentTime = 0;
                    q.play();
                    
                break;
                case "w":
                    drawCircleEffectSplash()
                    make_base()
                    w.pause();
                    w.currentTime = 0;
                    w.play();
                    
                    
                break;
                case "e": 
                    drawCircleEffectSnare()
                    make_base()
                    er.pause();
                    er.currentTime = 0;
                    er.play();  
                             
                break;
                case "g":
                    drawCircleEffectRideS()
                    g.pause();
                    make_base()
                    g.currentTime = 0;
                    g.play();
                    
                break;
                case "t":
                    t.pause();
                    make_base()
                    t.currentTime = 0;
                    t.play();
                    drawCircleEffectRide()
                break;
                case "r":
                    make_base()
                    r.pause();
                    r.currentTime = 0;
                    r.play();
                    drawCircleEffectCrash()
                break;
       default:
           break;
   }
});

function showHide(){
    if(EO%2 == 0 ){
        effectDraw()
    }else{
        make_base()
    }
    EO++
}





function make_base()
{
  base_image = new Image();
  base_image.src = '/style/image2vector.svg';
  base_image.onload = function(){

    context.drawImage(base_image, 0, 0,base_image.width*2.25, base_image.height * 2.25);
    
  }
}

make_base();