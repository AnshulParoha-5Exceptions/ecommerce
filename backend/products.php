<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');

include 'database.php';

// Initialize the database connection
$db = new Database('localhost', 'root', '', 'Ecommerce');
$connection = $db->getConnection();

// API endpoint to fetch all products
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT p.id, p.name, p.price, p.description, p.image, c.name AS category, b.name AS brand
    FROM products p
    INNER JOIN category c ON p.cat_id = c.id
    INNER JOIN brand b ON p.brand_id = b.id";

    $result = $connection->query($query);

    if ($result->num_rows > 0) {
        $products = array();
        while ($row = $result->fetch_assoc()) {
            $products[] = $row;
        }
        echo json_encode($products);
    } else {
        echo "No products found.";
    }
}

// Close the database connection
$db->closeConnection();
