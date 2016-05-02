/*****************************************************************************/
/* Groups: Event Handlers */
/*****************************************************************************/
Template.Groups.events({
  'submit form': function(event){
    event.preventDefault();
    var groupNumber = event.target.groupsVar.value;
    var teamRecord = Meteor.users.find({roles: {$in: ['student']}}).count();
    var pairings = [];
    var teams = [];
    var cats = [
      'cheetah',
      'lion',
      'jaguar',
      'tiger',
      'leopard',
      'bobcat',
      'lynx',
      'caracal',
      'ocelot',
      'serval',
      'puma',
      'oncilla',
      'margay',
      'panther',
      'wildcat'
    ];
    var colors = [
      'white',
      'gray',
      'pink',
      'red',
      'brown',
      'orange',
      'yellow',
      'green',
      'blue',
      'violet'
    ];

    function passwordPairing(){
      var uniqueFound = false;
      while(!uniqueFound) {
        var partA = cats[Math.floor(Math.random()*cats.length)];
        var partB = colors[Math.floor(Math.random()*colors.length)];
        var pairA = partA + partB;
        var pairB = partB + partA;
        if (pairings.indexOf(pairA) === -1) {
          uniqueFound = true;
          pairings.push(pairA);
          return pairA;
        }else if(pairings.indexOf(pairB) === -1){
          uniqueFound = true;
          pairings.push(pairB);
          return pairB;
        }
      }
    };

    for(var i = teamRecord; i < parseInt(groupNumber)+parseInt(teamRecord); i++){
      var count = i+1
      var username = 'team-' + count;
      var password = passwordPairing();
      var role = 'student';

      console.log(parseInt(groupNumber)+parseInt(teamRecord));

      teams.push({
        username: username,
        password: password
      });

      Meteor.call('createGroup', username, password, role);
    }

    var teamList = Papa.unparse(teams);
    var blob = new Blob([teamList], {type: "text/plain;charset=utf-8"});
    saveAs(blob, 'team-list.csv');
    Router.go('admin')
  }
});

/*****************************************************************************/
/* Groups: Helpers */
/*****************************************************************************/
Template.Groups.helpers({
  'users': function(){
    var userRecord = Meteor.users.find({roles: {$in: ['student']}});
    return userRecord;
  }
});

/*****************************************************************************/
/* Groups: Lifecycle Hooks */
/*****************************************************************************/
Template.Groups.onCreated(function () {
});

Template.Groups.onRendered(function () {
});

Template.Groups.onDestroyed(function () {
});
