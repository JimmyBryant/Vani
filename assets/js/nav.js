define(['jquery'],function  ($) {
	function nav($nav){
		var $items = $('>li',$nav);
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
		})
	}
	return nav;
});