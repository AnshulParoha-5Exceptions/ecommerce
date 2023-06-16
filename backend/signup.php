<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');

include 'database.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $password = $_POST['password'];
    // $response = array();

    $name = $data->name;
    $email = $data->email;
    $password = $data->password;
    $response = array();


    // Check if any of the fields are empty
    if (!empty($name) && !empty($email) && !empty($password)) {

        // Creating an object of the Database class
        $database = new Database('localhost', 'root', '', 'Ecommerce');

        // Creating a database connection
        $connection = $database->getConnection();


        $query = "SELECT id FROM users WHERE email = ?";
        $statement = $connection->prepare($query);
        $statement->bind_param('s', $email);
        $statement->execute();
        $statement->store_result();


        // Checking if email exists or not
        if ($statement->num_rows > 0) {
            $response['status'] = 'error';
            $response['message'] = 'User or email already registered!';
        } else {
            // Prepare and execute the query to insert a new user
            $insertQuery = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
            $insertStatement = $connection->prepare($insertQuery);
            $insertStatement->bind_param('sss', $name, $email, $password);
            $insertStatement->execute();

            // Check if the query was successful
            if ($insertStatement->affected_rows > 0) {
                $response['status'] = 'success';
                $response['message'] = 'User registered successfully!';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'User registration failed!';
            }
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
    http_response_code(405);
    echo json_encode(array('status' => 'error', 'message' => 'GET method is not allowed.'));
}
