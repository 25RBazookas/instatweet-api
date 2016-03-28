module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const User = Nodal.require('app/models/user.js');

  class UsersController extends Nodal.Controller {

    index() {

      User.query()
        .where(this.params.query)
        .end((err, models) => {

          // ['id', 'username', 'email', 'created_at'] are the properties
          //that we want to send in the API GET method
          this.respond(err || models, ['id', 'username', 'email', 'created_at']);

        });

    }

    show() {

      User.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      User.create(this.params.body, (err, model) => {
        // ['id', 'username', 'email', 'created_at'] are the properties
        //that we want to send in the API GET method
        this.respond(err || model,  ['id', 'username', 'email', 'created_at']);

      });

    }

    update() {

      User.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      User.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return UsersController;

})();
