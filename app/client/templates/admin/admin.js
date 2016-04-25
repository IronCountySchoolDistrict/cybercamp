/*****************************************************************************/
/* Admin: Event Handlers */
/*****************************************************************************/
Template.Admin.events({

});

/*****************************************************************************/
/* Admin: Helpers */
/*****************************************************************************/
Template.Admin.helpers({
  users: function() {
    var userRecord = Meteor.users.find();
    var scoreRecord = Score.find().fetch();
    var newUserRecord = userRecord.map(currUserRecord => {
      var user_score = scoreRecord.filter(score => currUserRecord._id === score.team_id);
      if (user_score.length) {
        user_score = user_score.sort((a, b) => {
          return new Date(b.submitted) - new Date(a.submitted);
        });
        currUserRecord.score = user_score.reduce(function(previous, current){
          return previous+current.score;
        }, 0);
        currUserRecord.questionsDone = user_score.length;
        currUserRecord.timeIn = user_score[0].submitted;
        currUserRecord.latestScoreId = user_score[0]._id;
      }
      return currUserRecord;
    });
    newUserRecord = newUserRecord.sort((a, b) => {
      if (!a.timeIn || !b.timeIn) {
        return 1;
      }
      return new Date(b.timeIn) - new Date(a.timeIn);
    })
    return newUserRecord;
  },
  momentFormat: function(time) {
    return moment(time).format("HH:mm:ss");
  }
});

/*****************************************************************************/
/* Admin: Lifecycle Hooks */
/*****************************************************************************/
Template.Admin.onCreated(function () {
});

Template.Admin.onRendered(function () {
});

Template.Admin.onDestroyed(function () {
});
