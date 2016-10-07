<?php

if (empty($_SESSION["captcha"])) { $clength = 8; $rText = generateRandom($clength); $_SESSION["captcha"] = $rText; }

get_current_respondent($respondent);

$username = cleanstring($respondent['username']);
$fname = cleanstring($respondent['fname']);
$lname = cleanstring($respondent['lname']);
$gender = cleanstring($respondent['gender']);
$province = cleanstring($respondent['province']);
$mobile = cleanstring($respondent['mobile']);
$mobile1 = substr($mobile, 0, 3);
$mobile2 = substr($mobile, 3, 3);
$mobile3 = substr($mobile, 6, 4);
$personal_income = cleanstring($respondent['personal_income']);
$HH_income = cleanstring($respondent['HH_income']);
$marital = cleanstring($respondent['marital']);
$education = cleanstring($respondent['education']);
$captcha = cleanstring($respondent['captcha']);

if ($_REQUEST['captcha']) {

  if ($_REQUEST['captcha'] == $_SESSION['captcha']) {
    $_username = _addslashes($_POST['_username']);
    $_realm = _addslashes($respondent['realm']);
    $_fname = _addslashes($_POST['_fname']);
    $_lname = _addslashes($_POST['_lname']);
    $_province = _addslashes($_POST['_province']);
    $_mobile = _addslashes($_POST['_mobile1'].$_POST['_mobile2'].$_POST['_mobile3']);
    $_personal_income = _addslashes($_POST['_personal_income']);
    $_HH_income = _addslashes($_POST['_HH_income']);
    $_marital = _addslashes($_POST['_marital']);
    $_education = _addslashes($_POST['_education']);
    $_changed  = sys_time_stamp();
    $sql = "UPDATE ".X_RESPONDENT." SET fname = $_fname, lname = $_lname, province = $_province, mobile = $_mobile, personal_income = $_personal_income, HH_income = $_HH_income, marital = $_marital, education = $_education, changed = NOW() WHERE username = $_username AND realm = $_realm ";
    echo $sql;
    $res = execute_sql($sql);
    $notes = array (array("title" => "Profile updated", "text" => "คุณได้ทำการแก้ไขข้อมูลของคุณเป็นที่เรียบร้อยแล้ว", "image" => "assets/img/notification.svg"));
    if (1 === affected_rows()) { set_current_respondent($respondent['username'], $respondent['realm']); db_close($res); echo mksuccess("คุณได้ทำการแก้ไขข้อมูลของคุณเป็นที่เรียบร้อยแล้ว"); return; }
    else { echo mkerror("ไม่สามารถทำรายได้ขณะนี้ กรุณาลองใหม่ภายหลัง"); }
  }
  else { echo mkerror("คุณใส่ตัวเลขและตัวอักษรตามรูปภาพไม่ถูกต้อง"); }

} else {

?>
<form id="changeprofile" class="form-horizontal" method="post" id="profile_change" action="<?php echo htmlspecialchars(MYPUBLIC); ?>">
  <h2>แก้ไขข้อมูลของคุณ</h2>
  <p>คุณสามารถแก้ไขข้อมูลของคุณได้ที่นี่</p>
  <p>เราอนุญาตให้แก้ไขได้เพียงข้อมูลที่เหมาะสมเท่านั้น ขอสงวนสิทธิ์ในการจำกัดการแก้ไขสำหรับบางข้อมูลเช่นอีเมล์เนื่องจากเป็นข้อมูลหลักสำหรับใช้ในการล็อคอินเข้าระบบด้วยนั่นเอง</p>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ล็อคอิน</label>
      <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
        <div class="input-group">
          <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
          <input type="text" name="_username" class="form-control" value="<?php echo $username; ?>" disabled>
        </div>
        <input type="hidden" name="_username" value="<?php echo $username; ?>">
     </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="_fname" class="form-control" value="<?php echo $fname; ?>" placeholder="ชื่อของคุณ">
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">นามสกุล</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="_lname" class="form-control" value="<?php echo $lname; ?>" placeholder="นามสกุลของคุณ">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">เพศ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <?php
        if ($gender == "M") { echo "<input type=\"text\" name=\"_gender\" class=\"form-control\" value=\"ผู้ชาย\" disabled>\n"; }
        elseif ($gender == "F") { echo "<input type=\"text\" name=\"_gender\" class=\"form-control\" value=\"ผู้หญิง\" disabled>\n"; }
        else { echo "<input type=\"text\" name=\"_gender\" class=\"form-control\" value=\"\" disabled>\n"; }
        ?>
      </div>
      <input type="hidden" name="_gender" value="<?php echo $gender; ?>">
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">วันเกิด</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <span class="input-group-addon">วันที่</span>
        <input type="text" name="_birthday_date" class="form-control" value="<?php echo $respondent['birthday_date']; ?>" disabled>
        <span class="input-group-addon">เดือน</span>
        <input type="text" name="_birthday_month" class="form-control" value="<?php echo $respondent['birthday_month']; ?>" disabled>
        <span class="input-group-addon">ปี</span>
        <input type="text" name="_birthday_year" class="form-control" value="<?php echo $respondent['birthday_year']; ?>" disabled>
      </div>
      <input type="hidden" name="_birthday_date" value="<?php echo $respondent['birthday_date']; ?>">
      <input type="hidden" name="_birthday_month" value="<?php echo $respondent['birthday_month']; ?>">
      <input type="hidden" name="_birthday_year" value="<?php echo $respondent['birthday_year']; ?>">
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ปัจจุบันอาศัยอยู่</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <select class="form-control input-sm" name="_province">
        <?php  if ($province == "") { echo "<option value=\"\" selected>--------- เลือกจังหวัด ---------</option>\n"; } else { echo "<option value=\"\">--------- เลือกจังหวัด ---------</option>\n"; } ?>
        <?php  if ($province == "01") { echo "<option value=\"01\" selected>กรุงเทพมหานคร</option>\n"; } else { echo "<option value=\"01\">กรุงเทพมหานคร</option>\n"; } ?>
        <?php  if ($province == "02") { echo "<option value=\"02\" selected>กระบี่</option>\n"; } else { echo "<option value=\"02\">กระบี่</option>\n"; } ?>
        <?php  if ($province == "03") { echo "<option value=\"03\" selected>กาญจนบุรี</option>\n"; } else { echo "<option value=\"03\">กาญจนบุรี</option>\n"; } ?>
        <?php  if ($province == "04") { echo "<option value=\"04\" selected>กาฬสินธุ์</option>\n"; } else { echo "<option value=\"04\">กาฬสินธุ์</option>\n"; } ?>
        <?php  if ($province == "05") { echo "<option value=\"05\" selected>กำแพงเพชร</option>\n"; } else { echo "<option value=\"05\">กำแพงเพชร</option>\n"; } ?>
        <?php  if ($province == "06") { echo "<option value=\"06\" selected>ขอนแก่น</option>\n"; } else { echo "<option value=\"06\">ขอนแก่น</option>\n"; } ?>
        <?php  if ($province == "07") { echo "<option value=\"07\" selected>จันทบุรี</option>\n"; } else { echo "<option value=\"07\">จันทบุรี</option>\n"; } ?>
        <?php  if ($province == "08") { echo "<option value=\"08\" selected>ฉะเชิงเทรา</option>\n"; } else { echo "<option value=\"08\">ฉะเชิงเทรา</option>\n"; } ?>
        <?php  if ($province == "09") { echo "<option value=\"09\" selected>ชัยนาท</option>\n"; } else { echo "<option value=\"09\">ชัยนาท</option>\n"; } ?>
        <?php  if ($province == "10") { echo "<option value=\"10\" selected>ชัยภูมิ</option>\n"; } else { echo "<option value=\"10\">ชัยภูมิ</option>\n"; } ?>
        <?php  if ($province == "11") { echo "<option value=\"11\" selected>ชุมพร</option>\n"; } else { echo "<option value=\"11\">ชุมพร</option>\n"; } ?>
        <?php  if ($province == "12") { echo "<option value=\"12\" selected>ชลบุรี</option>\n"; } else { echo "<option value=\"12\">ชลบุรี</option>\n"; } ?>
        <?php  if ($province == "13") { echo "<option value=\"13\" selected>เชียงใหม่</option>\n"; } else { echo "<option value=\"13\">เชียงใหม่</option>\n"; } ?>
        <?php  if ($province == "14") { echo "<option value=\"14\" selected>เชียงราย</option>\n"; } else { echo "<option value=\"14\">เชียงราย</option>\n"; } ?>
        <?php  if ($province == "15") { echo "<option value=\"15\" selected>ตรัง</option>\n"; } else { echo "<option value=\"15\">ตรัง</option>\n"; } ?>
        <?php  if ($province == "16") { echo "<option value=\"16\" selected>ตราด</option>\n"; } else { echo "<option value=\"16\">ตราด</option>\n"; } ?>
        <?php  if ($province == "17") { echo "<option value=\"17\" selected>ตาก</option>\n"; } else { echo "<option value=\"17\">ตาก</option>\n"; } ?>
        <?php  if ($province == "18") { echo "<option value=\"18\" selected>นครนายก</option>\n"; } else { echo "<option value=\"18\">นครนายก</option>\n"; } ?>
        <?php  if ($province == "19") { echo "<option value=\"19\" selected>นครปฐม</option>\n"; } else { echo "<option value=\"19\">นครปฐม</option>\n"; } ?>
        <?php  if ($province == "20") { echo "<option value=\"20\" selected>นครพนม</option>\n"; } else { echo "<option value=\"20\">นครพนม</option>\n"; } ?>
        <?php  if ($province == "21") { echo "<option value=\"21\" selected>นครราชสีมา</option>\n"; } else { echo "<option value=\"21\">นครราชสีมา</option>\n"; } ?>
        <?php  if ($province == "22") { echo "<option value=\"22\" selected>นครศรีธรรมราช</option>\n"; } else { echo "<option value=\"22\">นครศรีธรรมราช</option>\n"; } ?>
        <?php  if ($province == "23") { echo "<option value=\"23\" selected>นครสวรรค์</option>\n"; } else { echo "<option value=\"23\">นครสวรรค์</option>\n"; } ?>
        <?php  if ($province == "24") { echo "<option value=\"24\" selected>นราธิวาส</option>\n"; } else { echo "<option value=\"24\">นราธิวาส</option>\n"; } ?>
        <?php  if ($province == "25") { echo "<option value=\"25\" selected>น่าน</option>\n"; } else { echo "<option value=\"25\">น่าน</option>\n"; } ?>
        <?php  if ($province == "26") { echo "<option value=\"26\" selected>นนทบุรี</option>\n"; } else { echo "<option value=\"26\">นนทบุรี</option>\n"; } ?>
        <?php  if ($province == "27") { echo "<option value=\"27\" selected>บึงกาฬ</option>\n"; } else { echo "<option value=\"27\">บึงกาฬ</option>\n"; } ?>
        <?php  if ($province == "28") { echo "<option value=\"28\" selected>บุรีรัมย์</option>\n"; } else { echo "<option value=\"28\">บุรีรัมย์</option>\n"; } ?>
        <?php  if ($province == "29") { echo "<option value=\"29\" selected>ประจวบคีรีขันธ์</option>\n"; } else { echo "<option value=\"29\">ประจวบคีรีขันธ์</option>\n"; } ?>
        <?php  if ($province == "30") { echo "<option value=\"30\" selected>ปทุมธานี</option>\n"; } else { echo "<option value=\"30\">ปทุมธานี</option>\n"; } ?>
        <?php  if ($province == "31") { echo "<option value=\"31\" selected>ปราจีนบุรี</option>\n"; } else { echo "<option value=\"31\">ปราจีนบุรี</option>\n"; } ?>
        <?php  if ($province == "32") { echo "<option value=\"32\" selected>ปัตตานี</option>\n"; } else { echo "<option value=\"32\">ปัตตานี</option>\n"; } ?>
        <?php  if ($province == "33") { echo "<option value=\"33\" selected>พะเยา</option>\n"; } else { echo "<option value=\"33\">พะเยา</option>\n"; } ?>
        <?php  if ($province == "34") { echo "<option value=\"34\" selected>พระนครศรีอยุธยา</option>\n"; } else { echo "<option value=\"34\">พระนครศรีอยุธยา</option>\n"; } ?>
        <?php  if ($province == "35") { echo "<option value=\"35\" selected>พังงา</option>\n"; } else { echo "<option value=\"35\">พังงา</option>\n"; } ?>
        <?php  if ($province == "36") { echo "<option value=\"36\" selected>พิจิตร</option>\n"; } else { echo "<option value=\"36\">พิจิตร</option>\n"; } ?>
        <?php  if ($province == "37") { echo "<option value=\"37\" selected>พิษณุโลก</option>\n"; } else { echo "<option value=\"37\">พิษณุโลก</option>\n"; } ?>
        <?php  if ($province == "38") { echo "<option value=\"38\" selected>เพชรบุรี</option>\n"; } else { echo "<option value=\"38\">เพชรบุรี</option>\n"; } ?>
        <?php  if ($province == "39") { echo "<option value=\"39\" selected>เพชรบูรณ์</option>\n"; } else { echo "<option value=\"39\">เพชรบูรณ์</option>\n"; } ?>
        <?php  if ($province == "40") { echo "<option value=\"40\" selected>แพร่</option>\n"; } else { echo "<option value=\"40\">แพร่</option>\n"; } ?>
        <?php  if ($province == "41") { echo "<option value=\"41\" selected>พัทลุง</option>\n"; } else { echo "<option value=\"41\">พัทลุง</option>\n"; } ?>
        <?php  if ($province == "42") { echo "<option value=\"42\" selected>ภูเก็ต</option>\n"; } else { echo "<option value=\"42\">ภูเก็ต</option>\n"; } ?>
        <?php  if ($province == "43") { echo "<option value=\"43\" selected>มหาสารคาม</option>\n"; } else { echo "<option value=\"43\">มหาสารคาม</option>\n"; } ?>
        <?php  if ($province == "44") { echo "<option value=\"44\" selected>มุกดาหาร</option>\n"; } else { echo "<option value=\"44\">มุกดาหาร</option>\n"; } ?>
        <?php  if ($province == "45") { echo "<option value=\"45\" selected>แม่ฮ่องสอน</option>\n"; } else { echo "<option value=\"45\">แม่ฮ่องสอน</option>\n"; } ?>
        <?php  if ($province == "46") { echo "<option value=\"46\" selected>ยโสธร</option>\n"; } else { echo "<option value=\"46\">ยโสธร</option>\n"; } ?>
        <?php  if ($province == "47") { echo "<option value=\"47\" selected>ยะลา</option>\n"; } else { echo "<option value=\"47\">ยะลา</option>\n"; } ?>
        <?php  if ($province == "48") { echo "<option value=\"48\" selected>ร้อยเอ็ด</option>\n"; } else { echo "<option value=\"48\">ร้อยเอ็ด</option>\n"; } ?>
        <?php  if ($province == "49") { echo "<option value=\"49\" selected>ระนอง</option>\n"; } else { echo "<option value=\"49\">ระนอง</option>\n"; } ?>
        <?php  if ($province == "50") { echo "<option value=\"50\" selected>ระยอง</option>\n"; } else { echo "<option value=\"50\">ระยอง</option>\n"; } ?>
        <?php  if ($province == "51") { echo "<option value=\"51\" selected>ราชบุรี</option>\n"; } else { echo "<option value=\"51\">ราชบุรี</option>\n"; } ?>
        <?php  if ($province == "52") { echo "<option value=\"52\" selected>ลพบุรี</option>\n"; } else { echo "<option value=\"52\">ลพบุรี</option>\n"; } ?>
        <?php  if ($province == "53") { echo "<option value=\"53\" selected>ลำปาง</option>\n"; } else { echo "<option value=\"53\">ลำปาง</option>\n"; } ?>
        <?php  if ($province == "54") { echo "<option value=\"54\" selected>ลำพูน</option>\n"; } else { echo "<option value=\"54\">ลำพูน</option>\n"; } ?>
        <?php  if ($province == "55") { echo "<option value=\"55\" selected>เลย</option>\n"; } else { echo "<option value=\"55\">เลย</option>\n"; } ?>
        <?php  if ($province == "56") { echo "<option value=\"56\" selected>ศรีสะเกษ</option>\n"; } else { echo "<option value=\"56\">ศรีสะเกษ</option>\n"; } ?>
        <?php  if ($province == "57") { echo "<option value=\"57\" selected>สกลนคร</option>\n"; } else { echo "<option value=\"57\">สกลนคร</option>\n"; } ?>
        <?php  if ($province == "58") { echo "<option value=\"58\" selected>สงขลา</option>\n"; } else { echo "<option value=\"58\">สงขลา</option>\n"; } ?>
        <?php  if ($province == "59") { echo "<option value=\"59\" selected>สมุทรสาคร</option>\n"; } else { echo "<option value=\"59\">สมุทรสาคร</option>\n"; } ?>
        <?php  if ($province == "60") { echo "<option value=\"60\" selected>สมุทรปราการ</option>\n"; } else { echo "<option value=\"60\">สมุทรปราการ</option>\n"; } ?>
        <?php  if ($province == "61") { echo "<option value=\"61\" selected>สมุทรสงคราม</option>\n"; } else { echo "<option value=\"61\">สมุทรสงคราม</option>\n"; } ?>
        <?php  if ($province == "62") { echo "<option value=\"62\" selected>สระแก้ว</option>\n"; } else { echo "<option value=\"62\">สระแก้ว</option>\n"; } ?>
        <?php  if ($province == "63") { echo "<option value=\"63\" selected>สระบุรี</option>\n"; } else { echo "<option value=\"63\">สระบุรี</option>\n"; } ?>
        <?php  if ($province == "64") { echo "<option value=\"64\" selected>สิงห์บุรี</option>\n"; } else { echo "<option value=\"64\">สิงห์บุรี</option>\n"; } ?>
        <?php  if ($province == "65") { echo "<option value=\"65\" selected>สุโขทัย</option>\n"; } else { echo "<option value=\"65\">สุโขทัย</option>\n"; } ?>
        <?php  if ($province == "66") { echo "<option value=\"66\" selected>สุพรรณบุรี</option>\n"; } else { echo "<option value=\"66\">สุพรรณบุรี</option>\n"; } ?>
        <?php  if ($province == "67") { echo "<option value=\"67\" selected>สุราษฎร์ธานี</option>\n"; } else { echo "<option value=\"67\">สุราษฎร์ธานี</option>\n"; } ?>
        <?php  if ($province == "68") { echo "<option value=\"68\" selected>สุรินทร์</option>\n"; } else { echo "<option value=\"68\">สุรินทร์</option>\n"; } ?>
        <?php  if ($province == "69") { echo "<option value=\"69\" selected>สตูล</option>\n"; } else { echo "<option value=\"69\">สตูล</option>\n"; } ?>
        <?php  if ($province == "70") { echo "<option value=\"70\" selected>หนองคาย</option>\n"; } else { echo "<option value=\"70\">หนองคาย</option>\n"; } ?>
        <?php  if ($province == "71") { echo "<option value=\"71\" selected>หนองบัวลำภู</option>\n"; } else { echo "<option value=\"71\">หนองบัวลำภู</option>\n"; } ?>
        <?php  if ($province == "72") { echo "<option value=\"72\" selected>อำนาจเจริญ</option>\n"; } else { echo "<option value=\"72\">อำนาจเจริญ</option>\n"; } ?>
        <?php  if ($province == "73") { echo "<option value=\"73\" selected>อุดรธานี</option>\n"; } else { echo "<option value=\"73\">อุดรธานี</option>\n"; } ?>
        <?php  if ($province == "74") { echo "<option value=\"74\" selected>อุตรดิตถ์</option>\n"; } else { echo "<option value=\"74\">อุตรดิตถ์</option>\n"; } ?>
        <?php  if ($province == "75") { echo "<option value=\"75\" selected>อุทัยธานี</option>\n"; } else { echo "<option value=\"75\">อุทัยธานี</option>\n"; } ?>
        <?php  if ($province == "76") { echo "<option value=\"76\" selected>อุบลราชธานี</option>\n"; } else { echo "<option value=\"76\">อุบลราชธานี</option>\n"; } ?>
        <?php  if ($province == "77") { echo "<option value=\"77\" selected>อ่างทอง</option>\n"; } else { echo "<option value=\"77\">อ่างทอง</option>\n"; } ?>
      </select>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">หมายเลขโทรศัพท์มือถือ</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="input-group">
        <input type="text" size="3" name="_mobile1" class="form-control" value="<?php echo $mobile1; ?>" placeholder="081">
        <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
        <input type="text" size="3" name="_mobile2" class="form-control" value="<?php echo $mobile2; ?>" placeholder="888">
        <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
        <input type="text" size="4" name="_mobile3" class="form-control" value="<?php echo $mobile3; ?>" placeholder="7777">
      </div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ส่วนบุคคล</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary"><?php if ($personal_income == "L1") { echo "<input type=\"radio\" id=\"L1\" name=\"_personal_income\" value=\"L1\" checked><label for=\"L1\">60,000 บาทต่อเดือนหรือมากกว่า</label>"; } else { echo "<input type=\"radio\" id=\"L1\" name=\"_personal_income\" value=\"L1\"><label for=\"L1\">60,000 บาทต่อเดือนหรือมากกว่า</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($personal_income == "L2") { echo "<input type=\"radio\" id=\"L2\" name=\"_personal_income\" value=\"L2\" checked><label for=\"L2\">50,001-60,000 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"L2\" name=\"_personal_income\" value=\"L2\"><label for=\"L2\">50,001-60,000 บาทต่อเดือน</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($personal_income == "L3") { echo "<input type=\"radio\" id=\"L3\" name=\"_personal_income\" value=\"L3\" checked><label for=\"L2\">34,501-50,000 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"L3\" name=\"_personal_income\" value=\"L3\"><label for=\"L3\">34,501-50,000 บาทต่อเดือน</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($personal_income == "L4") { echo "<input type=\"radio\" id=\"L4\" name=\"_personal_income\" value=\"L4\" checked><label for=\"L2\">20,000-34,500 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"L4\" name=\"_personal_income\" value=\"L4\"><label for=\"L4\">20,000-34,500 บาทต่อเดือน</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($personal_income == "L5") { echo "<input type=\"radio\" id=\"L5\" name=\"_personal_income\" value=\"L5\" checked><label for=\"L2\">ต่ำกว่า 20,000 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"L5\" name=\"_personal_income\" value=\"L5\"><label for=\"L5\">ต่ำกว่า 20,000 บาทต่อเดือน</label>"; } ?></div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ครัวเรือน</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary"><?php if ($HH_income == "SES-A") { echo "<input type=\"radio\" id=\"SES-A\" name=\"_HH_income\" value=\"SES-A\" checked><label for=\"SES-A\">60,000 บาทต่อเดือนหรือมากกว่า</label>"; } else { echo "<input type=\"radio\" id=\"SES-A\" name=\"_HH_income\" value=\"SES-A\"><label for=\"SES-A\">60,000 บาทต่อเดือนหรือมากกว่า</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($HH_income == "SES-B") { echo "<input type=\"radio\" id=\"SES-B\" name=\"_HH_income\" value=\"SES-B\" checked><label for=\"SES-B\">50,001-60,000 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"SES-B\" name=\"_HH_income\" value=\"SES-B\"><label for=\"SES-B\">50,001-60,000 บาทต่อเดือน</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($HH_income == "SES-C") { echo "<input type=\"radio\" id=\"SES-C\" name=\"_HH_income\" value=\"SES-C\" checked><label for=\"SES-C\">34,501-50,000 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"SES-C\" name=\"_HH_income\" value=\"SES-C\"><label for=\"SES-C\">34,501-50,000 บาทต่อเดือน</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($HH_income == "SES-D") { echo "<input type=\"radio\" id=\"SES-D\" name=\"_HH_income\" value=\"SES-D\" checked><label for=\"SES-D\">20,000-34,500 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"SES-D\" name=\"_HH_income\" value=\"SES-D\"><label for=\"SES-D\">20,000-34,500 บาทต่อเดือน</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($HH_income == "SES-E") { echo "<input type=\"radio\" id=\"SES-E\" name=\"_HH_income\" value=\"SES-E\" checked><label for=\"SES-E\">ต่ำกว่า 20,000 บาทต่อเดือน</label>"; } else { echo "<input type=\"radio\" id=\"SES-E\" name=\"_HH_income\" value=\"SES-E\"><label for=\"SES-E\">ต่ำกว่า 20,000 บาทต่อเดือน</label>"; } ?></div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">สถานะภาพสมรส</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary"><?php if ($marital == "A1") { echo "<input type=\"radio\" id=\"A1\" name=\"_marital\" value=\"A1\" checked><label for=\"A1\">โสด</label>"; } else { echo "<input type=\"radio\" id=\"A1\" name=\"_marital\" value=\"A1\"><label for=\"A1\">โสด</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($marital == "A2") { echo "<input type=\"radio\" id=\"A2\" name=\"_marital\" value=\"A2\" checked><label for=\"A2\">สมรส ไม่มีบุตร</label>"; } else { echo "<input type=\"radio\" id=\"A2\" name=\"_marital\" value=\"A2\"><label for=\"A2\">สมรส ไม่มีบุตร</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($marital == "A3") { echo "<input type=\"radio\" id=\"A3\" name=\"_marital\" value=\"A3\" checked><label for=\"A3\">สมรส มีบุตร</label>"; } else { echo "<input type=\"radio\" id=\"A3\" name=\"_marital\" value=\"A3\"><label for=\"A3\">สมรส มีบุตร</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($marital == "A4") { echo "<input type=\"radio\" id=\"A4\" name=\"_marital\" value=\"A4\" checked><label for=\"A4\">หย่า ม่าย แยกทาง แยกกันอย</label>"; } else { echo "<input type=\"radio\" id=\"A4\" name=\"_marital\" value=\"A4\"><label for=\"A4\">หย่า ม่าย แยกทาง แยกกันอย</label>"; } ?></div>
    </div>
  </div>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ระดับการศึกษา</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <div class="radio radio-primary"><?php if ($education == "B1") { echo "<input type=\"radio\" id=\"B1\" name=\"_education\" value=\"B1\" checked><label for=\"B1\">ประถมศึกษา</label>"; } else { echo "<input type=\"radio\" id=\"B1\" name=\"_education\" value=\"B1\"><label for=\"B1\">ประถมศึกษา</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($education == "B2") { echo "<input type=\"radio\" id=\"B2\" name=\"_education\" value=\"B2\" checked><label for=\"B2\">มัธยมศึกษา</label>"; } else { echo "<input type=\"radio\" id=\"B2\" name=\"_education\" value=\"B2\"><label for=\"B2\">มัธยมศึกษา</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($education == "B3") { echo "<input type=\"radio\" id=\"B3\" name=\"_education\" value=\"B3\" checked><label for=\"B3\">อาชีวะ อนุปริญญา</label>"; } else { echo "<input type=\"radio\" id=\"B3\" name=\"_education\" value=\"B3\"><label for=\"B3\">อาชีวะ อนุปริญญา</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($education == "B4") { echo "<input type=\"radio\" id=\"B4\" name=\"_education\" value=\"B4\" checked><label for=\"B4\">ปริญญาตรี</label>"; } else { echo "<input type=\"radio\" id=\"B4\" name=\"_education\" value=\"B4\"><label for=\"B4\">ปริญญาตรี</label>"; } ?></div>
      <div class="radio radio-primary"><?php if ($education == "B5") { echo "<input type=\"radio\" id=\"B5\" name=\"_education\" value=\"B5\" checked><label for=\"B5\">ปริญญาโทหรือสูงกว่า</label>"; } else { echo "<input type=\"radio\" id=\"B5\" name=\"_education\" value=\"B5\"><label for=\"B5\">ปริญญาโทหรือสูงกว่า</label>"; } ?></div>
    </div>
  </div>
  <hr>
  <div class="form-group">
    <label class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ยืนยัน</label>
    <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
      <p>กรุณาพิมพ์ตัวอักษรที่แสดงให้ดูในรูปนี้เพื่อยืนยัน<br>
      <img src="assets/include/captcha.php" alt="captcha"></p>
      <div class="input-group">
        <span class="input-group-addon"><i class="pe-cog pe-fw"></i></span>
        <input type="text" name="captcha" class="form-control" placeholder="พิมพ์ตัวอักษรที่แสดงในภาพนี้">
      </div>
    </div>
  </div>
  <hr>
  <p class="text-center">
    <input type="hidden" name="w" value="changeprofile">
    <input type="hidden" name="doChangeProfile" value="true">
    <button type="submit" class="btn btn-info">Change <i class="pe-check-circle-o"></i></button>
    <button type="submit" class="btn btn-default">Cancel</button>
  </p>
</form>
<script>
  // $(document).ready(function() {
  //   $('#changeprofile').formValidation({
  //     framework: 'bootstrap',
  //     icon: { valid: 'pe-check', invalid: 'pe-times', validating: 'pe-refresh' },
  //     button: { selector: '[type="submit"]', disabled: '' },
  //     excluded: ':disabled',
  //     fields: {
  //       // username: { validators: { notEmpty: { message: 'กรุณาระบุอีเมล์ที่ถูกต้อง' }, emailAddress: { message: 'คุณกรอกอีเมล์ไม่ถูกต้อง' } } },
  //       fname: { validators: { notEmpty: { message: 'กรุณาระบุชื่อจริงของคุณ' } } },
  //       lname: { validators: { notEmpty: { message: 'กรุณาระบุนามสกุลจริงของคุณ' } } },
  //       // gender: { validators: { notEmpty: { message: 'กรุณาเลือกเพศ' } } },
  //       // birthday_date: { validators: { notEmpty: { message: 'กรุณาเลือกวันเกิด' } } },
  //       // birthday_month: { validators: { notEmpty: { message: 'กรุณาเลือกเดือนเกิด' } } },
  //       // birthday_year: { validators: { notEmpty: { message: 'กรุณาเลือกปีเกิด' } } },
  //       province: { validators: { notEmpty: { message: 'กรุณาเลือกจังหวัด' } } },
  //       mobile1: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 3, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 3 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
  //       mobile2: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 3, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 3 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
  //       mobile3: { validators: { notEmpty: { message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง' }, stringLength: { min: 4, message: 'ต้องเป็นตัวเลขตัวจำนวนทั้งสิ้น 4 ตัว' }, regexp: { regexp: /^[0-9]+$/, message: 'ต้องเป็นตัวเลขเท่านั้น' } } },
  //       personal_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ส่วนบุคคล' } } },
  //       HH_income: { validators: { notEmpty: { message: 'กรุณาเลือกรายได้ครัวเรือน' } } },
  //       marital: { validators: { notEmpty: { message: 'กรุณาเลือกสถานะภาพสมรส' } } },
  //       education: { validators: { notEmpty: { message: 'กรุณาเลือกระดับการศึกษา' } } },
  //       captcha: { validators: { notEmpty: { message: 'กรุณาใส่ตัวเลขและตัวอักษรตามรูปภาพ' }, stringLength: { min: 8, message: 'ตัวเลขและตัวอักษรนี้จะต้องมีจำนวนทั้งสิ้น 8 ตัวอักษร' } } }
  //     }
  //   });
  // });
</script>
<?php } ?>
