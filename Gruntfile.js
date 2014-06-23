module.exports = function(grunt) {
	grunt.initConfig({
		 pkg: grunt.file.readJSON('package.json'),
		 jshint:{
		 	options:{
		 		immed:true,
		 		laxbreak:true,
		 		browser: true,
		 		evil:true,
		 		laxcomma:true,
		 		scripturl:true,
		 		smarttabs:true,
		 		expr:true
		 	}
		 },
		 uglify: {
			options: {
				banner: '/*!<%= grunt.template.today("yyyy-mm-dd H:mm:ss") %> */\n'
			},
			onejs:{
				files: {
				  'ione/js/ione.min.js': ['ione/js/ione.js'],
				}
			}

		  },
		  cssmin:{
	  		options: {
		    	banner: '/* minified css file <%= grunt.template.today("yyyy-mm-dd") %>*/'
		    },
		  	minify:{
			    files:{
			    	'pinad/css/instreet.pinad.min.css':'pinad/css/instreet.pinad.css'
			    }
		  	}
		  },
		  concat:{
		  	options: {

		    },
		    css :{
		    	options:{
		    		separator: ''
		    	},
		    	src:['assets/css/reset.css','assets/css/global.css'],
		    	dest:'assets/css/global.css'
		    }
		  },
		  less:{
		  	options:{
		  		compress:true
		  	},
		  	default:{
		  		files:{
		  			'assets/css/style.css':'assets/less/style.less',
		  			'assets/css/global.css':'assets/less/global.less'
		  		}
		  	}
		  },
		  watch:{
		  	dev:{
  			  	files:['assets/less/*.less'],
		  		tasks:['less','concat:css']
		  	}

		  }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('pinad',['concat:pinad','jshint','uglify','cssmin']);
	grunt.registerTask('ifeng',['uglify:ifeng']);
	grunt.registerTask('sprint',['concat:sprint','jshint:sprint','uglify:sprint','cssmin:sprint']);
	grunt.registerTask('metro',['concat:metro','jshint:metro','uglify:metro','less:metro','cssmin:metro']);
	grunt.registerTask('msncouplet',['concat:msncouplet','jshint:msncouplet','uglify:msncouplet','cssmin:msncouplet']);

};