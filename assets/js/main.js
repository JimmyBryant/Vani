
require.config({
	baseUrl:'assets/js',
	paths:{
		jquery:'jquery/jquery-1.7.2.min'
	}
});

require(['jquery','nav'],function($,nav){
	$(function(){
		nav();
	});
});