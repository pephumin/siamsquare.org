<?php

$_SERVER['BASE_PAGE'] = 'help.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/template.php';

$title = 'Help documents';
//displayHeader($title, $scrollspy = 1);
displayHeader($title, $scrollspy = NULL);
displayNav();


if (file_exists($_SERVER['DOCUMENT_ROOT'] . '/admin/include/text/help.txt')) {
    echo "<div class=\"container\">";
    include $_SERVER['DOCUMENT_ROOT'] . '/admin/include/text/help.txt';
    echo "</div>\n";
} else {
    echo('<p>' . mkwarn(_("Help not found.")) . "</p>\n");
}

/*

?>

<h2 id="top">Survey Resource</h2>

<br />

<div class="container">
  <div class="row">
  	<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <nav id="scrollspy">
      	<p><a href="#new">Create a Survey</a></p>
      	  <ul class="nav nav-pills nav-stacked fa-ul">
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#general_tab">General Tab</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#question_tab">Question Tab</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#order_tab">Order Tab</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#condition_tab">Condition Tab</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#preview_tab">Preview Tab</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#finish_tab">Finish Tab</a></small></li>
      	  </ul>
        <p><a href="#edit">Edit a Survey</a></p>
        <p><a href="#test">Test a Survey</a></p>
        <p><a href="#status">Publishing a Survey</a></p>
        <p><a href="#themes">Themes</a></p>
          <ul class="nav nav-pills nav-stacked fa-ul">
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#create">Create</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#assign">Assign</a></small></li>
          </ul>
        <p><a href="#types">Response Types/Uses</a></p>
          <ul class="nav nav-pills nav-stacked fa-ul">
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#yes_no">Yes/No</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#textbox">Textbox</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#essay">Essay</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#radio">Radio Buttons</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#check">Check Boxes</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#dropdown">Dropdown Box</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#rating">Rate</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#date">Date</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#numeric">Numeric</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#session_text">Session text</a></small></li>
          </ul>
        <p><a href="#types">Response Types Examples</a></p>
        <p><a href="#results">Survey Results</a></p>
          <ul class="nav nav-pills nav-stacked fa-ul">
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#analysis">Cross Analysis</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#tabulation">Cross Tabulation</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#csv">Exporting to CSV</a></small></li>
          </ul>
        <p><a href="#stats">Survey Statistics</a></p>
          <ul class="nav nav-pills nav-stacked fa-ul">
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#refresh_statistics">Refreshing Statistics</a></small></li>
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#reseting_statistics">Reseting Statistics</a></small></li>
          </ul>
        <p><a href="#admin">Administration</a></p>
          <ul class="nav nav-pills nav-stacked fa-ul">
            <li><small><i class="fa-li fa fa-check-square"></i><a href="#batch">Batch Account Creation</a></small></li>
          </ul>
      </nav>
    </div>
  </div>
  
  <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
    <h3 id="new">Creating a Survey <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <p>Click <strong><a href="index.php?where=new"">Create a New Survey</a></strong> from the Management Interface.</p>
    <h4>General Tab:</h4>
    <ul>
      <li>Enter a name for the survey in the <strong>name</strong> field. Do not use spaces in this name, think of this as a filename. Underscore's are acceptable.</li>
      <li>Choose a <strong>group</strong> to own this survey. Unless you are creating a survey as root, you will only be permitted to choose the group of which you are a member.</li>
      <li>Fill out the <strong>title</strong>, <strong>subtitle</strong>, and <strong>info</strong> fields. These fields will be used in the creation of a header for the final survey.</li>
      <li>If you would like to be emailed a copy of each submitted survey, enter a valid email address in the <strong>email</strong> field. Leave this BLANK, unless your data needs to be backed up.</li>
      <li>If you would like to theme your survey select the appropriate theme from the dropdown list. This will establish a link to a specific css style sheet for your survey. To design a theme please refer to the section: <strong><a href="#themes">Themes</a></strong>.</li>
      <li>The <strong>Confirmation Page</strong> is the page users will be shown after filling out the survey online. Fill in the <strong>heading</strong> and <strong>body text</strong> for the this page, or leave them blank to use the default.</li>
      <li>Click continue, or click the <strong>Questions</strong> tab at the top to proceed to the questions section.</li>
    </ul>
    <h4>Questions Tab:</h4>
    <ul>
      <li>Enter the text of your question (i.e. <em>What is your favorite color?</em>) in the <strong>question</strong> box. Optionally enter a <strong>field name</strong> for this question, if you leave it blank one will be generated for you.</li>
      <li>If you would like to require the user to respond to this question, select <strong>yes</strong> in the <strong>required</strong> field.</li>
      <li>Choose the <strong>type of response</strong> for this question.[<a href="#types">Click here to see Examples</a>.] Different types may have parameters to change how they behave, consult the chart below for the use of the <strong>length</strong> and <strong>precision</strong> fields.</li>
        <br />
        <table class="table table-hover">
          <tr class="active">
            <th>Type</th>
            <th>Length</th>
            <th>Precision</th>
          </tr>
          <tr>
            <td>Yes/No</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Textbox</td>
            <td>length of the box</td>
            <td>max length of the text</td>
          </tr>
          <tr>
            <td>Essay</td>
            <td>columns</td>
            <td>rows</td>
          </tr>
          <tr>
            <td>Radio</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Checkboxes</td>
            <td>min #</td>
            <td>max # <em>(not implemented yet)</em></td>
          </tr>
          <tr>
            <td>Dropdown</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Rate</td>
            <td>1..N</td>
            <td>Use "N/A"</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>n/a</td>
            <td>n/a</td>
          </tr>
          <tr>
            <td>Numeric</td>
            <td>length</td>
            <td>precision</td>
          </tr>
        </table>
  
      <li>If you chose a response type that has answer options, fill in one answer per line on the bottom half of the form. If you need more lines, click <strong>Add another answer line</strong>. [Question types with answer options are: Check Boxes, Dropdown Box, Radio Buttons, Rate.].</li>
      <li>For check boxes and radio buttons, you may enter <code><tt>!other</tt></code> on a line to create a fill in the blank option. An other box defaults to using the prompt <u>Other:</u> but is configurable by using the format: <code><tt>!other=prompt text</tt></code></li>
      <li>Add more questions by clicking the <strong>New Question</strong> button. Edit/View existing questions by clicking the question numbers at the top of the form. </li>
      <li>Click continue, or click the <strong>Questions</strong> tab at the top to proceed to the questions section.</li>
    </ul>
    <h4 id="order_tab">Order Tab:</h4>
    <ul>
      <li>On this tab, you can change the order of the questions, delete questions, and insert <strong>section</strong> breaks. A section break divides your survey into multiple pages (good for long surveys).</li>
    </ul>
    <h4 id="condition_tab">Condition Tab:</h4>
    <ul>
      <li>On this tab, you can change define conditions on questions, so a question is only shown when a condition is met.</li>
      <li>All conditions are "OR" conditions, so if one conditions is fullfilled, the question is shown.</li>
      <li>A question that has a condition must be on the next page than the question/value that is used to compare it with. Use the "Order tab" to insert a section break where wanted (this is NOT done automatically).</li>
      <li>Tip: a Yes/No question can only be compared using the values "Yes or "No".</li>
    </ul>
    <h4 id="preview_tab">Preview Tab:</h4>
    <ul>
      <li>Shows a preview of your survey. You can switch to this tab at any time to see what your survey will look like. If you would like to make changes, go back to the appropriate tab and make the changes. If you are satisfied with the survey, click the <strong>Finish</strong> tab or button at the bottom of the page.</li>
      <li>NOTE: The <strong>Next Page</strong> and <strong>Submit Survey</strong> buttons are inactive in the preview mode.</li>
    </ul>
    <h4 id="finish_tab">Finish Tab:</h4>
    <ul>
      <li>Shows you the block of PHP code that you need to paste into the HTML of your webpage to embed the survey.</li>
      <li>Once a survey is finished, you may return to editing it by choosing <strong>Edit a survey</strong> from the Management Interface. When all final edits are done, you need to change the survey status from <strong>new</strong> to <strong>test</strong> or <strong>active</strong> mode. You can change the status by choosing <strong>Change the Status of an Existing Survey</strong> from the Management Interface.</li>
    </ul>
    <hr style="width:100%;" />
    <h3 id="edit">Editing a survey <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <ul>
      <li>Editing a survey uses the same interface as creating a new survey, refer to the help for creating a new survey for more details.</li>
    </ul>
    <hr style="width:100%;" />
    <h3 id="test">Testing a Survey <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <ul>
      <li>After you have created a survey you can put it into testing mode. This allows you to access a live copy of it from the Management Interface. You can fill out the survey, and view the results by choosing <strong>Test a Survey</strong>. In order to test a survey it must be set to <strong>test</strong> mode from the <strong>Status</strong> section.</li>
      <li>NOTE: Once a survey is moved from <strong>new</strong> designation to <strong>test</strong> you can no longer make changes. If you just want to see how it will look, not test functionality, please use the <strong>preview</strong> option available in when <strong>editing</strong> or <strong>creating</strong> a survey.</li>
    </ul>
    <hr style="width:100%;" />
    <h3 id="status">Publishing a Survey <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <ul>
      <li>Once you have created/edited a survey, and are ready to make it available online you must activate it. Go to the Management Interface, click <strong><a href="index.php?where=status"">Change the Status of a Survey</a></strong>. Find the survey you want to activate. Make note of the survey ID(SID) and the name(SURVEYNAME).</li>
      <li>NOTE: At this point you must <strong>activate</strong> the survey. This is a one way operation. After it has been activated, you can no longer edit or test this survey. All results gathered in testing mode (if any) will be cleared by activating it.</li>
      <li>Click on the <strong>Activate</strong> link for your survey. At this point your survey is active.</li>
      <li>To insert the survey into an existing page you must place a PHP tag in the HTML for the page.
        <ul>
          <li>NOTE: This code was also given to you on the <strong>Finish</strong> tab of the survey design.</li>
          <li>To access an active survey, go to <code><tt>http://$PATH/public/survey.php?name=SURVEYNAME</tt></code></li>
          <li>To embed an active survey within another php document, add this code: <code><tt>&lt;?php $sid=<em>SID</em>; $results=1; include('/$PATH/public/handler.php'); ?&gt;</tt></code></li>
        </ul>
      </li>
    </ul>
    <hr style="width:100%;" />
    <h3 id="themes">Themes <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <h4 id="create">Creating Themes</h4>
    <ul>
      <li>To download a template to create your own css style sheet, click <a href="/public/css/template.css">here</a>.</li>
      <li>An example page outlining where css classes are applied is available <a href="/examples/classes.html">here</a>.</li>
      <li>All themes (css style sheets) are contained within the css directory which is, by default, located in the public directory of this package (and its path is definable in the config file).</li>
      <li>Please ensure that all your css files are contained within this directory. In this directory you will find the <strong>template.css</strong>.</li>
      <li>To create a new theme simply copy the template.css file and edit the class definitions. <strong>Do not alter the class names</strong>. Greater style flexibility is assured by not redefining html tags but rather by assigning classes to these tags. <a href="/examples/classes.html" target="#themes">Click here</a> to see what these classes actually define.</li>
      <li>Once you've saved your new theme it will become available for selection from the dropdown list that is found on the <strong>general tab</strong> page.</li>
    </ul>
    <h4 id="assign">Assigning Themes</h4>
    <ul>
      <li>Themes can be assigned either when you create a new survey, or when you edit an existing survey. Select the <strong><a href="#general_tab">General Tab</a></strong>, navigate to the drop down box near the bottom of the page, and select the appropiate theme you wish to use.</li>
    </ul>
    <hr style="width:100%;" />
    <h3 id="types">Response Types <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <h4 id="yes_no">Yes/No</h4>
    <ul>
      <li>Explanation:<br />Use this for questions that will require a basic yes/no answer.</li>
      <li>Example:<br /><input type="radio" name="bool" />Yes<br /><input type="radio" name="bool" />No</li>
    </ul>
    <h4 id="textbox">Text Box</h4>
    <ul>
      <li>Explanation:<br />Use this for questions that require a one line answer. Note: the size of the textbox can be set using the <strong>length</strong> field, he maximum length of the textbox can be set using the <strong>precision</strong> field.</li>
      <li>Example:<br /><input type="text" size="30" /></li>
    </ul>
    <h4 id="essay">Essay</h4>
    <ul>
      <li>Explanation:<br />Use this for questions in requiring an answer in essay format. Note: The col and row width of the essay area can be set be using the <strong>length</strong> and <strong>precision</strong> fields.</li>
      <li>Example:<br /><textarea cols="40" rows="4"></textarea></li>
    </ul>
    <h4 id="radio">Radio Buttons</h4>
    <ul>
      <li>Explanation:<br />Use radio buttons for questions that have a set of possible answers, but only one can be selected.</li>
      <li>Example:<br /><input type="radio" name="radio" /> Option 1<br /><input type="radio" name="radio" /> Option 2</li>
    </ul>
    <h4 id="check">Check Boxes</h4>
    <ul>
      <li>Explanation:<br />Use check boxes for questions that have a set of possible answers out of which multiple can be selected.</li>
      <li>Example:<br /><input type="checkbox" /> Option 1<br /><input type="checkbox" /> Option 2</li>
    </ul>
    <h4 id="dropdown">Dropdown Box</h4>
    <ul>
      <li>Explanation:<br />Use this to drop down a list of possible selections. For example, what state are you from? The drop down menu would then produce the list of states.</li>
      <li>Example:<br /><select><option></option><option>Option 1</option><option>Option 2</option></select></li>
    </ul>
    <h4 id="rating">Rate (scale 1..N)</h4>
    <ul>
      <li>Explanation:<br />Use this for questions that require a rating. You can have a rating scale of 1 to N, set by the <strong>length</strong> field. Multiple options can also be added to the rating block as you see below. To show an extra column "N/A", set the <strong>precision</strong> field to 1.</li>
      <li>Example:<br />
        <table class="table table-hover">
          <tr class="active">
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>N/A</td>
          </tr>
          <tr>
            <td>Option 1</td>
            <td><input type="radio" name="118_124" value="1" /></td>
            <td><input type="radio" name="118_124" value="2" /></td>
            <td><input type="radio" name="118_124" value="3" /></td>
            <td><input type="radio" name="118_124" value="4" /></td>
            <td><input type="radio" name="118_124" value="5" /></td>
            <td><input type="radio" name="118_124" value="N/A" /></td>
          </tr>
          <tr>
            <td>Option 2</td>
            <td><input type="radio" name="118_125" value="1" /></td>
            <td><input type="radio" name="118_125" value="2" /></td>
            <td><input type="radio" name="118_125" value="3" /></td>
            <td><input type="radio" name="118_125" value="4" /></td>
            <td><input type="radio" name="118_125" value="5" /></td>
            <td><input type="radio" name="118_125" value="N/A" /></td>
          </tr>
          <tr>
            <td>Option 3</td>
            <td><input type="radio" name="118_126" value="1" /></td>
            <td><input type="radio" name="118_126" value="2" /></td>
            <td><input type="radio" name="118_126" value="3" /></td>
            <td><input type="radio" name="118_126" value="4" /></td>
            <td><input type="radio" name="118_126" value="5" /></td>
            <td><input type="radio" name="118_126" value="N/A" /></td>
          </tr>
        </table>
      </li>
    </ul>
    <h4 id="date">Date</h4>
    <ul>
      <li>Explanation:<br />Use this for responses that require uses to submit back a date. Configure the date format in the ini file.</li>
      <li>Example:<br /><input type="text" name="date" size="10" /> <em>(e.g. 21/09/2003)</em></li>
    </ul>
    <h4 id="numeric">Numeric</h4>
    <ul>
      <li>Explanation:<br />Use this for questions which you will only want a numeric answer. Note: All non-numeric responses are disgarded. The <strong>length</strong> determines the max number of digits that can be used, the <strong>precision</strong> field adds extra size for the numbers begind the comma. This is not very precise yet, so just use the <strong>length</strong> field for now.</li>
      <li>Example:<br /><input type="text" name="numeric" size="10" /></li>
    </ul>
    <h4 id="session_text">Session text</h4>
    <ul>
      <li>Explanation:<br />Use this to add some text to you survey (like a disclaimer before sending on submit). This is in fact no question a user can answer to.</li>
    </ul>
    <hr style="width:100%;" />
    <h3 id="results">Survey Results <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <h4 id="analysis">Cross Analysis</h4>
    <ul>
      <li>To cross analyse results from a survey choose a question by selecting the appropriate radio button to the left of the question. You must then choose one or more of the question's choices by selecting the appropriate checkbox under the chosen question. This will display the entire results of this survey based on the criteria you have chosen.</li>
      <li>At present, Cross Analysis is limited to single questions.<br /><img src="/images/cross_analysis.jpg" style="width: 500;" alt="Cross Analysis" /><br /></li>
      <li> This will produce the following result:<br /><img src="/images/cross_analysis_result.jpg" style="width: 500;" alt="Cross Analysis Result" /><br /></li>
      <li>The resulting display shows all the responses where question 1 choice was &quot;Yes&quot;.</li>
    </ul>
    <h3 id="tabulation">Cross Tabulation</h4>
    <ul>
      <li>Cross tabulation returns a result set based on a two question selection. This is achieved by choosing which question's options will form the rows or columns for the cross tabulated result set. Selecting a radio button in the red box to the right of the question indicates the row selection and selecting a radio button in the blue box to the right of the question indicates the column selection.<br /><img src="/images/cross_tabulate.jpg" style="width: 500;" alt="Cross Tabulate" /></li>
      <li>In the above example we have chosen to cross tabulate question1 and question 4 where question 1 is the row selection and question 4 is the column selection. This returns the following result set:<br /><img src="/images/cross_tabulate_result1.jpg" style="width: 500;" alt="Cross Tabulate Result" /><br /></li>
      <li>Alternatively we can cross tabulate the same 2 questions but set question 4 as the row selection and question 1 as the column selection as shown below:<br /><img src="/images/cross_tabulate2.jpg" style="width: 500;" alt="Cross Tabulate 2" /><br /></li>
      <li>This produces the following result set:<br /><img src="/images/cross_tabulate_result2.jpg" style="width: 500;" alt="Cross Tabulate 2 Result" /><br /></li>
    </ul>
    <h3 id="csv">Exporting to CSV</h4>
    <ul>
      <li>By choosing to export to CSV, you are selected to dump all the survey result data into a text file seperate by comma's, which then has the ability to be opened with most spreadsheet programs.</li>
      <li> From the Management Interface, select <strong><a href="index.php?where=export">Export Data to CSV</a></strong> to view all the active or archived surveys. Simply click the <strong>download</strong> link listed behind the desired survey to obtain the CSV file.</li>
    </ul>
    <hr style="width:100%;" />
    <h3 id="stats">Survey Statistics <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <p>While completing surveys, various access statistics are collected for administrative review. These statistics, described in the table further below, allow you to better understand how your respondents interact with the surveys you create.</p>
    <p>Questions, such as belo examples, provide valuable insight into the effectiveness of your surveys.</p>
    <ul>
      <li>Are my respondents having difficulty logging in?</li>
      <li>Are respondents moving through surveys, or are they abandoning them prematurely?</li>
      <li>What percentage of survey attempts have resulted in a complete survey?</li>
    </ul>
    <br />
    <table class="table table-hover">
      <tr class="active">
        <th>Wording</th>
        <th>Meaning</th>
      </tr>
      <tr>
        <td>Login Failures</td>
        <td>The number of failed attempts to authenticate to take a particular survey.  This count only reflects the number of failures while attempting to access <em>a particular survey</em>.  Failed attempts to access the list of possible surveys are not recorded.</td>
      </tr>
      <tr>
        <td>Attempted</td>
        <td>The number of unique attempts to start taking a survey, regardless of whether the attempt results in a completed or suspended survey.</td>
      </tr>
      <tr>
        <td>Abandoned</td>
        <td>The number of surveys begun, but not suspended or completed.  This statistic can accumulate for a myriad of reasons, including:
          <ul>
            <li>Closing the browser and returning to the survey</li>
            <li>Refreshing the survey (via the browser refresh) before submitting</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Suspended</td>
        <td>The number of surveys saved for later completion.</td>
      </tr>
      <tr>
        <td>Completed</td>
        <td>The number of surveys completed. If a survey allows a respondent to reply multiple times, this statistic accumulates for each successful completion of the survey.</td>
      </tr>
    </table>
    <p>If your survey is effective, the number of login failures and abandoned surveys is low, the number of attempts is nearly equal to the number of complete, and the number of suspended is small.</p>
    <p>As a general rule of thumb, you should investigate your survey implementation if any of these conditions occur:</p>
      <ul>
        <li>Excessive number of login failures.</li>
        <li>Large number of abandoned surveys.</li>
        <li>Large disparity in the number of attempted and completed surveys.</li>
        <li>High number of suspended, and low number of completed, surveys.</li>
      </ul>
    <h4 id="refresh_statistics">Refreshing Statistics</h4>
    <p>As respondents complete surveys, the statistics will change. You may update the statistics page to show the most recent values by clicking the "Refresh Statistics" button.</p>
    <h4 id="reseting_statistics">Reseting Statistics</h4>
    <p>Occasionally, you may need to reset survey statistics. For example, if you held a "trial run" survey phase before the actual deployment, you would need to delete all the responses and reset the statistics for the "actual run."</p>
    <p>To reset statistics for a survey, place a check in the "Reset" column on the row containing the survey you want to reset, then click the "Reset Statistics" button. You may reset more than one survey by placing a check beside every survey you want to reset, then clicking the "Reset Statistics" button. You will be prompted to confirm the reset action each time you click the "Reset Statistics" button; answer "Ok" to reset, or "Cancel" to skip the reset.</p>
    <hr style="width:100%;" />
    <h3 id="admin">Administration Tasks <small>(<a href="#top"><i class="fa fa-arrow-circle-up fa-lg"></i>&nbsp; Back to top</a>)</small></h3>
    <h4 id="batch">Batch Account Creation</h4>
    <ul>
      <li>On either the Respondent or Designer Management Interfaces, click <strong>Bulk Upload</strong>. You will be presented with a form asking for <strong>File Type</strong> and <strong>File to Upload</strong>. From the <strong>File Type</strong> dropdown, select the file type you wish to upload. From the <strong>File to Upload</strong> browse your local filesystem to find the specific file you are uploading.</li>
      <li><strong>Tab Delimited, Data File Format:</strong> The tab delimited file should contain rows of text, terminated by a newline character(\n), with each field in the rows delimited by the tab character(\t). Each of the examples below should be a single row.</li>
      <ul>
        <li><strong>Respondent Format:</strong><br />
          Username, Password and Group are required fields<br />
          <strong>Field Order:</strong><br />
          <code><tt>username\tpassword\tgroup\tfname\tlname\t email\texpiration\tdisabled\n</tt></code><br />
          <strong>Example Row:</strong><br />
          <code><tt>looser\tsecret\teditors\tJohn\tSmith\t smith@yahoo.com\t20011122\tN\n</tt></code>
        </li>
        <li><strong>Designer Format:</strong><br />
          Username, Password and Group are required fields<br />
          <strong>Field Order:</strong><br />
          <code><tt>username\tpassword\tgroup\tfname\tlname\temail\t design\tstatus\texport\tgroupedit\tgroupadmin\tgrouprespondents\t expiration\tdisabled</tt></code><br />
          <strong>Example Row:</strong><br />
          <code><tt>looser\tsecret\teditors\tJohn\tSmith\tsmith@yahoo.com\t Y\tN\tY\tN\Y\tN\t20031122\tY\n</tt></code>
        </li>
        <li><strong>CSV, Data File Format:</strong><br />
          Not yet implemented
        </li>
        <li><strong>XML, Data File Format:</strong><br />
          Not yet implemented
        </li>
      </ul>
    </ul>
  </div>
</div>


<?php

*/

displayPageFooter();
displayFooter();

?>