import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players';

Meteor.startup(function(){
    console.log(Players.findOne());
});

