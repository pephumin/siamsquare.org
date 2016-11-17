<?php

$title = "Client control panel";
pageHeader($title);
echo "<h2>$title</h2>";

if (isset($login)) {
  if ($login->errors) { foreach ($login->errors as $error) { echo $error; } }
  if ($login->messages) { foreach ($login->messages as $message) { echo $message; } }
}

?>

<hr>

<div class="row">
  <div class="col-sm-5 bg-info">
    <h3>Welcome message</h3>
    <p>Welcome to client control panel. This site allows all of our clients to be able to create, test, manage, and monitor your surveys effectively. Our system includes the user hierarchy where different access permissions will be set for each of the users according which will help ensuring the right persons will manage the right tasks.</p>
    <p>Feel free to contact us if you find any problems using our site. Any other suggestions are also more than welcome.</p>
  </div>
  <div class="col-sm-7">
    <h3>Updated news</h3>
    <p>Now you can do this</p>
    <p>Now you can do that</p>
  </div>
</div>

<hr>

<div class="row">
  <div class="col-sm-7">
    <h3>Current surveys</h3>
    <p>Listing</p>
    <p>Listing</p>
  </div>
  <div class="col-sm-5 bg-info">
    <h3>Your information</h3>
    <p>Your last login: <?php echo ago($_SESSION["lastlogin"]); ?></p>
    <p>Your last IP address: <?php echo $_SESSION["lastip"]; ?></p>
    <p>You have an access to 3 projects where 2 projects are managed directly by you</p>
    <p>Your last 5 activities are:</p>
    <ul>
      <li>List one</li>
      <li>List two</li>
      <li>List three</li>
      <li>List four</li>
      <li>List five</li>
    </ul>
  </div>
</div>




<?php if ($notes) { pageFooter($notes); } else { pageFooter(); } ?>
