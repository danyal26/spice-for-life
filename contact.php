<?php

if (isset($_POST['name'], $_POST['email'], $_POST['message'])){
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $to = "danyal.dharani26@gmail.com";
    $subject = "Contact Form";

    $message = "
    <html>
        <head>
            <title>HTML email</title>
        </head>
        <body>
            <div>Name: " . $name . "</div>
            <div>Email: " . $email . "</div>
            <div>Phone: " . $phone . "</div>
            <div>Message: " . $message . "</div>
        </body>
    </html>
    ";

    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers .= 'From: <' . $email . '>' . "\r\n";

    mail($to,$subject,$message,$headers);
}

?>