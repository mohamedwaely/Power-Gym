<?php
header('Content-Type: application/json');

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "newgym";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Login user
$T_Name = $_POST['T_Name'];
$Pass = $_POST['Pass'];

$sql = "SELECT * FROM members WHERE T_Name='$T_Name' AND Pass='$Pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(array("message" => "Login successful"));
} else {
    echo json_encode(array("error" => "Invalid username or password"));
}

$conn->close();
?>