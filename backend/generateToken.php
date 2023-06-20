<?php

function generateRandomCode($length) {
    $bytes = random_bytes(ceil($length / 2));
    return substr(bin2hex($bytes), 0, $length);
}

// $code = generateRandomCode(8);


?>
