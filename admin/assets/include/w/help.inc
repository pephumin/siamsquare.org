<?php

$title = "Help";
pageHeader($title);
echo "<h2>$title</h2>";
echo "<p>This page shows a collection of help and examples to be used and applied appropriately.</p>\n";
echo "<br>\n";

?>

<h3>Scale [SA]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions:[{
    type: "rating",
    name: "satisfaction",
    title: "How satisfied are you with the Product?",
    mininumRateDescription: "Not Satisfied",
    maximumRateDescription: "Completely satisfied"
  }]
});
var q = survey.getQuestionByName('satisfaction');
q.mininumRateDescription = "Not at all satisfied";
q.maximumRateDescription = "Extremely satisfied";
q.rateValues = empty; // Option of empty, [1,2,3], [{value1, text:Bad}, {value:2, text:Average}, {value:3, text:Good}]
survey.render();
</pre>

<h3>Text [OE]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "text",
    name: "email",
    title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."
  }]
});
survey.getQuestionByName('email').size = 25; // Text size option of 10, 25, 50, 75, 100
survey.render();
</pre>

<h3>Radio [SA]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "radiogroup",
    name: "car",
    title: "What car are you driving?",
    isRequired: true,
    colCount: 4,
    choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
  }]
});
// Ways of setting the 'choice' property
choices: [{ value: 1, text: "Value 1" }, { value: 2, text: "Value 2" }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: "Value 2" }] // The values are: 1 and 'Value 2' and texts are '1' and 'Value 2'
choices: ["Value 1", "Value 2"] // The values and texts are same
choices: ["1|Value 1", "2|Value 2"] // The values are '1' and '2' and texts are 'Value 1' and 'Value 2'
var q = survey.getQuestionByName('car');
q.colCount = 1; // Option of 0, 1, 2, 3, 4
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = "Others (specified)";
survey.render();
</pre>

<h3>Dropdown [SA]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "dropdown",
    name: "car",
    title: "What car are you driving?",
    isRequired: true,
    colCount: 0,
    choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
  }]
});
// Ways of setting the 'choice' property
choices: [{ value: 1, text: "Value 1" }, { value: 2, text: "Value 2" }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: "Value 2" }] // The values are: 1 and 'Value 2' and texts are '1' and 'Value 2'
choices: ["Value 1", "Value 2"] // The values and texts are same
choices: ["1|Value 1", "2|Value 2"] // The values are '1' and '2' and texts are 'Value 1' and 'Value 2'
var q = survey.getQuestionByName('car');
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = "Others (specified)";
survey.render();
</pre>

<h3>Dropdown with restfull [SA]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "dropdown",
    name: "country",
    title: "Select the country...",
    isRequired: true,
    choicesByUrl: {
      url: "http://services.groupkt.com/country/get/all",
      path: "RestResponse;result",
      valueName: "name"
    }
  }]
});
var q = survey.getQuestionByName('country');
q.choicesByUrl.url = 'http://yourrestfullserviceurl';
q.choicesByUrl.path = 'MyPathToTheResult'; // The path to the array of results in the returned json
q.choicesByUrl.valueName = 'thePropertyNameForValue'; // The 'value' element name in the returned json
q.choicesByUrl.titleName = 'thePropertyNameForTitle'; // The 'title' element name in the returned json (if empty, the value is used)
q.choicesByUrl.run();
</pre>

<h3>Checkbox [MA]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "checkbox",
    name: "car",
    title: "What car are you driving?",
    isRequired: true,
    colCount: 4,
    choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
  }]
});
// Ways of setting the 'choice' property
choices: [{ value: 1, text: "Value 1" }, { value: 2, text: "Value 2" }] // The classic way to set the property. The result values are numbers: 1 and 2
choices: [{ value: 1 }, { value: "Value 2" }] // The values are: 1 and 'Value 2' and texts are '1' and 'Value 2'
choices: ["Value 1", "Value 2"] // The values and texts are same
choices: ["1|Value 1", "2|Value 2"] // The values are '1' and '2' and texts are 'Value 1' and 'Value 2'
var q = survey.getQuestionByName('car');
q.colCount = 1; // Option of 0, 1, 2, 3, 4
q.choicesOrder = none; // Option of none, asc, desc, random
q.hasOther = false; // Option of true or false
q.otherText = "Others (specified)";
survey.render();
</pre>

<h3>Comment [OE]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions:[{
    type: "comment",
    name: "suggestions",
    title:"What would make you more satisfied with the Product?"
  }]
});
var q = survey.getQuestionByName('suggestions');
q.rows = 3; // Opton of 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
survey.getQuestionByName('suggestions').cols = 50; // Column option of 10, 25, 50, 75, 100
survey.render();
</pre>

<h3>HTML</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "html",
    name: "info",
    html: "...HTML CODE..."
  }]
});
</pre>

<h3>Matrix [SA]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "matrix",
    name: "Quality",
    title: "Please indicate if you agree or disagree with the following statements",
    columns: [
      { value: 1, text: "Strongly Disagree" },
      { value: 2, text: "Disagree" },
      { value: 3, text: "Neutral" },
      { value: 4, text: "Agree" },
      { value: 5, text: "Strongly Agree" }
    ],
    rows: [
      { value: "affordable", text: "Product is affordable" },
      { value: "does what it claims", text: "Product does what it claims" },
      { value: "better then others", text: "Product is better than other products on the market" },
      { value: "easy to use", text: "Product is easy to use" }
    ]
  }]
});
</pre>

<h3>Matrix [MA]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "matrixdropdown",
    name: "frameworksRate",
    title: "Please tells us your opinion about JavaScript MVVM frameworks",
    choices: ["Excelent", "Good", "Average", "Fair", "Poor"],
    columns: [
      { name: "using", title: "Do you use it?", choices: ["Yes", "No"], cellType: "radiogroup" },
      { name: "experience", title: "How long do you use it?", choices: [{value: 5, text:"3-5 years"}, {value: 2, text:"1-2 years"}, {value: 1, text:"less then a year"}] },
      { name: "strength", title: "What is main strength?", choices: ["Easy", "Compact", "Fast", "Powerfull"], cellType: "checkbox" },
      { name: "knowledge", title: "Please describe your experience", cellType:"text" },
      { name: "rate", title: "Please rate the framework itself" }
    ],
    rows: [
      { value: "angularv1", text: "angularjs v1.x" },
      { value: "angularv2", text: "angularjs v2" },
      { value: "knockoutjs" },
      { value: "reactjs"}
    ]
  }]
});
</pre>

<h3>Matrix [dynamics]</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "matrixdynamic",
    name: "frameworksRate",
    title: "Please rate your teachers",
    addRowText: "Add Subject",
    horizontalScroll: true,
    columnMinWidth: "120px",
    columnColCount: 1,
    cellType: "radiogroup",
    choices: [
      {value: 1 , text: "Yes"},
      {value: 0, text: "Sometimes"},
      {value: -1, text: "No"}
    ],
    columns: [
      { name: "subject", cellType:"dropdown", title: "Select a subject", isRequired: true, minWidth: "300px", choices: ["English: American Literature", "English: British and World Literature", "Math: Consumer Math", "Math: Practical Math", "Math: Developmental Algebra", "Math: Continuing Algebra", "Math: Pre-Algebra", "Math: Algebra", "Math: Geometry", "Math: Integrated Mathematics", "Science: Physical Science", "Science: Earth Science", "Science: Biology", "Science: Chemistry", "History: World History", "History: Modern World Studies", "History: U.S. History", "History: Modern U.S. History", "Social Sciences: U.S. Government and Politics", "Social Sciences: U.S. and Global Economics", "World Languages: Spanish", "World Languages: French", "World Languages: German", "World Languages: Latin", "World Languages: Chinese", "World Languages: Japanese"]},
      { name: "explains", title: "Clearly explains the objectives"},
      { name: "interesting", title: "Makes class interesting" },
      { name: "effective", title: "Uses class time effectively" },
      { name: "knowledge", title: "Knows the subject matter" },
      { name: "recognition", title: "Recognizes and acknowledges effort" },
      { name: "inform", title: "Keeps me informed of my progress" },
      { name: "opinion", title: "Encourages and accepts different opinions" },
      { name: "respect", title: "Has the respect of the student" },
      { name: "cooperation", title: "Encourages cooperation and participation" },
      { name: "parents", title: "Communicates with my parents" },
      { name: "selfthinking", title: "Encourages me to think for myself"},
      { name:"frusturation", cellType: "comment", title: "Is there anything about this class that frustrates you?", minWidth: "250px"},
      { name:"likeTheBest", cellType: "comment", title: "What do you like best about this class and/or teacher?", minWidth: "250px"},
      { name:"improvements", cellType: "comment", title: "What do you wish this teacher would do differently that would improve this class?", minWidth: "250px"}
    ],
    rowCount: 2
  }]
});
</pre>

<h3>Multiple text</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "multipletext",
    name: "pricelimit",
    title: "What is the... ",
    colCount: 2,
    items: [
      { name: "mostamount", title: "Most amount you would every pay for a product like ours" },
      { name: "leastamount", title: "The least amount you would feel comfortable paying" }
    ]
  }]
});
</pre>

<h3>File uploading</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [{
    type: "file",
    title: "Please upload your photo",
    name: "image",
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
</pre>

<h3>Set cookie</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  cookieName: "myuniquesurveyid",
  questions: [{
    type: "checkbox",
    name: "car",
    title: "What car are you driving?",
    isRequired: true,
    colCount: 4,
    choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
  }]
});
// survey.setCookie();
// survey.deleteCookie();
</pre>

<h3>Localise the survey</h3>
<pre class="verysmall">
survey.locale = "th";
var Survey;
(function (Survey) {
  var mycustomSurveyStrings = {
    pagePrevText: "หน้าที่แล้ว",
    pageNextText: "หน้าถัดไป",
    completeText: "เสร็จสิ้น",
    otherItemText: "อื่นๆ (ระบุ)",
    progressText: "หน้าที่ {0} จาก {1}",
    emptySurvey: "ไม่มีหน้าคำถามหรือข้อคำถามในแบบสอบถามชุดนี้",
    completingSurvey: "ขอบคุณที่สละเวลาตอบแบบสอบถาม",
    loadingSurvey: "กำลังโหลดแบบสอบถามจากฐานข้อมูล...",
    optionsCaption: "กรุณาเลือก...",
    requiredError: "คุณต้องตอบคำถามข้อนี้",
    numericError: "คำตอบจะต้องเป็นตัวเลขเท่านั้น",
    textMinLength: "กรุณาใส่ตัวอักษรอย่างน้อยจำนวน {0} ตัวอักษร",
    minRowCountError: "กรุณาตอบอย่างน้่อยจำนวน {0} แถว",
    minSelectError: "กรุณาเลือกอย่างน้่อยจำนวน {0} คำตอบ",
    maxSelectError: "กรุณาเลือกไม่เกินจำนวน {0} คำตอบ",
    numericMinMax: "{0} ควรจะเท่ากับหรือมากกว่า {1} และเท่ากับหรือน้อยกว่า {2}",
    numericMin: "{0} ควรจะเท่ากับหรือมากกว่า {1}",
    numericMax: "{0} ควรจะเท่ากับหรือน้อยกว่า {1}",
    invalidEmail: "กรุณาใส่อีเมล์ที่ถูกต้อง",
    urlRequestError: "เกิดข้อผิดผลาดสำหรับ {0} {1}",
    urlGetChoicesError: "ไม่มีข้อมูลหรือการตั้งค่าไม่ถูกต้อง",
    exceedMaxSize: "ไฟล์จะต้องมีขนาดไม่เกิน {0}",
    otherRequiredError: "กรุณาใส่ค่าอื่นแทน",
    uploadingFile: "กำลังอัพโหลดไฟล์อยู่ กรุณารอสักครู่แล้วลองใหม่อีกครั้ง",
    addRow: "เพิ่มแถว",
    removeRow: "ลบแถว"
  };
  Survey.surveyLocalization.locales["th"] = mycustomSurveyStrings;
})(Survey || (Survey = {}));
</pre>

<h3>Several questions in one row</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questionTitleLocation: "bottom", showQuestionNumbers: "off",
  pages: [{
    name: "Address",  title: "Address",
    questions: [
      { type: "text", name: "address1", title: "Stree Address" },
      { type: "text", name: "address2", title: "Address Line 2" },
      { type: "text", name: "city", title: "City" },
      { type: "text", name: "state", startWithNewLine: false, title: "State / Province / Region" },
      { type: "text", name: "zip", title: "Zip / Postal Code" },
      { type: "dropdown", name: "country", startWithNewLine: false, title: "Country",
        choicesByUrl: {
          url: "http://services.groupkt.com/country/get/all",
          path: "RestResponse;result",
          valueName: "name"
        }
      }
    ]
  }]
});
</pre>

<h3>Survey options</h3>
<pre class="verysmall">
survey.requiredText = "*";
survey.showQuestionNumbers = "on"; // Option of on, onPage, off
survey.showTitle = true; // Option of true, false
survey.showPageTitles = true; // Option of true, false
survey.showPageNumbers = false; // Option of true, false
survey.showProgressbar = off; // Option of top, bottom, off
survey.completedHtml = "";
survey.render();
</pre>

<h3>Include data in survey</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [
    { type: "text", name: "name", title: "Your name:"},
    { type: "text", name: "email", title: "Your e-mail"},
    { type: "checkbox", name: "car", title: "What car are you driving?", isRequired: true, colCount: 4, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"] }
  ]
});
survey.data = { name:"John Doe", email: "johndoe@nobody.com", car:["Ford"] };
survey.onValueChanged.add(function (sender, options) {
  var el = document.getElementById(options.name);
  if(el) { el.value = options.value; }
});
// <div>
//   <p>Name: <input type="text" id="name" onChange="survey.setValue('name', this.value)" value="John Doe"></p>
//   <p>Email: <input type="email" id="email" size="30" onChange="survey.setValue('email', this.value)" value="johndoe@nobody.com"></p>
//   <p>Cars (use comma to separate values, not spaces): <input type="text" id="car" size="50" onChange="survey.setValue('car', this.value.split(','))" value="Ford"></p>
// </div>
survey.getValue('questionName'); // Use getValue to get the value of the question
survey.setValue('questionName', newValue); // Use setValue to set the value of the question
survey.data = { "youquestion1": value1, "youquestionN":valueN }; // Use data property to get/set survey data as json
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
</pre>

<h3>Custom navigation</h3>
<pre class="verysmall">
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
  title: "Software developer survey.",
  pages: [{
    title: "What operating system do you use?",
    questions: [{ type:"checkbox", name:"opSystem", title: "OS", hasOther: true, isRequired: true, choices: ["Windows", "Linux", "Macintosh OSX"] }
    ]
  }, {
    title: "What language(s) are you currently using?",
    questions: [{ type:"checkbox", name:"langs", title:"Plese select from the list", colCount: 4, isRequired: true, choices: ["Javascript", "Java", "Python", "CSS", "PHP", "Ruby", "C++", "C", "Shell", "C#", "Objective-C", "R", "VimL", "Go", "Perl", "CoffeeScript", "TeX", "Swift", "Scala", "Emacs List", "Haskell", "Lua", "Clojure", "Matlab", "Arduino", "Makefile", "Groovy", "Puppet", "Rust", "PowerShell" ] }
    ]
  }, {
    title: "Please enter your name and e-mail",
    questions: [{ type: "text", name: "name", title: "Name:" }, { type: "text", name: "email", title: "Your e-mail" }]
  }]
});
survey.showTitle = false;
survey.onRendered.add(function (sender) { setNavigationVisibility(sender); });
survey.onCurrentPageChanged.add(function (sender) { setNavigationVisibility(sender); });
function setNavigationVisibility(survey) {
  document.getElementById('surveyPrev').style.display = !survey.isFirstPage ? "inline" : "none";
  document.getElementById('surveyNext').style.display = !survey.isLastPage ? "inline" : "none";
  document.getElementById('surveyComplete').style.display = survey.isLastPage ? "inline" : "none";
  document.getElementById('surveyProgress').innerText = "Page " + (survey.currentPage.visibleIndex + 1) + " of " + survey.visiblePageCount + ".";
}
survey.pagePrevText = "Previous";
survey.pageNextText = "Next";
survey.completeText = "Submit";
survey.showNavigationButtons = true; // Option of true, false
survey.render();
</pre>

<h3>Custom text</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questionTitleTemplate: "{no}) {title} {require}:",
  questionStartIndex: "A",
  requiredText: "(*)",
  pages: [{
    title: "This is the page {pageno} of {pagecount}.",
    questions: [
      { type: "text", name: "name", title: "Please type your name", isRequired: true },
      { type: "text", name: "email", title: "Please type your e-mail", isRequired: true, validators: [{ type:"email" }
    ]}
  ]}, {
    title: "This is the page {pageno} of {pagecount}.",
    questions: [
      { type: "comment", name: "comment", title: "{name}, please tell us what is on your mind" }
    ]}
  ],
  completedHtml: "<h4>Thank you for sharing this information with us.</h4><p>Your name is: <b>{name}</b></p><p>Your email is: <b>{email}</b></p><p>This is what is on your mind:</p><p>{comment}</p>"
});
survey.questionTitleTemplate = "{no}) {title} {require}:";
survey.requiredText = "(*)";
survey.questionStartIndex = "A";
</pre>

<h3>Change radio and checkbox template</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  title: "Tell us, what technologies do you use?",
  pages: [{
    name:"page1",
    questions: [
      { type: "radiogroup", choices: ["Yes", "No"], isRequired: true, name: "frameworkUsing", title: "Do you use any front-end framework like Bootstrap?" },
      { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visible: false }
    ]
  }, {
    name: "page2",
    questions: [
      { type: "radiogroup", choices: ["Yes","No"], isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
      { type: "checkbox", choices: ["AngularJS", "KnockoutJS", "React"], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visible: false }
    ]
  }, {
    name: "page3",
    questions: [
      { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" }
    ]
  }],
  triggers: [
    { type: "visible", operator: "equal", value: "Yes", name: "frameworkUsing", questions: ["framework"] },
    { type: "visible", operator: "equal", value: "Yes", name: "mvvmUsing", questions: ["mvvm"] }
  ]
});
new Survey.SurveyTemplateText().replaceText('<div class="btn-group" data-toggle="buttons"><!-- ko foreach: { data: question.visibleChoices, as: "item", afterRender: question.koAfterRender}  --> <label class="btn btn-default" data-bind="css:{active: $data.value == question.koValue()}, style:{width: question.koWidth}">   <input type="radio" data-bind="attr: {name: question.name, value: item.value}, checked: question.koValue" /> <span data-bind="text: item.text"></span></label><!-- /ko --><div data-bind="visible:question.hasOther"><div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div></div></div>', "question", "radiogroup");
new Survey.SurveyTemplateText().replaceText('<div class="btn-group" data-toggle="buttons"><!-- ko foreach: { data: question.visibleChoices, as: "item", afterRender: question.koAfterRender}  --> <label class="btn btn-default" data-bind="css:{active: question.koValue().indexOf($data.value) > -1}, style:{width: question.koWidth}">   <input type="checkbox" data-bind="attr: {name: question.name, value: item.value}, checked: question.koValue" /> <span data-bind="text: item.text"></span></label><!-- /ko --><div data-bind="visible:question.hasOther"><div data-bind="template: { name: \'survey-comment\', data: {\'question\': question, \'visible\': question.koOtherVisible } }"></div></div></div>', "question", "checkbox");
</pre>

<h3>Go to the next page automatically</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  title: "American History",
  showProgressBar: "bottom",
  goNextPageAutomatic: true,
  showNavigationButtons: false,
  pages: [
    { questions: [{ type: "radiogroup",  name: "civilwar", title: "When was the Civil War?", choices: ["1750-1800", "1800-1850", "1850-1900", "1900-1950","after 1950"]} ]},
    { questions: [{ type: "radiogroup",  name: "libertyordeath", title: "Who said 'Give me liberty or give me death?'", choicesOrder: "random", choices: ["John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"]} ]},
    { questions: [{ type: "radiogroup",  name: "magnacarta", title: "What is the Magna Carta?", choicesOrder: "random", choices: ["The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"]} ]}
  ],
  completedHtml: "<p>Your anwers are:</p><p>When was the Civil War?: <b>{civilwar}</b>. The correct is: <b>1850-1900</b></p><p>Who said 'Give me liberty or give me death?': <b>{libertyordeath}</b>. The correct is: <b>Patrick Henry</b></p><p>What is the Magna Carta?: <b>{magnacarta}</b>. The correct is: <b>The foundation of the British parliamentary system</b></p>"
});
survey.showNavigationButtons = false;
survey.goNextPageAutomatic = true;
</pre>

<h3>Standard validators</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  questions: [
    { type: "text", name: "email", title: "Please enter your e-mail", isRequired: true, validators: [{ type:"email" }] },
    { type: "multipletext", name: "pricelimit", title: "What is the... ", isRequired: true, colCount: 2, items: [
      { name: "leastamount", title: "The least amount you have ever paid for a computer", validators: [{ type: "numeric", minValue: 10, maxValue: 10000 }] },
      { name: "mostamount", title: "The most amount you have ever paid for a computer", validators: [{ type: "numeric", minValue: 10, maxValue: 10000 }] }
    ]},
    { type: "comment", name: "firstcomputer", title: "Please tell us about your first computer", isRequired: true, validators: [{ type:"text", minLength:20 }] }
  ]
});
</pre>

<h3>Custom validation</h3>
<pre class="verysmall">
var MyTextValidator = (function (_super) {
  __extends(MyTextValidator, _super);
  function MyTextValidator() {
    _super.call(this);
  }
  MyTextValidator.prototype.getType = function () { return "mytextvalidator"; };
  MyTextValidator.prototype.validate = function (value, name) {
    if (value.indexOf("survey") < 0) {
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
    return "You text should contains 'survey' word.";
  }
  return MyTextValidator;
})(Survey.SurveyValidator);
Survey.MyTextValidator = MyTextValidator;
//add into survey Json metaData
Survey.JsonObject.metaData.addClass("mytextvalidator", [], function () { return new MyTextValidator(); }, "surveyvalidator");
// JS
var survey = new Survey.Survey({
  questions: [{
    type: "comment",
    name: "memo",
    isRequired: true,
    title: "Type here 'survey' to pass the validation ",
    validators: [{ type: "mytext" }]
  }]
});
</pre>

<h3>Validator on an event</h3>
<pre class="verysmall">
survey.onValidateQuestion.add(function (s, options) {
  if (options.name == 'pricelimit') {
    var leastamount = options.value['leastamount'];
    var mostamount = options.value['mostamount'];
    if (!isNumber(leastamount)) { options.error = "The 'least amount' should be a numeric."; }
    else {
      if (!isNumber(mostamount)) { options.error = "The 'most amount' should be a numeric."; }
      else { if (leastamount > mostamount) { options.error = "The 'most amount' should be more 'less amount'."; } }
    }
  }
  if (options.name == 'firstcomputer') {
    if (options.value.indexOf('computer') < 0) { options.error = "Please type the word 'computer'."; }
  }
});
// JS
var survey = new Survey.Survey({
  questions: [{
    type: "multipletext",
    name: "pricelimit",
    title: "What is the... ",
    isRequired: true,
    colCount: 2,
    items: [
      { name: "leastamount", title: "The least amount you have ever paid for a computer", validators: [{ type: "numeric", minValue: 10, maxValue: 10000 }] },
      {  name: "mostamount", title: "The most amount you have ever paid for a computer", validators: [{ type: "numeric", minValue: 10, maxValue: 10000 }] }
    ]
  }, {
    type: "comment",
    name: "firstcomputer",
    title: "Please tell us about your first computer (type the word 'computer')",
    isRequired: true,
    validators: [{ type:"text", minLength:20 }]
  }]
});
function isNumber(n) { return n && !isNaN(parseFloat(n)) && isFinite(n); }
</pre>

<h3>Visible IF</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  showQuestionNumbers: "off",
  questions: [
    { type: "radiogroup", name: "haveKids", title: "Do you have a kid(s)?", isRequired: true, choices: ["Yes", "No"], colCount: 0 },
    { type: "dropdown", name: "kids", title: "How many kids do you have", visibleIf: "{haveKids}='Yes'", isRequired: true, choices:[ 1, 2, 3, 4, 5 ]},
    { type: "dropdown", name: "kid1Age", title: "The first kid age:", visibleIf: "{haveKids}='Yes' and {kids} >= 1", isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: "dropdown", name: "kid2Age", title: "The second kid age:", visibleIf: "{haveKids}='Yes' and {kids} >= 2", isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: "dropdown", name: "kid3Age", title: "The third kid age:", visibleIf: "{haveKids}='Yes' and {kids} >= 3", isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: "dropdown", name: "kid4Age", title: "The fourth kid age:", visibleIf: "{haveKids}='Yes' and {kids} >= 4", isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]},
    { type: "dropdown", name: "kid5Age", title: "The fifth kid age:", visibleIf: "{haveKids}='Yes' and {kids} >= 5", isRequired: true, startWithNewLine: false, choices:[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]}
  ]
});
</pre>

<h3>Visible triggers (change the choices of the next question based on the answer of this question)</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  triggers: [
    { type: "visible", name: "type", operator: "equal", value: "Hot hatch", questions: ["Hot hatch"] },
    { type: "visible", name: "type", value: "sedan", questions: ["Sedan"] },
    { type: "visible", name: "type", value: "sports", questions: ["Sports"] },
    { type: "visible", name: "type", value: "Grand tourer", questions: ["Grand tourer"] },
    { type: "visible", name: "type", value: "SuperCar", questions: ["Supercar"] },
    { type: "visible", name: "type", value: "Muscle car", questions: ["Muscle car"] },
    { type: "visible", name: "type", value: "Pony car", questions: ["Pony car"] },
    { type: "visible", name: "type", value: "Convertible", questions: ["Convertible"] },
    { type: "visible", name: "type", value: "other", questions: ["otherType"] }
  ],
  questions: [
    { type: "radiogroup", name: "type", isRequired: true, colCount: 4, hasOther: true, title: "Please select the sport cars type.", choices: ["Hot hatch", "sedan|Sports saloon / sports sedan", "sports|Sports Car", "Grand tourer", "SuperCar", "Muscle car", "Pony car", "Convertible"]},
    { type: "radiogroup", name: "Hot hatch", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["Honda Civic Type R", "Renault Megane RS", "Fiat 500 Abarth"]},
    { type: "radiogroup", name: "Sedan", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["BMW M5", "Mazdaspeed6/Mazda 6 MPS", "Dodge Charger", "Dodge SRT-4", "Lotus Cortina", "Mitsubishi EVO"]},
    { type: "radiogroup", name: "Sports", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["Chevrolet Corvette", "Mazda MX-5", "Porsche 911"]},
    { type: "radiogroup", name: "Grand tourer", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["Aston Martin V8", "Lexus SC300/400", "Ferrari 612 Scaglietti"]},
    { type: "radiogroup", name: "Supercar", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["McLaren P1", "Lamborghini Miura", "Bugatti Veyron 16.4"]},
    { type: "radiogroup", name: "Muscle car", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["Ford Torino", "Plymouth Road Runner", "Pontiac GTO", "Ford Falcon", "Holden Monaro", "Valiant Charger"]},
    { type: "radiogroup", name: "Pony car", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["AMC Javelin", "Chevrolet Camaro", "Dodge Challenger"]},
    { type: "radiogroup", name: "Convertible", isRequired: true, colCount: 4, visible: false, title: "Please select the car", hasOther: true, choices: ["Honda S2000", "Volkswagen Eos", "Volvo C70"]},
    { type:"comment", name: "otherType", title: "Please describe the car.", isRequired: true, visible: false}
  ]
});
</pre>

<h3>Allow to complete the survey from any stage</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  triggers: [
    { type: "complete", name: "exit1", operator: "equal", value: "Yes" },
    { type: "complete", name: "exit2", operator: "equal", value: "Yes" }
  ],
  pages: [{
    title: "What operating system do you use?",
    questions: [
      { type:"checkbox", name:"opSystem", title: "OS", hasOther: true, choices:["Windows", "Linux", "Macintosh OSX"] },
      { type:"radiogroup", name:"exit1", title:"Do you want to finish the survey?", choices: ["Yes", "No"], colCount: 0 }
    ]
  }, {
    title: "What language(s) are you currently using?",
    questions: [
      { type:"checkbox", name:"langs",title:"Plese select from the list", colCount: 4, choices:["Javascript", "Java", "Python", "CSS", "PHP", "Ruby", "C++", "C", "Shell", "C#", "Objective-C", "R", "VimL", "Go", "Perl", "CoffeeScript", "TeX", "Swift", "Scala", "Emacs List", "Haskell", "Lua", "Clojure", "Matlab", "Arduino", "Makefile", "Groovy", "Puppet", "Rust", "PowerShell"] },
      { type:"radiogroup", name:"exit2", title:"Do you want to finish the survey?", choices: ["Yes", "No"], colCount: 0 }
    ]
  }, {
    title: "Please enter your name and e-mail",
    questions: [
      { type: "text", name: "name", title: "Name:" },
      { type: "text", name: "email", title: "Your e-mail" }
    ]
  }]
});
</pre>

<h3>Insert data to a form</h3>
<pre class="verysmall">
var survey = new Survey.Survey({
  triggers: [
    { type: "setvalue", name: "copy", operator: "equal", value: "Yes", setToName: "name", setValue: "Jon Snow" },
    { type: "setvalue", name: "copy", operator: "equal", value: "Yes", setToName: "email", setValue: "jon.show@nightwatch.com" },
    { type: "setvalue", name: "copy", operator: "equal", value: "Yes", setToName: "tempvar", isVariable: true, setValue: "You have decided to use your current information." },
    { type: "setvalue", name: "copy", operator: "equal", value: "No", setToName: "name", setValue: "" },
    { type: "setvalue", name: "copy", operator: "equal", value: "No", setToName: "email", setValue: "" },
    { type: "setvalue", name: "copy", operator: "equal", value: "No", setToName: "tempvar", isVariable: true, setValue: "You have decided not to use your current information." }
  ],
  pages: [{
    title: "Customer information",
    questions: [
      { type:"radiogroup", name:"copy", title: "Use your current data", choices:["Yes", "No"], isRequired: true, colCount: 0 },
      { type: "text", name: "name", title: "Name:", isRequired: true },
      { type: "text", name: "email", title: "Your e-mail", isRequired: true, validators: [{ type:"email" }] }
    ]
  }],
  completedHtml: "<h4>Thank you for sharing this information with us.</h4><p>Your name is: <b>{name}</b></p><p>Your email is: <b>{email}</b></p><p>This information is not in the survey data result:<b> {tempvar}</b></p>"
});
</pre>

<h3>Allow only one time survey and show results in every page if needed</h3>
<pre class="verysmall">
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
  }, "surveyContainer");
  survey.clientId = document.getElementById('clientId').value;
  survey.sendResultOnPageNext = document.getElementById('sendResultOnPageNext').checked;
  survey.onComplete.add(function (s) {
    document.getElementById('surveyContainer').innerHTML = "";
    document.getElementById("clientIdContainer").style.display = "inline";
  });
  survey.onSendResult.add(function (survey) {
    var text = "clientId:" + survey.clientId + ". The results are:" + JSON.stringify(survey.data)  + String.fromCharCode(13, 10);
    var memo = document.getElementById('sentResults');
    memo.value = memo.value + text;
  });
  document.getElementById("clientIdContainer").style.display = "none";
}
</pre>


<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
