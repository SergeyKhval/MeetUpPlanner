angular.module('firebase.config', [])
  .constant('FBURL', 'https://udacity-web-form.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password'])

  .constant('loginRedirectPath', '/login');
