<?php
	
$_SERVER['BASE_PAGE'] = 'privacy.php';
$title = "Privacy Policy";
require_once $_SERVER['DOCUMENT_ROOT'] . '/admin/include/config.php';
require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/template.php';
//require_once $_SERVER['DOCUMENT_ROOT'] . '/public/include/first.php';

// --------------------------------------------------------------------------------

displayHeader($title);
displayNav();
echo "<div class=\"container\">\n";
contentPrivacy();
echo "</div>\n";
displayFooter();

// --------------------------------------------------------------------------------

function contentPrivacy() {
?>

<h1>Privacy Policy</h1>

<p class="text-right"><em>Last Edited on 2016-05-12</em></p>
<br />

<p>This privacy policy has been compiled to better serve those who are concerned with how their 'Personally identifiable information' (PII) is being used online. PII, as used in US privacy law and information security, is information that can be used on its own or with other information to identify, contact, or locate a single person, or to identify an individual in context. Please read our privacy policy carefully to get a clear understanding of how we collect, use, protect or otherwise handle your Personally Identifiable Information in accordance with our website.</p>


<h3>What personal information do we collect from the people that visit our website?</h3>

<p>When ordering or registering on our site, as appropriate, you may be asked to enter your name, email address, phone number or other details to help you with your experience.</p>


<h3>When do we collect information?</h3>

<p>We collect information from you when you register on our site, respond to a survey or enter information on our site.</p>


<h3>How do we use your information?</h3>

<p>We may use the information we collect from you when you register, make a purchase, sign up for our newsletter, respond to a survey or marketing communication, surf the website, or use certain other site features in the following ways:</p>

<li>To personalize user's experience and to allow us to deliver the type of content and product offerings in which you are most interested.</li>
<li>To administer a contest, promotion, survey or other site feature.</li>
<li>To quickly process your transactions.</li>


<h3>How do we protect visitor information?</h3>

<p>We do not use vulnerability scanning and/or scanning to PCI standards.<br />
We do collect credit card information, but did not know PCI compliant scans are now required.<br />
We use regular Malware Scanning.</p>

<p>Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems, and are required to keep the information confidential. In addition, all sensitive/credit information you supply is encrypted via Secure Socket Layer (SSL) technology.</p>

<p>We implement a variety of security measures when a user enters, submits, or accesses their information to maintain the safety of your personal information.</p>

<p>All transactions are processed through a gateway provider and are not stored or processed on our servers.</p>


<h3>Do we use 'cookies'?</h3>

<p>Yes. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your Web browser (if you allow) that enables the site's or service provider's systems to recognize your browser and capture and remember certain information. For instance, we use cookies to help us remember and process the items in your shopping cart. They are also used to help us understand your preferences based on previous or current site activity, which enables us to provide you with improved services. We also use cookies to help us compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future.</p>

<p>We use cookies to:</p>

<li>Understand and save user's preferences for future visits.</li>
<li>Compile aggregate data about site traffic and site interactions in order to offer better site experiences and tools in the future. We may also use trusted third-party services that track this information on our behalf.</li>

<p>You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies. You do this through your browser (like Internet Explorer) settings. Each browser is a little different, so look at your browser's Help menu to learn the correct way to modify your cookies.</p>

<p>If you disable cookies off, some features will be disabled It won't affect the user's experience that make your site experience more efficient and some of our services will not function properly.</p>

<p>However, you can still place orders.</p>


<h3>Third-party disclosure</h3>

<p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.</p>

<p>However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.</p>


<h3>Third-party links</h3>

<p>Occasionally, at our discretion, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.</p>


<!-- 

<h3>Google</h3>

<p>Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users. (<code>https://support.google.com/adwordspolicy/answer/1316548?hl=en</code>)</p>

<p>We use Google AdSense Advertising on our website.</p>

<p>Google, as a third-party vendor, uses cookies to serve ads on our site. Google's use of the DART cookie enables it to serve ads to our users based on previous visits to our site and other sites on the Internet. Users may opt-out of the use of the DART cookie by visiting the Google Ad and Content Network privacy policy.</p>

<p>We have implemented the following:</p>

<li>Demographics and Interests Reporting</li>

<br />

<p>We along with third-party vendors, such as Google use first-party cookies (such as the Google Analytics cookies) and third-party cookies (such as the DoubleClick cookie) or other third-party identifiers together to compile data regarding user interactions with ad impressions and other ad service functions as they relate to our website.</p>

<p>Opting out:</p>

<p>Users can set preferences for how Google advertises to you using the Google Ad Settings page. Alternatively, you can opt out by visiting the Network Advertising initiative opt out page or permanently using the Google Analytics Opt Out Browser add on.</p>

<br />

-->

<h3>Contacting us</h3>

<p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>

<address><strong>pebinary.com</strong><br />
129 Rama 9 Road.<br />
Bangkok, Bangkok 10250<br />
THAILAND<br />
<code>info@pebinary.com</code></address>

<?php
}
?>