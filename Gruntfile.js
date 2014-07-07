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

		    html :{
		    	files:{
		    		'index.html':['assets/template/head','assets/pages/index','assets/template/foot'],
		    		'product-vw-10.html':['assets/template/head','assets/pages/product-vw-10','assets/template/foot'],
		    		'product-va-07.html':['assets/template/head','assets/pages/product-va-07','assets/template/foot'],
		    		'product.html':['assets/template/head','assets/pages/product','assets/template/foot'],
		    		'about.html':['assets/template/head','assets/pages/about','assets/template/foot'],
		    		'buy.html':['assets/template/head','assets/pages/buy','assets/template/foot']
		    	}
		    }
		  },
		  less:{
		  	options:{
		  		compress:true
		  	},
		  	default:{
		  		files:{
		  			'assets/css/style.css':'assets/less/style.less',
		  			'assets/css/global.css':'assets/less/global.less',
		  			'assets/css/product.css':'assets/less/product.less'
		  		}
		  	}
		  },
		  watch:{
		  	dev:{
  			  	files:['assets/less/*.less'],
		  		tasks:['less']
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