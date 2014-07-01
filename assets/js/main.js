
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
		//product page overview/features/specification item exchange func
		$('.pro-head-rightCon>li').on('click',function(){
			var $ul = $('.pro-head-rightCon');
			var $this = $(this);
			if($this.hasClass('item')&&!$this.hasClass('actived')){
				$ul.find('li.actived').removeClass('actived');
				$this.addClass('actived');
				showContent($this.data('item'));
			}

			function showContent(item){
				$(window).scrollTop($('.pro-head').offset().top);
				$('.vani-conent-intro section').hide();
				switch(item){
					case "features":
					$('.vani-conent-intro .features').show();
					break;
					case "specification":
					$('.vani-conent-intro .specification').show();
					break;
					default:
					$('.vani-conent-intro .overview').show();
				}
			}
		});
	});
});