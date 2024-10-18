<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Database connection
$servername = "localhost";
$username = "root"; // Change this if your MySQL username is different
$password = ""; // Change this if you have set a MySQL password
$dbname = "wt_cp";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Retrieve data from the database
$sql = "SELECT * FROM form_kitchen_room ORDER BY id DESC LIMIT 1"; // Assuming id is the primary key and auto-incremented
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Output data of the latest submission
    $row = $result->fetch_assoc();
    $width = $row["width"];
    $length = $row["length"];
    $sofa_type = $row["kitchen_type"];
    $furniture = $row["platform_tops"];
    $lighting = $row["units"];
    $paint = $row["paint"];

    // Retrieve user's name based on user_id
    $user_id = $row["user_id"];
    $sql_user = "SELECT username FROM users WHERE user_id = $user_id"; // Change "users" to your user table name
    $result_user = $conn->query($sql_user);

    if ($result_user->num_rows > 0) {
        $row_user = $result_user->fetch_assoc();
        $name = $row_user["username"];
        echo '<div style="background-color: #FADADD; text-align: center; border: 2px solid black;padding: 20px 10px;">';
        echo "<h1><center>Summary of Data</center></h1>";
        echo "<h2><center>Thank you, $name, we will get back to you soon..!!!</center></h2>";
        echo "<p><strong>Width:</strong> $width</p>";
        echo "<p><strong>Length:</strong> $length</p>";
        echo "<p><strong>Kitchen type:</strong> $sofa_type</p>";
        echo "<p><strong>Platform Tops:</strong> $furniture</p>";
        echo "<p><strong>Units Choices:</strong> $lighting</p>";
        echo "<p><strong>Paint type:</strong> $paint</p>";
        echo '<center><button style="border: 2px solid black; padding: 10px 10px;border-radius: 5px;"><center><strong><a href="index.html" style="text-decoration: none;color: black;">Return To Home</a></strong></center></button></center>';
        echo "</div>";

        
    } else {
        echo "No user found with ID: $user_id";
    }
} else {
    echo "No data found";
}

$conn->close();
?>
