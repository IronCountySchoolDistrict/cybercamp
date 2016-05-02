/*****************************************************************************/
/* EditQuestion: Event Handlers */
/*****************************************************************************/
Template.EditQuestion.events({

});

/*****************************************************************************/
/* EditQuestion: Helpers */
/*****************************************************************************/
Template.EditQuestion.helpers({
  beforeRemove: function() {
    return function (collection, id) {
      var doc = collection.findOne(id);
        if (confirm('Delete Question: '+doc.title+'?')){
          this.remove();
          Router.go('home');
        }
      };
    },
    transform: function(doc) {
      if (Meteor.isClient) {
        if (doc._encrypted) {
          doc.answer = CryptoJS.AES.decrypt(doc.answer, Session.get('passphrase')).toString(CryptoJS.enc.Utf8);
          doc._encrypted = false;
        }
      }
      return doc;
    }
});

/*****************************************************************************/
/* EditQuestion: Lifecycle Hooks */
/*****************************************************************************/
Template.EditQuestion.onCreated(function () {
});

Template.EditQuestion.onRendered(function () {
});

Template.EditQuestion.onDestroyed(function () {
});
