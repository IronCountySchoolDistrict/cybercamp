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
    return Meteor.users.find();
  },
  score: function() {
    var user = this._id;
    var record = Score.find({team_id:user}).fetch();
    return record.reduce(function(previous, current){
      return previous+current.score;
    }, 0);
  },
  questionsDone: function() {
    var user = this._id;
    var record = Score.find({team_id:user}).fetch();
    return record.length;
  },
  timeIn: function() {
    var user = this._id;
    var record = Score.find({team_id:user}, {sort: {submitted: -1}}).fetch();
    return record[0].submitted;
  },
  momentFormat: function(time) {
    if ((moment().unix() - moment(time).unix()) < 3600) {
      return moment(time).fromNow();
    }else{
      return moment(time).format("DD-MM-YYYY HH:mm");
    };
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
