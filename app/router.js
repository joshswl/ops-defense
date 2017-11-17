import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('mission');
  this.route('logistics');
  this.route('security');
  this.route('training');
  this.route('events');
  this.route('contact');
  this.route('home');
});

export default Router;
