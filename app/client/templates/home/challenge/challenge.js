/*****************************************************************************/
/* Challenge: Event Handlers */
/*****************************************************************************/
Template.Challenge.events({
  'submit .submit-answer'(event){
    event.preventDefault();
    var question_id = this._id;
    var question = Questions.findOne({_id:question_id});
    var decrypt = transform(question);
    var correct = decrypt.answer.toLowerCase();
    var points = question.points;
    var user = Meteor.userId();
    var answerVar = event.target.answer.value;
    var answerTrim = answerVar.toLowerCase().trim();

    function transform(doc) {
      if (Meteor.isClient) {
        if (doc._encrypted) {
          doc.answer = CryptoJS.AES.decrypt(doc.answer, Session.get('passphrase')).toString(CryptoJS.enc.Utf8);
          doc._encrypted = false;
        }
      }
      return doc;
    };

    if(answerTrim != correct){
      Router.go('failure', {_id:question_id});
    }else if (Score.findOne({$and: [{challenge_id:question_id},{team_id:user}]})) {
      console.log("A recored has already been created!")
      Router.go('correct');
    }else{
      Score.insert({
        team_id: user,
        challenge_id: question_id,
        score: points,
        submitted: new Date(),
      });
      Router.go('success', {_id:question_id});
    };
  }
});

/*****************************************************************************/
/* Challenge: Helpers */
/*****************************************************************************/
Template.Challenge.helpers({
  answered: function() {
    var user = Meteor.userId();
    var question_id = this._id;
    var record = Score.findOne({$and:[{challenge_id:question_id},{team_id:user}]});
    return record;
  }
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
