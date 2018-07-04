jQuery(document).ready(function(){
	initOpen();
	initAnim();
	$('.nav-overlay').click(function(){
		$('#nav').toggleClass('open');
		return false;
	});
	    jcf.replaceAll();
});

function initOpen() {
    $('.menu-holder').each(function () {
        var hold = $(this);
        var link = hold.find('.arrow-menu');
        var box = hold.find('.drop');
		var li = hold.find('.menu > li');
		var closeLink =  $('#nav .toogle-menu');
		var nav = $('#nav');
		
		closeLink.click(function(){
			
			if(!nav.hasClass('open')){
				nav.addClass('open');
			}
			else {
				nav.removeClass('open');
				box.removeAttr('style');
			}
			
			li.removeClass('open');
			
			return false;
		});
		
        link.click(function () {
            if (!$(this).parent().hasClass('open')) {
				box.css({display: 'none'});
				li.removeClass('open');
				
                $(this).parent().addClass('open');
                $(this).parent().find('.drop').css({display: 'block'});
            } else {
                $(this).parent().find('.drop').css({display: 'none'})
				$(this).parent().removeClass('open');
            }
            return false;
        });
		
		function all(){
			if(link.is(':visible')){
				box.each(function(){
					if(!$(this).parent().hasClass('open')){
						console.log(10);
						$(this).css({display: 'none'});
					}
				});
			}
			else {
				console.log(3);
				box.removeAttr('style');
				li.removeClass('open');
			}
		}
		
		all();
		
		$(window).resize(function(){
			all();
		})
    });
}

function initAnim () {
	var headTop = $(window).scrollTop();
	var last = $(window).scrollTop();
	var _scroll = function () {
		$('.anim-bottom, .anim-left, .anim-right, .anim-footer').not('.load').each(function(){
			if($(this).hasClass('anim-footer')){
				if($(this).offset().top - $(window).height() + 10 < $(window).scrollTop()){
					$(this).addClass('load');
				}
			}
			else{
				if($(this).offset().top - $(window).height() + 100 < $(window).scrollTop()){
					$(this).addClass('load');
				}
			}
		});
	}
	_scroll();
	$(window).bind('scroll', _scroll);
}