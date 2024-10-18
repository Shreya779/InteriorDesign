<?php
// Step 1: Database Connection
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'wt_cp';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Step 2: Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Step 3: Get and validate form data
$formData = [
    'username' => isset($_POST['username']) ? htmlspecialchars(trim($_POST['username'])) : '',
    'phone_number' => isset($_POST['phone_number']) ? htmlspecialchars(trim($_POST['phone_number'])) : '',
    'address' => isset($_POST['address']) ? htmlspecialchars(trim($_POST['address'])) : '',
    'gender' => isset($_POST['gender']) ? htmlspecialchars(trim($_POST['gender'])) : '',
    'email' => isset($_POST['email']) ? filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) : '',
    'age' => isset($_POST['age']) ? intval($_POST['age']) : 0,
    'date_of_birth' => isset($_POST['date_of_birth']) ? htmlspecialchars(trim($_POST['date_of_birth'])) : '',
    'password' => isset($_POST['password']) ? $_POST['password'] : '', // Get raw password from form
];

// Hash the password using a strong algorithm
$hashedPassword = password_hash($formData['password'], PASSWORD_BCRYPT);

// Step 4: Use prepared statements for insertion
$sql = "INSERT INTO users (username, phone_number, address, gender, email, age, date_of_birth, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if ($stmt) {
    // Step 5: Bind parameters and execute
    $stmt->bind_param(
        'sssssiss', // Corrected type definition to match 8 variables
        $formData['username'], 
        $formData['phone_number'], 
        $formData['address'], 
        $formData['gender'], 
        $formData['email'], 
        $formData['age'], 
        $formData['date_of_birth'], 
        $hashedPassword  // Hashed password added as last variable
    );

    if ($stmt->execute()) {
        echo "New record created successfully";
        header("Location: index.html");
    } else {
        echo "Error: " . $stmt->error;
    }
    
    $stmt->close();
} else {
    echo "Error preparing statement: " . $conn->error;
}

// Step 6: Close the connection
$conn->close();
?>
