<?php

$title = "Help";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page shows a collection of help and examples to be used and applied appropriately.</p>\n";
echo "<br>\n";

?>

<hr>

<h3>User levels</h3>

<p>Currently we group users into different levels as shown in the table below. Each of these levels will have a different ability to access to different parts of the system. A higher in level would mean a greater ability to do thing including add and delete users.</p>

<br>

<h4>Members</h4>

<p>There are two types of members as shown in the below table.</p>

<table class="table table-hover">
  <thead>
    <tr class="bg-primary">
      <td>User</td>
      <td>Level</td>
      <td>Detail</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Respondent (private)</td>
      <td>1</td>
      <td>
        <ul>
          <li>Access to the private survey where client provide email list in advanced</li>
          <li>They will receive an email invitation with a survey link included, no registration required, and only complete once</li>
          <li>No access to public surveys as a default, but will be invited to join using teaser</li>
          <li>No access to admin section, and only see a limited information in member section</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Respondent (panel)</td>
      <td>2</td>
      <td>
        <ul>
          <li>Access to all public surveys where matching demographic/ criteria will be required</li>
          <li>For each of the surveys they see, they will be allowed to participate only once</li>
          <li>No access to private surveys</li>
          <li>No access to admin section, but full access at member section</li>
          <li>Within this group, a further grouping will be done by using registration type, reward level, etc.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<h4>Clients</h4>

<p>For clients who can access the admin section, there are several more types as shown in the below table.</p>


<table class="table table-hover">
  <thead>
    <tr class="bg-primary">
      <td>User</td>
      <td>Level</td>
      <td>Detail</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fieldwork</td>
      <td>1</td>
      <td>
        <ul>
          <li>Full access to respondent section</li>
          <li>Read only for all projects</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DP</td>
      <td>2</td>
      <td>
        <ul>
          <li>Full access to data section</li>
          <li>Read only for all projects</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Researcher</td>
      <td>3</td>
      <td>
        <ul>
          <li>Full access to assigned projects</li>
          <li>Read only for other projects</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Account leader</td>
      <td>5</td>
      <td>
        <ul>
          <li>Full access to all projects</li>
          <li>Ability to manage team members</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

<hr>

<script src="https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js"></script>

<h3>Scale [SA]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions:[{
    type: &quot;rating&quot;,
    name: &quot;satisfaction&quot;,
    title: &quot;How satisfied are you with the Product?&quot;,
    mininumRateDescription: &quot;Not Satisfied&quot;,
    maximumRateDescription: &quot;Completely satisfied&quot;
  }]
});
var q = survey.getQuestionByName('satisfaction');
q.mininumRateDescription = &quot;Not at all satisfied&quot;;
q.maximumRateDescription = &quot;Extremely satisfied&quot;;
q.rateValues = empty; // Option of empty, [1,2,3], [{value1, text:Bad}, {value:2, text:Average}, {value:3, text:Good}]
survey.render();

</code></pre>

<h3>Text [OE]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;text&quot;,
    name: &quot;email&quot;,
    title: &quot;Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button.&quot;
  }]
});
survey.getQuestionByName('email').size = 25; // Text size option of 10, 25, 50, 75, 100
survey.render();

</code></pre>

<h3>Radio [SA]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;radiogroup&quot;,
    name: &quot;car&quot;,
    title: &quot;What car are you driving?&quot;,
    isRequired: true,
    colCount: 4,
    choices: [&quot;None&quot;, &quot;Ford&quot;, &quot;Vauxhall&quot;, &quot;Volkswagen&quot;, &quot;Nissan&quot;, &quot;Audi&quot;, &quot;Mercedes-Benz&quot;, &quot;BMW&quot;, &quot;Peugeot&quot;, &quot;Toyota&quot;, &quot;Citroen&quot;]
  }]
});
// Ways of setting the 'choice' property
choices: [{ value: 1, text: &quot;Value 1&quot; }, { value: 2, text: &quot;Value 2&quot; }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: &quot;Value 2&quot; }] // The values are: 1 and 'Value 2' and texts are '1' and 'Value 2'
choices: [&quot;Value 1&quot;, &quot;Value 2&quot;] // The values and texts are same
choices: [&quot;1|Value 1&quot;, &quot;2|Value 2&quot;] // The values are '1' and '2' and texts are 'Value 1' and 'Value 2'
var q = survey.getQuestionByName('car');
q.colCount = 1; // Option of 0, 1, 2, 3, 4
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = &quot;Others (specified)&quot;;
survey.render();

</code></pre>

<h3>Dropdown [SA]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;dropdown&quot;,
    name: &quot;car&quot;,
    title: &quot;What car are you driving?&quot;,
    isRequired: true,
    colCount: 0,
    choices: [&quot;None&quot;, &quot;Ford&quot;, &quot;Vauxhall&quot;, &quot;Volkswagen&quot;, &quot;Nissan&quot;, &quot;Audi&quot;, &quot;Mercedes-Benz&quot;, &quot;BMW&quot;, &quot;Peugeot&quot;, &quot;Toyota&quot;, &quot;Citroen&quot;]
  }]
});
// Ways of setting the 'choice' property
choices: [{ value: 1, text: &quot;Value 1&quot; }, { value: 2, text: &quot;Value 2&quot; }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: &quot;Value 2&quot; }] // The values are: 1 and 'Value 2' and texts are '1' and 'Value 2'
choices: [&quot;Value 1&quot;, &quot;Value 2&quot;] // The values and texts are same
choices: [&quot;1|Value 1&quot;, &quot;2|Value 2&quot;] // The values are '1' and '2' and texts are 'Value 1' and 'Value 2'
var q = survey.getQuestionByName('car');
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = &quot;Others (specified)&quot;;
survey.render();

</code></pre>

<h3>Dropdown with restfull [SA]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;dropdown&quot;,
    name: &quot;country&quot;,
    title: &quot;Select the country...&quot;,
    isRequired: true,
    choicesByUrl: {
      url: &quot;http://services.groupkt.com/country/get/all&quot;,
      path: &quot;RestResponse;result&quot;,
      valueName: &quot;name&quot;
    }
  }]
});
var q = survey.getQuestionByName('country');
q.choicesByUrl.url = 'http://yourrestfullserviceurl';
q.choicesByUrl.path = 'MyPathToTheResult'; // The path to the array of results in the returned json
q.choicesByUrl.valueName = 'thePropertyNameForValue'; // The 'value' element name in the returned json
q.choicesByUrl.titleName = 'thePropertyNameForTitle'; // The 'title' element name in the returned json (if empty, the value is used)
q.choicesByUrl.run();

</code></pre>

<h3>Checkbox [MA]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;checkbox&quot;,
    name: &quot;car&quot;,
    title: &quot;What car are you driving?&quot;,
    isRequired: true,
    colCount: 4,
    choices: [&quot;None&quot;, &quot;Ford&quot;, &quot;Vauxhall&quot;, &quot;Volkswagen&quot;, &quot;Nissan&quot;, &quot;Audi&quot;, &quot;Mercedes-Benz&quot;, &quot;BMW&quot;, &quot;Peugeot&quot;, &quot;Toyota&quot;, &quot;Citroen&quot;]
  }]
});
// Ways of setting the 'choice' property
choices: [{ value: 1, text: &quot;Value 1&quot; }, { value: 2, text: &quot;Value 2&quot; }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: &quot;Value 2&quot; }] // The values are: 1 and 'Value 2' and texts are '1' and 'Value 2'
choices: [&quot;Value 1&quot;, &quot;Value 2&quot;] // The values and texts are same
choices: [&quot;1|Value 1&quot;, &quot;2|Value 2&quot;] // The values are '1' and '2' and texts are 'Value 1' and 'Value 2'
var q = survey.getQuestionByName('car');
q.colCount = 1; // Option of 0, 1, 2, 3, 4
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = &quot;Others (specified)&quot;;
survey.render();

</code></pre>

<h3>Comment [OE]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions:[{
    type: &quot;comment&quot;,
    name: &quot;suggestions&quot;,
    title:&quot;What would make you more satisfied with the Product?&quot;
  }]
});
var q = survey.getQuestionByName('suggestions');
q.rows = 3; // Opton of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
survey.getQuestionByName('suggestions').cols = 50; // Column option of 10, 25, 50, 75, 100
survey.render();

</code></pre>

<h3>HTML</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;html&quot;,
    name: &quot;info&quot;,
    html: &quot;...HTML CODE...&quot;
  }]
});

</code></pre>

<h3>Matrix [SA]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;matrix&quot;,
    name: &quot;Quality&quot;,
    title: &quot;Please indicate if you agree or disagree with the following statements&quot;,
    columns: [
      { value: 1, text: &quot;Strongly Disagree&quot; },
      { value: 2, text: &quot;Disagree&quot; },
      { value: 3, text: &quot;Neutral&quot; },
      { value: 4, text: &quot;Agree&quot; },
      { value: 5, text: &quot;Strongly Agree&quot; }
    ],
    rows: [
      { value: &quot;affordable&quot;, text: &quot;Product is affordable&quot; },
      { value: &quot;does what it claims&quot;, text: &quot;Product does what it claims&quot; },
      { value: &quot;better then others&quot;, text: &quot;Product is better than other products on the market&quot; },
      { value: &quot;easy to use&quot;, text: &quot;Product is easy to use&quot; }
    ]
  }]
});

</code></pre>

<h3>Matrix [MA]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;matrixdropdown&quot;,
    name: &quot;frameworksRate&quot;,
    title: &quot;Please tells us your opinion about JavaScript MVVM frameworks&quot;,
    choices: [&quot;Excelent&quot;, &quot;Good&quot;, &quot;Average&quot;, &quot;Fair&quot;, &quot;Poor&quot;],
    columns: [
      { name: &quot;using&quot;, title: &quot;Do you use it?&quot;, choices: [&quot;Yes&quot;, &quot;No&quot;], cellType: &quot;radiogroup&quot; },
      { name: &quot;experience&quot;, title: &quot;How long do you use it?&quot;, choices: [{value: 5, text:&quot;3-5 years&quot;}, {value: 2, text:&quot;1-2 years&quot;}, {value: 1, text:&quot;less then a year&quot;}] },
      { name: &quot;strength&quot;, title: &quot;What is main strength?&quot;, choices: [&quot;Easy&quot;, &quot;Compact&quot;, &quot;Fast&quot;, &quot;Powerfull&quot;], cellType: &quot;checkbox&quot; },
      { name: &quot;knowledge&quot;, title: &quot;Please describe your experience&quot;, cellType:&quot;text&quot; },
      { name: &quot;rate&quot;, title: &quot;Please rate the framework itself&quot; }
    ],
    rows: [
      { value: &quot;angularv1&quot;, text: &quot;angularjs v1.x&quot; },
      { value: &quot;angularv2&quot;, text: &quot;angularjs v2&quot; },
      { value: &quot;knockoutjs&quot; },
      { value: &quot;reactjs&quot;}
    ]
  }]
});

</code></pre>

<h3>Matrix [dynamics]</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;matrixdynamic&quot;,
    name: &quot;frameworksRate&quot;,
    title: &quot;Please rate your teachers&quot;,
    addRowText: &quot;Add Subject&quot;,
    horizontalScroll: true,
    columnMinWidth: &quot;120px&quot;,
    columnColCount: 1,
    cellType: &quot;radiogroup&quot;,
    choices: [
      {value: 1 , text: &quot;Yes&quot;},
      {value: 0, text: &quot;Sometimes&quot;},
      {value: -1, text: &quot;No&quot;}
    ],
    columns: [
      { name: &quot;subject&quot;, cellType:&quot;dropdown&quot;, title: &quot;Select a subject&quot;, isRequired: true, minWidth: &quot;300px&quot;, choices: [&quot;English: American Literature&quot;, &quot;English: British and World Literature&quot;, &quot;Math: Consumer Math&quot;, &quot;Math: Practical Math&quot;, &quot;Math: Developmental Algebra&quot;, &quot;Math: Continuing Algebra&quot;, &quot;Math: Pre-Algebra&quot;, &quot;Math: Algebra&quot;, &quot;Math: Geometry&quot;, &quot;Math: Integrated Mathematics&quot;, &quot;Science: Physical Science&quot;, &quot;Science: Earth Science&quot;, &quot;Science: Biology&quot;, &quot;Science: Chemistry&quot;, &quot;History: World History&quot;, &quot;History: Modern World Studies&quot;, &quot;History: U.S. History&quot;, &quot;History: Modern U.S. History&quot;, &quot;Social Sciences: U.S. Government and Politics&quot;, &quot;Social Sciences: U.S. and Global Economics&quot;, &quot;World Languages: Spanish&quot;, &quot;World Languages: French&quot;, &quot;World Languages: German&quot;, &quot;World Languages: Latin&quot;, &quot;World Languages: Chinese&quot;, &quot;World Languages: Japanese&quot;]},
      { name: &quot;explains&quot;, title: &quot;Clearly explains the objectives&quot;},
      { name: &quot;interesting&quot;, title: &quot;Makes class interesting&quot; },
      { name: &quot;effective&quot;, title: &quot;Uses class time effectively&quot; },
      { name: &quot;knowledge&quot;, title: &quot;Knows the subject matter&quot; },
      { name: &quot;recognition&quot;, title: &quot;Recognizes and acknowledges effort&quot; },
      { name: &quot;inform&quot;, title: &quot;Keeps me informed of my progress&quot; },
      { name: &quot;opinion&quot;, title: &quot;Encourages and accepts different opinions&quot; },
      { name: &quot;respect&quot;, title: &quot;Has the respect of the student&quot; },
      { name: &quot;cooperation&quot;, title: &quot;Encourages cooperation and participation&quot; },
      { name: &quot;parents&quot;, title: &quot;Communicates with my parents&quot; },
      { name: &quot;selfthinking&quot;, title: &quot;Encourages me to think for myself&quot;},
      { name:&quot;frusturation&quot;, cellType: &quot;comment&quot;, title: &quot;Is there anything about this class that frustrates you?&quot;, minWidth: &quot;250px&quot;},
      { name:&quot;likeTheBest&quot;, cellType: &quot;comment&quot;, title: &quot;What do you like best about this class and/or teacher?&quot;, minWidth: &quot;250px&quot;},
      { name:&quot;improvements&quot;, cellType: &quot;comment&quot;, title: &quot;What do you wish this teacher would do differently that would improve this class?&quot;, minWidth: &quot;250px&quot;}
    ],
    rowCount: 2
  }]
});

</code></pre>

<h3>Multiple text</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;multipletext&quot;,
    name: &quot;pricelimit&quot;,
    title: &quot;What is the... &quot;,
    colCount: 2,
    items: [
      { name: &quot;mostamount&quot;, title: &quot;Most amount you would every pay for a product like ours&quot; },
      { name: &quot;leastamount&quot;, title: &quot;The least amount you would feel comfortable paying&quot; }
    ]
  }]
});

</code></pre>

<h3>File uploading</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [{
    type: &quot;file&quot;,
    title: &quot;Please upload your photo&quot;,
    name: &quot;image&quot;,
    storeDataAsText: true,
    showPreview: true,
    imageWidth: 150,
    maxSize: 102400
  }]
});
survey.getQuestionByName('image').showPreview = false; // Opton of true, false
survey.getQuestionByName('image').storeDataAsText = false; // Opton of true, false
survey.getQuestionByName('image').imageHeight; // Image preview height option of XX (in pixels) or empty
survey.getQuestionByName('image').imageWidth; // Image preview width option of XX (in pixels) or empty
survey.getQuestionByName('image').maxSize; // File max size (in bytes) such as 102400, and default is 0 (no limits)
survey.render();

</code></pre>

<h3>Set cookie</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  cookieName: &quot;myuniquesurveyid&quot;,
  questions: [{
    type: &quot;checkbox&quot;,
    name: &quot;car&quot;,
    title: &quot;What car are you driving?&quot;,
    isRequired: true,
    colCount: 4,
    choices: [&quot;None&quot;, &quot;Ford&quot;, &quot;Vauxhall&quot;, &quot;Volkswagen&quot;, &quot;Nissan&quot;, &quot;Audi&quot;, &quot;Mercedes-Benz&quot;, &quot;BMW&quot;, &quot;Peugeot&quot;, &quot;Toyota&quot;, &quot;Citroen&quot;]
  }]
});
survey.setCookie();
survey.deleteCookie();

</code></pre>

<h3>Localise the survey</h3>
<pre class="verysmall"><code class="prettyprint">
survey.locale = &quot;th&quot;;
var Survey;
(function (Survey) {
  var mycustomSurveyStrings = {
    pagePrevText: &quot;หน้าที่แล้ว&quot;,
    pageNextText: &quot;หน้าถัดไป&quot;,
    completeText: &quot;เสร็จสิ้น&quot;,
    otherItemText: &quot;อื่นๆ (ระบุ)&quot;,
    progressText: &quot;หน้าที่ {0} จาก {1}&quot;,
    emptySurvey: &quot;ไม่มีหน้าคำถามหรือข้อคำถามในแบบสอบถามชุดนี้&quot;,
    completingSurvey: &quot;ขอบคุณที่สละเวลาตอบแบบสอบถาม&quot;,
    loadingSurvey: &quot;กำลังโหลดแบบสอบถามจากฐานข้อมูล...&quot;,
    optionsCaption: &quot;กรุณาเลือก...&quot;,
    requiredError: &quot;คุณต้องตอบคำถามข้อนี้&quot;,
    numericError: &quot;คำตอบจะต้องเป็นตัวเลขเท่านั้น&quot;,
    textMinLength: &quot;กรุณาใส่ตัวอักษรอย่างน้อยจำนวน {0} ตัวอักษร&quot;,
    minRowCountError: &quot;กรุณาตอบอย่างน้่อยจำนวน {0} แถว&quot;,
    minSelectError: &quot;กรุณาเลือกอย่างน้่อยจำนวน {0} คำตอบ&quot;,
    maxSelectError: &quot;กรุณาเลือกไม่เกินจำนวน {0} คำตอบ&quot;,
    numericMinMax: &quot;{0} ควรจะเท่ากับหรือมากกว่า {1} และเท่ากับหรือน้อยกว่า {2}&quot;,
    numericMin: &quot;{0} ควรจะเท่ากับหรือมากกว่า {1}&quot;,
    numericMax: &quot;{0} ควรจะเท่ากับหรือน้อยกว่า {1}&quot;,
    invalidEmail: &quot;กรุณาใส่อีเมล์ที่ถูกต้อง&quot;,
    urlRequestError: &quot;เกิดข้อผิดผลาดสำหรับ {0} {1}&quot;,
    urlGetChoicesError: &quot;ไม่มีข้อมูลหรือการตั้งค่าไม่ถูกต้อง&quot;,
    exceedMaxSize: &quot;ไฟล์จะต้องมีขนาดไม่เกิน {0}&quot;,
    otherRequiredError: &quot;กรุณาใส่ค่าอื่นแทน&quot;,
    uploadingFile: &quot;กำลังอัพโหลดไฟล์อยู่ กรุณารอสักครู่แล้วลองใหม่อีกครั้ง&quot;,
    addRow: &quot;เพิ่มแถว&quot;,
    removeRow: &quot;ลบแถว&quot;
  };
  Survey.surveyLocalization.locales[&quot;th&quot;] = mycustomSurveyStrings;
})(Survey || (Survey = {}));

</code></pre>

<h3>Several questions in one row</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questionTitleLocation: &quot;bottom&quot;, showQuestionNumbers: &quot;off&quot;,
  pages: [{
    name: &quot;Address&quot;,  title: &quot;Address&quot;,
    questions: [
      { type: &quot;text&quot;, name: &quot;address1&quot;, title: &quot;Stree Address&quot; },
      { type: &quot;text&quot;, name: &quot;address2&quot;, title: &quot;Address Line 2&quot; },
      { type: &quot;text&quot;, name: &quot;city&quot;, title: &quot;City&quot; },
      { type: &quot;text&quot;, name: &quot;state&quot;, startWithNewLine: false, title: &quot;State / Province / Region&quot; },
      { type: &quot;text&quot;, name: &quot;zip&quot;, title: &quot;Zip / Postal Code&quot; },
      { type: &quot;dropdown&quot;, name: &quot;country&quot;, startWithNewLine: false, title: &quot;Country&quot;,
        choicesByUrl: {
          url: &quot;http://services.groupkt.com/country/get/all&quot;,
          path: &quot;RestResponse;result&quot;,
          valueName: &quot;name&quot;
        }
      }
    ]
  }]
});

</code></pre>

<h3>Survey options</h3>
<pre class="verysmall"><code class="prettyprint">
survey.requiredText = &quot;*&quot;;
survey.showQuestionNumbers = &quot;on&quot;; // Option of on, onPage, off
survey.showTitle = true; // Option of true, false
survey.showPageTitles = true; // Option of true, false
survey.showPageNumbers = false; // Option of true, false
survey.showProgressbar = off; // Option of top, bottom, off
survey.completedHtml = &quot;&quot;;
survey.render();

</code></pre>

<h3>Include data in survey</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [
    { type: &quot;text&quot;, name: &quot;name&quot;, title: &quot;Your name:&quot;},
    { type: &quot;text&quot;, name: &quot;email&quot;, title: &quot;Your e-mail&quot;},
    { type: &quot;checkbox&quot;, name: &quot;car&quot;, title: &quot;What car are you driving?&quot;, isRequired: true, colCount: 4, choices: [&quot;None&quot;, &quot;Ford&quot;, &quot;Vauxhall&quot;, &quot;Volkswagen&quot;, &quot;Nissan&quot;, &quot;Audi&quot;, &quot;Mercedes-Benz&quot;, &quot;BMW&quot;, &quot;Peugeot&quot;, &quot;Toyota&quot;, &quot;Citroen&quot;] }
  ]
});
survey.data = { name:&quot;John Doe&quot;, email: &quot;johndoe@nobody.com&quot;, car:[&quot;Ford&quot;] };
survey.onValueChanged.add(function (sender, options) {
  var el = document.getElementById(options.name);
  if(el) { el.value = options.value; }
});
// &lt;div&gt;
//   &lt;p&gt;Name: &lt;input type=&quot;text&quot; id=&quot;name&quot; onChange=&quot;survey.setValue('name', this.value)&quot; value=&quot;John Doe&quot;&gt;&lt;/p&gt;
//   &lt;p&gt;Email: &lt;input type=&quot;email&quot; id=&quot;email&quot; size=&quot;30&quot; onChange=&quot;survey.setValue('email', this.value)&quot; value=&quot;johndoe@nobody.com&quot;&gt;&lt;/p&gt;
//   &lt;p&gt;Cars (use comma to separate values, not spaces): &lt;input type=&quot;text&quot; id=&quot;car&quot; size=&quot;50&quot; onChange=&quot;survey.setValue('car', this.value.split(','))&quot; value=&quot;Ford&quot;&gt;&lt;/p&gt;
// &lt;/div&gt;
survey.getValue('questionName'); // Use getValue to get the value of the question
survey.setValue('questionName', newValue); // Use setValue to set the value of the question
survey.data = { &quot;youquestion1&quot;: value1, &quot;youquestionN&quot;:valueN }; // Use data property to get/set survey data as json
//Use onValueChanged event to get a notification on chaning question value.
survey.onValueChanged.add(function (sender, options) {
  var mySurvey = sender;
  var questionName = options.name;
  var newValue = options.value;
});
//Use onComplete to get survey.data to pass it to the server.
survey.onComplete.add(function (sender) {
  var mySurvey = sender;
  var surveyData = sender.data;
});

</code></pre>

<h3>Custom navigation</h3>
<pre class="verysmall"><code class="prettyprint">
// HTML
survey.onRendered.add(function (sender) {
  var survey = sender;
  //Your code
});
survey.onCurrentPageChanged.add(function (sender, options) {
  var survey = sender;
  var oldCurrentPage = options.oldCurrentPage;
  var newCurrentPage = options.newCurrentPage;
  //Your code
});
// JS
var survey = new Survey.Survey({
  title: &quot;Software developer survey.&quot;,
  pages: [{
    title: &quot;What operating system do you use?&quot;,
    questions: [{ type:&quot;checkbox&quot;, name:&quot;opSystem&quot;, title: &quot;OS&quot;, hasOther: true, isRequired: true, choices: [&quot;Windows&quot;, &quot;Linux&quot;, &quot;Macintosh OSX&quot;] }
    ]
  }, {
    title: &quot;What language(s) are you currently using?&quot;,
    questions: [{ type:&quot;checkbox&quot;, name:&quot;langs&quot;, title:&quot;Plese select from the list&quot;, colCount: 4, isRequired: true, choices: [&quot;Javascript&quot;, &quot;Java&quot;, &quot;Python&quot;, &quot;CSS&quot;, &quot;PHP&quot;, &quot;Ruby&quot;, &quot;C++&quot;, &quot;C&quot;, &quot;Shell&quot;, &quot;C#&quot;, &quot;Objective-C&quot;, &quot;R&quot;, &quot;VimL&quot;, &quot;Go&quot;, &quot;Perl&quot;, &quot;CoffeeScript&quot;, &quot;TeX&quot;, &quot;Swift&quot;, &quot;Scala&quot;, &quot;Emacs List&quot;, &quot;Haskell&quot;, &quot;Lua&quot;, &quot;Clojure&quot;, &quot;Matlab&quot;, &quot;Arduino&quot;, &quot;Makefile&quot;, &quot;Groovy&quot;, &quot;Puppet&quot;, &quot;Rust&quot;, &quot;PowerShell&quot; ] }
    ]
  }, {
    title: &quot;Please enter your name and e-mail&quot;,
    questions: [{ type: &quot;text&quot;, name: &quot;name&quot;, title: &quot;Name:&quot; }, { type: &quot;text&quot;, name: &quot;email&quot;, title: &quot;Your e-mail&quot; }]
  }]
});
survey.showTitle = false;
survey.onRendered.add(function (sender) { setNavigationVisibility(sender); });
survey.onCurrentPageChanged.add(function (sender) { setNavigationVisibility(sender); });
function setNavigationVisibility(survey) {
  document.getElementById('surveyPrev').style.display = !survey.isFirstPage ? &quot;inline&quot; : &quot;none&quot;;
  document.getElementById('surveyNext').style.display = !survey.isLastPage ? &quot;inline&quot; : &quot;none&quot;;
  document.getElementById('surveyComplete').style.display = survey.isLastPage ? &quot;inline&quot; : &quot;none&quot;;
  document.getElementById('surveyProgress').innerText = &quot;Page &quot; + (survey.currentPage.visibleIndex + 1) + &quot; of &quot; + survey.visiblePageCount + &quot;.&quot;;
}
survey.pagePrevText = &quot;Previous&quot;;
survey.pageNextText = &quot;Next&quot;;
survey.completeText = &quot;Submit&quot;;
survey.showNavigationButtons = true; // Option of true, false
survey.render();

</code></pre>

<h3>Custom text</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questionTitleTemplate: &quot;{no}) {title} {require}:&quot;,
  questionStartIndex: &quot;A&quot;,
  requiredText: &quot;(*)&quot;,
  pages: [{
    title: &quot;This is the page {pageno} of {pagecount}.&quot;,
    questions: [
      { type: &quot;text&quot;, name: &quot;name&quot;, title: &quot;Please type your name&quot;, isRequired: true },
      { type: &quot;text&quot;, name: &quot;email&quot;, title: &quot;Please type your e-mail&quot;, isRequired: true, validators: [{ type:&quot;email&quot; }
    ]}
  ]}, {
    title: &quot;This is the page {pageno} of {pagecount}.&quot;,
    questions: [
      { type: &quot;comment&quot;, name: &quot;comment&quot;, title: &quot;{name}, please tell us what is on your mind&quot; }
    ]}
  ],
  completedHtml: &quot;&lt;h4&gt;Thank you for sharing this information with us.&lt;/h4&gt;&lt;p&gt;Your name is: &lt;b&gt;{name}&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Your email is: &lt;b&gt;{email}&lt;/b&gt;&lt;/p&gt;&lt;p&gt;This is what is on your mind:&lt;/p&gt;&lt;p&gt;{comment}&lt;/p&gt;&quot;
});
survey.questionTitleTemplate = &quot;{no}) {title} {require}:&quot;;
survey.requiredText = &quot;(*)&quot;;
survey.questionStartIndex = &quot;A&quot;;

</code></pre>

<h3>Change radio and checkbox template</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  title: &quot;Tell us, what technologies do you use?&quot;,
  pages: [{
    name:&quot;page1&quot;,
    questions: [
      { type: &quot;radiogroup&quot;, choices: [&quot;Yes&quot;, &quot;No&quot;], isRequired: true, name: &quot;frameworkUsing&quot;, title: &quot;Do you use any front-end framework like Bootstrap?&quot; },
      { type: &quot;checkbox&quot;, choices: [&quot;Bootstrap&quot;,&quot;Foundation&quot;], hasOther: true, isRequired: true, name: &quot;framework&quot;, title: &quot;What front-end framework do you use?&quot;, visible: false }
    ]
  }, {
    name: &quot;page2&quot;,
    questions: [
      { type: &quot;radiogroup&quot;, choices: [&quot;Yes&quot;,&quot;No&quot;], isRequired: true, name: &quot;mvvmUsing&quot;, title: &quot;Do you use any MVVM framework?&quot; },
      { type: &quot;checkbox&quot;, choices: [&quot;AngularJS&quot;, &quot;KnockoutJS&quot;, &quot;React&quot;], hasOther: true, isRequired: true, name: &quot;mvvm&quot;, title: &quot;What MVVM framework do you use?&quot;, visible: false }
    ]
  }, {
    name: &quot;page3&quot;,
    questions: [
      { type: &quot;comment&quot;, name: &quot;about&quot;, title: &quot;Please tell us about your main requirements for Survey library&quot; }
    ]
  }],
  triggers: [
    { type: &quot;visible&quot;, operator: &quot;equal&quot;, value: &quot;Yes&quot;, name: &quot;frameworkUsing&quot;, questions: [&quot;framework&quot;] },
    { type: &quot;visible&quot;, operator: &quot;equal&quot;, value: &quot;Yes&quot;, name: &quot;mvvmUsing&quot;, questions: [&quot;mvvm&quot;] }
  ]
});
new Survey.SurveyTemplateText().replaceText('&lt;div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;&gt;&lt;!-- ko foreach: { data: question.visibleChoices, as: &quot;item&quot;, afterRender: question.koAfterRender}  --&gt; &lt;label class=&quot;btn btn-default&quot; data-bind=&quot;css:{active: $data.value == question.koValue()}, style:{width: question.koWidth}&quot;&gt;   &lt;input type=&quot;radio&quot; data-bind=&quot;attr: {name: question.name, value: item.value}, checked: question.koValue&quot; /&gt; &lt;span data-bind=&quot;text: item.text&quot;&gt;&lt;/span&gt;&lt;/label&gt;&lt;!-- /ko --&gt;&lt;div data-bind=&quot;visible:question.hasOther&quot;&gt;&lt;div data-bind=&quot;template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;', &quot;question&quot;, &quot;radiogroup&quot;);
new Survey.SurveyTemplateText().replaceText('&lt;div class=&quot;btn-group&quot; data-toggle=&quot;buttons&quot;&gt;&lt;!-- ko foreach: { data: question.visibleChoices, as: &quot;item&quot;, afterRender: question.koAfterRender}  --&gt; &lt;label class=&quot;btn btn-default&quot; data-bind=&quot;css:{active: question.koValue().indexOf($data.value) &gt; -1}, style:{width: question.koWidth}&quot;&gt;   &lt;input type=&quot;checkbox&quot; data-bind=&quot;attr: {name: question.name, value: item.value}, checked: question.koValue&quot; /&gt; &lt;span data-bind=&quot;text: item.text&quot;&gt;&lt;/span&gt;&lt;/label&gt;&lt;!-- /ko --&gt;&lt;div data-bind=&quot;visible:question.hasOther&quot;&gt;&lt;div data-bind=&quot;template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }&quot;&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;', &quot;question&quot;, &quot;checkbox&quot;);

</code></pre>

<h3>Go to the next page automatically</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  title: &quot;American History&quot;,
  showProgressBar: &quot;bottom&quot;,
  goNextPageAutomatic: true,
  showNavigationButtons: false,
  pages: [
    { questions: [{ type: &quot;radiogroup&quot;,  name: &quot;civilwar&quot;, title: &quot;When was the Civil War?&quot;, choices: [&quot;1750-1800&quot;, &quot;1800-1850&quot;, &quot;1850-1900&quot;, &quot;1900-1950&quot;,&quot;after 1950&quot;]} ]},
    { questions: [{ type: &quot;radiogroup&quot;,  name: &quot;libertyordeath&quot;, title: &quot;Who said 'Give me liberty or give me death?'&quot;, choicesOrder: &quot;random&quot;, choices: [&quot;John Hancock&quot;, &quot;James Madison&quot;, &quot;Patrick Henry&quot;, &quot;Samuel Adams&quot;]} ]},
    { questions: [{ type: &quot;radiogroup&quot;,  name: &quot;magnacarta&quot;, title: &quot;What is the Magna Carta?&quot;, choicesOrder: &quot;random&quot;, choices: [&quot;The foundation of the British parliamentary system&quot;, &quot;The Great Seal of the monarchs of England&quot;, &quot;The French Declaration of the Rights of Man&quot;, &quot;The charter signed by the Pilgrims on the Mayflower&quot;]} ]}
  ],
  completedHtml: &quot;&lt;p&gt;Your anwers are:&lt;/p&gt;&lt;p&gt;When was the Civil War?: &lt;b&gt;{civilwar}&lt;/b&gt;. The correct is: &lt;b&gt;1850-1900&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Who said 'Give me liberty or give me death?': &lt;b&gt;{libertyordeath}&lt;/b&gt;. The correct is: &lt;b&gt;Patrick Henry&lt;/b&gt;&lt;/p&gt;&lt;p&gt;What is the Magna Carta?: &lt;b&gt;{magnacarta}&lt;/b&gt;. The correct is: &lt;b&gt;The foundation of the British parliamentary system&lt;/b&gt;&lt;/p&gt;&quot;
});
survey.showNavigationButtons = false;
survey.goNextPageAutomatic = true;

</code></pre>

<h3>Standard validators</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  questions: [
    { type: &quot;text&quot;, name: &quot;email&quot;, title: &quot;Please enter your e-mail&quot;, isRequired: true, validators: [{ type:&quot;email&quot; }] },
    { type: &quot;multipletext&quot;, name: &quot;pricelimit&quot;, title: &quot;What is the... &quot;, isRequired: true, colCount: 2, items: [
      { name: &quot;leastamount&quot;, title: &quot;The least amount you have ever paid for a computer&quot;, validators: [{ type: &quot;numeric&quot;, minValue: 10, maxValue: 10000 }] },
      { name: &quot;mostamount&quot;, title: &quot;The most amount you have ever paid for a computer&quot;, validators: [{ type: &quot;numeric&quot;, minValue: 10, maxValue: 10000 }] }
    ]},
    { type: &quot;comment&quot;, name: &quot;firstcomputer&quot;, title: &quot;Please tell us about your first computer&quot;, isRequired: true, validators: [{ type:&quot;text&quot;, minLength:20 }] }
  ]
});

</code></pre>

<h3>Custom validation</h3>
<pre class="verysmall"><code class="prettyprint">
var MyTextValidator = (function (_super) {
  __extends(MyTextValidator, _super);
  function MyTextValidator() {
    _super.call(this);
  }
  MyTextValidator.prototype.getType = function () { return &quot;mytextvalidator&quot;; };
  MyTextValidator.prototype.validate = function (value, name) {
    if (value.indexOf(&quot;survey&quot;) < 0) {
      //report an error
      return new Survey.ValidatorResult(null, new Survey.CustomError(this.getErrorText(name)));
    }
    //return Survey.ValidatorResult object if you want to correct the entered value
    // return new Survey.ValidatorResult(youCorrectedValue);
    //return nothing if there is no any error.
    return null;
  };
  //the default error text. It shows if user do not set the 'text' property
  MyTextValidator.prototype.getDefaultErrorText = function(name) {
    return &quot;You text should contains 'survey' word.&quot;;
  }
  return MyTextValidator;
})(Survey.SurveyValidator);
Survey.MyTextValidator = MyTextValidator;
//add into survey Json metaData
Survey.JsonObject.metaData.addClass(&quot;mytextvalidator&quot;, [], function () { return new MyTextValidator(); }, &quot;surveyvalidator&quot;);
// JS
var survey = new Survey.Survey({
  questions: [{
    type: &quot;comment&quot;,
    name: &quot;memo&quot;,
    isRequired: true,
    title: &quot;Type here 'survey' to pass the validation &quot;,
    validators: [{ type: &quot;mytext&quot; }]
  }]
});

</code></pre>

<h3>Validator on an event</h3>
<pre class="verysmall"><code class="prettyprint">
survey.onValidateQuestion.add(function (s, options) {
  if (options.name == 'pricelimit') {
    var leastamount = options.value['leastamount'];
    var mostamount = options.value['mostamount'];
    if (!isNumber(leastamount)) { options.error = &quot;The 'least amount' should be a numeric.&quot;; }
    else {
      if (!isNumber(mostamount)) { options.error = &quot;The 'most amount' should be a numeric.&quot;; }
      else { if (leastamount > mostamount) { options.error = &quot;The 'most amount' should be more 'less amount'.&quot;; } }
    }
  }
  if (options.name == 'firstcomputer') {
    if (options.value.indexOf('computer') < 0) { options.error = &quot;Please type the word 'computer'.&quot;; }
  }
});
// JS
var survey = new Survey.Survey({
  questions: [{
    type: &quot;multipletext&quot;,
    name: &quot;pricelimit&quot;,
    title: &quot;What is the... &quot;,
    isRequired: true,
    colCount: 2,
    items: [
      { name: &quot;leastamount&quot;, title: &quot;The least amount you have ever paid for a computer&quot;, validators: [{ type: &quot;numeric&quot;, minValue: 10, maxValue: 10000 }] },
      {  name: &quot;mostamount&quot;, title: &quot;The most amount you have ever paid for a computer&quot;, validators: [{ type: &quot;numeric&quot;, minValue: 10, maxValue: 10000 }] }
    ]
  }, {
    type: &quot;comment&quot;,
    name: &quot;firstcomputer&quot;,
    title: &quot;Please tell us about your first computer (type the word 'computer')&quot;,
    isRequired: true,
    validators: [{ type:&quot;text&quot;, minLength:20 }]
  }]
});
function isNumber(n) { return n && !isNaN(parseFloat(n)) && isFinite(n); }

</code></pre>

<h3>Visible IF</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  showQuestionNumbers: &quot;off&quot;,
  questions: [
    { type: &quot;radiogroup&quot;, name: &quot;haveKids&quot;, title: &quot;Do you have a kid(s)?&quot;, isRequired: true, choices: [&quot;Yes&quot;, &quot;No&quot;], colCount: 0 },
    { type: &quot;dropdown&quot;, name: &quot;kids&quot;, title: &quot;How many kids do you have&quot;, visibleIf: &quot;{haveKids}='Yes'&quot;, isRequired: true, choices:[ 1, 2, 3, 4, 5 ]},
    { type: &quot;dropdown&quot;, name: &quot;kid1Age&quot;, title: &quot;The first kid age:&quot;, visibleIf: &quot;{haveKids}='Yes' and {kids} >= 1&quot;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &quot;dropdown&quot;, name: &quot;kid2Age&quot;, title: &quot;The second kid age:&quot;, visibleIf: &quot;{haveKids}='Yes' and {kids} >= 2&quot;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &quot;dropdown&quot;, name: &quot;kid3Age&quot;, title: &quot;The third kid age:&quot;, visibleIf: &quot;{haveKids}='Yes' and {kids} >= 3&quot;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &quot;dropdown&quot;, name: &quot;kid4Age&quot;, title: &quot;The fourth kid age:&quot;, visibleIf: &quot;{haveKids}='Yes' and {kids} >= 4&quot;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &quot;dropdown&quot;, name: &quot;kid5Age&quot;, title: &quot;The fifth kid age:&quot;, visibleIf: &quot;{haveKids}='Yes' and {kids} >= 5&quot;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]}
  ]
});

</code></pre>

<h3>Visible triggers (change the choices of the next question based on the answer of this question)</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  triggers: [
    { type: &quot;visible&quot;, name: &quot;type&quot;, operator: &quot;equal&quot;, value: &quot;Hot hatch&quot;, questions: [&quot;Hot hatch&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;sedan&quot;, questions: [&quot;Sedan&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;sports&quot;, questions: [&quot;Sports&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;Grand tourer&quot;, questions: [&quot;Grand tourer&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;SuperCar&quot;, questions: [&quot;Supercar&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;Muscle car&quot;, questions: [&quot;Muscle car&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;Pony car&quot;, questions: [&quot;Pony car&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;Convertible&quot;, questions: [&quot;Convertible&quot;] },
    { type: &quot;visible&quot;, name: &quot;type&quot;, value: &quot;other&quot;, questions: [&quot;otherType&quot;] }
  ],
  questions: [
    { type: &quot;radiogroup&quot;, name: &quot;type&quot;, isRequired: true, colCount: 4, hasOther: true, title: &quot;Please select the sport cars type.&quot;, choices: [&quot;Hot hatch&quot;, &quot;sedan|Sports saloon / sports sedan&quot;, &quot;sports|Sports Car&quot;, &quot;Grand tourer&quot;, &quot;SuperCar&quot;, &quot;Muscle car&quot;, &quot;Pony car&quot;, &quot;Convertible&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Hot hatch&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;Honda Civic Type R&quot;, &quot;Renault Megane RS&quot;, &quot;Fiat 500 Abarth&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Sedan&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;BMW M5&quot;, &quot;Mazdaspeed6/Mazda 6 MPS&quot;, &quot;Dodge Charger&quot;, &quot;Dodge SRT-4&quot;, &quot;Lotus Cortina&quot;, &quot;Mitsubishi EVO&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Sports&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;Chevrolet Corvette&quot;, &quot;Mazda MX-5&quot;, &quot;Porsche 911&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Grand tourer&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;Aston Martin V8&quot;, &quot;Lexus SC300/400&quot;, &quot;Ferrari 612 Scaglietti&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Supercar&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;McLaren P1&quot;, &quot;Lamborghini Miura&quot;, &quot;Bugatti Veyron 16.4&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Muscle car&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;Ford Torino&quot;, &quot;Plymouth Road Runner&quot;, &quot;Pontiac GTO&quot;, &quot;Ford Falcon&quot;, &quot;Holden Monaro&quot;, &quot;Valiant Charger&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Pony car&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;AMC Javelin&quot;, &quot;Chevrolet Camaro&quot;, &quot;Dodge Challenger&quot;]},
    { type: &quot;radiogroup&quot;, name: &quot;Convertible&quot;, isRequired: true, colCount: 4, visible: false, title: &quot;Please select the car&quot;, hasOther: true, choices: [&quot;Honda S2000&quot;, &quot;Volkswagen Eos&quot;, &quot;Volvo C70&quot;]},
    { type:&quot;comment&quot;, name: &quot;otherType&quot;, title: &quot;Please describe the car.&quot;, isRequired: true, visible: false}
  ]
});

</code></pre>

<h3>Allow to complete the survey from any stage</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  triggers: [
    { type: &quot;complete&quot;, name: &quot;exit1&quot;, operator: &quot;equal&quot;, value: &quot;Yes&quot; },
    { type: &quot;complete&quot;, name: &quot;exit2&quot;, operator: &quot;equal&quot;, value: &quot;Yes&quot; }
  ],
  pages: [{
    title: &quot;What operating system do you use?&quot;,
    questions: [
      { type:&quot;checkbox&quot;, name:&quot;opSystem&quot;, title: &quot;OS&quot;, hasOther: true, choices:[&quot;Windows&quot;, &quot;Linux&quot;, &quot;Macintosh OSX&quot;] },
      { type:&quot;radiogroup&quot;, name:&quot;exit1&quot;, title:&quot;Do you want to finish the survey?&quot;, choices: [&quot;Yes&quot;, &quot;No&quot;], colCount: 0 }
    ]
  }, {
    title: &quot;What language(s) are you currently using?&quot;,
    questions: [
      { type:&quot;checkbox&quot;, name:&quot;langs&quot;,title:&quot;Plese select from the list&quot;, colCount: 4, choices:[&quot;Javascript&quot;, &quot;Java&quot;, &quot;Python&quot;, &quot;CSS&quot;, &quot;PHP&quot;, &quot;Ruby&quot;, &quot;C++&quot;, &quot;C&quot;, &quot;Shell&quot;, &quot;C#&quot;, &quot;Objective-C&quot;, &quot;R&quot;, &quot;VimL&quot;, &quot;Go&quot;, &quot;Perl&quot;, &quot;CoffeeScript&quot;, &quot;TeX&quot;, &quot;Swift&quot;, &quot;Scala&quot;, &quot;Emacs List&quot;, &quot;Haskell&quot;, &quot;Lua&quot;, &quot;Clojure&quot;, &quot;Matlab&quot;, &quot;Arduino&quot;, &quot;Makefile&quot;, &quot;Groovy&quot;, &quot;Puppet&quot;, &quot;Rust&quot;, &quot;PowerShell&quot;] },
      { type:&quot;radiogroup&quot;, name:&quot;exit2&quot;, title:&quot;Do you want to finish the survey?&quot;, choices: [&quot;Yes&quot;, &quot;No&quot;], colCount: 0 }
    ]
  }, {
    title: &quot;Please enter your name and e-mail&quot;,
    questions: [
      { type: &quot;text&quot;, name: &quot;name&quot;, title: &quot;Name:&quot; },
      { type: &quot;text&quot;, name: &quot;email&quot;, title: &quot;Your e-mail&quot; }
    ]
  }]
});

</code></pre>

<h3>Insert data to a form</h3>
<pre class="verysmall"><code class="prettyprint">
var survey = new Survey.Survey({
  triggers: [
    { type: &quot;setvalue&quot;, name: &quot;copy&quot;, operator: &quot;equal&quot;, value: &quot;Yes&quot;, setToName: &quot;name&quot;, setValue: &quot;Jon Snow&quot; },
    { type: &quot;setvalue&quot;, name: &quot;copy&quot;, operator: &quot;equal&quot;, value: &quot;Yes&quot;, setToName: &quot;email&quot;, setValue: &quot;jon.show@nightwatch.com&quot; },
    { type: &quot;setvalue&quot;, name: &quot;copy&quot;, operator: &quot;equal&quot;, value: &quot;Yes&quot;, setToName: &quot;tempvar&quot;, isVariable: true, setValue: &quot;You have decided to use your current information.&quot; },
    { type: &quot;setvalue&quot;, name: &quot;copy&quot;, operator: &quot;equal&quot;, value: &quot;No&quot;, setToName: &quot;name&quot;, setValue: &quot;&quot; },
    { type: &quot;setvalue&quot;, name: &quot;copy&quot;, operator: &quot;equal&quot;, value: &quot;No&quot;, setToName: &quot;email&quot;, setValue: &quot;&quot; },
    { type: &quot;setvalue&quot;, name: &quot;copy&quot;, operator: &quot;equal&quot;, value: &quot;No&quot;, setToName: &quot;tempvar&quot;, isVariable: true, setValue: &quot;You have decided not to use your current information.&quot; }
  ],
  pages: [{
    title: &quot;Customer information&quot;,
    questions: [
      { type:&quot;radiogroup&quot;, name:&quot;copy&quot;, title: &quot;Use your current data&quot;, choices:[&quot;Yes&quot;, &quot;No&quot;], isRequired: true, colCount: 0 },
      { type: &quot;text&quot;, name: &quot;name&quot;, title: &quot;Name:&quot;, isRequired: true },
      { type: &quot;text&quot;, name: &quot;email&quot;, title: &quot;Your e-mail&quot;, isRequired: true, validators: [{ type:&quot;email&quot; }] }
    ]
  }],
  completedHtml: &quot;&lt;h4&gt;Thank you for sharing this information with us.&lt;/h4&gt;&lt;p&gt;Your name is: &lt;b&gt;{name}&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Your email is: &lt;b&gt;{email}&lt;/b&gt;&lt;/p&gt;&lt;p&gt;This information is not in the survey data result:&lt;b&gt; {tempvar}&lt;/b&gt;&lt;/p&gt;&quot;
});

</code></pre>

<h3>Allow only one time survey and show results in every page if needed</h3>
<pre class="verysmall"><code class="prettyprint">
function onIsSurveyCompleted(success, result, response) {
  if (!success) return;
  if(result == 'completed') { alert('You have already run the survey!'); }
  else { runSurvey(); }
}
function runSurveyCheck() {
  var clientId = document.getElementById('clientId').value;
  new Survey.dxSurveyService().isCompleted('47e699f7-d523-4476-8fcd-be601c91d119', clientId, onIsSurveyCompleted);
}
function runSurvey() {
  var survey = new Survey.Survey({
    surveyId: 'e7866476-e901-4ab7-9f38-574416387f73',
    surveyPostId: 'df2a04fb-ce9b-44a6-a6a7-6183ac555a68'
  }, &quot;surveyContainer&quot;);
  survey.clientId = document.getElementById('clientId').value;
  survey.sendResultOnPageNext = document.getElementById('sendResultOnPageNext').checked;
  survey.onComplete.add(function (s) {
    document.getElementById('surveyContainer').innerHTML = &quot;&quot;;
    document.getElementById(&quot;clientIdContainer&quot;).style.display = &quot;inline&quot;;
  });
  survey.onSendResult.add(function (survey) {
    var text = &quot;clientId:&quot; + survey.clientId + &quot;. The results are:&quot; + JSON.stringify(survey.data)  + String.fromCharCode(13, 10);
    var memo = document.getElementById('sentResults');
    memo.value = memo.value + text;
  });
  document.getElementById(&quot;clientIdContainer&quot;).style.display = &quot;none&quot;;
}

</code></pre>

<script>
  $(document).ready(function() {
    $('pre code').each(function(i, e) { hljs.highlightBlock(e) });
  });
</script>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
