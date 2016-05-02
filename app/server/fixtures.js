Meteor.startup(function(){
  if(Meteor.users.find().count() === 0) {
    Accounts.createUser({
      username: 'ironadmin',
      password: 'cybercamp@2016'
    });
  }
});
