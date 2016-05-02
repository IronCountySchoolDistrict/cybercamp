Template.MasterLayout.helpers({
  'users': function() {
    console.log(Meteor.users.find().fetch().length);
  }
});

Template.MasterLayout.events({
  'click .logout': function(event){
    event.preventDefault();
    Meteor.logout();
    Router.go('login');
  }
});
