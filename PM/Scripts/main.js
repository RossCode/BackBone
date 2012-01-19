require.config({
    paths : {
        jquery : 'lib/jquery',
        underscore : 'lib/underscore',
        backbone : 'lib/backbone',
        templates : '../content/templates'
    }
});

require([	
	'app'
], function(app) {
    app.init();
});
