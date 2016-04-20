/*****************************************************************************/
/*  Server Methods */
/*****************************************************************************/

Meteor.methods({
  'adminRole': function (userId) {
    Roles.setUserRoles(userId, 'admin');
  },

  'defaultRole': function (userId) {
    Roles.setUserRoles(userId, 'student');
  }
});
