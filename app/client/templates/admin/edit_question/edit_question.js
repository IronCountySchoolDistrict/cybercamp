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
