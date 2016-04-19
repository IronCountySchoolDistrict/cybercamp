/*****************************************************************************/
/* Challenge: Event Handlers */
/*****************************************************************************/
Template.Challenge.events({
  'submit .submit-answer'(event){
    event.preventDefault();
    var question_id = this._id;
    var question = Questions.findOne({_id:question_id});
    var correct = question.answer;
    var points = question.points;
    var user = Meteor.userId();
    var answerVar = event.target.answer.value;

    if(answerVar != correct){
      console.log(correct);
    }else if (Score.findOne({team_id:user},{challenge_id:question_id})) {
      console.log("A recored has already been created!")
    }else{
      console.log("You got it right!");
      Score.insert({
        team_id: user,
        challenge_id: question_id,
        score: points,
        submited: new Date(),
      });
    };
  }
});

/*****************************************************************************/
/* Challenge: Helpers */
/*****************************************************************************/
Template.Challenge.helpers({
});

/*****************************************************************************/
/* Challenge: Lifecycle Hooks */
/*****************************************************************************/
Template.Challenge.onCreated(function () {
});

Template.Challenge.onRendered(function () {
});

Template.Challenge.onDestroyed(function () {
});
