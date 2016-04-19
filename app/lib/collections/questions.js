Questions = new Mongo.Collection('questions');

Questions.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Challenge",
    max: 100
  },
  question: {
    type: String,
    label: "Question",
    autoform:{
      rows:10
    }
  },
  answer: {
    type: String,
    label: "Answer"
  },
  points: {
    type: Number,
    allowedValues:[
      5,
      10,
      15,
      20,
      25
    ],
    defaultValue: 5,
    label: "Points"
  }
}));

if (Meteor.isServer) {
  Questions.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });
}
