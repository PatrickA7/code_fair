<?php
//Code example from from https://stackoverflow.com/questions/32285770/php-email-form-only-want-to-post-filled-fields-and-not-post-empty-ones



//Please note that the sign up function does not work, we were having issues getting our php file to work on Spinetail. At the time of writing, Barbara was looking into it.



//Variables
$to = $_REQUEST['Email_Address'];
$first_name = $_POST['First_Name'];
$events = null;

//Searches for input fields and assigns their values to $body variable
$body = "";
foreach ($_POST as $Field=>$Value) { 
    //removes underscore from $Field
    $no_underscore = str_replace('_', ' ', $Field);
    if($Value != '' && $Field != 'event' && $Value !="Select") {
        $body .= nl2br("$no_underscore: $Value\n\n");
    }
}


//Assigns checked checkbox values to $event
if (isset($_POST['event'])) {
    $events = implode(' , ', $_POST['event']);
    $events = test_input($events);
}

//Using PHPMailer to send emails containg form inputs
require 'PHPMailer\PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'codefairtest@gmail.com';                 // SMTP username
$mail->Password = 'cduadmin1337';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('codefairtest@gmail.com', 'CDU Code Fair');
$mail->addAddress($to);
$mail->addAddress('patrick.alegria7@gmail.com'); 
$mail->addAddress('codefairtest@gmail.com');       // Add a recipient             // Name is optional

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Code Fair Entry Confirmation';
$mail->Body    = "<h1>Code Fair Entry Confirmation</h1>
                    <p>Hi $first_name,</p>
                    <p>Thank you for registering for the CDU Code Fair!</p>
                    <p>The event/s you have entered are: $events</p>
                    <h2>Additional Information</h2>
                    <p>$body</p>
                    <p>If this message was sent in error, please contact the website owners</p>";
$mail->AltBody = 'Thank you for registering for the CDU Code Fair! If this message was sent in error, please contact the website owners';

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    header('Location:submit_success.html');
}

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);

    return $data;

}
?>