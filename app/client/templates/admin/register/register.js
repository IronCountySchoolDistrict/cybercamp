/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
  'submit form': function(event){
    event.preventDefault();
    var userVar = event.target.regUser.value;
    var passwordVar = event.target.regPassword.value;
    Accounts.createUser({
      username: userVar,
      password: passwordVar
    });
    Router.go('admin');
  }
});

/*****************************************************************************/
/* Register: Helpers */
/*****************************************************************************/
Template.Register.helpers({
});

/*****************************************************************************/
/* Register: Lifecycle Hooks */
/*****************************************************************************/
Template.Register.onCreated(function () {
});

Template.Register.onRendered(function () {
});

Template.Register.onDestroyed(function () {
});
