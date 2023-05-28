<?php
	require_once('phpmailer/class.phpmailer.php');
	$mail = new PHPMailer();
	if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']) ) {
		//Important - UPDATE YOUR RECEIVER EMAIL ID, NAME AND SUBJECT
		// Please enter your email and Subject 	
		$to_email = 'receiver@email.com';		
		$to_name = 'Receiver Name';
		$sender_name = $_POST['name'] . " ". $_POST['lname'];
		$from_mail = $_POST['email'];	
		$sender_message = $_POST['message'];
		
		$mail->SetFrom( $from_mail , $sender_name );
        $mail->AddReplyTo( $from_mail , $sender_name );
        $mail->AddAddress( $to_email , $to_name );
        $mail->Subject = "New Contact Query - Church Demo";
		
		$received_content = "SENDER NAME : ". $sender_name ."</br> SENDER EMAIL : ".$_POST['email']."</br> </br> SENDER MESSAGE: </br/> ".$sender_message;
		
		$mail->MsgHTML( $received_content );
		
        echo $mail->Send();
		exit;		
	} /* end of isset($_POST) */
?>