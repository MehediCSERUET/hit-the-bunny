<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Hit The Bunny</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Md. Mehedi Hasan, Email: mmehedihasann@gmail.com">
        <meta name="keywords" content="Hit the bunny, hit the rabbit, online interesting game, simple game, web application">
        <meta name="description" content="This is a simple game based on HTML5, CSS3 and Javascript. This is an interesting game which works by simply clicking on the bunny when it appears. You score 5 points if you can click it. If you fail to click the bunny 3 times in a row, the game reloads.">
        <link rel="icon" type="image/png" href="image/life.png">
        
        
        <link rel="stylesheet" href="../bootstrap-3.3.7-dist/css/bootstrap.min.css">
        <script src="../bootstrap-3.3.7-dist/js/jquery-3.2.1.min.js"></script>
        <script src="../bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>
    
        <style>
            #submit {
                border-radius: 20px;
                background-color: lightcyan;
                color: black;
            }
            p {
                font-family: monospace, cursive, sans-serif;
                color: chartreuse;
                font-size: 150%;
            }
        </style>
        <script>
            $(document).ready(function(){
                $('#myModal').modal('show');
            });
        </script>
    </head>
<body>
<div class="container">

  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h1 class="modal-title">Enter Your Name</h1>
        </div>
        <div class="modal-body">
          
        <p>Looks like you kicked the last record holder out of the table!!! <br> Please Enter your name to secure your posistion in the board.</p>
        <form method="post" action="checkScore.php">
            <input type="text" name="username" placeholder="Your Name" autofocus>
            <input id="submit" type="submit" value="Enter Name">
        </form>
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>
</body>
</html>