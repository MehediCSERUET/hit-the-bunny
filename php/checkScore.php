<body>
 <?php
  //  echo "test\n";
    SESSION_START();
    //getting score using get method
    if (isset($_GET["score"]))
    {
        $score = $_GET["score"]; 
        $_SESSION['score'] = $score;
    }
    else $score = $_SESSION['score'];

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "game";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    
    if (isset($_GET["score"])){
        $conn->query("DELETE FROM temp"); //deleting everthing from temp
        $conn->query("INSERT INTO temp SELECT * FROM leaderboard ORDER BY score ASC"); //inserting sorted values
        $conn->query("DELETE FROM leaderboard");  //deleting unsorted leaderboard table
        $conn->query("INSERT INTO leaderboard SELECT * FROM temp");  //populating leaderboard table with sorted data
    }
    //fetching score column
    $sql = "SELECT id, score FROM leaderboard";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();

    $minScore = $row['score'];
    $id = $row['id'];

    if($score > $minScore){
        if (isset($_GET["score"]))
        {
            header('location: nameForm.php');
        }
        $name=$_POST['username'];
        //echo $name;
        //$name = mysqli_real_escape_string($conn ,$n);
        if(isset($name))
            $conn->query("UPDATE leaderboard SET name='$name', score='$score' WHERE id='$id'");
    } else {
        header('location: ../index.php');
    }
?>
          
    <script>
        function redirect(){
         window.location.href='../index.php';   
        }
        redirect(); //redirect to homepage
    </script>            
</body>