<?php

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


$sql = "SELECT * FROM leaderboard ORDER BY score DESC";
$result = $conn->query($sql);

echo "<table id='leaderboard'>";
echo "<tr><th>Name</th><th>Score</th></tr>";
do {
    echo "<tr>";
    $row = $result->fetch_assoc();
    if($row) {
        echo "<td>".$row['name']."</td><td>".$row['score']."</td>";
    } else {
        echo "</tr>";
    }
} while($row);
echo "</table>";

$conn->close();
?>