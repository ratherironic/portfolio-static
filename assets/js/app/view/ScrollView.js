/**
 * @module Backbone
 * @submodule Backbone.View
 * @class IndexView
 * @constructor
 */

var ScrollView = Backbone.View.extend({
	'events': {
		'click #section_nav li':'scrollTo'
	},
	'initialize': function(options) {
		var view = this;
		var throttled = _.throttle(view.detectScroll, 50);
		$(window).scroll(throttled);
		_.bindAll(this);
		log('Backbone : IndexView : Initialized');
	},
	'detectScroll': function(e) {
	},
	'scrollTo': function(e) {
		e.preventDefault();
		var destination = $(e.currentTarget).attr('class');
		$('body').animate({
         scrollTop: $('#'+destination).offset().top - 65 +'px'
     	}, 500);
	}

});