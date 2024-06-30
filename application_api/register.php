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

// Register new user
$T_Name = $_POST['T_Name'];
$Email_ID = $_POST['Email_ID'];
$Phone = $_POST['Phone'];
$Pass = $_POST['Pass'];
$Sex = $_POST['Sex'];

$sql = "INSERT INTO members (T_Name, Email_ID, Phone, Pass, Sex) VALUES ('$T_Name', '$Email_ID', '$Phone', '$Pass', '$Sex')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(array("message" => "User registered successfully"));

} else {
    echo json_encode(array("error" => "Error: " . $sql . "<br>" . $conn->error));
}

$conn->close();
?>