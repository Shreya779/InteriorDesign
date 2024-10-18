<?php
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

// Set user_id
$user_id = 1;

echo "Form submitted.";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "Form method is POST.";
    
    // Get form data
    $width = isset($_POST["width"]) ? $_POST["width"] : "";
    $length = isset($_POST["length"]) ? $_POST["length"] : "";
    $sofa_type = isset($_POST["sofa-type"]) ? $_POST["sofa-type"] : "";
    $furniture = isset($_POST["living-area-furniture"]) ? implode(",", $_POST["living-area-furniture"]) : ""; // Corrected variable name
$lighting = isset($_POST["living-area-lighting"]) ? implode(",", $_POST["living-area-lighting"]) : ""; // Corrected variable name
    $paint = isset($_POST["paint-type"]) ? $_POST["paint-type"] : ""; // Corrected variable name

    echo "Width: " . $width . "<br>";
    echo "Length: " . $length . "<br>";
    echo "Sofa type: " . $sofa_type . "<br>";
    echo "Furniture type: " . $furniture . "<br>";
    echo "Lighting type: " . $lighting . "<br>";
    echo "Paint type: " . $paint . "<br>";


    // Prepare and bind statement
    $stmt = $conn->prepare("INSERT INTO form_bedroom_room (user_id, width, length, bed_type, furniture, flooring, paint) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("iiissss", $user_id, $width, $length, $sofa_type, $furniture, $lighting, $paint); // Updated bind parameters

    // Execute statement
    if ($stmt->execute()) {
        echo "Data inserted successfully!";
        // header("Location: summary_page.php");
        exit();
    } else {
        // Log error
        error_log("Error: " . $stmt->error);
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Form not submitted.";
}
?>
