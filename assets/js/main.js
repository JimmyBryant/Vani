
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

		if($('#product-content').length){
			var pro_head_top = $('.pro-head').offset().top
				,pro_head_h = $('.pro-head').outerHeight()+parseInt($('.pro-head').css('marginTop'))*2;
			//product page overview/features/specification item exchange func
			$('.pro-head-rightCon>li').on('click',function(){
				var $ul = $('.pro-head-rightCon');
				var $this = $(this);
				if($this.hasClass('item')&&!$this.hasClass('actived')){
					$ul.find('li.actived').removeClass('actived');
					$this.addClass('actived');
					switchContent($this.data('item'));
				}

				function switchContent(item){
					if(item){
						$(window).scrollTop($('.vani-conent-intro .'+item).offset().top);
					}
				}
			});

			// bind window scroll event
			$(window).on('scroll',function(){
				var $phd = $('.pro-head')
					,t = $(window).scrollTop()
					;

				if(t>pro_head_top){
					if(!$phd.hasClass('pro-head-fixed')){
						$phd.addClass('pro-head-fixed');
						$('.vani-conent-intro').css('marginTop',pro_head_h+'px');
					}

				}else{
					if($phd.hasClass('pro-head-fixed')){
						$phd.removeClass('pro-head-fixed');
						$('.vani-conent-intro').css('marginTop',0);
					}
				}

			});
		}
	});
});