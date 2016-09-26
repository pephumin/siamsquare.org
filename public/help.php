<?php

$_SERVER['BASE_PAGE'] = 'help.php';
$title = "Help page";
require_once $_SERVER['DOCUMENT_ROOT'].'/admin/assets/include/config.php';
require_once DOCROOT.'/admin/assets/include/lib.inc';
require_once DOCROOT.'/public/assets/include/template.php';
require_once DOCROOT.'/public/assets/include/first.php';

pageHeader($title);

?>

<h2 id="top">Survey Help System</h2>

<div class="row">
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
    <p><a href="#overview">Overview</a></p>
    <ul class="pe-ul">
      <li><small><i class="pe-li pe-check-square"></i> <a href="#login">Logging in</a></small></li>
      <li><small><i class="pe-li pe-check-square"></i> <a href="#signup">Signing up</a></small></li>
      <li><small><i class="pe-li pe-check-square"></i> <a href="#loginhelp">Getting help</a></small></li>
      <li><small><i class="pe-li pe-check-square"></i> <a href="#public">Public surveys</a></small></li>
    </ul>
    <p><a href="#dashboard">Your dashboard</a></p>
    <ul class="pe-ul">
      <li><small><i class="pe-li pe-check-square"></i> <a href="#mysurveys">My surveys</a></small></li>
      <li><small><i class="pe-li pe-check-square"></i> <a href="#myhistory">My history</a></small></li>
      <li><small><i class="pe-li pe-check-square"></i> <a href="#mytools">My tools</a></small></li>
    </ul>
    <p><a href="#complete">Completing surveys</a></p>
    <ul class="pe-ul">
      <li><small><i class="pe-li pe-check-square"></i> <a href="#save">Saving for later</a></small></li>
      <li><small><i class="pe-li pe-check-square"></i> <a href="#submit">Submitting</a></small></li>
    </ul>
  </div>

  <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
    <h3 id="overview">Overview <small>(<a href="#top"><i class="pe-arrow-circle-up pe-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <p>Welcome to our online survey system!</p>
    <p><?php echo $yourAdminIs; ?></p>
    <p>Let's get started.</p>
    <p>When you first access the survey system, you'll be asked to log in:</p>
    <p><img src='/public/images/0/login.png' alt='first page' title='The first page of the survey system: log in, sign up, take public surveys, or get help' /></p>

      <h4 id="login">Logging in</h4>
      <p>If your survey administrator has given you an account, enter your User ID and Password in the corresponding fields within the box labeled "Login".  When done, click the Login button.</p>
      <p>Please remember that the User ID and Password are case sensitive, so pay special attention to your typing.  For your security, your password is not shown while you type it; instead, your browser obscures each letter with an asterisk (<code>*</code>) or other character.</p>
      <p>If your User ID and Password aren't recognized, one of the following errors will be displayed:</p>
      <?php echo mkerror ("Incorrect User ID or Password, or your account has been disabled/expired."); ?>
      <p>If you receive an error, first try retyping your User ID and Password (check your caps lock key, as well).  If you are absolutely certain you are typing your information correctly, contact your survey administrator for assistance.</p>

      <h4 id="signup">Signing up</h4>
      <p>If allowed by your survey administrator, you may create a new account by clicking on the "Don't have an account? Sign up" link in the lower right hand corner of the login box.  You will be prompted for your name, email address, desired user ID and password.  If the requested user ID is available, your account will be created and you can log in using the given user ID and password.</p>
      <p>However, please note: your survey administrator may need to give you access to additional surveys after you create your new account.  If, after logging in, you don't see the surveys you expect, contact your survey administrator for further assistance.</p>

      <h4 id="loginhelp">Getting help</h4>
      <p>This help page is available both before and after logging in: the link labeled "Help" always brings you here.  The links in the menu to the left allow you to navigate within this page.  The "Back to Top" link after each section will take you to the top of the page, from which you can select additional menu links.</p>
      <p>Remember, you can always contact your survey administrator for further information. <?php echo $yourAdminIs; ?></p>

      <h4 id="public">Public surveys</h4>
      <p>If your survey administrator has created public surveys (which do not require you to log in to take) and wants them to be shown, then they are available in the box labeled "Public Surveys."  Simply click on any of the links to take that survey.</p>
      <p>If you have an account, we recommend you log in before taking any public surveys. Once you log in, you will have the opportunity to take the public surveys.  By logging in first, your responses to the public survey will be identified as yours, which will then appear in your survey history (more on your survey history, below).</p>

    <h3 id="dashboard">Your dashboard <small>(<a href="#top"><i class="pe-arrow-circle-up pe-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <p>After you log in, you'll see your dashboard:</p>
    <p><img src='/public/images/0/dashboard.png' alt='dashboard' title='The dashboard, your view into the online survey system' /></p>

      <h4 id="mysurveys">My surveys</h4>
      <p>These are the surveys that you can take.  These surveys can be private to you, or a group you're in, or they can be public surveys.</p>
      <p>If you have at least one survey available, you'll see a table listing the title, status, and last access data for all your available surveys.  If you do not have any surveys available, you'll see a message indicating such.</p>
      <p>The survey title is a link: follow those links to take each survey.  The survey status indicates how you have, so far, interacted with the survey:</p>
      <ul>
        <li><u>Not Started</u>: You have not yet submitted a response to this survey.  You may have looked at the survey, but you haven't submitted any responses. You may start this survey at any time.</li>
        <li><u>Started, but Incomplete</u>: You have started this survey, but left early and saved your responses.  You may return to this survey at any time. This status is only available if the survey administrator allows you to save your responses to return to later.</li>
        <li><u>Some Finished, some Incomplete</u>: You have submitted at least one complete response, but have saved another for later.  This status is only available for surveys that allow you to respond multiple times.</li>
        <li><u>Finished</u>: You have submitted at least one complete response to this survey.</li>
      </ul>
      <p>The last access column indicates when you last visited the survey.</p>

      <h4 id="myhistory">My history</h4>
      <p>These are the surveys that you have had access to at one time, but the survey administrator has closed further access to them.  Because these surveys are closed, you can no longer submit responses to them.</p>
      <p>Like My Surveys, My History lists the survey title, status, and last access date.</p>

      <h4 id="mytools">My tools</h4>
      <p>In this area, you'll find links to get help as well as logout.  Your survey administrator may also have given you access to these tools:</p>
      <ul>
        <li><u>Change my profile</u>: This tool allows you to change your personal information, including your name and email address.</li>
        <li><u>Change my password</u>: This tool allows you to change your password.  To ensure that only you change your password, you must enter your current password, as well as your desired new password.</li>
        <li><u>E-mail support</u>: This tool opens up an email composition window directly to the survey administrator.</li>
      </ul>

    <h3 id="complete">Completing surveys <small>(<a href="#top"><i class="pe-arrow-circle-up pe-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <p>Completing a survey is very easy: read the questions, top to bottom, and answer each.  Let's start with the basics:</p>
    <p><img src='/public/images/0/samplesurvey1.png' alt='sample survey, first page' title='The first page of a sample survey' /></p>
    <p>Every survey has a title.  In the image above, the title is "Sample Survey."  A survey may also have a sub-title and instructions, both of which are found below the title.</p>
    <p>A survey may be on a single page, or may span multiple pages.  If a survey spans multiple pages, your current page and the total number of pages will be shown.  You may always move forward to the next page, and the survey administrator may also allow you to move backward.
    <p>Some questions require an answer, while others do not.  If an answer is mandatory, the question will be marked with a red asterisk.  You must answer the question before moving to the next page or submitting your final answers.</p>
    <p>The most basic question types are radio buttons, text fields, and essay boxes, as seen in the image above.  Radio buttons allow you to choose one, out of many, options.  A text field allows you to type one line of text.  An essay box allows you to type many lines of text.  The survey administrator may limit the number of characters you can type into a text field or essay box.</p>
    <p>Let's look at more question types:</p>
    <p><img src='/public/images/0/samplesurvey2.png' alt='sample survey, second page' title='The second (and last) page of a sample survey' /></p>
    <p>Checkboxes allow you to choose multiple options from a list.  Click in the square beside the item and a "check" will appear, indicating your selection.  Click in the square again to remove the check.</p>
    <p>Drop-downs allow you to choose one item from a list of items; in this way, they are very much like radio buttons.  Click the down arrow on the right of the drop-down, then select one of the items from the list that appears.  Your selection will appear to the left of the down arrow.</p>
    <p>A rating scale (technically called a "Likert scale") is a special kind of radio button answer, where you indicate your degree of agreement with the presented statement.  You may choose one out of the five possible options.</p>
    <p>A date entry field looks like a text field, but requires that you enter a value that can be understood to be a date.  For example, "21/09/2003" for September 21, 2003.</p>
    <p>A numeric field also looks like a text field, but requires that you enter a number.</p>

      <h4 id="save">Saving for later</h4>
      <p>If the survey administrator allows you to save a survey, you will see a "Save" button at the bottom of each page in your survey.  When you click the save button, the survey system remembers your responses so that you may return to the survey at a later time to complete it.</p>
      <p>When you return to the survey, the survey system will automatically fill in your previous answers and allow you to pick up from where you left off.</p>

      <h4 id="submit">Submitting</h4>
      <p>When you have finished taking the survey, click the Submit Survey button.  Your responses will be saved and you will be taken to a thank you page.</p>
      <p><strong>Please do not use your back button to return to the survey.</strong></p>
      <p>From the thank you page, you may return to your dashboard.</p>

  </div>
</div>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
