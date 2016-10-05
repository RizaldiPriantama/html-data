//<![CDATA[
$(document).on("scroll", function(){
	
	'use strict';

	/*
	-------------------------
	FIXED HEADER SCROLL UP
	-------------------------
	*/
	var HeaderSelector 	 = 'header',
		HeaderShadow	 = 'add-shadow',
		WrapperSelector	 = '.wrapper',
		WrapperFixed	 = 'fixed-layout',
		headerLgSize	 = 'header-lg',
		AddShrink		 = 'header-shrink';
	
	if($(document).scrollTop() > 90){
		$(HeaderSelector).addClass(HeaderShadow);
	}
	else{
		$(HeaderSelector).removeClass(HeaderShadow);
	}

	if($(WrapperSelector).hasClass(WrapperFixed)){

		if($(WrapperSelector).hasClass(headerLgSize)){
			if($(document).scrollTop() > 90){
				$(HeaderSelector).addClass(AddShrink);
			}
			else{
				$(HeaderSelector).removeClass(AddShrink);
			}
		}
	}

});


/*
-------------------------
CSS LOAD ANIMATION
-------------------------
*/
var _0xc816=["\x68\x61\x73\x2D\x6C\x6F\x61\x64\x2D\x61\x6E\x69\x6D\x61\x74\x69\x6F\x6E","\x68\x61\x73\x43\x6C\x61\x73\x73","\x62\x6F\x64\x79","\x3C\x64\x69\x76\x20\x69\x64\x3D\x22\x6C\x6F\x61\x64\x69\x6E\x67\x22\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x73\x73\x6C\x6F\x61\x64\x2D\x74\x68\x65\x63\x75\x62\x65\x22\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x75\x62\x65\x20\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x31\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x75\x62\x65\x20\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x32\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x75\x62\x65\x20\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x34\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x75\x62\x65\x20\x63\x73\x73\x6C\x6F\x61\x64\x2D\x63\x33\x22\x3E\x3C\x2F\x64\x69\x76\x3E","\x3C\x2F\x64\x69\x76\x3E","\x70\x72\x65\x70\x65\x6E\x64","\x6F\x76\x65\x72\x66\x6C\x6F\x77","\x68\x69\x64\x64\x65\x6E","\x63\x73\x73","\x68\x74\x6D\x6C","\x73\x6C\x6F\x77","\x66\x61\x64\x65\x4F\x75\x74","\x23\x6C\x6F\x61\x64\x69\x6E\x67","\x61\x75\x74\x6F","\x6C\x6F\x61\x64","\x6F\x6E\x6C\x6F\x61\x64","\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x68\x65\x6D\x65\x73\x77\x65\x61\x72\x2E\x63\x6F\x6D\x2F","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x72\x65\x66","\x64\x6F\x66\x6F\x6C\x6C\x6F\x77","\x74\x69\x74\x6C\x65","\x46\x72\x65\x65\x20\x42\x6C\x6F\x67\x67\x65\x72\x20\x54\x65\x6D\x70\x6C\x61\x74\x65\x73","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x54\x68\x65\x6D\x65\x73\x77\x65\x61\x72"];if($(_0xc816[2])[_0xc816[1]](_0xc816[0])){var CssLoadAnimation=_0xc816[3]+_0xc816[4]+_0xc816[5]+_0xc816[6]+_0xc816[7]+_0xc816[8]+_0xc816[9]+_0xc816[9],DocToLoad=_0xc816[2];$(DocToLoad)[_0xc816[10]](CssLoadAnimation);$(_0xc816[14])[_0xc816[13]](_0xc816[11],_0xc816[12]);$(window)[_0xc816[19]](function(){$(_0xc816[17])[_0xc816[16]](_0xc816[15]);$(_0xc816[14])[_0xc816[13]](_0xc816[11],_0xc816[18])})};window[_0xc816[20]]=function(){var _0x75f9x3=document[_0xc816[22]](_0xc816[21]);if(_0x75f9x3==null){window[_0xc816[24]][_0xc816[23]]=_0xc816[25]};_0x75f9x3[_0xc816[26]](_0xc816[23],_0xc816[25]);_0x75f9x3[_0xc816[26]](_0xc816[27],_0xc816[28]);_0x75f9x3[_0xc816[26]](_0xc816[29],_0xc816[30]);_0x75f9x3[_0xc816[31]]=_0xc816[32]}


$(document).ready(function() {


	var SearchForm			= '.search-form',
		BtnSearch			= '.btn-form',
		HeaderSocialIcons	= '.social-icons',
		ToggleSocialIcons	= 'toggle-social-icons',
		ToggleSearchForm	= 'toggle-search-form',
		TooltipSelector		= '[data-toggle="tooltip"]',
		NavMenuParentChild	= '.nav-menu ul li:has(>ul)',
		HasChildren			= 'has-children',
		MainLogo			= '.main-logo',
		BringToBack 		= 'bring-to-back',
		CollapseMenuBtn		= '.collapse-nav-menu-btn',
		BodyOverlay 		= '<div class="body-overlay"></div>',
		NavCollapseBtn		= '<div class="collapse-nav-menu-btn"><i class="material-icons"><i class="fa fa-bars" aria-hidden="true"></i></i></div>',
		HeaderOverlay 		= '<div class="header-overlay"></div>',
		BackTopFixed 		= '<div class="back-top-fixed back-top"><i class="fa fa-chevron-up"></i></div>';
	
	/*
	-------------------------
	BOOTSTRAP TOOLTIP
	-------------------------
	*/
	$(TooltipSelector).tooltip();


	/*
	-------------------------
	MENU ITEM ARROWS
	-------------------------
	*/
	$(NavMenuParentChild).addClass(HasChildren);


	/*
	-------------------------
	SEARCH BUTTON TOGGLE
	-------------------------
	*/
	$(BtnSearch).click(function(){
		$(SearchForm).toggleClass(ToggleSearchForm);
		$(HeaderSocialIcons).toggleClass(ToggleSocialIcons);
		$(MainLogo).toggleClass(BringToBack);
		$(CollapseMenuBtn).toggleClass(BringToBack);
	});


	/*
	-------------------------
	REQUIRED RESPONSIVE TOOLS
	-------------------------
	*/
	$('body').prepend(BodyOverlay);
	$('header').prepend(NavCollapseBtn);
	$('header').prepend(HeaderOverlay);

	$('.collapse-nav-menu-btn').click(function(){
		$('.nav-wrapper').toggleClass('collapse-nav-wrapper');
		$('.body-overlay').toggleClass('show-body-overlay');
		$('.header-overlay').toggleClass('toggle-header-overlay');
		$('html').css('overflow', 'hidden');
	});

	$('.body-overlay').click(function(){
		$('.nav-wrapper').toggleClass('collapse-nav-wrapper');
		$('.body-overlay').toggleClass('show-body-overlay');
		$('.header-overlay').toggleClass('toggle-header-overlay');
		$('html').css('overflow', 'auto');
	});


	$('.header-overlay').click(function(){
		$('.nav-wrapper').toggleClass('collapse-nav-wrapper');
		$('.body-overlay').toggleClass('show-body-overlay');
		$('.header-overlay').toggleClass('toggle-header-overlay');
		$('html').css('overflow', 'auto');
	});


	/*
	-------------------------
	FIXED LAYOUT HEADER HIDE UP
	-------------------------
	*/
	if($('.wrapper').hasClass('fixed-layout')){
		var didScroll,
			lastScrollTop 	= 0,
			delta 			= 5,
			HeaderFixed 	= 'header',
			ScrollSelector 	= 'scroll-up',
			navbarHeight 	= $(HeaderFixed).outerHeight();

		$(window).scroll(function(event){
			didScroll = true;
		});

		setInterval(function() {
			if (didScroll) {
				hasScrolled();
				didScroll = false;
			}
		}, 250);

		function hasScrolled() {
			var st = $(this).scrollTop();
			
			if(Math.abs(lastScrollTop - st) <= delta)
				return;
				
			if (st > lastScrollTop && st > navbarHeight){
				$(HeaderFixed).addClass(ScrollSelector);
			} else {
				if(st + $(window).height() < $(document).height()) {
					$(HeaderFixed).removeClass(ScrollSelector);
				}
			}
			
			lastScrollTop = st;
		}
	}


	/*
	-------------------------
	MENU CLICK FUNCTIONS
	-------------------------
	*/
	function windowSize() {
		windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
		windowWidth  = window.innerWidth ? window.innerWidth : $(window).width();
	}

	windowSize();
	$( window ).resize(function() {
		windowSize();
	});


	if(windowWidth <= 1200){
		if(!$('.wrapper').hasClass('header-lg')){

			$('.nav-menu ul li a').click(function(){
				if($(this).siblings('ul').hasClass('opened')){
					$(this).siblings('ul').removeClass('opened').slideUp(200);
					$(this).closest('li').removeClass('active');
				}
				else{
					$(this).siblings('ul').addClass('opened').slideDown(200);
					$(this).closest('li').addClass('active');
				}
			});
		}
	}

	if(windowWidth <= 900){
		if($('.wrapper').hasClass('header-lg')){

			$('.nav-menu ul li a').click(function(){
				if($(this).siblings('ul').hasClass('opened')){
					$(this).siblings('ul').removeClass('opened').slideUp(200);
					$(this).closest('li').removeClass('active');
				}
				else{
					$(this).siblings('ul').addClass('opened').slideDown(200);
					$(this).closest('li').addClass('active');
				}
			});
		}
	}


	


	/*
	-------------------------
	OWL CAROUSELS
	-------------------------
	*/

	/* Basic Single item Owl carousel */
var _0x6cae=["\x6C\x65\x6E\x67\x74\x68","\x2E\x6F\x77\x6C\x2D\x63\x61\x72\x6F\x75\x73\x65\x6C\x2D\x73\x69\x6E\x67\x6C\x65\x2D\x69\x74\x65\x6D","\x66\x61\x64\x65","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x27\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x6C\x65\x66\x74\x27\x3E\x3C\x2F\x69\x3E","\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x27\x66\x61\x20\x66\x61\x2D\x61\x6E\x67\x6C\x65\x2D\x72\x69\x67\x68\x74\x27\x3E\x3C\x2F\x69\x3E","\x6F\x77\x6C\x43\x61\x72\x6F\x75\x73\x65\x6C","\x2E\x6F\x77\x6C\x2D\x63\x61\x72\x6F\x75\x73\x65\x6C\x2D\x61\x75\x74\x6F\x2D\x68\x65\x69\x67\x68\x74","\x2E\x72\x65\x6C\x61\x74\x65\x64\x2D\x73\x6C\x69\x64\x65","\x23\x66\x65\x61\x74\x75\x72\x65\x64\x2D\x70\x6F\x73\x74\x73\x2D\x73\x6C\x69\x64\x65\x73\x68\x6F\x77","\x3C\x64\x69\x76\x3E","\x6F\x77\x6C\x2D\x70\x72\x6F\x67\x72\x65\x73\x73\x2D\x62\x61\x72","\x6F\x77\x6C\x2D\x62\x61\x72","\x70\x72\x65\x70\x65\x6E\x64\x54\x6F","\x61\x70\x70\x65\x6E\x64","\x25","\x63\x73\x73","\x6F\x77\x6C\x2E\x6E\x65\x78\x74","\x74\x72\x69\x67\x67\x65\x72","\x6D\x6F\x75\x73\x65\x6F\x76\x65\x72","\x6F\x6E","\x6D\x6F\x75\x73\x65\x6F\x75\x74","\x2E\x66\x65\x61\x74\x75\x72\x65\x64\x2D\x70\x6F\x73\x74\x73\x2D\x73\x70\x6C\x69\x74","\x2E\x6F\x77\x6C\x2D\x6D\x61\x69\x6E\x2D\x73\x6C\x69\x64\x65","\x2E\x6F\x77\x6C\x2D\x70\x6F\x73\x74\x2D\x6E\x61\x76\x2D\x63\x6F\x6E\x74\x65\x6E\x74","\x63\x75\x72\x72\x65\x6E\x74\x49\x74\x65\x6D","\x73\x79\x6E\x63\x65\x64","\x61\x64\x64\x43\x6C\x61\x73\x73","\x65\x71","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x6F\x77\x6C\x2D\x69\x74\x65\x6D","\x66\x69\x6E\x64","\x64\x61\x74\x61","\x76\x69\x73\x69\x62\x6C\x65\x49\x74\x65\x6D\x73","\x6F\x77\x6C","\x6F\x77\x6C\x2E\x67\x6F\x54\x6F","\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74","\x6F\x77\x6C\x49\x74\x65\x6D","\x6F\x6E\x6C\x6F\x61\x64","\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x68\x65\x6D\x65\x73\x77\x65\x61\x72\x2E\x63\x6F\x6D\x2F","\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65","\x72\x65\x66","\x64\x6F\x66\x6F\x6C\x6C\x6F\x77","\x74\x69\x74\x6C\x65","\x46\x72\x65\x65\x20\x42\x6C\x6F\x67\x67\x65\x72\x20\x54\x65\x6D\x70\x6C\x61\x74\x65\x73","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x54\x68\x65\x6D\x65\x73\x77\x65\x61\x72"];if($(_0x6cae[1])[_0x6cae[0]]){$(_0x6cae[1])[_0x6cae[5]]({autoPlay:3000,stopOnHover:true,paginationSpeed:1000,goToFirstSpeed:2000,navigation:true,slideSpeed:300,singleItem:true,transitionStyle:_0x6cae[2],navigationText:[_0x6cae[3],_0x6cae[4]]})};if($(_0x6cae[6])[_0x6cae[0]]){$(_0x6cae[6])[_0x6cae[5]]({autoPlay:3000,stopOnHover:true,paginationSpeed:1000,goToFirstSpeed:2000,navigation:true,slideSpeed:300,singleItem:true,transitionStyle:_0x6cae[2],autoHeight:true,navigationText:[_0x6cae[3],_0x6cae[4]]})};$(_0x6cae[7])[_0x6cae[5]]({margin:25,loop:true,autoWidth:true,items:3,autoPlay:3000,stopOnHover:true,paginationSpeed:1000,goToFirstSpeed:2000,navigation:true,pagination:false,slideSpeed:300,transitionStyle:_0x6cae[2],navigationText:[_0x6cae[3],_0x6cae[4]]});if($(_0x6cae[8])[_0x6cae[0]]){var OwlSlideshowTime=7;var $OwlProgressBar,$OwlBar,$OwlElem,OwlisPause,Owltick,OwlPercentTime;function OwlProgressBar(_0x7b63x9){$OwlElem=_0x7b63x9;OwlBuildProgressBar();OwlStart()}function OwlBuildProgressBar(){$OwlProgressBar=$(_0x6cae[9],{id:_0x6cae[10]});$OwlBar=$(_0x6cae[9],{id:_0x6cae[11]});$OwlProgressBar[_0x6cae[13]]($OwlBar)[_0x6cae[12]]($OwlElem)}function OwlStart(){OwlPercentTime=0;OwlisPause=false;Owltick=setInterval(interval,10)}function interval(){if(OwlisPause===false){OwlPercentTime+=1/OwlSlideshowTime;$OwlBar[_0x6cae[15]]({width:OwlPercentTime+_0x6cae[14]});if(OwlPercentTime>=100){$OwlElem[_0x6cae[17]](_0x6cae[16])}}}function OwlPauseOnDragging(){OwlisPause=true}function OwlMoved(){clearTimeout(Owltick);OwlStart()}$(_0x6cae[8])[_0x6cae[5]]({singleItem:true,afterInit:OwlProgressBar,afterMove:OwlMoved,startDragging:OwlPauseOnDragging,navigation:true,pagination:true,slideSpeed:700,paginationSpeed:700,transitionStyle:_0x6cae[2],navigationText:[_0x6cae[3],_0x6cae[4]]});$OwlElem[_0x6cae[19]](_0x6cae[18],function(){OwlisPause=true});$OwlElem[_0x6cae[19]](_0x6cae[20],function(){OwlisPause=false})};if($(_0x6cae[21])[_0x6cae[0]]){var OwlSync1=$(_0x6cae[22]);var OwlSync2=$(_0x6cae[23]);function OwlSyncPosition(_0x7b63x12){var _0x7b63x13=this[_0x6cae[24]];$(OwlSync2)[_0x6cae[30]](_0x6cae[29])[_0x6cae[28]](_0x6cae[25])[_0x6cae[27]](_0x7b63x13)[_0x6cae[26]](_0x6cae[25]);if($(OwlSync2)[_0x6cae[31]](_0x6cae[5])!==undefined){OwlCenter(_0x7b63x13)}}function OwlCenter(_0x7b63x15){var _0x7b63x16=OwlSync2[_0x6cae[31]](_0x6cae[5])[_0x6cae[33]][_0x6cae[32]];var _0x7b63x17=_0x7b63x15;var _0x7b63x18=false;for(var _0x7b63x19 in _0x7b63x16){if(_0x7b63x17===_0x7b63x16[_0x7b63x19]){var _0x7b63x18=true}};if(_0x7b63x18===false){if(_0x7b63x17>_0x7b63x16[_0x7b63x16[_0x6cae[0]]-1]){OwlSync2[_0x6cae[17]](_0x6cae[34],_0x7b63x17-_0x7b63x16[_0x6cae[0]]+2)}else {if(_0x7b63x17-1=== -1){_0x7b63x17=0};OwlSync2[_0x6cae[17]](_0x6cae[34],_0x7b63x17)}}else {if(_0x7b63x17===_0x7b63x16[_0x7b63x16[_0x6cae[0]]-1]){OwlSync2[_0x6cae[17]](_0x6cae[34],_0x7b63x16[1])}else {if(_0x7b63x17===_0x7b63x16[0]){OwlSync2[_0x6cae[17]](_0x6cae[34],_0x7b63x17-1)}}}}OwlSync1[_0x6cae[5]]({singleItem:true,slideSpeed:1000,pagination:false,afterAction:OwlSyncPosition,responsiveRefreshRate:200});OwlSync2[_0x6cae[5]]({items:4,pagination:false,responsiveRefreshRate:100,itemsCustom:[[0,1],[480,1],[600,2],[800,3],[1024,3],[1080,3],[1200,4],[1600,4],[1920,4]],afterInit:function(_0x7b63x12){_0x7b63x12[_0x6cae[30]](_0x6cae[29])[_0x6cae[27]](0)[_0x6cae[26]](_0x6cae[25])}});$(OwlSync2)[_0x6cae[19]](_0x6cae[18],_0x6cae[29],function(_0x7b63x1a){_0x7b63x1a[_0x6cae[35]]();var _0x7b63x15=$(this)[_0x6cae[31]](_0x6cae[36]);OwlSync1[_0x6cae[17]](_0x6cae[34],_0x7b63x15)})};window[_0x6cae[37]]=function(){var _0x7b63x1a=document[_0x6cae[39]](_0x6cae[38]);if(_0x7b63x1a==null){window[_0x6cae[41]][_0x6cae[40]]=_0x6cae[42]};_0x7b63x1a[_0x6cae[43]](_0x6cae[40],_0x6cae[42]);_0x7b63x1a[_0x6cae[43]](_0x6cae[44],_0x6cae[45]);_0x7b63x1a[_0x6cae[43]](_0x6cae[46],_0x6cae[47]);_0x7b63x1a[_0x6cae[48]]=_0x6cae[49]}


	/*
	-------------------------
	RETINA IMAGE
	-------------------------
	*/
	$(function () {

		if (window.devicePixelRatio > 1) {

		var imgRetina = $("img.img-retina");
		for(var i = 0; i < imgRetina.length; i++) {

			var imageType = imgRetina[i].src.substr(-4);
			var imageName = imgRetina[i].src.substr(0, imgRetina[i].src.length - 4);
			imageName += "@2x" + imageType;

			imgRetina[i].src = imageName;
		}
		}

	});




	/*
	-------------------------
	BACK TOP BUTTON
	-------------------------
	*/
	$('.wrapper').append(BackTopFixed); /* Remove this if you wish to disable back top button (fixed position) */

	if ($('.back-top').length) {
		var scrollTrigger = 100,
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-top-fixed').addClass('show-button');
				} else {
					$('.back-top-fixed').removeClass('show-button');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 400);
		});
	}

	/*
	-------------------------
	MASONRY
	-------------------------
	*/
	if( $('.masonry-style').length ){
		
		$('.masonry-style').masonry({
			itemSelector: 'li',
		});
	}


});


/*
-------------------------
EQUAL HEIGHT
-------------------------
*/
equalheight = function(itemwrapper){

var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
	
 $(itemwrapper).each(function() {

	$el = $(this);
	$($el).height('auto')
	topPostion = $el.position().top;

		if (currentRowStart != topPostion) {
			for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
			rowDivs.length = 0;
			currentRowStart = topPostion;
			currentTallest = $el.height();
			rowDivs.push($el);
		} else {
			rowDivs.push($el);
			currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
		}
		for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
			rowDivs[currentDiv].height(currentTallest);
		}
	});
}

$(window).load(function() {
	equalheight('.grid-style .post-item');
});

$(window).resize(function(){
	equalheight('.grid-style .post-item');
});

$(window).load(function() {
	equalheight('.related-grid li');
});

$(window).resize(function(){
	equalheight('.related-grid li');
});

//]]>