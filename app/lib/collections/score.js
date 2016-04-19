Score = new Mongo.Collection('score');

Score.attachSchema(new SimpleSchema({
  team_id: {
    type: String,
    label: "Team ID"
  },
  challenge_id: {
    type: String,
    label: "Challenge ID"
  },
  score: {
    type: Number,
    label: "Score",
  },
  submited: {
    type: Date,
    label: "Time Submited",
  }
}));

if (Meteor.isServer) {
  Score.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return false;
    },

    remove: function (userId, doc) {
      return false;
    }
  });
}
