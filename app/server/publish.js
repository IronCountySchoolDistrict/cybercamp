


Meteor.publish('questions', function () {
  return Questions.find();
});

Meteor.publish('score', function () {
  return Score.find();
});

Meteor.publish('userlist', function () {
  return Meteor.users.find();
});
