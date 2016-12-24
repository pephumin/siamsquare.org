<?php

$email_subject = "ขอเชิญร่วมแสดงความคิดเห็น / Survey invitation [invite only]";

$q1 = $db->prepare("SELECT * FROM j_projects WHERE id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
while ($row = $q1->fetchObject()) {
  $mail = new PHPMailer;
  if ($type == "invite") { $body = $row->email_i_content; $mail->setFrom($row->email_i, $row->email_i); $mail->addReplyTo($row->email_i, $row->email_i); }
  else if ($type == "remind") { $body = $row->email_r_content; $mail->setFrom($row->email_r, $row->email_r); $mail->addReplyTo($row->email_r, $row->email_r); }
  //$mail->SMTPDebug = 3;
  $mail->isSMTP();
  $mail->Host = 'mail.thaiweb.net';
  $mail->SMTPAuth = true;
  $mail->SMTPKeepAlive = true;
  $mail->Port = 587;
  $mail->Username = 'sysop';
  $mail->Password = '';
  $mail->SMTPSecure = 'tls';
  $mail->isHTML(true);
  $mail->Subject = $email_subject;
  //Same body for all messages, so set this before the sending loop
  //If you generate a different body for each recipient (e.g. you're using a templating system),
  //set it inside the loop
  $mail->msgHTML($body);
  //msgHTML also sets AltBody, but if you want a custom one, set it afterwards
  $mail->AltBody = 'เนื้อหาในเมล์นี้ถูกส่งในโหมด HTML (content of this email is sent in HTML format)';
  $q2 = $db->prepare("SELECT * FROM j_respondents WHERE surveyid = :surveyid AND status = 1 AND invite1 IS NULL");
  $q2->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
  $q2->execute();
  foreach ($q2->fetchObject() as $row) {
    $mail->addAddress($row->email, $row->email);
    if (!empty($row['photo'])) { $mail->addStringAttachment($row['photo'], 'YourPhoto.jpg'); }
    if (!$mail->send()) { echo "Mailer Error (" . str_replace("@", "&#64;", $row->email) . ') ' . $mail->ErrorInfo . '<br>'; break; }
    else {
      echo "Message sent to :" . $row->email . ' (' . str_replace("@", "&#64;", $row->email) . ')<br>';
      $q3 = $db->prepare("UPDATE j_respondents SET invite1 = NOW() WHERE email = :email AND surveyid = :surveyid");
      $q3->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
      $q3->bindValue(':email', $row->email, PDO::PARAM_INT);
      $q3->execute();
    }
    $mail->clearAddresses();
    $mail->clearAttachments();
  }
}

if ($notes) { pageFooter($notes); } else { pageFooter(); }

?>
