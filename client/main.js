/* importing modules
  ------------------
  # react : for using functionality.
  # reactdom : to render to dom.
  # animate.css : for motion .
  # meteor  : for startup and mongo etc.
  # players : collection 
  # Traker : for tracking changes in collection.
  */
import React from 'react';
import ReactDom from 'react-dom';
import 'animate.css';
import {
  Meteor
} from 'meteor/meteor';
import {
  Players
} from './../imports/api/players';
import {
  Tracker
} from 'meteor/tracker';
import App from './../imports/ui/App';

// @what : [[function]] render jsx to dom.
// @does : on $startup run the code , $autorun fetch changes in mongo
// @desc : render html
Meteor.startup( () => {
  Tracker.autorun( () => {
    let players = Players.find({},{sort:{score:-1}}).fetch();
    let title = "Score keep";
  ReactDom.render(<App title={title} players={players}/>, document.querySelector('#app'));
  })
});