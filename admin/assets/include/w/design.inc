<?php

$showprojectdescription = 0;

$me = "/admin/?w=design&s=".$_GET['s'];

if ($_POST['selectA']) {
  $qA = $db->prepare("UPDATE j_projects SET show_top = :show_top WHERE id = :surveyid");
  $qA->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qA->bindValue(':show_top', $_POST['selectA'], PDO::PARAM_INT);
  $qA->execute();
} else if ($_POST['selectB']) {
  $qB = $db->prepare("UPDATE j_projects SET show_navbar = :show_navbar WHERE id = :surveyid");
  $qB->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qB->bindValue(':show_navbar', $_POST['selectB'], PDO::PARAM_INT);
  $qB->execute();
} else if ($_POST['selectC']) {
  $qC = $db->prepare("UPDATE j_projects SET show_detail = :show_detail WHERE id = :surveyid");
  $qC->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qC->bindValue(':show_detail', $_POST['selectC'], PDO::PARAM_INT);
  $qC->execute();
} else if ($_POST['selectD']) {
  $qD = $db->prepare("UPDATE j_projects SET show_about = :show_about WHERE id = :surveyid");
  $qD->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qD->bindValue(':show_about', $_POST['selectD'], PDO::PARAM_INT);
  $qD->execute();
} else if ($_POST['selectE']) {
  $qE = $db->prepare("UPDATE j_projects SET show_logo = :show_logo WHERE id = :surveyid");
  $qE->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qE->bindValue(':show_logo', $_POST['selectE'], PDO::PARAM_INT);
  $qE->execute();
} else if ($_POST['selectF']) {
  $qE = $db->prepare("UPDATE j_projects SET show_colour = :show_colour WHERE id = :surveyid");
  $qE->bindValue(':surveyid', $_POST["surveyid"], PDO::PARAM_INT);
  $qE->bindValue(':show_colour', $_POST['selectF'], PDO::PARAM_INT);
  $qE->execute();
}

// Get projcet title
$q1 = $db->prepare("SELECT P.*, C.company, C.description AS DD, C.logo, C.website FROM j_projects P, j_companies C WHERE P.companyid = C.id AND P.id = :surveyid");
$q1->bindValue(':surveyid', $_GET["s"], PDO::PARAM_INT);
$q1->execute();
if ($q1->rowCount() == 0) {
  $title = "An error has been found";
  pageHeader($title);
  echo "<h2>We could not find a match for ID for this project</h2>\n";
  echo "<p>There has been an error locating the project you are looking for. This is caused by two reasons which are either there is a false in our system (which is very unlikely) or you use our system incorrectly.</p>";
  echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
  echo mkerror("In fact we typically consider such action as violent.");
  echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
  pageFooter();
  $q2 = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried accessing a non-existing project', '5')");
  $q2->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
  $q2->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
  $q2->execute();
  exit;
}
while ($row = $q1->fetchObject()) {
  $project = $row->title;
  $status = $row->status;
  $website = $row->website;
  if ($row->logo) {
    if ($website) { $clientlogo = "<a href=\"$website\" title=\"$row->company\" target=\"_blank\"><img src=\"$row->logo\" title=\"$row->company\"></a>"; }
    else { $clientlogo = "<img src=\"$row->logo\" title=\"$row->company\">"; }
  }
  else { $clientlogo = ""; }
  $companyname = $row->company;
  $desc = strip_tags($row->DD);
  $description = nl2br($row->description);
  $showtopper = $row->show_top;
  $shownavbar = $row->show_navbar;
  $showdetail = $row->show_detail;
  $showabout = $row->show_about;
  $showlogo = $row->show_logo;
  $showcolour = $row->show_colour;
}

if ($_SESSION['level'] != "9") {
  if ($status != 1) {
    $title = "An error has been found";
    pageHeader($title);
    echo "<h2>This project is no longer editable</h2>\n";
    echo "<p>You only can make change on this with projects that have not started the data-collection. This prevents having any unexpected errors at the analysis stage such as a conflict based on a mismatch information between pre and post data-collection.</p>";
    echo "<p>If you have tried entering the project ID manually, we strongly suggest you should stop doing this. You should instead use the client dashboard which will never lead you to a wrong link or any errors like this at all.</p>";
    echo mkerror("In fact we typically consider such action as violent.");
    echo "<p>Our system has already recorded this error including your identity and timestamp.</p>";
    pageFooter();
    $q = $db->prepare("INSERT INTO j_users_logs (userid, ip, data, critical) VALUE (:userid, :ip, '" . $_SESSION["email"] . " tried editing a non-editable project', '5')");
    $q->bindValue(':userid', $_SESSION["userid"], PDO::PARAM_INT);
    $q->bindValue(':ip', $_SESSION["ip"], PDO::PARAM_INT);
    $q->execute();
    exit;
  }
}

$title = "Questionnaire design";
$template = "Appearance settings";
$help = "Routing guideline";
pageHeader($title);
echo "<h2 id=\"h2pageTitle\"></h2>";
echo "<p>This page allows you to freely edit your survey which includes both survey information and the arrangement of tailor-made questions that you need. You may want to test your survey to ensure the logical flow and the right routing are implemented. We also recommend ading the translation into the same version to make it less complicated after all.</p>\n";
echo "<p>While you can edit your questionnaire as often as you want, it is important to click save to ensure all the changes will not be lost.</p>\n";
echo "<br>\n";

?>

<nav>
  <ul class="nav nav-tabs">
<?php if (($_POST['selectA']) || ($_POST['selectB']) || ($_POST['selectC']) || ($_POST['selectD']) || ($_POST['selectE']) || ($_POST['selectF'])) { ?>
    <li><a href="#1" data-toggle="tab"><i class="pe-edit pe-fw"></i> <?php echo $title; ?></a></li>
    <li class="active"><a href="#2" data-toggle="tab"><i class="pe-cog pe-fw"></i> <?php echo $template; ?></a></li>
    <li><a href="#3" data-toggle="tab"><i class="pe-book pe-fw"></i> <?php echo $help; ?></a></li>
<?php } else { ?>
    <li class="active"><a href="#1" data-toggle="tab"><i class="pe-edit pe-fw"></i> <?php echo $title; ?></a></li>
    <li><a href="#2" data-toggle="tab"><i class="pe-cog pe-fw"></i> <?php echo $template; ?></a></li>
    <li><a href="#3" data-toggle="tab"><i class="pe-book pe-fw"></i> <?php echo $help; ?></a></li>
<?php } ?>
  </ul>
</nav>

<br>

<div id="showreadonly"></div><div id="showsaving"></div><div id="showsavesuccess"></div>

<div class="tab-content">
<?php if (($_POST['selectA']) || ($_POST['selectB']) || ($_POST['selectC']) || ($_POST['selectD']) || ($_POST['selectE']) || ($_POST['selectF'])) { ?>
  <div id="1" class="tab-pane fade">
<?php } else { ?>
  <div id="1" class="tab-pane fade in active">
<?php } ?>
    <h3>Project <?php echo $project; ?></h3>
    <?php if (($description) && ($showprojectdescription == true)) { ?>
    <div class="row">
      <div class="container">
        <?php if ($description) { ?>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 projectdetail">
          <?php if ($d1) { echo "<div class=\"pull-right companylogo\">$clientlogo</div>\n"; } ?>
          <h5 class="projectdetailhead">รายละเอียดงานวิจัย</h5>
          <p class="projectdescription"><?php echo $description; ?></p>
        </div>
        <?php } else if ($d1) { echo "<div class=\"companylogo\">$clientlogo</div>\n"; } ?>
      </div>
    </div>
    <?php } ?>
    <br>
    <div id="editor"></div>
    <br><br>
  </div>
<?php if (($_POST['selectA']) || ($_POST['selectB']) || ($_POST['selectC']) || ($_POST['selectD']) || ($_POST['selectE']) || ($_POST['selectF'])) { ?>
  <div id="2" class="tab-pane fade in active">
<?php } else { ?>
  <div id="2" class="tab-pane fade">
<?php } ?>
    <h3>Customise the look of your survey</h3>
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Colour</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectF" class="form-control input-sm" onchange="this.form.submit()">
<?php
$options = array("Blue" => "1", "Red" => "2", "Violet" => "3", "Green" => "4", "Yellow" => "5", "Maroon" => "6", "Orange" => "7");
foreach($options as $a => $b) {
  if ($b == $showcolour) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Top menu</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectA" class="form-control input-sm" onchange="this.form.submit()">
<?php
$options = array("Hide" => "1", "Show" => "2");
foreach($options as $a => $b) {
  if ($b == $showtopper) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Navigator</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectB" class="form-control input-sm" onchange="this.form.submit()">
<?php
$options = array("Hide" => "1", "Type #1" => "2", "Type #2" => "3", "Type #3 (full)" => "4");
foreach($options as $a => $b) {
  if ($b == $shownavbar) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Project detail</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectC" class="form-control input-sm" onchange="this.form.submit()">
<?php
$options = array("Hide" => "1", "Show" => "2");
foreach($options as $a => $b) {
  if ($b == $showdetail) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Company profile</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectD" class="form-control input-sm" onchange="this.form.submit()">
<?php
$options = array("Hide" => "1", "Show" => "2");
foreach($options as $a => $b) {
  if ($b == $showabout) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 boxborder">
        <div class="row boxoutside">
          <div class="col-xs-7 col-sm-7 col-md-7 col-lg-7 boxmenu">Company logo</div>
          <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 boxmenu boxdrop">
            <form method="post" class="form-inline" action="<?php echo $me; ?>">
              <select name="selectE" class="form-control input-sm" onchange="this.form.submit()">
<?php
$options = array("Hide" => "1", "Show" => "2");
foreach($options as $a => $b) {
  if ($b == $showlogo) { echo "                  <option value=\"$b\" selected>$a</option>\n"; }
  else { echo "                  <option value=\"$b\">$a</option>\n"; }
}
?>
              </select>
              <input type="hidden" name="surveyid" value="<?php echo $_GET['s']; ?>">
            </form>
          </div>
        </div>
      </div>
    </div>
    <br>
    <h4>The actual appearance</h4>
    <div class="row">
      <iframe class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="realexample" src="<?php echo MYHOME."/r.php?s=".$_GET['s']; ?>" frameborder="1" allowfullscreen></iframe>
    </div>
    <br><br>
  </div>
  <div id="3" class="tab-pane fade">
    <h3><?php echo $help; ?></h3>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
        <h4>Visibleif</h4>
        <p>This expression is used for showing or hiding more question(s) when a specific answer is selected by a respondent.</p>
        <p>Below example shows an additional question on "How many kids do you have" will be displayed only when "Yes" is selected in "Do you have a kid(s)?".</p>
        <pre><code class="r">var survey = new Survey.Model({
  showQuestionNumbers: &#x22;off&#x22;,
  questions: [
    { type: &#x22;radiogroup&#x22;, name: &#x22;haveKids&#x22;, title: &#x22;Do you have a kid(s)?&#x22;, choices:[&#x22;Yes&#x22;, &#x22;No&#x22;], colCount: 0},
    { type: &#x22;dropdown&#x22;, name: &#x22;kids&#x22;, title: &#x22;How many kids do you have&#x22;, visibleIf: &#x22;{haveKids}=&#x27;Yes&#x27;&#x22;, choices:[1, 2, 3, 4, 5] }
  ]
});
survey.render(&#x22;surveyElement&#x22;);</code></pre>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
        <h4>Visible trigger</h4>
        <p>This trigger is typically used when there is a need to change the future answers based on the current answer. Multiple list of answers can be used per below example.</p>
        <p>Available operator values are "empty", "notempty", "equal", "notequal", "greater", "less", "greaterorequal", "lessorequal", "contains" and "notcontains". And the default value is "equal".</p>
        <pre><code class="r">var survey = new Survey.Model({
  triggers: [
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, operator: &#x22;equal&#x22;, value: &#x22;sedan&#x22;, questions: [&#x22;Sedan&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, operator: &#x22;equal&#x22;, value: &#x22;sports&#x22;, questions: [&#x22;Sports&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, operator: &#x22;equal&#x22;, value: &#x22;supercar&#x22;, questions: [&#x22;Super Car&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, operator: &#x22;equal&#x22;, value: &#x22;convertible&#x22;, questions: [&#x22;Convertible&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, operator: &#x22;equal&#x22;, value: &#x22;other&#x22;, questions: [&#x22;otherType&#x22;] }
  ],
  questions: [
    { type: &#x22;radiogroup&#x22;, name: &#x22;type&#x22;, title: &#x22;Select the car type&#x22;, hasOther: true, choices: [&#x22;Sedan&#x22;, &#x22;Sports&#x22;, &#x22;Super Car&#x22;, &#x22;Convertible&#x22;] },
    { type: &#x22;radiogroup&#x22;, name: &#x22;Sedan&#x22;, visible: false, title: &#x22;Select the model&#x22;, hasOther: true, choices: [&#x22;BMW M5&#x22;, &#x22;Mazda 6 MPS&#x22;, &#x22;Mitsubishi EVO&#x22;] },
    { type: &#x22;radiogroup&#x22;, name: &#x22;Sports&#x22;, visible: false, title: &#x22;Select the model&#x22;, hasOther: true, choices: [&#x22;Chevrolet Corvette&#x22;, &#x22;Mazda MX-5&#x22;, &#x22;Porsche 911&#x22;] },
    { type: &#x22;radiogroup&#x22;, name: &#x22;Super Car&#x22;, visible: false, title: &#x22;Select the model&#x22;, hasOther: true, choices: [&#x22;McLaren P1&#x22;, &#x22;Lamborghini Miura&#x22;, &#x22;Bugatti Veyron 16.4&#x22;] },
    { type: &#x22;radiogroup&#x22;, name: &#x22;Convertible&#x22;, visible: false, title: &#x22;Select the model&#x22;, hasOther: true, choices: [&#x22;Honda S2000&#x22;, &#x22;Volkswagen Eos&#x22;, &#x22;Volvo C70&#x22;] },
    { type: &#x22;comment&#x22;, name: &#x22;otherType&#x22;, title: &#x22;Please specify&#x22;, visible: false, isRequired: true }
  ]
});
survey.render(&#x22;surveyElement&#x22;);</code></pre>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
        <h4>Complete trigger</h4>
        <p>This trigger is called on the next page action. It completes the survey if the ('question' value 'operator' 'value') returns true.</p>
        <pre><code class="r">var survey = new Survey.Model({
  triggers: [
    { type: &#x22;complete&#x22;, name: &#x22;exit1&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22; },
    { type: &#x22;complete&#x22;, name: &#x22;exit2&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22; }
  ],
  pages: [
    { title: &#x22;What operating system do you use?&#x22;, questions: [
      { type:&#x22;checkbox&#x22;, name:&#x22;opSystem&#x22;, title: &#x22;OS&#x22;, hasOther: true, choices:[&#x22;Windows&#x22;, &#x22;Linux&#x22;, &#x22;Macintosh OSX&#x22;] },
      { type:&#x22;radiogroup&#x22;, name:&#x22;exit1&#x22;, title:&#x22;Do you want to finish the survey?&#x22;, choices: [&#x22;Yes&#x22;, &#x22;No&#x22;], colCount: 0 }
    ]},
    { title: &#x22;What language(s) are you currently using?&#x22;, questions: [
      { type:&#x22;checkbox&#x22;, name:&#x22;langs&#x22;,title:&#x22;Plese select from the list&#x22;, colCount: 4, choices:[&#x22;Javascript&#x22;, &#x22;Java&#x22;, &#x22;Python&#x22;, &#x22;CSS&#x22;, &#x22;PHP&#x22;, &#x22;Ruby&#x22;, &#x22;C++&#x22;, &#x22;C&#x22;,  &#x22;Shell&#x22;, &#x22;C#&#x22;, &#x22;Objective-C&#x22;, &#x22;R&#x22;, &#x22;VimL&#x22;, &#x22;Go&#x22;, &#x22;Perl&#x22;, &#x22;CoffeeScript&#x22;,  &#x22;TeX&#x22;, &#x22;Swift&#x22;, &#x22;Scala&#x22;, &#x22;Emacs List&#x22;, &#x22;Haskell&#x22;, &#x22;Lua&#x22;, &#x22;Clojure&#x22;,  &#x22;Matlab&#x22;, &#x22;Arduino&#x22;, &#x22;Makefile&#x22;, &#x22;Groovy&#x22;, &#x22;Puppet&#x22;, &#x22;Rust&#x22;, &#x22;PowerShell&#x22;] },
      { type:&#x22;radiogroup&#x22;, name:&#x22;exit2&#x22;, title:&#x22;Do you want to finish the survey?&#x22;, choices: [&#x22;Yes&#x22;, &#x22;No&#x22;], colCount: 0 }
    ]},
    { title: &#x22;Please enter your name and e-mail&#x22;, questions: [
      { type: &#x22;text&#x22;, name: &#x22;name&#x22;, title: &#x22;Name:&#x22; },
      { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Your e-mail&#x22; }
    ]}
  ]
});
survey.render(&#x22;surveyElement&#x22;);</code></pre>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="margin-bottom:20px">
        <h4>SetValue trigger</h4>
        <pre><code class="r">var survey = new Survey.Model({
  triggers: [
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, setToName: &#x22;name&#x22;, setValue: &#x22;Jon Snow&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, setToName: &#x22;email&#x22;, setValue: &#x22;jon.snow@nightwatch.com&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, setToName: &#x22;tempvar&#x22;, isVariable: true, setValue: &#x22;You have decided to use your current information.&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;No&#x22;, setToName: &#x22;name&#x22;, setValue: &#x22;&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;No&#x22;, setToName: &#x22;email&#x22;, setValue: &#x22;&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;No&#x22;, setToName: &#x22;tempvar&#x22;, isVariable: true, setValue: &#x22;You have decided not to use your current information.&#x22; }
  ],
  pages: [
    { title: &#x22;Customer information&#x22;, questions: [
      { type:&#x22;radiogroup&#x22;, name:&#x22;copy&#x22;, title: &#x22;Use your current data&#x22;, choices:[&#x22;Yes&#x22;, &#x22;No&#x22;], colCount: 0 },
      { type: &#x22;text&#x22;, name: &#x22;name&#x22;, title: &#x22;Name:&#x22; },
      { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Your e-mail&#x22;, validators: [{ type:&#x22;email&#x22; }] }
    ]}
  ],
  completedHtml: &#x22;&#x3C;p&#x3E;&#x3C;h4&#x3E;Thank you for sharing this information with us.&#x3C;/h4&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;Your name is: &#x3C;b&#x3E;{name}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;Your email is: &#x3C;b&#x3E;{email}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;This information is not in the survey data result:&#x3C;b&#x3E; {tempvar}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x22;
});
survey.render(&#x22;surveyElement&#x22;);</code></pre>
      </div>
    </div>
    <br><br>
  </div>
</div>


<script type="text/javascript">

  function getsurveydata(id) {
    var result = "";
    $.ajax({
      url: api + '/survey/' + id ,
      dataType: 'json',
      type: 'get',
      cache: false,
      async: false,
      success: function(data) { result = data; }
    });
    return result;
  }

  // Start scripting by pe (phumin@sawasdee.org)
  var options = {
    // questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "matrixdynamic", "html"],
    questionTypes: ["rating", "radiogroup", "dropdown", "checkbox", "text", "multipletext", "comment", "file", "matrix", "matrixdropdown", "html"],
    showJSONEditorTab: true,
    showTestSurveyTab: true,
    showEmbededSurveyTab: false,
    generateValidJSON: true,
  };
  // options.generateValidJSON = true;
  Survey.Survey.cssType = "bootstrap";
  Survey.JsonObject.metaData.removeProperty("survey", "clearInvisibleValues");
  Survey.JsonObject.metaData.removeProperty("survey", "cookieName");
  Survey.JsonObject.metaData.removeProperty("survey", "focusFirstQuestionAutomatic");
  Survey.JsonObject.metaData.removeProperty("survey", "locale");
  Survey.JsonObject.metaData.removeProperty("survey", "questionTitleTemplate");
  Survey.JsonObject.metaData.removeProperty("survey", "questionTitleLocation");
  Survey.JsonObject.metaData.removeProperty("survey", "requiredText");
  Survey.JsonObject.metaData.removeProperty("survey", "completeText");
  Survey.JsonObject.metaData.removeProperty("survey", "pageNextText");
  Survey.JsonObject.metaData.removeProperty("survey", "pagePrevText");
  // Survey.JsonObject.metaData.removeProperty("survey", "mode");
  Survey.JsonObject.metaData.removeProperty("survey", "sendResultOnPageNext");
  Survey.JsonObject.metaData.removeProperty("survey", "storeOthersAsComment");
  Survey.JsonObject.metaData.removeProperty("survey", "surveyPostId");
  Survey.JsonObject.metaData.removeProperty("survey", "surveyId");
  Survey.JsonObject.metaData.removeProperty("page", "visibleIf");
  // Survey.JsonObject.metaData.removeProperty("questionbase", "hasComment");
  Survey.JsonObject.metaData.removeProperty("questionbase", "width");
  // Survey.JsonObject.metaData.removeProperty("questionbase", "commentText");
  var editor = new SurveyEditor.SurveyEditor("editor", options);
  var surveyid = <?php echo $_GET['s']; ?>;
  var userid = <?php echo $_SESSION['userid']; ?>;
  var email = "<?php echo $_SESSION['email']; ?>";
  var ip = "<?php echo $_SESSION['ip']; ?>";
  var level = <?php echo $_SESSION['level']; ?>;
  var api = "http://www.siamsquare.org.uk";
  $.ajaxSetup({ headers: { 'X-Requested-With': 'aa5e1ab4-b0bf-4e82-8584-7cf4e9fdeaa8' } });
  $('#showsaving').html("<div class='alert alert-info'><i class='pe-spinner pe-pulse pe-lg pe-fw'></i> The system is now saving your data, please wait until the green message shows up which shoud be in a minute</div>").hide();
  $('#showsavesuccess').html("<div class='alert alert-success'><i class='pe-save pe-fw'></i> Data has been saved successfully</div>").hide();
  $('#showreadonly').html("<div class='alert alert-warning'><i class='pe-exclamation-triangle pe-fw'></i> Because you are not the owner of this survey, the system puts you into the <strong>read-only mode</strong></div>").hide();
  mm = getsurveydata(surveyid);
  var blank = JSON.stringify({ "completeText": "ยืนยันและส่งความคิดเห็น", "completedHtml": "<h2><i class='pe-flag-checkered pe-fw'></i> คุณได้ตอบแบบสอบถามเสร็จสมบูรณ์แล้ว</h2>\n\n<p>ความคิดเห็นของคุณได้ถูกบันทึกและจัดเก็บเข้าสู่ระบบของเราเป็นที่เรียบร้อยแล้ว ซึ่งเราจะนำความคิดเห็นของคุณและของผู้ที่ร่วมตอบคำถามท่านอื่นๆมารวมกันก่อนจะ ดำเนินการต่อไปในขั้นตอนการประมวลผลและการวิเคราะห์ผล</p>\n\n<p>เราขอย้ำกับคุณอีกครั้งว่า ระบบของเราได้รับการออกแบบและสร้างโดยมุ่งเน้นในเรื่องความลับของข้อมูลและผู้ให้ข้อมูล ด้วยเหตุผลนี้คุณจะสามารถมั่นใจได้ว่าข้อมุลของคุณจะถูกใช้อย่างเหมาะสมและไม่มีการเปิดเผยรายละเอียดเป็นรายบุคคลอย่างเด็ดขาด</p>\n\n<p>สุดท้ายนี้ ในนามของบริษัทฯ เราขอขอบพระคุณที่สละเวลาแสดงความคิดเห็นที่แท้จริงให้กับเรา ทุกๆความคิดเห็นของคุณนั้นมีค่ายิ่งสำหรับเรา เพราะข้อมูลเหล่านี้จะถูกนำไปใช้เพื่อพัฒนาผลิตภัณฑ์​หรือบริการต่างๆให้ดียิ่งขึ้นเพื่อให้เกิดการพัฒนาก้าวหน้าต่อไปในอนาคต</p>", "pageNextText": "หน้าถัดไป", "pagePrevText": "หน้าที่แล้ว", "pages": [{ "name": "page1" }], "questionTitleTemplate": "{no}. {title} {require}", "locale": "th", "focusFirstQuestionAutomatic": true });
  if (mm.data) { editor.text = mm.data; } else if (localStorage.getItem("editdata." + surveyid)) { editor.text = localStorage.getItem("editdata." + surveyid); } else { editor.text = blank; }
  // var readonly = { mode: "display", hello: true };
  // $.extend(editor.text, readonly); console.log(editor.text);
  // editor.text.push(readonly); console.log(editor.text);
  if (userid == mm.userid) { var owner = true; } else { var owner = false; }
  if (level == 9) { var cansave = true; } else if (level == 6) { var cansave = true; }
  else if (level == 5) { if (owner == true) { var cansave = true; } }
  editor.surveyId = mm.id;
  editor.surveyPostId = mm.id;
  editor.saveSurveyFunc = function() {
    $.ajax({
      url: api + '/survey/' + surveyid + '/updatedata',
      dataType: 'json',
      type: 'put',
      contentType: 'application/json; charset=utf-8',
      data: '{ "data": ' + JSON.stringify(editor.text) + ' }',
      success: function(data) {
        $.ajax({
          url: api + '/log/' + userid + '/' + surveyid,
          dataType: 'json',
          type: 'post',
          contentType: 'application/json; charset=utf-8',
          data: '{ "userid": "' + userid + '", "ip": "' + ip + '", "data": "' + email + ' edited and saved ' + mm.title + ' (id=' + mm.id + ')", "critical": "2" }',
          success: function(data) { result = data; }
        });
      }
    });
  };
  if (cansave != true) {
    $('#showreadonly').show();
    $('#btn-save').addClass('disabled');
    $('#btn-save').prop('disabled', true);
  }
  if (mm.title) { var title = "Edit my questionnaire"; var pname = "Project " + mm.title; } else { var title = "Start a new questionnaire"; }
  document.getElementById('h2pageTitle').innerHTML = title;
  // document.getElementById('projectname').innerHTML = pname;
  $('#btn-save').on('click', function() {
    if (typeof(Storage) !== "undefined") { localStorage.setItem("editdata." + surveyid, JSON.stringify(editor.text)); }
    var $this = $(this);
    $this.button('loading');
    $('#showsaving').show();
    window.setTimeout(function () { $("#showsaving").slideUp(500, function () { $("#showsaving").hide(); }); }, 2000);
    setTimeout(function() {
      $this.button('saved');
      $('#showsavesuccess').show();
      window.setTimeout(function () { $("#showsavesuccess").slideUp(500, function () { $("#showsavesuccess").hide( function () { $this.button('reset'); }); }); }, 2000);
    }, 3000);
  });
  // localStorage
  for (var i = 0; i < localStorage.length; i++) {
    var name = localStorage.key( i );
    var value = localStorage.getItem( name );
  }
  // localStorage.clear();

</script>

<?php backButton("/admin/?w=surveys", "Back to the main page", "danger"); ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
