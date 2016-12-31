<?php

$type = $_GET['type'];
// if (empty($type)) { echo "Error: Cannot find \$type and exit"; exit; }

$title = "Send emails";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This is an utility page for sending out emails to respondents which includes both <strong>the invitations</strong> (the first email) and <strong>the reminders</strong> (the following-up emails).</p>\n";
echo "<p>Only those who have the right permission will be able to use this utility - currently it is only for Managers, and it will only be available for all Private surveys. </p>\n";
echo "<br>\n";

$q1 = $db->prepare("SELECT * FROM j_projects WHERE id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  while ($row = $q1->fetchObject()) {
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 3;
    $mail->SMTPKeepAlive = true;
    // $mail->SMTPAuth = true;
    $mail->Host = 'localhost';
    // $mail->Port = 587;
    // $mail->Username = 'sysop';
    // $mail->Password = '';
    // $mail->SMTPSecure = 'tls';
    $mail->isHTML(true);
    $mail->addAddress(EMAILSYSTEM);
    $mail->CharSet = "UTF-8";
    if ($type == "invite") {
      if ($row->email_i) { $mail->setFrom($row->email_i); } else { $mail->setFrom(EMAILNOREPLY); }
      $mail->Subject = "ขอเชิญร่วมแสดงความคิดเห็น / Survey invitation";
      $mail->Body = $row->email_i_content;
      $mail->AltBody = strip_tags($row->email_i_content);
    }
    else if ($type == "remind") {
      if ($row->email_r) { $mail->setFrom($row->email_r); } else { $mail->setFrom(EMAILNOREPLY); }
      $mail->Subject = "ช่วยเตือนว่าคุณยังไม่ได้แสดงความคิดเห็น / Survey reminder";
      $mail->Body = $row->email_r_content;
      $mail->AltBody = strip_tags($row->email_r_content);
    }
    $q2 = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND status = 1 AND invite1 IS NULL");
    $q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
    $q2->execute();
    foreach ($q2->fetchObject() as $row) {
      $mail->addBCC($row->email);
      // if (!$mail->send()) { echo "Mailer Error (" . str_replace("@", "&#64;", $row->email) . ') ' . $mail->ErrorInfo . '<br>'; break; }
      // else {
      //   echo "Message sent to :" . $row->email . ' (' . str_replace("@", "&#64;", $row->email) . ')<br>';
      //   $q3 = $db->prepare("UPDATE j_respondents SET invite1 = NOW() WHERE email = :email AND surveyid = :surveyid");
      //   $q3->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
      //   $q3->bindValue(':email', $row->email, PDO::PARAM_INT);
      //   $q3->execute();
      // }
      $mail->clearAddresses();
    }
  }
}

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
