<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the issue description from the form
    $issue = $_POST['issue'];

    // Email settings
    $to = "swayambommewar@gmail.com"; // Your email
    $subject = "Support Ticket: New Issue Reported";
    $message = "A new support ticket has been submitted.\n\nIssue Description:\n" . $issue;
    $headers = "From: no-reply@plantso.com";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "<p>Your issue has been submitted successfully. We will get back to you shortly.</p>";
    } else {
        echo "<p>There was an error submitting your issue. Please try again later.</p>";
    }
}
?>
