<?php

require_once $_SERVER['DOCUMENT_ROOT'].'/public/assets/include/config.php';

$title = "ข้อมูลโดยสรุป";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>คุณสามารถแก้ไขข้อมูลของคุณได้ที่นี่ แต่ทางเรานั้นจะอนุญาตให้แก้ไขได้เพียงข้อมูลบางอย่างเท่านั้น</p>\n";
echo "<p>ทางเราขอสงวนสิทธิ์ในการจำกัดการแก้ไขสำหรับบางข้อมูลเช่นอีเมล์เนื่องจากจะมีผลต่อการจัดการข้อมูลในระบบเพราะต้องใช้สำหรับการล็อคอินด้วย รวมถึงข้อมูลเรื่องเพศและวันเกิดซึ่งเราเชื่อว่าคุณได้กรอกตามจริงตั้งแต่สมัครสมาชิกแล้วนั่นเอง</p>\n";
// echo "<br>\n";

if ($respondent['expiration'] == "0000-00-00 00:00:00") { $expired = "ไม่มีหมดอายุ"; } else { $expired = strftime(FORMAT_DATE, strtotime($respondent['expiration'])); }
if ($respondent['added'] == "0000-00-00 00:00:00") { $added = "ไม่มีข้อมูล"; } else { $added = strftime(FORMAT_DATE, strtotime($respondent['added'])); }
$xml = new SimpleXMLElement (file_get_contents(MYXML."/gender.xml"));
foreach ($xml as $a) { $aa = $a['id']; if ($respondent['gender'] == $aa) { $gender = $a; } }
$mobile1 = substr($respondent['mobile'], 0, 3);
$mobile2 = substr($respondent['mobile'], 3, 3);
$mobile3 = substr($respondent['mobile'], 6, 4);
$xml = new SimpleXMLElement (file_get_contents(MYXML."/province.xml"));
foreach ($xml as $a) { $aa = $a['id']; if ($respondent['province'] == $aa) { $province = $a; } }
$xml = new SimpleXMLElement (file_get_contents(MYXML."/personal_income.xml"));
foreach ($xml as $a) { $aa = $a['id']; if ($respondent['personal_income'] == $aa) { $personal_income = $a; } }
$xml = new SimpleXMLElement (file_get_contents(MYXML."/HH_income.xml"));
foreach ($xml as $a) { $aa = $a['id']; if ($respondent['HH_income'] == $aa) { $HH_income = $a; } }
$xml = new SimpleXMLElement (file_get_contents(MYXML."/marital.xml"));
foreach ($xml as $a) { $aa = $a['id']; if ($respondent['marital'] == $aa) { $marital = $a; } }
$xml = new SimpleXMLElement (file_get_contents(MYXML."/education.xml"));
foreach ($xml as $a) { $aa = $a['id']; if ($respondent['education'] == $aa) { $education = $a; } }
echo "<section>\n";
echo "<h4><i class=\"pe-user pe-fw\"></i> ข้อมูลส่วนตัว</h4>\n";
echo "<div class=\"row\">\n";
echo "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
echo "    <h5>ข้อมูลบัญชี</h5>\n";
echo "    <table class=\"table table-hover\">\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">ชื่อนามสกุล</td>\n";
echo "        <td>".$respondent['fname']." ".$respondent['lname']."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">ล็อคอิน</td>\n";
echo "        <td>".$respondent['username']."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">เป็นสมาชิกตั้งแต่</td>\n";
echo "        <td>".$added."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">วันหมดอายุ (หากมี)</td>\n";
echo "        <td>".$expired."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">คะแนนสะสม</td>\n";
echo "        <td>".$respondent['point']."</td>\n";
echo "      </tr>\n";
echo "    </table>\n";
echo "  </div>\n";
echo "  <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n";
echo "    <h5>ข้อมูลประชากรศาสตร์</h5>\n";
echo "    <table class=\"table table-hover\">\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">เพศ</td>\n";
echo "        <td>".$gender."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">วันเกิด</td>\n";
echo "        <td>".$respondent['birthday_date']."/".$respondent['birthday_month']."/".$respondent['birthday_year']."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">ปัจจุบันอาศัยอยู่</td>\n";
echo "        <td>".$province."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">หมายเลขโทรศัพท์มือถือ</td>\n";
echo "        <td>(".$mobile1.") ".$mobile2."-".$mobile3."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">รายได้ส่วนบุคคล</td>\n";
echo "        <td>".$personal_income."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">รายได้ครัวเรือน</td>\n";
echo "        <td>".$HH_income."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">สถานะภาพสมรส</td>\n";
echo "        <td>".$marital."</td>\n";
echo "      </tr>\n";
echo "      <tr>\n";
echo "        <td width=\"40%\">ระดับการศึกษา</td>\n";
echo "        <td>".$education."</td>\n";
echo "      </tr>\n";
echo "    </table>\n";
echo "  </div>\n";
echo "</div>\n";
echo "</section>\n";
?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
