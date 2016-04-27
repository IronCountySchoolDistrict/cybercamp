Meteor.startup(function () {
  Session.set('passphrase', 'IronDistrictCyberCamp2016');

  function encryptAnswer(doc) {
    if (doc.answer) {
      doc.answer = CryptoJS.AES.encrypt(doc.answer, Session.get('passphrase')).toString();
      doc._encrypted = true;
    }

    return doc;
  }

  Questions.before.insert(function (userId, doc) {
    return encryptAnswer(doc);
  });
  Questions.before.update(function (userId, doc) {
    return encryptAnswer(doc);
  });
});
