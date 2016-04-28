/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
  'submit form': function(event){
    event.preventDefault();
    var userVar = event.target.regUser.value;
    var passwordVar = event.target.regPassword.value;
    var role = event.target.regRole.value;
    
    Meteor.call('createGroup', userVar, passwordVar, role);

    event.target.reset();
    /*if(role === 'admin'){
      Roles.setUserRoles(userId, 'admin');
    }else{
      Roles.setUserRoles(userId, 'student');
    }*/
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
