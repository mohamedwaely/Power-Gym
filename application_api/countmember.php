<?php
// Database connection parameters
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "newgym";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// SQL query to count members
$sql = "SELECT COUNT(*) AS member_count FROM members";

// Execute query
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch the data
    $row = $result->fetch_assoc();
    // Return data as JSON
    header('Content-Type: application/json');
    echo json_encode($row);
} else {
    echo "No members found";
}

// Close connection
$conn->close();
?>
