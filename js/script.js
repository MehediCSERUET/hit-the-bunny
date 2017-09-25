//cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}    
function checkCookie() {
    var highScore=getCookie("score");
    if (highScore != "") {
        document.getElementById("highscore").innerHTML = ""+highScore;
    } 
    //play background sound
    bgs = document.getElementById('bgs');
    bgs.play();
}

var bgs;
var clicks = 0;   //score
var random;    //choose random pic to show
var previousPic = 0;  //helps to hide te previously shown pic
var interval = 0;  //helps to hide, when it's value is 1
var failed = 0;  //how many touch were wrong
var time = 0; //how much time will be deducted i e how much faster the game will run
var level = 1; //represents level, total 3, 1: 1-200,2: 200-500,3: 500+


function randomImg() { 
    //checking score and setting level
    if (clicks <= 250)
        level = 1;
    else if( clicks > 250 && clicks < 500)
        level = 2;
    else if(clicks >= 500)
        level = 3;
    
    /* when the pic has been shown and next pic also going to be appeared, previous ine will be hidden*/
    if(interval == 1) {
        document.getElementById(''+previousPic).src = 'image/hide.jpg';
        interval = 0;
    }
	//selecting between rabbit or snake image
	bonusOrSnake = Math.floor((Math.random() * 10) + 1);
    //random number generator between 1 and 9
    random = Math.floor((Math.random() * 9) + 1);
    previousPic = random; //storing the number of pic shown a moment before
	if (bonusOrSnake < 9)
		document.getElementById(''+random).src =  'image/rabbit.jpg';  //showing the image randomly
	else if (bonusOrSnake == 9)
        document.getElementById(''+random).src = 'image/bonus.jpg';
    else if (bonusOrSnake == 10)
		document.getElementById(''+random).src = 'image/damn.png'; //showing snake image
	
    interval++; //increamenting interval, it will help hiding the image

    /* if 3 failed at consecutive time, should work but isn't working currently */
    var x = failed;
    if (x >= 3){
        var currentScore = getCookie("score");
            if(currentScore == "") {
                setCookie("score", clicks, 30);
            } else {
                if(clicks > currentScore) {
                    setCookie("score", clicks, 30);
                }
            }
        //breaking the execution
        //hiding the last shown rabbit
        document.getElementById(''+random).src = 'image/hide.jpg';
        //stopping background music
        bgs.src = '';
        return;
    } else {
         setTimeout(randomImg, 1000 - time);
      }
}
randomImg();

//setting life images
function setLife() {
    if(failed == 0) {
        document.getElementById('life1').style.visibility = "visible";
        document.getElementById('life2').style.visibility = "visible";
        document.getElementById('life3').style.visibility = "visible";
    } else if(failed == 1) {
        document.getElementById('life3').style.visibility = "hidden";
    } else if(failed == 2) {
        document.getElementById('life2').style.visibility = "hidden";
        document.getElementById('life3').style.visibility = "hidden";
    } else if(failed == 3) {
        document.getElementById('life1').style.visibility = "hidden";
        document.getElementById('life2').style.visibility = "hidden";
        document.getElementById('life3').style.visibility = "hidden";
    }
}


//restart game button
function reload() {
    //using get
    window.location.href = "php/checkScore.php?score="+clicks; //sending score to 
}

//changing image and playing click sound
function changePic(srcOfPic) {
    clicks += 5;
    document.getElementById("no").innerHTML = clicks;  //showing score
    document.getElementById(''+srcOfPic).src = 'image/hide.jpg';  //hiding the pic
    document.getElementById('play').play();  //playing click sound
    failed = 0; //clicked successfully
    SetTime(level); //updating speed of change
}
//changing image of snake 
function changeSnake(srcOfPic) {
    switch(level){
        case 1:
            clicks-=20;
            break;
        case 2:
            clicks-=35;
            break;
        case 3:
            failed=2; //eventually failed will be 3 and the game will be stopped, no negative marking
            break;
    }
    document.getElementById("no").innerHTML = clicks;  //showing score
    document.getElementById(''+srcOfPic).src = 'image/hide.jpg';  //hiding the pic
    document.getElementById('error').play();  //playing click sound
    failed++; //clicked the wrong one, if level 3, 
    SetTime(level); //updating speed of changegame end
}

//changing image of bonus 
function changeBonus(srcOfPic) {
        switch(level){
        case 1:
            clicks+=20;
            break;
        case 2:
            clicks+=35;
            break;
        case 3:
            clicks+=50;
            break;
    }
    document.getElementById("no").innerHTML = clicks;  //showing score
    document.getElementById(''+srcOfPic).src = 'image/hide.jpg';  //hiding the pic
    document.getElementById('play').play();  //playing click sound
    failed=0; //clicked successfully
    SetTime(level); //updating speed of change
}

//setting speed according to level
function SetTime(level) {
        switch(level) {
            case 1:
                time+=2; //if level 1, time will increase 2 milisec
                break;
            case 2:
                time+=3; //if level 2, time will increase 3 milisec
                break;
            case 3:
                time=400; //for level 3, time will be contant 0.5 sec
                break;
        }
}


/* function to perform click operation using numpad and number of the keyboard  */
document.addEventListener('keydown', function(e) {
    var key = e.keyCode;
    if(key == 49 || key == 97) {
        counter7();
    } else if(key == 50 || key == 98) {
        counter8();
    } else if(key == 51 || key == 99) {
        counter9();
    } else if(key == 52 || key == 100) {
        counter4();
    } else if(key == 53 || key == 101) {
        counter5();
    } else if(key == 54 || key == 102) {
        counter6();
    } else if(key == 55 || key == 103) {
        counter1();
    } else if(key == 56 || key == 104) {
        counter2();
    } else if(key == 57 || key == 105) {
        counter3();
    } else if(key == 116) {
        e.preventDefault();
        reload();  //f5 key
    }
    
});


/* Checking the clicked pic and the number and source of the pic to see if the pic clicked correctly */
function counter1() {
    var imgsrc = document.getElementById("1").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
        changePic(1);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(1);
	} else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(1);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    //now changing life images 
    setLife();
}            
function counter2() {
    var imgsrc = document.getElementById("2").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
        changePic(2);
    }else if (imgsrc == 'image/damn.png') {
		changeSnake(2);
	}else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(2);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}            
function counter3() {
    var imgsrc = document.getElementById("3").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
        changePic(3);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(3);
	}else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(3);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}            
function counter4() {
    var imgsrc = document.getElementById("4").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
        changePic(4);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(4);
	}else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(4);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}            
function counter5() {
    var imgsrc = document.getElementById("5").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
         changePic(5);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(5);
	} else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(5);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}            
function counter6() {
    var imgsrc = document.getElementById("6").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
        changePic(6);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(6);
	} else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(6);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}            
function counter7() {
    var imgsrc = document.getElementById("7").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
        changePic(7);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(7);
	} else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(7);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}            
function counter8() {
    var imgsrc = document.getElementById("8").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
         changePic(8);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(8);
	} else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(8);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}            
function counter9() {
    var imgsrc = document.getElementById("9").getAttribute("src");
    if(imgsrc == 'image/rabbit.jpg'){
         changePic(9);
    } else if (imgsrc == 'image/damn.png') {
		changeSnake(9);
	} else if (imgsrc == 'image/bonus.jpg') {
		changeBonus(9);
	} else {
        failed++;
        document.getElementById('error').play();
    }
    setLife();
}