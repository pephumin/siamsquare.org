<?php require_once "assets/include/template.php"; ?>
<?php pageHeader("Log in"); ?>

<div class="container">

  <form name="clientloginform" id="clientloginform" method="post" class="form-horizontal">
    <h2>Client login</h2>
    <p>This section is reserved only for our clients whom we have granted with a high level of secured access. Within this section you will be able to access to a highly confidential data such as questionnaire design, data collected from respondents, reports, etc. We carefully design our system to ensure such high important data is kept separately for different users or user groups.</p>
    <p>Should you need any support for accessing this section, please do not hesitate to contact our staff right away.</p>
    <div class="form-group has-feedback">
      <label for="username" class="col-sm-3 control-label">Username:</label>
      <div class="col-sm-9">
      <input type="text" name="username" id="username" class="form-control" placeholder="Username" />
      </div>
    </div>
    <div class="form-group has-feedback">
      <label for="password" class="col-sm-3 control-label">Password:</label>
      <div class="col-sm-9">
      <input type="password" name="password" id="password" class="form-control" placeholder="Password">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <div class="checkbox">
        <label><input type="checkbox" checked> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-3 col-sm-9">
        <button class="btn btn-success" name="Login" type="submit">Sign in</button>
      </div>
    </div>
  </form>

  <div class="alert alert-warning alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="fa fa-bullhorn"></i>&nbsp; <p><strong>UNAUTHORIZED ACCESS TO THIS COMPUTER SYSTEM IS PROHIBITED BY LAW</strong></p>
    <p>You are accessing a private computer network which includes: (1) this computer, (2) this computer network, (3) all computers connected to this network, and (4) all devices and storage media attached to this network or to a computer on this network. This information system is provided for registered clients authorized use only. Unauthorized or improper use of this system may result in disciplinary action, as well as civil and criminal penalties.</p>
    <p>If you do not have an access, please contact sales for setting up a master login/password for your company.</p>
    <p>By using this information system, you understand and consent to the following:</p>
    <ul>
      <li>You have no reasonable expectation of privacy regarding any communication or data transiting or stored on this information system. At any time, and for any lawful purpose, we may monitor, intercept, and search and seize any communication or data transiting or stored on this information system.</li>
      <li>Any communication or data transiting or stored on this information system may be disclosed or used for any lawful purpose.</li>
    </ul>
  </div>

  <div class="row">
    <div class="col-xs-3 alert alert-geopattern1 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 1</p></div>
    <div class="col-xs-3 alert alert-geopattern2 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 2</p></div>
    <div class="col-xs-3 alert alert-geopattern3 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 3</p></div>
    <div class="col-xs-3 alert alert-geopattern4 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 4</p></div>
    <div class="col-xs-3 alert alert-geopattern5 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 5</p></div>
    <div class="col-xs-3 alert alert-geopattern6 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 6</p></div>
    <div class="col-xs-3 alert alert-geopattern7 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 7</p></div>
    <div class="col-xs-3 alert alert-geopattern8 alert-dismissible" role="alert"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="pe-cog pe-spin pe-2x"></i><p>Pattern type 8</p></div>
  </div>

</div>

<?php pageFooter(); ?>
