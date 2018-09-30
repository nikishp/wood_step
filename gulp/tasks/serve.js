module.exports = function() {
	$.gulp.task('serve', function() {
		$.browserSync.init({
			//server: 'build',
			proxy: "http://step.wood/build/",
			// reloadDelay: 2000,
			notify: false,
			//tunnel: step.wood			//tunnel: "project", //Demonstration page: http://projectmane.localtunnel.me
		});
	});
};
