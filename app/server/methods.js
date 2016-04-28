/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  
  'admin': function(userId){
    user = Meteor.users.findOne({_id:userId});
    if(user.roles.indexOf('admin') !== -1){
      return true;
    }else {
      throw new Meteor.Error('not-authorized');
    }
  },
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
