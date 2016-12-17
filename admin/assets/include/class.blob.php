<?php

// DROP TABLE IF EXISTS `j_files`;
// CREATE TABLE IF NOT EXISTS `j_files` (
//   `id` int(6) UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
//   `mime` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
//   `data` blob NOT NULL,
//   `userid` int(6) UNSIGNED ZEROFILL NOT NULL,
//   `surveyid` int(6) UNSIGNED ZEROFILL NOT NULL,
//   `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
//   `status` tinyint(1) NOT NULL DEFAULT '1',
//   PRIMARY KEY (`id`)
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

class blobMe {

  const DB_HOST = '';
  const DB_NAME = '';
  const DB_USER = '';
  const DB_PASSWORD = '';

  private $pdo = null;

  public function __construct() {
    $conStr = sprintf("mysql:host=%s;dbname=%s;charset=utf8", self::DB_HOST, self::DB_NAME);
    try { $this->pdo = new PDO($conStr, self::DB_USER, self::DB_PASSWORD); }
    catch (PDOException $e) { echo $e->getMessage(); }
  }

  public function insertBlob($filePath, $mime) {
    $blob = fopen($filePath, 'rb');
    $sql = "INSERT INTO j_files (mime, data, userid, surveyid) VALUES (:mime, :data, :userid, :surveyid)";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParam(':mime', $mime);
    $stmt->bindParam(':data', $blob, PDO::PARAM_LOB);
    $stmt->bindParam(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $stmt->bindParam(':surveyid', $_SESSION["surveyid"], PDO::PARAM_INT);
    return $stmt->execute();
  }

  function updateBlob($id, $filePath, $mime) {
    $blob = fopen($filePath, 'rb');
    $sql = "UPDATE j_files SET mime = :mime, data = :data WHERE id = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->bindParam(':mime', $mime);
    $stmt->bindParam(':data', $blob, PDO::PARAM_LOB);
    $stmt->bindParam(':id', $id);
    return $stmt->execute();
  }

  public function selectBlob($id) {
    $sql = "SELECT mime, data FROM j_files WHERE id = :id";
    $stmt = $this->pdo->prepare($sql);
    $stmt->execute(array(":id" => $id));
    $stmt->bindColumn(1, $mime);
    $stmt->bindColumn(2, $data, PDO::PARAM_LOB);
    $stmt->fetch(PDO::FETCH_BOUND);
    return array("mime" => $mime, "data" => $data);
  }

  public function __destruct() { $this->pdo = null; }
}

$blobObj = new blobMe();

// test insert gif image
$blobObj->insertBlob('images/php-mysql-blob.gif',"image/gif");
$a = $blobObj->selectBlob(1);
header("Content-Type:" . $a['mime']);
echo $a['data'];

// test insert pdf
$blobObj->insertBlob('pdf/php-mysql-blob.pdf',"application/pdf");
$a = $blobObj->selectBlob(2);

// save it to the pdf file
file_put_contents("pdf/output.pdf", $a['data']);
$a = $blobObj->selectBlob(2);
header("Content-Type:" . $a['mime']);
echo $a['data'];

// replace the PDF by gif file
$blobObj->updateBlob(2, 'images/php-mysql-blob.gif', "image/gif");
$a = $blobObj->selectBlob(2);
header("Content-Type:" . $a['mime']);
echo $a['data'];
