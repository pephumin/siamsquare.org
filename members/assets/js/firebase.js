/**
 * FirebaseUI initialization to be used in a Single Page application context.
 */
// FirebaseUI config.
var uiConfig = {
  'callbacks': {
    // Called when the user has been successfully signed in.
    'signInSuccess': function(user, credential, redirectUrl) {
      handleSignedInUser(user);
      // Do not redirect.
      return false;
    }
  },
  // Opens IDP Providers sign-in flow in a popup.
  'signInFlow': 'popup',
  'signInOptions': [
    // TODO(developer): Remove the providers you don't need for your app.
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login']
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes :[
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ]
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  'tosUrl': 'http://www.pebinary.com/about/tos.html'
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());
var currentUid = null;
var signInWithRedirect = function() { window.location.assign('widget.html'); };
var signInWithPopup = function() { window.open('widget.html', 'Sign In', 'width=985,height=735'); };

var handleSignedInUser = function(user) {
  currentUid = user.uid;
  document.getElementById('user-signed-in').style.display = 'block';
  document.getElementById('user-signed-out').style.display = 'none';
  document.getElementById('name').textContent = user.displayName;
  document.getElementById('email').textContent = user.email;
  if (user.photoURL){
    document.getElementById('photo').src = user.photoURL;
    document.getElementById('photo').style.display = 'block';
  } else {
    document.getElementById('photo').style.display = 'none';
  }
};

var handleSignedOutUser = function() {
  document.getElementById('user-signed-in').style.display = 'none';
  document.getElementById('user-signed-out').style.display = 'block';
  // ui.start('#firebaseui-container', uiConfig);
};

firebase.auth().onAuthStateChanged(function(user) {
  if (user && user.uid == currentUid) { return; }
  document.getElementById('loading').style.display = 'none';
  document.getElementById('loaded').style.display = 'block';
  user ? handleSignedInUser(user) : handleSignedOutUser();
});

var initApp = function() {
  document.getElementById('sign-in-with-redirect').addEventListener('click', signInWithRedirect);
  document.getElementById('sign-in-with-popup').addEventListener('click', signInWithPopup);
  document.getElementById('sign-out').addEventListener('click', function() { firebase.auth().signOut(); });
  document.getElementById('delete-account').addEventListener('click', function() { firebase.auth().currentUser.delete(); });
};

window.addEventListener('load', initApp);
