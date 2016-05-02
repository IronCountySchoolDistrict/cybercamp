/*****************************************************************************/
/* Login: Event Handlers */
/*****************************************************************************/
Template.Login.events({
  'submit form': function(event){
    event.preventDefault();
    var user = event.target.logUser.value;
    var password = event.target.logPassword.value

    Meteor.loginWithPassword(user,password, function(error){
      if(error){
        alert("You have entered an invalid username or password");
      }
      if(user.toLowerCase() === 'admin'){
        var admin = Meteor.users.findOne({_id:Meteor.userId()});
        if(!admin.roles){
          Meteor.call('adminRole', Meteor.userId());
        }
      }

    });

    Router.go('home');
  },
  'click #logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('login');
  }
});

/*****************************************************************************/
/* Login: Helpers */
/*****************************************************************************/
Template.Login.helpers({
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.onCreated(function () {
});

Template.Login.onRendered(function () {
});

Template.Login.onDestroyed(function () {
});
