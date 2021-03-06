module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js')
  class Tweet extends Nodal.Model {}

  Tweet.setDatabase(Nodal.require('db/main.js'));
  Tweet.setSchema(Nodal.my.Schema.models.Tweet);

//Tweet joins to user, multiple tweets for a user, like HasMany()
  Tweet.joinsTo(User, {multiple: true});

Tweet.validates('body', 'Must be at least 5 characters', v => v && v.length >= 5);
  return Tweet;

})();
