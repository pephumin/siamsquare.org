<?php

$title = "Help";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p class=\"introtext\">This page shows a collection of help and examples to be used and applied appropriately.</p>\n";
echo "<br>\n";
$me = "/admin/?w=help";
if ((empty($_GET['d'])) || ($_GET['d'] == "questions")) {

  echo "<p class=\"pull-right\"><strong>Select the help topic [</strong> <u>Questions</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=flow")."\">Flow</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=editor")."\">Editor</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=API")."\">API</a> <strong>]</strong></p><br>\n";

?>

<h3>Scale [SA]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions:[{
    type: &#x22;rating&#x22;,
    name: &#x22;satisfaction&#x22;,
    title: &#x22;How satisfied are you with the Product?&#x22;,
    mininumRateDescription: &#x22;Not Satisfied&#x22;,
    maximumRateDescription: &#x22;Completely satisfied&#x22;
  }]
});
var q = survey.getQuestionByName(&#x27;satisfaction&#x27;);
q.mininumRateDescription = &#x22;Not at all satisfied&#x22;;
q.maximumRateDescription = &#x22;Extremely satisfied&#x22;;
q.rateValues = empty; // Option of empty, [1,2,3], [{value1, text:Bad}, {value:2, text:Average}, {value:3, text:Good}]
survey.render();</code></pre>

<h3>Text [OE]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;text&#x22;,
    name: &#x22;email&#x22;,
    title: &#x22;Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the &#x27;Submit&#x27; button.&#x22;
  }]
});
survey.getQuestionByName(&#x27;email&#x27;).size = 25; // Text size option of 10, 25, 50, 75, 100
survey.render();</code></pre>

<h3>Radio [SA]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;radiogroup&#x22;,
    name: &#x22;car&#x22;,
    title: &#x22;What car are you driving?&#x22;,
    isRequired: true,
    colCount: 4,
    choices: [&#x22;None&#x22;, &#x22;Ford&#x22;, &#x22;Vauxhall&#x22;, &#x22;Volkswagen&#x22;, &#x22;Nissan&#x22;, &#x22;Audi&#x22;, &#x22;Mercedes-Benz&#x22;, &#x22;BMW&#x22;, &#x22;Peugeot&#x22;, &#x22;Toyota&#x22;, &#x22;Citroen&#x22;]
  }]
});
// Ways of setting the &#x27;choice&#x27; property
choices: [{ value: 1, text: &#x22;Value 1&#x22; }, { value: 2, text: &#x22;Value 2&#x22; }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: &#x22;Value 2&#x22; }] // The values are: 1 and &#x27;Value 2&#x27; and texts are &#x27;1&#x27; and &#x27;Value 2&#x27;
choices: [&#x22;Value 1&#x22;, &#x22;Value 2&#x22;] // The values and texts are same
choices: [&#x22;1|Value 1&#x22;, &#x22;2|Value 2&#x22;] // The values are &#x27;1&#x27; and &#x27;2&#x27; and texts are &#x27;Value 1&#x27; and &#x27;Value 2&#x27;
var q = survey.getQuestionByName(&#x27;car&#x27;);
q.colCount = 1; // Option of 0, 1, 2, 3, 4
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = &#x22;Others (specified)&#x22;;
survey.render();</code></pre>

<h3>Dropdown [SA]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;dropdown&#x22;,
    name: &#x22;car&#x22;,
    title: &#x22;What car are you driving?&#x22;,
    isRequired: true,
    colCount: 0,
    choices: [&#x22;None&#x22;, &#x22;Ford&#x22;, &#x22;Vauxhall&#x22;, &#x22;Volkswagen&#x22;, &#x22;Nissan&#x22;, &#x22;Audi&#x22;, &#x22;Mercedes-Benz&#x22;, &#x22;BMW&#x22;, &#x22;Peugeot&#x22;, &#x22;Toyota&#x22;, &#x22;Citroen&#x22;]
  }]
});
// Ways of setting the &#x27;choice&#x27; property
choices: [{ value: 1, text: &#x22;Value 1&#x22; }, { value: 2, text: &#x22;Value 2&#x22; }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: &#x22;Value 2&#x22; }] // The values are: 1 and &#x27;Value 2&#x27; and texts are &#x27;1&#x27; and &#x27;Value 2&#x27;
choices: [&#x22;Value 1&#x22;, &#x22;Value 2&#x22;] // The values and texts are same
choices: [&#x22;1|Value 1&#x22;, &#x22;2|Value 2&#x22;] // The values are &#x27;1&#x27; and &#x27;2&#x27; and texts are &#x27;Value 1&#x27; and &#x27;Value 2&#x27;
var q = survey.getQuestionByName(&#x27;car&#x27;);
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = &#x22;Others (specified)&#x22;;
survey.render();</code></pre>

<h3>Dropdown with restfull [SA]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;dropdown&#x22;,
    name: &#x22;country&#x22;,
    title: &#x22;Select the country...&#x22;,
    isRequired: true,
    choicesByUrl: {
      url: &#x22;http://services.groupkt.com/country/get/all&#x22;,
      path: &#x22;RestResponse;result&#x22;,
      valueName: &#x22;name&#x22;
    }
  }]
});
var q = survey.getQuestionByName(&#x27;country&#x27;);
q.choicesByUrl.url = &#x27;http://yourrestfullserviceurl&#x27;;
q.choicesByUrl.path = &#x27;MyPathToTheResult&#x27;; // The path to the array of results in the returned json
q.choicesByUrl.valueName = &#x27;thePropertyNameForValue&#x27;; // The &#x27;value&#x27; element name in the returned json
q.choicesByUrl.titleName = &#x27;thePropertyNameForTitle&#x27;; // The &#x27;title&#x27; element name in the returned json (if empty, the value is used)
q.choicesByUrl.run();</code></pre>

<h3>Checkbox [MA]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;checkbox&#x22;,
    name: &#x22;car&#x22;,
    title: &#x22;What car are you driving?&#x22;,
    isRequired: true,
    colCount: 4,
    choices: [&#x22;None&#x22;, &#x22;Ford&#x22;, &#x22;Vauxhall&#x22;, &#x22;Volkswagen&#x22;, &#x22;Nissan&#x22;, &#x22;Audi&#x22;, &#x22;Mercedes-Benz&#x22;, &#x22;BMW&#x22;, &#x22;Peugeot&#x22;, &#x22;Toyota&#x22;, &#x22;Citroen&#x22;]
  }]
});
// Ways of setting the &#x27;choice&#x27; property
choices: [{ value: 1, text: &#x22;Value 1&#x22; }, { value: 2, text: &#x22;Value 2&#x22; }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: &#x22;Value 2&#x22; }] // The values are: 1 and &#x27;Value 2&#x27; and texts are &#x27;1&#x27; and &#x27;Value 2&#x27;
choices: [&#x22;Value 1&#x22;, &#x22;Value 2&#x22;] // The values and texts are same
choices: [&#x22;1|Value 1&#x22;, &#x22;2|Value 2&#x22;] // The values are &#x27;1&#x27; and &#x27;2&#x27; and texts are &#x27;Value 1&#x27; and &#x27;Value 2&#x27;
var q = survey.getQuestionByName(&#x27;car&#x27;);
q.colCount = 1; // Option of 0, 1, 2, 3, 4
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = &#x22;Others (specified)&#x22;;
survey.render();</code></pre>

<h3>Comment [OE]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions:[{
    type: &#x22;comment&#x22;,
    name: &#x22;suggestions&#x22;,
    title:&#x22;What would make you more satisfied with the Product?&#x22;
  }]
});
var q = survey.getQuestionByName(&#x27;suggestions&#x27;);
q.rows = 3; // Opton of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
survey.getQuestionByName(&#x27;suggestions&#x27;).cols = 50; // Column option of 10, 25, 50, 75, 100
survey.render();</code></pre>

<h3>HTML</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;html&#x22;,
    name: &#x22;info&#x22;,
    html: &#x22;...HTML CODE...&#x22;
  }]
});</code></pre>

<h3>Matrix [SA]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;matrix&#x22;,
    name: &#x22;Quality&#x22;,
    title: &#x22;Please indicate if you agree or disagree with the following statements&#x22;,
    columns: [
      { value: 1, text: &#x22;Strongly Disagree&#x22; },
      { value: 2, text: &#x22;Disagree&#x22; },
      { value: 3, text: &#x22;Neutral&#x22; },
      { value: 4, text: &#x22;Agree&#x22; },
      { value: 5, text: &#x22;Strongly Agree&#x22; }
    ],
    rows: [
      { value: &#x22;affordable&#x22;, text: &#x22;Product is affordable&#x22; },
      { value: &#x22;does what it claims&#x22;, text: &#x22;Product does what it claims&#x22; },
      { value: &#x22;better then others&#x22;, text: &#x22;Product is better than other products on the market&#x22; },
      { value: &#x22;easy to use&#x22;, text: &#x22;Product is easy to use&#x22; }
    ]
  }]
});</code></pre>

<h3>Matrix [MA]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;matrixdropdown&#x22;,
    name: &#x22;frameworksRate&#x22;,
    title: &#x22;Please tells us your opinion about JavaScript MVVM frameworks&#x22;,
    choices: [&#x22;Excelent&#x22;, &#x22;Good&#x22;, &#x22;Average&#x22;, &#x22;Fair&#x22;, &#x22;Poor&#x22;],
    columns: [
      { name: &#x22;using&#x22;, title: &#x22;Do you use it?&#x22;, choices: [&#x22;Yes&#x22;, &#x22;No&#x22;], cellType: &#x22;radiogroup&#x22; },
      { name: &#x22;experience&#x22;, title: &#x22;How long do you use it?&#x22;, choices: [{value: 5, text:&#x22;3-5 years&#x22;}, {value: 2, text:&#x22;1-2 years&#x22;}, {value: 1, text:&#x22;less then a year&#x22;}] },
      { name: &#x22;strength&#x22;, title: &#x22;What is main strength?&#x22;, choices: [&#x22;Easy&#x22;, &#x22;Compact&#x22;, &#x22;Fast&#x22;, &#x22;Powerfull&#x22;], cellType: &#x22;checkbox&#x22; },
      { name: &#x22;knowledge&#x22;, title: &#x22;Please describe your experience&#x22;, cellType:&#x22;text&#x22; },
      { name: &#x22;rate&#x22;, title: &#x22;Please rate the framework itself&#x22; }
    ],
    rows: [
      { value: &#x22;angularv1&#x22;, text: &#x22;angularjs v1.x&#x22; },
      { value: &#x22;angularv2&#x22;, text: &#x22;angularjs v2&#x22; },
      { value: &#x22;knockoutjs&#x22; },
      { value: &#x22;reactjs&#x22;}
    ]
  }]
});</code></pre>

<h3>Matrix [dynamics]</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;matrixdynamic&#x22;,
    name: &#x22;frameworksRate&#x22;,
    title: &#x22;Please rate your teachers&#x22;,
    addRowText: &#x22;Add Subject&#x22;,
    horizontalScroll: true,
    columnMinWidth: &#x22;120px&#x22;,
    columnColCount: 1,
    cellType: &#x22;radiogroup&#x22;,
    choices: [
      {value: 1 , text: &#x22;Yes&#x22;},
      {value: 0, text: &#x22;Sometimes&#x22;},
      {value: -1, text: &#x22;No&#x22;}
    ],
    columns: [
      { name: &#x22;subject&#x22;, cellType:&#x22;dropdown&#x22;, title: &#x22;Select a subject&#x22;, isRequired: true, minWidth: &#x22;300px&#x22;, choices: [&#x22;English: American Literature&#x22;, &#x22;English: British and World Literature&#x22;, &#x22;Math: Consumer Math&#x22;, &#x22;Math: Practical Math&#x22;, &#x22;Math: Developmental Algebra&#x22;, &#x22;Math: Continuing Algebra&#x22;, &#x22;Math: Pre-Algebra&#x22;, &#x22;Math: Algebra&#x22;, &#x22;Math: Geometry&#x22;, &#x22;Math: Integrated Mathematics&#x22;, &#x22;Science: Physical Science&#x22;, &#x22;Science: Earth Science&#x22;, &#x22;Science: Biology&#x22;, &#x22;Science: Chemistry&#x22;, &#x22;History: World History&#x22;, &#x22;History: Modern World Studies&#x22;, &#x22;History: U.S. History&#x22;, &#x22;History: Modern U.S. History&#x22;, &#x22;Social Sciences: U.S. Government and Politics&#x22;, &#x22;Social Sciences: U.S. and Global Economics&#x22;, &#x22;World Languages: Spanish&#x22;, &#x22;World Languages: French&#x22;, &#x22;World Languages: German&#x22;, &#x22;World Languages: Latin&#x22;, &#x22;World Languages: Chinese&#x22;, &#x22;World Languages: Japanese&#x22;]},
      { name: &#x22;explains&#x22;, title: &#x22;Clearly explains the objectives&#x22;},
      { name: &#x22;interesting&#x22;, title: &#x22;Makes class interesting&#x22; },
      { name: &#x22;effective&#x22;, title: &#x22;Uses class time effectively&#x22; },
      { name: &#x22;knowledge&#x22;, title: &#x22;Knows the subject matter&#x22; },
      { name: &#x22;recognition&#x22;, title: &#x22;Recognizes and acknowledges effort&#x22; },
      { name: &#x22;inform&#x22;, title: &#x22;Keeps me informed of my progress&#x22; },
      { name: &#x22;opinion&#x22;, title: &#x22;Encourages and accepts different opinions&#x22; },
      { name: &#x22;respect&#x22;, title: &#x22;Has the respect of the student&#x22; },
      { name: &#x22;cooperation&#x22;, title: &#x22;Encourages cooperation and participation&#x22; },
      { name: &#x22;parents&#x22;, title: &#x22;Communicates with my parents&#x22; },
      { name: &#x22;selfthinking&#x22;, title: &#x22;Encourages me to think for myself&#x22;},
      { name:&#x22;frusturation&#x22;, cellType: &#x22;comment&#x22;, title: &#x22;Is there anything about this class that frustrates you?&#x22;, minWidth: &#x22;250px&#x22;},
      { name:&#x22;likeTheBest&#x22;, cellType: &#x22;comment&#x22;, title: &#x22;What do you like best about this class and/or teacher?&#x22;, minWidth: &#x22;250px&#x22;},
      { name:&#x22;improvements&#x22;, cellType: &#x22;comment&#x22;, title: &#x22;What do you wish this teacher would do differently that would improve this class?&#x22;, minWidth: &#x22;250px&#x22;}
    ],
    rowCount: 2
  }]
});</code></pre>

<h3>Multiple text</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;multipletext&#x22;,
    name: &#x22;pricelimit&#x22;,
    title: &#x22;What is the... &#x22;,
    colCount: 2,
    items: [
      { name: &#x22;mostamount&#x22;, title: &#x22;Most amount you would every pay for a product like ours&#x22; },
      { name: &#x22;leastamount&#x22;, title: &#x22;The least amount you would feel comfortable paying&#x22; }
    ]
  }]
});</code></pre>

<h3>File uploading</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [{
    type: &#x22;file&#x22;,
    title: &#x22;Please upload your photo&#x22;,
    name: &#x22;image&#x22;,
    storeDataAsText: true,
    showPreview: true,
    imageWidth: 150,
    maxSize: 102400
  }]
});
survey.getQuestionByName(&#x27;image&#x27;).showPreview = false; // Opton of true, false
survey.getQuestionByName(&#x27;image&#x27;).storeDataAsText = false; // Opton of true, false
survey.getQuestionByName(&#x27;image&#x27;).imageHeight; // Image preview height option of XX (in pixels) or empty
survey.getQuestionByName(&#x27;image&#x27;).imageWidth; // Image preview width option of XX (in pixels) or empty
survey.getQuestionByName(&#x27;image&#x27;).maxSize; // File max size (in bytes) such as 102400, and default is 0 (no limits)
survey.render();</code></pre>

<?php
} else if ($_GET['d'] == "flow") {

  echo "<p class=\"pull-right\"><strong>Select the help topic [</strong> <a href=\"".htmlspecialchars($me."&d=questions")."\">Questions</a> <strong>:</strong> <u>Flow</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=editor")."\">Editor</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=API")."\">API</a> <strong>]</strong></p><br>\n";

?>

<h3>Set cookie</h3>
<pre><code class="r">var survey = new Survey.Survey({
  cookieName: &#x22;myuniquesurveyid&#x22;,
  questions: [{
    type: &#x22;checkbox&#x22;,
    name: &#x22;car&#x22;,
    title: &#x22;What car are you driving?&#x22;,
    isRequired: true,
    colCount: 4,
    choices: [&#x22;None&#x22;, &#x22;Ford&#x22;, &#x22;Vauxhall&#x22;, &#x22;Volkswagen&#x22;, &#x22;Nissan&#x22;, &#x22;Audi&#x22;, &#x22;Mercedes-Benz&#x22;, &#x22;BMW&#x22;, &#x22;Peugeot&#x22;, &#x22;Toyota&#x22;, &#x22;Citroen&#x22;]
  }]
});
survey.setCookie();
survey.deleteCookie();</code></pre>

<h3>Localise the survey</h3>
<pre><code class="r">survey.locale = &#x22;th&#x22;;
var Survey;
(function (Survey) {
  var mycustomSurveyStrings = {
    pagePrevText: &#x22;หน้าที่แล้ว&#x22;,
    pageNextText: &#x22;หน้าถัดไป&#x22;,
    completeText: &#x22;เสร็จสิ้น&#x22;,
    otherItemText: &#x22;อื่นๆ (ระบุ)&#x22;,
    progressText: &#x22;หน้าที่ {0} จาก {1}&#x22;,
    emptySurvey: &#x22;ไม่มีหน้าคำถามหรือข้อคำถามในแบบสอบถามชุดนี้&#x22;,
    completingSurvey: &#x22;ขอบคุณที่สละเวลาตอบแบบสอบถาม&#x22;,
    loadingSurvey: &#x22;กำลังโหลดแบบสอบถามจากฐานข้อมูล...&#x22;,
    optionsCaption: &#x22;กรุณาเลือก...&#x22;,
    requiredError: &#x22;คุณต้องตอบคำถามข้อนี้&#x22;,
    numericError: &#x22;คำตอบจะต้องเป็นตัวเลขเท่านั้น&#x22;,
    textMinLength: &#x22;กรุณาใส่ตัวอักษรอย่างน้อยจำนวน {0} ตัวอักษร&#x22;,
    minRowCountError: &#x22;กรุณาตอบอย่างน้่อยจำนวน {0} แถว&#x22;,
    minSelectError: &#x22;กรุณาเลือกอย่างน้่อยจำนวน {0} คำตอบ&#x22;,
    maxSelectError: &#x22;กรุณาเลือกไม่เกินจำนวน {0} คำตอบ&#x22;,
    numericMinMax: &#x22;{0} ควรจะเท่ากับหรือมากกว่า {1} และเท่ากับหรือน้อยกว่า {2}&#x22;,
    numericMin: &#x22;{0} ควรจะเท่ากับหรือมากกว่า {1}&#x22;,
    numericMax: &#x22;{0} ควรจะเท่ากับหรือน้อยกว่า {1}&#x22;,
    invalidEmail: &#x22;กรุณาใส่อีเมล์ที่ถูกต้อง&#x22;,
    urlRequestError: &#x22;เกิดข้อผิดผลาดสำหรับ {0} {1}&#x22;,
    urlGetChoicesError: &#x22;ไม่มีข้อมูลหรือการตั้งค่าไม่ถูกต้อง&#x22;,
    exceedMaxSize: &#x22;ไฟล์จะต้องมีขนาดไม่เกิน {0}&#x22;,
    otherRequiredError: &#x22;กรุณาใส่ค่าอื่นแทน&#x22;,
    uploadingFile: &#x22;กำลังอัพโหลดไฟล์อยู่ กรุณารอสักครู่แล้วลองใหม่อีกครั้ง&#x22;,
    addRow: &#x22;เพิ่มแถว&#x22;,
    removeRow: &#x22;ลบแถว&#x22;
  };
  Survey.surveyLocalization.locales["th"] = mycustomSurveyStrings;
})(Survey || (Survey = {}));</code></pre>

<h3>Several questions in one row</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questionTitleLocation: &#x22;bottom&#x22;, showQuestionNumbers: &#x22;off&#x22;,
  pages: [{
    name: &#x22;Address&#x22;,  title: &#x22;Address&#x22;,
    questions: [
      { type: &#x22;text&#x22;, name: &#x22;address1&#x22;, title: &#x22;Stree Address&#x22; },
      { type: &#x22;text&#x22;, name: &#x22;address2&#x22;, title: &#x22;Address Line 2&#x22; },
      { type: &#x22;text&#x22;, name: &#x22;city&#x22;, title: &#x22;City&#x22; },
      { type: &#x22;text&#x22;, name: &#x22;state&#x22;, startWithNewLine: false, title: &#x22;State / Province / Region&#x22; },
      { type: &#x22;text&#x22;, name: &#x22;zip&#x22;, title: &#x22;Zip / Postal Code&#x22; },
      { type: &#x22;dropdown&#x22;, name: &#x22;country&#x22;, startWithNewLine: false, title: &#x22;Country&#x22;,
        choicesByUrl: {
          url: &#x22;http://services.groupkt.com/country/get/all&#x22;,
          path: &#x22;RestResponse;result&#x22;,
          valueName: &#x22;name&#x22;
        }
      }
    ]
  }]
});</code></pre>

<h3>Survey options</h3>
<pre><code class="r">survey.requiredText = &#x22;*&#x22;;
survey.showQuestionNumbers = &#x22;on&#x22;; // Option of on, onPage, off
survey.showTitle = true; // Option of true, false
survey.showPageTitles = true; // Option of true, false
survey.showPageNumbers = false; // Option of true, false
survey.showProgressbar = off; // Option of top, bottom, off
survey.completedHtml = &#x22;&#x22;;
survey.render();</code></pre>

<h3>Include data in survey</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [
    { type: &#x22;text&#x22;, name: &#x22;name&#x22;, title: &#x22;Your name:&#x22;},
    { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Your e-mail&#x22;},
    { type: &#x22;checkbox&#x22;, name: &#x22;car&#x22;, title: &#x22;What car are you driving?&#x22;, isRequired: true, colCount: 4, choices: [&#x22;None&#x22;, &#x22;Ford&#x22;, &#x22;Vauxhall&#x22;, &#x22;Volkswagen&#x22;, &#x22;Nissan&#x22;, &#x22;Audi&#x22;, &#x22;Mercedes-Benz&#x22;, &#x22;BMW&#x22;, &#x22;Peugeot&#x22;, &#x22;Toyota&#x22;, &#x22;Citroen&#x22;] }
  ]
});
survey.data = { name:&#x22;John Doe&#x22;, email: &#x22;johndoe@nobody.com&#x22;, car:[&#x22;Ford&#x22;] };
survey.onValueChanged.add(function (sender, options) {
  var el = document.getElementById(options.name);
  if(el) { el.value = options.value; }
});
// &#x3C;div&#x3E;
//   &#x3C;p&#x3E;Name: &#x3C;input type=&#x22;text&#x22; id=&#x22;name&#x22; onChange=&#x22;survey.setValue(&#x27;name&#x27;, this.value)&#x22; value=&#x22;John Doe&#x22;&#x3E;&#x3C;/p&#x3E;
//   &#x3C;p&#x3E;Email: &#x3C;input type=&#x22;email&#x22; id=&#x22;email&#x22; size=&#x22;30&#x22; onChange=&#x22;survey.setValue(&#x27;email&#x27;, this.value)&#x22; value=&#x22;johndoe@nobody.com&#x22;&#x3E;&#x3C;/p&#x3E;
//   &#x3C;p&#x3E;Cars (use comma to separate values, not spaces): &#x3C;input type=&#x22;text&#x22; id=&#x22;car&#x22; size=&#x22;50&#x22; onChange=&#x22;survey.setValue(&#x27;car&#x27;, this.value.split(&#x27;,&#x27;))&#x22; value=&#x22;Ford&#x22;&#x3E;&#x3C;/p&#x3E;
// &#x3C;/div&#x3E;
survey.getValue(&#x27;questionName&#x27;); // Use getValue to get the value of the question
survey.setValue(&#x27;questionName&#x27;, newValue); // Use setValue to set the value of the question
survey.data = { &#x22;youquestion1&#x22;: value1, &#x22;youquestionN&#x22;:valueN }; // Use data property to get/set survey data as json
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
});</code></pre>

<h3>Custom navigation</h3>
<pre><code class="r">// HTML
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
  title: &#x22;Software developer survey.&#x22;,
  pages: [{
    title: &#x22;What operating system do you use?&#x22;,
    questions: [{ type:&#x22;checkbox&#x22;, name:&#x22;opSystem&#x22;, title: &#x22;OS&#x22;, hasOther: true, isRequired: true, choices: [&#x22;Windows&#x22;, &#x22;Linux&#x22;, &#x22;Macintosh OSX&#x22;] }
    ]
  }, {
    title: &#x22;What language(s) are you currently using?&#x22;,
    questions: [{ type:&#x22;checkbox&#x22;, name:&#x22;langs&#x22;, title:&#x22;Plese select from the list&#x22;, colCount: 4, isRequired: true, choices: [&#x22;Javascript&#x22;, &#x22;Java&#x22;, &#x22;Python&#x22;, &#x22;CSS&#x22;, &#x22;PHP&#x22;, &#x22;Ruby&#x22;, &#x22;C++&#x22;, &#x22;C&#x22;, &#x22;Shell&#x22;, &#x22;C#&#x22;, &#x22;Objective-C&#x22;, &#x22;R&#x22;, &#x22;VimL&#x22;, &#x22;Go&#x22;, &#x22;Perl&#x22;, &#x22;CoffeeScript&#x22;, &#x22;TeX&#x22;, &#x22;Swift&#x22;, &#x22;Scala&#x22;, &#x22;Emacs List&#x22;, &#x22;Haskell&#x22;, &#x22;Lua&#x22;, &#x22;Clojure&#x22;, &#x22;Matlab&#x22;, &#x22;Arduino&#x22;, &#x22;Makefile&#x22;, &#x22;Groovy&#x22;, &#x22;Puppet&#x22;, &#x22;Rust&#x22;, &#x22;PowerShell&#x22; ] }
    ]
  }, {
    title: &#x22;Please enter your name and e-mail&#x22;,
    questions: [{ type: &#x22;text&#x22;, name: &#x22;name&#x22;, title: &#x22;Name:&#x22; }, { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Your e-mail&#x22; }]
  }]
});
survey.showTitle = false;
survey.onRendered.add(function (sender) { setNavigationVisibility(sender); });
survey.onCurrentPageChanged.add(function (sender) { setNavigationVisibility(sender); });
function setNavigationVisibility(survey) {
  document.getElementById(&#x27;surveyPrev&#x27;).style.display = !survey.isFirstPage ? &#x22;inline&#x22; : &#x22;none&#x22;;
  document.getElementById(&#x27;surveyNext&#x27;).style.display = !survey.isLastPage ? &#x22;inline&#x22; : &#x22;none&#x22;;
  document.getElementById(&#x27;surveyComplete&#x27;).style.display = survey.isLastPage ? &#x22;inline&#x22; : &#x22;none&#x22;;
  document.getElementById(&#x27;surveyProgress&#x27;).innerText = &#x22;Page &#x22; + (survey.currentPage.visibleIndex + 1) + &#x22; of &#x22; + survey.visiblePageCount + &#x22;.&#x22;;
}
survey.pagePrevText = &#x22;Previous&#x22;;
survey.pageNextText = &#x22;Next&#x22;;
survey.completeText = &#x22;Submit&#x22;;
survey.showNavigationButtons = true; // Option of true, false
survey.render();</code></pre>

<h3>Custom text</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questionTitleTemplate: &#x22;{no}) {title} {require}:&#x22;,
  questionStartIndex: &#x22;A&#x22;,
  requiredText: &#x22;(*)&#x22;,
  pages: [{
    title: &#x22;This is the page {pageno} of {pagecount}.&#x22;,
    questions: [
      { type: &#x22;text&#x22;, name: &#x22;name&#x22;, title: &#x22;Please type your name&#x22;, isRequired: true },
      { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Please type your e-mail&#x22;, isRequired: true, validators: [{ type:&#x22;email&#x22; }
    ]}
  ]}, {
    title: &#x22;This is the page {pageno} of {pagecount}.&#x22;,
    questions: [
      { type: &#x22;comment&#x22;, name: &#x22;comment&#x22;, title: &#x22;{name}, please tell us what is on your mind&#x22; }
    ]}
  ],
  completedHtml: &#x22;&#x3C;h4&#x3E;Thank you for sharing this information with us.&#x3C;/h4&#x3E;&#x3C;p&#x3E;Your name is: &#x3C;b&#x3E;{name}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;Your email is: &#x3C;b&#x3E;{email}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;This is what is on your mind:&#x3C;/p&#x3E;&#x3C;p&#x3E;{comment}&#x3C;/p&#x3E;&#x22;
});
survey.questionTitleTemplate = &#x22;{no}) {title} {require}:&#x22;;
survey.requiredText = &#x22;(*)&#x22;;
survey.questionStartIndex = &#x22;A&#x22;;</code></pre>

<h3>Change radio and checkbox template</h3>
<pre><code class="r">var survey = new Survey.Survey({
  title: &#x22;Tell us, what technologies do you use?&#x22;,
  pages: [{
    name:&#x22;page1&#x22;,
    questions: [
      { type: &#x22;radiogroup&#x22;, choices: [&#x22;Yes&#x22;, &#x22;No&#x22;], isRequired: true, name: &#x22;frameworkUsing&#x22;, title: &#x22;Do you use any front-end framework like Bootstrap?&#x22; },
      { type: &#x22;checkbox&#x22;, choices: [&#x22;Bootstrap&#x22;,&#x22;Foundation&#x22;], hasOther: true, isRequired: true, name: &#x22;framework&#x22;, title: &#x22;What front-end framework do you use?&#x22;, visible: false }
    ]
  }, {
    name: &#x22;page2&#x22;,
    questions: [
      { type: &#x22;radiogroup&#x22;, choices: [&#x22;Yes&#x22;,&#x22;No&#x22;], isRequired: true, name: &#x22;mvvmUsing&#x22;, title: &#x22;Do you use any MVVM framework?&#x22; },
      { type: &#x22;checkbox&#x22;, choices: [&#x22;AngularJS&#x22;, &#x22;KnockoutJS&#x22;, &#x22;React&#x22;], hasOther: true, isRequired: true, name: &#x22;mvvm&#x22;, title: &#x22;What MVVM framework do you use?&#x22;, visible: false }
    ]
  }, {
    name: &#x22;page3&#x22;,
    questions: [
      { type: &#x22;comment&#x22;, name: &#x22;about&#x22;, title: &#x22;Please tell us about your main requirements for Survey library&#x22; }
    ]
  }],
  triggers: [
    { type: &#x22;visible&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, name: &#x22;frameworkUsing&#x22;, questions: [&#x22;framework&#x22;] },
    { type: &#x22;visible&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, name: &#x22;mvvmUsing&#x22;, questions: [&#x22;mvvm&#x22;] }
  ]
});
new Survey.SurveyTemplateText().replaceText(&#x27;&#x3C;div class=&#x22;btn-group&#x22; data-toggle=&#x22;buttons&#x22;&#x3E;&#x3C;!-- ko foreach: { data: question.visibleChoices, as: &#x22;item&#x22;, afterRender: question.koAfterRender}  --&#x3E; &#x3C;label class=&#x22;btn btn-default&#x22; data-bind=&#x22;css:{active: $data.value == question.koValue()}, style:{width: question.koWidth}&#x22;&#x3E;   &#x3C;input type=&#x22;radio&#x22; data-bind=&#x22;attr: {name: question.name, value: item.value}, checked: question.koValue&#x22; /&#x3E; &#x3C;span data-bind=&#x22;text: item.text&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/label&#x3E;&#x3C;!-- /ko --&#x3E;&#x3C;div data-bind=&#x22;visible:question.hasOther&#x22;&#x3E;&#x3C;div data-bind=&#x22;template: { name: \&#x27;survey-comment\&#x27;, data: {\&#x27;question\&#x27;: question, \&#x27;visible\&#x27;: question.koOtherVisible } }&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x27;, &#x22;question&#x22;, &#x22;radiogroup&#x22;);
new Survey.SurveyTemplateText().replaceText(&#x27;&#x3C;div class=&#x22;btn-group&#x22; data-toggle=&#x22;buttons&#x22;&#x3E;&#x3C;!-- ko foreach: { data: question.visibleChoices, as: &#x22;item&#x22;, afterRender: question.koAfterRender}  --&#x3E; &#x3C;label class=&#x22;btn btn-default&#x22; data-bind=&#x22;css:{active: question.koValue().indexOf($data.value) &#x3E; -1}, style:{width: question.koWidth}&#x22;&#x3E;   &#x3C;input type=&#x22;checkbox&#x22; data-bind=&#x22;attr: {name: question.name, value: item.value}, checked: question.koValue&#x22; /&#x3E; &#x3C;span data-bind=&#x22;text: item.text&#x22;&#x3E;&#x3C;/span&#x3E;&#x3C;/label&#x3E;&#x3C;!-- /ko --&#x3E;&#x3C;div data-bind=&#x22;visible:question.hasOther&#x22;&#x3E;&#x3C;div data-bind=&#x22;template: { name: \&#x27;survey-comment\&#x27;, data: {\&#x27;question\&#x27;: question, \&#x27;visible\&#x27;: question.koOtherVisible } }&#x22;&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x3C;/div&#x3E;&#x27;, &#x22;question&#x22;, &#x22;checkbox&#x22;);</code></pre>

<h3>Go to the next page automatically</h3>
<pre><code class="r">var survey = new Survey.Survey({
  title: &#x22;American History&#x22;,
  showProgressBar: &#x22;bottom&#x22;,
  goNextPageAutomatic: true,
  showNavigationButtons: false,
  pages: [
    { questions: [{ type: &#x22;radiogroup&#x22;,  name: &#x22;civilwar&#x22;, title: &#x22;When was the Civil War?&#x22;, choices: [&#x22;1750-1800&#x22;, &#x22;1800-1850&#x22;, &#x22;1850-1900&#x22;, &#x22;1900-1950&#x22;,&#x22;after 1950&#x22;]} ]},
    { questions: [{ type: &#x22;radiogroup&#x22;,  name: &#x22;libertyordeath&#x22;, title: &#x22;Who said &#x27;Give me liberty or give me death?&#x27;&#x22;, choicesOrder: &#x22;random&#x22;, choices: [&#x22;John Hancock&#x22;, &#x22;James Madison&#x22;, &#x22;Patrick Henry&#x22;, &#x22;Samuel Adams&#x22;]} ]},
    { questions: [{ type: &#x22;radiogroup&#x22;,  name: &#x22;magnacarta&#x22;, title: &#x22;What is the Magna Carta?&#x22;, choicesOrder: &#x22;random&#x22;, choices: [&#x22;The foundation of the British parliamentary system&#x22;, &#x22;The Great Seal of the monarchs of England&#x22;, &#x22;The French Declaration of the Rights of Man&#x22;, &#x22;The charter signed by the Pilgrims on the May flower&#x22;]} ]}
  ],
  completedHtml: &#x22;&#x3C;p&#x3E;Your anwers are:&#x3C;/p&#x3E;&#x3C;p&#x3E;When was the Civil War?: &#x3C;b&#x3E;{civilwar}&#x3C;/b&#x3E;. The correct is: &#x3C;b&#x3E;1850-1900&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;Who said &#x27;Give me liberty or give me death?&#x27;: &#x3C;b&#x3E;{libertyordeath}&#x3C;/b&#x3E;. The correct is: &#x3C;b&#x3E;Patrick Henry&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;What is the Magna Carta?: &#x3C;b&#x3E;{magnacarta}&#x3C;/b&#x3E;. The correct is: &#x3C;b&#x3E;The foundation of the British parliamentary system&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x22;
});
survey.showNavigationButtons = false;
survey.goNextPageAutomatic = true;</code></pre>

<h3>Standard validators</h3>
<pre><code class="r">var survey = new Survey.Survey({
  questions: [
    { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Please enter your e-mail&#x22;, isRequired: true, validators: [{ type:&#x22;email&#x22; }] },
    { type: &#x22;multipletext&#x22;, name: &#x22;pricelimit&#x22;, title: &#x22;What is the... &#x22;, isRequired: true, colCount: 2, items: [
      { name: &#x22;leastamount&#x22;, title: &#x22;The least amount you have ever paid for a computer&#x22;, validators: [{ type: &#x22;numeric&#x22;, minValue: 10, maxValue: 10000 }] },
      { name: &#x22;mostamount&#x22;, title: &#x22;The most amount you have ever paid for a computer&#x22;, validators: [{ type: &#x22;numeric&#x22;, minValue: 10, maxValue: 10000 }] }
    ]},
    { type: &#x22;comment&#x22;, name: &#x22;firstcomputer&#x22;, title: &#x22;Please tell us about your first computer&#x22;, isRequired: true, validators: [{ type:&#x22;text&#x22;, minLength:20 }] }
  ]
});</code></pre>

<h3>Custom validation</h3>
<pre><code class="r">var MyTextValidator = (function (_super) {
  __extends(MyTextValidator, _super);
  function MyTextValidator() {
    _super.call(this);
  }
  MyTextValidator.prototype.getType = function () { return &#x22;mytextvalidator&#x22;; };
  MyTextValidator.prototype.validate = function (value, name) {
    if (value.indexOf(&#x22;survey&#x22;) &#x3C; 0) {
      //report an error
      return new Survey.ValidatorResult(null, new Survey.CustomError(this.getErrorText(name)));
    }
    //return Survey.ValidatorResult object if you want to correct the entered value
    // return new Survey.ValidatorResult(youCorrectedValue);
    //return nothing if there is no any error.
    return null;
  };
  //the default error text. It shows if user do not set the &#x27;text&#x27; property
  MyTextValidator.prototype.getDefaultErrorText = function(name) {
    return &#x22;You text should contains &#x27;survey&#x27; word.&#x22;;
  }
  return MyTextValidator;
})(Survey.SurveyValidator);
Survey.MyTextValidator = MyTextValidator;
//add into survey Json metaData
Survey.JsonObject.metaData.addClass(&#x22;mytextvalidator&#x22;, [], function () { return new MyTextValidator(); }, &#x22;surveyvalidator&#x22;);
// JS
var survey = new Survey.Survey({
  questions: [{
    type: &#x22;comment&#x22;,
    name: &#x22;memo&#x22;,
    isRequired: true,
    title: &#x22;Type here &#x27;survey&#x27; to pass the validation &#x22;,
    validators: [{ type: &#x22;mytext&#x22; }]
  }]
});</code></pre>

<h3>Validator on an event</h3>
<pre><code class="r">survey.onValidateQuestion.add(function (s, options) {
  if (options.name == &#x27;pricelimit&#x27;) {
    var leastamount = options.value[&#x27;leastamount&#x27;];
    var mostamount = options.value[&#x27;mostamount&#x27;];
    if (!isNumber(leastamount)) { options.error = &#x22;The &#x27;least amount&#x27; should be a numeric.&#x22;; }
    else {
      if (!isNumber(mostamount)) { options.error = &#x22;The &#x27;most amount&#x27; should be a numeric.&#x22;; }
      else { if (leastamount &#x3E; mostamount) { options.error = &#x22;The &#x27;most amount&#x27; should be more &#x27;less amount&#x27;.&#x22;; } }
    }
  }
  if (options.name == &#x27;firstcomputer&#x27;) {
    if (options.value.indexOf(&#x27;computer&#x27;) &#x3C; 0) { options.error = &#x22;Please type the word &#x27;computer&#x27;.&#x22;; }
  }
});
// JS
var survey = new Survey.Survey({
  questions: [{
    type: &#x22;multipletext&#x22;,
    name: &#x22;pricelimit&#x22;,
    title: &#x22;What is the... &#x22;,
    isRequired: true,
    colCount: 2,
    items: [
      { name: &#x22;leastamount&#x22;, title: &#x22;The least amount you have ever paid for a computer&#x22;, validators: [{ type: &#x22;numeric&#x22;, minValue: 10, maxValue: 10000 }] },
      {  name: &#x22;mostamount&#x22;, title: &#x22;The most amount you have ever paid for a computer&#x22;, validators: [{ type: &#x22;numeric&#x22;, minValue: 10, maxValue: 10000 }] }
    ]
  }, {
    type: &#x22;comment&#x22;,
    name: &#x22;firstcomputer&#x22;,
    title: &#x22;Please tell us about your first computer (type the word &#x27;computer&#x27;)&#x22;,
    isRequired: true,
    validators: [{ type:&#x22;text&#x22;, minLength:20 }]
  }]
});
function isNumber(n) { return n &#x26;&#x26; !isNaN(parseFloat(n)) &#x26;&#x26; isFinite(n); }</code></pre>

<h3>Visible IF</h3>
<pre><code class="r">var survey = new Survey.Survey({
  showQuestionNumbers: &#x22;off&#x22;,
  questions: [
    { type: &#x22;radiogroup&#x22;, name: &#x22;haveKids&#x22;, title: &#x22;Do you have a kid(s)?&#x22;, isRequired: true, choices: [&#x22;Yes&#x22;, &#x22;No&#x22;], colCount: 0 },
    { type: &#x22;dropdown&#x22;, name: &#x22;kids&#x22;, title: &#x22;How many kids do you have&#x22;, visibleIf: &#x22;{haveKids}=&#x27;Yes&#x27;&#x22;, isRequired: true, choices:[ 1, 2, 3, 4, 5 ]},
    { type: &#x22;dropdown&#x22;, name: &#x22;kid1Age&#x22;, title: &#x22;The first kid age:&#x22;, visibleIf: &#x22;{haveKids}=&#x27;Yes&#x27; and {kids} &#x3E;= 1&#x22;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &#x22;dropdown&#x22;, name: &#x22;kid2Age&#x22;, title: &#x22;The second kid age:&#x22;, visibleIf: &#x22;{haveKids}=&#x27;Yes&#x27; and {kids} &#x3E;= 2&#x22;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &#x22;dropdown&#x22;, name: &#x22;kid3Age&#x22;, title: &#x22;The third kid age:&#x22;, visibleIf: &#x22;{haveKids}=&#x27;Yes&#x27; and {kids} &#x3E;= 3&#x22;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &#x22;dropdown&#x22;, name: &#x22;kid4Age&#x22;, title: &#x22;The fourth kid age:&#x22;, visibleIf: &#x22;{haveKids}=&#x27;Yes&#x27; and {kids} &#x3E;= 4&#x22;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: &#x22;dropdown&#x22;, name: &#x22;kid5Age&#x22;, title: &#x22;The fifth kid age:&#x22;, visibleIf: &#x22;{haveKids}=&#x27;Yes&#x27; and {kids} &#x3E;= 5&#x22;, isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]}
  ]
});</code></pre>

<h3>Visible triggers (change the choices of the next question based on the answer of this question)</h3>
<pre><code class="r">var survey = new Survey.Survey({
  triggers: [
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Hot hatch&#x22;, questions: [&#x22;Hot hatch&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;sedan&#x22;, questions: [&#x22;Sedan&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;sports&#x22;, questions: [&#x22;Sports&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;Grand tourer&#x22;, questions: [&#x22;Grand tourer&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;SuperCar&#x22;, questions: [&#x22;Supercar&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;Muscle car&#x22;, questions: [&#x22;Muscle car&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;Pony car&#x22;, questions: [&#x22;Pony car&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;Convertible&#x22;, questions: [&#x22;Convertible&#x22;] },
    { type: &#x22;visible&#x22;, name: &#x22;type&#x22;, value: &#x22;other&#x22;, questions: [&#x22;otherType&#x22;] }
  ],
  questions: [
    { type: &#x22;radiogroup&#x22;, name: &#x22;type&#x22;, isRequired: true, colCount: 4, hasOther: true, title: &#x22;Please select the sport cars type.&#x22;, choices: [&#x22;Hot hatch&#x22;, &#x22;sedan|Sports saloon / sports sedan&#x22;, &#x22;sports|Sports Car&#x22;, &#x22;Grand tourer&#x22;, &#x22;SuperCar&#x22;, &#x22;Muscle car&#x22;, &#x22;Pony car&#x22;, &#x22;Convertible&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Hot hatch&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;Honda Civic Type R&#x22;, &#x22;Renault Megane RS&#x22;, &#x22;Fiat 500 Abarth&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Sedan&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;BMW M5&#x22;, &#x22;Mazdaspeed6/Mazda 6 MPS&#x22;, &#x22;Dodge Charger&#x22;, &#x22;Dodge SRT-4&#x22;, &#x22;Lotus Cortina&#x22;, &#x22;Mitsubishi EVO&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Sports&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;Chevrolet Corvette&#x22;, &#x22;Mazda MX-5&#x22;, &#x22;Porsche 911&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Grand tourer&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;Aston Martin V8&#x22;, &#x22;Lexus SC300/400&#x22;, &#x22;Ferrari 612 Scaglietti&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Supercar&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;McLaren P1&#x22;, &#x22;Lamborghini Miura&#x22;, &#x22;Bugatti Veyron 16.4&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Muscle car&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;Ford Torino&#x22;, &#x22;Plymouth Road Runner&#x22;, &#x22;Pontiac GTO&#x22;, &#x22;Ford Falcon&#x22;, &#x22;Holden Monaro&#x22;, &#x22;Valiant Charger&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Pony car&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;AMC Javelin&#x22;, &#x22;Chevrolet Camaro&#x22;, &#x22;Dodge Challenger&#x22;]},
    { type: &#x22;radiogroup&#x22;, name: &#x22;Convertible&#x22;, isRequired: true, colCount: 4, visible: false, title: &#x22;Please select the car&#x22;, hasOther: true, choices: [&#x22;Honda S2000&#x22;, &#x22;Volkswagen Eos&#x22;, &#x22;Volvo C70&#x22;]},
    { type:&#x22;comment&#x22;, name: &#x22;otherType&#x22;, title: &#x22;Please describe the car.&#x22;, isRequired: true, visible: false}
  ]
});</code></pre>

<h3>Allow to complete the survey from any stage</h3>
<pre><code class="r">var survey = new Survey.Survey({
  triggers: [
    { type: &#x22;complete&#x22;, name: &#x22;exit1&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22; },
    { type: &#x22;complete&#x22;, name: &#x22;exit2&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22; }
  ],
  pages: [{
    title: &#x22;What operating system do you use?&#x22;,
    questions: [
      { type:&#x22;checkbox&#x22;, name:&#x22;opSystem&#x22;, title: &#x22;OS&#x22;, hasOther: true, choices:[&#x22;Windows&#x22;, &#x22;Linux&#x22;, &#x22;Macintosh OSX&#x22;] },
      { type:&#x22;radiogroup&#x22;, name:&#x22;exit1&#x22;, title:&#x22;Do you want to finish the survey?&#x22;, choices: [&#x22;Yes&#x22;, &#x22;No&#x22;], colCount: 0 }
    ]
  }, {
    title: &#x22;What language(s) are you currently using?&#x22;,
    questions: [
      { type:&#x22;checkbox&#x22;, name:&#x22;langs&#x22;,title:&#x22;Plese select from the list&#x22;, colCount: 4, choices:[&#x22;Javascript&#x22;, &#x22;Java&#x22;, &#x22;Python&#x22;, &#x22;CSS&#x22;, &#x22;PHP&#x22;, &#x22;Ruby&#x22;, &#x22;C++&#x22;, &#x22;C&#x22;, &#x22;Shell&#x22;, &#x22;C#&#x22;, &#x22;Objective-C&#x22;, &#x22;R&#x22;, &#x22;VimL&#x22;, &#x22;Go&#x22;, &#x22;Perl&#x22;, &#x22;CoffeeScript&#x22;, &#x22;TeX&#x22;, &#x22;Swift&#x22;, &#x22;Scala&#x22;, &#x22;Emacs List&#x22;, &#x22;Haskell&#x22;, &#x22;Lua&#x22;, &#x22;Clojure&#x22;, &#x22;Matlab&#x22;, &#x22;Arduino&#x22;, &#x22;Makefile&#x22;, &#x22;Groovy&#x22;, &#x22;Puppet&#x22;, &#x22;Rust&#x22;, &#x22;PowerShell&#x22;] },
      { type:&#x22;radiogroup&#x22;, name:&#x22;exit2&#x22;, title:&#x22;Do you want to finish the survey?&#x22;, choices: [&#x22;Yes&#x22;, &#x22;No&#x22;], colCount: 0 }
    ]
  }, {
    title: &#x22;Please enter your name and e-mail&#x22;,
    questions: [
      { type: &#x22;text&#x22;, name: &#x22;name&#x22;, title: &#x22;Name:&#x22; },
      { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Your e-mail&#x22; }
    ]
  }]
});</code></pre>

<h3>Insert data to a form</h3>
<pre><code class="r">var survey = new Survey.Survey({
  triggers: [
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, setToName: &#x22;name&#x22;, setValue: &#x22;Jon Snow&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, setToName: &#x22;email&#x22;, setValue: &#x22;jon.show@nightwatch.com&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;Yes&#x22;, setToName: &#x22;tempvar&#x22;, isVariable: true, setValue: &#x22;You have decided to use your current information.&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;No&#x22;, setToName: &#x22;name&#x22;, setValue: &#x22;&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;No&#x22;, setToName: &#x22;email&#x22;, setValue: &#x22;&#x22; },
    { type: &#x22;setvalue&#x22;, name: &#x22;copy&#x22;, operator: &#x22;equal&#x22;, value: &#x22;No&#x22;, setToName: &#x22;tempvar&#x22;, isVariable: true, setValue: &#x22;You have decided not to use your current information.&#x22; }
  ],
  pages: [{
    title: &#x22;Customer information&#x22;,
    questions: [
      { type:&#x22;radiogroup&#x22;, name:&#x22;copy&#x22;, title: &#x22;Use your current data&#x22;, choices:[&#x22;Yes&#x22;, &#x22;No&#x22;], isRequired: true, colCount: 0 },
      { type: &#x22;text&#x22;, name: &#x22;name&#x22;, title: &#x22;Name:&#x22;, isRequired: true },
      { type: &#x22;text&#x22;, name: &#x22;email&#x22;, title: &#x22;Your e-mail&#x22;, isRequired: true, validators: [{ type:&#x22;email&#x22; }] }
    ]
  }],
  completedHtml: &#x22;&#x3C;h4&#x3E;Thank you for sharing this information with us.&#x3C;/h4&#x3E;&#x3C;p&#x3E;Your name is: &#x3C;b&#x3E;{name}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;Your email is: &#x3C;b&#x3E;{email}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x3C;p&#x3E;This information is not in the survey data result:&#x3C;b&#x3E; {tempvar}&#x3C;/b&#x3E;&#x3C;/p&#x3E;&#x22;
});</code></pre>

<h3>Allow only one time survey and show results in every page if needed</h3>
<pre><code class="r">function onIsSurveyCompleted(success, result, response) {
  if (!success) return;
  if(result == &#x27;completed&#x27;) { alert(&#x27;You have already run the survey!&#x27;); }
  else { runSurvey(); }
}
function runSurveyCheck() {
  var clientId = document.getElementById(&#x27;clientId&#x27;).value;
  new Survey.dxSurveyService().isCompleted(&#x27;47e699f7-d523-4476-8fcd-be601c91d119&#x27;, clientId, onIsSurveyCompleted);
}
function runSurvey() {
  var survey = new Survey.Survey({
    surveyId: &#x27;e7866476-e901-4ab7-9f38-574416387f73&#x27;,
    surveyPostId: &#x27;df2a04fb-ce9b-44a6-a6a7-6183ac555a68&#x27;
  }, &#x22;surveyContainer&#x22;);
  survey.clientId = document.getElementById(&#x27;clientId&#x27;).value;
  survey.sendResultOnPageNext = document.getElementById(&#x27;sendResultOnPageNext&#x27;).checked;
  survey.onComplete.add(function (s) {
    document.getElementById(&#x27;surveyContainer&#x27;).innerHTML = &#x22;&#x22;;
    document.getElementById(&#x22;clientIdContainer&#x22;).style.display = &#x22;inline&#x22;;
  });
  survey.onSendResult.add(function (survey) {
    var text = &#x22;clientId:&#x22; + survey.clientId + &#x22;. The results are:&#x22; + JSON.stringify(survey.data)  + String.fromCharCode(13, 10);
    var memo = document.getElementById(&#x27;sentResults&#x27;);
    memo.value = memo.value + text;
  });
  document.getElementById(&#x22;clientIdContainer&#x22;).style.display = &#x22;none&#x22;;
}</code></pre>

<h3>On event functions</h3>
<pre><code class="r">Survey.Survey.cssType = &#x22;bootstrap&#x22;;
var survey = new Survey.Survey (getsurveydata(surveyid), &#x22;runsurvey&#x22;);
survey.onComplete.add(function (s) { postsurveydata(cid, ip, email, surveyid, survey.data, mm.title); });
survey.onUploadFile.add(function (data) { $(&#x27;#showupload&#x27;).show(); });
survey.onCurrentPageChanged
survey.onValueChanged
survey.onVisibleChanged
survey.onPageVisibleChanged
survey.onQuestionAdded
survey.onQuestionRemoved
survey.onValidateQuestion
survey.onProcessHtml
survey.onSendResult
survey.onGetResult</code></pre>

<?php
} else if ($_GET['d'] == "editor") {

  echo "<p class=\"pull-right\"><strong>Select the help topic [</strong> <a href=\"".htmlspecialchars($me."&d=questions")."\">Questions</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=flow")."\">Flow</a> <strong>:</strong> <u>Editor</u> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=API")."\">API</a> <strong>]</strong></p><br>\n";

?>

<h3>Show/hide tab</h3>
<pre><code class="r">var editorOptions = {};
var editor = new SurveyEditor.SurveyEditor(&#x22;editorElement&#x22;, editorOptions);

editorOptions.showJSONEditorTab = yourJSONTabValue;
editorOptions.showTestSurveyTab = yourTestSurveyValue;
editorOptions.showEmbededSurveyTab = yourEmbededSurveyValue;
editor.render(null, editorOptions);</code></pre>

<h3>Remove question types</h3>
<pre><code class="r">var editorOptions = {questionTypes : [&#x22;text&#x22;, &#x22;checkbox&#x22;, &#x22;radiogroup&#x22;, &#x22;dropdown&#x22;]};
var editor = new SurveyEditor.SurveyEditor(&#x22;editorElement&#x22;, editorOptions);

editorOptions.questionTypes  = [yourArrayOfQuestionNames];
editor.render(null, editorOptions);</code></pre>

<h3>Add custom properties to objects</h3>
<pre><code class="r">// add a property to the survey object
Survey.JsonObject.metaData.addProperty(&#x22;survey&#x22;, &#x22;tag:number&#x22;);

// add a property to the page object
Survey.JsonObject.metaData.addProperty(&#x22;page&#x22;, {name: &#x22;tag:number&#x22;, default: 1});

// add a property to the base question class and as result to all questions
Survey.JsonObject.metaData.addProperty(&#x22;questionbase&#x22;, {name: &#x22;tag:number&#x22;, default: 0});

// Use default options
var editorOptions = {};
var editor = new SurveyEditor.SurveyEditor(&#x22;editorElement&#x22;, editorOptions);</code></pre>

<h3>Limit changes to only some specific properties</h3>
<pre><code class="r">// remove a property to the page object. You can&#x27;t set it in JSON as well
Survey.JsonObject.metaData.removeProperty(&#x22;page&#x22;, &#x22;visibleIf&#x22;);

// remove a property from the base question class and as result from all questions
Survey.JsonObject.metaData.removeProperty(&#x22;questionbase&#x22;, &#x22;visibleIf&#x22;);

var editor = new SurveyEditor.SurveyEditor();

// Hide properties from properties editor. You may set hidden properties in JSON editor.
editor.onCanShowProperty.add(function(sender, options) {
  if (options.obj.getType() == &#x22;survey&#x22;) {
    options.canShow = options.property.name == &#x22;title&#x22;;
  }
});
editor.render(&#x22;editorElement&#x22;);</code></pre>

<h3>Set and save survey results</h3>
<pre><code class="r">var editor = new SurveyEditor.SurveyEditor(&#x22;editorElement&#x22;);

// Setting this callback will make visible the &#x22;Save&#x22; button
editor.saveSurveyFunc = function() {
  //save the survey JSON
  var jsonEl = document.getElementById(&#x27;surveyJSON&#x27;);
  jsonEl.value = editor.text;
}

editor.text = &#x22;{ pages: [{ name:\&#x27;page1\&#x27;, questions: [{ type: \&#x27;text\&#x27;, name:\&#x22;q1\&#x22;}]}]}&#x22;;</code></pre>

<?php
} else if ($_GET['d'] == "API") {

  echo "<p class=\"pull-right\"><strong>Select the help topic [</strong> <a href=\"".htmlspecialchars($me."&d=questions")."\">Questions</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=flow")."\">Flow</a> <strong>:</strong> <a href=\"".htmlspecialchars($me."&d=editor")."\">Editor</a> <strong>:</strong> <u>API</u> <strong>]</strong></p><br>\n";

?>

<h3>All surveys</h3>

<pre><code class="r">/all/A</code></pre>
<p>Get all survey info type A (status = 1)<br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/all/B</code></pre>
<p>Get all survey info type B (status = 2)<br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/all/C</code></pre>
<p>Get all survey info type C (status = 3)<br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/all/D</code></pre>
<p>Get all survey info type D (status = 4)<br><small>Type: <code>GET</code></small></p>

<h3>Survey by user</h3>

<pre><code class="r">/user/:userid/new?title=Title</code></pre>
<p>Create a new survey for <code>:userid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/user/:userid/A</code></pre>
<p>Get survey info type A (status = 1) for <code>:userid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/user/:userid/B</code></pre>
<p>Get survey info type B (status = 2) for <code>:userid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/user/:userid/C</code></pre>
<p>Get survey info type C (status = 3) for <code>:userid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/user/:userid/D</code></pre>
<p>Get survey info type D (status = 4) for <code>:userid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/user/:userid</code></pre>
<p>List all surveys for <code>:userid</code><br><small>Type: <code>GET</code></small></p>

<h3>Survey by company</h3>

<pre><code class="r">/company/:companyid/A</code></pre>
<p>Get survey info type A (status = 1) for <code>:companyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/company/:companyid/B</code></pre>
<p>Get survey info type B (status = 2) for <code>:companyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/company/:companyid/C</code></pre>
<p>Get survey info type C (status = 3) for <code>:companyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/company/:companyid/D</code></pre>
<p>Get survey info type D (status = 4) for <code>:companyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/company/:companyid</code></pre>
<p>List all surveys for <code>:companyid</code><br><small>Type: <code>GET</code></small></p>

<h3>Survey data</h3>

<pre><code class="r">/survey/:surveyid/data</code></pre>
<p>Show data for <code>:survey</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/survey/:surveyid</code></pre>
<p>Show all information for <code>:survey</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/survey</code></pre>
<p>Show all information for all surveys<br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/survey/:surveyid/updatedata</code></pre>
<p>Update data for <code>:surveyid</code> (used by surveyeditor)<br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/survey/:surveyid/rename</code></pre>
<p>Change name for <code>:surveyid</code><br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/survey/:surveyid/redescription</code></pre>
<p>Change description for <code>:surveyid</code><br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/survey/:surveyid/archive</code></pre>
<p>Move <code>:surveyid</code> to archive<br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/survey/:surveyid/delete</code></pre>
<p>Delete <code>:surveyid</code><br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/survey/:surveyid/restore</code></pre>
<p>Restore <code>:surveyid</code> from archive<br><small>Type: <code>PUT</code></small></p>

<h3>Survey result</h3>

<pre><code class="r">/result/:surveyid/title</code></pre>
<p>Show result specific to title for <code>:surveyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/result/focus/:surveyid</code></pre>
<p>Show result specific to data for <code>:surveyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/result/:surveyid</code></pre>
<p>Show all results for <code>:surveyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/interim/:surveyid</code></pre>
<p>Show interim result for <code>:surveyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/delete/result/:surveyid/:resultid</code></pre>
<p>Delete :resultid from <code>:surveyid</code> (use in interim)<br><small>Type: <code>PUT</code></small></p>

<h3>Member</h3>

<pre><code class="r">/member/:companyid/new?email=email&name=Name</code></pre>
<p>Create a new member for <code>:companyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/member/:companyid</code></pre>
<p>List all members for <code>:companyid</code><br><small>Type: <code>GET</code></small></p>

<pre><code class="r">/member/:userid/refullname</code></pre>
<p>Change fullname for <code>:userid</code><br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/member/:userid/reemail</code></pre>
<p>Change email for <code>:userid</code><br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/member/:userid/remobile</code></pre>
<p>Change mobile for <code>:userid</code><br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/member/:userid/suspend</code></pre>
<p>Suspend <code>:userid</code><br><small>Type: <code>PUT</code></small></p>

<pre><code class="r">/member/:userid/delete</code></pre>
<p>Delete <code>:userid</code><br><small>Type: <code>PUT</code></small></p>

<h3>Others</h3>

<pre><code class="r">/submit</code></pre>
<p>Submit survey result (used by survey.js)<br><small>Type: <code>POST</code></small></p>

<pre><code class="r">/log</code></pre>
<p>Submit log (used by the whole system)<br><small>Type: <code>POST</code></small></p>

<?php } ?>

<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
