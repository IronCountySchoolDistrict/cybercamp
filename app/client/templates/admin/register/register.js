/*****************************************************************************/
/* Register: Event Handlers */
/*****************************************************************************/
Template.Register.events({
  'submit form': function(event){
    event.preventDefault();
    var userVar = event.target.regUser.value;
    var passwordVar = event.target.regPassword.value;
    var role = event.target.regRole.value;

    var _createUserAsync = function(userVar, passwordVar) {
      return new Promise((resolve, reject) => {
        Accounts.createUser({
          username: userVar,
          password: passwordVar
        },
        function(error,result){
          if(error){
            console.log(error.reason);
            reject(error.reason);
          }else{
            var userId = Meteor.userId();
            resolve(userId);
          }
        })

      });
    };

    _createUserAsync(userVar, passwordVar)
      .then(userId => {
        if(role === 'admin'){
          Meteor.call('adminRole', userId);
        }else{
          Meteor.call('defaultRole', userId);
        }
        Router.go('register');
      });

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
