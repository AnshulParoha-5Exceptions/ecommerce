<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

include 'database.php';
include 'generateToken.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    $email = $data->email;
    $password = $data->password;
    $response = array();

    // Check if any of the fields are empty
    if (!empty($email) && !empty($password)) {

        // Creating an object of the Database class
        $database = new Database('localhost', 'root', '', 'Ecommerce');

        // Creating a database connection
        $connection = $database->getConnection();

        // Prepare and execute the query to check if the user exists
        $query = "SELECT id, name FROM users WHERE email = ? AND password = ?";
        $statement = $connection->prepare($query);
        $statement->bind_param('ss', $email, $password);
        $statement->execute();
        $statement->store_result();

        // Check if the user exists
        if ($statement->num_rows > 0) {
            $statement->bind_result($userId, $userName);
            $statement->fetch();

            $response['status'] = 'success';
            $response['message'] = 'Login successful';
            $response['user_id'] = $userId;
            $response['user_name'] = $userName;
            // $response['token'] = generateRandomCode(10);
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Invalid email or password';
        }
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Please provide all required fields.';
        // Stop further execution
        exit;
    }

    // Convert the response array to JSON
    echo json_encode($response);

    // Close the database connection
    $database->closeConnection();
} else {
    echo json_encode(array('status' => 'error', 'message' => 'GET method is not allowed.'));
}
