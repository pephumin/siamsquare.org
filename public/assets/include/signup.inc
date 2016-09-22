<h2>New member registration with email</h2>
<p>You can apply for the membership with us for free today!</p>
<p>Please note that we only open for free member registration for a limited time. And after this free period, we will not accept this registration anymore, any new accounts have to be by invitation only.</p>
<p>Should you need any support for accessing this section, please do not hesitate to contact our staff right away.</p>

<form id="signupform" method="post" class="form-horizontal" action="<?php echo $_SERVER['PHP_SELF']; ?>">

  <div id="wizard">
    <h4>Account information</h4>

    <section data-step="0">
      <legend>Setting up your account information</legend>
      <div class="form-group">
        <label for="username" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Email: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-envelope-o pe-fw"></i></span>
            <input type="email" name="username" class="form-control" placeholder="email@domain.com">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="password" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Password: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
            <input type="password" name="password" class="form-control" placeholder="Password">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="password2" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Confirm password: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-key pe-fw"></i></span>
            <input type="password" name="password2" class="form-control" placeholder="Password again">
          </div>
        </div>
      </div>
    </section>

    <h4>Personal information</h4>
    <section data-step="1">
      <legend>Please fill in your <strong>true</strong> personal information</legend>
      <div class="form-group">
        <label for="name" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Your name: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-user pe-fw"></i></span>
            <input type="text" name="name" class="form-control" placeholder="Firstname and surname">
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="gender" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Gender: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-venus-mars pe-fw"></i></span>
              <div class="radio-inline"><label><input type="radio" name="gender" value="male"><span class="cr"><i class="cr-icon pe-check"></i></span>Male</label></div>
              <div class="radio-inline"><label><input type="radio" name="gender" value="female"><span class="cr"><i class="cr-icon pe-check"></i></span>Female</label></div>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="birthday" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Date of birth: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <div class="input-group-addon">Date:</div>
            <select class="form-control" name="birthday_date">
              <option value="00" selected>-select-</option>
              <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option>
              <option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option>
              <option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option>
              <option value="31">31</option>
            </select>
            <div class="input-group-addon">Month:</div>
            <select class="form-control" name="birthday_month">
              <option value="00" selected>-select-</option>
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
            <div class="input-group-addon">Year:</div>
            <select class="form-control" name="birthday_year">
              <option value="0000" selected>-select-</option>
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
      </div>
      <div class="form-group">
        <label for="province" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Province: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-globe pe-fw"></i></span>
            <input type="text" name="province" class="form-control" placeholder="Province">
          </div>
        </div>
      </div>
    </section>

    <h4>Contact information</h4>
    <section data-step="2">
      <legend>And lastly, please provide your <strong>true</strong> contact infromation</legend>
      <div class="form-group">
        <label for="mobile" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 control-label">Mobile: <span class="label label-danger">required</span></label>
        <div class="col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="input-group">
            <span class="input-group-addon"><i class="pe-mobile pe-fw"></i></span>
            <input type="text" name="mobile" class="form-control" placeholder="Mobile number">
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-offset-0 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-12 col-sm-7 col-md-7 col-lg-7">
          <div class="checkbox">
            <label><input type="checkbox" id="agree" name="agree"><span class="cr"><i class="cr-icon pe-check"></i></span> I agree to terms and policy</label>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="col-xs-offset-0 col-sm-offset-4 col-md-offset-4 col-lg-offset-4 col-xs-12 col-sm-7 col-md-7 col-lg">
          <button class="btn btn-info" name="submit" type="submit">Register <i class="pe-check-circle-o"></i></button> <button class="btn btn-default" name="cancel" type="reset">Cancel</button>
        </div>
      </div>
    </section>
  </div>
</form>

<script>
  $(document).ready(function() {
    $('#wizard').steps({
      headerTag: 'h4',
      bodyTag: 'section',
      onStepChanging: function(e, currentIndex, newIndex) {
        var fv = $('#wizard').data('formValidation'),
        $container = $('#wizard').find('section[data-step="' + currentIndex +'"]');
        fv.validateContainer($container);
        var isValidStep = fv.isValidContainer($container);
        if (isValidStep === false || isValidStep === null) { return false; }
        return true;
      },
      onFinishing: function(e, currentIndex) {
        var fv = $('#wizard').data('formValidation'),
        $container = $('#wizard').find('section[data-step="' + currentIndex +'"]');
        fv.validateContainer($container);
        var isValidStep = fv.isValidContainer($container);
        if (isValidStep === false || isValidStep === null) { return false; }
        return true;
      },
      onFinished: function(e, currentIndex) {
        $('#wizard').formValidation('defaultSubmit');
        // $('#welcomeModal').modal();
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
              message: 'The username is required'
            },
            emailAddress: {
              message: 'The input is not a valid email address'
            }
          }
        },
        password: {
          validators: {
            notEmpty: {
              message: 'The password is required'
            },
            stringLength: {
              min: 6,
              message: 'Password must be more than 6 characters long'
            },
            different: {
              field: 'username',
              message: 'The password cannot be the same as username'
            }
          }
        },
        password2: {
          validators: {
            notEmpty: {
              message: 'The confirm password is required'
            },
            stringLength: {
              min: 6,
              message: 'Password must be more than 6 characters long'
            },
            identical: {
              field: 'password',
              message: 'The confirm password must be the same as original one'
            }
          }
        },
        name: {
          validators: {
            notEmpty: {
              message: 'Your full name is required (both firstname and surname)'
            }
          }
        },
        gender: {
          validators: {
            notEmpty: {
              message: 'You must select one answer'
            }
          }
        },
        birthday_date: {
          validators: {
            notEmpty: {
              message: 'Please select your birthday date'
            }
          }
        },
        birthday_month: {
          validators: {
            notEmpty: {
              message: 'Please select your birthday month'
            }
          }
        },
        birthday_year: {
          validators: {
            notEmpty: {
              message: 'Please select your birthday year'
            }
          }
        },
        province: {
          validators: {
            notEmpty: {
              message: 'Please specify your birthday'
            }
          }
        },
        mobile: {
          validators: {
            notEmpty: {
              message: 'Please specify your birthday'
            },
            stringLength: {
              min: 10,
              message: 'Mobile number should be 10 digits'
            },
            regexp: {
              regexp: /^[0-9]+$/,
              message: 'Mobile number should only be numeric'
            }
          }
        },
        agree:  {
          validators: {
            notEmpty: {
              message: 'You must agree with our terms and policy'
            }
          }
        }
      }
    });
  });
</script>

<hr>

<section class="signupwithsocial">
  <h2>New member registration with one of the Social Network accounts</h2>
  <p>Alternatively, you can choose to register by using one of your current Social Network accounts.</p>
  <p>We currently support for 3 main Social Network players as listed out with the link to proceed further below:</p>
  <ul>
    <li>Sign in with <i class="pe-facebook pe-fw"></i> Facebook</li>
    <li>Sign in with <i class="pe-twitter pe-fw"></i> Twitter</li>
    <li>Sign in with <i class="pe-google pe-fw"></i> Google</li>
  </ul>
</section>