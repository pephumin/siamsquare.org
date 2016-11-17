<?php

$title = "API commands";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page shows a collection of commands to be used with our API system.</p>\n";
echo "<br>\n";

?>

<hr>
<h3>All surveys</h3>

<pre><code>/all/A</code></pre>
<p>Get all survey info type A (status = 1)<br><small>Type: GET</small></p>

<pre><code>/all/B</code></pre>
<p>Get all survey info type B (status = 2)<br><small>Type: GET</small></p>

<pre><code>/all/C</code></pre>
<p>Get all survey info type C (status = 3)<br><small>Type: GET</small></p>

<pre><code>/all/D</code></pre>
<p>Get all survey info type D (status = 4)<br><small>Type: GET</small></p>

<hr>
<h3>Survey by user</h3>

<pre><code>/user/:userid/new?title=Title</code></pre>
<p>Create a new survey for <code>:userid</code><br><small>Type: GET</small></p>

<pre><code>/user/:userid/A</code></pre>
<p>Get survey info type A (status = 1) for <code>:userid</code><br><small>Type: GET</small></p>

<pre><code>/user/:userid/B</code></pre>
<p>Get survey info type B (status = 2) for <code>:userid</code><br><small>Type: GET</small></p>

<pre><code>/user/:userid/C</code></pre>
<p>Get survey info type C (status = 3) for <code>:userid</code><br><small>Type: GET</small></p>

<pre><code>/user/:userid/D</code></pre>
<p>Get survey info type D (status = 4) for <code>:userid</code><br><small>Type: GET</small></p>

<pre><code>/user/:userid</code></pre>
<p>List all surveys for <code>:userid</code><br><small>Type: GET</small></p>

<hr>
<h3>Survey by company</h3>

<pre><code>/company/:companyid/A</code></pre>
<p>Get survey info type A (status = 1) for <code>:companyid</code><br><small>Type: GET</small></p>

<pre><code>/company/:companyid/B</code></pre>
<p>Get survey info type B (status = 2) for <code>:companyid</code><br><small>Type: GET</small></p>

<pre><code>/company/:companyid/C</code></pre>
<p>Get survey info type C (status = 3) for <code>:companyid</code><br><small>Type: GET</small></p>

<pre><code>/company/:companyid/D</code></pre>
<p>Get survey info type D (status = 4) for <code>:companyid</code><br><small>Type: GET</small></p>

<pre><code>/company/:companyid</code></pre>
<p>List all surveys for <code>:companyid</code><br><small>Type: GET</small></p>

<hr>
<h3>Survey data</h3>

<pre><code>/survey/:surveyid/data</code></pre>
<p>Show data for <code>:survey</code><br><small>Type: GET</small></p>

<pre><code>/survey/:surveyid</code></pre>
<p>Show all information for <code>:survey</code><br><small>Type: GET</small></p>

<pre><code>/survey</code></pre>
<p>Show all information for all surveys<br><small>Type: GET</small></p>

<pre><code>/survey/:surveyid/updatedata</code></pre>
<p>Update data for <code>:surveyid</code> (used by surveyeditor)<br><small>Type: PUT</small></p>

<pre><code>/survey/:surveyid/rename</code></pre>
<p>Change name for <code>:surveyid</code><br><small>Type: PUT</small></p>

<pre><code>/survey/:surveyid/redescription</code></pre>
<p>Change description for <code>:surveyid</code><br><small>Type: PUT</small></p>

<pre><code>/survey/:surveyid/archive</code></pre>
<p>Move <code>:surveyid</code> to archive<br><small>Type: PUT</small></p>

<pre><code>/survey/:surveyid/delete</code></pre>
<p>Delete <code>:surveyid</code><br><small>Type: PUT</small></p>

<pre><code>/survey/:surveyid/restore</code></pre>
<p>Restore <code>:surveyid</code> from archive<br><small>Type: PUT</small></p>

<hr>
<h3>Survey result</h3>

<pre><code>/result/:surveyid/title</code></pre>
<p>Show result specific to title for <code>:surveyid</code><br><small>Type: GET</small></p>

<pre><code>/result/focus/:surveyid</code></pre>
<p>Show result specific to data for <code>:surveyid</code><br><small>Type: GET</small></p>

<pre><code>/result/:surveyid</code></pre>
<p>Show all results for <code>:surveyid</code><br><small>Type: GET</small></p>

<pre><code>/interim/:surveyid</code></pre>
<p>Show interim result for <code>:surveyid</code><br><small>Type: GET</small></p>

<pre><code>/delete/result/:surveyid/:resultid</code></pre>
<p>Delete :resultid from <code>:surveyid</code> (use in interim)<br><small>Type: PUT</small></p>

<hr>
<h3>Member</h3>

<pre><code>/member/:companyid/new?email=email&name=Name</code></pre>
<p>Create a new member for <code>:companyid</code><br><small>Type: GET</small></p>

<pre><code>/member/:companyid</code></pre>
<p>List all members for <code>:companyid</code><br><small>Type: GET</small></p>

<pre><code>/member/:userid/refullname</code></pre>
<p>Change fullname for <code>:userid</code><br><small>Type: PUT</small></p>

<pre><code>/member/:userid/reemail</code></pre>
<p>Change email for <code>:userid</code><br><small>Type: PUT</small></p>

<pre><code>/member/:userid/remobile</code></pre>
<p>Change mobile for <code>:userid</code><br><small>Type: PUT</small></p>

<pre><code>/member/:userid/suspend</code></pre>
<p>Suspend <code>:userid</code><br><small>Type: PUT</small></p>

<pre><code>/member/:userid/delete</code></pre>
<p>Delete <code>:userid</code><br><small>Type: PUT</small></p>

<hr>
<h3>Others</h3>

<pre><code>/submit</code></pre>
<p>Submit survey result (used by survey.js)<br><small>Type: POST</small></p>

<pre><code>/log</code></pre>
<p>Submit log (used by the whole system)<br><small>Type: POST</small></p>




<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
