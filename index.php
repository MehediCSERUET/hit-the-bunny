<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hit The Bunny</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Md. Mehedi Hasan, Email: mmehedihasann@gmail.com">
        <meta name="keywords" content="Hit the bunny, hit the rabbit, online interesting game, simple game, web application">
        <meta name="description" content="This is a simple game based on HTML5, CSS3 and Javascript. This is an interesting game which works by simply clicking on the bunny when it appears. You score 5 points if you can click it. If you fail to click the bunny 3 times in a row, the game reloads.">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="icon" type="image/png" href="image/life.png">
    </head>
    
    <body onload="checkCookie()">
       
       <div id="leadtable">
              <?php include("php/table.php"); ?>
       </div>
       
        <div class="main">
            <div class="a"><img  id="1" onclick="counter1()" src="image/hide.jpg" alt="bunny"></div>
            <div class="b"><img  id="2" onclick="counter2()" src="image/hide.jpg" alt="bunny"></div>
            <div class="c"><img  id="3" onclick="counter3()" src="image/hide.jpg" alt="bunny"></div>
            <div class="d"><img  id="4" onclick="counter4()" src="image/hide.jpg" alt="bunny"></div>
            <div class="e"><img  id="5" onclick="counter5()" src="image/hide.jpg" alt="bunny"></div>
            <div class="f"><img  id="6" onclick="counter6()" src="image/hide.jpg" alt="bunny"></div>
            <div class="g"><img  id="7" onclick="counter7()" src="image/hide.jpg" alt="bunny"></div>
            <div class="h"><img  id="8" onclick="counter8()" src="image/hide.jpg" alt="bunny"></div>
            <div class="i"><img  id="9" onclick="counter9()" src="image/hide.jpg" alt="bunny"></div> 
        </div>
        
        <div class="score">
            <audio loop controls id="bgs">
				<source src="music/bgs.wav">
				<source src="music/bgs.mp3">
				<source src="music/bgs.ogg">
			</audio>
			
            <h3>Your Score:<p id="no">0</p></h3>
            <audio id="play">
				<source src="music/sound.wav">
				<source src="music/sound.mp3">
				<source src="music/sound.ogg">
			</audio>
			
            <audio id="error">
				<source src="music/error.wav">
				<source src="music/error.mp3">
				<source src="music/error.ogg">
			</audio>
            <h3>Highest Score: <h3 id="highscore">0</h3></h3>
            <h3 id="lifeRemain">Life Remains: 
							  <img id="life1" src="image/life.png" alt="life">
                              <img id="life2" src="image/life.png" alt="life">
                              <img id="life3" src="image/life.png" alt="life"> 
            </h3>
            
            <button id="reload" onclick="reload()">Restart Game</button>
        </div>
        
        <!--invisible form
        <form id="sampleForm" name="sampleForm" method="post" action="php/checkScore.php">
            <input type="hidden" name="total" id="total" value="">
        </form>
        !-->
        
        <script src="js/script.js"></script>
        
    </body>
</html>