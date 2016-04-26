/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'adminRole': function (userId) {
    Roles.setUserRoles(userId, 'admin');
  },

  'defaultRole': function (userId) {
    Roles.setUserRoles(userId, 'student');
  },
  'createGroup': function (userVar, passwordVar, role){
    var _createUserAsync = function(userVar, passwordVar) {
      return new Promise((resolve, reject) => {
        var user = Accounts.createUser({
          username: userVar,
          password: passwordVar
        });
        resolve(user);
      })
    }
        /*function(error,result){
          if(error){
            console.log(error.reason);
            reject(error.reason);
          }else{
            var userId = Meteor.userId();

          }
        })*/

  _createUserAsync(userVar, passwordVar)
    .then(userId => {
      if(role === 'admin'){
        Meteor.call('adminRole', userId);
      }else{
        Meteor.call('defaultRole', userId);
      }
      Router.go('register');
    });
  }
});
