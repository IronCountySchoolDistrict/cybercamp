/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  questions: function() {
    return Questions.find();
  },
  answered: function() {
    var user = Meteor.userId();
    var question_id = this._id;
    var record = Score.findOne({$and:[{challenge_id:question_id},{team_id:user}]});
    return record;
  },
  totalPoints: function() {
    var user = Meteor.userId();
    var record = Score.find({team_id:user}).fetch();
    return record.reduce(function(previous, current){
      return previous+current.score;
    }, 0);
  },
  questionsDone: function() {
    var user = Meteor.userId();
    var record = Score.find({team_id:user}).fetch();
    return record.length;
  },
  questionsTotal: function() {
    var record = Questions.find().fetch();
    return record.length;
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
