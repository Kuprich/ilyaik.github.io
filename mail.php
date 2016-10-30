<?php

$recepient = "ilya-kyp@mail.ru";
$sitename  = "Armata Financical Group";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formName = trim($_POST["formName"])

$message = "
Имя: $name <br>
Телефон: $phone
откуда отправлена: $formName
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
