define(['jquery'],function  ($) {
	function nav(){
		var $nav = $('.nav')
			,$items = $('>li',$nav)
			,$sbox = $('.search-box')
			,$keyword = $('.keyword',$sbox)
			;
		$.each($items,function(i,ele){
			var $li = $(ele);
			if($('>ul',$li).length){
				var $sub = $('>ul',$li);
				$sub.addClass('sub-nav');
				$li.on('mouseenter mouseleave',function(e){
					if(e.type=='mouseenter'){
						$(this).addClass('actived');
						$sub.fadeIn();
					}else if(e.type=='mouseleave'){
						$(this).removeClass('actived');
						$sub.stop().hide();
					}
				});
			}
		});
		$keyword.on('keypress',function(){
			$('.flag',$sbox).hide();
		});
		$keyword.on('blur',function(){
			if($.trim(this.value)==''){
				$('.flag',$sbox).show();
			}
		});
	}
	return nav;
});