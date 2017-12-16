$(function(){
	
	//nav
	function nav(){
		var winX = window.innerWidth;
		if(winX<=1000){
			$('.oul1').hide();
			$('.oul2 .icon').show().siblings().hide();
		}else{
			$('.oul1').show();
			$('.oul2 .icon').hide().siblings().show();
		}
	}
	$(window).load(function(){
		$('.newnav').css('right',-200);
		nav();
	})
	window.onresize = function(){
		$(this).children('.one').css({'transform-origin':'left','top':2,'transform':'rotate(0)'});
		$(this).children('.two').show(300)
		$(this).children('.end').css({'transform-origin':'left','top':27,'transform':'rotate(0)'});
		$('.newnav').css({'right':-200});
			nav();
	}
	$('.oul2 .icon .slishow').click(function(){
		if($(window).width()<768){
			$('.newnav').css("height",$('.item').height());
		}
		if($(window).width()<500){
			$('.newnav').css("height",423);
		}
		$('.newnav').css('right',0);
	})
	var num = 0;
	$('.oul2 .icon .slishow').hover(function(){
		if(num%2==0){
			$(this).children('.one').stop().animate({'top':2},200);
			$(this).children('.end').stop().animate({'top':27},200);
		}
	},function(){
		if(num%2==0){
			$(this).children('.one').stop().animate({'top':5},200);
			$(this).children('.end').stop().animate({'top':25},200);
		}
	})
			$('.newnav .threenav').hover(function(){
				$(this).children('ul').slideToggle()
			})
			$('.oul2 .icon .slishow').click(function(){
				num++
				if(num%2==0){
					$(this).children('.one').css({'transform-origin':'left','top':2,'transform':'rotate(0)'});
					$(this).children('.two').show()
					$(this).children('.end').css({'transform-origin':'left','top':27,'transform':'rotate(0)'});
					
					$('.newnav').css('right',-200);
				}else{
					$(this).children('.one').css({'transform-origin':'left','top':2,'transform':'rotate(45deg)'});
					$(this).children('.two').hide(300)
					$(this).children('.end').css({'transform-origin':'left','top':27,'transform':'rotate(-45deg)'});
					$('.newnav').css('right',0);
				}
			})
		
	$('.slideDown').hover(function(){
		$(this).children('.alert').show(100).css({'transform' : 'translateY(-10px)'});
	},function(){
		$(this).children('.alert').hide(100).css({'transform' : 'translateY(10px)'});
	})
	//img-media
	$(window).resize(function(){
		if($(window).width()<1200){
			$('.container').addClass('container-fluid');
		}else{
			$('.container').removeClass('container-fluid');
		}
		if($(window).width()<768){
			$(".right-big-img img").addClass('img-responsive');
		}else{
			$(".right-big-img img").removeClass('img-responsive');
		}
	})
	
})