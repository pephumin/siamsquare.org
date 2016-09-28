<h2>สมัครสมาชิกใหม่โดยใช้อีเมล์</h2>
<p>ขณะนี้เราได้ทำการเปิดให้สมัครสมาชิกได้ด้วยตัวคุณเอง เพียงแค่คุณกรอกข้อมูลที่กำหนดไว้ตามจริง ขั้นตอนง่ายๆไม่ยุ่งยาก และใช้เวลาไม่เกินสองนาที</p>
<p>และที่สำคัญคือ สมาชิกที่สมัครในช่วงนี้จะไม่มีค่าใช้จ่ายใดๆเลย ทันทีที่เป็นสมาชิก คุณจะได้รับสิทธิ์การเข้าร่วมวิจัยเพื่อแลกรับของรางวัลเป็นการตอบแทน</p>
<p>หลังจากช่วงนี้ไป เราจะปิดระบบ สมาชิกใหม่จะต้องได้รับการเชิญจากสมาชิกเดิมเท่านั้นถึงจะสามารถสมัครได้</p>

<form id="signupform" method="post" class="form-horizontal" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>">

  <div id="wizard">
    <h4>ตั้งค่าล็อคอิน</h4>
    <section data-step="0">
      <legend>ลงทะเบียนสำหรับตั้งค่าล็อคอินของคุณ</legend>
      <div class="form-group">
        <label for="username" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">อีเมล์</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-envelope pe-fw"></i></span>
            <input type="email" name="username" class="form-control" placeholder="email@domain.com">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="password" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ตั้งรหัสลับ</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
            <input type="password" name="password" class="form-control" placeholder="Password">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="password2" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รหัสลับอีกครั้ง</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
            <input type="password" name="password2" class="form-control" placeholder="Password again">
          </div>
        </div>
      </div>
    </section>

    <h4>ข้อมูลพื้นฐาน</h4>
    <section data-step="1">
      <legend>คุณต้องกรอก <strong>ข้อมูลจริงเท่านั้น</strong> เพราะข้อมูลจะถูกนำไปใช้สำหรับงานวิจัย หากเราพบว่าข้อมูลไม่ตรงตามจริง คุณจะถูกแบนตลอดไป และทุกอย่างจะถือเป็นโมฆะ</legend>
      <div class="form-group">
        <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ชื่อ</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <input type="text" name="fname" class="form-control" placeholder="First name">
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="name" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">นามสกุล</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <input type="text" name="lname" class="form-control" placeholder="Last name">
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="gender" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">เพศ</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="radio radio-danger radio-inline">
            <input type="radio" id="male" name="gender" value="male"><label for="male">ผู้ชาย</label>
          </div>
          <div class="radio radio-danger radio-inline">
            <input type="radio" id="female" name="gender" value="female"><label for="female">ผู้หญิง</label>
          </div>
        </div>
      </div>
      <hr>
      <div class="form-group form-inline">
        <label for="birthday" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">วันเกิด</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          วันที่:
          <select class="form-control input-sm" name="birthday_date">
            <option value="" selected>--</option>
            <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
            <option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option>
            <option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option>
            <option value="31">31</option>
          </select>
          เดือน:
          <select class="form-control input-sm" name="birthday_month">
            <option value="" selected>-----</option>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          ปี:
          <select class="form-control input-sm" name="birthday_year">
            <option value="" selected>----</option>
            <option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option>
            <option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option>
            <option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option>
            <option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="1970">1970</option>
            <option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option>
            <option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option>
            <option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option>
            <option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option>
            <option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option>
          </select>
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="province" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ปัจจุบันอาศัยอยู่</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <select class="form-control input-sm" name="province">
            <option value="" selected>--------- เลือกจังหวัด ---------</option>
            <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
            <option value="กระบี่">กระบี่</option>
            <option value="กาญจนบุรี">กาญจนบุรี</option>
            <option value="กาฬสินธุ์">กาฬสินธุ์</option>
            <option value="กำแพงเพชร">กำแพงเพชร</option>
            <option value="ขอนแก่น">ขอนแก่น</option>
            <option value="จันทบุรี">จันทบุรี</option>
            <option value="ฉะเชิงเทรา">ฉะเชิงเทรา</option>
            <option value="ชัยนาท">ชัยนาท</option>
            <option value="ชัยภูมิ">ชัยภูมิ</option>
            <option value="ชุมพร">ชุมพร</option>
            <option value="ชลบุรี">ชลบุรี</option>
            <option value="เชียงใหม่">เชียงใหม่</option>
            <option value="เชียงราย">เชียงราย</option>
            <option value="ตรัง">ตรัง</option>
            <option value="ตราด">ตราด</option>
            <option value="ตาก">ตาก</option>
            <option value="นครนายก">นครนายก</option>
            <option value="นครปฐม">นครปฐม</option>
            <option value="นครพนม">นครพนม</option>
            <option value="นครราชสีมา">นครราชสีมา</option>
            <option value="นครศรีธรรมราช">นครศรีธรรมราช</option>
            <option value="นครสวรรค์">นครสวรรค์</option>
            <option value="นราธิวาส">นราธิวาส</option>
            <option value="น่าน">น่าน</option>
            <option value="นนทบุรี">นนทบุรี</option>
            <option value="บึงกาฬ">บึงกาฬ</option>
            <option value="บุรีรัมย์">บุรีรัมย์</option>
            <option value="ประจวบคีรีขันธ์">ประจวบคีรีขันธ์</option>
            <option value="ปทุมธานี">ปทุมธานี</option>
            <option value="ปราจีนบุรี">ปราจีนบุรี</option>
            <option value="ปัตตานี">ปัตตานี</option>
            <option value="พะเยา">พะเยา</option>
            <option value="พระนครศรีอยุธยา">พระนครศรีอยุธยา</option>
            <option value="พังงา">พังงา</option>
            <option value="พิจิตร">พิจิตร</option>
            <option value="พิษณุโลก">พิษณุโลก</option>
            <option value="เพชรบุรี">เพชรบุรี</option>
            <option value="เพชรบูรณ์">เพชรบูรณ์</option>
            <option value="แพร่">แพร่</option>
            <option value="พัทลุง">พัทลุง</option>
            <option value="ภูเก็ต">ภูเก็ต</option>
            <option value="มหาสารคาม">มหาสารคาม</option>
            <option value="มุกดาหาร">มุกดาหาร</option>
            <option value="แม่ฮ่องสอน">แม่ฮ่องสอน</option>
            <option value="ยโสธร">ยโสธร</option>
            <option value="ยะลา">ยะลา</option>
            <option value="ร้อยเอ็ด">ร้อยเอ็ด</option>
            <option value="ระนอง">ระนอง</option>
            <option value="ระยอง">ระยอง</option>
            <option value="ราชบุรี">ราชบุรี</option>
            <option value="ลพบุรี">ลพบุรี</option>
            <option value="ลำปาง">ลำปาง</option>
            <option value="ลำพูน">ลำพูน</option>
            <option value="เลย">เลย</option>
            <option value="ศรีสะเกษ">ศรีสะเกษ</option>
            <option value="สกลนคร">สกลนคร</option>
            <option value="สงขลา">สงขลา</option>
            <option value="สมุทรสาคร">สมุทรสาคร</option>
            <option value="สมุทรปราการ">สมุทรปราการ</option>
            <option value="สมุทรสงคราม">สมุทรสงคราม</option>
            <option value="สระแก้ว">สระแก้ว</option>
            <option value="สระบุรี">สระบุรี</option>
            <option value="สิงห์บุรี">สิงห์บุรี</option>
            <option value="สุโขทัย">สุโขทัย</option>
            <option value="สุพรรณบุรี">สุพรรณบุรี</option>
            <option value="สุราษฎร์ธานี">สุราษฎร์ธานี</option>
            <option value="สุรินทร์">สุรินทร์</option>
            <option value="สตูล">สตูล</option>
            <option value="หนองคาย">หนองคาย</option>
            <option value="หนองบัวลำภู">หนองบัวลำภู</option>
            <option value="อำนาจเจริญ">อำนาจเจริญ</option>
            <option value="อุดรธานี">อุดรธานี</option>
            <option value="อุตรดิตถ์">อุตรดิตถ์</option>
            <option value="อุทัยธานี">อุทัยธานี</option>
            <option value="อุบลราชธานี">อุบลราชธานี</option>
            <option value="อ่างทอง">อ่างทอง</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="mobile" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">หมายเลขโทรศัพท์มือถือ</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <input type="text" size="3" name="mobile1" class="form-control" placeholder="081">
            <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
            <input type="text" size="3" name="mobile2" class="form-control" placeholder="833">
            <span class="input-group-addon"><i class="pe-minus pe-fw"></i></span>
            <input type="text" size="4" name="mobile3" class="form-control" placeholder="4444">
          </div>
        </div>
      </div>
    </section>

    <h4>ข้อมูลส่วนบุคคล</h4>
    <section data-step="2">
      <legend>คุณต้องกรอก <strong>ข้อมูลจริงเท่านั้น</strong> เพราะข้อมูลจะถูกนำไปใช้สำหรับงานวิจัย หากเราพบว่าข้อมูลไม่ตรงตามจริง คุณจะถูกแบนตลอดไป และทุกอย่างจะถือเป็นโมฆะ</legend>
      <div class="form-group">
        <label for="personal_income" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ส่วนบุคคล</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="radio radio-danger">
            <input type="radio" id="L1" name="personal_income" value="L1"><label for="L1">L1</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="L2" name="personal_income" value="L2"><label for="L2">L2</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="L3" name="personal_income" value="L3"><label for="L3">L3</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="L4" name="personal_income" value="L4"><label for="L4">L4</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="L5" name="personal_income" value="L5"><label for="L5">L5</label>
          </div>
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="HH_income" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">รายได้ครัวเรือน</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="radio radio-danger">
            <input type="radio" id="SES-A" name="HH_income" value="SES-A"><label for="SES-A">60,000 บาทต่อเดือนหรือมากกว่า</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="SES-B" name="HH_income" value="SES-B"><label for="SES-B">50,001-60,000 บาทต่อเดือน</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="SES-C" name="HH_income" value="SES-C"><label for="SES-C">34,502-50,000 บาทต่อเดือน</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="SES-D" name="HH_income" value="SES-D"><label for="SES-D">20,000-34,500 บาทต่อเดือน</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="SES-E" name="HH_income" value="SES-E"><label for="SES-E">ต่ำกว่า 20,000 บาทต่อเดือน</label>
          </div>
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="marital" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">สถานะภาพสมรส</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="radio radio-danger">
            <input type="radio" id="A1" name="marital" value="A1"><label for="A1">โสด</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="A2" name="marital" value="A2"><label for="A2">สมรส ไม่มีบุตร</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="A3" name="marital" value="A3"><label for="A3">สมรส มีบุตร</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="A4" name="marital" value="A4"><label for="A4">หย่า ม่าย แยกทาง แยกกันอยู่</label>
          </div>
        </div>
      </div>
      <hr>
      <div class="form-group">
        <label for="education" class="col-xs-12 col-sm-3 col-md-3 col-lg-3 control-label">ระดับการศึกษา</label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="radio radio-danger">
            <input type="radio" id="B1" name="education" value="B1"><label for="B1">ประถมศึกษา</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="B2" name="education" value="B2"><label for="B2">มัธยมศึกษา</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="B3" name="education" value="B3"><label for="B3">อาชีวะ อนุปริญญา</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="B4" name="education" value="B4"><label for="B4">ปริญญาตรี</label>
          </div>
          <div class="radio radio-danger">
            <input type="radio" id="B5" name="education" value="B5"><label for="B5">ปริญญาโทหรือสูงกว่า</label>
          </div>
        </div>
      </div>
    </section>

    <h4>เงื่อนไขและข้อตกลง</h4>
    <section data-step="3">
      <legend>สุดท้ายนี้ กรุณาอ่านเงื่อนไขและข้อตกลงต่างๆ กรุณาทำเครื่องหมายในช่องล่างนี้เพื่อแสดว่าคุณยอมรับในข้อตกลงของเรา</legend>
      <div class="form-group">
        <iframe src="http://www.pebinary.com/about/print-tos.html" width="100%" height="400px" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 control-label"></iframe>
      </div>
      <div class="form-group">
        <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="checkbox checkbox-danger">
            <input id="agree" type="checkbox"> <label for="agree">ฉันยอมรับในเงื่อนไขและข้อตกลงการใช้บริการ</label>
          </div>
        </div>
      </div>
      <!-- <div class="form-group">
        <div class="col-xs-offset-0 col-sm-offset-3 col-md-offset-3 col-lg-offset-3 col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <button class="btn btn-info" name="submit" type="submit">Register <i class="pe-check-circle-o"></i></button> <button class="btn btn-default" name="cancel" type="reset">Cancel</button>
        </div>
      </div> -->
    </section>
  </div>
</form>

<script>
  $(document).ready(function() {
    $('#wizard').steps({
      headerTag: 'h4',
      bodyTag: 'section',
      transitionEffect: "none",
      enableFinishButton: true,
      enablePagination: true,
      enableAllSteps: true,
      stepsOrientation: "vertical",
      // onStepChanging: function(e, currentIndex, newIndex) {
      //   var fv = $('#wizard').data('formValidation'),
      //   $container = $('#wizard').find('section[data-step="' + currentIndex +'"]');
      //   fv.validateContainer($container);
      //   var isValidStep = fv.isValidContainer($container);
      //   if (isValidStep === false || isValidStep === null) { return false; }
      //   return true;
      // },
      // onFinishing: function(e, currentIndex) {
      //   var fv = $('#wizard').data('formValidation'),
      //   $container = $('#wizard').find('section[data-step="' + currentIndex +'"]');
      //   fv.validateContainer($container);
      //   var isValidStep = fv.isValidContainer($container);
      //   if (isValidStep === false || isValidStep === null) { return false; }
      //   return true;
      // },
      onFinished: function(e, currentIndex) {
        $('#wizard').formValidation('defaultSubmit');
        // $('#welcomeModal').modal();
      },
      labels: {
        cancel: "ยกเลิก",
        current: "current step:",
        pagination: "Pagination",
        finish: 'เสร็จสิ้น <i class="pe-flag-checkered"></i>',
        next: 'ถัดไป <i class="pe-angle-double-right"></i>',
        previous: '<i class="pe-angle-double-left"></i> ย้อนกลับ',
        loading: "Loading ..."
      }
    }).formValidation({
      framework: 'bootstrap',
      icon: {
        valid: 'pe-check',
        invalid: 'pe-times',
        validating: 'pe-refresh'
      },
      excluded: ':disabled',
      fields: {
        username: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุอีเมล์ที่ถูกต้อง'
            },
            emailAddress: {
              message: 'คุณกรอกอีเมล์ไม่ถูกต้อง'
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุรหัสลับ'
            },
            stringLength: {
              min: 6,
              message: 'รหัสลับจะต้องมีอย่างต่ำจำนวน 6 ตัวอักษรหรือตัวเลขผสมกัน'
            },
            different: {
              field: 'username',
              message: 'รหัสลับต้องไม่เหมือนกับชื่อล็อคอิน'
            }
          }
        },
        password2: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุรหัสลับอีกครั้ง'
            },
            stringLength: {
              min: 6,
              message: 'รหัสลับจะต้องมีอย่างต่ำจำนวน 6 ตัวอักษรหรือตัวเลขผสมกัน'
            },
            identical: {
              field: 'password',
              message: 'ยืนยันรหัสลับจะต้องตรงกับรหัสลับด้านบน'
            }
          }
        },
        fname: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุชื่อจริงของคุณ'
            }
          }
        },
        lname: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุนามสกุลจริงของคุณ'
            }
          }
        },
        gender: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกเพศ'
            }
          }
        },
        birthday_date: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกวันเกิด'
            }
          }
        },
        birthday_month: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกเดือนเกิด'
            }
          }
        },
        birthday_year: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกปีเกิด'
            }
          }
        },
        province: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกจังหวัด'
            }
          }
        },
        mobile1: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง'
            }
          }
        },
        mobile2: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง'
            }
          }
        },
        mobile3: {
          validators: {
            notEmpty: {
              message: 'กรุณาระบุหมายเลขโทรศัพท์มือถือที่ติดต่อได้จริง'
            }
          }
        },
        personal_income: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกรายได้ส่วนบุคคล'
            }
          }
        },
        HH_income: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกรายได้ครัวเรือน'
            }
          }
        },
        marital: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกสถานะภาพสมรส'
            }
          }
        },
        education: {
          validators: {
            notEmpty: {
              message: 'กรุณาเลือกระดับการศึกษา'
            }
          }
        },
        agree:  {
          validators: {
            notEmpty: {
              message: 'คุณต้องยอมรับในเงื่อนไขและข้อตกลงการใช้บริการ'
            }
          }
        }
      }
    });
  });
</script>

<!-- <section class="signupwithsocial">
  <h2>สมัครสมาชิกใหม่โดยใช้บัญชีโซเซี่ยลเน็ตเวิร์ค</h2>
  <p>อีกทางเลือกหนึ่งที่เรามีให้สำหรับสมาชิกคือ การสมัครสมาชิกโดยใช้บัญชีโซเซี่ยลเน็ตเวิร์ค</p>
  <p>ในปัจจุบันระบบของเรารองรับสำหรับ 3 บัญชีโซเซี่ยลเน็ตเวิร์คหลักที่เป็นที่นิยม นั่นคือ:</p>
  <ul class="pe-ul">
    <li><i class="pe-li pe-check-square"></i> การสมัครสมาชิกโดยใช้บัญชีของ <i class="pe-facebook pe-fw"></i> Facebook</li>
    <li><i class="pe-li pe-check-square"></i> การสมัครสมาชิกโดยใช้บัญชีของ <i class="pe-twitter pe-fw"></i> Twitter</li>
    <li><i class="pe-li pe-check-square"></i> การสมัครสมาชิกโดยใช้บัญชีของ <i class="pe-google pe-fw"></i> Google</li>
  </ul>
</section> -->
