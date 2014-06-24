
require.config({
	baseUrl:'assets/js',
	paths:{
		jquery:'jquery/jquery-1.7.2.min',
		'jquery.responsiveslides':'responsiveslides.min'
	},
	shim:{
		'jquery.responsiveslides':['jquery']
	}
});

require(['jquery','nav','jquery.responsiveslides'],function($,nav){
	$(function(){
		nav();
		$(".v-slider").responsiveSlides({
			pager:true
		});
	});
});