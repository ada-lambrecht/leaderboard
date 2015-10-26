PlayersList = new Mongo.Collection('players')

if(Meteor.isClient){
  Template.leaderboard.helpers({
    'player': function(){
      return PlayersList.find();
    },
    'selectedClass' : function(){
      if ( Session.get('selectedPlayer') == this._id ) {
        return "selected"
      }
    }
  });

  Template.leaderboard.events({
    'click .player' : function() {
      var playerId = this._id
      Session.set('selectedPlayer', playerId)
    }
  });
}

if(Meteor.isServer){
    // this code only runs on the server
}
