<?php
// subscribe.php

// Change this to the email address where you want to receive the subscription notifications.
$admin_email = "swayambommewar@gmail.com";  
$subject = "New Newsletter Subscription";

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';

    // Simple validation
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Prepare email body
        $message = "A new user subscribed to the newsletter:\r\n";
        $message .= "Email: " . $email . "\r\n";
        $message .= "Date/Time: " . date("Y-m-d H:i:s") . "\r\n";

        // Prepare headers
        $headers = "From: swayambommewar@gmail.com\r\n";
        $headers .= "Reply-To: swayambommewar@gmail.com\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        // Send email
        if (mail($admin_email, $subject, $message, $headers)) {
            // Successful
            echo "Thank you for subscribing!";
        } else {
            // Failed
            http_response_code(500);
            echo "Sorry, something went wrong. Please try again later.";
        }
    } else {
        // Invalid email
        http_response_code(400);
        echo "Please provide a valid email address.";
    }
} else {
    // Not a POST request
    http_response_code(403);
    echo "Invalid request method.";
}
?>
