( function( $ ) {
"use strict";
	/*------------------------------------------------------------------
	 [Table of contents]
	 
	 
	 beautypress custom function
	 menu fixed function 
	 email patern
	 prelaoder
	 beautypress portfolio grid
	 another beautypress portfolio grid 4 items
	 beautypress popular service grid
	 image comperasion
	 Date Picker
	 welcome section slider
	 welcome section slider version 2
	 testimonial slider
	 simple image slider
	 team slider
	 sync slider
	 video pop up
	 image pop up
	 Ajaxchimp init
	 Booking form init
	 Booking form select field focus
	 numeric number counter init
	 counter up appear init
	 back to top
	 button with mouse pointer
	 button pulse effect
	 contact form init
	 instagram feeds
	 beautypress accordion add class
	 beautypress hover add class
	 mouse over and add class remove class
	 flicker gallery
	 hover 3d init for tilt
	 mega menu
	 ScrollMagic
	 parallax bg
	 social tigger icon
	 input number increase
	 theme switcher init
	 meun scroll and add class
	 snazzy maps 1
	 snazzy maps 2
	 
	 -------------------------------------------------------------------*/


		/*=============================================================
		 beautypress custom function
		 =========================================================================*/
			function beautypress_function( ) {
			var header_height = $( '.header-height-calc-minus.kolkatacity-header-section' ),
				welcome_container = $( '.welcome-height-calc-minus .kolkatacity-welcome-container' ),
				window_height = $( window ).height( ),
				height_minus = window_height - header_height.height( ),
				comming_soon = $( '.beautypress-comming-soon-content' ),
				owl_prev = $( '.kolkatacity-welcome-slider .owl-nav .owl-prev' ),
				owl_next = $( '.kolkatacity-welcome-slider .owl-nav .owl-next' ),
				header_height_calc = ( header_height.height( ) ) / 2,
				welcome_wrapers = $( '.kolkatacity-welcome-wraper' );
				welcome_wrapers.css( 'margin-top', header_height.height( ) );
				owl_prev.css( 'top', 'calc(50% + ' + header_height_calc + 'px)' );
				owl_next.css( 'top', 'calc(50% + ' + header_height_calc + 'px)' );
				if ( window_height >= 600 ) {
			comming_soon.css( 'height', window_height );
			} else {
			comming_soon.css( 'height', '600px' );
			}

			if ( window_height >= 600 ) {
			welcome_container.css( 'height', window_height );
			} else {
			welcome_container.css( 'height', '600' );
			}
				}

//  email patern 
		function email_pattern( email ) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			return regex.test( email );
			}

// menu fixed function 
		function muneFixed( ) {

		var scroll = $( document ).scrollTop( ),
			this_item = $( '.navbar-fixed' ),
			headerHeight = this_item.outerHeight( ),
			headerAnimation = $( '.menu-skew' ),
			classList = ['off-canvas', 'fixed', 'swingInX', 'swingOutX'];
			// console.log(classList);

			$( window ).scroll( function( ) {

		var scrolled = $( document ).scrollTop( );
			if ( scrolled > headerHeight ) {
		this_item.addClass( classList[0] );
		} else {
		this_item.removeClass( classList[0] );
		}

		if ( scrolled > scroll || headerAnimation.hasClass( classList[2][3] ) ) {
		this_item.removeClass( classList[1] );
			headerAnimation.removeClass( classList[2] );
			headerAnimation.addClass( classList[3] );
		} else {
		this_item.addClass( classList[1] );
			headerAnimation.addClass( classList[2] );
			headerAnimation.removeClass( classList[3] );
		}
		scroll = $( document ).scrollTop( );
		} );
			}

// menu fixed anim class function 
		function menuFixedAnimClass( ) {

		var scroll = $( document ).scrollTop( ),
			this_item = $( '.navbar-fixed' ),
			headerHeight = this_item.outerHeight( ),
			headerAnimation = $( '.menu-skew' ),
			classList = ['off-canvas', 'fixed', 'swingInX', 'swingOutX'];
			// console.log(classList);

				function animationClassAdd( ) {

				if ( this_item.hasClass( classList[0][1] ) || headerAnimation.hasClass( classList[2][3] ) ) {
				this_item.addClass( classList[0] );
					this_item.removeClass( classList[1] );
					headerAnimation.removeClass( classList[2] );
					headerAnimation.addClass( classList[3] );
				} else {
				this_item.removeClass( classList[0] );
					this_item.addClass( classList[1] );
					headerAnimation.addClass( classList[2] );
					headerAnimation.removeClass( classList[3] );
				}
				}

			$( window ).on( 'load', function( ) {
			animationClassAdd( );
			} );
				$( window ).on( 'resize', function( ) {
			animationClassAdd( );
			} );
				}


		$( window ).on( 'load', function( ) {
		// Beautypress custom function init
		beautypress_function( );
			// menu fixed
			muneFixed( );
			// menu fixed anim class function 
			menuFixedAnimClass( );

			/*=============================================================
			 prelaoder
			 =========================================================================*/

			$('#preloader-cancel-btn').on('click', function (e) {
				e.preventDefault();
				$("#preloader").addClass('loaded');
			})
			setTimeout(function() {
				$("#preloader").addClass('loaded')
			}, 500);
			/*=============================================================
			 beautypress portfolio grid
			 =========================================================================*/
			if ( $( '.kolkatacity-photo-gallery-grid' ).length > 0 ) {
		var $container = $( '.kolkatacity-photo-gallery-grid' ),
			colWidth = function( ) {
			var w = $container.width( ),
				columnNum = 1,
				columnWidth = 0;
				if ( w > 1200 ) {
			columnNum = 3;
			} else if ( w > 900 ) {
			columnNum = 3;
			} else if ( w > 600 ) {
			columnNum = 3;
			} else if ( w > 450 ) {
			columnNum = 2;
			} else if ( w > 385 ) {
			columnNum = 1;
			}
			columnWidth = Math.floor( w / columnNum );
				$container.find( '.kolkatacity-photo-gallery-grid-item' ).each( function( ) {
			var $item = $( this ),
				multiplier_w = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-w(\d)/ ),
				multiplier_h = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-h(\d)/ ),
				width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
				$item.css( {
				width: width
					//height: height
				} );
			} );
				return columnWidth;
			},
			isotope = function( ) {
			$container.isotope( {
			resizable: false,
				itemSelector: '.kolkatacity-photo-gallery-grid-item',
				masonry: {
				columnWidth: colWidth( ),
					gutterWidth: 3
				}
			} );
			};
			isotope( );
			$( window ).on( 'resize', isotope );
			var $optionSets = $( '.kolkatacity-portfolio-nav .option-set' ),
			$optionLinks = $optionSets.find( 'a' );
			$optionLinks.on( 'click', function( ) {
			var $this = $( this );
				var $optionSet = $this.parents( '.option-set' );
				$optionSet.find( '.selected' ).removeClass( 'selected' );
				$this.addClass( 'selected' );
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
				key = $optionSet.attr( 'data-option-key' ),
				value = $this.attr( 'data-option-value' );
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[key] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			// changes in layout modes need extra logic
			changeLayoutMode( $this, options )
			} else {
			// creativewise, apply new options
			$container.isotope( options );
			}
			return false;
			} );
			}

		/*=============================================================
		 another beautypress portfolio grid 4 items
		 =========================================================================*/
		if ( $( '.beautypress-photo-gallery-grid-v3' ).length > 0 ) {
		var $container = $( '.beautypress-photo-gallery-grid-v3' ),
			colWidth = function( ) {
			var w = $container.width( ),
				columnNum = 1,
				columnWidth = 0;
				if ( w > 1200 ) {
			columnNum = 4;
			} else if ( w > 900 ) {
			columnNum = 4;
			} else if ( w > 600 ) {
			columnNum = 2;
			} else if ( w > 450 ) {
			columnNum = 2;
			} else if ( w > 385 ) {
			columnNum = 1;
			}
			columnWidth = Math.floor( w / columnNum );
				$container.find( '.beautypress-photo-gallery-grid-item-v3' ).each( function( ) {
			var $item = $( this ),
				multiplier_w = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-v3-w(\d)/ ),
				multiplier_h = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-v3-h(\d)/ ),
				width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
				$item.css( {
				width: width
					//height: height
				} );
			} );
				return columnWidth;
			},
			isotope = function( ) {
			$container.isotope( {
			resizable: false,
				itemSelector: '.beautypress-photo-gallery-grid-item-v3',
				masonry: {
				columnWidth: colWidth( ),
					gutterWidth: 3
				}
			} );
			};
			isotope( );
			$( window ).on( 'resize', isotope );
			var $optionSets = $( '.kolkatacity-portfolio-nav .option-set' ),
			$optionLinks = $optionSets.find( 'a' );
			$optionLinks.on( 'click', function( ) {
			var $this = $( this );
				var $optionSet = $this.parents( '.option-set' );
				$optionSet.find( '.selected' ).removeClass( 'selected' );
				$this.addClass( 'selected' );
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
				key = $optionSet.attr( 'data-option-key' ),
				value = $this.attr( 'data-option-value' );
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[key] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
			// changes in layout modes need extra logic
			changeLayoutMode( $this, options )
			} else {
			// creativewise, apply new options
			$container.isotope( options );
			}
			return false;
			} );
			}

		/*=============================================================
		 beautypress popular service grid
		 =========================================================================*/
		if ( $( '.beautypress-popular-service-grid' ).length > 0 ) {
		var $container = $( '.beautypress-popular-service-grid' ),
			colWidth = function( ) {
			var w = $container.width( ),
				columnNum = 1,
				columnWidth = 0;
				if ( w > 1200 ) {
			columnNum = 3;
			} else if ( w > 900 ) {
			columnNum = 3;
			} else if ( w > 600 ) {
			columnNum = 3;
			} else if ( w > 450 ) {
			columnNum = 2;
			} else if ( w > 385 ) {
			columnNum = 1;
			}
			columnWidth = Math.floor( w / columnNum );
				$container.find( '.beautypress-popular-service-grid-item' ).each( function( ) {
			var $item = $( this ),
				multiplier_w = $item.attr( 'class' ).match( /beautypress-popular-service-grid-item-w(\d)/ ),
				multiplier_h = $item.attr( 'class' ).match( /beautypress-popular-service-grid-item-h(\d)/ ),
				width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
				height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
				$item.css( {
				width: width
					//height: height
				} );
			} );
				return columnWidth;
			},
			isotope = function( ) {
			$container.isotope( {
			resizable: false,
				itemSelector: '.beautypress-popular-service-grid-item',
				masonry: {
				columnWidth: colWidth( ),
					gutterWidth: 3
				}
			} );
			};
			isotope( );
			$( window ).on( 'resize', isotope );
			}

		/*=============================================================
		 image comperasion
		 =========================================================================*/

		if ( $( '.kolkatacity-before-after' ).length > 0 ) {
		$( '.kolkatacity-before-after' ).twentytwenty( {
		no_overlay: true,
			move_slider_on_hover: false,
			move_with_handle_only: true,
			click_to_move: false,
		} );
			}

		} ); // end on.load event

			$( document ).ready( function( ) {

// Beautypress custom function init
		beautypress_function( );
// menu fixed anim class function 
			menuFixedAnimClass( );
			/*=============================================================
			 Date Picker
			 =========================================================================*/
			if ( $( '.datepicker' ).length > 0 ) {
		$( '.datepicker' ).datepicker( ).on( 'changeDate', function( ) {
		$( this ).datepicker( 'hide' );
		} );
			}

		/*=============================================================
		 welcome section slider
		 =========================================================================*/

		if ( $( '.kolkatacity-welcome-slider' ).length > 0 ) {
		var owl1 = $( ".kolkatacity-welcome-slider" );
			owl1.owlCarousel( {
			items: 1,
				loop: true,
				mouseDrag: true,
				touchDrag: true,
				dots: false,
				nav: true,
				autoplay: true,
				autoplayTimeout: 2000,
				autoplayHoverPause: true,
				navText:
			[ '<i class="xsicon icon-left-arrow"></i>',
				'<i class="xsicon icon-right-arrow"></i>'],
				responsive : {
					// breakpoint from 0 up
					0 : {nav:false,},
					// breakpoint from 480 up
					480 : {nav:false,},
					// breakpoint from 768 up
					768 : {nav:true,}
				}
			});
			}

		/*=============================================================
		 welcome section slider version 2
		 =========================================================================*/

		if ( $( '.beautypress-welcome-slider-v2' ).length > 0 ) {
		var owl2 = $( ".beautypress-welcome-slider-v2" );
			owl2.owlCarousel( {
			items: 1,
				loop: true,
				mouseDrag: true,
				touchDrag: true,
				dots: false,
				nav: false,
				autoplay: true,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
				responsive : {
					// breakpoint from 0 up
					0 : {nav:false,},
					// breakpoint from 480 up
					480 : {nav:false,},
					// breakpoint from 768 up
					768 : {nav:true,}
				}
			} );
			$( "#prev" ).on( 'click', function( ) {
		owl2.trigger( 'prev.owl.carousel' );
		} );
			$( "#next" ).on( 'click', function( ) {
		owl2.trigger( 'next.owl.carousel' );
		} );
			}

		/*=============================================================
		 testimonial slider
		 =========================================================================*/

		if ( $( '.beautypress-testimonial-slider' ).length > 0 ) {
		var owl3 = $( ".beautypress-testimonial-slider" );
			owl3.owlCarousel( {
			items: 1,
				loop: true,
				mouseDrag: true,
				touchDrag: true,
				dots: true,
				nav: false,
				autoplay: true,
				autoplayTimeout: 4000,
				autoplayHoverPause: true,
			} );
			}

		/*=============================================================
		 simple image slider
		 =========================================================================*/

		if ( $( '.beautypress-image-slider' ).length > 0 ) {
		var owl4 = $( ".beautypress-image-slider" );
			owl4.owlCarousel( {
			items: 1,
				loop: true,
				mouseDrag: true,
				touchDrag: true,
				dots: true,
				nav: false,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
			} );
			}

		/*=============================================================
		 simple image slider
		 =========================================================================*/

		if ( $( '.beautypress-client-slider' ).length > 0 ) {
		var owl5 = $( ".beautypress-client-slider" );
			owl5.owlCarousel( {
			items: 6,
				loop: true,
				mouseDrag: true,
				touchDrag: true,
				dots: false,
				nav: false,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				responsive : {
				// breakpoint from 0 up
				0 : {
				items: 1,
				},
					// breakpoint from 480 up
					480 : {
					items: 2,
					},
					// breakpoint from 768 up
					768 : {
					items: 6,
					}
				}
			} );
			$( "#prev1" ).on( 'click', function( ) {
		owl5.trigger( 'prev.owl.carousel' );
		} );
			$( "#next1" ).on( 'click', function( ) {
		owl5.trigger( 'next.owl.carousel' );
		} );
			}

		/*=============================================================
		 team slider
		 =========================================================================*/

		if ( $( '.beautypress-team-slider' ).length > 0 ) {
		var owl6 = $( ".beautypress-team-slider" );
			owl6.owlCarousel( {
			items: 1,
				loop: true,
				mouseDrag: true,
				touchDrag: true,
				dots: false,
				nav: false,
				autoplay: true,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
			} );
			}

		/*=============================================================
		 sync slider
		 =========================================================================*/

		if ( ( $( '.beautypress-sync-slider-preview' ).length > 0 ) && ( $( '.beautypress-sync-slider-thumb' ).length > 0 ) ) {
		var sync1 = $( ".beautypress-sync-slider-preview" ),
			sync2 = $( ".beautypress-sync-slider-thumb" ),
			slidesPerPage = 3,
			syncedSecondary = true;
			sync1.owlCarousel( {
			items: 1,
				slideSpeed: 2000,
				nav: true,
				autoplay: true,
				dots: true,
				loop: true,
				responsiveRefreshRate: 200,
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
			} ).on( 'changed.owl.carousel', syncPosition );
			sync2
			.on( 'initialized.owl.carousel', function( ) {
			sync2.find( ".owl-item" ).eq( 0 ).addClass( "current" );
			} )
			.owlCarousel( {
			items: slidesPerPage,
				dots: true,
				nav: false,
				smartSpeed: 200,
				slideSpeed: 500,
				slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
				responsiveRefreshRate: 100
			} ).on( 'changed.owl.carousel', syncPosition2 );
			function syncPosition( el ) {
			//if you set loop to false, you have to restore this next line
			//var current = el.item.index;

			//if you disable loop you have to comment this block
			var count = el.item.count - 1;
				var current = Math.round( el.item.index - ( el.item.count / 2 ) - .5 );
				if ( current < 0 ) {
			current = count;
			}
			if ( current > count )  {
			current = 0;
			}

			//end block

			sync2
				.find( ".owl-item" )
				.removeClass( "current" )
				.eq( current )
				.addClass( "current" );
				var onscreen = sync2.find( '.owl-item.active' ).length - 1;
				var start = sync2.find( '.owl-item.active' ).first( ).index( );
				var end = sync2.find( '.owl-item.active' ).last( ).index( );
				if ( current > end ) {
			sync2.data( 'owl.carousel' ).to( current, 100, true );
			}
			if ( current < start ) {
			sync2.data( 'owl.carousel' ).to( current - onscreen, 100, true );
			}
			}

		function syncPosition2( el ) {
		if ( syncedSecondary ) {
		var number = el.item.index;
			sync1.data( 'owl.carousel' ).to( number, 100, true );
		}
		}

		sync2.on( "click", ".owl-item", function( e ) {
		e.preventDefault( );
			var number = $( this ).index( );
			sync1.data( 'owl.carousel' ).to( number, 300, true );
		} );
			}


		/*=============================================================
		 video pop up
		 =========================================================================*/
		if ( $( '.beautypress-video-popup' ).length > 0 ) {
		$( '.beautypress-video-popup' ).magnificPopup( {
		disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		} );
			}
		/*=============================================================
		 image pop up
		 =========================================================================*/

		if ( $( '.kolkatacity-image-popup' ).length > 0 ) {
		$( '.kolkatacity-image-popup' ).magnificPopup( {
		type: 'image',
			removalDelay: 500, //delay removal by X to allow out-animation
			callbacks: {
			beforeOpen: function ( ) {
			// just a hack that adds mfp-anim class to markup
			this.st.image.markup = this.st.image.markup.replace( 'mfp-figure', 'mfp-figure mfp-with-anim' );
				this.st.mainClass = 'mfp-zoom-in';
			}
			},
			closeOnContentClick: true,
			midClick: true,
			gallery: {
			enabled: true,
			},
		} );
			}

		/*=============================================================
		 Ajaxchimp init
		 =========================================================================*/
		if ( $( '.mc-form' ).length > 0 ) {
		$( '.mc-form' ).ajaxChimp( {
		url: 'https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b'
		} );
			}

		/*=============================================================
		 Booking form init
		 =========================================================================*/
		if ( $( '#beautypress-booking-form' ).length > 0 ) {
		$( "#beautypress-booking-form" ).on( 'submit', function( ) {
		$( '#beautypress-form-msg' ).addClass( 'hidden' );
			$( '#beautypress-form-msg' ).removeClass( 'alert-success' );
			$( '#beautypress-form-msg' ).removeClass( 'alert-danger' );
			$.ajax( {
			type: "POST",
				url: "php/index.php",
				data: $( "#beautypress-booking-form" ).serialize( ),
				dataType: "json",
				success: function( data ) {

				if ( 'success' == data.result ) {
				$( '#beautypress-form-msg' ).css( 'visibility', 'visible' ).hide( ).fadeIn( ).removeClass( 'hidden' ).addClass( 'alert-success' );
					$( '#beautypress-form-msg' ).html( data.msg[0] );
					$( '#beautypress-booking-form' )[0].reset( );
				}

				if ( 'error' == data.result ) {
				$( '#beautypress-form-msg' ).css( 'visibility', 'visible' ).hide( ).fadeIn( ).removeClass( 'hidden' ).addClass( 'alert-danger' );
					$( '#beautypress-form-msg' ).html( data.msg[0] );
				}

				}
			} );
			return false;
		} );
			}

		/*=============================================================
		 Booking form select field focus
		 =========================================================================*/

		$( '#appointment-date ,#appointment-service, #appointment-time' ).on( 'focus', function( ) {
		$( this ).parent( ).addClass( 'actives' );
			} );
			$( '#appointment-date, #appointment-service, #appointment-time' ).on( 'blur', function( ) {
		$( this ).parent( ).removeClass( 'actives' );
			} );
			/*=============================================================
			 numeric number counter init
			 =========================================================================*/

			var number_animate = $( ".number-animate" );
			if ( number_animate.length > 0 ) {
		number_animate.appear( );
			$( document.body ).on( 'appear', '.numeric-count', function( ) {
		number_animate.each( function( ) {
		$( this ).animateNumbers( $( this ).attr( "data-value" ), true, parseInt( $( this ).attr( "data-animation-duration" ), 10 ) );
		} );
		} );
			} // End exists

		/*=============================================================
		 counter up appear init
		 =========================================================================*/

		var appear = $( '.appear' );
			appear.appear( );
			$.fn.animateNumbers = function( stop, commas, duration, ease ) {
			return this.each( function( ) {
			var $this = $( this );
				var start = parseInt( $this.text( ).replace( /,/g, "" ), 10 );
				commas = ( commas === undefined ) ? true : commas;
				$( {
				value: start
				} ).animate( {
			value: stop
			}, {
			duration: duration == undefined ? 500 : duration,
				easing: ease == undefined ? "swing" : ease,
				step: function( ) {
				$this.text( Math.floor( this.value ) );
					if ( commas ) {
				$this.text( $this.text( ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1," ) );
				}
				},
				complete: function( ) {
				if ( parseInt( $this.text( ), 10 ) !== stop ) {
				$this.text( stop );
					if ( commas ) {
				$this.text( $this.text( ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1," ) );
				}
				}
				}
			} );
			} );
				};
			/*=============================================================
			 back to top
			 =========================================================================*/
			if ( $( '.back-to-top' ).length > 0 ) {
		$( '.back-to-top' ).on( 'click', function( event ) {
		event.preventDefault( );
			$( 'body, html' ).animate( {
		scrollTop: 0
		}, 1000 );
		} );
			}

		/*=============================================================
		 button with mouse pointer
		 =========================================================================*/
		if ( $( '.xs-btn' ).length > 0 ) {
		$( '.xs-btn' ).on( 'mouseenter', function ( e ) {

		var parentOffset = $( this ).offset( ),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			if ( $( this ).find( 'span' ) ) {
		$( '.xs-btn span' ).css( {
		top: relY,
			left: relX,
		} );
		}
		} );
			$( '.xs-btn' ).on( 'mouseout', function ( e ) {

		var parentOffset = $( this ).offset( ),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			if ( $( this ).find( 'span' ) ) {
		$( '.xs-btn span' ).css( {
		top: relY,
			left: relX,
		} );
		}
		} );
			}

		/*=============================================================
		 button pulse effect
		 =========================================================================*/
		$( '.pulse-btn' ).hover( function( e ) {
		e.preventDefault( );
			var btns = $( this ).addClass( 'active' );
			setTimeout( function( ) {
			btns.removeClass( 'active' );
			}, 500 );
			} );
			/*=============================================================
			 contact form init
			 =========================================================================*/

			if ( $( '#beautypress-contact' ).length > 0 ) {
		$( '#beautypress-contact' ).on( 'submit', function( event ) {

		event.preventDefault( );
			var c_name = $( '#c_name' ),
			c_email = $( '#c_email' ),
			c_subject = $( '#c_subject' ),
			c_massage = $( '#c_massage' ),
			c_submit = $( '#c_submit' ),
			c_error = false;
			$( '.c_error_massage , .beautypress_success_message , .beautypress_loader' ).hide( ).fadeOut( 400 );
			if ( c_name.val( ) === '' ) {
		c_name.after( '<p class="c_error_massage">' + c_name.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
			c_error = true;
			c_name.focus( );
		}
		if ( c_email.val( ) === '' ) {
		c_email.after( '<p class="c_error_massage">' + c_email.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
			c_error = true;
			c_email.focus( );
		} else if ( !email_pattern( c_email.val( ).toLowerCase( ) ) ) {
		c_email.after( '<p class="c_error_massage">' + c_email.attr( 'placeholder' ) + ' filed is not vaild </p>' ).show( ).fadeIn( 500 );
			c_error = true;
			c_email.focus( );
		}
		if ( c_subject.val( ) === '' ) {
		c_subject.after( '<p class="c_error_massage">' + c_subject.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
			c_error = true;
			c_subject.focus( );
		}
		if ( c_massage.val( ) === '' ) {
		c_massage.after( '<p class="c_error_massage">' + c_massage.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
			c_error = true;
			c_massage.focus( );
		}

		if ( c_error === false ) {
		c_submit.before( ).hide( ).fadeIn( );
			$.ajax( {
			type: "POST",
				url: "php/contact-form.php",
				data: {
				'c_name' : c_name.val( ),
					'c_email' : c_email.val( ),
					'c_subject' : c_subject.val( ),
					'c_massage' : c_massage.val( )
				},
				success: function( result ){
				c_submit.after( '<span class="beautypress_success_message">' + result + '</span>' ).hide( ).fadeIn( );
					$( ".beautypress_loader" ).fadeOut( "normal", function( ) {
				$( this ).remove( );
				} );
					$( '#beautypress-contact' )[0].reset( );
				}
			} );
		}
		} );
			}

		/*=============================================================
		 instagram feeds
		 =========================================================================*/

		if ( $( '.beautypress-demoFeed' ).length > 0 ) {
		$.fn.spectragram.accessData = {
		accessToken: '1764162550.ba4c844.679392a432894982bf6a31ec20d8acb0',
			clientID: '289a98508b934dd49a68144b79209813'
		};
			$( '.beautypress-demoFeed' ).spectragram( 'getUserFeed', {
		query: 'natgeo',
			max: 9,
			size: 'small',
		} );
			}

		/*=============================================================
		 beautypress accordion add class
		 =========================================================================*/

		if ( $( '.beautypress-accordion .panel-heading' ).length > 0 ) {
		$( '.beautypress-accordion .panel-heading' ).on( 'click', function( event ) {
		event.preventDefault( );
			$( this ).parent( ).addClass( 'active' ).siblings( ).removeClass( 'active' );
		} );
			}

		/*=============================================================
		 beautypress hover add class
		 =========================================================================*/

		if ( $( '.beautypress-single-team-v3' ).length > 0 ) {
		$( '.beautypress-single-team-v3' ).hover( function( ) {
		if ( $( '.beautypress-single-team-v3' ).hasClass( 'hover' ) ) {
		$( this ).removeClass( 'hover' );
		} else {
		$( '.beautypress-team-col-v3' ).children( ).removeClass( 'hover' );
			$( this ).addClass( 'hover' );
		}
		} );
			}


		/*=============================================================
		 mouse over and add class remove class
		 =========================================================================*/

		if ( $( '.beautypress-single-new-pricing.beautypress-pricing-footer' ).length > 0 ) {
		$( '.beautypress-single-new-pricing.beautypress-pricing-footer' ).on( 'mouseover', function( ){
		$( this ).parent( ).addClass( 'active' );
		} ).on( 'mouseout', function( ){
		$( this ).parent( ).removeClass( 'active' );
		} );
			}

		/*=============================================================
		 flicker gallery
		 =========================================================================*/

		if ( $( '.beautypress-flickr' ).length > 0 ) {
		$( '.beautypress-flickr' ).jflickrfeed( {
		limit: 9,
			qstrings: {
			id: '95098787@N06'
			},
			itemTemplate: '<li>' + '<a rel="colorbox" href="{{image_b}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
		} );
			}


		/*=============================================================
		 mega menu
		 =========================================================================*/

		if ( $( '.kolkatacity-mega-menu' ).length > 0 ) {
		$( '.kolkatacity-mega-menu' ).xs_nav( {
		mobileBreakpoint: 992,
		} );
			}
		if ( $( '.xs_nav_2' ).length > 0 ) {
		$( '.xs_nav_2' ).xs_nav( {
		mobileBreakpoint: 992,
		} );
			}
		if ( $( '.xs-navigation-middle-menu' ).length > 0 ) {
		$( '.xs-navigation-middle-menu' ).xs_nav( {
		mobileBreakpoint: 992,
		} );
			}

		/*=============================================================
		 hover 3d init for tilt
		 =========================================================================*/

		if ( $( '.kolkatacity-3d-project-card' ).length > 0 ) {
		$( '.kolkatacity-3d-project-card' ).tilt( {
		maxTilt:20,
			perspective: 700,
			easing: "cubic-bezier(.03,.98,.52,.99)",
			scale:1,
			speed: 500,
			transition: true,
		} );
			}

		if ( $( '.kolkatacity-single-photo-gallery .kolkatacity-3d-project-card' ).length > 0 ) {
		$( '.kolkatacity-single-photo-gallery .kolkatacity-3d-project-card' ).tilt( {
		maxTilt:25,
			perspective: 700,
			easing: "cubic-bezier(.03,.98,.52,.99)",
			scale:1,
			speed: 400,
			transition: true,
		} );
			}

		/*=============================================================
		 ScrollMagic
		 =========================================================================*/

		if ( $( '.beautypress-scoller-animation' ).length > 0 ) {
		var controller = new ScrollMagic.Controller( );
			new ScrollMagic.Scene( {triggerElement: ".beautypress-scoller-animation"} )
			.setVelocity( ".scoller-image-1 img", {opacity: 1, bottom: "0"}, 800 )
			.triggerHook( "onEnter" )
			.addTo( controller );
			new ScrollMagic.Scene( {triggerElement: ".beautypress-scoller-animation"} )
			.setVelocity( ".scoller-image-2 img", {opacity: 1, top: "270"}, 1000 )
			.triggerHook( 0.7 )
			.addTo( controller );
			}

		/*=============================================================
		 parallax bg
		 =========================================================================*/

	 

		if ( $( '.parallax-bg' ).length > 0 ) {
		$( '.parallax-bg' ).parallax( {
		mirrorContainer: 'body',
		} );
			}



		/*=============================================================
		 social tigger icon
		 =========================================================================*/

		$( '.tigger-icon' ).on( 'click', function( event ) {
		event.preventDefault( );
			/* Act on the event */

			var this_item = $( '.beautypress-social-tigger' );
			if ( this_item.hasClass( 'active' ) ) {
		this_item.removeClass( 'active' );
		} else {
		this_item.addClass( 'active' );
		}

		} );
			/*=============================================================
			 input number increase
			 =========================================================================*/

			var thiss = $( '.beautypress_input_number' );
			thiss.append( '<span class="sub"><img src="img/minus-icon.png" alt="" /></span>' );
			thiss.append( '<span class="add"><img src="img/plus-icon.png" alt="" /></span>' );
			$( '.beautypress_input_number' ).each( function( ) {

		var spinner = $( this ),
			input = spinner.find( 'input[type="number"]' ),
			add = spinner.find( '.add' ),
			sub = spinner.find( '.sub' );
			input.parent( ).on( 'click', '.sub', function( event ) {
		event.preventDefault( );
			/* Act on the event */
			if ( input.val( ) > parseInt( input.attr( 'min' ) ) )
			input.val( function( i, oldval ) { return --oldval; } );
		} );
			input.parent( ).on( 'click', '.add', function ( ) {
		event.preventDefault( );
			if ( input.val( ) < parseInt( input.attr( 'max' ) ) )
			input.val( function( i, oldval ) { return ++oldval; } );
		} );
			} );
			/*=============================================================
			 theme switcher init
			 =========================================================================*/

			+ function( $ ) {
			themeSwitcher.run( {
			windowPos: 'left',
				layoutColors: {
				title: 'Colors',
					name: ['Default', 'Green', 'Purple', 'Blue', 'Cian', 'Orange'],
					code: ['#ffffff', '', '', '', '', ''],
					show: true
				},
				layoutBoxedWide: {
				title: 'Layout',
					show: false
				},
				layoutBackgrounds: {
				title: '',
					show: false,
				},
				layoutFonts: {
				title: 'Fonts',
					name: ['Bitter', 'PT Sans', 'Six Caps', 'Yanone Kaffeesatz', 'Syncopate'],
					code: ['bitter', 'ptsans', 'sixcaps', 'yanonekaffeesatz', 'syncopate'],
					show: false,
				},
			} );
				}( jQuery );


		if ( $( '.layout-colors li a' ).length > 0 ) {

		$( document ).on( 'click', '.layout-colors li a[data-name="default"]', function( event ) {
		event.preventDefault( );
			/* Act on the event */
			$( 'html' ).removeAttr( 'style' );
		} );
			$( document ).on( 'click', '.layout-colors li a[data-name="green"]', function( event ) {
		event.preventDefault( );
			/* Act on the event */

			var colors = ['#00ADCB', '#2C3E50'],
			colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
			document.documentElement.style.setProperty( colorVar[0], colors[0] );
			document.documentElement.style.setProperty( colorVar[1], colors[0] );
			document.documentElement.style.setProperty( colorVar[2], colors[1] );
			document.documentElement.style.setProperty( colorVar[3], colors[1] );
			document.documentElement.style.setProperty( colorVar[4], colors[1] );
		} );
			$( document ).on( 'click', '.layout-colors li a[data-name="purple"]', function( event ) {
		event.preventDefault( );
			/* Act on the event */

			var colors = ['#FF956B', '#333333'],
			colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
			document.documentElement.style.setProperty( colorVar[0], colors[0] );
			document.documentElement.style.setProperty( colorVar[1], colors[0] );
			document.documentElement.style.setProperty( colorVar[2], colors[1] );
			document.documentElement.style.setProperty( colorVar[3], colors[1] );
			document.documentElement.style.setProperty( colorVar[4], colors[1] );
		} );
			$( document ).on( 'click', '.layout-colors li a[data-name="blue"]', function( event ) {
		event.preventDefault( );
			/* Act on the event */

			var colors = ['#00B4EF', '#2C3E50'],
			colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
			document.documentElement.style.setProperty( colorVar[0], colors[0] );
			document.documentElement.style.setProperty( colorVar[1], colors[0] );
			document.documentElement.style.setProperty( colorVar[2], colors[1] );
			document.documentElement.style.setProperty( colorVar[3], colors[1] );
			document.documentElement.style.setProperty( colorVar[4], colors[1] );
		} );
			$( document ).on( 'click', '.layout-colors li a[data-name="cian"]', function( event ) {
		event.preventDefault( );
			/* Act on the event */

			var colors = ['#6A1B9A', '#222222'],
			colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
			document.documentElement.style.setProperty( colorVar[0], colors[0] );
			document.documentElement.style.setProperty( colorVar[1], colors[0] );
			document.documentElement.style.setProperty( colorVar[2], colors[1] );
			document.documentElement.style.setProperty( colorVar[3], colors[1] );
			document.documentElement.style.setProperty( colorVar[4], colors[1] );
		} );
			$( document ).on( 'click', '.layout-colors li a[data-name="orange"]', function( event ) {
		event.preventDefault( );
			/* Act on the event */

			var colors = ['#E3BDA8', '#333333'],
			colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
			document.documentElement.style.setProperty( colorVar[0], colors[0] );
			document.documentElement.style.setProperty( colorVar[1], colors[0] );
			document.documentElement.style.setProperty( colorVar[2], colors[1] );
			document.documentElement.style.setProperty( colorVar[3], colors[1] );
			document.documentElement.style.setProperty( colorVar[4], colors[1] );
		} );
			}
			
			} );
			$( window ).on( 'scroll', function( ) {

		/*=============================================================
		 meun scroll and add class
		 =========================================================================*/

		var w_height = $( window ).height( ),
			d_height = $( document ).height( ),
			h_calc = d_height - w_height;
			// console.log(h_calc);

			var scrollTop = $( this ).scrollTop( );
			if ( scrollTop >= h_calc ) {
		$( '.beautypress-back-to-top-wraper.show-last-pos' ).addClass( 'active' );
			} else {
		$( '.beautypress-back-to-top-wraper.show-last-pos' ).removeClass( 'active' );
			}

		} ); // END Scroll Function 

			$( window ).on( 'resize', function( ) {
		// Beautypress custom function init
		beautypress_function( );
			} ); // End Resize

			/*=============================================================
			 snazzy maps 1
			 =========================================================================*/

			if ( $( '#beautypress_maps' ).length > 0 ) {
		// When the window has finished loading create our google map below
		google.maps.event.addDomListener( window, 'load', init );
			function init( ) {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: true,
				scaleControl: false,
				draggable: true,
				disableDefaultUI: true,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng( 40.6700, - 73.9400 ), // New York

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"administrative", "elementType":"all", "stylers":[{"saturation":"-100"}]}, {"featureType":"administrative.province", "elementType":"all", "stylers":[{"visibility":"off"}]}, {"featureType":"landscape", "elementType":"all", "stylers":[{"saturation": - 100}, {"lightness":65}, {"visibility":"on"}]}, {"featureType":"poi", "elementType":"all", "stylers":[{"saturation": - 100}, {"lightness":"50"}, {"visibility":"simplified"}]}, {"featureType":"road", "elementType":"all", "stylers":[{"saturation":"-100"}]}, {"featureType":"road.highway", "elementType":"all", "stylers":[{"visibility":"simplified"}]}, {"featureType":"road.arterial", "elementType":"all", "stylers":[{"lightness":"30"}]}, {"featureType":"road.local", "elementType":"all", "stylers":[{"lightness":"40"}]}, {"featureType":"transit", "elementType":"all", "stylers":[{"saturation": - 100}, {"visibility":"simplified"}]}, {"featureType":"water", "elementType":"geometry", "stylers":[{"hue":"#ffff00"}, {"lightness": - 25}, {"saturation": - 97}]}, {"featureType":"water", "elementType":"labels", "stylers":[{"lightness": - 25}, {"saturation": - 100}]}]
			};
				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement = document.getElementById( 'beautypress_maps' );
				// Create the Google Map using our element and options defined above
				var map = new google.maps.Map( mapElement, mapOptions );
				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker( {
				position: new google.maps.LatLng( 40.6700, - 73.9400 ),
					map: map,
					title: 'Beautypress'
				} );
			}
		}

		/*=============================================================
		 snazzy maps 2
		 =========================================================================*/

		if ( $( "#beautypress_maps_2" ).length > 0 ) {
		// When the window has finished loading create our google map below
		google.maps.event.addDomListener( window, 'load', init );
			function init( ) {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
				scrollwheel: false,
				navigationControl: false,
				mapTypeControl: true,
				scaleControl: false,
				draggable: true,
				disableDefaultUI: true,
				// The latitude and longitude to center the map (always required)
				center: new google.maps.LatLng( 40.6700, - 73.9400 ), // New York

				// How you would like to style the map. 
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{"featureType":"all", "elementType":"all", "stylers":[{"visibility":"on"}]}, {"featureType":"all", "elementType":"labels", "stylers":[{"visibility":"off"}, {"saturation":"-100"}]}, {"featureType":"all", "elementType":"labels.text.fill", "stylers":[{"saturation":36}, {"color":"#000000"}, {"lightness":40}, {"visibility":"off"}]}, {"featureType":"all", "elementType":"labels.text.stroke", "stylers":[{"visibility":"off"}, {"color":"#000000"}, {"lightness":16}]}, {"featureType":"all", "elementType":"labels.icon", "stylers":[{"visibility":"off"}]}, {"featureType":"administrative", "elementType":"geometry.fill", "stylers":[{"color":"#000000"}, {"lightness":20}]}, {"featureType":"administrative", "elementType":"geometry.stroke", "stylers":[{"color":"#000000"}, {"lightness":17}, {"weight":1.2}]}, {"featureType":"landscape", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":20}]}, {"featureType":"landscape", "elementType":"geometry.fill", "stylers":[{"color":"#4d6059"}]}, {"featureType":"landscape", "elementType":"geometry.stroke", "stylers":[{"color":"#4d6059"}]}, {"featureType":"landscape.natural", "elementType":"geometry.fill", "stylers":[{"color":"#4d6059"}]}, {"featureType":"poi", "elementType":"geometry", "stylers":[{"lightness":21}]}, {"featureType":"poi", "elementType":"geometry.fill", "stylers":[{"color":"#4d6059"}]}, {"featureType":"poi", "elementType":"geometry.stroke", "stylers":[{"color":"#4d6059"}]}, {"featureType":"road", "elementType":"geometry", "stylers":[{"visibility":"on"}, {"color":"#7f8d89"}]}, {"featureType":"road", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.highway", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}, {"lightness":17}]}, {"featureType":"road.highway", "elementType":"geometry.stroke", "stylers":[{"color":"#7f8d89"}, {"lightness":29}, {"weight":0.2}]}, {"featureType":"road.arterial", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":18}]}, {"featureType":"road.arterial", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.arterial", "elementType":"geometry.stroke", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.local", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":16}]}, {"featureType":"road.local", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.local", "elementType":"geometry.stroke", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"transit", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":19}]}, {"featureType":"water", "elementType":"all", "stylers":[{"color":"#2b3638"}, {"visibility":"on"}]}, {"featureType":"water", "elementType":"geometry", "stylers":[{"color":"#2b3638"}, {"lightness":17}]}, {"featureType":"water", "elementType":"geometry.fill", "stylers":[{"color":"#24282b"}]}, {"featureType":"water", "elementType":"geometry.stroke", "stylers":[{"color":"#24282b"}]}, {"featureType":"water", "elementType":"labels", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.text", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.text.fill", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.text.stroke", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.icon", "stylers":[{"visibility":"off"}]}]
			};
				// Get the HTML DOM element that will contain your map 
				// We are using a div with id="map" seen below in the <body>
				var mapElement = document.getElementById( 'beautypress_maps_2' );
				// Create the Google Map using our element and options defined above
				var map = new google.maps.Map( mapElement, mapOptions );
				// Let's also add a marker while we're at it
				var marker = new google.maps.Marker( {
				position: new google.maps.LatLng( 40.6700, - 73.9400 ),
					map: map,
					title: 'Beautypress!',
					icon: 'img/markar.png',
				} );
				marker.setAnimation( google.maps.Animation.BOUNCE );
				setTimeout( function( ){ marker.setAnimation( null ); }, 750 );
			}
		}

		} )( jQuery );

		// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.



/*! WOW - v1.0.2 - 2014-09-24
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else{for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)}return this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],e=0,f=b.length;f>e;e++)d=b[e],g.push(function(){var a,b,e,f;for(e=d.addedNodes||[],f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(this.doSync(c));return f}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;f=[];for(c in b)d=b[c],a[""+c]=d,f.push(function(){var b,f,g,h;for(g=this.vendors,h=[],b=0,f=g.length;f>b;b++)e=g[b],h.push(a[""+e+c.charAt(0).toUpperCase()+c.substr(1)]=d);return h}.call(this));return f},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(e=d(a),c=e.getPropertyCSSValue(b),i=this.vendors,g=0,h=i.length;h>g;g++)f=i[g],c=c||e.getPropertyCSSValue("-"+f+"-"+b);return c},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);

//Smmoth Scroll
!function(){function e(){z.keyboardSupport&&m("keydown",a)}function t(){if(!A&&document.body){A=!0;var t=document.body,o=document.documentElement,n=window.innerHeight,r=t.scrollHeight;if(B=document.compatMode.indexOf("CSS")>=0?o:t,D=t,e(),top!=self)X=!0;else if(r>n&&(t.offsetHeight<=n||o.offsetHeight<=n)){var a=document.createElement("div");a.style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+B.scrollHeight+"px",document.body.appendChild(a);var i;T=function(){i||(i=setTimeout(function(){L||(a.style.height="0",a.style.height=B.scrollHeight+"px",i=null)},500))},setTimeout(T,10),m("resize",T);var l={attributes:!0,childList:!0,characterData:!1};if(M=new W(T),M.observe(t,l),B.offsetHeight<=n){var c=document.createElement("div");c.style.clear="both",t.appendChild(c)}}z.fixedBackground||L||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(){M&&M.disconnect(),w(_,r),w("mousedown",i),w("keydown",a),w("resize",T),w("load",t)}function n(e,t,o){if(p(t,o),1!=z.accelerationMax){var n=Date.now(),r=n-j;if(r<z.accelerationDelta){var a=(1+50/r)/2;a>1&&(a=Math.min(a,z.accelerationMax),t*=a,o*=a)}j=Date.now()}if(q.push({x:t,y:o,lastX:0>t?.99:-.99,lastY:0>o?.99:-.99,start:Date.now()}),!P){var i=e===document.body,l=function(n){for(var r=Date.now(),a=0,c=0,u=0;u<q.length;u++){var d=q[u],s=r-d.start,f=s>=z.animationTime,m=f?1:s/z.animationTime;z.pulseAlgorithm&&(m=x(m));var w=d.x*m-d.lastX>>0,h=d.y*m-d.lastY>>0;a+=w,c+=h,d.lastX+=w,d.lastY+=h,f&&(q.splice(u,1),u--)}i?window.scrollBy(a,c):(a&&(e.scrollLeft+=a),c&&(e.scrollTop+=c)),t||o||(q=[]),q.length?V(l,e,1e3/z.frameRate+1):P=!1};V(l,e,0),P=!0}}function r(e){A||t();var o=e.target,r=u(o);if(!r||e.defaultPrevented||e.ctrlKey)return!0;if(h(D,"embed")||h(o,"embed")&&/\.pdf/i.test(o.src)||h(D,"object")||o.shadowRoot)return!0;var a=-e.wheelDeltaX||e.deltaX||0,i=-e.wheelDeltaY||e.deltaY||0;return O&&(e.wheelDeltaX&&b(e.wheelDeltaX,120)&&(a=-120*(e.wheelDeltaX/Math.abs(e.wheelDeltaX))),e.wheelDeltaY&&b(e.wheelDeltaY,120)&&(i=-120*(e.wheelDeltaY/Math.abs(e.wheelDeltaY)))),a||i||(i=-e.wheelDelta||0),1===e.deltaMode&&(a*=40,i*=40),!z.touchpadSupport&&v(i)?!0:(Math.abs(a)>1.2&&(a*=z.stepSize/120),Math.abs(i)>1.2&&(i*=z.stepSize/120),n(r,a,i),e.preventDefault(),void l())}function a(e){var t=e.target,o=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==K.spacebar;document.body.contains(D)||(D=document.activeElement);var r=/^(textarea|select|embed|object)$/i,a=/^(button|submit|radio|checkbox|file|color|image)$/i;if(e.defaultPrevented||r.test(t.nodeName)||h(t,"input")&&!a.test(t.type)||h(D,"video")||g(e)||t.isContentEditable||o)return!0;if((h(t,"button")||h(t,"input")&&a.test(t.type))&&e.keyCode===K.spacebar)return!0;if(h(t,"input")&&"radio"==t.type&&R[e.keyCode])return!0;var i,c=0,d=0,s=u(D),f=s.clientHeight;switch(s==document.body&&(f=window.innerHeight),e.keyCode){case K.up:d=-z.arrowScroll;break;case K.down:d=z.arrowScroll;break;case K.spacebar:i=e.shiftKey?1:-1,d=-i*f*.9;break;case K.pageup:d=.9*-f;break;case K.pagedown:d=.9*f;break;case K.home:d=-s.scrollTop;break;case K.end:var m=s.scrollHeight-s.scrollTop-f;d=m>0?m+10:0;break;case K.left:c=-z.arrowScroll;break;case K.right:c=z.arrowScroll;break;default:return!0}n(s,c,d),e.preventDefault(),l()}function i(e){D=e.target}function l(){clearTimeout(E),E=setInterval(function(){I={}},1e3)}function c(e,t){for(var o=e.length;o--;)I[F(e[o])]=t;return t}function u(e){var t=[],o=document.body,n=B.scrollHeight;do{var r=I[F(e)];if(r)return c(t,r);if(t.push(e),n===e.scrollHeight){var a=s(B)&&s(o),i=a||f(B);if(X&&d(B)||!X&&i)return c(t,$())}else if(d(e)&&f(e))return c(t,e)}while(e=e.parentElement)}function d(e){return e.clientHeight+10<e.scrollHeight}function s(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"hidden"!==t}function f(e){var t=getComputedStyle(e,"").getPropertyValue("overflow-y");return"scroll"===t||"auto"===t}function m(e,t){window.addEventListener(e,t,!1)}function w(e,t){window.removeEventListener(e,t,!1)}function h(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function p(e,t){e=e>0?1:-1,t=t>0?1:-1,(Y.x!==e||Y.y!==t)&&(Y.x=e,Y.y=t,q=[],j=0)}function v(e){return e?(N.length||(N=[e,e,e]),e=Math.abs(e),N.push(e),N.shift(),clearTimeout(C),C=setTimeout(function(){window.localStorage&&(localStorage.SS_deltaBuffer=N.join(","))},1e3),!y(120)&&!y(100)):void 0}function b(e,t){return Math.floor(e/t)==e/t}function y(e){return b(N[0],e)&&b(N[1],e)&&b(N[2],e)}function g(e){var t=e.target,o=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do if(o=t.classList&&t.classList.contains("html5-video-controls"))break;while(t=t.parentNode);return o}function S(e){var t,o,n;return e*=z.pulseScale,1>e?t=e-(1-Math.exp(-e)):(o=Math.exp(-1),e-=1,n=1-Math.exp(-e),t=o+n*(1-o)),t*z.pulseNormalize}function x(e){return e>=1?1:0>=e?0:(1==z.pulseNormalize&&(z.pulseNormalize/=S(1)),S(e))}function k(e){for(var t in e)H.hasOwnProperty(t)&&(z[t]=e[t])}var D,M,T,E,C,H={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!1,fixedBackground:!0,excluded:""},z=H,L=!1,X=!1,Y={x:0,y:0},A=!1,B=document.documentElement,N=[],O=/^Mac/.test(navigator.platform),K={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},R={37:1,38:1,39:1,40:1},q=[],P=!1,j=Date.now(),F=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),I={};window.localStorage&&localStorage.SS_deltaBuffer&&(N=localStorage.SS_deltaBuffer.split(","));var _,V=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)}}(),W=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,$=function(){var e;return function(){if(!e){var t=document.createElement("div");t.style.cssText="height:10000px;width:1px;",document.body.appendChild(t);var o=document.body.scrollTop;document.documentElement.scrollTop;window.scrollBy(0,3),e=document.body.scrollTop!=o?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(t)}return e}}(),U=window.navigator.userAgent,G=/Edge/.test(U),J=/chrome/i.test(U)&&!G,Q=/safari/i.test(U)&&!G,Z=/mobile/i.test(U),ee=/Windows NT 6.1/i.test(U)&&/rv:11/i.test(U),te=(J||Q||ee)&&!Z;"onwheel"in document.createElement("div")?_="wheel":"onmousewheel"in document.createElement("div")&&(_="mousewheel"),_&&te&&(m(_,r),m("mousedown",i),m("load",t)),k.destroy=o,window.SmoothScrollOptions&&k(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return k}):"object"==typeof exports?module.exports=k:window.SmoothScroll=k}();


/**!
 * @preserve nanoGALLERY v5.10.3
 * Plugin for jQuery by Christophe Brisbois
 * Demo: http://nanogallery.brisbois.fr
 * Sources: https://github.com/Kris-B/nanoGALLERY
 *
 * License: For personal, non-profit organizations, or open source projects (without any kind of fee), you may use nanoGALLERY for jQuery for free.
 * -------- ALL OTHER USES REQUIRE THE PURCHASE OF A PROFESSIONAL LICENSE.
 *
 *
 * Components:
 *  - jQuery (http://www.jquery.com) - version >= 1.7.1
 *  - jQuery Color plugin - is embedded
 *  - imagesloaded (https://github.com/desandro/imagesloaded) - is embebed
 *  - screenfull.js (https://github.com/sindresorhus/screenfull.js) - is embeded
 *  - shifty (https://github.com/jeremyckahn/shifty) - is embeded
 *  - webfont generated by http://fontello.com - based on Font Awesome Copyright (C) 2012 by Dave Gandy (http://fortawesome.github.com/Font-Awesome/)
 *  - javascript minifying: grunt-contrib-uglify (https://github.com/gruntjs/grunt-contrib-uglify)
 *  - css minifying: grunt-contrib-cssmin (https://github.com/gruntjs/grunt-contrib-cssmin)
 */
/*!
 * Shifty
 * By Jeremy Kahn - jeremyckahn@gmail.com
 */
/*! shifty - v1.5.0 - 2015-05-31 - http://jeremyckahn.github.io/shifty */
(function(){var a=this,b=function(){"use strict";function b(){}function c(a,b){var c;for(c in a)Object.hasOwnProperty.call(a,c)&&b(c)}function d(a,b){return c(b,function(c){a[c]=b[c]}),a}function e(a,b){c(b,function(c){void 0===a[c]&&(a[c]=b[c])})}function f(a,b,c,d,e,f,h){var i,j,k,m=f>a?0:(a-f)/e;for(i in b)b.hasOwnProperty(i)&&(j=h[i],k="function"==typeof j?j:l[j],b[i]=g(c[i],d[i],k,m));return b}function g(a,b,c,d){return a+(b-a)*c(d)}function h(a,b){var d=k.prototype.filter,e=a._filterArgs;c(d,function(c){void 0!==d[c][b]&&d[c][b].apply(a,e)})}function i(a,b,c,d,e,g,i,j,k,l,m){s=b+c+d,t=Math.min(m||r(),s),u=t>=s,v=d-(s-t),a.isPlaying()&&!u?(a._scheduleId=l(a._timeoutHandler,p),h(a,"beforeTween"),b+c>t?f(1,e,g,i,1,1,j):f(t,e,g,i,d,b+c,j),h(a,"afterTween"),k(e,a._attachment,v)):a.isPlaying()&&u&&(k(i,a._attachment,v),a.stop(!0))}function j(a,b){var d={},e=typeof b;return"string"===e||"function"===e?c(a,function(a){d[a]=b}):c(a,function(a){d[a]||(d[a]=b[a]||n)}),d}function k(a,b){this._currentState=a||{},this._configured=!1,this._scheduleFunction=m,void 0!==b&&this.setConfig(b)}var l,m,n="linear",o=500,p=1e3/60,q=Date.now?Date.now:function(){return+new Date},r="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:q;m="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var s,t,u,v;return k.prototype.tween=function(a){return this._isTweening?this:(void 0===a&&this._configured||this.setConfig(a),this._timestamp=r(),this._start(this.get(),this._attachment),this.resume())},k.prototype.setConfig=function(a){a=a||{},this._configured=!0,this._attachment=a.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=a.delay||0,this._start=a.start||b,this._step=a.step||b,this._finish=a.finish||b,this._duration=a.duration||o,this._currentState=d({},a.from)||this.get(),this._originalState=this.get(),this._targetState=d({},a.to)||this.get();var c=this;this._timeoutHandler=function(){i(c,c._timestamp,c._delay,c._duration,c._currentState,c._originalState,c._targetState,c._easing,c._step,c._scheduleFunction)};var f=this._currentState,g=this._targetState;return e(g,f),this._easing=j(f,a.easing||n),this._filterArgs=[f,this._originalState,g,this._easing],h(this,"tweenCreated"),this},k.prototype.get=function(){return d({},this._currentState)},k.prototype.set=function(a){this._currentState=a},k.prototype.pause=function(){return this._pausedAtTime=r(),this._isPaused=!0,this},k.prototype.resume=function(){return this._isPaused&&(this._timestamp+=r()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},k.prototype.seek=function(a){a=Math.max(a,0);var b=r();return 0===this._timestamp+a?this:(this._timestamp=b-a,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,i(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,b),this.pause()),this)},k.prototype.stop=function(c){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=b,(a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.oCancelAnimationFrame||a.msCancelAnimationFrame||a.mozCancelRequestAnimationFrame||a.clearTimeout)(this._scheduleId),c&&(h(this,"beforeTween"),f(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),h(this,"afterTween"),h(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},k.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},k.prototype.setScheduleFunction=function(a){this._scheduleFunction=a},k.prototype.dispose=function(){var a;for(a in this)this.hasOwnProperty(a)&&delete this[a]},k.prototype.filter={},k.prototype.formula={linear:function(a){return a}},l=k.prototype.formula,d(k,{now:r,each:c,tweenProps:f,tweenProp:g,applyFilter:h,shallowCopy:d,defaults:e,composeEasingObject:j}),"function"==typeof SHIFTY_DEBUG_NOW&&(a.timeoutHandler=i),"object"==typeof exports?module.exports=k:"function"==typeof define&&define.amd?define("ngTweenable",function(){return k}):void 0===a.NGTweenable&&(a.NGTweenable=k),k}();!function(){b.shallowCopy(b.prototype.formula,{easeInQuad:function(a){return Math.pow(a,2)},easeOutQuad:function(a){return-(Math.pow(a-1,2)-1)},easeInOutQuad:function(a){return 1>(a/=.5)?.5*Math.pow(a,2):-.5*((a-=2)*a-2)},easeInCubic:function(a){return Math.pow(a,3)},easeOutCubic:function(a){return Math.pow(a-1,3)+1},easeInOutCubic:function(a){return 1>(a/=.5)?.5*Math.pow(a,3):.5*(Math.pow(a-2,3)+2)},easeInQuart:function(a){return Math.pow(a,4)},easeOutQuart:function(a){return-(Math.pow(a-1,4)-1)},easeInOutQuart:function(a){return 1>(a/=.5)?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeInQuint:function(a){return Math.pow(a,5)},easeOutQuint:function(a){return Math.pow(a-1,5)+1},easeInOutQuint:function(a){return 1>(a/=.5)?.5*Math.pow(a,5):.5*(Math.pow(a-2,5)+2)},easeInSine:function(a){return-Math.cos(a*(Math.PI/2))+1},easeOutSine:function(a){return Math.sin(a*(Math.PI/2))},easeInOutSine:function(a){return-.5*(Math.cos(Math.PI*a)-1)},easeInExpo:function(a){return 0===a?0:Math.pow(2,10*(a-1))},easeOutExpo:function(a){return 1===a?1:-Math.pow(2,-10*a)+1},easeInOutExpo:function(a){return 0===a?0:1===a?1:1>(a/=.5)?.5*Math.pow(2,10*(a-1)):.5*(-Math.pow(2,-10*--a)+2)},easeInCirc:function(a){return-(Math.sqrt(1-a*a)-1)},easeOutCirc:function(a){return Math.sqrt(1-Math.pow(a-1,2))},easeInOutCirc:function(a){return 1>(a/=.5)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)},easeOutBounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},easeInBack:function(a){var b=1.70158;return a*a*((b+1)*a-b)},easeOutBack:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},easeInOutBack:function(a){var b=1.70158;return 1>(a/=.5)?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},elastic:function(a){return-1*Math.pow(4,-8*a)*Math.sin(2*(6*a-1)*Math.PI/2)+1},swingFromTo:function(a){var b=1.70158;return 1>(a/=.5)?.5*a*a*(((b*=1.525)+1)*a-b):.5*((a-=2)*a*(((b*=1.525)+1)*a+b)+2)},swingFrom:function(a){var b=1.70158;return a*a*((b+1)*a-b)},swingTo:function(a){var b=1.70158;return(a-=1)*a*((b+1)*a+b)+1},bounce:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},bouncePast:function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?2-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?2-(7.5625*(a-=2.25/2.75)*a+.9375):2-(7.5625*(a-=2.625/2.75)*a+.984375)},easeFromTo:function(a){return 1>(a/=.5)?.5*Math.pow(a,4):-.5*((a-=2)*Math.pow(a,3)-2)},easeFrom:function(a){return Math.pow(a,4)},easeTo:function(a){return Math.pow(a,.25)}})}(),function(){function a(a,b,c,d,e,f){function g(a){return((n*a+o)*a+p)*a}function h(a){return((q*a+r)*a+s)*a}function i(a){return(3*n*a+2*o)*a+p}function j(a){return 1/(200*a)}function k(a,b){return h(m(a,b))}function l(a){return a>=0?a:0-a}function m(a,b){var c,d,e,f,h,j;for(e=a,j=0;8>j;j++){if(f=g(e)-a,b>l(f))return e;if(h=i(e),1e-6>l(h))break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),b>l(f-a))return e;a>f?c=e:d=e,e=.5*(d-c)+c}return e}var n=0,o=0,p=0,q=0,r=0,s=0;return p=3*b,o=3*(d-b)-p,n=1-p-o,s=3*c,r=3*(e-c)-s,q=1-s-r,k(a,j(f))}function c(b,c,d,e){return function(f){return a(f,b,c,d,e,1)}}b.setBezierFunction=function(a,d,e,f,g){var h=c(d,e,f,g);return h.displayName=a,h.x1=d,h.y1=e,h.x2=f,h.y2=g,b.prototype.formula[a]=h},b.unsetBezierFunction=function(a){delete b.prototype.formula[a]}}(),function(){function a(a,c,d,e,f,g){return b.tweenProps(e,c,a,d,1,g,f)}var c=new b;c._filterArgs=[],b.interpolate=function(d,e,f,g,h){var i=b.shallowCopy({},d),j=h||0,k=b.composeEasingObject(d,g||"linear");c.set({});var l=c._filterArgs;l.length=0,l[0]=i,l[1]=d,l[2]=e,l[3]=k,b.applyFilter(c,"tweenCreated"),b.applyFilter(c,"beforeTween");var m=a(d,i,e,f,k,j);return b.applyFilter(c,"afterTween"),m}}(),function(a){function b(a,b){var c,d=[],e=a.length;for(c=0;e>c;c++)d.push("_"+b+"_"+c);return d}function c(a){var b=a.match(v);return b?(1===b.length||a[0].match(u))&&b.unshift(""):b=["",""],b.join(A)}function d(b){a.each(b,function(a){var c=b[a];"string"==typeof c&&c.match(z)&&(b[a]=e(c))})}function e(a){return i(z,a,f)}function f(a){var b=g(a);return"rgb("+b[0]+","+b[1]+","+b[2]+")"}function g(a){return a=a.replace(/#/,""),3===a.length&&(a=a.split(""),a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]),B[0]=h(a.substr(0,2)),B[1]=h(a.substr(2,2)),B[2]=h(a.substr(4,2)),B}function h(a){return parseInt(a,16)}function i(a,b,c){var d=b.match(a),e=b.replace(a,A);if(d)for(var f,g=d.length,h=0;g>h;h++)f=d.shift(),e=e.replace(A,c(f));return e}function j(a){return i(x,a,k)}function k(a){for(var b=a.match(w),c=b.length,d=a.match(y)[0],e=0;c>e;e++)d+=parseInt(b[e],10)+",";return d=d.slice(0,-1)+")"}function l(d){var e={};return a.each(d,function(a){var f=d[a];if("string"==typeof f){var g=r(f);e[a]={formatString:c(f),chunkNames:b(g,a)}}}),e}function m(b,c){a.each(c,function(a){for(var d=b[a],e=r(d),f=e.length,g=0;f>g;g++)b[c[a].chunkNames[g]]=+e[g];delete b[a]})}function n(b,c){a.each(c,function(a){var d=b[a],e=o(b,c[a].chunkNames),f=p(e,c[a].chunkNames);d=q(c[a].formatString,f),b[a]=j(d)})}function o(a,b){for(var c,d={},e=b.length,f=0;e>f;f++)c=b[f],d[c]=a[c],delete a[c];return d}function p(a,b){C.length=0;for(var c=b.length,d=0;c>d;d++)C.push(a[b[d]]);return C}function q(a,b){for(var c=a,d=b.length,e=0;d>e;e++)c=c.replace(A,+b[e].toFixed(4));return c}function r(a){return a.match(w)}function s(b,c){a.each(c,function(a){var d,e=c[a],f=e.chunkNames,g=f.length,h=b[a];if("string"==typeof h){var i=h.split(" "),j=i[i.length-1];for(d=0;g>d;d++)b[f[d]]=i[d]||j}else for(d=0;g>d;d++)b[f[d]]=h;delete b[a]})}function t(b,c){a.each(c,function(a){var d=c[a],e=d.chunkNames,f=e.length,g=b[e[0]],h=typeof g;if("string"===h){for(var i="",j=0;f>j;j++)i+=" "+b[e[j]],delete b[e[j]];b[a]=i.substr(1)}else b[a]=g})}var u=/(\d|\-|\.)/,v=/([^\-0-9\.]+)/g,w=/[0-9.\-]+/g,x=RegExp("rgb\\("+w.source+/,\s*/.source+w.source+/,\s*/.source+w.source+"\\)","g"),y=/^.*\(/,z=/#([0-9]|[a-f]){3,6}/gi,A="VAL",B=[],C=[];a.prototype.filter.token={tweenCreated:function(a,b,c){d(a),d(b),d(c),this._tokenData=l(a)},beforeTween:function(a,b,c,d){s(d,this._tokenData),m(a,this._tokenData),m(b,this._tokenData),m(c,this._tokenData)},afterTween:function(a,b,c,d){n(a,this._tokenData),n(b,this._tokenData),n(c,this._tokenData),t(d,this._tokenData)}}}(b)}).call(null),function(a){"function"==typeof define&&define.amd?define("jqueryNanoGallery",["jquery","ngTweenable"],a):a(jQuery,window.NGTweenable)}(function(a,b){function c(){function c(){pc.scrollTimeOut&&clearTimeout(pc.scrollTimeOut),pc.scrollTimeOut=setTimeout(function(){return pc.containerViewerDisplayed?void 0:("loadData"==pc.O.lazyBuild&&mc(pc.$E.conTnParent,pc.O.lazyBuildTreshold)&&(pc.O.lazyBuild="none",h()),-1!=pc.delayedAlbumIdx&&mc(pc.$E.conTnParent,pc.O.lazyBuildTreshold)&&T(pc.delayedAlbumIdx,pc.delayedSetLocationHash),void kb())},100)}function d(a){pc.isShiftPressed=a.shiftKey,pc.isAltPressed=a.altKey,pc.isCtrlPressed=a.ctrlKey,pc.isMetaPressed=a.metaKey}function e(){return{animationEngine:pc.aengine,t:"test"}}function f(){var a="Your browser version is not supported anymore. The image gallery cannot be displayed. <br><br>Please update to a more recent one. Download:<br>";a+='&nbsp;&nbsp;&nbsp; <a href="http://www.google.com/chrome/">Chrome</a><br>',a+='&nbsp;&nbsp;&nbsp; <a href="http://www.mozilla.com/firefox/">Firefox</a><br>',a+='&nbsp;&nbsp;&nbsp; <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx">Internet Explorer</a><br>',a+='&nbsp;&nbsp;&nbsp; <a href="http://www.apple.com/safari/download/">Safari</a>',ic(a,!1)}function g(a){for(var b=document.createElement("div"),c=0;c<a.length;++c)if("undefined"!=typeof b.style[a[c]])return a[c];return null}function h(){var a=Math.max(window.screen.width,window.screen.height);void 0!=window.devicePixelRatio&&window.devicePixelRatio>1&&(a*=window.devicePixelRatio);for(var b=0;b<pc.tn.getHE().length;b++)switch(pc.tn.getHE()[b].name){case"imageScale150":case"imageScale150Outside":case"imageScaleIn80":case"imageSlide2Up":case"imageSlide2Down":case"imageSlide2Left":case"imageSlide2Right":case"imageSlide2UpRight":case"imageSlide2UpLeft":case"imageSlide2DownRight":case"imageSlide2DownLeft":case"imageSlide2Random":pc.tn.scale=Math.max(pc.tn.scale,1.5);break;case"scale120":pc.tn.scale=Math.max(pc.tn.scale,1.2)}switch(pc.O.itemsBaseURL.length>0&&(pc.O.itemsBaseURL+="/"),pc.O.kind){case"":if(P(pc.i18nTranslations.breadcrumbHome,"","","","","album","","0","-1"),void 0!==pc.O.items&&null!==pc.O.items)A(),v(!1)||S(0,!1);else{var c=jQuery(pc.$E.base).children("a");c.length>0?(C(c),v(!1)||S(0,!1)):ic("error: no image to process.")}break;case"flickr":for(pc.O.flickrSkipOriginal||(pc.flickr.photoAvailableSizes.push(1e4),pc.flickr.photoAvailableSizesStr.push("o")),i=0;i<pc.flickr.photoAvailableSizes.length&&(pc.flickr.photoSize=i,!(a<=pc.flickr.photoAvailableSizes[i]));i++);P(pc.i18nTranslations.breadcrumbHome,"","","","","album","",pc.O.photoset.length>0?pc.O.photoset:"0","-1"),G(0,!0,-1,!1);break;case"json":P(pc.i18nTranslations.breadcrumbHome,"","","","","album","",pc.O.album.length>0?encodeURIComponent(pc.O.album):"0","-1"),D(0,!0,-1,!1);break;case"picasa":default:if(pc.O.album.length>0){var e=pc.O.album.indexOf("&authkey=");if(e>=0){var f=pc.O.album.substring(0,e),g=pc.O.album.substring(e);-1==g.indexOf("Gv1sRg")&&(g="&authkey=Gv1sRg"+g.substring(9));var h=P(pc.i18nTranslations.breadcrumbHome,"","","","","album","",f,"-1");h.customData.authkey=g}else P(pc.i18nTranslations.breadcrumbHome,"","","","","album","",pc.O.album,"-1")}else P(pc.i18nTranslations.breadcrumbHome,"","","","","album","","0","-1");M(0,!0,-1,!1)}jQuery(document).keyup(function(a){if(d(a),pc.containerViewerDisplayed)switch(a.keyCode){case 27:cc(!0);break;case 32:case 13:Rb();break;case 38:case 39:case 33:Wb();break;case 40:case 37:case 34:Yb();break;case 35:case 36:}else if(!pc.containerViewerDisplayed&&pc.curAlbumIdx>0&&pc.O.galleryEnableKeyboard)switch(a.keyCode){case 27:S(0,"false");break;case 38:case 39:case 33:U();break;case 40:case 37:case 34:V();break;case 32:case 13:case 35:case 36:}}),jQuery(window).click(d),jQuery(window).mousemove(d),pc.O.locationHash&&jQuery(window).bind("hashchange",function(){v(!0)}),pc.O.galleryFullpageButton&&(pc.$E.conNavBFullpage=pc.O.RTL?jQuery('<div class="nanoGalleryFullpage setFullPageButton"></div>').prependTo(pc.$E.conNavB):jQuery('<div class="nanoGalleryFullpage setFullPageButton"></div>').appendTo(pc.$E.conNavB),pc.$E.conNavBFullpage.on("click",function(){if(pc.$E.conNavBFullpage.hasClass("setFullPageButton")){if(pc.containerViewerDisplayed)return;for(pc.O.maxWidth>0&&jQuery(pc.$E.base).css({maxWidth:""}),pc.$E.conNavBFullpage.removeClass("setFullPageButton").addClass("removeFullPageButton"),nc("",pc.$E.base),b=0;b<pc.tn.getHE().length;b++)/scale120|imageScale150Outside|overScaleOutside|imageFlipHorizontal|imageFlipVertical/i.test(pc.tn.getHE()[b].name)&&pc.$E.base.css({overflow:"auto"});pc.$E.base.addClass("fullpage"),jQuery("body").css({overflow:"hidden"}),cb()}else{if(pc.containerViewerDisplayed)return;for(pc.$E.conNavBFullpage.removeClass("removeFullPageButton").addClass("setFullPageButton"),pc.O.maxWidth>0&&jQuery(pc.$E.base).css({maxWidth:pc.O.maxWidth}),pc.$E.base.removeClass("fullpage"),b=0;b<pc.tn.getHE().length;b++)/scale120|imageScale150Outside|overScaleOutside|imageFlipHorizontal|imageFlipVertical/i.test(pc.tn.getHE()[b].name)&&pc.$E.base.css({overflow:"visible"});k(),cb()}}))}function k(){jQuery("body").css({overflow:"visible"})}function l(a,b){jQuery(a).css({left:b})}function m(a){function b(a){if(void 0!=a&&(null!=pc.$currentTouchedThumbnail&&Kb(pc.$currentTouchedThumbnail),pc.$currentTouchedThumbnail=null,"function"!=typeof pc.O.fnThumbnailClicked||pc.O.fnThumbnailClicked(pc.I[a].$elt,pc.I[a]))){if(void 0!==pc.I[a].destinationURL&&pc.I[a].destinationURL.length>0)return void(window.location=pc.I[a].destinationURL);pc.openNoDelay=!1,"album"==pc.I[a].kind?bb(a,!1,-1,!0):Lb(a,!1)}}function c(){if(o=0,m=null,n=null,l(pc.$E.conTn[0],0),pc.containerViewerDisplayed)pc.$currentTouchedThumbnail=null,pc.openNoDelay=!1;else if(null!=pc.$currentTouchedThumbnail){if(Math.abs(r.t-kc().t)>10)return Kb(pc.$currentTouchedThumbnail),pc.$currentTouchedThumbnail=null,void(pc.openNoDelay=!1);var a=pc.$currentTouchedThumbnail,c=a.data("index");if(void 0==c)return;("l1"==pc.curNavLevel&&void 0!==pc.O.touchAnimationL1?pc.O.touchAnimationL1:pc.O.touchAnimation)&&!pc.openNoDelay?pc.O.touchAutoOpenDelay>0?(zb(),Ib(a),window.clearInterval(pc.touchAutoOpenDelayTimerID),pc.touchAutoOpenDelayTimerID=window.setInterval(function(){window.clearInterval(pc.touchAutoOpenDelayTimerID),Math.abs(r.t-kc().t)>10?(pc.openNoDelay=!1,pc.$currentTouchedThumbnail=null,Kb(a)):b(c)},pc.O.touchAutoOpenDelay)):pc.I[c].hovered?b(c):(zb(),Ib(a)):b(c)}else pc.openNoDelay=!1}function e(){if(null==n||null==m)return void c();{var a=m.x-n.x;m.y-n.y}o-=a,pc.pgMaxLinesPerPage>0&&"auto"!=pc.tn.settings.getH()&&"auto"!=pc.tn.settings.getW()&&pc.O.paginationSwipe&&Math.abs(a)>40&&Math.abs(r.t-kc().t)<=10?(pc.$currentTouchedThumbnail=null,o=0,m=null,n=null,zb(),-40>a?ob():nb()):c()}function f(a){var b={};return a.targetTouches?(b.x=a.targetTouches[0].clientX,b.y=a.targetTouches[0].clientY):(b.x=a.clientX,b.y=a.clientY),b}function g(){if(k){if(pc.pgMaxLinesPerPage>0&&"auto"!=pc.tn.settings.getH()&&"auto"!=pc.tn.settings.getW()){var a=m.x-n.x;l(j,o-a)}k=!1}}function h(a){if(!pc.containerViewerDisplayed){var b=a.target||a.srcElement;jQuery(b).hasClass("nanoGalleryThumbnailContainer")&&Ib(jQuery(b))}}function i(a){var b=a.target||a.srcElement;jQuery(b).hasClass("nanoGalleryThumbnailContainer")&&Kb(jQuery(b))}var j=a,k=!1,m=null,n=null,o=0,p=!1,q=null,r=0;if(this.handleGestureStartNoDelay=function(a){var b=jQuery(a.target).get(0).tagName.toUpperCase();if(pc.containerViewerDisplayed||"A"==b||"INPUT"==b||jQuery(a.target).hasClass("customEventHandler")){if(jQuery(a.target).hasClass("ngChekbox")){var c=jQuery(a.target).parent().data("index");void 0!=c&&wb(pc.I[c],void 0,!1)}return a.stopPropagation(),!1}d(a),(new Date).getTime()-pc.timeLastTouchStart<400&&pc.O.itemsSelectable!==!0||(pc.openNoDelay=!0,this.handleGestureStart(a))}.bind(this),this.handleGestureStart=function(a){var b=jQuery(a.target).get(0).tagName.toUpperCase();if(pc.containerViewerDisplayed||"A"==b||"INPUT"==b||jQuery(a.target).hasClass("customEventHandler"))return a.stopPropagation(),!1;if(!((new Date).getTime()-pc.timeImgChanged<400&&pc.O.itemsSelectable!==!0||(new Date).getTime()-pc.timeLastTouchStart<400&&pc.O.itemsSelectable!==!0)){pc.timeLastTouchStart=(new Date).getTime();for(var c=a.target||a.srcElement,d=!1;c!=pc.$E.conTn[0];)jQuery(c).hasClass("nanoGalleryThumbnailContainer")&&(null==pc.$currentTouchedThumbnail||pc.$currentTouchedThumbnail.is(jQuery(c))||zb(),pc.$currentTouchedThumbnail=jQuery(c),d=!0),c=c.parentNode;if(d){if(pc.O.itemsSelectable===!0){if(pc.isShiftPressed||pc.isCtrlPressed||pc.isMetaPressed||"input"===a.target.nodeName.toLowerCase())return wb(pc.I[pc.$currentTouchedThumbnail.data("index")]),!1;if(pc.selectMode===!0)return wb(pc.I[pc.$currentTouchedThumbnail.data("index")]),!1;if(pc.I[pc.$currentTouchedThumbnail.data("index")].kind===pc.selectMode)return wb(pc.I[pc.$currentTouchedThumbnail.data("index")]),!1;var e=pc.$currentTouchedThumbnail.data("index");pc.touchSelectTO=setTimeout(function(){wb(pc.I[e])},500)}r=kc(),m=f(a),initialOffsetTop=kc().t,window.navigator.msPointerEnabled?(document.addEventListener("MSPointerMove",this.handleGestureMove,!0),document.addEventListener("MSPointerUp",this.handleGestureEnd,!0)):(document.addEventListener("touchmove",this.handleGestureMove,!0),document.addEventListener("touchend",this.handleGestureEnd,!0),document.addEventListener("touchcancel",this.handleGestureEnd,!0),document.addEventListener("mousemove",this.handleGestureMove,!0),document.addEventListener("mouseup",this.handleGestureEnd,!0)),pc.$E.base.addClass("unselectable").find("*").attr("draggable","false").attr("unselectable","on"),pc.gallerySwipeInitDone=!0}}}.bind(this),this.handleGestureMove=function(a){n=f(a),k||pc.O.paginationSwipe&&pc.pgMaxLinesPerPage>0&&"auto"!=pc.tn.settings.getH()&&"auto"!=pc.tn.settings.getW()&&(Math.abs(m.x-n.x)>15||p)&&(a.preventDefault(),p=!0,k=!0,window.requestAnimationFrame(g))}.bind(this),this.handleGestureEnd=function(a){if(a.cancelable&&a.preventDefault(),a.stopPropagation(),k=!1,p=!1,window.navigator.msPointerEnabled?(document.removeEventListener("MSPointerMove",this.handleGestureMove,!0),document.removeEventListener("MSPointerUp",this.handleGestureEnd,!0)):(document.removeEventListener("touchmove",this.handleGestureMove,!0),document.removeEventListener("touchend",this.handleGestureEnd,!0),document.removeEventListener("touchcancel",this.handleGestureEnd,!0),document.removeEventListener("mousemove",this.handleGestureMove,!0),document.removeEventListener("mouseup",this.handleGestureEnd,!0)),pc.O.itemsSelectable===!0){if((new Date).getTime()-pc.timeLastTouchStart>500)return!1;clearTimeout(pc.touchSelectTO)}pc.$E.base.addClass("unselectable").find("*").attr("draggable","true").attr("unselectable","off"),e(),m=null,n=null,o=0,p=!1,q=null}.bind(this),window.navigator.msPointerEnabled)j.addEventListener("MSPointerDown",this.handleGestureStartNoDelay,!0);else if(j.addEventListener("touchstart",this.handleGestureStart,!0),!pc.isIOS){var s=this;j.addEventListener("mousedown",function(a){2!=a.button&&s.handleGestureStartNoDelay(a)},!0)}j.addEventListener("mouseenter",h,!0),j.addEventListener("mouseleave",i,!0)}function o(){"fancybox"==pc.O.viewer&&"undefined"==typeof jQuery.fancybox&&(pc.O.viewer="internal",jc("Fancybox could not be found. Fallback to internal viewer. Please check the files included in the HTML page.")),("CBRISBOIS@GMAIL.COM"==pc.O.userID.toUpperCase()||"111186676244625461692"==pc.O.userID)&&(""==pc.O.blackList||"SCRAPBOOK|PROFIL"==pc.O.blackList.toUpperCase())&&(pc.O.blackList="profil|scrapbook|forhomepage"),""!=pc.O.blackList&&(pc.blackList=pc.O.blackList.toUpperCase().split("|")),""!=pc.O.whiteList&&(pc.whiteList=pc.O.whiteList.toUpperCase().split("|")),""!=pc.O.albumList&&(pc.albumList=pc.O.albumList.toUpperCase().split("|")),("picasa"==pc.O.kind||"flickr"==pc.O.kind||"json"==pc.O.kind)&&(pc.O.displayBreadcrumb=!0),void 0!==pc.O.photoset?pc.O.photoset.length>0&&(pc.O.displayBreadcrumb=!1):pc.O.photoset="",void 0!==pc.O.album?pc.O.album.length>0&&(pc.O.displayBreadcrumb=!1):pc.O.album="",pc.O.maxWidth>0&&(jQuery(pc.$E.base).css({maxWidth:pc.O.maxWidth}),jQuery(pc.$E.base).css({"margin-left":"auto"}),jQuery(pc.$E.base).css({"margin-right":"auto"})),"number"==rc(pc.O.slideshowDelay)&&pc.O.slideshowDelay>=2e3?pc.slideshowDelay=pc.O.slideshowDelay:jc('Parameter "slideshowDelay" must be an integer >= 2000 ms.'),"number"==rc(pc.O.thumbnailDisplayInterval)&&pc.O.thumbnailDisplayInterval>=0?pc.tn.displayInterval=pc.O.thumbnailDisplayInterval:jc('Parameter "thumbnailDisplayInterval" must be an integer.'),"number"==rc(pc.O.thumbnailLazyLoadTreshold)&&pc.O.thumbnailLazyLoadTreshold>=0?pc.tn.lazyLoadTreshold=pc.O.thumbnailLazyLoadTreshold:jc('Parameter "thumbnailLazyLoadTreshold" must be an integer.'),"number"==rc(pc.O.paginationMaxLinesPerPage)&&pc.O.paginationMaxLinesPerPage>=0?pc.pgMaxLinesPerPage=pc.O.paginationMaxLinesPerPage:jc('Parameter "paginationMaxLinesPerPage" must be an integer.'),void 0!==pc.O.thumbnailSizeSM&&(pc.O.breakpointSizeSM=pc.O.thumbnailSizeSM),void 0!==pc.O.thumbnailSizeME&&(pc.O.breakpointSizeME=pc.O.thumbnailSizeME),void 0!==pc.O.thumbnailSizeLA&&(pc.O.breakpointSizeLA=pc.O.thumbnailSizeLA),void 0!==pc.O.thumbnailSizeXL&&(pc.O.breakpointSizeXL=pc.O.thumbnailSizeXL);var a=pc.O.albumSorting.toUpperCase();0==a.indexOf("RANDOM")&&a.length>6&&(n=parseInt(a.substring(6)),n>0&&(pc.maxAlbums=n),pc.O.albumSorting="random");var b=pc.O.photoSorting.toUpperCase();0==b.indexOf("RANDOM")&&b.length>6&&(n=parseInt(b.substring(6)),n>0&&(pc.maxPhotos=n),pc.O.photoSorting="random");var c=parseInt(pc.O.albumMax);c>0&&(pc.maxAlbums=n);var d=pc.O.thumbnailL1HoverEffect;if(void 0!==d)switch(rc(d)){case"string":for(var e=d.split(","),f=0;f<e.length;f++)if("none"!=e[f]&&t(e[f])){var g=s();g.name=e[f],pc.tnL1HE.push(g)}break;case"object":if("none"!=d.name&&t(d.name)){var g=s();pc.tnL1HE.push(jQuery.extend(g,d))}break;case"array":for(var f=0;f<d.length;f++)if("none"!=d[f].name&&t(d[f].name)){var g=s();pc.tnL1HE.push(jQuery.extend(g,d[f]))}break;case"null":break;default:ic('incorrect parameter for "thumbnailL1HoverEffect".')}var h=pc.O.thumbnailHoverEffect;switch(rc(h)){case"string":for(var e=h.split(","),f=0;f<e.length;f++)if("none"!=e[f]&&t(e[f])){var g=s();g.name=e[f],pc.tnHE.push(g)}break;case"object":if("none"!=h.name&&t(h.name)){var g=s();pc.tnHE.push(jQuery.extend(g,h))}break;case"array":for(var f=0;f<h.length;f++)if("none"!=h[f].name&&t(h[f].name)){var g=s();pc.tnHE.push(jQuery.extend(g,h[f]))}break;case"null":break;default:ic('incorrect parameter for "thumbnailHoverEffect".')}if(0==pc.tnHE.length&&(0==pc.tnL1HE.length&&(pc.O.touchAnimationL1=!1),pc.O.touchAnimation=!1),pc.curWidth=q(),"number"==rc(pc.O.thumbnailWidth))p("width","l1",pc.O.thumbnailWidth,"u"),p("width","lN",pc.O.thumbnailWidth,"u");else{var i=pc.O.thumbnailWidth.split(" "),j="auto";"auto"!=i[0].substring(0,4)&&(j=parseInt(i[0]));var k="u";"C"==i[0].charAt(i[0].length-1)&&(k="c"),p("width","l1",j,k),p("width","lN",j,k);for(var f=1;f<i.length;f++){var l=i[f].substring(0,2).toLowerCase();if(/xs|sm|me|la|xl/i.test(l)){var m=i[f].substring(2),j="auto";"auto"!=m.substring(0,4)&&(j=parseInt(m));var k="u";"C"==m.charAt(m.length-1)&&(k="c"),pc.tn.settings.width.l1[l]=j,pc.tn.settings.width.lN[l]=j,pc.tn.settings.width.l1[l+"c"]=k,pc.tn.settings.width.lN[l+"c"]=k}}}if(void 0!=pc.O.thumbnailL1Width)if("number"==rc(pc.O.thumbnailL1Width))p("width","l1",pc.O.thumbnailL1Width,"u");else{var i=pc.O.thumbnailL1Width.split(" "),j="auto";"auto"!=i[0].substring(0,4)&&(j=parseInt(i[0]));var k="u";"C"==i[0].charAt(i[0].length-1)&&(k="c"),p("width","l1",j,k);for(var f=1;f<i.length;f++){var l=i[f].substring(0,2).toLowerCase();if(/xs|sm|me|la|xl/i.test(l)){var m=i[f].substring(2),j="auto";"auto"!=m.substring(0,4)&&(j=parseInt(m));var k="u";"C"==m.charAt(m.length-1)&&(k="c"),pc.tn.settings.width.l1[l]=j,pc.tn.settings.width.l1[l+"c"]=k}}}if("number"==rc(pc.O.thumbnailHeight))p("height","l1",pc.O.thumbnailHeight,"u"),p("height","lN",pc.O.thumbnailHeight,"u");else{var i=pc.O.thumbnailHeight.split(" "),j="auto";"auto"!=i[0].substring(0,4)&&(j=parseInt(i[0]));var k="u";"C"==i[0].charAt(i[0].length-1)&&(k="c"),p("height","l1",j,k),p("height","lN",j,k);for(var f=1;f<i.length;f++){var l=i[f].substring(0,2).toLowerCase();if(/xs|sm|me|la|xl/i.test(l)){var m=i[f].substring(2),j="auto";"auto"!=m.substring(0,4)&&(j=parseInt(m));var k="u";"C"==m.charAt(m.length-1)&&(k="c"),pc.tn.settings.height.l1[l]=j,pc.tn.settings.height.lN[l]=j,pc.tn.settings.height.l1[l+"c"]=k,pc.tn.settings.height.lN[l+"c"]=k}}}if(void 0!=pc.O.thumbnailL1Height)if("number"==rc(pc.O.thumbnailL1Height))p("height","l1",pc.O.thumbnailL1Height,"u");else{var i=pc.O.thumbnailL1Height.split(" "),j="auto";"auto"!=i[0].substring(0,4)&&(j=parseInt(i[0]));var k="u";"C"==i[0].charAt(i[0].length-1)&&(k="c"),p("height","l1",j,k);for(var f=1;f<i.length;f++){var l=i[f].substring(0,2).toLowerCase();if(/xs|sm|me|la|xl/i.test(l)){var m=i[f].substring(2),j="auto";"auto"!=m.substring(0,4)&&(j=parseInt(m));var k="u";"C"==m.charAt(m.length-1)&&(k="c"),pc.tn.settings.height.l1[l]=j,pc.tn.settings.height.l1[l+"c"]=k}}}}function p(a,b,c,d){pc.tn.settings[a][b].xs=c,pc.tn.settings[a][b].sm=c,pc.tn.settings[a][b].me=c,pc.tn.settings[a][b].la=c,pc.tn.settings[a][b].xl=c,pc.tn.settings[a][b].xsc=d,pc.tn.settings[a][b].smc=d,pc.tn.settings[a][b].mec=d,pc.tn.settings[a][b].lac=d,pc.tn.settings[a][b].xlc=d}function q(){var a=kc().w;return pc.O.breakpointSizeSM>0&&a<pc.O.breakpointSizeSM?"xs":pc.O.breakpointSizeME>0&&a<pc.O.breakpointSizeME?"sm":pc.O.breakpointSizeLA>0&&a<pc.O.breakpointSizeLA?"me":pc.O.breakpointSizeXL>0&&a<pc.O.breakpointSizeXL?"la":"xl"}function r(){var a=Math.max(kc().w,kc().h);return pc.O.breakpointSizeSM>0&&a<pc.O.breakpointSizeSM?"xs":pc.O.breakpointSizeME>0&&a<pc.O.breakpointSizeME?"sm":pc.O.breakpointSizeLA>0&&a<pc.O.breakpointSizeLA?"me":pc.O.breakpointSizeXL>0&&a<pc.O.breakpointSizeXL?"la":"xl"}function s(){var a={delay:0,delayBack:0,duration:400,durationBack:200,easing:"swing",easingBack:"swing",animParam:null};return"animate"!=pc.aengine&&(a.easing="ease",a.easingBack="ease"),a}function t(a){var b=/labelOpacity50|borderLighter|borderDarker/i.test(a),c=/imageFlipVertical|imageFlipHorizontal|imageRotateCornerBR|imageRotateCornerBL|rotateCornerBL|rotateCornerBR|imageScale150|overScale|overScaleOutside|imageScaleIn80|imageScale150Outside|scale120|scaleLabelOverImage|slideUp|slideDown|slideLeft|slideRight|imageSlideUp|imageSlideDown|imageSlideLeft|imageSlideRight|labelAppear|labelAppear75|descriptionAppear|labelSlideDown|labelSlideUp|labelSlideUpTop|imageInvisible|imageOpacity50|descriptionSlideUp|labelSplitVert|labelSplit4|labelAppearSplitVert|labelAppearSplit4|imageSplitVert|imageSplit4/i.test(a),d=/imageExplode/i.test(a);return pc.O.touchAutoOpenDelay=parseInt(pc.O.touchAutoOpenDelay),0==pc.O.touchAutoOpenDelay&&(pc.O.touchAutoOpenDelay=1e3),b||c||d?"onBottom"!=pc.O.thumbnailLabel.get("position")||/borderLighter|borderDarker|imageOpacity50|imageScale150|imageScaleIn80|imageSlide2Up|imageSlide2Down|imageSlide2Left|imageSlide2Right|imageSlide2Random|imageSlide2UpRight|imageSlide2UpLeft|imageSlide2DownRight|imageSlide2DownLeft|imageScale150Outside|scale120/i.test(a)?!d||"animate"!=pc.aengine&&null!=pc.CSStransformName?!0:(jc('Parameter thumbnailHoverEffect="'+a+'" requires one of the additionals jQuery plugins "Velocity" or "Transit".'),!1):(ic('The parameter combination thumbnailHoverEffect="'+a+'" and thumbnailLabel.position="onBottom" is not supported.'),!1):(ic('Unknow parameter value: thumbnailHoverEffect="'+a+'".'),!1)}function u(){pc.i18nLang=(navigator.language||navigator.userLanguage).toUpperCase(),"UNDEFINED"===pc.i18nLang&&(pc.i18nLang="");var a=-("_"+pc.i18nLang).length;if("object"==rc(pc.O.i18n))for(var b in pc.O.i18n){var c=b.substr(a);c=="_"+pc.i18nLang?pc.i18nTranslations[b.substr(0,b.length-c.length)]=pc.O.i18n[b]:pc.i18nTranslations[b]=pc.O.i18n[b]}}function v(a){if(""!=pc.O.openOnStart){var b=pc.O.openOnStart;return pc.O.openOnStart="",w(!1,b,!0)}if(!pc.O.locationHash)return!1;var c="#nanogallery/"+pc.baseEltID+"/",d=location.hash;if(d!=pc.lastLocationHash){if(""==d&&-1!=pc.lastOpenAlbumID)return pc.lastLocationHash="",bb(0,!1,-1,!1),!0;if(0==d.indexOf(c)){var b=d.substring(c.length);return w(a,b,!a)}}}function w(a,b,c){var d=null,e=null,f=b.indexOf("/"),g=-1,h=-1,i=pc.I.length;if(f>0){d=b.substring(0,f),e=b.substring(f+1);for(var j=0;i>j;j++)if("image"==pc.I[j].kind&&pc.I[j].GetID()==e){h=j;break}}else d=b;for(var j=0;i>j;j++)if("album"==pc.I[j].kind&&pc.I[j].GetID()==d){g=j;break}return null!==e?(c&&(pc.albumIdxToOpenOnViewerClose=g),""==pc.O.kind?Lb(h):-1==h?(pc.O.viewerFullscreen&&ngscreenfull.request(),bb(g,!1,e,a)):Lb(h),!0):(bb(g,!1,-1,a),!0)}function x(){pc.I=[],pc.curNavLevel="lN";var a="";pc.O.thumbnailLabel.get("displayDescription")&&(a="d");var b=P("dummydummydummy",pc.emptyGif,pc.emptyGif,a,"","image","","1","0"),c=tb(b,0,!1).e$;pc.tn.borderWidth=c.outerWidth(!0)-c.width(),pc.tn.borderHeight=c.outerHeight(!0)-c.height(),pc.tn.imgcBorderWidth=c.find(".imgContainer").outerWidth(!0)-c.find(".imgContainer").width(),pc.tn.imgcBorderHeight=c.find(".imgContainer").outerHeight(!0)-c.find(".imgContainer").height(),pc.tn.labelBorderHeight=c.find(".labelImage").outerHeight(!0)-c.find(".labelImage").height(),pc.tn.labelBorderWidth=c.find(".labelImage").outerWidth(!0)-c.find(".labelImage").width(),"onBottom"==pc.O.thumbnailLabel.get("position")&&(pc.tn.labelHeight.lN=c.find(".labelImage").outerHeight(!0),pc.tn.labelHeight.l1=pc.tn.labelHeight.lN);
for(var d=["xs","sm","me","la","xl"],e=0;e<d.length;e++)f=pc.tn.settings.width.lN[d[e]],"auto"!=f?(pc.tn.outerWidth.lN[d[e]]=f+pc.tn.borderWidth+pc.tn.imgcBorderWidth,pc.tn.outerWidth.l1[d[e]]=f+pc.tn.borderWidth+pc.tn.imgcBorderWidth):(pc.tn.outerWidth.lN[d[e]]=0,pc.tn.outerWidth.l1[d[e]]=0);for(var e=0;e<d.length;e++)g=pc.tn.settings.height.lN[d[e]],"auto"!=g?(pc.tn.outerHeight.lN[d[e]]=g+pc.tn.borderHeight+pc.tn.imgcBorderHeight+pc.tn.labelHeight.get(),pc.tn.outerHeight.l1[d[e]]=g+pc.tn.borderHeight+pc.tn.imgcBorderHeight+pc.tn.labelHeight.get()):(pc.tn.outerHeight.lN[d[e]]=0,pc.tn.outerHeight.l1[d[e]]=0);pc.I=[],pc.curNavLevel="l1",a="",pc.O.thumbnailLabel.get("displayDescription")&&(a="d"),b=P("dummydummydummy",pc.emptyGif,pc.emptyGif,a,"","image","","1","0"),c=tb(b,0,!1).e$,pc.tn.borderWidth=c.outerWidth(!0)-c.width(),pc.tn.borderHeight=c.outerHeight(!0)-c.height(),pc.tn.imgcBorderWidth=c.find(".imgContainer").outerWidth(!0)-c.find(".imgContainer").width(),pc.tn.imgcBorderHeight=c.find(".imgContainer").outerHeight(!0)-c.find(".imgContainer").height(),pc.tn.labelBorderHeight=c.find(".labelImage").outerHeight(!0)-c.find(".labelImage").height(),pc.tn.labelBorderWidth=c.find(".labelImage").outerWidth(!0)-c.find(".labelImage").width(),"onBottom"==pc.O.thumbnailLabel.get("position")&&(pc.tn.labelHeight.l1=c.find(".labelImage").outerHeight(!0));for(var d=["xs","sm","me","la","xl"],e=0;e<d.length;e++){var f=pc.tn.settings.width.l1[d[e]];pc.tn.outerWidth.l1[d[e]]="auto"!=f?f+pc.tn.borderWidth+pc.tn.imgcBorderWidth:0}for(var e=0;e<d.length;e++){var g=pc.tn.settings.height.l1[d[e]];pc.tn.outerHeight.l1[d[e]]="auto"!=g?g+pc.tn.borderHeight+pc.tn.imgcBorderHeight+pc.tn.labelHeight.get():0}pc.pgMaxNbThumbnailsPerRow=fb(),pc.custGlobals.oldBorderColor=c.css("border-color-top"),(""==pc.custGlobals.oldBorderColor||null==pc.custGlobals.oldBorderColor||void 0==pc.custGlobals.oldBorderColor)&&(pc.custGlobals.oldBorderColor="#000"),pc.custGlobals.oldLabelOpacity=c.find(".labelImage").css("opacity");var h=jQuery.Color(c.find(".labelImage"),"backgroundColor");if("transparent"==h?(pc.custGlobals.oldLabelRed=0,pc.custGlobals.oldLabelGreen=0,pc.custGlobals.oldLabelBlue=0):(pc.custGlobals.oldLabelRed=h.red(),pc.custGlobals.oldLabelGreen=h.green(),pc.custGlobals.oldLabelBlue=h.blue()),pc.I=[],pc.O.thumbnailLabel.display)switch(pc.O.thumbnailLabel.position){case"onBottom":pc.tn.styleLabelImage="top:0; position:relative; left:0; right:0;",pc.tn.styleL1LabelImage="top:0; position:relative; left:0; right:0;","auto"==pc.tn.settings.getH()?(pc.tn.styleFTitle="white-space:normal;",pc.tn.styleL1FTitle="white-space:normal;",pc.tn.styleITitle="white-space:normal;",pc.tn.styleL1ITitle="white-space:normal;",pc.tn.styleDesc="white-space:normal;",pc.tn.styleL1Desc="white-space:normal;"):(pc.tn.styleFTitle="white-space:nowrap;",pc.tn.styleL1FTitle="white-space:nowrap;",pc.tn.styleITitle="white-space:nowrap;",pc.tn.styleL1ITitle="white-space:nowrap;",pc.tn.styleDesc="white-space:nowrap;",pc.tn.styleL1Desc="white-space:nowrap;");break;case"overImageOnTop":pc.tn.styleLabelImage="top:0; bottom:0; left:0; right:0;",pc.tn.styleL1LabelImage="top:0; bottom:0; left:0; right:0;";break;case"overImageOnMiddle":pc.tn.styleLabelImage="top:0; bottom:0; left:0; right:0;",pc.tn.styleL1LabelImage="top:0; bottom:0; left:0; right:0;",pc.tn.styleFTitle="left:0; right:0; position:absolute; bottom:50%;",pc.tn.styleL1FTitle="left:0; right:0; position:absolute; bottom:50%;",pc.tn.styleITitle="left:0; right:0; position:absolute; bottom:50%;",pc.tn.styleL1ITitle="left:0; right:0; position:absolute; bottom:50%;",pc.tn.styleDesc="left:0; right:0; position:absolute; top:50%;",pc.tn.styleL1Desc="left:0; right:0; position:absolute; top:50%;";break;case"custom":break;case"overImageOnBottom":default:pc.O.thumbnailLabel.position="overImageOnBottom",pc.tn.styleLabelImage="bottom:0; left:0; right:0;",pc.tn.styleL1LabelImage="bottom:0; left:0; right:0;"}if(pc.O.thumbnailL1Label&&pc.O.thumbnailL1Label.display)switch(pc.O.thumbnailL1Label.position){case"onBottom":pc.tn.styleL1LabelImage="top:0; position:relative; left:0; right:0;","auto"==pc.tn.settings.getH()?(pc.tn.styleL1FTitle="white-space:normal;",pc.tn.styleL1ITitle="white-space:normal;",pc.tn.styleL1Desc="white-space:normal;"):(pc.tn.styleL1FTitle="white-space:nowrap;",pc.tn.styleL1ITitle="white-space:nowrap;",pc.tn.styleL1Desc="white-space:nowrap;");break;case"overImageOnTop":pc.tn.styleL1LabelImage="top:0; bottom:0; left:0; right:0;";break;case"overImageOnMiddle":pc.tn.styleL1LabelImage="top:0; bottom:0; left:0; right:0;",pc.tn.styleL1FTitle="left:0; right:0; position:absolute; bottom:50%;",pc.tn.styleL1ITitle="left:0; right:0; position:absolute; bottom:50%;",pc.tn.styleL1Desc="left:0; right:0; position:absolute; top:50%;";break;case"custom":pc.tn.styleL1LabelImage="";break;case"overImageOnBottom":default:pc.O.thumbnailL1Label.position="overImageOnBottom",pc.tn.styleL1LabelImage="bottom:0; left:0; right:0;"}}function y(a,b){var c="";return c=""!=pc.i18nLang&&void 0!==a[b+"_"+pc.i18nLang]&&a[b+"_"+pc.i18nLang].length>0?a[b+"_"+pc.i18nLang]:a[b]}function z(a){if("%filename"==pc.O.thumbnailLabel.get("title"))return a.split("/").pop().replace("_"," ");if("%filenameNoExt"==pc.O.thumbnailLabel.get("title")){var b=a.split("/").pop();return b.split(".").shift().replace("_"," ")}return a}function A(){var a=!1;"undefined"!=typeof pc.O.dataSorting&&("random"==pc.O.dataSorting?pc.O.items=oc(pc.O.items):"reversed"==pc.O.dataSorting&&(pc.O.items=pc.O.items.reverse())),jQuery.each(pc.O.items,function(b,c){var d="";d=y(c,"title"),void 0===d&&(d="");var e=pc.O.itemsBaseURL;e+=void 0!==c["src"+r().toUpperCase()]?c["src"+r().toUpperCase()]:c.src;var f="";f=void 0!==c.srct&&c.srct.length>0?pc.O.itemsBaseURL+c.srct:e;var g="";g=void 0!==c.srct2x&&c.srct2x.length>0?pc.O.itemsBaseURL+c.srct2x:""!=f?f:e,""!=pc.O.thumbnailLabel.get("title")&&(d=z(e));var h="";h=y(c,"description"),void 0===h&&(h="");var i="";void 0!==c.destURL&&c.destURL.length>0&&(i=c.destURL);var j=y(c,"tags");void 0===j&&(j="");var k=0;void 0!==c.albumID&&(k=c.albumID,a=!0);var l=null;void 0!==c.ID&&(l=c.ID);var m="image";void 0!==c.kind&&c.kind.length>0&&(m=c.kind);var n=P(d,f,e,h,i,m,j,l,k),o=0;void 0!==c.imgtWidth&&c.imgtWidth>0&&(o=c.imgtWidth);var p=0;void 0!==c.imgtHeight&&c.imgtHeight>0&&(p=c.imgtHeight),n.thumbs={url:{l1:{xs:f,sm:f,me:f,la:f,xl:f},lN:{xs:f,sm:f,me:f,la:f,xl:f}},width:{l1:{xs:o,sm:o,me:o,la:o,xl:o},lN:{xs:o,sm:o,me:o,la:o,xl:o}},height:{l1:{xs:p,sm:p,me:p,la:p,xl:p},lN:{xs:p,sm:p,me:p,la:p,xl:p}}},null!==c.customData&&(n.customData=B(c.customData)),"function"==typeof pc.O.fnProcessData&&pc.O.fnProcessData(n,"api",null)}),a&&(pc.O.displayBreadcrumb=!0);for(var b=pc.I.length,c=0,d=0,e=0;b>e;e++){c=0,d=0;for(var f=0;b>f;f++)e!=f&&pc.I[e].GetID()==pc.I[f].albumID&&(c++,"image"==pc.I[f].kind&&(pc.I[f].imageNumber=d++));pc.I[e].contentLength=c}}function B(a){if(null===a||"object"!=typeof a)return a;var b=a.constructor();for(var c in a)b[c]=B(a[c]);return b}function C(a){var b=!1;"undefined"!=typeof pc.O.dataSorting&&("random"==pc.O.dataSorting?a=oc(a):"reversed"==pc.O.dataSorting&&(jQuery.fn.reverse=[].reverse,a=a.reverse())),jQuery.each(a,function(a,c){var d="";void 0!==jQuery(c).attr("data-ngthumb")&&jQuery(c).attr("data-ngthumb").length>0&&(d=pc.O.itemsBaseURL+jQuery(c).attr("data-ngthumb")),void 0!==jQuery(c).attr("data-ngThumb")&&jQuery(c).attr("data-ngThumb").length>0&&(d=pc.O.itemsBaseURL+jQuery(c).attr("data-ngThumb"));var e="";void 0!==jQuery(c).attr("data-ngthumb2x")&&jQuery(c).attr("data-ngthumb2x").length>0&&(e=pc.O.itemsBaseURL+jQuery(c).attr("data-ngthumb2x")),void 0!==jQuery(c).attr("data-ngThumb2x")&&jQuery(c).attr("data-ngThumb2x").length>0&&(e=pc.O.itemsBaseURL+jQuery(c).attr("data-ngThumb2x"));var f="",g=r().toUpperCase();void 0!==jQuery(c).attr("data-ngsrc"+g)&&jQuery(c).attr("data-ngsrc"+g).length>0&&(f=pc.O.itemsBaseURL+jQuery(c).attr("data-ngsrc"+g)),void 0!==jQuery(c).attr("data-ngSrc"+g)&&jQuery(c).attr("data-ngSrc"+g).length>0&&(f=pc.O.itemsBaseURL+jQuery(c).attr("data-ngSrc"+g)),""==f&&(f=pc.O.itemsBaseURL+jQuery(c).attr("href"));var h="";void 0!==jQuery(c).attr("data-ngdesc")&&jQuery(c).attr("data-ngdesc").length>0&&(h=jQuery(c).attr("data-ngdesc")),void 0!==jQuery(c).attr("data-ngDesc")&&jQuery(c).attr("data-ngDesc").length>0&&(h=jQuery(c).attr("data-ngDesc"));var i="";void 0!==jQuery(c).attr("data-ngdest")&&jQuery(c).attr("data-ngdest").length>0&&(i=jQuery(c).attr("data-ngdest")),void 0!==jQuery(c).attr("data-ngDest")&&jQuery(c).attr("data-ngDest").length>0&&(i=jQuery(c).attr("data-ngDest"));var j=0;void 0!==jQuery(c).attr("data-ngalbumid")&&(j=jQuery(c).attr("data-ngalbumid"),b=!0),void 0!==jQuery(c).attr("data-ngAlbumID")&&(j=jQuery(c).attr("data-ngAlbumID"),b=!0);var k=null;void 0!==jQuery(c).attr("data-ngid")&&(k=jQuery(c).attr("data-ngid")),void 0!==jQuery(c).attr("data-ngID")&&(k=jQuery(c).attr("data-ngID"));var l="image";void 0!==jQuery(c).attr("data-ngkind")&&jQuery(c).attr("data-ngkind").length>0&&(l=jQuery(c).attr("data-ngkind")),void 0!==jQuery(c).attr("data-ngKind")&&jQuery(c).attr("data-ngKind").length>0&&(l=jQuery(c).attr("data-ngKind"));var m=jQuery(c).text();""!=pc.O.thumbnailLabel.get("title")&&void 0!=pc.O.thumbnailLabel.get("title")&&(m=z(f));var n=P(m,d,f,h,i,l,"",k,j),o=0;void 0!==jQuery(c).attr("data-ngthumbImgWidth")&&jQuery(c).attr("data-ngthumbImgWidth").length>0&&(o=jQuery(c).attr("data-ngthumbImgWidth"));var p=0;void 0!==jQuery(c).attr("data-ngthumbImgHeight")&&jQuery(c).attr("data-ngthumbImgHeight").length>0&&(p=jQuery(c).attr("data-ngthumbImgHeight")),n.thumbs={url:{l1:{xs:d,sm:d,me:d,la:d,xl:d},lN:{xs:d,sm:d,me:d,la:d,xl:d}},width:{l1:{xs:o,sm:o,me:o,la:o,xl:o},lN:{xs:o,sm:o,me:o,la:o,xl:o}},height:{l1:{xs:p,sm:p,me:p,la:p,xl:p},lN:{xs:p,sm:p,me:p,la:p,xl:p}}},void 0!==jQuery(c).data("customdata")&&(n.customData=B(jQuery(c).data("customdata"))),"function"==typeof pc.O.fnProcessData&&pc.O.fnProcessData(n,"markup",null)}),jQuery.each(a,function(a,b){jQuery(b).remove()}),b&&(pc.O.displayBreadcrumb=!0);for(var c=pc.I.length,d=0,e=0,f=0;c>f;f++){d=0,e=0;for(var g=0;c>g;g++)f!=g&&pc.I[f].GetID()==pc.I[g].albumID&&(d++,"image"==pc.I[g].kind&&(pc.I[g].imageNumber=e++));pc.I[f].contentLength=d}}function D(a,b,c,d){if($(a),pc.I[a].contentIsLoaded)return void S(a,d);var e=pc.O.jsonProvider+"?albumID="+encodeURIComponent(pc.I[a].GetID());_(),jQuery.ajaxSetup({cache:!1}),jQuery.support.cors=!0;var f=setTimeout(function(){ab(),ic("Could not retrieve Custom data...")},6e4);jQuery.getJSON(e,function(e){if(clearTimeout(f),ab(),F(a,e),b||""!=pc.O.openOnStart)v(!1)||S(a,d);else if(-1!=c){for(var g=-1,h=pc.I.length,i=0;h>i;i++)if("image"==pc.I[i].kind&&pc.I[i].GetID()==c){g=i;break}Lb(g,!0)}else S(a,d)}).fail(function(a,b,c){clearTimeout(f),ab();var d=b+", "+c;ic("Could not retrieve JSON items list (jQuery): "+d)})}function E(a){return decodeURIComponent(a)}function F(a,b){var c=!1,d=0;jQuery.each(b,function(a,b){var e="";e=y(b,"title"),void 0===e&&(e="");var f=pc.O.jsonProvider.substring(0,pc.O.jsonProvider.indexOf("nanoPhotosProvider.php")),g=f+E(b.src),h=f+E(b.srct);""!=pc.O.thumbnailLabel.get("title")&&(e=z(b.src)),e=e.replaceAll("_"," "),0==e.search(/@@\d\d\d\d/)&&(e=e.substring(6),e=e.replace(/^\s*|\s*$/,""));var i="";i=y(b,"description"),void 0===i&&(i=""),i=i.replaceAll("_"," ");var j="",k="image";void 0!==b.kind&&b.kind.length>0&&(k=b.kind);var l=null;void 0!==b.ID&&(l=b.ID);var m=!0;if("album"==k&&(R(e,l)||(m=!1)),m){var n=0;void 0!==b.albumID&&(n=b.albumID,c=!0);var o=P(e,h,g,i,j,k,"",l,n),p=b.imgtWidth,q=b.imgtHeight;if(o.thumbs={url:{l1:{xs:h,sm:h,me:h,la:h,xl:h},lN:{xs:h,sm:h,me:h,la:h,xl:h}},width:{l1:{xs:p,sm:p,me:p,la:p,xl:p},lN:{xs:p,sm:p,me:p,la:p,xl:p}},height:{l1:{xs:q,sm:q,me:q,la:q,xl:q},lN:{xs:q,sm:q,me:q,la:q,xl:q}}},"function"==typeof pc.O.fnProcessData&&pc.O.fnProcessData(o,"api",null),"image"==k&&(o.imageNumber=d,d++,d>=pc.maxAlbums))return!1}}),pc.I[a].contentIsLoaded=!0,pc.I[a].contentLength=d}function G(a,b,c,d){if($(a),pc.I[a].contentIsLoaded)return void S(a,d);var e="",f="album";0==pc.I[a].GetID()?e=pc.flickr.url()+"?&method=flickr.photosets.getList&api_key="+pc.flickr.ApiKey+"&user_id="+pc.O.userID+"&per_page=500&primary_photo_extras=url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json&jsoncallback=?":(e="none"==pc.I[a].GetID()?pc.flickr.url()+"?&method=flickr.people.getPublicPhotos&api_key="+pc.flickr.ApiKey+"&user_id="+pc.O.userID+"&extras=description,views,url_o,url_sq,url_t,url_q,url_s,url_m,url_z,url_b,url_h,url_k&per_page=500&format=json&jsoncallback=?":pc.flickr.url()+"?&method=flickr.photosets.getPhotos&api_key="+pc.flickr.ApiKey+"&photoset_id="+pc.I[a].GetID()+"&extras=description,views,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json&jsoncallback=?",f="image"),_(),jQuery.ajaxSetup({cache:!1}),jQuery.support.cors=!0;var g=setTimeout(function(){ab(),ic("Could not retrieve Flickr data...")},6e4);jQuery.getJSON(e,function(e){if(clearTimeout(g),ab(),"album"==f?H(a,e):K(a,e),b||""!=pc.O.openOnStart)v(!1)||S(a,d);else if(-1!=c){for(var h=-1,i=pc.I.length,j=0;i>j;j++)if("image"==pc.I[j].kind&&pc.I[j].GetID()==c){h=j;break}Lb(h,!0)}else S(a,d)}).fail(function(a,b,c){clearTimeout(g),ab();var d=b+", "+c;ic("Could not retrieve Flickr photoset list (jQuery): "+d)})}function H(a,b){var c=!0;if(void 0!==b.stat&&"fail"===b.stat&&(ic("Could not retrieve Flickr photoset list: "+b.message+" (code: "+b.code+")."),c=!1),c){var d=0,e=b.photosets.photoset;switch(pc.O.albumSorting){case"random":e=oc(e);break;case"reversed":e=e.reverse();break;case"titleAsc":e.sort(function(a,b){var c=a.title._content.toUpperCase(),d=b.title._content.toUpperCase();return d>c?-1:c>d?1:0});break;case"titleDesc":e.sort(function(a,b){var c=a.title._content.toUpperCase(),d=b.title._content.toUpperCase();return c>d?-1:d>c?1:0})}jQuery.each(e,function(b,c){if(itemTitle=c.title._content,R(itemTitle,c.id)){itemID=c.id,itemDescription="",void 0!=c.description._content&&(itemDescription=c.description._content);var e={};for(var f in c.primary_photo_extras)e[f]=c.primary_photo_extras[f];tags="",void 0!==c.primary_photo_extras&&void 0!==c.primary_photo_extras.tags&&(tags=c.primary_photo_extras.tags);var g=P(itemTitle,"","",itemDescription,"","album",tags,itemID,pc.I[a].GetID());g.contentLength=c.photos,g.thumbSizes=e;var h={url:{l1:{xs:"",sm:"",me:"",la:"",xl:""},lN:{xs:"",sm:"",me:"",la:"",xl:""}},width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}}};if(h=I(h,c.primary_photo_extras,"l1"),h=I(h,c.primary_photo_extras,"lN"),g.thumbs=h,d++,d>=pc.maxAlbums)return!1}}),pc.I[a].contentIsLoaded=!0,pc.I[a].contentLength=d}}function I(a,b,c){for(var d=["xs","sm","me","la","xl"],e=0;e<d.length;e++)if("auto"==pc.tn.settings.width[c][d[e]]){var f="height_",g=Math.ceil(pc.tn.settings.height[c][d[e]]*pc.tn.scale),h=J(f,g,b);a.url[c][d[e]]=h.url,a.width[c][d[e]]=h.width,a.height[c][d[e]]=h.height}else if("auto"==pc.tn.settings.height[c][d[e]]){var f="width_",g=Math.ceil(pc.tn.settings.width[c][d[e]]*pc.tn.scale),h=J(f,g,b);a.url[c][d[e]]=h.url,a.width[c][d[e]]=h.width,a.height[c][d[e]]=h.height}else{var f="height_",g=Math.ceil(pc.tn.settings.height[c][d[e]]*pc.tn.scale);pc.tn.settings.width[c][d[e]]>pc.tn.settings.height[c][d[e]]&&(f="width_",g=Math.ceil(pc.tn.settings.width[c][d[e]]*pc.tn.scale));var h=J(f,g,b);a.url[c][d[e]]=h.url,a.width[c][d[e]]=h.width,a.height[c][d[e]]=h.height}return a}function J(a,b,c){for(var d={url:"",width:0,height:0},e=0,f=0;f<pc.flickr.thumbAvailableSizes.length;f++){var g=c[a+pc.flickr.photoAvailableSizesStr[f]];if(void 0!=g&&(e=f,g>=b))break}var h=pc.flickr.photoAvailableSizesStr[e];return d.url=c["url_"+h],d.width=parseInt(c["width_"+h]),d.height=parseInt(c["height_"+h]),d}function K(a,b){var c="";switch(c="none"==pc.I[a].GetID()?b.photos.photo:b.photoset.photo,pc.O.photoSorting){case"random":c=oc(c);break;case"reversed":c=c.reverse();break;case"titleAsc":c.sort(function(a,b){var c="",d="";return""!=pc.O.thumbnailLabel.get("title")?(c=z(a.url_sq),d=z(b.url_sq)):(c=a.title.toUpperCase(),d=b.title.toUpperCase()),d>c?-1:c>d?1:0});break;case"titleDesc":c.sort(function(a,b){var c="",d="";return""!=pc.O.thumbnailLabel.get("title")?(c=z(a.url_sq),d=z(b.url_sq)):(c=a.title.toUpperCase(),d=b.title.toUpperCase()),c>d?-1:d>c?1:0})}var d=pc.I[a].GetID(),e=0;jQuery.each(c,function(a,b){for(var c=b.title,f=b.id,g=b.description._content,h=b.url_sq,a=pc.flickr.photoSize;a>=0;a--)if(void 0!=b["url_"+pc.flickr.photoAvailableSizesStr[a]]){h=b["url_"+pc.flickr.photoAvailableSizesStr[a]];break}var i={};for(var j in b)(0==j.indexOf("height_")||0==j.indexOf("width_")||0==j.indexOf("url_"))&&(i[j]=b[j]);""!=pc.O.thumbnailLabel.get("title")&&(c=z(h));var k=P(c,"",h,g,"","image","",f,d);k.imageNumber=e,void 0!==b.url_o?(k.width=b.width_o,k.height=b.height_o):(k.width=b.width_z,k.height=b.height_z);var l={url:{l1:{xs:"",sm:"",me:"",la:"",xl:""},lN:{xs:"",sm:"",me:"",la:"",xl:""}},width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}}};return l=I(l,b,"l1"),l=I(l,b,"lN"),k.thumbs=l,e++,e>=pc.maxPhotos?!1:void 0}),pc.I[a].contentIsLoaded=!0,pc.I[a].contentLength=e}function L(a,b,c,d,e){var f=Math.ceil(c*pc.tn.scale)+e;return"auto"==b?f=Math.ceil(c*pc.tn.scale)+e:"auto"==c?f=Math.ceil(b*pc.tn.scale)+d:b>c&&(f=Math.ceil(b*pc.tn.scale)+d),a.length>0&&(a+=","),a+=f}function M(a,b,c,d){if($(a),pc.I[a].contentIsLoaded)return void S(a,d);var e="",f="album",g="";if(g=L(g,pc.tn.settings.width.l1.xs,pc.tn.settings.height.l1.xs,pc.tn.settings.width.l1.xsc,pc.tn.settings.height.l1.xsc),g=L(g,pc.tn.settings.width.l1.sm,pc.tn.settings.height.l1.sm,pc.tn.settings.width.l1.smc,pc.tn.settings.height.l1.smc),g=L(g,pc.tn.settings.width.l1.me,pc.tn.settings.height.l1.me,pc.tn.settings.width.l1.mec,pc.tn.settings.height.l1.mec),g=L(g,pc.tn.settings.width.l1.la,pc.tn.settings.height.l1.la,pc.tn.settings.width.l1.lac,pc.tn.settings.height.l1.lac),g=L(g,pc.tn.settings.width.l1.xl,pc.tn.settings.height.l1.xl,pc.tn.settings.width.l1.xlc,pc.tn.settings.height.l1.xlc),g=L(g,pc.tn.settings.width.lN.xs,pc.tn.settings.height.lN.xs,pc.tn.settings.width.lN.xsc,pc.tn.settings.height.lN.xsc),g=L(g,pc.tn.settings.width.lN.sm,pc.tn.settings.height.lN.sm,pc.tn.settings.width.lN.smc,pc.tn.settings.height.lN.smc),g=L(g,pc.tn.settings.width.lN.me,pc.tn.settings.height.lN.me,pc.tn.settings.width.lN.mec,pc.tn.settings.height.lN.mec),g=L(g,pc.tn.settings.width.lN.la,pc.tn.settings.height.lN.la,pc.tn.settings.width.lN.lac,pc.tn.settings.height.lN.lac),g=L(g,pc.tn.settings.width.lN.xl,pc.tn.settings.height.lN.xl,pc.tn.settings.width.lN.xlc,pc.tn.settings.height.lN.xlc),0==pc.I[a].GetID())e=pc.picasa.url()+"user/"+pc.O.userID+"?alt=json&kind=album&thumbsize="+g+"&rnd="+(new Date).getTime();else{var h="";"undefined"!=typeof pc.I[a].customData.authkey&&(h=pc.I[a].customData.authkey),e=pc.picasa.url()+"user/"+pc.O.userID+"/albumid/"+pc.I[a].GetID()+"?alt=json&kind=photo"+h+"&thumbsize="+g+"&imgmax=d",f="image"}_(),jQuery.ajaxSetup({cache:!1}),jQuery.support.cors=!0;var i=setTimeout(function(){ab(),ic("Could not retrieve Picasa/Google+ data...")},6e4),j=function(e){if(clearTimeout(i),ab(),N(a,e,f),b||""!=pc.O.openOnStart)v(!1)||S(a,d);else if(-1!=c){for(var g=-1,h=pc.I.length,j=0;h>j;j++)if("image"==pc.I[j].kind&&pc.I[j].GetID()==c){g=j;break}Lb(g,!0)}else S(a,d)},k=null,l=function(a,b){jQuery.getJSON(a+"&start-index="+b,"callback=?",function(b){null===k?k=b:k.feed.entry=k.feed.entry.concat(b.feed.entry),b.feed.openSearch$startIndex.$t+b.feed.openSearch$itemsPerPage.$t>=b.feed.openSearch$totalResults.$t?j(k):l(a,b.feed.openSearch$startIndex.$t+b.feed.openSearch$itemsPerPage.$t)}).fail(function(b,c,d){clearTimeout(i),ab();var e="";for(var f in b)e+=f+"="+b[f]+"<br>";var g=c+", "+d+" "+e+"<br><br>URL:"+a;ic("Could not retrieve Picasa/Google+ data. Error: "+g)})};l(e,1)}function N(a,b,c){var d=0,e=pc.I[a].GetID(),f=b.feed.entry,g=pc.O.albumSorting;switch("image"==c&&(g=pc.O.photoSorting),g){case"random":f=oc(f);break;case"reversed":f=f.reverse();break;case"titleAsc":f.sort(function(a,b){var d="",e="";return"image"==c?""!=pc.O.thumbnailLabel.get("title")?(d=z(unescape(unescape(unescape(unescape(a.media$group.media$content[0].url))))),e=z(unescape(unescape(unescape(unescape(b.media$group.media$content[0].url)))))):(d=a.media$group.media$description.$t.toUpperCase(),e=b.media$group.media$description.$t.toUpperCase()):(d=a.media$group.media$title.$t.toUpperCase(),e=b.media$group.media$title.$t.toUpperCase()),e>d?-1:d>e?1:0});break;case"titleDesc":f.sort(function(a,b){var d="",e="";return"image"==c?""!=pc.O.thumbnailLabel.get("title")?(d=z(unescape(unescape(unescape(unescape(a.media$group.media$content[0].url))))),e=z(unescape(unescape(unescape(unescape(b.media$group.media$content[0].url)))))):(d=a.media$group.media$description.$t.toUpperCase(),e=b.media$group.media$description.$t.toUpperCase()):(d=a.media$group.media$title.$t.toUpperCase(),e=b.media$group.media$title.$t.toUpperCase()),d>e?-1:e>d?1:0})}jQuery.each(f,function(a,b){var f=b.media$group.media$title.$t,g=b.media$group.media$thumbnail[0].url,h=b.gphoto$id.$t,i="",j=b.media$group.media$description.$t;"image"==c&&(i=f,f=j,j="");var k=b.media$group.media$content[0].url;"image"==c&&""!=pc.O.thumbnailLabel.get("title")&&(f=z(unescape(unescape(unescape(unescape(k))))));var l=!0;"album"==c&&(R(f,h)||(l=!1));var m="";if(l){var n="",o="";if("album"==c)o=h;else{o=k;var p=k.substring(0,k.lastIndexOf("/"));p=p.substring(0,p.lastIndexOf("/"))+"/",o=window.screen.width>window.screen.height?p+"w"+window.screen.width+"/"+i:p+"h"+window.screen.height+"/"+i}var q=P(f,g,o,j,"",c,m,h,e);q.picasaThumbBaseURL=n,q.imageNumber=d,"album"==c&&(q.author=b.author[0].name.$t,q.contentLength=b.gphoto$numphotos.$t);var r={url:{l1:{xs:"",sm:"",me:"",la:"",xl:""},lN:{xs:"",sm:"",me:"",la:"",xl:""}},width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}}};if(r=O("l1",0,r,b,c),r=O("lN",5,r,b,c),q.thumbs=r,"function"==typeof pc.O.fnProcessData&&pc.O.fnProcessData(q,"picasa",b),d++,d>=("album"==c?pc.maxAlbums:pc.maxPhotos))return!1}}),pc.I[a].contentIsLoaded=!0,pc.I[a].contentLength=d}function O(a,b,c,d,e){for(var f=["xs","sm","me","la","xl"],g=0;g<f.length;g++)if(c.url[a][f[g]]=d.media$group.media$thumbnail[b+g].url,"image"==e){c.width[a][f[g]]=d.media$group.media$thumbnail[b+g].width,c.height[a][f[g]]=d.media$group.media$thumbnail[b+g].height;var h=d.media$group.media$thumbnail[b+g].width,i=d.media$group.media$thumbnail[b+g].height;if("auto"==pc.tn.settings.width[a][f[g]]&&i<pc.tn.settings.height[a][f[g]]){var j=h/i;c.width[a][f[g]]=h*j,c.height[a][f[g]]=i*j;var k=c.url[a][f[g]].substring(0,c.url[a][f[g]].lastIndexOf("/"));k=k.substring(0,k.lastIndexOf("/"))+"/",c.url[a][f[g]]=k+"h"+pc.tn.settings.height[a][f[g]]+"/"}if("auto"==pc.tn.settings.height[a][f[g]]&&h<pc.tn.settings.width[a][f[g]]){var j=i/h;c.height[a][f[g]]=i*j,c.width[a][f[g]]=h*j;var k=c.url[a][f[g]].substring(0,c.url[a][f[g]].lastIndexOf("/"));k=k.substring(0,k.lastIndexOf("/"))+"/",c.url[a][f[g]]=k+"w"+pc.tn.settings.width[a][f[g]]+"/"}}else{if("auto"!=pc.tn.settings.width[a][f[g]])c.width[a][f[g]]=d.media$group.media$thumbnail[b+g].width;else{var k=c.url[a][f[g]].substring(0,c.url[a][f[g]].lastIndexOf("/"));k=k.substring(0,k.lastIndexOf("/"))+"/",c.url[a][f[g]]=k+"h"+pc.tn.settings.height[a][f[g]]+"/"}if("auto"!=pc.tn.settings.height[a][f[g]])c.height[a][f[g]]=d.media$group.media$thumbnail[b+g].height;else{var k=c.url[a][f[g]].substring(0,c.url[a][f[g]].lastIndexOf("/"));k=k.substring(0,k.lastIndexOf("/"))+"/",c.url[a][f[g]]=k+"w"+pc.tn.settings.width[a][f[g]]+"/"}}return c}function P(a,b,c,d,e,f,g,h,i){var j=Q(h),k=!1;return null===j?(j=new qc(a,h),k=!0):j.title=a,j.src=c,j.description=d,j.destinationURL=e,j.kind=f,j.albumID=i,j.ID=h,j.tags=0==g.length?null:g.split(" "),k&&(j.title=a,pc.I.push(j)),j}function Q(a){for(var b=pc.I.length,c=0;b>c;c++)if(pc.I[c].GetID()==a)return pc.I[c];return null}function R(a,b){var c=a.toUpperCase();if(b=b.toUpperCase(),null===pc.albumList){var d=!1;if(null!==pc.whiteList){for(var e=0;e<pc.whiteList.length;e++)-1!==c.indexOf(pc.whiteList[e])&&(d=!0);if(!d)return!1}if(null!==pc.blackList)for(var e=0;e<pc.blackList.length;e++)if(-1!==c.indexOf(pc.blackList[e]))return!1;return!0}for(var e=0;e<pc.albumList.length;e++)if(c==pc.albumList[e].toUpperCase()||b==pc.albumList[e])return!0}function S(a,b){"display"==pc.O.lazyBuild?mc(pc.$E.conTnParent,pc.O.lazyBuildTreshold)?T(a,b):(pc.delayedAlbumIdx=a,pc.delayedSetLocationHash=b):T(a,b)}function T(a,b){if(pc.O.lazyBuild="none",pc.delayedAlbumIdx=-1,pc.albumIdxToOpenOnViewerClose=-1,pc.O.thumbnailAlbumDisplayImage&&0!=a){for(var c=pc.I.length,d=0;c>d;d++)if(pc.I[d].albumID==pc.I[a].GetID()){Lb(d);break}}else if(pc.containerViewerDisplayed&&cc(!1),a!=pc.lastOpenAlbumID){if(pc.O.locationHash&&b){var e="nanogallery/"+pc.baseEltID+"/"+pc.I[a].GetID();pc.lastLocationHash="#"+e;try{top.location.hash=e}catch(f){pc.O.locationHash=!1}}pc.lastOpenAlbumID=pc.I[a].GetID(),$(a);var g=0;pc.I[a].paginationLastPage>0&&pc.I[a].paginationLastWidth==pc.$E.conTnParent.width()&&(g=pc.I[a].paginationLastPage),qb(a,g)}}function U(){var a=W(pc.curAlbumIdx),b=a>0;bb(a,!1,-1,b)}function V(){var a=X(pc.curAlbumIdx),b=a>0;bb(a,!1,-1,b)}function W(a){for(var b=pc.I.length,c=-1,d=a+1;b>d;d++)if(pc.I[d].albumID==pc.I[a].albumID&&"album"==pc.I[d].kind){c=d;break}if(-1==c)for(var d=0;a>=d;d++)if(pc.I[d].albumID==pc.I[a].albumID&&"album"==pc.I[d].kind){c=d;break}return c}function X(a){for(var b=(pc.I.length,-1),c=a-1;c>=0;c--)if(pc.I[c].albumID==pc.I[a].albumID&&"album"==pc.I[c].kind){b=c;break}if(-1==b)for(var c=pc.I.length-1;c>=a;c--)if(pc.I[c].albumID==pc.I[a].albumID&&"album"==pc.I[c].kind){b=c;break}return b}function Y(a){var b="folder";0==a&&(b="folderHome");var c=jQuery('<div class="'+b+' oneFolder">'+pc.I[a].title+"</div>").appendTo(pc.$E.conBC);jQuery(c).data("albumIdx",a),c.click(function(){var a=jQuery(this).data("albumIdx");jQuery(this).nextAll().remove(),bb(a,!1,-1,!0)})}function Z(a){var b=jQuery('<div class="separator'+(pc.O.RTL?"RTL":"")+'"></div>').appendTo(pc.$E.conBC);jQuery(b).data("albumIdx",a),b.click(function(){var a=jQuery(this).data("albumIdx");jQuery(this).nextAll().remove(),jQuery(this).remove(),bb(a,!1,-1,!0)})}function $(a){var c=!1;if(1==pc.O.displayBreadcrumb&&!pc.O.thumbnailAlbumDisplayImage){if(0==pc.$E.conBC.children().length&&pc.$E.conNavBCon.css({opacity:0,"max-height":"0px"}),c=!0,pc.$E.conBC.children().remove(),Y(0),0!=a){var d=pc.I.length,e=[];e.push(a);for(var f=a;0!=pc.I[f].albumID&&-1!=pc.I[f].albumID;)for(i=1;i<d;i++)if(pc.I[i].GetID()==pc.I[f].albumID){f=i,e.push(f);break}for(Z(0),i=e.length-1;i>=0;i--)Y(e[i]),i>0&&Z(e[i-1])}var g=pc.$E.conBC.children(),h=g.length;if(0==h)pc.curNavLevel="l1",pc.O.breadcrumbAutoHideTopLevel&&(pc.$E.conNavBCon.css({opacity:0,"max-height":"0px"}),c=!1);else if(pc.curNavLevel=1==h?"l1":"lN",1==h&&pc.O.breadcrumbAutoHideTopLevel){var j=new b;j.tween({from:{opacity:pc.$E.conNavBCon.css("opacity"),"max-height":pc.$E.conNavBCon.css("max-height")},to:{opacity:"0","max-height":"0px"},attachment:{$e:pc.$E.conNavBCon},duration:200,step:function(a,b){b.$e.css(a)},finish:function(a,b){b.$e.css({opacity:"0","max-height":"0px"})}})}else if(pc.O.breadcrumbAutoHideTopLevel){var j=new b;j.tween({from:{opacity:pc.$E.conNavBCon.css("opacity"),"max-height":pc.$E.conNavBCon.css("max-height")},to:{opacity:"1","max-height":"50px"},attachment:{$e:pc.$E.conNavBCon},duration:200,step:function(a,b){b.$e.css(a)},finish:function(a,b){b.$e.css({opacity:"1","max-height":"50px"})}})}else pc.$E.conNavBCon.css({opacity:1,"max-height":"50px"});pc.pgMaxNbThumbnailsPerRow=fb()}pc.O.useTags&&(c=!0,null==pc.containerTags&&(pc.containerTags=jQuery('<div class="nanoGalleryTags"></div>').appendTo(pc.$E.conNavB))),pc.O.galleryFullpageButton&&(c=!0),!pc.containerNavigationbarContDisplayed&&c&&(pc.containerNavigationbarContDisplayed=!0,pc.$E.conNavBCon.show())}function _(){pc.$E.conLoadingB.addClass("nanoGalleryLBar").removeClass("nanoGalleryLBarOff")}function ab(){pc.$E.conLoadingB.removeClass("nanoGalleryLBar").addClass("nanoGalleryLBarOff")}function bb(a,b,c,d){if(pc.O.itemsSelectable&&pc.O.keepSelection===!1){pc.selectedItems=[];for(var e=pc.I.length,f=0;e>f;f++)pc.I[f].selected=!1}switch(pc.O.kind){case"":S(a,d);break;case"flickr":G(a,b,c,d);break;case"json":D(a,b,c,d);break;case"picasa":default:M(a,b,c,d)}}function cb(){"auto"==pc.tn.settings.getH()?db():"auto"==pc.tn.settings.getW()?eb():gb(),kb(),jb(0)}function db(){var a=pc.$E.conTnParent.width(),b=0,c=0,d=0,e=[],f=fb(),g=0,h=pc.O.thumbnailGutterHeight,j=pc.tn.outerWidth.get(),k=pc.$E.conTn.find(".nanoGalleryThumbnailContainer");"justified"==pc.O.thumbnailAlignment?(f=Math.min(f,k.length),g=1==f?0:(a-f*j)/(f-1)):g=pc.O.thumbnailGutterWidth;var l=0;k.each(function(){var a=jQuery(this),i=a.data("index");if(void 0!==i){var j=0;if(0!=c)return!1;j=b*(pc.tn.outerWidth.get()+g),e[b]=pc.I[i].thumbFullHeight+h,b++,l++,b>=f&&(b=0,c++),d++}});var m=e.length*(j+g)-g;c=0,b=0,k.each(function(){var a=jQuery(this),j=a.data("index");if(void 0!==j){"onBottom"==pc.O.thumbnailLabel.get("position")&&yb(a,pc.I[j]);var k=0,l=0;if(0==c)k=b*(pc.tn.outerWidth.get()+g),e[b]=pc.I[j].thumbFullHeight+h,b++,b>=f&&(b=0,c++);else{var n=0,o=e[0];for(i=1;i<f;i++)if(e[i]+5<o){o=e[i],n=i;break}l=e[n],k=n*(pc.tn.outerWidth.get()+g),e[n]=l+pc.I[j].thumbFullHeight+h}var p=k;pc.O.RTL&&(p=m-k-pc.tn.outerWidth.get()),a.css({top:l,left:p}),hb(a,pc.I[j],d),d++}});var n=e[0];for(i=1;i<l;i++)n=Math.max(n,e[i]);pc.$E.conTn.width(m).height(n)}function eb(){var a=pc.$E.conTnParent.width(),b=0,c=0,d=0,e=[],f=0,g=[],h=!1,i=0,j=0,k=0,l=0,m=pc.O.thumbnailGutterWidth,n=pc.O.thumbnailGutterHeight,o=0,p=0,q=!1,r=!1,s=pc.$E.conTn.find(".nanoGalleryThumbnailContainer");s.each(function(){var c=jQuery(this).data("index");if(void 0!==c&&void 0!=pc.I[c]){if(!(pc.I[c].thumbImg().width>0&&pc.I[c].thumbImg().height>0))return!1;var d=pc.I[c],j=Math.floor(d.thumbImg().width/d.thumbImg().height*pc.tn.settings.getH())+pc.tn.borderWidth+pc.tn.imgcBorderWidth;if(pc.O.thumbnailFeatured&&0==i&&(j=2*j,k=j),h&&(h=!1,f++,b=0,q=!1,r=!1,1==f&&k>0&&(b=k,k=0)),d.thumbImg().height>d.thumbImg().width?q=!0:r=!0,a>b+j+m){b+=j+m,g[f]=pc.tn.settings.getH();var l=Math.max(q?o:0,r?p:0);pc.O.thumbnailAdjustLastRowHeight&&l>0&&(g[f]=Math.min(g[f],l)),e[f]=c}else{b+=j;var n=Math.floor(pc.tn.settings.getH()*a/b);g[f]=n,q&&(o=Math.max(o,n)),r&&(p=Math.max(p,n)),e[f]=c,h=!0}i++}}),f=0,d=0,c=0,i=0,s.each(function(){var b=jQuery(this),h=b.data("index");if(void 0!==h&&void 0!=pc.I[h]){if(!(pc.I[h].thumbImg().width>0&&pc.I[h].thumbImg().height>0))return!1;var k=pc.I[h],o=Math.floor(k.thumbImg().width/k.thumbImg().height*g[f]);0==i&&pc.O.thumbnailFeatured&&(o=2*o,j=1==g.length?2*parseInt(g[0]):parseInt(g[0])+parseInt(g[1])+pc.tn.borderHeight+pc.tn.imgcBorderHeight),h==e[f]&&(e.length!=f+1?o=a-c-pc.tn.borderWidth-pc.tn.imgcBorderWidth:c+o+pc.tn.borderWidth+pc.tn.imgcBorderWidth+m>a&&(o=a-c-pc.tn.borderWidth-pc.tn.imgcBorderWidth));var p=0;0==i&&pc.O.thumbnailFeatured||(p=g[f]),p=parseInt(p),o=parseInt(o),b.width(o+pc.tn.imgcBorderWidth).height(p+pc.tn.imgcBorderHeight+pc.tn.labelHeight.get()),k.$getElt(".imgContainer").height(p).width(o),b.find("img").css({"max-height":p+2,"max-width":o+2}),b.find(".subcontainer").width(o+pc.tn.imgcBorderWidth).height(p+pc.tn.imgcBorderHeight+pc.tn.labelHeight.get());var q=c;pc.O.RTL&&(q=a-c-(o+pc.tn.borderWidth+pc.tn.imgcBorderWidth)),b.css({top:d,left:q}),k.thumbFullWidth=o+pc.tn.borderWidth+pc.tn.imgcBorderWidth,k.thumbFullHeight=p+pc.tn.borderHeight+pc.tn.imgcBorderHeight+pc.tn.labelHeight.get(),Cb(b),hb(b,k,i),c+=o+pc.tn.borderWidth+pc.tn.imgcBorderWidth+m,h==e[f]&&(d+=g[f]+pc.tn.labelHeight.get()+n+pc.tn.imgcBorderHeight+pc.tn.borderHeight,f++,c=0,1==f&&l>0&&(c=l,l=0)),i++
}}),f>0&&(d-=n),j=j+pc.tn.outerHeight.get()+pc.tn.labelHeight.get(),pc.$E.conTn.width(a).height(d>j?d:j)}function fb(){var a=pc.tn.settings.getW()+pc.tn.borderWidth+pc.tn.imgcBorderWidth,b=pc.$E.conTnParent.width(),c=0;return c=Math.floor("justified"==pc.O.thumbnailAlignment?b/a:(b+pc.O.thumbnailGutterWidth)/(a+pc.O.thumbnailGutterWidth)),pc.O.maxItemsPerLine>0&&c>pc.O.maxItemsPerLine&&(c=pc.O.maxItemsPerLine),1>c&&(c=1),c}function gb(){var a=0,b=0,c=0,d=pc.O.thumbnailGutterHeight,e=pc.$E.conTnParent.width(),f=fb(),g=0,h=0,i=0,j=[],k=0;pc.L.nbMaxTnPerRow=fb();var l=new Date;if(pc.pgMaxLinesPerPage>0&&pc.tn.outerWidth.get()>0&&f!=pc.pgMaxNbThumbnailsPerRow){pc.pgMaxNbThumbnailsPerRow=f;var m=pc.$E.conPagin.data("galleryIdx");return void qb(m,0)}var n=pc.$E.conTn.find(".nanoGalleryThumbnailContainer"),o=n.length;"justified"==pc.O.thumbnailAlignment?(f=Math.min(f,o),c=1==f?0:(e-f*pc.tn.outerWidth.get())/(f-1)):c=pc.O.thumbnailGutterWidth,pc.O.RTL&&(n.each(function(){var e=jQuery(this),g=e.data("index");if(void 0!==g){if(0!=b)return!1;a=k*(pc.tn.outerWidth.get()+c),j[k]=a,i=a,k++,k>=f&&(k=0,b+=pc.tn.outerHeight.get()+d)}}),e=i+pc.tn.outerWidth.get(),b=0,k=0);var p=[],q=0;n.each(function(){var l=jQuery(this),m=l.data("index");if(void 0!==m){q=m,0==b?(a=k*(pc.tn.outerWidth.get()+c),j[k]=a,i=a):(a=j[k],h=b);var n=a;pc.O.RTL&&(n=parseInt(e)-a-pc.tn.outerWidth.get()),p.push({$e:l,t:b,l:n,item:pc.I[m]}),k++,k>=f&&(k=0,b+=pc.tn.outerHeight.get()+d),g++}});for(var r=p.length,h=0,s=0;r>s;s++)p[s].$e.css({top:p[s].t,left:p[s].l}),hb(p[s].$e,p[s].item,s),h=p[s].t;p=[],pc.$E.conTn.width(i+pc.tn.outerWidth.get()).height(h+pc.tn.outerHeight.get()),pc.O.debugMode&&console.log("ResizeGalleryGrid: "+(new Date-l))}function hb(a,b,c){a.hasClass("nanogalleryHideElement")&&(a.removeClass("nanogalleryHideElement"),pc.O.thumbnailDisplayTransition?"function"==typeof pc.O.fnThumbnailDisplayEffect?pc.O.fnThumbnailDisplayEffect(a,b,0):setTimeout(function(){window.requestAnimationFrame(function(){ib(a)})},c*pc.tn.displayInterval):a.css({opacity:1}))}function ib(a){var c=new b;c.tween({from:{o:0},to:{o:1},duration:200,step:function(b){a.css({opacity:b.o})},finish:function(b){a.css({opacity:b.o})}})}function jb(){if(pc.O.galleryToolbarWidthAligned&&void 0!==pc.$E.conNavBCon){var a=pc.$E.conTn.outerWidth(!0);pc.$E.conNavBCon.width(pc.$E.conNavBCon.width()<a?a:a)}}function kb(){var a=pc.$E.conTn.find(".nanoGalleryThumbnailContainer").filter(function(){return lc(jQuery(this),pc.tn.lazyLoadTreshold)});jQuery(a).each(function(){var a=jQuery(this).find("img");if(a.attr("src")==pc.emptyGif){var b=jQuery(this).data("index");if(void 0==b||void 0==pc.I[b])return;a.attr("src",""),a.attr("src",pc.I[b].thumbImg().src)}})}function lb(b,c){if(void 0!=pc.$E.conPagin){if(pc.$E.conPagin.children().remove(),0==pc.pgMaxLinesPerPage||"auto"==pc.tn.settings.getH()||"auto"==pc.tn.settings.getW())return void pc.$E.conPagin.hide();pc.$E.conPagin.show(),pc.$E.conPagin.data("galleryIdx",b),pc.$E.conPagin.data("currentPageNumber",c);var d=0,e=0;if(!pc.O.paginationDots&&c>0){var f=jQuery('<div class="paginationPrev">'+(pc.O.paginationDots?"":pc.i18nTranslations.paginationPrevious)+"</div>").appendTo(pc.$E.conPagin);e+=jQuery(f).outerWidth(!0),f.click(function(){ob()})}var g=0;pc.pgMaxLinesPerPage>0&&"auto"!=pc.tn.settings.getH()&&"auto"!=pc.tn.settings.getW()&&(d=Math.ceil(pc.I[b].contentLength/(pc.pgMaxLinesPerPage*pc.pgMaxNbThumbnailsPerRow)));var h=d;if(!pc.O.paginationDots){var i=pc.O.paginationVisiblePages;i>=d?g=0:(mb(i)?(g=c-(i-1)/2,h=c+(i-1)/2):(g=c-i/2,h=c+Math.max(i/2-1,1)),h>=d&&(g=d-i),0>g&&(g=0))}if(1==d)return void pc.$E.conPagin.hide();for(var j=g;d>j;j++){var k="";j==c&&(k=" currentPage");var l=jQuery('<div class="paginationItem'+k+'">'+(pc.O.paginationDots?"":j+1)+"</div>").appendTo(pc.$E.conPagin);if(l.data("pageNumber",j),e+=l.outerWidth(!0),l.click(function(){var b=pc.$E.conPagin.data("galleryIdx"),c=jQuery(this).data("pageNumber");mc(pc.$E.base,0)||a("html, body").animate({scrollTop:pc.$E.base.offset().top},200),qb(b,c)}),j-g>=i-1)break}if(!pc.O.paginationDots&&d>c+1){var m=jQuery('<div class="paginationNext">'+(pc.O.paginationDots?"":pc.i18nTranslations.paginationNext)+"</div>").appendTo(pc.$E.conPagin);e+=m.outerWidth(!0),m.click(function(){nb()})}pc.$E.conPagin.width(e)}}function mb(a){return a%2==1}function nb(){var b=pc.$E.conPagin.data("galleryIdx"),c=0;pc.pgMaxLinesPerPage>0&&(c=pc.I[b].contentLength/(pc.pgMaxLinesPerPage*pc.pgMaxNbThumbnailsPerRow)),n2=Math.ceil(c);var d=pc.$E.conPagin.data("currentPageNumber");d<n2-1?d++:d=0,mc(pc.$E.base,0)||a("html, body").animate({scrollTop:pc.$E.base.offset().top},200),qb(b,d)}function ob(){var b=pc.$E.conPagin.data("galleryIdx"),c=0;pc.pgMaxLinesPerPage>0&&(c=pc.I[b].contentLength/(pc.pgMaxLinesPerPage*pc.pgMaxNbThumbnailsPerRow)),n2=Math.ceil(c);var d=pc.$E.conPagin.data("currentPageNumber");d>0?d--:d=n2-1,mc(pc.$E.base,0)||a("html, body").animate({scrollTop:pc.$E.base.offset().top},250),qb(b,d)}function pb(a){var b=pc.I.length,c=0,d=a||pc.GetCurrentViewedItemIdx();if(-1!==d){for(var e=0;b>e;e++)pc.I[e].albumID==pc.I[d].albumID&&"image"==pc.I[e].kind&&c++;return c}return 0}function qb(a,c){pc.curAlbumIdx=-1,void 0==pc.$E.conPagin&&pc.$E.conPagin.children().remove();var d=pc.$E.conTn.parent(),e=new b;e.tween({to:{opacity:0},from:{opacity:1},attachment:{$e:d},duration:150,step:function(a,b){b.$e.css(a)},finish:function(b,d){d.$e.css({opacity:0}),pc.containerThumbnailsDisplayed=!1,pc.$E.conTn.hide(0).off().show(0).html("");for(var e=pc.I.length,f=0;e>f;f++)pc.I[f].$Elts=[],pc.I[f].$elt=null,pc.I[f].hoverInitDone=!1,pc.I[f].hovered=!1;pc.$E.conTnParent.css({left:0,opacity:1}),l(pc.$E.conTn[0],0),rb(a,c,sb)}})}function rb(a,b,c){if(pc.O.debugMode&&console.timeline&&console.timeline("nanoGALLERY"),pc.startDateTime=new Date,-1!=a&&void 0!=pc.I[a]){pc.I[a].paginationLastPage=b,pc.I[a].paginationLastWidth=pc.$E.conTnParent.width();var d=pc.I.length,e=!1;pc.galleryItemsCount=0;var f=0,g=0,h=0;pc.pgMaxLinesPerPage>0&&"auto"!=pc.tn.settings.getH()&&"auto"!=pc.tn.settings.getW()&&(g=b*pc.pgMaxLinesPerPage*pc.pgMaxNbThumbnailsPerRow,h=g+pc.pgMaxLinesPerPage*pc.pgMaxNbThumbnailsPerRow),ab();var i=!1,j=!1,k=0;!function(){pc.toRender=[];for(var h=0;h<pc.O.galleryRenderStep;h++){if(k>=d)return void c(a,b);var l=pc.I[k];if(l.albumID==pc.I[a].GetID()){if(f++,pc.pgMaxLinesPerPage>0&&"auto"!=pc.tn.settings.getH()&&"auto"!=pc.tn.settings.getW()&&pc.galleryItemsCount+1>pc.pgMaxLinesPerPage*pc.pgMaxNbThumbnailsPerRow)return void c(a,b);if(f>g){pc.galleryItemsCount++;var m=tb(l,k,e),n=m.e$;pc.O.thumbnailLazyLoad&&!m.cIS&&(i||(lc(n,pc.tn.lazyLoadTreshold)?(l.$getElt("img").attr("src",""),l.$getElt("img").attr("src",l.thumbImg().src),j=!0):j&&(i=!0)))}}k++}var o=pc.toRender.length;if(o>0)for(var h=0;o>h;h++);d>k?setTimeout(arguments.callee,2):c(a,b)}()}}function sb(a,b){cb(),lb(a,b),pc.containerThumbnailsDisplayed=!0,pc.curAlbumIdx=a,"function"==typeof pc.O.fnInitGallery&&pc.O.fnInitGallery(a,b),pc.O.debugMode&&console.timeline&&(console.log("End-render: "+(new Date-pc.startDateTime)),console.timelineEnd("nanoGALLERY")),pc.SetSelectMode()}function tb(a,b,c){var d=[],f=0;a.$Elts=[];var g="",h=" nanogalleryHideElement";pc.O.thumbnailLazyLoad&&"auto"==pc.tn.settings.getW()&&(g="top:0px;left:0px;"),d[f++]='<div class="nanoGalleryThumbnailContainer'+h+' nGEvent" style="display:block;opacity:0;'+g+'" data-originalid="'+a.ID+'" ><div class="subcontainer nGEvent" style="display:block;">';var i=!1,j=pc.emptyGif;("auto"==pc.tn.settings.getH()&&0==pc.I[b].thumbImg().height||"auto"==pc.tn.settings.getW()&&0==pc.I[b].thumbImg().width)&&(i=!0),(!pc.O.thumbnailLazyLoad||i)&&(j=a.thumbImg().src);var k=ub(a),l=vb(a);if(d[f++]="auto"==pc.tn.settings.getH()?'<div class="imgContainer nGEvent" style="width:'+pc.tn.settings.getW()+'px;"><img class="image nGEvent" src="'+j+'" alt="'+k+'" style="max-width:'+pc.tn.settings.getW()+'px;"></div>':"auto"==pc.tn.settings.getW()?'<div class="imgContainer nGEvent" style="height:'+pc.tn.settings.getH()+'px;"><img class="image nGEvent" src="'+j+'" alt="'+k+'" style="max-height:'+pc.tn.settings.getH()+'px;" ></div>':'<div class="imgContainer nGEvent" style="width:'+pc.tn.settings.getW()+"px;height:"+pc.tn.settings.getH()+'px;"><img class="image nGEvent" src="'+j+'" alt="'+k+'" style="max-width:'+pc.tn.settings.getW()+"px;max-height:"+pc.tn.settings.getH()+'px;" ></div>',"album"==a.kind){if(1==pc.O.thumbnailLabel.get("display")){if(a.contentLength>0)switch(pc.O.thumbnailLabel.get("itemsCount")){case"title":k+=" "+pc.i18nTranslations.thumbnailLabelItemsCountPart1+'<span class="nGEvent">'+a.contentLength+"</span>"+pc.i18nTranslations.thumbnailLabelItemsCountPart2;break;case"description":l+=" "+pc.i18nTranslations.thumbnailLabelItemsCountPart1+'<span class="nGEvent">'+a.contentLength+"</span>"+pc.i18nTranslations.thumbnailLabelItemsCountPart2}d[f++]='<div class="labelImage nGEvent" style="width:'+pc.tn.settings.getW()+"px;"+(pc.O.RTL?"direction:RTL;":"")+("l1"==pc.curNavLevel?pc.tn.styleL1LabelImage:pc.tn.styleLabelImage)+'"><div class="labelFolderTitle labelTitle nGEvent" style="'+("l1"==pc.curNavLevel?pc.tn.styleL1FTitle:pc.tn.styleFTitle)+'">'+k+'</div><div class="labelDescription nGEvent" style="'+("l1"==pc.curNavLevel?pc.tn.styleL1Desc:pc.tn.styleDesc)+'">'+l+"</div></div>"}}else 1==pc.O.thumbnailLabel.get("display")&&(c&&0==l.length&&"onBottom"==pc.O.thumbnailLabel.get("position")&&(l="&nbsp;"),d[f++]='<div class="labelImage nGEvent" style="width:'+pc.tn.settings.getW()+"px;"+(pc.O.RTL?"direction:RTL;":"")+("l1"==pc.curNavLevel?pc.tn.styleL1LabelImage:pc.tn.styleLabelImage)+'"><div class="labelImageTitle labelTitle nGEvent" style="'+("l1"==pc.curNavLevel?pc.tn.styleL1ITitle:pc.tn.styleITitle)+'">'+k+'</div><div class="labelDescription nGEvent" style="'+("l1"==pc.curNavLevel?pc.tn.styleL1Desc:pc.tn.styleDesc)+'">'+l+"</div></div>");if(d[f++]="</div>",pc.O.itemsSelectable){if(a.selected=!1,pc.O.keepSelection===!0)for(it in pc.selectedItems)pc.selectedItems[it].GetID()===a.GetID()&&(a.selected=!0);pc.O.showCheckboxes&&(checked="",a.selected&&(checked="checked"),d[f++]='<input class="ngChekbox" type="checkbox" '+checked+' style="position:absolute;z-index:999;'+pc.O.checkboxStyle+'">')}d[f++]="</div>";var m=jQuery(d.join("")).appendTo(pc.$E.conTnHid);"undefined"!=typeof a.selected&&a.selected===!0&&m.find(".subcontainer").addClass("selected"),a.$elt=m,m.data("index",b),a.$getElt("img").data("index",b),"function"==typeof pc.O.fnThumbnailInit&&pc.O.fnThumbnailInit(m,a,e());var n=m.detach();if(n.appendTo(pc.$E.conTn),i){var o=ngimagesLoaded(m);o.on("always",function(a){var b=pc.I[jQuery(a.images[0].img).data("index")];if(void 0!=b&&a.images[0].img.src!=pc.emptyGif){var c=!1;b.thumbImg().height!=a.images[0].img.naturalHeight&&(b.thumbSetImgHeight(a.images[0].img.naturalHeight),b.thumbSetImgWidth(a.images[0].img.naturalWidth),c=!0),b.thumbImg().width!=a.images[0].img.naturalWidth&&(b.thumbSetImgHeight(a.images[0].img.naturalHeight),b.thumbSetImgWidth(a.images[0].img.naturalWidth),c=!0),c&&(Ab(b.$elt),yb(b.$elt,b),Cb(b.$elt),cb())}})}else Ab(m),yb(m,a),Cb(m);return{e$:m,cIS:i}}function ub(a){var b=a.title;return 1==pc.O.thumbnailLabel.get("display")&&((void 0===b||0==b.length)&&(b="&nbsp;"),""!=pc.i18nTranslations.thumbnailImageTitle&&(b=pc.i18nTranslations.thumbnailImageTitle),pc.O.thumbnailLabel.get("titleMaxLength")>3&&b.length>pc.O.thumbnailLabel.get("titleMaxLength")&&(b=b.substring(0,pc.O.thumbnailLabel.get("titleMaxLength"))+"...")),b}function vb(a){var b="";return 1==pc.O.thumbnailLabel.get("displayDescription")&&(b="album"==a.kind?""!=pc.i18nTranslations.thumbnailImageDescription?pc.i18nTranslations.thumbnailAlbumDescription:a.description:""!=pc.i18nTranslations.thumbnailImageDescription?pc.i18nTranslations.thumbnailImageDescription:a.description,pc.O.thumbnailLabel.get("descriptionMaxLength")>3&&b.length>pc.O.thumbnailLabel.get("descriptionMaxLength")&&(b=b.substring(0,pc.O.thumbnailLabel.get("descriptionMaxLength"))+"...")),b}function wb(a,b,c){var d=a.$elt,e=d.find("input[type=checkbox]");"image"!==pc.selectMode&&"album"!==pc.selectMode||a.kind===pc.selectMode?(a.selected="undefined"==typeof b?!a.selected:b,c!==!1&&e.prop("checked",a.selected),a.selected?a.$getElt(".subcontainer").addClass("selected"):a.$getElt(".subcontainer").removeClass("selected")):(a.selected=!1,e.prop("checked",!1),a.$getElt(".subcontainer").removeClass("selected")),xb(),"function"==typeof pc.O.fnThumbnailSelection&&pc.O.fnThumbnailSelection(d,a)}function xb(){var a;pc.O.keepSelection===!0&&(a=pc.selectedItems.slice(0)),pc.selectedItems=[];for(var b=pc.I.length,c=0;b>c;c++)pc.I[c].selected===!0&&pc.selectedItems.push(pc.I[c]);if(pc.O.keepSelection===!0){for(c in a){alreadyExists=!1;for(var d=0;b>d;d++)pc.I[d].GetID()===a[c].GetID()&&(alreadyExists=!0);alreadyExists===!1&&pc.selectedItems.push(a[c])}a=[]}pc.selectedItems.length>0||1==pc.selectModeForce?(pc.I.forEach(function(a){null===a.$elt||a.$elt.hasClass("selectable")||(1==pc.selectModeForce&&a.kind===pc.selectMode||1==pc.selectMode)&&a.$elt.addClass("selectable")}),pc.selectMode!==!0&&"image"!==pc.selectMode&&"album"!==pc.selectMode&&(pc.selectMode=!0)):(pc.I.forEach(function(a){null!==a.$elt&&a.$elt.removeClass("selectable")}),pc.selectMode=!1),"function"==typeof pc.O.fnChangeSelectMode&&pc.O.fnChangeSelectMode(pc.selectMode)}function yb(a,b){if("auto"==pc.tn.settings.getH()){if(b.thumbImg().height>0){var c=b.thumbImg().height/b.thumbImg().width;b.$getElt(".imgContainer").height(pc.tn.settings.getW()*c),"onBottom"==pc.O.thumbnailLabel.get("position")?(b.thumbLabelHeight=b.$getElt(".labelImage").outerHeight(!0),b.thumbFullHeight=pc.tn.settings.getW()*c+b.thumbLabelHeight+pc.tn.borderHeight+pc.tn.imgcBorderHeight,a.width(pc.tn.outerWidth.get()-pc.tn.borderWidth).height(b.thumbFullHeight-pc.tn.borderHeight),b.$getElt(".labelImage").css({position:"absolute",top:"",bottom:"0px"})):(b.thumbFullHeight=pc.tn.settings.getW()*c+b.thumbLabelHeight+pc.tn.borderHeight+pc.tn.imgcBorderHeight,a.width(pc.tn.outerWidth.get()-pc.tn.borderWidth).height(b.thumbFullHeight-pc.tn.borderHeight))}b.thumbFullWidth=pc.tn.outerWidth.get(),b.$getElt(".subcontainer").width(pc.tn.outerWidth.get()-pc.tn.borderWidth).height(b.thumbFullHeight-pc.tn.borderHeight)}else if("auto"==pc.tn.settings.getW()){return;var c}else b.thumbFullHeight=pc.tn.outerHeight.get(),b.thumbFullWidth=pc.tn.outerWidth.get(),a.width(b.thumbFullWidth-pc.tn.borderWidth).height("onBottom"==pc.O.thumbnailLabel.get("position")?b.thumbFullHeight-pc.tn.borderHeight:b.thumbFullHeight-pc.tn.borderHeight),b.$getElt(".subcontainer").width(b.thumbFullWidth-pc.tn.borderWidth).height(b.thumbFullHeight-pc.tn.borderHeight)}function zb(){for(var a=pc.I.length,b=0;a>b;b++)pc.I[b].hovered&&Kb(pc.I[b].$elt)}function Ab(a){var b=a.data("index");if(void 0!=b){var c=pc.I[b];for("function"==typeof pc.O.fnThumbnailHoverInit&&pc.O.fnThumbnailHoverInit(a,c,e()),Eb(c),j=0;j<pc.tn.getHE().length;j++)switch(pc.tn.getHE()[j].name){case"imageSplit4":var d=c.$getElt(".subcontainer"),f=c.$getElt(".labelImage"),g=c.$getElt(".imgContainer");g.css({position:"absolute"}),d.css({overflow:"hidden",position:"relative",width:"100%",height:"100%"}),d.prepend(g.clone()),d.prepend(c.$getElt(".imgContainer",!0).clone()),g=c.$getElt(".imgContainer",!0),nc("",g),Db(c,"imgContainer0",g.eq(0)),Gb(c,"imgContainer0"),Db(c,"imgContainer1",g.eq(1)),Gb(c,"imgContainer1"),Db(c,"imgContainer2",g.eq(2)),Gb(c,"imgContainer2"),Db(c,"imgContainer3",g.eq(3)),Gb(c,"imgContainer3");break;case"imageSplitVert":var d=c.$getElt(".subcontainer"),g=c.$getElt(".imgContainer");g.css({position:"absolute"}),d.css({overflow:"hidden",position:"relative"}),d.prepend(g.clone()),g=c.$getElt(".imgContainer",!0),nc("",g),Db(c,"imgContainer0",g.eq(0)),Gb(c,"imgContainer0"),Db(c,"imgContainer1",g.eq(1)),Gb(c,"imgContainer1");break;case"labelSplit4":var d=c.$getElt(".subcontainer"),f=c.$getElt(".labelImage").css({top:0,bottom:0});d.css({overflow:"hidden",position:"relative"}),f.clone().appendTo(d),c.$getElt(".labelImage",!0).clone().appendTo(d),f=c.$getElt(".labelImage",!0),Db(c,"labelImage0",f.eq(0)),Gb(c,"labelImage0"),Db(c,"labelImage1",f.eq(1)),Gb(c,"labelImage1"),Db(c,"labelImage2",f.eq(2)),Gb(c,"labelImage2"),Db(c,"labelImage3",f.eq(3)),Gb(c,"labelImage3");break;case"labelSplitVert":var d=c.$getElt(".subcontainer"),f=c.$getElt(".labelImage");d.css({overflow:"hidden",position:"relative"}),f.clone().appendTo(d),f=c.$getElt(".labelImage",!0),Db(c,"labelImage0",f.eq(0)),Gb(c,"labelImage0"),Db(c,"labelImage1",f.eq(1)),Gb(c,"labelImage1");break;case"labelAppearSplit4":var d=c.$getElt(".subcontainer");f=c.$getElt(".labelImage"),f.css({left:0,top:0,right:0,bottom:0}),d.css({overflow:"hidden",position:"relative"}),f.clone().appendTo(d),c.$getElt(".labelImage",!0).clone().appendTo(d),f=c.$getElt(".labelImage",!0);var h=Db(c,"labelImage0",f.eq(0));h.translateX=-c.thumbFullWidth/2,h.translateY=-c.thumbFullHeight/2,Gb(c,"labelImage0"),h=Db(c,"labelImage1",f.eq(1)),h.translateX=c.thumbFullWidth/2,h.translateY=-c.thumbFullHeight/2,Gb(c,"labelImage1"),h=Db(c,"labelImage2",f.eq(2)),h.translateX=c.thumbFullWidth/2,h.translateY=c.thumbFullHeight/2,Gb(c,"labelImage2"),h=Db(c,"labelImage3",f.eq(3)),h.translateX=-c.thumbFullWidth/2,h.translateY=c.thumbFullHeight/2,Gb(c,"labelImage3");break;case"labelAppearSplitVert":var d=c.$getElt(".subcontainer"),f=c.$getElt(".labelImage");d.css({overflow:"hidden",position:"relative"}),f.clone().appendTo(d),f=c.$getElt(".labelImage",!0),Db(c,"labelImage0",f.eq(0)).translateX=-c.thumbFullWidth/2,Gb(c,"labelImage0"),Db(c,"labelImage1",f.eq(1)).translateX=c.thumbFullWidth/2,Gb(c,"labelImage1");break;case"imageScale150Outside":pc.$E.base.css({overflow:"visible"}),pc.$E.conTn.css({overflow:"visible"}),a.css({overflow:"visible"}),c.$getElt(".subcontainer").css({overflow:"visible"}),c.$getElt(".imgContainer").css({overflow:"visible"}),Db(c,"img0",c.$getElt("img")),Gb(c,"img0"),nc(c.$getElt(".imgContainer"),c.$getElt(".labelImage"));break;case"scale120":pc.$E.base.hasClass("fullpage")||pc.$E.base.css({overflow:"visible"}),pc.$E.conTn.css({overflow:"visible"}),Db(c,"base",a),Gb(c,"base");break;case"scaleLabelOverImage":var i=c.$getElt(".imgContainer"),k=c.$getElt(".labelImage");nc(i,k),k.css({opacity:0}),Db(c,"labelImage0",k).scale=50,Gb(c,"labelImage0"),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"overScale":a.css({overflow:"hidden"});var i=c.$getElt(".imgContainer"),k=c.$getElt(".labelImage");nc("",k),k.css({opacity:0}),i.css({opacity:1}),Db(c,"labelImage0",k).scale=150,Gb(c,"labelImage0"),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"overScaleOutside":pc.$E.base.hasClass("fullpage")||pc.$E.base.css({overflow:"visible"}),pc.$E.conTn.css({overflow:"visible"}),a.css({overflow:"visible"});var i=c.$getElt(".imgContainer"),k=c.$getElt(".labelImage");nc("",k),k.css({opacity:0}),i.css({opacity:1}),Db(c,"labelImage0",k).scale=150,Gb(c,"labelImage0"),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"rotateCornerBL":a.css({overflow:"hidden"});var i=c.$getElt(".labelImage");i.css({opacity:1}),i[0].style[pc.CSStransformName+"Origin"]="100% 100%",Db(c,"labelImage0",i).rotateZ=-90,Gb(c,"labelImage0"),i=c.$getElt(".imgContainer"),i[0].style[pc.CSStransformName+"Origin"]="100% 100%",Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"rotateCornerBR":a.css({overflow:"hidden"});var i=c.$getElt(".labelImage");i.css({opacity:1}),i[0].style[pc.CSStransformName+"Origin"]="0% 100%",Db(c,"labelImage0",i).rotateZ=90,Gb(c,"labelImage0"),i=c.$getElt(".imgContainer"),i[0].style[pc.CSStransformName+"Origin"]="0 100%",Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"imageRotateCornerBL":var i=c.$getElt(".imgContainer");nc(a,i),a.css({overflow:"hidden"}),c.$getElt(".labelImage").css({opacity:1}),i[0].style[pc.CSStransformName+"Origin"]="bottom right",Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"imageRotateCornerBR":var i=c.$getElt(".imgContainer");nc(a,i),a.css({overflow:"hidden"}),c.$getElt(".labelImage").css({opacity:1}),i[0].style[pc.CSStransformName+"Origin"]="0 100%",Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"slideUp":a.css({overflow:"hidden"}),i=c.$getElt(".labelImage"),i.css({opacity:1,top:0}),Db(c,"labelImage0",i).translateY=c.thumbFullHeight,Gb(c,"labelImage0"),i=c.$getElt(".imgContainer"),i.css({left:0,top:0}),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"slideDown":a.css({overflow:"hidden"}),i=c.$getElt(".labelImage"),i.css({opacity:1,top:0}),Db(c,"labelImage0",i).translateY=-c.thumbFullHeight,Gb(c,"labelImage0"),i=c.$getElt(".imgContainer"),i.css({left:0,top:0}),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"slideRight":a.css({overflow:"hidden"}),i=c.$getElt(".labelImage"),i.css({opacity:1,top:0}),Db(c,"labelImage0",i).translateX=-c.thumbFullWidth,Gb(c,"labelImage0"),i=c.$getElt(".imgContainer"),i.css({left:0,top:0}),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"slideLeft":a.css({overflow:"hidden"}),i=c.$getElt(".labelImage"),i.css({opacity:1,top:0}),Db(c,"labelImage0",i).translateX=c.thumbFullWidth,Gb(c,"labelImage0"),i=c.$getElt(".imgContainer"),i.css({left:0,top:0}),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"imageSlideUp":case"imageSlideDown":case"imageSlideRight":case"imageSlideLeft":i=c.$getElt(".imgContainer"),nc(a,i),a.css({overflow:"visible"}),c.$getElt(".labelImage").css({opacity:1}),i.css({left:0,top:0}),Db(c,"imgContainer0",i),Gb(c,"imgContainer0");break;case"labelAppear":case"labelAppear75":var l="rgb("+pc.custGlobals.oldLabelRed+","+pc.custGlobals.oldLabelGreen+","+pc.custGlobals.oldLabelBlue+",0.01)";c.$getElt(".labelImage").css({backgroundColor:l}),"album"==c.kind?c.$getElt(".labelFolderTitle").css({opacity:0}):c.$getElt(".labelImageTitle").css({opacity:0}),c.$getElt(".labelDescription").css({opacity:0});break;case"descriptionAppear":c.$getElt(".labelDescription").css({opacity:0});break;case"labelSlideUpTop":a.css({overflow:"hidden"}),c.$getElt(".labelImage").css({top:0,bottom:0}),Db(c,"labelImage0",c.$getElt(".labelImage")).translateY=c.thumbFullHeight,Gb(c,"labelImage0");break;case"labelSlideUp":a.css({overflow:"hidden"}),Db(c,"labelImage0",c.$getElt(".labelImage")).translateY=c.thumbFullHeight,Gb(c,"labelImage0");break;case"labelSlideDown":a.css({overflow:"hidden"}),Db(c,"labelImage0",c.$getElt(".labelImage")).translateY=-c.thumbFullHeight,Gb(c,"labelImage0");break;case"descriptionSlideUp":a.css({overflow:"hidden"});var m="album"==c.kind?c.$getElt(".labelFolderTitle").outerHeight(!0):c.$getElt(".labelImageTitle").outerHeight(!0);c.$getElt(".labelDescription").css({opacity:0}),c.$getElt(".labelImage").css({height:m}),Db(c,"labelImage0",c.$getElt(".labelImage")),Gb(c,"labelImage0");break;case"imageExplode":nc("",a),nc(c.$getElt(".labelImage"),c.$getElt(".imgContainer"));for(var d=c.$getElt(".subcontainer"),b=7,g=(c.thumbFullHeight,c.$getElt(".imgContainer")),n=g.outerWidth(!0)/b,o=g.outerHeight(!0),o=g.outerHeight(!0)/b,p=0;b>p;p++)for(var l=0;b>l;l++){var q="rect("+o*p+"px, "+n*(l+1)+"px, "+o*(p+1)+"px, "+n*l+"px)";g.clone().appendTo(d).css({top:0,scale:1,clip:q,left:0,position:"absolute"}).data("ngScale",1)}g.remove();break;case"imageFlipHorizontal":switch(pc.O.thumbnailLabel.get("position")){case"overImageOnTop":c.$getElt(".labelImage").css({top:-pc.tn.imgcBorderHeight/2,bottom:pc.tn.imgcBorderWidth/2,left:0,right:0});break;case"overImageOnMiddle":c.$getElt(".labelImage").css({top:-pc.tn.imgcBorderHeight/2,bottom:pc.tn.imgcBorderWidth/2,left:0,right:0});break;case"overImageOnBottom":default:c.$getElt(".labelImage").css({bottom:pc.tn.imgcBorderWidth/2,left:0,right:0})}pc.$E.base.hasClass("fullpage")||pc.$E.base.css({overflow:"visible"}),pc.$E.conTn.css({overflow:"visible"}),a.css({overflow:"visible"}),nc("",a),nc(c.$getElt(".labelImage"),c.$getElt(".imgContainer"));var i=c.$getElt(".subcontainer");i.css({overflow:"visible"}),i[0].style[pc.CSStransformStyle]="preserve-3d";var b=Math.round(1.2*c.thumbFullHeight)+"px";i[0].style[pc.CSSperspective]=b,i=c.$getElt(".imgContainer"),i[0].style[pc.CSSbackfaceVisibilityName]="hidden",Db(c,"imgContainer0",i),Gb(c,"imgContainer0"),a.find(".image")[0].style[pc.CSSbackfaceVisibilityName]="hidden",i=c.$getElt(".labelImage"),i[0].style[pc.CSSbackfaceVisibilityName]="hidden",Db(c,"labelImage0",i).rotateX=180,Gb(c,"labelImage0");break;case"imageFlipVertical":switch(pc.O.thumbnailLabel.get("position")){case"overImageOnTop":c.$getElt(".labelImage").css({top:-pc.tn.imgcBorderHeight/2,bottom:pc.tn.imgcBorderWidth/2,left:0,right:0});break;case"overImageOnMiddle":c.$getElt(".labelImage").css({top:-pc.tn.imgcBorderHeight/2,bottom:pc.tn.imgcBorderWidth/2,left:0,right:0});break;case"overImageOnBottom":default:c.$getElt(".labelImage").css({bottom:pc.tn.imgcBorderWidth/2,left:0,right:0})}pc.$E.base.hasClass("fullpage")||pc.$E.base.css({overflow:"visible"}),pc.$E.conTn.css({overflow:"visible"}),a.css({overflow:"visible"}),nc("",a),nc(c.$getElt(".labelImage"),c.$getElt(".imgContainer"));var i=c.$getElt(".subcontainer");i.css({overflow:"visible"}),i[0].style[pc.CSStransformStyle]="preserve-3d";var b=Math.round(1.2*c.thumbFullWidth)+"px";i[0].style[pc.CSSperspective]=b,i=c.$getElt(".imgContainer"),i[0].style[pc.CSSbackfaceVisibilityName]="hidden",Db(c,"imgContainer0",i),Gb(c,"imgContainer0"),a.find(".image")[0].style[pc.CSSbackfaceVisibilityName]="hidden",i=c.$getElt(".labelImage"),i[0].style[pc.CSSbackfaceVisibilityName]="hidden",Db(c,"labelImage0",i).rotateY=180,Gb(c,"labelImage0");break;case"imageScale150":a.css({overflow:"hidden"}),Db(c,"img0",c.$getElt("img")),Gb(c,"img0");break;case"imageScaleIn80":a.css({overflow:"hidden"}),Db(c,"img0",c.$getElt("img")).scale=120,Gb(c,"img0");break;case"imageSlide2Up":case"imageSlide2Down":case"imageSlide2Left":case"imageSlide2Right":case"imageSlide2UpRight":case"imageSlide2UpLeft":case"imageSlide2DownRight":case"imageSlide2DownLeft":a.css({overflow:"hidden"}),c.customData.hoverEffectRDir=pc.tn.getHE()[j].name,Bb(a,c);break;case"imageSlide2Random":a.css({overflow:"hidden"});var r=["imageSlide2Up","imageSlide2Down","imageSlide2Left","imageSlide2Left","imageSlide2UpRight","imageSlide2UpLeft","imageSlide2DownRight","imageSlide2DownLeft"];c.customData.hoverEffectRDir=r[Math.floor(Math.random()*r.length)],Bb(a,c)}c.hoverInitDone=!0}}function Bb(a,b){var c=b.thumbFullWidth,d=b.thumbFullHeight,e=Db(b,"img0",b.$getElt("img"));switch(e.scale=140,b.customData.hoverEffectRDir){case"imageSlide2Up":e.translateY=b.thumbFullHeight<1.4*b.thumbImg().height?(1.4*b.thumbImg().height-b.thumbFullHeight)/2:0,e.translateX=b.thumbFullWidth<1.4*b.thumbImg().width?-(1.4*b.thumbImg().width-b.thumbFullWidth)/2:0;break;case"imageSlide2Down":var f=b.thumbFullHeight<1.4*b.thumbImg().height?Math.min((1.4*b.thumbImg().height-b.thumbFullHeight)/2*.1,.1*d):0;e.translateY=-f;var g=b.thumbFullWidth<1.4*b.thumbImg().width?Math.min((1.4*b.thumbImg().width-b.thumbFullWidth)/2*.1,.1*c):0;e.translateX=g;break;case"imageSlide2Left":e.translateY=.1*-d,e.translateX=.1*c;break;case"imageSlide2Right":e.translateY=.1*-d,e.translateX=.1*-c;break;case"imageSlide2UpRight":e.translateY=.05*d,e.translateX=.05*-c;break;case"imageSlide2UpLeft":e.translateY=.05*d,e.translateX=.05*c;break;case"imageSlide2DownRight":e.translateY=.05*-d,e.translateX=.05*-c;break;case"imageSlide2DownLeft":e.translateY=.05*-d,e.translateX=.05*c}Gb(b,"img0")}function Cb(a){var b=a.data("index");if(void 0!=b){var c=pc.I[b];if(!c.hoverInitDone)return void Ab(a);for("function"==typeof pc.O.fnThumbnailHoverResize&&pc.O.fnThumbnailHoverResize(a,c,e()),j=0;j<pc.tn.getHE().length;j++)switch(pc.tn.getHE()[j].name){case"imageSplit4":var d=c.thumbFullWidth-pc.tn.borderWidth-pc.tn.imgcBorderWidth,f=c.thumbFullHeight-pc.tn.borderHeight-pc.tn.imgcBorderHeight,g=c.$getElt(".imgContainer"),h="rect(0px, "+Math.ceil(d/2)+"px, "+Math.ceil(f/2)+"px, 0px)";g.eq(0).css({clip:h}),h="rect(0px, "+d+"px, "+Math.ceil(f/2)+"px, "+Math.ceil(d/2)+"px)",g.eq(1).css({clip:h}),h="rect("+Math.ceil(f/2)+"px, "+d+"px, "+f+"px, "+Math.ceil(d/2)+"px)",g.eq(2).css({clip:h}),h="rect("+Math.ceil(f/2)+"px, "+Math.ceil(d/2)+"px, "+f+"px, 0px)",g.eq(3).css({clip:h});break;case"imageSplitVert":var g=c.$getElt(".imgContainer"),d=c.thumbFullWidth-pc.tn.borderWidth-pc.tn.imgcBorderWidth,f=c.thumbFullHeight-pc.tn.borderHeight-pc.tn.imgcBorderHeight,h="rect(0px, "+Math.ceil(d/2)+"px, "+f+"px, 0px)";g.eq(0).css({clip:h}),h="rect(0px, "+d+"px, "+f+"px, "+Math.ceil(d/2)+"px)",g.eq(1).css({clip:h});break;case"labelSplit4":var d=c.thumbFullWidth-pc.tn.borderWidth-pc.tn.imgcBorderWidth,f=c.thumbFullHeight-pc.tn.borderHeight-pc.tn.imgcBorderHeight,i=c.$getElt(".labelImage");h="rect(0px, "+Math.ceil(d/2)+"px, "+Math.ceil(f/2)+"px, 0px)",i.eq(0).css({clip:h}),h="rect(0px, "+d+"px, "+Math.ceil(f/2)+"px, "+Math.ceil(d/2)+"px)",i.eq(1).css({clip:h}),h="rect("+Math.ceil(f/2)+"px, "+d+"px, "+f+"px, "+Math.ceil(d/2)+"px)",i.eq(2).css({clip:h}),h="rect("+Math.ceil(f/2)+"px, "+Math.ceil(d/2)+"px, "+f+"px, 0px)",i.eq(3).css({clip:h});break;case"labelSplitVert":var d=c.thumbFullWidth-pc.tn.borderWidth-pc.tn.imgcBorderWidth,f=c.thumbFullHeight-pc.tn.borderHeight-pc.tn.imgcBorderHeight,i=c.$getElt(".labelImage"),h="rect(0px, "+Math.ceil(d/2)+"px, "+f+"px, 0px)";i.eq(0).css({clip:h}),h="rect(0px, "+d+"px, "+f+"px, "+Math.ceil(d/2)+"px)",i.eq(1).css({clip:h});break;case"labelAppearSplit4":var d=c.thumbFullWidth-pc.tn.borderWidth-pc.tn.imgcBorderWidth,f=c.thumbFullHeight-pc.tn.borderHeight-pc.tn.imgcBorderHeight;i=c.$getElt(".labelImage");var h="rect(0px, "+Math.ceil(d/2)+"px, "+Math.ceil(f/2)+"px, 0px)";i.eq(0).css({clip:h}),h="rect(0px, "+d+"px, "+Math.ceil(f/2)+"px, "+Math.ceil(d/2)+"px)",i.eq(1).css({clip:h}),h="rect("+Math.ceil(f/2)+"px, "+d+"px, "+f+"px, "+Math.ceil(d/2)+"px)",i.eq(2).css({clip:h}),h="rect("+Math.ceil(f/2)+"px, "+Math.ceil(d/2)+"px, "+f+"px, 0px)",i.eq(3).css({clip:h}),c.eltTransform.labelImage0.translateX=-c.thumbFullWidth/2,c.eltTransform.labelImage0.translateY=-c.thumbFullHeight/2,Gb(c,"labelImage0"),c.eltTransform.labelImage1.translateX=c.thumbFullWidth/2,c.eltTransform.labelImage1.translateY=-c.thumbFullHeight/2,Gb(c,"labelImage1"),c.eltTransform.labelImage2.translateX=c.thumbFullWidth/2,c.eltTransform.labelImage2.translateY=c.thumbFullHeight/2,Gb(c,"labelImage2"),c.eltTransform.labelImage3.translateX=-c.thumbFullWidth/2,c.eltTransform.labelImage3.translateY=c.thumbFullHeight/2,Gb(c,"labelImage3");break;case"labelAppearSplitVert":var d=c.thumbFullWidth-pc.tn.borderWidth-pc.tn.imgcBorderWidth,f=c.thumbFullHeight-pc.tn.borderHeight-pc.tn.imgcBorderHeight;i=c.$getElt(".labelImage");var h="rect(0px, "+Math.ceil(d/2)+"px, "+f+"px, 0px)";i.eq(0).css({clip:h}),h="rect(0px, "+d+"px, "+f+"px, "+Math.ceil(d/2)+"px)",i.eq(1).css({clip:h}),c.eltTransform.labelImage0.translateX=-c.thumbFullWidth/2,Gb(c,"labelImage0"),c.eltTransform.labelImage1.translateX=c.thumbFullWidth/2,Gb(c,"labelImage1");break;case"slideUp":c.eltTransform.labelImage0.translateY=c.thumbFullHeight,Gb(c,"labelImage0");break;case"slideDown":c.eltTransform.labelImage0.translateY=-c.thumbFullHeight,Gb(c,"labelImage0");break;case"slideRight":c.eltTransform.labelImage0.translateX=-c.thumbFullWidth,Gb(c,"labelImage0");break;case"slideLeft":c.eltTransform.labelImage0.translateX=c.thumbFullWidth,Gb(c,"labelImage0");break;case"imageExplode":for(var g=(c.$getElt(".subcontainer"),c.$getElt(".imgContainer")),b=Math.sqrt(g.length),d=g.eq(0).outerWidth(!0)/b,f=g.eq(0).outerHeight(!0)/b,k=0;b>k;k++)for(var l=0;b>l;l++)var h="rect("+f*k+"px, "+d*(l+1)+"px, "+f*(k+1)+"px, "+d*l+"px)";break;case"imageFlipHorizontal":var m=c.$getElt(".subcontainer"),b=Math.round(1.2*c.thumbFullHeight)+"px";m[0].style[pc.CSSperspective]=b;break;case"imageFlipVertical":var m=c.$getElt(".subcontainer"),b=Math.round(1.2*c.thumbFullWidth)+"px";m[0].style[pc.CSSperspective]=b;break;case"imageSlide2Up":case"imageSlide2Down":case"imageSlide2Left":case"imageSlide2Right":case"imageSlide2UpRight":case"imageSlide2UpLeft":case"imageSlide2DownRight":case"imageSlide2DownLeft":case"imageSlide2Random":Bb(a,c);
break;case"slideUp":c.eltTransform.labelImage0.translateY=c.thumbFullHeight,Gb(c,"labelImage0");break;case"slideDown":c.eltTransform.labelImage0.translateY=-c.thumbFullHeight,Gb(c,"labelImage0");break;case"slideRight":c.eltTransform.labelImage0.translateX=-c.thumbFullWidth,Gb(c,"labelImage0");break;case"slideLeft":c.eltTransform.labelImage0.translateX=c.thumbFullWidth,Gb(c,"labelImage0");break;case"labelSlideUpTop":case"labelSlideUp":c.eltTransform.labelImage0.translateY=c.thumbFullHeight,Gb(c,"labelImage0");break;case"labelSlideDown":a.css({overflow:"hidden"}),c.eltTransform.labelImage0.translateY=-c.thumbFullHeight,Gb(c,"labelImage0");break;case"descriptionSlideUp":}}}function Db(a,b,c){return void 0==a.eltTransform[b]&&(a.eltTransform[b]=Fb(),a.eltTransform[b].$elt=c),a.eltTransform[b]}function Eb(a){for(var b in a.eltTransform)delete a.eltTransform[b]}function Fb(){var a={translateX:0,translateY:0,rotateX:0,rotateY:0,rotateZ:0,scale:100};return a}function Gb(a,b){var c=a.eltTransform[b],d="translateX("+c.translateX+"px) translateY("+c.translateY+"px) scale("+c.scale/100+")";d+=pc.IE<=9||pc.isGingerbread?" rotate("+c.rotateZ+"deg)":" rotateX("+c.rotateX+"deg) rotateY("+c.rotateY+"deg) rotateZ("+c.rotateZ+"deg)",void 0!=c.$elt[0]&&(c.$elt[0].style[pc.CSStransformName]=d)}function Hb(a,c,d,e,f){var g=["translateX","translateY","scale","rotateX","rotateY","rotateZ"];if("animate"==pc.aengine)for(var h=0;h<g.length;h++){var i=g[h];if("undefined"!=typeof d[i]){var j=new b,k=parseInt(d[i]);j.tween({attachment:{it:e,eC:f,t:i,f:k},from:{v:parseInt(e.eltTransform[f][i])},to:{v:k},duration:pc.tn.getHE()[c].duration,delay:pc.tn.getHE()[c].delay,step:function(a,b){b.it.hovered&&(b.it.eltTransform[b.eC][b.t]=a.v,Gb(b.it,b.eC))},finish:function(a,b){b.it.hovered&&(b.it.eltTransform[b.eC][b.t]=b.f,Gb(b.it,b.eC))}}),delete d[i]}}var l=0;for(var m in d)if(d.hasOwnProperty(m)){l++;break}if(0!=l)if("transition"!=pc.aengine){var n={};for(var m in d)n[m]=a.css("borderColor"==m?"borderTopColor":m),"transparent"==n[m]&&(n[m]=a.hasClass("labelImage")?"rgb("+pc.custGlobals.oldLabelRed+","+pc.custGlobals.oldLabelGreen+","+pc.custGlobals.oldLabelBlue+",0.01)":"rgba(0,0,0,0)");var j=new b;j.tween({attachment:{$e:a,it:e,to:d},from:n,to:d,duration:pc.tn.getHE()[c].duration,delay:pc.tn.getHE()[c].delay,step:function(a,b){b.it.hovered&&b.$e.css(a)},finish:function(a,b){b.it.hovered&&b.$e.css(d)}})}else pc.tn.getHE()[c].delay>0?a.delay(pc.tn.getHE()[c].delay)[pc.aengine](d,pc.tn.getHE()[c].duration,pc.tn.getHE()[c].easing):a[pc.aengine](d,pc.tn.getHE()[c].duration,pc.tn.getHE()[c].easing)}function Ib(a){var b=a.data("index");if(void 0!=b){"velocity"==pc.aengine?a.find("*").velocity("stop",!0):a.find("*").stop(!0,!1);var c=pc.I[b];c.hovered=!0;var d="animate"==pc.aengine?1:100;"function"==typeof pc.O.fnThumbnailHover&&pc.O.fnThumbnailHover(a,c,e());try{for(j=0;j<pc.tn.getHE().length;j++)switch(pc.tn.getHE()[j].name){case"imageSplit4":var f=c.$getElt(".imgContainer");Hb(f.eq(0),j,{translateX:-c.thumbFullWidth/2,translateY:-c.thumbFullHeight/2},c,"imgContainer0"),Hb(f.eq(1),j,{translateX:c.thumbFullWidth/2,translateY:-c.thumbFullHeight/2},c,"imgContainer1"),Hb(f.eq(2),j,{translateX:c.thumbFullWidth/2,translateY:c.thumbFullHeight/2},c,"imgContainer2"),Hb(f.eq(3),j,{translateX:-c.thumbFullWidth/2,translateY:c.thumbFullHeight/2},c,"imgContainer3");break;case"imageSplitVert":var f=c.$getElt(".imgContainer");Hb(f.eq(0),j,{translateX:-c.thumbFullWidth/2},c,"imgContainer0"),Hb(f.eq(1),j,{translateX:c.thumbFullWidth/2},c,"imgContainer1");break;case"labelSplit4":var f=c.$getElt(".labelImage");Hb(f.eq(0),j,{translateX:-c.thumbFullWidth/2,translateY:-c.thumbFullHeight/2},c,"labelImage0"),Hb(f.eq(1),j,{translateX:c.thumbFullWidth/2,translateY:-c.thumbFullHeight/2},c,"labelImage1"),Hb(f.eq(2),j,{translateX:c.thumbFullWidth/2,translateY:c.thumbFullHeight/2},c,"labelImage2"),Hb(f.eq(3),j,{translateX:-c.thumbFullWidth/2,translateY:c.thumbFullHeight/2},c,"labelImage3");break;case"labelSplitVert":var f=c.$getElt(".labelImage");Hb(f.eq(0),j,{translateX:-c.thumbFullWidth/2},c,"labelImage0"),Hb(f.eq(1),j,{translateX:c.thumbFullWidth/2},c,"labelImage1");break;case"labelAppearSplit4":var f=c.$getElt(".labelImage");Hb(f.eq(0),j,{translateX:0,translateY:0},c,"labelImage0"),Hb(f.eq(1),j,{translateX:0,translateY:0},c,"labelImage1"),Hb(f.eq(2),j,{translateX:0,translateY:0},c,"labelImage2"),Hb(f.eq(3),j,{translateX:0,translateY:0},c,"labelImage3");break;case"labelAppearSplitVert":var f=c.$getElt(".labelImage");Hb(f.eq(0),j,{translateX:0},c,"labelImage0"),Hb(f.eq(1),j,{translateX:0},c,"labelImage1");break;case"scaleLabelOverImage":Hb(c.$getElt(".labelImage"),j,{scale:100/d,opacity:"1"},c,"labelImage0"),Hb(c.$getElt(".imgContainer"),j,{scale:50/d},c,"imgContainer0");break;case"overScale":case"overScaleOutside":Hb(c.$getElt(".labelImage"),j,{opacity:"1",scale:100/d},c,"labelImage0"),Hb(c.$getElt(".imgContainer"),j,{opacity:"0",scale:50/d},c,"imgContainer0");break;case"imageInvisible":Hb(c.$getElt(".imgContainer"),j,{opacity:"0"},c);break;case"rotateCornerBL":var g="transition"==pc.aengine?{rotate:"0deg"}:{rotateZ:"0"};Hb(c.$getElt(".labelImage"),j,g,c,"labelImage0"),g="transition"==pc.aengine?{rotate:"90deg"}:{rotateZ:"90"},Hb(c.$getElt(".imgContainer"),j,g,c,"imgContainer0");break;case"rotateCornerBR":var g="transition"==pc.aengine?{rotate:"0deg"}:{rotateZ:"0"};Hb(c.$getElt(".labelImage"),j,g,c,"labelImage0"),g="transition"==pc.aengine?{rotate:"-90deg"}:{rotateZ:"-90"},Hb(c.$getElt(".imgContainer"),j,g,c,"imgContainer0");break;case"imageRotateCornerBL":var g="transition"==pc.aengine?{rotate:"90deg"}:{rotateZ:"90"};Hb(c.$getElt(".imgContainer"),j,g,c,"imgContainer0");break;case"imageRotateCornerBR":var g="transition"==pc.aengine?{rotate:"-90deg"}:{rotateZ:"-90"};Hb(c.$getElt(".imgContainer"),j,g,c,"imgContainer0");break;case"slideUp":Hb(c.$getElt(".imgContainer"),j,{translateY:-c.thumbFullHeight},c,"imgContainer0"),Hb(c.$getElt(".labelImage"),j,{translateY:0},c,"labelImage0");break;case"slideDown":Hb(c.$getElt(".imgContainer"),j,{translateY:c.thumbFullHeight},c,"imgContainer0"),Hb(c.$getElt(".labelImage"),j,{translateY:0},c,"labelImage0");break;case"slideRight":Hb(c.$getElt(".imgContainer"),j,{translateX:c.thumbFullWidth},c,"imgContainer0"),Hb(c.$getElt(".labelImage"),j,{translateX:0},c,"labelImage0");break;case"slideLeft":Hb(c.$getElt(".imgContainer"),j,{translateX:-c.thumbFullWidth},c,"imgContainer0"),Hb(c.$getElt(".labelImage"),j,{translateX:0},c,"labelImage0");break;case"imageSlideUp":Hb(c.$getElt(".imgContainer"),j,{translateY:-c.thumbFullHeight},c,"imgContainer0");break;case"imageSlideDown":Hb(c.$getElt(".imgContainer"),j,{translateY:c.thumbFullHeight},c,"imgContainer0");break;case"imageSlideLeft":Hb(c.$getElt(".imgContainer"),j,{translateX:-c.thumbFullWidth},c,"imgContainer0");break;case"imageSlideRight":Hb(c.$getElt(".imgContainer"),j,{translateX:c.thumbFullWidth},c,"imgContainer0");break;case"labelAppear":if("velocity"==pc.aengine)Hb(c.$getElt(".labelImage"),j,{backgroundColorRed:pc.custGlobals.oldLabelRed,backgroundColorGreen:pc.custGlobals.oldLabelGreen,backgroundColorBlue:pc.custGlobals.oldLabelBlue,backgroundColorAlpha:1},c);else{var h="rgba("+pc.custGlobals.oldLabelRed+","+pc.custGlobals.oldLabelGreen+","+pc.custGlobals.oldLabelBlue+",0.99)";Hb(c.$getElt(".labelImage"),j,{backgroundColor:h},c)}"album"==c.kind?Hb(c.$getElt(".labelFolderTitle"),j,{opacity:"1"},c):Hb(c.$getElt(".labelImageTitle"),j,{opacity:"1"},c),Hb(c.$getElt(".labelDescription"),j,{opacity:"1"},c);break;case"labelAppear75":if("velocity"==pc.aengine)Hb(c.$getElt(".labelImage"),j,{backgroundColorRed:pc.custGlobals.oldLabelRed,backgroundColorGreen:pc.custGlobals.oldLabelGreen,backgroundColorBlue:pc.custGlobals.oldLabelBlue,backgroundColorAlpha:.75},c);else{var h="rgba("+pc.custGlobals.oldLabelRed+","+pc.custGlobals.oldLabelGreen+","+pc.custGlobals.oldLabelBlue+",0.75)";Hb(c.$getElt(".labelImage"),j,{backgroundColor:h},c)}"album"==c.kind?Hb(c.$getElt(".labelFolderTitle"),j,{opacity:"1"},c):Hb(c.$getElt(".labelImageTitle"),j,{opacity:"1"},c),Hb(c.$getElt(".labelDescription"),j,{opacity:"1"},c);break;case"descriptionAppear":Hb(c.$getElt(".labelDescription"),j,{opacity:"1"},c);break;case"labelSlideDown":Hb(c.$getElt(".labelImage"),j,{translateY:0},c,"labelImage0");break;case"labelSlideUpTop":case"labelSlideUp":Hb(c.$getElt(".labelImage"),j,{translateY:0},c,"labelImage0");break;case"descriptionSlideUp":var i="album"==c.kind?c.$getElt(".labelFolderTitle").outerHeight(!0):c.$getElt(".labelImageTitle").outerHeight(!0),k=c.$getElt(".labelDescription").outerHeight(!0),l=c.thumbFullHeight-i-k;0>l&&(l=0),Hb(c.$getElt(".labelImage"),j,{translateY:0,height:i+k},c,"labelImage0"),Hb(c.$getElt(".labelDescription"),j,{opacity:"1"},c);break;case"labelOpacity50":Hb(c.$getElt(".labelImage"),j,{opacity:"0.5"},c);break;case"imageOpacity50":Hb(c.$getElt(".imgContainer"),j,{opacity:"0.5"},c);break;case"borderLighter":if("velocity"==pc.aengine){var m=tc(pc.custGlobals.oldBorderColor,.5),n=m.substring(m.indexOf("(")+1,m.lastIndexOf(")")).split(/,\s*/);Hb(a,j,{borderColorRed:n[0],borderColorGreen:n[1],borderColorBlue:n[2],colorAlpha:n[3]},c)}else{var h=a.css("borderTopColor");a.data("ngcache_borderColor",h),Hb(a,j,{borderColor:tc(h,.5)},c)}break;case"borderDarker":if("velocity"==pc.aengine){var m=uc(pc.custGlobals.oldBorderColor,.5),n=m.substring(m.indexOf("(")+1,m.lastIndexOf(")")).split(/,\s*/);Hb(a,j,{borderColorRed:n[0],borderColorGreen:n[1],borderColorBlue:n[2],colorAlpha:n[3]},c)}else{var h=a.css("borderTopColor");a.data("ngcache_borderColor",h),Hb(a,j,{borderColor:uc(h,.5)},c)}break;case"imageScale150":Hb(c.$getElt("img"),j,{scale:150/d},c,"img0");break;case"imageScaleIn80":Hb(c.$getElt("img"),j,{scale:100/d},c,"img0");break;case"imageSlide2Up":case"imageSlide2Down":case"imageSlide2Left":case"imageSlide2Right":case"imageSlide2UpRight":case"imageSlide2UpLeft":case"imageSlide2DownRight":case"imageSlide2DownLeft":case"imageSlide2Random":switch(c.customData.hoverEffectRDir){case"imageSlide2Up":var o=c.thumbFullHeight<1.4*c.imgHeight?(1.4*c.imgHeight-c.thumbFullHeight)/2:0;Hb(c.$getElt("img"),j,{translateY:-o},c,"img0");break;case"imageSlide2Down":var o=c.thumbFullHeight<1.4*c.imgHeight?(1.4*c.imgHeight-c.thumbFullHeight)/2:0;Hb(c.$getElt("img"),j,{translateY:o},c,"img0");break;case"imageSlide2Left":Hb(c.$getElt("img"),j,{translateX:.1*-c.thumbFullWidth},c,"img0");break;case"imageSlide2Right":Hb(c.$getElt("img"),j,{translateX:.1*c.thumbFullWidth},c,"img0");break;case"imageSlide2UpRight":Hb(c.$getElt("img"),j,{translateY:.05*-c.thumbFullHeight,translateX:.05*c.thumbFullWidth},c,"img0");break;case"imageSlide2UpLeft":Hb(c.$getElt("img"),j,{translateY:.05*-c.thumbFullHeight,translateX:.05*-c.thumbFullWidth},c,"img0");break;case"imageSlide2DownRight":Hb(c.$getElt("img"),j,{translateY:.05*c.thumbFullHeight,translateX:.05*c.thumbFullWidth},c,"img0");break;case"imageSlide2DownLeft":Hb(c.$getElt("img"),j,{translateY:.05*c.thumbFullHeight,translateX:.05*-c.thumbFullWidth},c,"img0")}break;case"imageScale150Outside":nc("",a),Hb(c.$getElt("img"),j,{scale:150/d},c,"img0");break;case"scale120":nc("",a),Hb(a,j,{scale:120/d},c,"base");break;case"imageExplode":nc("",a);var p=c.$getElt(".imgContainer");b=Math.sqrt(p.length);for(var q=[],r=0;r<=Math.PI;r+=Math.PI/(b-1))q.push(Math.sin(r));for(var s=p.outerWidth(!0)/b,t=p.outerHeight(!0)/b,r=0,g=0;b>g;g++)for(var h=0;b>h;h++)Hb(p.eq(r++),j,{top:(-t*b/3+t*g-t)*q[h],left:(-s*b/3+s*h-s)*q[g],scale:1.5,opacity:0},c);break;case"imageFlipHorizontal":nc("",a),Hb(c.$getElt(".imgContainer"),j,{rotateX:180},c,"imgContainer0"),Hb(c.$getElt(".labelImage"),j,{rotateX:360},c,"labelImage0");break;case"imageFlipVertical":nc("",a),Hb(c.$getElt(".imgContainer"),j,{rotateY:180},c,"imgContainer0"),Hb(c.$getElt(".labelImage"),j,{rotateY:360},c,"labelImage0");break;case"TEST":}}catch(u){ic("error on hover "+u.message)}}}function Jb(a,c,d,e,f){var g=["translateX","translateY","scale","rotateX","rotateY","rotateZ"];if("animate"==pc.aengine)for(var h=0;h<g.length;h++){var i=g[h];if("undefined"!=typeof d[i]){var j=new b,k=parseInt(d[i]);j.tween({attachment:{it:e,eC:f,t:i,f:k},from:{v:parseInt(e.eltTransform[f][i])},to:{v:k},duration:pc.tn.getHE()[c].durationBack,delay:pc.tn.getHE()[c].delayBack,step:function(a,b){b.it.eltTransform[b.eC][b.t]=a.v,Gb(b.it,b.eC)},finish:function(a,b){b.it.eltTransform[b.eC][b.t]=b.f,Gb(b.it,b.eC)}}),delete d[i]}}var l=0;for(var m in d)if(d.hasOwnProperty(m)){l++;break}if(0!=l)if("transition"!=pc.aengine){var n={};for(var m in d)"borderColor"==m?n[m]=a.css("borderTopColor"):(n[m]=a.css(m),"transparent"==n[m]&&(n[m]="rgba(0,0,0,0.01)"));var j=new b;j.tween({attachment:{$e:a,it:e,to:d},from:n,to:d,duration:pc.tn.getHE()[c].durationBack,delay:pc.tn.getHE()[c].delayBack,step:function(a,b){b.$e.css(a)},finish:function(a,b){b.$e.css(b.to)}})}else pc.tn.getHE()[c].delay>0?a.delay(pc.tn.getHE()[c].delay)[pc.aengine](d,pc.tn.getHE()[c].durationBack,pc.tn.getHE()[c].easingBack):a[pc.aengine](d,pc.tn.getHE()[c].durationBack,pc.tn.getHE()[c].easingBack)}function Kb(a){if(!pc.containerViewerDisplayed){var b=a.data("index");if(void 0!=b){"velocity"==pc.aengine?a.find("*").velocity("stop",!0):a.find("*").filter(":animated").stop(!0,!1);var c=pc.I[b];c.hovered=!1;var d="animate"==pc.aengine?1:100;"function"==typeof pc.O.fnThumbnailHoverOut&&pc.O.fnThumbnailHoverOut(a,c,e());try{for(j=0;j<pc.tn.getHE().length;j++)switch(pc.tn.getHE()[j].name){case"imageSplit4":var f=c.$getElt(".imgContainer");Jb(f.eq(0),j,{translateX:0,translateY:0},c,"imgContainer0"),Jb(f.eq(1),j,{translateX:0,translateY:0},c,"imgContainer1"),Jb(f.eq(2),j,{translateX:0,translateY:0},c,"imgContainer2"),Jb(f.eq(3),j,{translateX:0,translateY:0},c,"imgContainer3");break;case"imageSplitVert":var f=c.$getElt(".imgContainer");Jb(f.eq(0),j,{translateX:0},c,"imgContainer0"),Jb(f.eq(1),j,{translateX:0},c,"imgContainer1");break;case"labelSplit4":var f=c.$getElt(".labelImage");Jb(f.eq(0),j,{translateX:0,translateY:0},c,"labelImage0"),Jb(f.eq(1),j,{translateX:0,translateY:0},c,"labelImage1"),Jb(f.eq(2),j,{translateX:0,translateY:0},c,"labelImage2"),Jb(f.eq(3),j,{translateX:0,translateY:0},c,"labelImage3");break;case"labelSplitVert":var f=c.$getElt(".labelImage");Jb(f.eq(0),j,{translateX:0},c,"labelImage0"),Jb(f.eq(1),j,{translateX:0},c,"labelImage1");break;case"labelAppearSplit4":var f=c.$getElt(".labelImage");Jb(f.eq(0),j,{translateX:-c.thumbFullWidth/2,translateY:-c.thumbFullHeight/2},c,"labelImage0"),Jb(f.eq(1),j,{translateX:c.thumbFullWidth/2,translateY:-c.thumbFullHeight/2},c,"labelImage1"),Jb(f.eq(2),j,{translateX:c.thumbFullWidth/2,translateY:c.thumbFullHeight/2},c,"labelImage2"),Jb(f.eq(3),j,{translateX:-c.thumbFullWidth/2,translateY:c.thumbFullHeight/2},c,"labelImage3");break;case"labelAppearSplitVert":var f=c.$getElt(".labelImage");Jb(f.eq(0),j,{translateX:-c.thumbFullWidth/2},c,"labelImage0"),Jb(f.eq(1),j,{translateX:c.thumbFullWidth/2},c,"labelImage1");break;case"scaleLabelOverImage":Jb(c.$getElt(".labelImage"),j,{opacity:"0",scale:50/d},c,"labelImage0"),Jb(c.$getElt(".imgContainer"),j,{scale:100/d},c,"imgContainer0");break;case"overScale":case"overScaleOutside":Jb(c.$getElt(".labelImage"),j,{opacity:"0",scale:150/d},c,"labelImage0"),Jb(c.$getElt(".imgContainer"),j,{opacity:"1",scale:100/d},c,"imgContainer0");break;case"imageInvisible":Jb(c.$getElt(".imgContainer"),j,{opacity:"1"});break;case"rotateCornerBL":var g="transition"==pc.aengine?{rotate:"-90deg"}:{rotateZ:"-90"};Jb(c.$getElt(".labelImage"),j,g,c,"labelImage0"),g="transition"==pc.aengine?{rotate:"0deg"}:{rotateZ:"0"},Jb(c.$getElt(".imgContainer"),j,g,c,"imgContainer0");break;case"rotateCornerBR":var g="transition"==pc.aengine?{rotate:"90deg"}:{rotateZ:"90"};Jb(c.$getElt(".labelImage"),j,g,c,"labelImage0"),g="transition"==pc.aengine?{rotate:"0deg"}:{rotateZ:"0"},Jb(c.$getElt(".imgContainer"),j,g,c,"imgContainer0");break;case"imageRotateCornerBL":case"imageRotateCornerBR":var g="transition"==pc.aengine?{rotate:"0deg"}:{rotateZ:"0"};Jb(c.$getElt(".imgContainer"),j,g,c,"imgContainer0");break;case"slideUp":Jb(c.$getElt(".imgContainer"),j,{translateY:0},c,"imgContainer0"),Jb(c.$getElt(".labelImage"),j,{translateY:c.thumbFullHeight},c,"labelImage0");break;case"slideDown":Jb(c.$getElt(".imgContainer"),j,{translateY:0},c,"imgContainer0"),Jb(c.$getElt(".labelImage"),j,{translateY:-c.thumbFullHeight},c,"labelImage0");break;case"slideRight":Jb(c.$getElt(".imgContainer"),j,{translateX:0},c,"imgContainer0"),Jb(c.$getElt(".labelImage"),j,{translateX:-c.thumbFullWidth},c,"labelImage0");break;case"slideLeft":Jb(c.$getElt(".imgContainer"),j,{translateX:0},c,"imgContainer0"),Jb(c.$getElt(".labelImage"),j,{translateX:c.thumbFullWidth},c,"labelImage0");break;case"imageSlideUp":case"imageSlideDown":Jb(c.$getElt(".imgContainer"),j,{translateY:0},c,"imgContainer0");break;case"imageSlideLeft":case"imageSlideRight":Jb(c.$getElt(".imgContainer"),j,{translateX:0},c,"imgContainer0");break;case"labelAppear":case"labelAppear75":if("velocity"==pc.aengine)Jb(c.$getElt(".labelImage"),j,{backgroundColorRed:pc.custGlobals.oldLabelRed,backgroundColorGreen:pc.custGlobals.oldLabelGreen,backgroundColorBlue:pc.custGlobals.oldLabelBlue,backgroundColorAlpha:0});else{var h="rgba("+pc.custGlobals.oldLabelRed+","+pc.custGlobals.oldLabelGreen+","+pc.custGlobals.oldLabelBlue+",0.01)";Jb(c.$getElt(".labelImage"),j,{backgroundColor:h})}"album"==c.kind?Jb(c.$getElt(".labelFolderTitle"),j,{opacity:"0"}):Jb(c.$getElt(".labelImageTitle"),j,{opacity:"0"}),Jb(c.$getElt(".labelDescription"),j,{opacity:"0"});break;case"descriptionAppear":Jb(c.$getElt(".labelDescription"),j,{opacity:"0"});break;case"labelSlideDown":Jb(c.$getElt(".labelImage"),j,{translateY:-c.thumbFullHeight},c,"labelImage0");break;case"labelSlideUpTop":case"labelSlideUp":Jb(c.$getElt(".labelImage"),j,{translateY:c.thumbFullHeight},c,"labelImage0");break;case"descriptionSlideUp":{var i="album"==c.kind?c.$getElt(".labelFolderTitle").outerHeight(!0):c.$getElt(".labelImageTitle").outerHeight(!0);c.thumbFullHeight-i-pc.tn.borderHeight-pc.tn.imgcBorderHeight}Jb(c.$getElt(".labelImage"),j,{translateY:0,height:i},c,"labelImage0");break;case"labelOpacity50":Jb(c.$getElt(".labelImage"),j,{opacity:pc.custGlobals.oldLabelOpacity});break;case"imageOpacity50":Jb(c.$getElt(".imgContainer"),j,{opacity:"1"});break;case"borderLighter":case"borderDarker":if("velocity"==pc.aengine){var k=pc.custGlobals.oldBorderColor,l=k.substring(k.indexOf("(")+1,k.lastIndexOf(")")).split(/,\s*/);Jb(a,j,{borderColorRed:l[0],borderColorGreen:l[1],borderColorBlue:l[2],colorAlpha:l[3]})}else Jb(a,j,{borderColor:a.data("ngcache_borderColor")});break;case"imageScale150":case"imageScale150Outside":Jb(c.$getElt("img"),j,{scale:100/d},c,"img0");break;case"imageScaleIn80":Jb(c.$getElt("img"),j,{scale:120/d},c,"img0");break;case"imageSlide2Up":case"imageSlide2Down":case"imageSlide2Left":case"imageSlide2Right":case"imageSlide2UpRight":case"imageSlide2UpLeft":case"imageSlide2DownRight":case"imageSlide2DownLeft":case"imageSlide2Random":switch(c.customData.hoverEffectRDir){case"imageSlide2Up":var m=c.thumbFullHeight<1.4*c.imgHeight?(1.4*c.imgHeight-c.thumbFullHeight)/2:0;Jb(c.$getElt("img"),j,{translateY:m},c,"img0");break;case"imageSlide2Down":var m=c.thumbFullHeight<1.4*c.imgHeight?(1.4*c.imgHeight-c.thumbFullHeight)/2:0;Jb(c.$getElt("img"),j,{translateY:-m},c,"img0");break;case"imageSlide2Left":Jb(c.$getElt("img"),j,{translateX:.1*c.thumbFullWidth},c,"img0");break;case"imageSlide2Right":Jb(c.$getElt("img"),j,{translateX:.1*-c.thumbFullWidth},c,"img0");break;case"imageSlide2UpRight":Jb(c.$getElt("img"),j,{translateY:.05*c.thumbFullHeight,translateX:.05*-c.thumbFullWidth},c,"img0");break;case"imageSlide2UpLeft":Jb(c.$getElt("img"),j,{translateY:.05*c.thumbFullHeight,translateX:.05*c.thumbFullWidth},c,"img0");break;case"imageSlide2DownRight":Jb(c.$getElt("img"),j,{translateY:.05*-c.thumbFullHeight,translateX:.05*-c.thumbFullWidth},c,"img0");break;case"imageSlide2DownLeft":Jb(c.$getElt("img"),j,{translateY:.05*-c.thumbFullHeight,translateX:.05*c.thumbFullWidth},c,"img0")}break;case"scale120":Jb(a,j,{scale:100/d},c,"base");break;case"imageExplode":var n=c.$getElt(".imgContainer");b=Math.sqrt(n.length);for(var o=0,g=0;b>g;g++)for(var h=0;b>h;h++)Jb(n.eq(o++),j,{top:"0",left:"0",scale:"1",opacity:"1"});break;case"imageFlipHorizontal":Jb(c.$getElt(".imgContainer"),j,{rotateX:0},c,"imgContainer0"),Jb(c.$getElt(".labelImage"),j,{rotateX:180},c,"labelImage0");break;case"imageFlipVertical":Jb(c.$getElt(".imgContainer"),j,{rotateY:0},c,"imgContainer0"),Jb(c.$getElt(".labelImage"),j,{rotateY:180},c,"labelImage0");break;case"TEST":}}catch(p){ic("error on hoverOut "+p.message)}}}}function Lb(a){return pc.O.thumbnailOpenImage?"function"==typeof pc.O.fnThumbnailOpen?void ec(a):void("fancybox"==pc.O.viewer?fc(a):pc.containerViewerDisplayed?Zb(a,""):Mb(a)):void 0}function Mb(a){jQuery("body").css({overflow:"hidden"}),pc.containerViewerDisplayed=!0,pc.$E.conVwCon=jQuery('<div  class="nanoGalleryViewerContainer" style="visibility:visible"></div>').appendTo("body"),pc.$E.conVwCon.addClass("nanogallery_theme_"+pc.O.theme),hc(pc.$E.conVwCon),pc.$E.conVw=jQuery('<div  id="nanoGalleryViewer" class="nanoGalleryViewer" style="visibility:visible" itemscope itemtype="http://schema.org/ImageObject"></div>').appendTo(pc.$E.conVwCon),pc.$E.conVw.css({visibility:"visible",position:"fixed"}),pc.$E.conVw.css({msTouchAction:"none",touchAction:"none"});{var b="";pc.I.length}b+='<img class="image nGEvent" src="'+pc.I[a].responsiveURL()+'" alt=" " style="visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">',b+='<img class="image nGEvent" src="'+pc.I[a].responsiveURL()+'" alt=" " style="visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">',b+='<img class="image nGEvent" src="'+pc.I[a].responsiveURL()+'" alt=" " style="visibility:visible;opacity:0;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;zoom:1;" itemprop="contentURL">',pc.$E.vwContent=jQuery('<div class="content nGEvent">'+b+'<div class="contentAreaPrevious nGEvent"></div><div class="contentAreaNext nGEvent"></div></div>').appendTo(pc.$E.conVw),pc.$E.vwImgP=pc.$E.conVw.find(".image").eq(0),pc.$E.vwImgC=pc.$E.conVw.find(".image").eq(1),pc.$E.vwImgN=pc.$E.conVw.find(".image").eq(2),pc.$E.conVwCon.find("*").attr("draggable","false").attr("unselectable","on");var c=jQuery('<div class="closeButtonFloating nGEvent"></div>').appendTo(pc.$E.conVw);c.on("touchstart click",function(a){return a.preventDefault(),a.stopPropagation(),(new Date).getTime()-pc.timeImgChanged<400?void 0:(cc(!0),!1)});for(var d='<div class="toolbarContainer nGEvent" style="visibility:'+(pc.O.viewerToolbar.display?"visible":"hidden")+';"><div class="toolbar nGEvent">',f=pc.O.viewerToolbar.standard.split(","),g=0,h=f.length;h>g;g++)d+=Nb(f[g]);for(var i=pc.O.viewerToolbar.minimized.split(","),g=0,j=i.length;j>g;g++)-1==pc.O.viewerToolbar.standard.indexOf(i[g])&&(d+=Nb(i[g]));d+="</div></div>",pc.$E.conVwTb=jQuery(d).appendTo(pc.$E.conVw),"min"==pc.toolbarMode||pc.O.viewerToolbar.autoMinimize>0&&pc.O.viewerToolbar.autoMinimize>=kc().w?Ub():Tb(),pc.O.viewerFullscreen&&(pc.viewerIsFullscreen=!0,pc.$E.conVwTb.find(".fullscreenButton").removeClass("setFullscreenButton").addClass("removeFullscreenButton"),ngscreenfull.request()),pc.O.viewerDisplayLogo&&(pc.$E.vwLogo=jQuery('<div class="nanoLogo"></div>').appendTo(pc.$E.conVw)),nc("",pc.$E.conVw),nc(pc.$E.conVw,c),dc(),pc.timeImgChanged=(new Date).getTime(),pc.$E.conVwTb.find(".closeButton").on("touchstart click",function(a){a.preventDefault(),a.stopPropagation(),(new Date).getTime()-pc.timeImgChanged<400||cc(!0)}),pc.$E.conVwTb.find(".playPauseButton").on("touchstart click",function(a){a.stopPropagation(),Rb()}),pc.$E.conVwTb.find(".minimizeButton").on("touchstart click",function(a){a.stopPropagation(),Sb()}),pc.$E.conVwTb.find(".fullscreenButton").on("touchstart click",function(a){a.stopPropagation(),Qb()}),pc.$E.conVwTb.find(".infoButton").on("touchstart click",function(a){a.stopPropagation(),"function"==typeof pc.O.fnViewerInfo&&pc.O.fnViewerInfo(pc.I[pc.viewerCurrentItemIdx],e())}),pc.$E.conVwTb.find(".ngCustomBtn").on("touchstart click",function(a){if(a.stopPropagation(),"function"==typeof pc.O.fnImgToolbarCustClick){for(var b=a.target||a.srcElement;null==b||null==b.getAttribute("class")||-1==b.getAttribute("class").indexOf("ngCustomBtn");)b=b.parentNode;var c=b.getAttribute("class");if(c.indexOf("ngCustomBtn")>=0)for(var d=c.split(" "),f=0,g=d.length;g>f;f++)0==d[f].indexOf("custom")&&pc.O.fnImgToolbarCustClick(d[f],jQuery(b),pc.I[pc.viewerCurrentItemIdx],e())}}),pc.$E.conVwTb.find(".linkOriginalButton").on("touchstart click",function(a){if(a.stopPropagation(),"picasa"==pc.O.kind){var b="https://plus.google.com/photos/"+pc.O.userID+"/albums/"+pc.I[pc.viewerCurrentItemIdx].albumID+"/"+pc.I[pc.viewerCurrentItemIdx].GetID();window.open(b,"_blank")}if("flickr"==pc.O.kind){var b="https://www.flickr.com/photos/"+pc.O.userID+"/"+pc.I[pc.viewerCurrentItemIdx].GetID();window.open(b,"_blank")}}),pc.$E.conVwTb.find(".nextButton").on("touchstart click",function(a){a.stopPropagation(),Wb()}),pc.$E.conVwTb.find(".previousButton").on("touchstart click",function(a){a.stopPropagation(),Yb()}),pc.$E.vwContent.find(".contentAreaNext").on("touchstart click",function(a){a.stopPropagation(),Wb()}),pc.$E.vwContent.find(".contentAreaPrevious").on("touchstart click",function(a){a.stopPropagation(),Yb()}),pc.$E.vwContent.on("click",function(a){return(new Date).getTime()-pc.timeImgChanged<400?void 0:(a.preventDefault(),a.stopPropagation(),cc(!0),!1)}),pc.$E.conVw.find(".image").attr("draggable","false").attr("unselectable","on").css({"-moz-user-select":"none","-khtml-user-select":"none","-webkit-user-select":"none","-o-user-select":"none","user-select":"none"}),Zb(a,""),null==pc.viewerSwipe&&(pc.viewerSwipe=new Ob(pc.$E.conVwCon[0])),pc.O.slideshowAutoStart&&(pc.playSlideshow=!0,pc.$E.conVwTb.find(".playPauseButton").removeClass("playButton").addClass("pauseButton"),Xb(),pc.playSlideshowTimerID=window.setInterval(function(){Xb()},pc.slideshowDelay))}function Nb(a){var b="",c=a.replace(/^\s+|\s+$/g,"");switch(c){case"minimizeButton":b='<div class="ngbt minimizeButton hideToolbarButton nGEvent"></div>';break;case"previousButton":b='<div class="ngbt previousButton nGEvent"></div>';break;case"pageCounter":b='<div class="pageCounter nGEvent"></div>';break;case"nextButton":b='<div class="ngbt nextButton nGEvent"></div>';break;case"playPauseButton":b='<div class="ngbt playButton playPauseButton nGEvent"></div>';break;case"fullscreenButton":pc.supportFullscreenAPI&&(b='<div class="ngbt setFullscreenButton fullscreenButton nGEvent"></div>');break;case"infoButton":"function"==typeof pc.O.fnViewerInfo&&(b='<div class="ngbt infoButton nGEvent"></div>');break;case"linkOriginalButton":("flickr"==pc.O.kind||"picasa"==pc.O.kind)&&(b='<div class="ngbt linkOriginalButton nGEvent"></div>');break;case"closeButton":b='<div class="ngbt closeButton nGEvent"></div>';break;case"label":b='<div class="label"><div class="title nGEvent" itemprop="name"></div><div class="description nGEvent" itemprop="description"></div></div>';break;default:0==c.indexOf("custom")&&(b='<div class="ngbt ngCustomBtn '+c+' nGEvent">'+("function"==typeof pc.O.fnImgToolbarCustInit?pc.O.fnImgToolbarCustInit(c):"")+"</div>")}return b}function Ob(a){function b(a){pc.containerViewerDisplayed&&(pc.timeLastTouchStart=(new Date).getTime(),a.preventDefault(),a.touches&&a.touches.length>1||(j=f(a),window.navigator.msPointerEnabled?(document.addEventListener("MSPointerMove",c,!0),document.addEventListener("MSPointerUp",d,!0)):(document.addEventListener("touchmove",c,!0),document.addEventListener("touchend",d,!0),document.addEventListener("touchcancel",d,!0),document.addEventListener("mousemove",c,!0),document.addEventListener("mouseup",d,!0))))}function c(a){a.preventDefault(),k=f(a),i||(i=!0,window.requestAnimationFrame(g))}function d(a){a.cancelable&&a.preventDefault(),a.touches&&a.touches.length>0||(i=!1,window.navigator.msPointerEnabled?(document.removeEventListener("MSPointerMove",c,!0),document.removeEventListener("MSPointerUp",d,!0)):(document.removeEventListener("touchmove",c,!0),document.removeEventListener("touchend",d,!0),document.removeEventListener("touchcancel",d,!0),document.removeEventListener("mousemove",c,!0),document.removeEventListener("mouseup",d,!0)),e())}function e(){if(null==k)return l=0,void(j=null);var a=j.x-k.x;l-=a,-50>a&&Yb(),a>50&&Wb(),l=0,j=null,k=null,Math.abs(a)<50&&Pb(l)}function f(a){var b={};return a.targetTouches?(b.x=a.targetTouches[0].clientX,b.y=a.targetTouches[0].clientY):(b.x=a.clientX,b.y=a.clientY),b}function g(){if(i){var a=j.x-k.x;Pb(l-a),i=!1}}var h=a,i=!1,j=null,k=null,l=0;this.removeEventListeners=function(){window.navigator.msPointerEnabled?(h.removeEventListener("MSPointerDown",b,!0),document.removeEventListener("MSPointerMove",c,!0),document.removeEventListener("MSPointerUp",d,!0)):(h.removeEventListener("touchstart",b,!0),document.removeEventListener("touchmove",c,!0),document.removeEventListener("touchend",d,!0),document.removeEventListener("touchcancel",d,!0),document.removeEventListener("mousemove",c,!0),document.removeEventListener("mouseup",d,!0))},window.navigator.msPointerEnabled?h.addEventListener("MSPointerDown",b,!0):h.addEventListener("touchstart",b,!0)}function Pb(a){if(pc.imageSwipePosX=a,null==pc.CSStransformName)pc.$E.vwImgC.css({left:a});else if(pc.$E.vwImgC[0].style[pc.CSStransformName]="translateX("+a+"px)","slide"==pc.O.imageTransition)if(a>0){var b=(pc.$E.vwImgP,kc().w);pc.$E.vwImgP.css({visibility:"visible",left:0,opacity:1}),pc.$E.vwImgP[0].style[pc.CSStransformName]="translateX("+(-b+a)+"px) ",pc.$E.vwImgN[0].style[pc.CSStransformName]="translateX("+-b+"px) "}else{var b=(pc.$E.vwImgN,-kc().w);pc.$E.vwImgN.css({visibility:"visible",left:0,opacity:1}),pc.$E.vwImgN[0].style[pc.CSStransformName]="translateX("+(-b+a)+"px) ",pc.$E.vwImgP[0].style[pc.CSStransformName]="translateX("+-b+"px) "}}function Qb(){ngscreenfull.enabled&&(ngscreenfull.toggle(),pc.viewerIsFullscreen?(pc.viewerIsFullscreen=!1,pc.$E.conVwTb.find(".fullscreenButton").removeClass("removeFullscreenButton").addClass("setFullscreenButton")):(pc.viewerIsFullscreen=!0,pc.$E.conVwTb.find(".fullscreenButton").removeClass("setFullscreenButton").addClass("removeFullscreenButton")))}function Rb(){pc.playSlideshow?(window.clearInterval(pc.playSlideshowTimerID),pc.playSlideshow=!1,pc.$E.conVwTb.find(".playPauseButton").removeClass("pauseButton").addClass("playButton")):(pc.playSlideshow=!0,pc.$E.conVwTb.find(".playPauseButton").removeClass("playButton").addClass("pauseButton"),Xb(),pc.playSlideshowTimerID=window.setInterval(function(){Xb()},pc.slideshowDelay))}function Sb(){"std"==pc.toolbarMode?Ub():Tb()}function Tb(){pc.toolbarMode="std",pc.$E.conVwTb.find(".minimizeButton").removeClass("viewToolbarButton").addClass("hideToolbarButton"),Vb("std"),dc()}function Ub(){pc.toolbarMode="min",pc.$E.conVwTb.find(".minimizeButton").removeClass("hideToolbarButton").addClass("viewToolbarButton"),Vb("min"),dc()}function Vb(a){for(var b=pc.O.viewerToolbar,b="std"==a?pc.O.viewerToolbar.standard:pc.O.viewerToolbar.minimized,c=["minimizeButton","previousButton","pageCounter","nextButton","playPauseButton","fullscreenButton","infoButton","linkOriginalButton","closeButton","label"],d=0,e=c.length;e>d;d++)pc.$E.conVwTb.find("."+c[d]).css("label"==c[d]?""==pc.$E.conVwTb.find(".title").text()&&""==pc.$E.conVwTb.find(".description").text()?{display:"none"}:{display:b.indexOf(c[d])>=0?"table-cell":"none"}:{display:b.indexOf(c[d])>=0?"table-cell":"none"});pc.$E.conVwTb.find(".ngCustomBtn").css({display:"none"});for(var f=b.split(","),d=0,e=f.length;e>d;d++){var g=f[d].replace(/^\s+|\s+$/g,"");0==g.indexOf("custom")&&pc.$E.conVwTb.find("."+g).css({display:"table-cell"})
}}function Wb(){pc.playSlideshow&&(window.clearInterval(pc.playSlideshowTimerID),pc.playSlideshowTimerID=window.setInterval(function(){Xb()},pc.slideshowDelay)),Xb()}function Xb(){if(!(pc.viewerImageIsChanged||(new Date).getTime()-pc.timeImgChanged<300)){var a=(pc.I.length,_b(pc.viewerCurrentItemIdx));Zb(a,"nextImage")}}function Yb(){if(!(pc.viewerImageIsChanged||(new Date).getTime()-pc.timeImgChanged<300)){pc.playSlideshow&&Rb();var a=ac(pc.viewerCurrentItemIdx);Zb(a,"previousImage")}}function Zb(a,c){pc.timeImgChanged=(new Date).getTime(),pc.viewerImageIsChanged=!0;if(pc.O.locationHash){var d="nanogallery/"+pc.baseEltID+"/"+pc.I[a].albumID+"/"+pc.I[a].GetID();if("#"+d!=location.hash){pc.lastLocationHash="#"+d;try{top.location.hash=d}catch(e){pc.O.locationHash=!1}}else try{pc.lastLocationHash=top.location.hash}catch(e){pc.O.locationHash=!1}}if(pc.O.debugMode&&console.timeline&&console.timeline("nanoGALLERYviewer"),pc.viewerResizeTimerID=window.setTimeout(dc,100),pc.viewerCurrentItemIdx=a,""==c){pc.$E.vwImgC.css({opacity:0,left:0,visibility:"visible"}).attr("src",pc.emptyGif).attr("src",pc.I[a].responsiveURL());var f=new b;f.tween({from:{o:0},to:{o:1},attachment:{idx:a,dT:c},duration:400,step:function(a){pc.$E.vwImgC.css({opacity:a.o})},finish:function(a,b){pc.$E.vwImgC.css({opacity:1}),$b(b.idx,b.dT)}})}else switch(pc.O.imageTransition){case"fade":var g="nextImage"==c?pc.$E.vwImgN:pc.$E.vwImgP;g.css({opacity:0,left:0,visibility:"visible"});var f=new b;f.tween({from:{o:0},to:{o:1},attachment:{idx:a,dT:c,$e:g},duration:300,step:function(a,b){pc.$E.vwImgC.css({opacity:1-a.o}),b.$e.css({opacity:a.o})},finish:function(a,b){pc.$E.vwImgC.css({opacity:0}),b.$e.css({opacity:1}),$b(b.idx,b.dT)}});break;case"slideBETA":var g="nextImage"==c?pc.$E.vwImgN:pc.$E.vwImgP;if(g.css({opacity:1,left:0,visibility:"visible"}),null==pc.CSStransformName)jQuery.when(pc.$E.vwImgC.animate({left:("nextImage"==c?-kc().w:kc().w)+"px",opacity:0},500),g.animate({opacity:1},300)).done(function(){$b(a,c)});else{var h="nextImage"==c?-kc().w:kc().w;g[0].style[pc.CSStransformName]="translateX("+-h+"px) ";var i={v:pc.imageSwipePosX},j={v:"nextImage"==c?-kc().w:kc().w};jQuery(i).animate(j,{duration:500,step:function(a){pc.$E.vwImgC[0].style[pc.CSStransformName]="translateX("+a+"px)",pc.$E.vwImgC.css({opacity:1-Math.abs(a/h)}),g[0].style[pc.CSStransformName]="translateX("+(-h+a)+"px) "},complete:function(){pc.$E.vwImgC[0].style[pc.CSStransformName]="",pc.$E.vwImgC.css({opacity:0}),$b(a,c)}})}break;case"slideOLD":var g="nextImage"==c?pc.$E.vwImgN:pc.$E.vwImgP;if(null==pc.CSStransformName)g.css({opacity:0,left:0,visibility:"visible"}),jQuery.when(pc.$E.vwImgC.animate({left:("nextImage"==c?-kc().w:kc().w)+"px"},500),g.animate({opacity:1},300)).done(function(){$b(a,c)});else{g.css({opacity:1,left:0,visibility:"visible"});var h="nextImage"==c?-kc().w:kc().w;g[0].style[pc.CSStransformName]="translateX("+-h+"px) ";var i={v:pc.imageSwipePosX},j={v:"nextImage"==c?-kc().w:kc().w};jQuery(i).animate(j,{duration:400,easing:"linear",step:function(a){window.requestAnimationFrame(function(){pc.$E.vwImgC[0].style[pc.CSStransformName]="translateX("+a+"px)",g[0].style[pc.CSStransformName]="translateX("+(-h+a)+"px) "})},complete:function(){window.requestAnimationFrame(function(){pc.$E.vwImgC[0].style[pc.CSStransformName]="",$b(a,c)})}})}break;case"slide":var g="nextImage"==c?pc.$E.vwImgN:pc.$E.vwImgP;if(null==pc.CSStransformName)g.css({opacity:0,left:0,visibility:"visible"}),jQuery.when(pc.$E.vwImgC.animate({left:2*("nextImage"==c?-kc().w:kc().w)+"px"},500),g.animate({opacity:1},300)).done(function(){$b(a,c)});else{var h="nextImage"==c?-kc().w:kc().w;g.css({opacity:1,left:0,visibility:"visible"}),g[0].style[pc.CSStransformName]="translateX("+-h+"px) ";var f=new b;f.tween({from:{t:pc.imageSwipePosX},to:{t:"nextImage"==c?-kc().w:kc().w},attachment:{idx:a,dT:c,$e:g,dir:h},duration:300,step:function(a,b){pc.$E.vwImgC[0].style[pc.CSStransformName]="translateX("+a.t+"px)",b.$e[0].style[pc.CSStransformName]="translateX("+(-b.dir+a.t)+"px) "},finish:function(a,b){pc.$E.vwImgC[0].style[pc.CSStransformName]="",b.$e[0].style[pc.CSStransformName]="",$b(b.idx,b.dT)}})}break;case"slideAppear":default:var h=kc().w+"px",g=pc.$E.vwImgP;"nextImage"==c&&(h="-"+h,g=pc.$E.vwImgN),g.css({opacity:0,left:0,visibility:"visible"}),jQuery.when(pc.$E.vwImgC.animate({left:h,opacity:0},500),g.animate({opacity:1},300)).done(function(){Pb(0),$b(a,c)})}}function $b(a,b){if(bc(a),pc.O.debugMode&&console.timeline&&console.timelineEnd("nanoGALLERYviewer"),"function"!=typeof pc.O.fnImgDisplayed||pc.O.fnImgDisplayed(pc.I[a].$elt,pc.I[a])){pc.imageSwipePosX=0,pc.$E.vwImgC.off("click"),pc.$E.vwImgC.removeClass("imgCurrent");var c=pc.$E.vwImgC;switch(b){case"nextImage":pc.$E.vwImgC=pc.$E.vwImgN,pc.$E.vwImgN=c;break;case"previousImage":pc.$E.vwImgC=pc.$E.vwImgP,pc.$E.vwImgP=c}pc.$E.vwImgC.addClass("imgCurrent"),pc.$E.vwImgN.css({opacity:0,left:0,visibility:"hidden"}).attr("src",pc.emptyGif).attr("src",pc.I[_b(a)].responsiveURL()),pc.$E.vwImgP.css({opacity:0,left:0,visibility:"hidden"}).attr("src",pc.emptyGif).attr("src",pc.I[ac(a)].responsiveURL()),pc.$E.vwImgC.on("click",function(a){a.stopPropagation(),a.pageX<jQuery(window).width()/2?Yb():Wb()}),dc(),pc.viewerImageIsChanged=!1}}function _b(a){for(var b=pc.I.length,c=-1,d=a+1;b>d;d++)if(pc.I[d].albumID==pc.I[a].albumID&&"image"==pc.I[d].kind){c=d;break}if(-1==c)for(var d=0;a>=d;d++)if(pc.I[d].albumID==pc.I[a].albumID&&"image"==pc.I[d].kind){c=d;break}return c}function ac(a){for(var b=-1,c=a-1;c>=0;c--)if(pc.I[c].albumID==pc.I[a].albumID&&"image"==pc.I[c].kind){b=c;break}if(-1==b)for(var c=pc.I.length-1;c>=a;c--)if(pc.I[c].albumID==pc.I[a].albumID&&"image"==pc.I[c].kind){b=c;break}return b}function bc(a){if(pc.O.viewerToolbar.display){pc.$E.conVwTb.css({visibility:"visible"});var b=!1;void 0!==pc.I[a].title&&""!=pc.I[a].title?(pc.$E.conVwTb.find(".title").html(pc.I[a].title),b=!0):pc.$E.conVwTb.find(".title").html(""),void 0!==pc.I[a].description&&""!=pc.I[a].description?(pc.$E.conVwTb.find(".description").html(pc.I[a].description),b=!0):pc.$E.conVwTb.find(".description").html("");var c=pc.$E.conVwTb.find(".ngCustomBtn");c.length>0&&"function"==typeof pc.O.fnImgToolbarCustDisplay&&pc.O.fnImgToolbarCustDisplay(c,pc.I[a],e()),b&&("std"==pc.toolbarMode?pc.O.viewerToolbar.standard:pc.O.viewerToolbar.minimized).indexOf("label")>=0?pc.$E.conVwTb.find(".label").show():pc.$E.conVwTb.find(".label").hide();var d=pb();d>0&&pc.$E.conVwTb.find(".pageCounter").html(pc.I[a].imageNumber+1+"/"+d)}}function cc(a){if(pc.viewerImageIsChanged&&pc.$E.vwContent.find("*").stop(!0,!0),pc.viewerImageIsChanged=!1,pc.containerViewerDisplayed){if(window.clearTimeout(pc.viewerResizeTimerID),pc.playSlideshow&&(window.clearInterval(pc.playSlideshowTimerID),pc.playSlideshow=!1),pc.viewerSwipe.removeEventListeners(),pc.viewerSwipe=null,pc.O.galleryFullpageButton&&pc.$E.base.hasClass("fullpage")||k(),pc.viewerIsFullscreen&&(pc.viewerIsFullscreen=!1,ngscreenfull.exit()),pc.$E.conVwCon.hide(0).off().show(0).html("").remove(),pc.containerViewerDisplayed=!1,-1!=pc.albumIdxToOpenOnViewerClose)S(pc.albumIdxToOpenOnViewerClose,!0);else{if(pc.O.locationHash&&a){var b=pc.I[pc.viewerCurrentItemIdx].albumID,c="nanogallery/"+pc.baseEltID+"/"+b;pc.lastLocationHash="#"+c;try{top.location.hash=c}catch(d){pc.O.locationHash=!1}}zb()}pc.timeImgChanged=(new Date).getTime()}}function dc(){pc.containerViewerDisplayed&&((new Date).getTime()-pc.viewerResizeTimerLastRun<100||window.requestAnimationFrame(function(){var a=pc.$E.conVw.width(),b=pc.$E.conVw.height(),c=pc.$E.vwImgC,d=c.height(),e=c.width(),f=c.outerHeight(!0),g=c.outerHeight(!1),h=pc.$E.conVwTb.find(".toolbar"),i=h.outerHeight(!0);pc.$E.conVwTb.css(40>=d||!pc.O.viewerToolbar.display?{visibility:"hidden"}:{visibility:"visible"});var j=Math.abs(pc.$E.vwContent.outerHeight(!0)-pc.$E.vwContent.height()),k=Math.abs(pc.$E.vwContent.outerWidth(!0)-pc.$E.vwContent.width()),l=g-c.innerHeight(),m=Math.abs(c.outerWidth(!1)-c.innerWidth()),n=Math.abs(c.innerHeight()-d),o=Math.abs(c.innerWidth()-e),p=l+n,q=m+o,r=0;"innerImage"!=pc.O.viewerToolbar.style&&(r=i);var s=b-r-j,t=a-k;switch(pc.O.viewerToolbar.position){case"top":pc.$E.vwContent.css({height:s,width:t,top:r});var u=0;"innerImage"==pc.O.viewerToolbar.style&&(u=Math.abs(f-d)/2+5),"stuckImage"==pc.O.viewerToolbar.style&&(u=Math.abs(f-d)/2-p),pc.$E.conVwTb.css({top:u});break;case"bottom":default:pc.$E.vwContent.css({height:s,width:t});var u=0;"innerImage"==pc.O.viewerToolbar.style&&(u=Math.abs(f-d)/2+5),"stuckImage"==pc.O.viewerToolbar.style&&(u=Math.abs(f-d)/2-p),pc.$E.conVwTb.css({bottom:u})}"innerImage"==pc.O.viewerToolbar.style&&h.css({"max-width":e}),"fullWidth"==pc.O.viewerToolbar.style&&h.css({width:t}),pc.$E.conVwTb.css({height:i}),pc.$E.vwContent.children("img").css({"max-width":t-q,"max-height":s-p}),pc.$E.vwContent.children("img").css({"object-fit":"contain"}),pc.viewerResizeTimerID=window.setTimeout(dc,100),pc.viewerResizeTimerLastRun=(new Date).getTime()}))}function ec(a){var b=a,c=[],d=0;c.push(pc.I[b]);for(var e=pc.I.length,f=b+1;e>f;f++)"image"==pc.I[f].kind&&pc.I[f].albumID==pc.I[a].albumID&&""==pc.I[f].destinationURL&&(d++,c.push(pc.I[f]));for(var f=0;b>f;f++)"image"==pc.I[f].kind&&pc.I[f].albumID==pc.I[a].albumID&&""==pc.I[f].destinationURL&&(d++,c.push(pc.I[f]));pc.O.fnThumbnailOpen(c)}function fc(a){var b=a,c=[],d=0;c[d]=new Object,c[d].href=pc.I[b].responsiveURL(),c[d].title=pc.I[b].title;for(var e=pc.I.length,f=b+1;e>f;f++)"image"==pc.I[f].kind&&pc.I[f].albumID==pc.I[a].albumID&&""==pc.I[f].destinationURL&&(d++,c[d]=new Object,c[d].href=pc.I[f].responsiveURL(),c[d].title=pc.I[f].title);for(var f=0;b>f;f++)"image"==pc.I[f].kind&&pc.I[f].albumID==pc.I[a].albumID&&""==pc.I[f].destinationURL&&(d++,c[d]=new Object,c[d].href=pc.I[f].responsiveURL(),c[d].title=pc.I[f].title);null!=pc.O.fancyBoxOptions?jQuery.fancybox(c,pc.O.fancyBoxOptions):jQuery.fancybox(c,{autoPlay:!1,nextEffect:"fade",prevEffect:"fade",scrolling:"no",helpers:{buttons:{position:"bottom"}}})}function gc(a){var b=null;switch(rc(pc.O.colorScheme)){case"object":b=pc.colorScheme_default,jQuery.extend(!0,b,pc.O.colorScheme),pc.colorSchemeLabel="nanogallery_colorscheme_custom_"+pc.baseEltID;break;case"string":switch(pc.O.colorScheme){case"none":return;case"light":b=pc.colorScheme_light,pc.colorSchemeLabel="nanogallery_colorscheme_light";break;case"lightBackground":b=pc.colorScheme_lightBackground,pc.colorSchemeLabel="nanogallery_colorscheme_lightBackground";break;case"darkRed":b=pc.colorScheme_darkRed,pc.colorSchemeLabel="nanogallery_colorscheme_darkred";break;case"darkGreen":b=pc.colorScheme_darkGreen,pc.colorSchemeLabel="nanogallery_colorscheme_darkgreen";break;case"darkBlue":b=pc.colorScheme_darkBlue,pc.colorSchemeLabel="nanogallery_colorscheme_darkblue";break;case"darkOrange":b=pc.colorScheme_darkOrange,pc.colorSchemeLabel="nanogallery_colorscheme_darkorange";break;case"default":case"dark":default:b=pc.colorScheme_default,pc.colorSchemeLabel="nanogallery_colorscheme_default"}break;default:return void ic("Error in colorScheme parameter.")}var c="."+pc.colorSchemeLabel+" ",d=c+".nanoGalleryNavigationbar { background:"+b.navigationbar.background+" !important; }\n";void 0!==b.navigationbar.border&&(d+=c+".nanoGalleryNavigationbar { border:"+b.navigationbar.border+" !important; }\n"),void 0!==b.navigationbar.borderTop&&(d+=c+".nanoGalleryNavigationbar { border-top:"+b.navigationbar.borderTop+" !important; }\n"),void 0!==b.navigationbar.borderBottom&&(d+=c+".nanoGalleryNavigationbar { border-bottom:"+b.navigationbar.borderBottom+" !important; }\n"),void 0!==b.navigationbar.borderRight&&(d+=c+".nanoGalleryNavigationbar { border-right:"+b.navigationbar.borderRight+" !important; }\n"),void 0!==b.navigationbar.borderLeft&&(d+=c+".nanoGalleryNavigationbar { border-left:"+b.navigationbar.borderLeft+" !important; }\n"),d+=c+".nanoGalleryNavigationbar .oneFolder  { color:"+b.navigationbar.color+" !important; }\n",d+=c+".nanoGalleryNavigationbar .separator  { color:"+b.navigationbar.color+" !important; }\n",d+=c+".nanoGalleryNavigationbar .separatorRTL  { color:"+b.navigationbar.color+" !important; }\n",d+=c+".nanoGalleryNavigationbar .nanoGalleryTags { color:"+b.navigationbar.color+" !important; }\n",d+=c+".nanoGalleryNavigationbar .setFullPageButton { color:"+b.navigationbar.color+" !important; }\n",d+=c+".nanoGalleryNavigationbar .removeFullPageButton { color:"+b.navigationbar.color+" !important; }\n",d+=c+".nanoGalleryNavigationbar .oneFolder:hover { color:"+b.navigationbar.colorHover+" !important; }\n",d+=c+".nanoGalleryNavigationbar .separatorRTL:hover { color:"+b.navigationbar.colorHover+" !important; }\n",d+=c+".nanoGalleryNavigationbar .nanoGalleryTags:hover { color:"+b.navigationbar.colorHover+" !important; }\n",d+=c+".nanoGalleryNavigationbar .setFullPageButton:hover { color:"+b.navigationbar.colorHover+" !important; }\n",d+=c+".nanoGalleryNavigationbar .removeFullPageButton:hover { color:"+b.navigationbar.colorHover+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer { background:"+b.thumbnail.background+" !important; border:"+b.thumbnail.border+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .imgContainer { background:"+b.thumbnail.background+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelImage{ background:"+b.thumbnail.labelBackground+" ; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelImageTitle  { color:"+b.thumbnail.titleColor+" !important; Text-Shadow:"+b.thumbnail.titleShadow+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelImageTitle:before { color:"+b.thumbnail.titleColor+" !important; Text-Shadow:"+b.thumbnail.titleShadow+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelFolderTitle { color:"+b.thumbnail.titleColor+" !important; Text-Shadow:"+b.thumbnail.titleShadow+" !important; }\n";var e=b.thumbnail.labelBackground;"transparent"==e&&(e=""),d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelFolderTitle > span { background-color:"+b.thumbnail.titleColor+" !important; color:"+e+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelFolderTitle:before { color:"+b.thumbnail.titleColor+" !important; Text-Shadow:"+b.thumbnail.titleShadow+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelDescription { color:"+b.thumbnail.descriptionColor+" !important; Text-Shadow:"+b.thumbnail.descriptionShadow+" !important; }\n",d+=c+".nanoGalleryContainer > .nanoGalleryThumbnailContainer .labelDescription > span { background-color:"+b.thumbnail.titleColor+" !important; color:"+e+" !important; }\n",pc.O.paginationDots&&(d+=c+".nanoGalleryPaginationDot > .paginationItem { border:"+b.thumbnail.paginationDotBorder+" !important; background:"+b.thumbnail.paginationDotBack+" !important;}\n",d+=c+".nanoGalleryPaginationDot > .currentPage { background:"+b.thumbnail.paginationDotSelBack+" !important;}\n");var f="nanogallery_galleryfullpage_bgcolor_"+pc.baseEltID;d+="."+f+".fullpage { background:"+pc.O.galleryFullpageBgColor+" !important; }\n",jQuery("head").append("<style>"+d+"</style>"),jQuery(a).addClass(pc.colorSchemeLabel),jQuery(a).addClass(f)}function hc(a){var b=null;switch(rc(pc.O.colorSchemeViewer)){case"object":b=pc.colorSchemeViewer_default,jQuery.extend(!0,b,pc.O.colorSchemeViewer),pc.colorSchemeLabel="nanogallery_colorschemeviewer_custom";break;case"string":switch(pc.O.colorSchemeViewer){case"none":return;case"light":b=pc.colorSchemeViewer_light,pc.colorSchemeLabel="nanogallery_colorschemeviewer_light";break;case"darkRed":b=pc.colorSchemeViewer_darkRed,pc.colorSchemeLabel="nanogallery_colorschemeviewer_darkred";break;case"darkGreen":b=pc.colorSchemeViewer_darkGreen,pc.colorSchemeLabel="nanogallery_colorschemeviewer_darkgreen";break;case"darkBlue":b=pc.colorSchemeViewer_darkBlue,pc.colorSchemeLabel="nanogallery_colorschemeviewer_darkblue";break;case"darkOrange":b=pc.colorSchemeViewer_darkOrange,pc.colorSchemeLabel="nanogallery_colorschemeviewer_darkorange";break;case"dark":b=pc.colorSchemeViewer_dark,pc.colorSchemeLabel="nanogallery_colorschemeviewer_dark";break;case"default":default:b=pc.colorSchemeViewer_default,pc.colorSchemeLabel="nanogallery_colorschemeviewer_default"}break;default:return void ic("Error in colorSchemeViewer parameter.")}var c="."+pc.colorSchemeLabel+" ",d=c+".nanoGalleryViewer { background:"+b.background+" !important; }\n";d+=c+".nanoGalleryViewer .content img { border:"+b.imageBorder+" !important; box-shadow:"+b.imageBoxShadow+" !important; }\n",d+=c+".nanoGalleryViewer .toolbar { background:"+b.barBackground+" !important; border:"+b.barBorder+" !important; color:"+b.barColor+" !important; }\n",d+=c+".nanoGalleryViewer .toolbar .previousButton:after { color:"+b.barColor+" !important; }\n",d+=c+".nanoGalleryViewer .toolbar .nextButton:after { color:"+b.barColor+" !important; }\n",d+=c+".nanoGalleryViewer .toolbar .closeButton:after { color:"+b.barColor+" !important; }\n",d+=c+".nanoGalleryViewer .toolbar .label .title { color:"+b.barColor+" !important; }\n",d+=c+".nanoGalleryViewer .toolbar .label .description { color:"+b.barDescriptionColor+" !important; }\n",jQuery("head").append("<style>"+d+"</style>"),jQuery(a).addClass(pc.colorSchemeLabel)}function ic(a,b){jc(a),null!=pc.$E.conConsole&&(pc.$E.conConsole.css({visibility:"visible",height:"auto"}),pc.$E.conConsole.append(0==b?"<p>"+a+"</p>":"<p>nanoGALLERY: "+a+" ["+pc.baseEltID+"]</p>"))}function jc(a){window.console&&console.log("nanoGALLERY: "+a+" ["+pc.baseEltID+"]")}function kc(){var a=jQuery(window);return vpW=a.width(),pc.O.demoViewportWidth>0&&(pc.O.demoViewportWidth<vpW&&(vpW=pc.O.demoViewportWidth),pc.O.maxWidth=vpW,jQuery(pc.$E.base).css({width:pc.O.maxWidth}),jQuery(pc.$E.base).css({"margin-left":"auto"}),jQuery(pc.$E.base).css({"margin-right":"auto"})),{l:a.scrollLeft(),t:a.scrollTop(),w:vpW,h:a.height()}}function lc(a,b){var c=kc(),d=a.offset(),e=a.outerHeight(!0),f=a.outerWidth(!0);return d.top>=c.t-b&&d.top+e<=c.t+c.h+b&&d.left>=c.l-b&&d.left+f<=c.l+c.w+b?!0:!1}function mc(a,b){{var c=kc(),d=a.offset(),e=a.outerHeight(!0);a.outerWidth(!0)}return 0==c.t&&d.top<=c.t+c.h?!0:d.top>=c.t&&d.top+e<=c.t+c.h-b?!0:!1}function nc(a,b){var c=0;""==a&&(a="*"),jQuery(a).each(function(){var a=parseInt(jQuery(this).css("z-index"));c=a>c?a:c}),c++,jQuery(b).css("z-index",c)}function oc(a){for(var b,c,d=a.length;d;b=Math.floor(Math.random()*d),c=a[--d],a[d]=a[b],a[b]=c);return a}this.ReloadAlbum=function(){if(""===pc.O.kind)throw"Not supported for this kind.";for(var a=pc.I.length,b=-1,c=0;a>c;c++)if(pc.lastOpenAlbumID==pc.I[c].GetID()){b=c;break}if(-1==b)throw"Current album not found.";pc.O.keepSelection===!1&&(pc.selectedItems=[]);for(var d=0;a>d;d++)pc.O.keepSelection===!1&&(pc.I[d].selected=!1),pc.I[d].albumID==b&&(pc.I[d].albumID=-1);switch(pc.I[b].contentIsLoaded=!1,pc.lastOpenAlbumID=-1,pc.O.kind){case"json":return D(b,!1,-1,!1,!0);case"flickr":return G(b,!1,-1,!1,!0);case"picasa":default:return M(b,!1,-1,!1,!0)}},this.moveToNextAlbum=function(){U()},this.moveToPreviousAlbum=function(){V()},this.closeViewer=function(){return cc(!0),!1},this.minimizeToolbar=function(){return Ub(),!1},this.maximizeToolbar=function(){return Tb(),!1},this.RefreshSize=function(){cb()},this.displayItem=function(a){return w(!1,a,!0)},this.paginationPreviousPage=function(){ob()},this.paginationNextPage=function(){nb()},this.paginationGotoPage=function(b){var c=pc.$E.conPagin.data("galleryIdx");mc(pc.$E.base,0)||a("html, body").animate({scrollTop:pc.$E.base.offset().top},200),b>1&&b--,qb(c,b)},this.paginationCountPages=function(){var a=pc.$E.conPagin.data("galleryIdx"),b=0;return pc.pgMaxLinesPerPage>0&&(b=pc.I[a].contentLength/(pc.pgMaxLinesPerPage*pc.pgMaxNbThumbnailsPerRow)),n2=Math.ceil(b),n2},this.galleryCountImages=function(){return pb()},this.GetItem=function(a){if(isNaN(a))throw"index must be a number";return pc.I[a]},this.GetItems=function(){return pc.I},this.GetItemsIndex=function(a){for(var b=[],c=a.length,d=0;c>d;d++){if(index=isNaN(a[d])?pc.I.indexOf(a[d]):a[d],isNaN(index))throw"This item does not exists";b.push(index)}return b},this.SetSelectedItems=function(a){for(var b=a.length,c=0;b>c;c++)null!==a[c].$elt&&wb(a[c],!0)},this.SetUnselectedItems=function(a){for(var b=a.length,c=0;b>c;c++)null!==a[c].$elt&&wb(a[c],!1)},this.GetSelectedItems=function(){return pc.selectedItems},this.GetCurrentViewedItem=function(){return pc.containerViewerDisplayed?pc.I[pc.viewerCurrentItemIdx]:null},this.GetCurrentViewedItemIdx=function(){return pc.containerViewerDisplayed?pc.viewerCurrentItemIdx:-1},this.Get=function(a){return pc.O[a]},this.Set=function(a,b){pc.O[a]=b},this.SetSelectMode=function(b){"undefined"==typeof b&&pc.selectModeForce===!0&&(b=pc.selectMode),(b===!0||b===!1||"image"===b||"album"===b)&&(pc.selectModeForce=b!==!1,pc.selectMode=b,"album"===b||"image"==b?pc.$E.base.find(".nanoGalleryThumbnailContainer").each(function(){a(this).hasClass("album")&&"image"===b||!a(this).hasClass("album")&&"album"===b?a(this).addClass("unselectable"):a(this).removeClass("unselectable")}):pc.$E.base.find(".nanoGalleryThumbnailContainer").removeClass("unselectable"),(pc.O.keepSelection===!1||b===!1)&&this.SetUnselectedItems(pc.I),"function"==typeof pc.O.fnChangeSelectMode&&pc.O.fnChangeSelectMode(pc.selectMode))},this.GetSelectMode=function(){return pc.selectMode};var pc=this;pc.I=[],pc.O=null,pc.$E={base:null,conTnParent:null,conLoadingB:null,conConsole:null,conTn:null,conTnHid:null,conPagin:null,conBC:null,conNavB:null,conNavBCon:null,conNavBFullpage:null,conVwCon:null,conVw:null,conVwTb:null,vwImgP:null,vwImgN:null,vwImgC:null,vwContent:null,vwLogo:null},pc.i18nTranslations={paginationPrevious:"Previous",paginationNext:"Next",breadcrumbHome:"List of Albums",thumbnailImageTitle:"",thumbnailAlbumTitle:"",thumbnailImageDescription:"",thumbnailAlbumDescription:""},pc.$currentTouchedThumbnail=null,pc.baseEltID=null,pc.containerTags=null,pc.containerNavigationbarContDisplayed=!1,pc.containerViewerDisplayed=!1,pc.containerThumbnailsDisplayed=!1,pc.tn={displayInterval:30,lazyLoadTreshold:100,scale:1,borderWidth:0,borderHeight:0,imgcBorderHeight:0,imgcBorderWidth:0,labelHeight:{l1:0,lN:0,get:function(){return pc.tn.labelHeight[pc.curNavLevel]}},outerWidth:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0},get:function(){return pc.tn.outerWidth[pc.curNavLevel][pc.curWidth]}},outerHeight:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0},get:function(){return pc.tn.outerHeight[pc.curNavLevel][pc.curWidth]}},settings:{width:{l1:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"},lN:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"},lN:{xs:0,sm:0,me:0,la:0,xl:0,xsc:"u",smc:"u",mec:"u",lac:"u",xlc:"u"}},getH:function(){return pc.tn.settings.height[pc.curNavLevel][pc.curWidth]},getW:function(){return pc.tn.settings.width[pc.curNavLevel][pc.curWidth]}},getHE:function(){return"l1"==pc.curNavLevel&&0!==pc.tnL1HE.length?pc.tnL1HE:pc.tnHE},styleFTitle:"",styleITitle:"",styleDesc:"",styleLabelImage:"",styleL1FTitle:"",styleL1ITitle:"",styleL1Desc:"",styleL1LabelImage:""},pc.tnHE=[],pc.tnL1HE=[],pc.L={nbMaxTnPerRow:0},pc.blackList=null,pc.whiteList=null,pc.albumList=null,pc.galleryItemsCount=0,pc.toolbarMode="std",pc.playSlideshow=!1,pc.playSlideshowTimerID=0,pc.slideshowDelay=3e3,pc.touchAutoOpenDelayTimerID=0,pc.supportFullscreenAPI=!1,pc.viewerIsFullscreen=!1,pc.bodyOverflowInitial=null,pc.i18nLang="",pc.timeImgChanged=0,pc.timeLastTouchStart=0,pc.pgMaxNbThumbnailsPerRow=1,pc.pgMaxLinesPerPage=0,pc.lastOpenAlbumID=-1,pc.lastLocationHash="",pc.touchSelectTO=null,pc.viewerImageIsChanged=!1,pc.viewerResizeTimerID=-1,pc.viewerResizeTimerLastRun=-1,pc.viewerCurrentItemIdx=-1,pc.imageSwipePosX=0,pc.albumIdxToOpenOnViewerClose=-1,pc.custGlobals={},pc.delayedAlbumIdx=-1,pc.curAlbumIdx=-1,pc.delayedSetLocationHash=!1,pc.viewerSwipe=null,pc.isShiftPressed=!1,pc.isAltPressed=!1,pc.isCtrlPressed=!1,pc.isMetaPressed=!1,pc.selectedItems=[],pc.aengine="animate",pc.scrollTimeOut=0,pc.maxAlbums=1e6,pc.maxPhotos=1e6,pc.curNavLevel="l1",pc.curWidth="me",pc.gallerySwipeInitDone=!1,pc.emptyGif="data:image/gif;base64,R0lGODlhEAAQAIAAAP///////yH5BAEKAAEALAAAAAAQABAAAAIOjI+py+0Po5y02ouzPgUAOw==",pc.CSStransformName=g(["transform","msTransform","MozTransform","WebkitTransform","OTransform"]),pc.CSStransformStyle=g(["transformStyle","msTransformStyle","MozTransformStyle","WebkitTransformStyle","OTransformStyle"]),pc.CSSperspective=g(["perspective","msPerspective","MozPerspective","WebkitPerspective","OPerspective"]),pc.CSSbackfaceVisibilityName=g(["backfaceVisibility","msBackfaceVisibility","MozBackfaceVisibility","WebkitBackfaceVisibility","OBackfaceVisibility"]),pc.CSStransitionName=g(["transition","msTransition","MozTransition","WebkitTransition","OTransition"]),pc.CSSanimationName=g(["animation","msAnimation","MozAnimation","WebkitAnimation","OAnimation"]),pc.IE=function(){if(document.documentMode)return document.documentMode;for(var a=7;a>4;a--){var b=document.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return void 0}(),pc.isIOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),pc.isGingerbread=/Android 2\.3\.[3-7]/i.test(navigator.userAgent),pc.openNoDelay=!1,pc.startDateTime=new Date,pc.toRender=[],pc.picasa={url:function(){return pc.O.picasaUseUrlCrossDomain?"https://photos.googleapis.com/data/feed/api/":"https://picasaweb.google.com/data/feed/api/"},thumbSize:64,thumbAvailableSizes:new Array(32,48,64,72,94,104,110,128,144,150,160,200,220,288,320,400,512,576,640,720,800,912,1024,1152,1280,1440,1600),thumbAvailableSizesCropped:" 32 48 64 72 104 144 150 160 "},pc.flickr={url:function(){return"https://api.flickr.com/services/rest/"},thumbSize:"sq",thumbSizeX2:"sq",thumbAvailableSizes:new Array(75,100,150,240,500,640),thumbAvailableSizesStr:new Array("sq","t","q","s","m","z"),photoSize:"sq",photoAvailableSizes:new Array(75,100,150,240,500,640,1024,1024,1600,2048),photoAvailableSizesStr:new Array("sq","t","q","s","m","z","b","l","h","k"),ApiKey:"2f0e634b471fdb47446abcb9c5afebdc"},pc.colorScheme_default={navigationbar:{background:"none",borderTop:"1px solid #555",borderBottom:"1px solid #555",borderRight:"",borderLeft:"",color:"#ccc",colorHover:"#fff"},thumbnail:{background:"#000",border:"1px solid #000",labelBackground:"rgba(34, 34, 34, 0.75)",titleColor:"#eee",titleShadow:"",descriptionColor:"#ccc",descriptionShadow:"",paginationDotBorder:"2px solid #fff",paginationDotBack:"#444",paginationDotSelBack:"#fff"}},pc.colorScheme_darkRed={navigationbar:{background:"#a60000",border:"1px dotted #ff0000",color:"#ccc",colorHover:"#fff"},thumbnail:{background:"#a60000",border:"1px solid #ff0000",labelBackground:"rgba(134, 0, 0, 0.75)",titleColor:"#eee",titleShadow:"",descriptionColor:"#ccc",descriptionShadow:"",paginationDotBorder:"2px solid #d00",paginationDotBack:"#400",paginationDotSelBack:"#d00"}},pc.colorScheme_darkGreen={navigationbar:{background:"#008500",border:"1px dotted #00cc00",color:"#ccc",colorHover:"#fff"},thumbnail:{background:"#008500",border:"1px solid #00cc00",labelBackground:"rgba(0, 105, 0, 0.75)",titleColor:"#eee",titleShadow:"",descriptionColor:"#ccc",descriptionShadow:"",paginationDotBorder:"2px solid #0c0",paginationDotBack:"#008500",paginationDotSelBack:"#0c0"}},pc.colorScheme_darkBlue={navigationbar:{background:"#071871",border:"1px dotted #162ea2",color:"#ccc",colorHover:"#fff"},thumbnail:{background:"#071871",border:"1px solid #162ea2",labelBackground:"rgba(7, 8, 81, 0.75)",titleColor:"#eee",titleShadow:"",descriptionColor:"#ccc",descriptionShadow:"",paginationDotBorder:"2px solid #162ea2",paginationDotBack:"#071871",paginationDotSelBack:"#162ea2"}},pc.colorScheme_darkOrange={navigationbar:{background:"#a67600",border:"1px dotted #ffb600",color:"#ccc",colorHover:"#fff"},thumbnail:{background:"#a67600",border:"1px solid #ffb600",labelBackground:"rgba(134, 86, 0, 0.75)",titleColor:"#eee",titleShadow:"",descriptionColor:"#ccc",descriptionShadow:"",paginationDotBorder:"2px solid #ffb600",paginationDotBack:"#a67600",paginationDotSelBack:"#ffb600"}},pc.colorScheme_light={navigationbar:{background:"none",borderTop:"1px solid #ddd",borderBottom:"1px solid #ddd",borderRight:"",borderLeft:"",color:"#777",colorHover:"#eee"},thumbnail:{background:"#fff",border:"1px solid #fff",labelBackground:"rgba(60, 60, 60, 0.75)",titleColor:"#fff",titleShadow:"none",descriptionColor:"#eee",descriptionShadow:"none",paginationDotBorder:"2px solid #555",paginationDotBack:"#888",paginationDotSelBack:"#555"}},pc.colorScheme_lightBackground={navigationbar:{background:"none",border:"",color:"#000",colorHover:"#444"},thumbnail:{background:"#000",border:"1px solid #000",labelBackground:"rgba(34, 34, 34, 0.85)",titleColor:"#fff",titleShadow:"",descriptionColor:"#eee",descriptionShadow:"",paginationDotBorder:"2px solid #555",paginationDotBack:"#888",paginationDotSelBack:"#555"}},pc.colorSchemeViewer_default={background:"#000",imageBorder:"4px solid #000",imageBoxShadow:"#888 0px 0px 0px",barBackground:"rgba(4, 4, 4, 0.7)",barBorder:"0px solid #111",barColor:"#eee",barDescriptionColor:"#aaa"},pc.colorSchemeViewer_dark={background:"rgba(1, 1, 1, 0.75)",imageBorder:"4px solid #f8f8f8",imageBoxShadow:"#888 0px 0px 20px",barBackground:"rgba(4, 4, 4, 0.7)",barBorder:"0px solid #111",barColor:"#eee",barDescriptionColor:"#aaa"},pc.colorSchemeViewer_darkRed={background:"rgba(1, 1, 1, 0.75)",imageBorder:"4px solid #ffa3a3",imageBoxShadow:"#ff0000 0px 0px 20px",barBackground:"#a60000",barBorder:"2px solid #111",barColor:"#eee",barDescriptionColor:"#aaa"},pc.colorSchemeViewer_darkGreen={background:"rgba(1, 1, 1, 0.75)",imageBorder:"4px solid #97e697",imageBoxShadow:"#00cc00 0px 0px 20px",barBackground:"#008500",barBorder:"2px solid #111",barColor:"#eee",barDescriptionColor:"#aaa"},pc.colorSchemeViewer_darkBlue={background:"rgba(1, 1, 1, 0.75)",imageBorder:"4px solid #a0b0d7",imageBoxShadow:"#162ea2 0px 0px 20px",barBackground:"#071871",barBorder:"2px solid #111",barColor:"#eee",barDescriptionColor:"#aaa"},pc.colorSchemeViewer_darkOrange={background:"rgba(1, 1, 1, 0.75)",imageBorder:"4px solid #ffd7b7",imageBoxShadow:"#ffb600 0px 0px 20px",barBackground:"#a67600",barBorder:"2px solid #111",barColor:"#eee",barDescriptionColor:"#aaa"},pc.colorSchemeViewer_light={background:"rgba(187, 187, 187, 0.75)",imageBorder:"none",imageBoxShadow:"#888 0px 0px 0px",barBackground:"rgba(4, 4, 4, 0.7)",barBorder:"0px solid #111",barColor:"#eee",barDescriptionColor:"#aaa"};var qc=function(){function a(a,c){var d=0;d=void 0===c||null===c?b++:c,this.GetID=function(){return d},this.title=a,this.description="",this.src="",this.width=0,this.height=0,this.destinationURL="",this.kind="",this.author="",this.thumbFullWidth=0,this.thumbFullHeight=0,this.thumbLabelWidth=0,this.thumbLabelHeight=0,this.thumbSizes={},this.thumbs={url:{l1:{xs:"",sm:"",me:"",la:"",xl:""},lN:{xs:"",sm:"",me:"",la:"",xl:""}},width:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}},height:{l1:{xs:0,sm:0,me:0,la:0,xl:0},lN:{xs:0,sm:0,me:0,la:0,xl:0}}},this.picasaThumbs=null,this.hovered=!1,this.hoverInitDone=!1,this.contentIsLoaded=!1,this.contentLength=0,this.imageNumber=0,this.eltTransform={},this.albumID=0,this.paginationLastPage=0,this.paginationLastWidth=0,this.customData={},this.selected=!1,this.$elt=null,this.$Elts=[]}var b=1;return a.get_nextId=function(){return b},a.prototype={$getElt:function(a,b){return void 0!==this.$Elts[a]&&1==!b?this.$Elts[a]:(this.$Elts[a]=this.$elt.find(a),this.$Elts[a])},thumbSetImgHeight:function(a){for(var b=["xs","sm","me","la","xl"],c=0;c<b.length;c++)pc.tn.settings.height.l1[b[c]]==pc.tn.settings.getH()&&pc.tn.settings.width.l1[b[c]]==pc.tn.settings.getW()&&(this.thumbs.height.l1[b[c]]=a);
for(var c=0;c<b.length;c++)pc.tn.settings.height.lN[b[c]]==pc.tn.settings.getH()&&pc.tn.settings.width.lN[b[c]]==pc.tn.settings.getW()&&(this.thumbs.height.lN[b[c]]=a)},thumbSetImgWidth:function(a){for(var b=["xs","sm","me","la","xl"],c=0;c<b.length;c++)pc.tn.settings.height.l1[b[c]]==pc.tn.settings.getH()&&pc.tn.settings.width.l1[b[c]]==pc.tn.settings.getW()&&(this.thumbs.width.l1[b[c]]=a);for(var c=0;c<b.length;c++)pc.tn.settings.height.lN[b[c]]==pc.tn.settings.getH()&&pc.tn.settings.width.lN[b[c]]==pc.tn.settings.getW()&&(this.thumbs.width.lN[b[c]]=a)},thumbImg:function(){var a={src:"",width:0,height:0};return"dummydummydummy"==this.title?(a.src=pc.emptyGif,a):(a.src=this.thumbs.url[pc.curNavLevel][pc.curWidth],a.width=this.thumbs.width[pc.curNavLevel][pc.curWidth],a.height=this.thumbs.height[pc.curNavLevel][pc.curWidth],a)},responsiveURL:function(){var a="";switch(pc.O.kind){case"":a=this.src;break;case"flickr":a=this.src;break;case"picasa":default:a=this.src}return a}},a}();this.Initiate=function(a,b){"use strict";if(pc.O=b,pc.O.thumbnailLabel.get=function(a){return"l1"==pc.curNavLevel&&void 0!==pc.O.thumbnailL1Label&&void 0!==pc.O.thumbnailL1Label[a]?pc.O.thumbnailL1Label[a]:pc.O.thumbnailLabel[a]},pc.O.thumbnailLabel.set=function(a,b){"l1"==pc.curNavLevel&&void 0!==pc.O.thumbnailL1Label&&void 0!==pc.O.thumbnailL1Label[a]?pc.O.thumbnailL1Label[a]=b:pc.O.thumbnailLabel[a]=b},pc.$E.base=jQuery(a),pc.baseEltID=pc.$E.base.attr("id"),pc.bodyOverflowInitial=jQuery("body").css("overflow"),Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d&&a?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e}),String.prototype.replaceAll=function(a,b){return void 0===b?this.toString():this.split(a).join(b)},"object"==rc(jQuery.velocity)?pc.aengine="velocity":"object"==rc(jQuery.transit)&&(pc.aengine="transition"),jQuery(a).addClass("nanogallery_theme_"+pc.O.theme),gc(a),pc.O.thumbnailLabel.get("hideIcons")){var d=".nanogallery_thumbnails_icons_off ",e=d+".nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImageTitle:before { display:none !important; }\n";e+=d+".nanoGalleryContainer .nanoGalleryThumbnailContainer .labelFolderTitle:before { display:none !important; }\n",jQuery("head").append("<style>"+e+"</style>"),jQuery(a).addClass("nanogallery_thumbnails_icons_off")}if(pc.O.galleryToolbarHideIcons){var d=".nanogallery_breadcrumb_icons_off ",e=d+".nanoGalleryNavigationbar .folderHome:before { display:none !important; }\n";e+=d+".nanoGalleryNavigationbar .folder:before { display:none !important; }\n",jQuery("head").append("<style>"+e+"</style>"),jQuery(a).addClass("nanogallery_breadcrumb_icons_off")}if("right"==pc.O.thumbnailLabel.get("align")){var d=".nanogallery_thumbnails_label_align_right ",e=d+".nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImage { text-align : right !important; }\n";jQuery("head").append("<style>"+e+"</style>"),jQuery(a).addClass("nanogallery_thumbnails_label_align_right")}if("center"==pc.O.thumbnailLabel.get("align")){var d=".nanogallery_thumbnails_label_align_center ",e=d+".nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImage { text-align : center !important; }\n";jQuery("head").append("<style>"+e+"</style>"),jQuery(a).addClass("nanogallery_thumbnails_label_align_center")}if("left"==pc.O.thumbnailLabel.get("align")){var d=".nanogallery_thumbnails_label_align_left ",e=d+".nanoGalleryContainer .nanoGalleryThumbnailContainer .labelImage { text-align : left !important; }\n";jQuery("head").append("<style>"+e+"</style>"),jQuery(a).addClass("nanogallery_thumbnails_label_align_left")}pc.$E.conNavBCon=jQuery('<div class="nanoGalleryNavigationbarContainer"></div>').appendTo(a),pc.$E.conNavBCon.hide(),pc.$E.conNavB=jQuery('<div class="nanoGalleryNavigationbar"></div>').appendTo(pc.$E.conNavBCon);var g="";switch(pc.O.RTL&&(g='style="text-align:right;direction:rtl;"'),pc.$E.conBC=jQuery('<div class="nanoGalleryBreadcrumb" '+g+"></div>").appendTo(pc.$E.conNavB),pc.$E.conLoadingB=jQuery('<div class="nanoGalleryLBarOff"><div></div><div></div><div></div><div></div><div></div></div>').appendTo(a),pc.$E.conTnParent=jQuery('<div class="nanoGalleryContainerParent"></div>').appendTo(a),pc.$E.conTn=jQuery('<div class="nanoGalleryContainer nGEvent"></div>').appendTo(pc.$E.conTnParent),pc.$E.conConsole=jQuery('<div class="nanoGalleryConsoleParent"></div>').appendTo(a),pc.O.thumbnailAlignment){case"left":pc.$E.conTnParent.css({"text-align":"left"}),pc.$E.conNavBCon.css({"margin-left":0});break;case"right":pc.$E.conTnParent.css({"text-align":"right"}),pc.$E.conNavBCon.css({"margin-right":0})}jQuery("head").append("<style>.nanogalleryHideElement {position: absolute !important; top: -9999px !important; left: -9999px !important;}</style>");var i=jQuery('<div class="nanogalleryHideElement '+jQuery(a).attr("class")+'"></div>').appendTo("body"),j=jQuery('<div class="nanoGalleryContainerParent"></div>').appendTo(i);if(pc.$E.conTnHid=jQuery('<div class="nanoGalleryContainer"></div>').appendTo(j),pc.O.supportIE8)try{!window.addEventListener&&function(a,b,c,d,e,f,g){a[d]=b[d]=c[d]=function(a,b){var c=this;g.unshift([c,a,b,function(a){a.currentTarget=c,a.preventDefault=function(){a.returnValue=!1},a.stopPropagation=function(){a.cancelBubble=!0},a.target=a.srcElement||c,b.call(c,a)}]),this.attachEvent("on"+a,g[0][3])},a[e]=b[e]=c[e]=function(a,b){for(var c,d=0;c=g[d];++d)if(c[0]==this&&c[1]==a&&c[2]==b)return this.detachEvent("on"+a,g.splice(d,1)[0][3])},a[f]=b[f]=c[f]=function(a){return this.fireEvent("on"+a.type,a)}}(Window.prototype,HTMLDocument.prototype,Element.prototype,"addEventListener","removeEventListener","dispatchEvent",[])}catch(k){return f(),!1}else if(pc.IE<=8)return f(),!1;o();var l="";pc.O.RTL&&(l='style="direction:rtl;"'),pc.$E.conPagin=jQuery('<div class="nanoGalleryPagination'+(pc.O.paginationDots?"Dot":"")+'" '+l+"></div>").appendTo(pc.$E.conTnParent),pc.$E.conPagin.hide();new m(pc.$E.conTn[0]);u(),document.fullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled||document.mozFullScreenEnabled?pc.supportFullscreenAPI=!0:jc("Your browser does not support the fullscreen API. Fullscreen button will not be displayed."),x(),pc.L.nbMaxTnPerRow=fb(),pc.O.viewerFullscreen&&pc.O.openOnStart.indexOf("/")>0&&ngscreenfull.request(),"loadData"!=pc.O.lazyBuild&&h();var n=0;jQuery(window).resize(function(){n&&clearTimeout(n),pc.containerViewerDisplayed?dc():n=setTimeout(function(){var a=q();-1==pc.curAlbumIdx||pc.tn.settings.getH()==pc.tn.settings.height[pc.curNavLevel][a]&&pc.tn.settings.getW()==pc.tn.settings.width[pc.curNavLevel][a]?cb():(pc.curWidth=a,qb(pc.curAlbumIdx,0))},50)}),pc.$E.base.on("scroll",function(){c()}),jQuery(window).on("scroll",function(){c()})},function(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length&&!window.requestAnimationFrame;++c)window.requestAnimationFrame=window[b[c]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[b[c]+"CancelAnimationFrame"]||window[b[c]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)})}();var rc=function(a){return{}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},sc=function(a,b,c){a=a.replace(/^\s*|\s*$/,""),a=a.replace(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i,"#$1$1$2$2$3$3");var d=Math.round(256*b)*(c?-1:1),e=a.match(new RegExp("^rgba?\\(\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])\\s*,\\s*(\\d|[1-9]\\d|1\\d{2}|2[0-4][0-9]|25[0-5])(?:\\s*,\\s*(0|1|0?\\.\\d+))?\\s*\\)$","i")),f=e&&null!=e[4]?e[4]:null,g=e?[e[1],e[2],e[3]]:a.replace(/^#?([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])([a-f0-9][a-f0-9])/i,function(){return parseInt(arguments[1],16)+","+parseInt(arguments[2],16)+","+parseInt(arguments[3],16)}).split(/,/);return e?"rgb"+(null!==f?"a":"")+"("+Math[c?"max":"min"](parseInt(g[0],10)+d,c?0:255)+", "+Math[c?"max":"min"](parseInt(g[1],10)+d,c?0:255)+", "+Math[c?"max":"min"](parseInt(g[2],10)+d,c?0:255)+(null!==f?", "+f:"")+")":["#",vc(Math[c?"max":"min"](parseInt(g[0],10)+d,c?0:255).toString(16),2),vc(Math[c?"max":"min"](parseInt(g[1],10)+d,c?0:255).toString(16),2),vc(Math[c?"max":"min"](parseInt(g[2],10)+d,c?0:255).toString(16),2)].join("")},tc=function(a,b){return sc(a,b,!1)},uc=function(a,b){return sc(a,b,!0)},vc=function(a,b){var c="0";for(a+="";a.length<b;)a=c+a;return a}}jQuery.nanoGallery=function(b,d){var e=this;e.$e=a(b),e.e=b,e.$e.data("nanoGallery",e),e.init=function(){e.options=a.extend(!0,{},a.nanoGallery.defaultOptions,d),e.nG=new c,e.nG.Initiate(e.e,e.options)},e.test=function(){},e.init()},jQuery.nanoGallery.defaultOptions={userID:"",kind:"",album:"",photoset:"",blackList:"scrapbook|profil",whiteList:"",albumList:"",RTL:!1,picasaUseUrlCrossDomain:!0,flickrSkipOriginal:!0,galleryToolbarWidthAligned:!0,galleryToolbarHideIcons:!1,galleryFullpageButton:!1,galleryFullpageBgColor:"#111",galleryEnableKeyboard:!1,galleryRenderStep:10,breadcrumbAutoHideTopLevel:!1,displayBreadcrumb:!1,theme:"default",colorScheme:"none",colorSchemeViewer:"default",items:null,itemsBaseURL:"",itemsSelectable:!1,showCheckboxes:!0,checkboxStyle:"left:15px; top:15px;",keepSelection:!1,jsonCharset:"Latin",jsonProvider:"",paginationMaxLinesPerPage:0,paginationDots:!1,paginationSwipe:!0,paginationVisiblePages:10,maxWidth:0,viewer:"internal",viewerFullscreen:!1,viewerDisplayLogo:!1,fancyBoxOptions:null,imageTransition:"slide",openOnStart:"",viewerToolbar:{display:!0,position:"bottom",style:"innerImage",autoMinimize:800,standard:"minimizeButton , previousButton, pageCounter ,nextButton,playPauseButton,fullscreenButton,infoButton,linkOriginalButton,closeButton,label",minimized:"minimizeButton,label"},thumbnailAlignment:"center",thumbnailWidth:230,thumbnailHeight:154,thumbnailGutterWidth:2,thumbnailGutterHeight:2,thumbnailAdjustLastRowHeight:!0,thumbnailFeatured:!1,thumbnailAlbumDisplayImage:!1,thumbnailHoverEffect:null,thumbnailLabel:{position:"overImageOnBottom",display:!0,displayDescription:!0,titleMaxLength:0,descriptionMaxLength:0,hideIcons:!1,title:"",itemsCount:""},thumbnailDisplayInterval:5,thumbnailDisplayTransition:!0,thumbnailLazyLoad:!1,thumbnailLazyLoadTreshold:100,thumbnailGlobalImageTitle:"",thumbnailGlobalAlbumTitle:"",thumbnailOpenImage:!0,breakpointSizeSM:480,breakpointSizeME:992,breakpointSizeLA:1200,breakpointSizeXL:1800,fnThumbnailInit:null,fnThumbnailHoverInit:null,fnThumbnailHoverResize:null,fnThumbnailHover:null,fnThumbnailHoverOut:null,fnThumbnailDisplayEffect:null,fnThumbnailOpen:null,fnViewerInfo:null,fnImgToolbarCustInit:null,fnImgToolbarCustDisplay:null,fnImgToolbarCustClick:null,fnProcessData:null,fnChangeSelectMode:null,fnInitGallery:null,touchAnimation:!0,touchAutoOpenDelay:0,useTags:!1,preset:"none",locationHash:!0,demoViewportWidth:0,slideshowDelay:3e3,slideshowAutoStart:!1,photoSorting:"",albumSorting:"",dataSorting:"",albumMax:0,lazyBuild:"none",lazyBuildTreshold:150,debugMode:!1,i18n:{breadcrumbHome:"Galleries",breadcrumbHome_FR:"Galeries",breadcrumbHome_ES:"Galer&iacute;as",paginationPrevious:"Previous",paginationPrevious_FR:"Pr&eacute;c&eacute;dent",paginationPrevious_DE:"Zur&uuml;ck",paginationPrevious_IT:"Indietro"," paginationPrevious_ES":"Anterior",paginationNext:"Next",paginationNext_FR:"Suivant",paginationNext_DE:"Weiter",paginationNext_IT:"Avanti",paginationNext_ES:"Siguiente",thumbnailLabelItemsCountPart1:"",thumbnailLabelItemsCountPart2:"",thumbnailImageTitle:"",thumbnailAlbumTitle:"",thumbnailImageDescription:"",thumbnailAlbumDescription:"",infoBoxPhoto:"Photo",infoBoxDate:"Date",infoBoxAlbum:"Album",infoBoxDimensions:"Dimensions",infoBoxFilename:"Filename",infoBoxFileSize:"File size",infoBoxCamera:"Camera",infoBoxFocalLength:"Focal length",infoBoxExposure:"Exposure",infoBoxFNumber:"F Number",infoBoxISO:"ISO",infoBoxMake:"Make",infoBoxFlash:"Flash",infoBoxViews:"Views",infoBoxComments:"Comments",infoBoxPhoto_ES:"Foto",infoBoxDate_ES:"Fecha",infoBoxAlbum_ES:"Album",infoBoxDimensions_ES:"Dimensiones",infoBoxFilename_ES:"Nombre",infoBoxFileSize_ES:"Tama&ntilde;o",infoBoxCamera_ES:"C&aacute;mara",infoBoxFocalLength_ES:"Longitud focal",infoBoxExposure_ES:"Exposici&oacute;n",infoBoxFNumber_ES:"N&uacute;mero F",infoBoxISO_ES:"ISO",infoBoxMake_ES:"Hacer",infoBoxFlash_ES:"Flash",infoBoxViews_ES:"Vistas",infoBoxComments_ES:"Comentarios"}},jQuery.fn.nanoGallery=function(b,c,d){if("undefined"==typeof a(this).data("nanoGallery"))return this.each(function(){new a.nanoGallery(this,b)});switch(b){case"reload":return a(this).data("nanoGallery").nG.ReloadAlbum(),a(this);case"refreshSize":return a(this).data("nanoGallery").nG.RefreshSize(),a(this);case"getSelectedItems":return a(this).data("nanoGallery").nG.GetSelectedItems();case"selectItems":a(this).data("nanoGallery").nG.SetSelectedItems(c);break;case"unselectItems":a(this).data("nanoGallery").nG.SetUnselectedItems(c);break;case"setSelectMode":(c===!0||c===!1||"image"===c||"album"===c)&&a(this).data("nanoGallery").nG.SetSelectMode(c);break;case"getSelectMode":return a(this).data("nanoGallery").nG.GetSelectMode();case"getItem":return a(this).data("nanoGallery").nG.GetItem(c);case"getItems":return a(this).data("nanoGallery").nG.GetItems();case"getItemsIndex":return a(this).data("nanoGallery").nG.GetItemsIndex(c);case"option":if("undefined"==typeof d)return a(this).data("nanoGallery").nG.Get(c);a(this).data("nanoGallery").nG.Set(c,d),"demoViewportWidth"==c&&a(window).trigger("resize");break;case"destroy":a(this).data("nanoGallery").nG.$E.base.text(""),a(this).removeData();break;case"closeViewer":a(this).data("nanoGallery").nG.closeViewer();break;case"minimizeToolbar":a(this).data("nanoGallery").nG.minimizeToolbar();break;case"maximizeToolbar":a(this).data("nanoGallery").nG.maximizeToolbar();break;case"displayItem":a(this).data("nanoGallery").nG.displayItem(c);break;case"paginationPreviousPage":a(this).data("nanoGallery").nG.paginationPreviousPage();break;case"paginationNextPage":a(this).data("nanoGallery").nG.paginationNextPage();break;case"paginationGotoPage":a(this).data("nanoGallery").nG.paginationGotoPage(c);break;case"paginationCountPages":return a(this).data("nanoGallery").nG.paginationCountPages();case"getCurrentViewedItem":return a(this).data("nanoGallery").nG.GetCurrentViewedItem();case"getCurrentViewedItemIdx":return a(this).data("nanoGallery").nG.GetCurrentViewedItemIdx();case"moveToNextAlbum":return a(this).data("nanoGallery").nG.moveToNextAlbum();case"moveToPreviousAlbum":return a(this).data("nanoGallery").nG.moveToPreviousAlbum();case"galleryCountImages":return a(this).data("nanoGallery").nG.galleryCountImages()}return a(this)}}),/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(a,b){function c(a,b,c){var d=l[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0>a?0:d.max<a?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||"rgba";return h?(f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1):void 0}),d.length?("0,0,0,0"===d.join()&&a.extend(d,f.transparent),c):f[b]}function e(a,b,c){return c=(c+1)%1,1>6*c?a+(b-a)*c*6:1>2*c?b:2>3*c?a+(b-a)*(2/3-c)*6:a}var f,g="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",h=/^([\-+])=\s*(\d+\.?\d*)/,i=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},l={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},n=a("<p>")[0],o=a.each;n.style.cssText="background-color:rgba(1,1,1,.5)",m.rgba=n.style.backgroundColor.indexOf("rgba")>-1,o(k,function(a,b){b.cache="_"+a,b.props.alpha={idx:3,type:"percent",def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];return g!==b&&(e=[e,g,h,i],m="array"),"string"===m?this.parse(d(e)||f._default):"array"===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):"object"===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){if(!l[f]&&d.to){if("alpha"===a||null==e[a])return;l[f]=d.to(l._rgba)}l[f][b.idx]=c(e[a],b,!0)}),l[f]&&a.inArray(null,l[f].slice(0,3))<0&&(l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){return null!=g[b.idx]?c=g[b.idx]===f[b.idx]:void 0})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j("transparent"):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g>k.mod/2?g+=k.mod:g-j>k.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b="rgba(",c=a.map(this._rgba,function(a,b){return null==a?b>2?1:0:a});return 1===c[3]&&(c.pop(),b="rgb("),b+c.join()+")"},toHslaString:function(){var b="hsla(",c=a.map(this.hsla(),function(a,b){return null==a&&(a=b>2?1:0),b&&3>b&&(a=Math.round(100*a)+"%"),a});return 1===c[3]&&(c.pop(),b="hsl("),b+c.join()+")"},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),"#"+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?"0"+a:a}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:.5>=l?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=.5>=d?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l="array"===h||"object"===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l["object"===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i="alpha"===b?this._hsla?"hsla":"rgba":d,j=this[i](),k=j[c.idx];return"undefined"===g?k:("function"===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:("string"===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*("+"===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),j.hook=function(b){var c=b.split(" ");o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h="";if("transparent"!==e&&("string"!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g="backgroundColor"===c?b.parentNode:b;(""===h||"transparent"===h)&&g&&g.style;)try{h=a.css(g,"backgroundColor"),g=g.parentNode}catch(i){}e=e.blend(h&&"transparent"!==h?h:"_default")}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o(["Top","Right","Bottom","Left"],function(c,d){b["border"+d+"Color"]=a}),b}},f=a.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(a,b){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",b):"object"==typeof module&&module.exports?module.exports=b():a.ngEvEmitter=b()}(this,function(){function a(){}var b=a.prototype;return b.on=function(a,b){if(a&&b){var c=this._events=this._events||{},d=c[a]=c[a]||[];return-1==d.indexOf(b)&&d.push(b),this}},b.once=function(a,b){if(a&&b){this.on(a,b);var c=this._onceEvents=this._onceEvents||{},d=c[a]=c[a]||[];return d[b]=!0,this}},b.off=function(a,b){var c=this._events&&this._events[a];if(c&&c.length){var d=c.indexOf(b);return-1!=d&&c.splice(d,1),this}},b.emitEvent=function(a,b){var c=this._events&&this._events[a];if(c&&c.length){var d=0,e=c[d];b=b||[];for(var f=this._onceEvents&&this._onceEvents[a];e;){var g=f&&f[e];g&&(this.off(a,e),delete f[e]),e.apply(this,b),d+=g?0:1,e=c[d]}return this}},a}),/*!
 * imagesLoaded v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
function(a,b){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(c){return b(a,c)}):"object"==typeof module&&module.exports?module.exports=b(a,require("ev-emitter")):a.ngimagesLoaded=b(a,a.ngEvEmitter)}(window,function(a,b){function c(a,b){for(var c in b)a[c]=b[c];return a}function d(a){var b=[];if(Array.isArray(a))b=a;else if("number"==typeof a.length)for(var c=0;c<a.length;c++)b.push(a[c]);else b.push(a);return b}function e(a,b,f){return this instanceof e?("string"==typeof a&&(a=document.querySelectorAll(a)),this.elements=d(a),this.options=c({},this.options),"function"==typeof b?f=b:c(this.options,b),f&&this.on("always",f),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new e(a,b,f)}function f(a){this.img=a}function g(a,b){this.url=a,this.element=b,this.img=new Image}var h=a.jQuery,i=a.console;e.prototype=Object.create(b.prototype),e.prototype.options={},e.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},e.prototype.addElementImages=function(a){"IMG"==a.nodeName&&this.addImage(a),this.options.background===!0&&this.addElementBackgroundImages(a);var b=a.nodeType;if(b&&j[b]){for(var c=a.querySelectorAll("img"),d=0;d<c.length;d++){var e=c[d];this.addImage(e)}if("string"==typeof this.options.background){var f=a.querySelectorAll(this.options.background);for(d=0;d<f.length;d++){var g=f[d];this.addElementBackgroundImages(g)}}}};var j={1:!0,9:!0,11:!0};return e.prototype.addElementBackgroundImages=function(a){var b=getComputedStyle(a);if(b)for(var c=/url\((['"])?(.*?)\1\)/gi,d=c.exec(b.backgroundImage);null!==d;){var e=d&&d[2];e&&this.addBackground(e,a),d=c.exec(b.backgroundImage)}},e.prototype.addImage=function(a){var b=new f(a);this.images.push(b)},e.prototype.addBackground=function(a,b){var c=new g(a,b);this.images.push(c)},e.prototype.check=function(){function a(a,c,d){setTimeout(function(){b.progress(a,c,d)})}var b=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(b){b.once("progress",a),b.check()}):void this.complete()},e.prototype.progress=function(a,b,c){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!a.isLoaded,this.emitEvent("progress",[this,a,b]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,a),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&i&&i.log("progress: "+c,a,b)},e.prototype.complete=function(){var a=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(a,[this]),this.emitEvent("always",[this]),this.jqDeferred){var b=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[b](this)}},f.prototype=Object.create(b.prototype),f.prototype.check=function(){var a=this.getIsImageComplete();return a?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},f.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},f.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.img,b])},f.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},f.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},f.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},f.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},g.prototype=Object.create(f.prototype),g.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var a=this.getIsImageComplete();a&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},g.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},g.prototype.confirm=function(a,b){this.isLoaded=a,this.emitEvent("progress",[this,this.element,b])},e.makeJQueryPlugin=function(b){b=b||a.jQuery,b&&(h=b,h.fn.ngimagesLoaded=function(a,b){var c=new e(this,a,b);return c.jqDeferred.promise(h(this))})},e.makeJQueryPlugin(),e}),function(){"use strict";var a="undefined"!=typeof module&&module.exports,b="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,c=function(){for(var a,b,c=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],d=0,e=c.length,f={};e>d;d++)if(a=c[d],a&&a[1]in document){for(d=0,b=a.length;b>d;d++)f[c[0][d]]=a[d];return f}return!1}(),d={request:function(a){var d=c.requestFullscreen;a=a||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[d]():a[d](b&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[c.exitFullscreen]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},onchange:function(){},onerror:function(){},raw:c};return c?(Object.defineProperties(d,{isFullscreen:{get:function(){return!!document[c.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[c.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[c.fullscreenEnabled]}}}),document.addEventListener(c.fullscreenchange,function(a){d.onchange.call(d,a)}),document.addEventListener(c.fullscreenerror,function(a){d.onerror.call(d,a)}),void(a?module.exports=d:window.ngscreenfull=d)):void(a?module.exports=!1:window.ngscreenfull=!1)}();


/*
 * (C) Joel Sutherland
 * Licenced under the MIT license
 * http://www.newmediacampaigns.com/page/jquery-flickr-plugin
 *
 * Available tags for templates:
 * title, link, date_taken, description, published, author, author_id, tags, image*
 */ 

!function(e){e.fn.jflickrfeed=function(i,a){var t=(i=e.extend(!0,{flickrbase:"http://api.flickr.com/services/feeds/",feedapi:"photos_public.gne",limit:20,qstrings:{lang:"en-us",format:"json",jsoncallback:"?"},cleanDescription:!0,useTemplate:!0,itemTemplate:"",itemCallback:function(){}},i)).flickrbase+i.feedapi+"?",c=!0;for(var n in i.qstrings)c||(t+="&"),t+=n+"="+i.qstrings[n],c=!1;return e(this).each(function(){var c=e(this),n=this;e.getJSON(t,function(t){e.each(t.items,function(e,a){if(e<i.limit){if(i.cleanDescription){var t=/<p>(.*?)<\/p>/g,m=a.description;t.test(m)&&(a.description=m.match(t)[2],void 0!=a.description&&(a.description=a.description.replace("<p>","").replace("</p>","")))}if(a.image_s=a.media.m.replace("_m","_s"),a.image_t=a.media.m.replace("_m","_t"),a.image_m=a.media.m.replace("_m","_m"),a.image=a.media.m.replace("_m",""),a.image_b=a.media.m.replace("_m","_b"),delete a.media,i.useTemplate){var r=i.itemTemplate;for(var l in a){var p=new RegExp("{{"+l+"}}","g");r=r.replace(p,a[l])}c.append(r)}i.itemCallback.call(n,a)}}),e.isFunction(a)&&a.call(n,t)})})}}(jQuery);

// DOM.event.move
//
// 2.0.0
//
// Stephen Band
//
// Triggers 'movestart', 'move' and 'moveend' events after
// mousemoves following a mousedown cross a distance threshold,
// similar to the native 'dragstart', 'drag' and 'dragend' events.
// Move events are throttled to animation frames. Move event objects
// have the properties:
//
// pageX:
// pageY:     Page coordinates of pointer.
// startX:
// startY:    Page coordinates of pointer at movestart.
// distX:
// distY:     Distance the pointer has moved since movestart.
// deltaX:
// deltaY:    Distance the finger has moved since last event.
// velocityX:
// velocityY: Average velocity over last few events.

!function(e){"function"==typeof define&&define.amd?define([],e):"undefined"!=typeof module&&null!==module&&module.exports?module.exports=e:e()}(function(){function e(e){return new CustomEvent(e,N)}function t(e){return e[z]||(e[z]={})}function n(e,n,o,i,a){function u(e){o(e,i)}n=n.split(D);for(var c,r=t(e),d=n.length;d--;)(r[c=n[d]]||(r[c]=[])).push([o,u]),e.addEventListener(c,u)}function o(e,n,o,i){n=n.split(D);var a,u,c,r=t(e),d=n.length;if(r)for(;d--;)if(a=n[d],u=r[a])for(c=u.length;c--;)u[c][0]===o&&(e.removeEventListener(a,u[c][1]),u.splice(c,1))}function i(t,n,o){var i=e(n);o&&A(i,o),t.dispatchEvent(i)}function a(e){function t(e){o?(n(),M(t),i=!0,o=!1):i=!1}var n=e,o=!1,i=!1;this.kick=function(e){o=!0,i||t()},this.end=function(e){var t=n;e&&(i?(n=o?function(){t(),e()}:e,o=!0):e())}}function u(){}function c(e){e.preventDefault()}function r(e){return!!x[e.target.tagName.toLowerCase()]}function d(e){return 1===e.which&&!e.ctrlKey&&!e.altKey}function m(e,t){var n,o;if(e.identifiedTouch)return e.identifiedTouch(t);for(n=-1,o=e.length;++n<o;)if(e[n].identifier===t)return e[n]}function f(e,t){var n=m(e.changedTouches,t.identifier);if(n&&(n.pageX!==t.pageX||n.pageY!==t.pageY))return n}function v(e,t){X(e,t,e,l)}function s(e,t){l()}function l(){o(document,L.move,v),o(document,L.cancel,s)}function p(e,t){var n=f(e,t);n&&X(e,t,n,h)}function g(e,t){m(e.changedTouches,t.identifier)&&h(t)}function h(e){o(document,R.move,e.touchmove),o(document,R.cancel,e.touchend)}function X(e,t,n,o){var i=n.pageX-t.pageX,a=n.pageY-t.pageY;i*i+a*a<F*F||Y(e,t,n,i,a,o)}function Y(e,t,n,o,a,c){var r=e.targetTouches,d=e.timeStamp-t.timeStamp,m={altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,startX:t.pageX,startY:t.pageY,distX:o,distY:a,deltaX:o,deltaY:a,pageX:n.pageX,pageY:n.pageY,velocityX:o/d,velocityY:a/d,identifier:t.identifier,targetTouches:r,finger:r?r.length:1,enableMove:function(){this.moveEnabled=!0,this.enableMove=u,e.preventDefault()}};i(t.target,"movestart",m),c(t)}function y(e,t){var n=t.timer;t.touch=e,t.timeStamp=e.timeStamp,n.kick()}function w(e,t){var n=t.target,i=t.event,a=t.timer;b(),K(n,i,a,function(){setTimeout(function(){o(n,"click",c)},0)})}function b(){o(document,L.move,y),o(document,L.end,w)}function T(e,t){var n=t.event,o=t.timer,i=f(e,n);i&&(e.preventDefault(),n.targetTouches=e.targetTouches,t.touch=i,t.timeStamp=e.timeStamp,o.kick())}function E(e,t){var n=t.target,o=t.event,i=t.timer;m(e.changedTouches,o.identifier)&&(S(t),K(n,o,i))}function S(e){o(document,R.move,e.activeTouchmove),o(document,R.end,e.activeTouchend)}function k(e,t,n){var o=n-e.timeStamp;e.distX=t.pageX-e.startX,e.distY=t.pageY-e.startY,e.deltaX=t.pageX-e.pageX,e.deltaY=t.pageY-e.pageY,e.velocityX=.3*e.velocityX+.7*e.deltaX/o,e.velocityY=.3*e.velocityY+.7*e.deltaY/o,e.pageX=t.pageX,e.pageY=t.pageY}function K(e,t,n,o){n.end(function(){return i(e,"moveend",t),o&&o()})}function j(e){e.enableMove()}function C(e){e.enableMove()}function Q(e){e.enableMove()}function q(e){var t=e.handler;e.handler=function(e){for(var n,o=O.length;o--;)e[n=O[o]]=e.originalEvent[n];t.apply(this,arguments)}}var A=Object.assign||window.jQuery&&jQuery.extend,F=8,M=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e,t){return window.setTimeout(function(){e()},25)};!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}if("function"==typeof window.CustomEvent)return!1;e.prototype=window.Event.prototype,window.CustomEvent=e}();var x={textarea:!0,input:!0,select:!0,button:!0},L={move:"mousemove",cancel:"mouseup dragstart",end:"mouseup"},R={move:"touchmove",cancel:"touchend",end:"touchend"},D=/\s+/,N={bubbles:!0,cancelable:!0},z="function"==typeof Symbol?Symbol("events"):{};if(n(document,"mousedown",function(e){d(e)&&(r(e)||(n(document,L.move,v,e),n(document,L.cancel,s,e)))}),n(document,"touchstart",function(e){if(!x[e.target.tagName.toLowerCase()]){var t=e.changedTouches[0],o={target:t.target,pageX:t.pageX,pageY:t.pageY,identifier:t.identifier,touchmove:function(e,t){p(e,t)},touchend:function(e,t){g(e,t)}};n(document,R.move,o.touchmove,o),n(document,R.cancel,o.touchend,o)}}),n(document,"movestart",function(e){if(!e.defaultPrevented&&e.moveEnabled){var t={startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger},o={target:e.target,event:t,timer:new a(function(e){k(t,o.touch,o.timeStamp),i(o.target,"move",t)}),touch:void 0,timeStamp:e.timeStamp};void 0===e.identifier?(n(e.target,"click",c),n(document,L.move,y,o),n(document,L.end,w,o)):(o.activeTouchmove=function(e,t){T(e,t)},o.activeTouchend=function(e,t){E(e,t)},n(document,R.move,o.activeTouchmove,o),n(document,R.end,o.activeTouchend,o))}}),window.jQuery){var O="startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(" ");jQuery.event.special.movestart={setup:function(){return n(this,"movestart",j),!1},teardown:function(){return o(this,"movestart",j),!1},add:q},jQuery.event.special.move={setup:function(){return n(this,"movestart",C),!1},teardown:function(){return o(this,"movestart",C),!1},add:q},jQuery.event.special.moveend={setup:function(){return n(this,"movestart",Q),!1},teardown:function(){return o(this,"movestart",Q),!1},add:q}}});


//  jquery.twentytwenty.js

!function(t){t.fn.twentytwenty=function(e){var e=t.extend({default_offset_pct:.5,orientation:"horizontal",before_label:"Before",after_label:"After",no_overlay:!1,move_slider_on_hover:!1,move_with_handle_only:!0,click_to_move:!1},e);return this.each(function(){var n=e.default_offset_pct,a=t(this),i=e.orientation,o="vertical"===i?"down":"left",s="vertical"===i?"up":"right";a.wrap("<div class='twentytwenty-wrapper twentytwenty-"+i+"'></div>"),e.no_overlay||a.append("<div class='twentytwenty-overlay'></div>");var r=a.find("img:first"),c=a.find("img:last");a.append("<div class='twentytwenty-handle'></div>");var l=a.find(".twentytwenty-handle");l.append("<span class='twentytwenty-"+o+"-arrow'></span>"),l.append("<span class='twentytwenty-"+s+"-arrow'></span>"),a.addClass("twentytwenty-container"),r.addClass("twentytwenty-before"),c.addClass("twentytwenty-after");var d=a.find(".twentytwenty-overlay");d.append("<div class='twentytwenty-before-label' data-content='"+e.before_label+"'></div>"),d.append("<div class='twentytwenty-after-label' data-content='"+e.after_label+"'></div>");var w=function(t){var e=r.width(),n=r.height();return{w:e+"px",h:n+"px",cw:t*e+"px",ch:t*n+"px"}},f=function(t){"vertical"===i?(r.css("clip","rect(0,"+t.w+","+t.ch+",0)"),c.css("clip","rect("+t.ch+","+t.w+","+t.h+",0)")):(r.css("clip","rect(0,"+t.cw+","+t.h+",0)"),c.css("clip","rect(0,"+t.w+","+t.h+","+t.cw+")")),a.css("height",t.h)},v=function(t){var e=w(t);l.css("vertical"===i?"top":"left","vertical"===i?e.ch:e.cw),f(e)},p=function(t,e,n){return Math.max(e,Math.min(n,t))},y=function(t,e){return p("vertical"===i?(e-u)/m:(t-h)/_,0,1)};t(window).on("resize.twentytwenty",function(t){v(n)});var h=0,u=0,_=0,m=0,g=function(t){(t.distX>t.distY&&t.distX<-t.distY||t.distX<t.distY&&t.distX>-t.distY)&&"vertical"!==i?t.preventDefault():(t.distX<t.distY&&t.distX<-t.distY||t.distX>t.distY&&t.distX>-t.distY)&&"vertical"===i&&t.preventDefault(),a.addClass("active"),h=a.offset().left,u=a.offset().top,_=r.width(),m=r.height()},b=function(t){a.hasClass("active")&&(n=y(t.pageX,t.pageY),v(n))},X=function(){a.removeClass("active")},Y=e.move_with_handle_only?l:a;Y.on("movestart",g),Y.on("move",b),Y.on("moveend",X),e.move_slider_on_hover&&(a.on("mouseenter",g),a.on("mousemove",b),a.on("mouseleave",X)),l.on("touchmove",function(t){t.preventDefault()}),a.find("img").on("mousedown",function(t){t.preventDefault()}),e.click_to_move&&a.on("click",function(t){h=a.offset().left,u=a.offset().top,_=r.width(),m=r.height(),n=y(t.pageX,t.pageY),v(n)}),t(window).trigger("resize.twentytwenty")})}}(jQuery);


// xs-nav menu
!function(n,e,i,s){n.xs_nav=function(a,t){var o={responsive:!0,mobileBreakpoint:767,showDuration:300,hideDuration:300,showDelayDuration:0,hideDelayDuration:0,submenuTrigger:"hover",effect:"fade",submenuIndicator:!0,submenuIndicatorTrigger:!1,hideSubWhenGoOut:!0,visibleSubmenusOnMobile:!1,overlay:!0,overlayColor:"rgba(0, 0, 0, 0.7)",hidden:!1,hiddenOnMobile:!1,offCanvasSide:"left",offCanvasCloseButton:!0,animationOnShow:"",animationOnHide:"",hideScrollBar:!0,onInit:function(){},onLandscape:function(){},onPortrait:function(){},onShowOffCanvas:function(){},onHideOffCanvas:function(){}},r=this,u=Number.MAX_VALUE,d=1,l="click.nav touchstart.nav",c="mouseenter focusin",f="mouseleave focusout";r.settings={};var a=(n(a),a);n(a).find(".nav-search").length>0&&n(a).find(".nav-search").find("form").prepend("<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"),r.init=function(){r.settings=n.extend({},o,t),r.settings.offCanvasCloseButton&&n(a).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>&#10005;</span>"),"right"==r.settings.offCanvasSide&&n(a).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"),r.settings.hidden&&(n(a).addClass("xs_nav-hidden"),r.settings.mobileBreakpoint=99999),v(),n(a).find(".nav-toggle").on("click touchstart",function(n){n.stopPropagation(),n.preventDefault(),r.showOffcanvas(),t!==s&&r.callback("onShowOffCanvas")}),n(a).find(".nav-menus-wrapper-close-button").on("click touchstart",function(){r.hideOffcanvas(),t!==s&&r.callback("onHideOffCanvas")}),n(a).find(".nav-search-button, .nav-search-close-button").on("click touchstart keydown",function(e){e.stopPropagation(),e.preventDefault();var i=e.keyCode||e.which;"click"===e.type||"touchstart"===e.type||"keydown"===e.type&&13==i?r.toggleSearch():9==i&&n(e.target).blur()}),n(e).resize(function(){r.initxs_navMode(C()),O(),r.settings.hiddenOnMobile&&m()}),r.initxs_navMode(C()),r.settings.hiddenOnMobile&&m(),r.settings.overlay&&n(a).append("<div class='nav-overlay-panel'></div>"),n(a).find(".megamenu-tabs").length>0&&y(),t!==s&&r.callback("onInit")};var h=function(){n(a).find(".nav-submenu").hide(0),n(a).find("li").removeClass("focus")},v=function(){n(a).find("li").each(function(){n(this).children(".nav-dropdown,.megamenu-panel").length>0&&(n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"),r.settings.submenuIndicator&&n(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))})},m=function(){n(a).hasClass("xs_nav-portrait")?n(a).addClass("xs_nav-hidden"):n(a).removeClass("xs_nav-hidden")};r.showSubmenu=function(e,i){C()>r.settings.mobileBreakpoint&&n(a).find(".nav-search").find("form").fadeOut(),"fade"==i?n(e).children(".nav-submenu").stop(!0,!0).delay(r.settings.showDelayDuration).fadeIn(r.settings.showDuration).removeClass(r.settings.animationOnHide).addClass(r.settings.animationOnShow):n(e).children(".nav-submenu").stop(!0,!0).delay(r.settings.showDelayDuration).slideDown(r.settings.showDuration).removeClass(r.settings.animationOnHide).addClass(r.settings.animationOnShow),n(e).addClass("focus")},r.hideSubmenu=function(e,i){"fade"==i?n(e).find(".nav-submenu").stop(!0,!0).delay(r.settings.hideDelayDuration).fadeOut(r.settings.hideDuration).removeClass(r.settings.animationOnShow).addClass(r.settings.animationOnHide):n(e).find(".nav-submenu").stop(!0,!0).delay(r.settings.hideDelayDuration).slideUp(r.settings.hideDuration).removeClass(r.settings.animationOnShow).addClass(r.settings.animationOnHide),n(e).removeClass("focus").find(".focus").removeClass("focus")};var p=function(){r.settings.hideScrollBar&&n("body").addClass("no-scroll"),r.settings.overlay&&n(a).find(".nav-overlay-panel").css("background-color",r.settings.overlayColor).fadeIn(300).on("click touchstart",function(){r.hideOffcanvas()})},b=function(){r.settings.hideScrollBar&&n("body").removeClass("no-scroll"),r.settings.overlay&&n(a).find(".nav-overlay-panel").fadeOut(400)};r.showOffcanvas=function(){p(),"left"==r.settings.offCanvasSide?n(a).find(".nav-menus-wrapper").css("transition-property","left").addClass("nav-menus-wrapper-open"):n(a).find(".nav-menus-wrapper").css("transition-property","right").addClass("nav-menus-wrapper-open")},r.hideOffcanvas=function(){n(a).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd",function(){n(a).find(".nav-menus-wrapper").css("transition-property","none").off()}),b()},r.toggleOffcanvas=function(){C()<=r.settings.mobileBreakpoint&&(n(a).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open")?(r.hideOffcanvas(),t!==s&&r.callback("onHideOffCanvas")):(r.showOffcanvas(),t!==s&&r.callback("onShowOffCanvas")))},r.toggleSearch=function(){"none"==n(a).find(".nav-search").find("form").css("display")?(n(a).find(".nav-search").find("form").fadeIn(200),n(a).find(".nav-search").find("input").focus()):(n(a).find(".nav-search").find("form").fadeOut(200),n(a).find(".nav-search").find("input").blur())},r.initxs_navMode=function(e){r.settings.responsive?(e<=r.settings.mobileBreakpoint&&u>r.settings.mobileBreakpoint&&(n(a).addClass("xs_nav-portrait").removeClass("xs_nav-landscape"),S(),t!==s&&r.callback("onPortrait")),e>r.settings.mobileBreakpoint&&d<=r.settings.mobileBreakpoint&&(n(a).addClass("xs_nav-landscape").removeClass("xs_nav-portrait"),k(),b(),r.hideOffcanvas(),t!==s&&r.callback("onLandscape")),u=e,d=e):(n(a).addClass("xs_nav-landscape"),k(),t!==s&&r.callback("onLandscape"))};var g=function(){n("html").on("click.body touchstart.body",function(e){0===n(e.target).closest(".xs_nav").length&&(n(a).find(".nav-submenu").fadeOut(),n(a).find(".focus").removeClass("focus"),n(a).find(".nav-search").find("form").fadeOut())})},C=function(){return e.innerWidth||i.documentElement.clientWidth||i.body.clientWidth},w=function(e){"landscape"==e?n(a).find(".nav-menu").find("li, a").off(l):n(a).find(".nav-menu").find("li, a").off(c).off(f)},O=function(){if(C()>r.settings.mobileBreakpoint){var e=n(a).outerWidth();n(a).find(".nav-menu").children("li").children(".nav-submenu").each(function(){n(this).parent().position().left+n(this).outerWidth()>e?n(this).css("right",0):n(this).css("right","auto")})}},y=function(){function e(e){var i=n(e).children(".megamenu-tabs-nav").children("li"),s=n(e).children(".megamenu-tabs-pane");n(i).on("mouseenter.tabs click.tabs touchstart.tabs",function(e){e.stopPropagation(),e.preventDefault(),n(i).removeClass("active"),n(this).addClass("active"),n(s).hide(0).removeClass("active"),n(s[n(this).index()]).show(0).addClass("active")})}if(n(a).find(".megamenu-tabs").length>0)for(var i=n(a).find(".megamenu-tabs"),s=0;s<i.length;s++)e(i[s])},k=function(){w("landscape"),h(),navigator.userAgent.match(/Mobi/i)||navigator.maxTouchPoints>0||"click"==r.settings.submenuTrigger?n(a).find(".nav-menu, .nav-dropdown").children("li").children("a").on(l,function(i){if(r.hideSubmenu(n(this).parent("li").siblings("li"),r.settings.effect),n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(r.settings.hideDuration),n(this).siblings(".nav-submenu").length>0){if(i.stopPropagation(),i.preventDefault(),"none"==n(this).siblings(".nav-submenu").css("display"))return r.showSubmenu(n(this).parent("li"),r.settings.effect),O(),!1;if(r.hideSubmenu(n(this).parent("li"),r.settings.effect),"_blank"===n(this).attr("target")||"blank"===n(this).attr("target"))e.open(n(this).attr("href"));else{if("#"===n(this).attr("href")||""===n(this).attr("href")||"javascript:void(0)"===n(this).attr("href"))return!1;e.location.href=n(this).attr("href")}}}):n(a).find(".nav-menu").find("li").on(c,function(){r.showSubmenu(this,r.settings.effect),O()}).on(f,function(){r.hideSubmenu(this,r.settings.effect)}),r.settings.hideSubWhenGoOut&&g()},S=function(){w("portrait"),h(),r.settings.visibleSubmenusOnMobile?n(a).find(".nav-submenu").show(0):(n(a).find(".submenu-indicator").removeClass("submenu-indicator-up"),r.settings.submenuIndicator&&r.settings.submenuIndicatorTrigger?n(a).find(".submenu-indicator").on(l,function(e){return e.stopPropagation(),e.preventDefault(),r.hideSubmenu(n(this).parent("a").parent("li").siblings("li"),"slide"),r.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"),"slide"),"none"==n(this).parent("a").siblings(".nav-submenu").css("display")?(n(this).addClass("submenu-indicator-up"),n(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"),n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"),r.showSubmenu(n(this).parent("a").parent("li"),"slide"),!1):(n(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"),void r.hideSubmenu(n(this).parent("a").parent("li"),"slide"))}):n(a).find(".nav-menu, .nav-dropdown").children("li").children("a").each(function(){n(this).siblings(".nav-submenu").length>0&&n(this).on(l,function(i){if(i.stopPropagation(),i.preventDefault(),r.hideSubmenu(n(this).parent("li").siblings("li"),r.settings.effect),r.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"),"slide"),"none"==n(this).siblings(".nav-submenu").css("display"))return n(this).children(".submenu-indicator").addClass("submenu-indicator-up"),n(this).parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"),n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"),r.showSubmenu(n(this).parent("li"),"slide"),!1;if(n(this).parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"),r.hideSubmenu(n(this).parent("li"),"slide"),"_blank"===n(this).attr("target")||"blank"===n(this).attr("target"))e.open(n(this).attr("href"));else{if("#"===n(this).attr("href")||""===n(this).attr("href")||"javascript:void(0)"===n(this).attr("href"))return!1;e.location.href=n(this).attr("href")}})}))};r.callback=function(n){t[n]!==s&&t[n].call(a)},r.init()},n.fn.xs_nav=function(e){return this.each(function(){if(s===n(this).data("xs_nav")){var i=new n.xs_nav(this,e);n(this).data("xs_nav",i)}})}}(jQuery,window,document);


/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
!function(a){function b(a){var b=a.length,d=c.type(a);return"function"===d||c.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===d||0===b||"number"==typeof b&&b>0&&b-1 in a}if(!a.jQuery){var c=function(a,b){return new c.fn.init(a,b)};c.isWindow=function(a){return null!=a&&a==a.window},c.type=function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?e[g.call(a)]||"object":typeof a},c.isArray=Array.isArray||function(a){return"array"===c.type(a)},c.isPlainObject=function(a){var b;if(!a||"object"!==c.type(a)||a.nodeType||c.isWindow(a))return!1;try{if(a.constructor&&!f.call(a,"constructor")&&!f.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(d){return!1}for(b in a);return void 0===b||f.call(a,b)},c.each=function(a,c,d){var e,f=0,g=a.length,h=b(a);if(d){if(h)for(;g>f&&(e=c.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=c.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=c.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=c.call(a[f],f,a[f]),e===!1)break;return a},c.data=function(a,b,e){if(void 0===e){var f=a[c.expando],g=f&&d[f];if(void 0===b)return g;if(g&&b in g)return g[b]}else if(void 0!==b){var f=a[c.expando]||(a[c.expando]=++c.uuid);return d[f]=d[f]||{},d[f][b]=e,e}},c.removeData=function(a,b){var e=a[c.expando],f=e&&d[e];f&&c.each(b,function(a,b){delete f[b]})},c.extend=function(){var a,b,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;for("boolean"==typeof h&&(k=h,h=arguments[i]||{},i++),"object"!=typeof h&&"function"!==c.type(h)&&(h={}),i===j&&(h=this,i--);j>i;i++)if(null!=(f=arguments[i]))for(e in f)a=h[e],d=f[e],h!==d&&(k&&d&&(c.isPlainObject(d)||(b=c.isArray(d)))?(b?(b=!1,g=a&&c.isArray(a)?a:[]):g=a&&c.isPlainObject(a)?a:{},h[e]=c.extend(k,g,d)):void 0!==d&&(h[e]=d));return h},c.queue=function(a,d,e){function f(a,c){var d=c||[];return null!=a&&(b(Object(a))?!function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;)a[e++]=b[d++];if(c!==c)for(;void 0!==b[d];)a[e++]=b[d++];return a.length=e,a}(d,"string"==typeof a?[a]:a):[].push.call(d,a)),d}if(a){d=(d||"fx")+"queue";var g=c.data(a,d);return e?(!g||c.isArray(e)?g=c.data(a,d,f(e)):g.push(e),g):g||[]}},c.dequeue=function(a,b){c.each(a.nodeType?[a]:a,function(a,d){b=b||"fx";var e=c.queue(d,b),f=e.shift();"inprogress"===f&&(f=e.shift()),f&&("fx"===b&&e.unshift("inprogress"),f.call(d,function(){c.dequeue(d,b)}))})},c.fn=c.prototype={init:function(a){if(a.nodeType)return this[0]=a,this;throw new Error("Not a DOM node.")},offset:function(){var b=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:b.top+(a.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:b.left+(a.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function a(){for(var a=this.offsetParent||document;a&&"html"===!a.nodeType.toLowerCase&&"static"===a.style.position;)a=a.offsetParent;return a||document}var b=this[0],a=a.apply(b),d=this.offset(),e=/^(?:body|html)$/i.test(a.nodeName)?{top:0,left:0}:c(a).offset();return d.top-=parseFloat(b.style.marginTop)||0,d.left-=parseFloat(b.style.marginLeft)||0,a.style&&(e.top+=parseFloat(a.style.borderTopWidth)||0,e.left+=parseFloat(a.style.borderLeftWidth)||0),{top:d.top-e.top,left:d.left-e.left}}};var d={};c.expando="velocity"+(new Date).getTime(),c.uuid=0;for(var e={},f=e.hasOwnProperty,g=e.toString,h="Boolean Number String Function Array Date RegExp Object Error".split(" "),i=0;i<h.length;i++)e["[object "+h[i]+"]"]=h[i].toLowerCase();c.fn.init.prototype=c.fn,a.Velocity={Utilities:c}}}(window),function(a){"object"==typeof module&&"object"==typeof module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):a()}(function(){return function(a,b,c,d){function e(a){for(var b=-1,c=a?a.length:0,d=[];++b<c;){var e=a[b];e&&d.push(e)}return d}function f(a){return p.isWrapped(a)?a=[].slice.call(a):p.isNode(a)&&(a=[a]),a}function g(a){var b=m.data(a,"velocity");return null===b?d:b}function h(a){return function(b){return Math.round(b*a)*(1/a)}}function i(a,c,d,e){function f(a,b){return 1-3*b+3*a}function g(a,b){return 3*b-6*a}function h(a){return 3*a}function i(a,b,c){return((f(b,c)*a+g(b,c))*a+h(b))*a}function j(a,b,c){return 3*f(b,c)*a*a+2*g(b,c)*a+h(b)}function k(b,c){for(var e=0;p>e;++e){var f=j(c,a,d);if(0===f)return c;var g=i(c,a,d)-b;c-=g/f}return c}function l(){for(var b=0;t>b;++b)x[b]=i(b*u,a,d)}function m(b,c,e){var f,g,h=0;do g=c+(e-c)/2,f=i(g,a,d)-b,f>0?e=g:c=g;while(Math.abs(f)>r&&++h<s);return g}function n(b){for(var c=0,e=1,f=t-1;e!=f&&x[e]<=b;++e)c+=u;--e;var g=(b-x[e])/(x[e+1]-x[e]),h=c+g*u,i=j(h,a,d);return i>=q?k(b,h):0==i?h:m(b,c,c+u)}function o(){y=!0,(a!=c||d!=e)&&l()}var p=4,q=.001,r=1e-7,s=10,t=11,u=1/(t-1),v="Float32Array"in b;if(4!==arguments.length)return!1;for(var w=0;4>w;++w)if("number"!=typeof arguments[w]||isNaN(arguments[w])||!isFinite(arguments[w]))return!1;a=Math.min(a,1),d=Math.min(d,1),a=Math.max(a,0),d=Math.max(d,0);var x=v?new Float32Array(t):new Array(t),y=!1,z=function(b){return y||o(),a===c&&d===e?b:0===b?0:1===b?1:i(n(b),c,e)};z.getControlPoints=function(){return[{x:a,y:c},{x:d,y:e}]};var A="generateBezier("+[a,c,d,e]+")";return z.toString=function(){return A},z}function j(a,b){var c=a;return p.isString(a)?t.Easings[a]||(c=!1):c=p.isArray(a)&&1===a.length?h.apply(null,a):p.isArray(a)&&2===a.length?u.apply(null,a.concat([b])):p.isArray(a)&&4===a.length?i.apply(null,a):!1,c===!1&&(c=t.Easings[t.defaults.easing]?t.defaults.easing:s),c}function k(a){if(a){var b=(new Date).getTime(),c=t.State.calls.length;c>1e4&&(t.State.calls=e(t.State.calls));for(var f=0;c>f;f++)if(t.State.calls[f]){var h=t.State.calls[f],i=h[0],j=h[2],n=h[3],o=!!n,q=null;n||(n=t.State.calls[f][3]=b-16);for(var r=Math.min((b-n)/j.duration,1),s=0,u=i.length;u>s;s++){var w=i[s],y=w.element;if(g(y)){var z=!1;if(j.display!==d&&null!==j.display&&"none"!==j.display){if("flex"===j.display){var A=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];m.each(A,function(a,b){v.setPropertyValue(y,"display",b)})}v.setPropertyValue(y,"display",j.display)}j.visibility!==d&&"hidden"!==j.visibility&&v.setPropertyValue(y,"visibility",j.visibility);for(var B in w)if("element"!==B){var C,D=w[B],E=p.isString(D.easing)?t.Easings[D.easing]:D.easing;if(1===r)C=D.endValue;else{var F=D.endValue-D.startValue;if(C=D.startValue+F*E(r,j,F),!o&&C===D.currentValue)continue}if(D.currentValue=C,"tween"===B)q=C;else{if(v.Hooks.registered[B]){var G=v.Hooks.getRoot(B),H=g(y).rootPropertyValueCache[G];H&&(D.rootPropertyValue=H)}var I=v.setPropertyValue(y,B,D.currentValue+(0===parseFloat(C)?"":D.unitType),D.rootPropertyValue,D.scrollData);v.Hooks.registered[B]&&(g(y).rootPropertyValueCache[G]=v.Normalizations.registered[G]?v.Normalizations.registered[G]("extract",null,I[1]):I[1]),"transform"===I[0]&&(z=!0)}}j.mobileHA&&g(y).transformCache.translate3d===d&&(g(y).transformCache.translate3d="(0px, 0px, 0px)",z=!0),z&&v.flushTransformCache(y)}}j.display!==d&&"none"!==j.display&&(t.State.calls[f][2].display=!1),j.visibility!==d&&"hidden"!==j.visibility&&(t.State.calls[f][2].visibility=!1),j.progress&&j.progress.call(h[1],h[1],r,Math.max(0,n+j.duration-b),n,q),1===r&&l(f)}}t.State.isTicking&&x(k)}function l(a,b){if(!t.State.calls[a])return!1;for(var c=t.State.calls[a][0],e=t.State.calls[a][1],f=t.State.calls[a][2],h=t.State.calls[a][4],i=!1,j=0,k=c.length;k>j;j++){var l=c[j].element;if(b||f.loop||("none"===f.display&&v.setPropertyValue(l,"display",f.display),"hidden"===f.visibility&&v.setPropertyValue(l,"visibility",f.visibility)),f.loop!==!0&&(m.queue(l)[1]===d||!/\.velocityQueueEntryFlag/i.test(m.queue(l)[1]))&&g(l)){g(l).isAnimating=!1,g(l).rootPropertyValueCache={};var n=!1;m.each(v.Lists.transforms3D,function(a,b){var c=/^scale/.test(b)?1:0,e=g(l).transformCache[b];g(l).transformCache[b]!==d&&new RegExp("^\\("+c+"[^.]").test(e)&&(n=!0,delete g(l).transformCache[b])}),f.mobileHA&&(n=!0,delete g(l).transformCache.translate3d),n&&v.flushTransformCache(l),v.Values.removeClass(l,"velocity-animating")}if(!b&&f.complete&&!f.loop&&j===k-1)try{f.complete.call(e,e)}catch(o){setTimeout(function(){throw o},1)}h&&f.loop!==!0&&h(e),g(l)&&f.loop===!0&&!b&&(m.each(g(l).tweensContainer,function(a,b){/^rotate/.test(a)&&360===parseFloat(b.endValue)&&(b.endValue=0,b.startValue=360),/^backgroundPosition/.test(a)&&100===parseFloat(b.endValue)&&"%"===b.unitType&&(b.endValue=0,b.startValue=100)}),t(l,"reverse",{loop:!0,delay:f.delay})),f.queue!==!1&&m.dequeue(l,f.queue)}t.State.calls[a]=!1;for(var p=0,q=t.State.calls.length;q>p;p++)if(t.State.calls[p]!==!1){i=!0;break}i===!1&&(t.State.isTicking=!1,delete t.State.calls,t.State.calls=[])}var m,n=function(){if(c.documentMode)return c.documentMode;for(var a=7;a>4;a--){var b=c.createElement("div");if(b.innerHTML="<!--[if IE "+a+"]><span></span><![endif]-->",b.getElementsByTagName("span").length)return b=null,a}return d}(),o=function(){var a=0;return b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame||function(b){var c,d=(new Date).getTime();return c=Math.max(0,16-(d-a)),a=d+c,setTimeout(function(){b(d+c)},c)}}(),p={isString:function(a){return"string"==typeof a},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},isFunction:function(a){return"[object Function]"===Object.prototype.toString.call(a)},isNode:function(a){return a&&a.nodeType},isNodeList:function(a){return"object"==typeof a&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(a))&&a.length!==d&&(0===a.length||"object"==typeof a[0]&&a[0].nodeType>0)},isWrapped:function(a){return a&&(a.jquery||b.Zepto&&b.Zepto.zepto.isZ(a))},isSVG:function(a){return b.SVGElement&&a instanceof b.SVGElement},isEmptyObject:function(a){for(var b in a)return!1;return!0}},q=!1;if(a.fn&&a.fn.jquery?(m=a,q=!0):m=b.Velocity.Utilities,8>=n&&!q)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=n)return void(jQuery.fn.velocity=jQuery.fn.animate);var r=400,s="swing",t={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:b.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:c.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:m,Redirects:{},Easings:{},Promise:b.Promise,defaults:{queue:"",duration:r,easing:s,begin:d,complete:d,progress:d,display:d,visibility:d,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(a){m.data(a,"velocity",{isSVG:p.isSVG(a),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};b.pageYOffset!==d?(t.State.scrollAnchor=b,t.State.scrollPropertyLeft="pageXOffset",t.State.scrollPropertyTop="pageYOffset"):(t.State.scrollAnchor=c.documentElement||c.body.parentNode||c.body,t.State.scrollPropertyLeft="scrollLeft",t.State.scrollPropertyTop="scrollTop");var u=function(){function a(a){return-a.tension*a.x-a.friction*a.v}function b(b,c,d){var e={x:b.x+d.dx*c,v:b.v+d.dv*c,tension:b.tension,friction:b.friction};return{dx:e.v,dv:a(e)}}function c(c,d){var e={dx:c.v,dv:a(c)},f=b(c,.5*d,e),g=b(c,.5*d,f),h=b(c,d,g),i=1/6*(e.dx+2*(f.dx+g.dx)+h.dx),j=1/6*(e.dv+2*(f.dv+g.dv)+h.dv);return c.x=c.x+i*d,c.v=c.v+j*d,c}return function d(a,b,e){var f,g,h,i={x:-1,v:0,tension:null,friction:null},j=[0],k=0,l=1e-4,m=.016;for(a=parseFloat(a)||500,b=parseFloat(b)||20,e=e||null,i.tension=a,i.friction=b,f=null!==e,f?(k=d(a,b),g=k/e*m):g=m;;)if(h=c(h||i,g),j.push(1+h.x),k+=16,!(Math.abs(h.x)>l&&Math.abs(h.v)>l))break;return f?function(a){return j[a*(j.length-1)|0]}:k}}();t.Easings={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},spring:function(a){return 1-Math.cos(4.5*a*Math.PI)*Math.exp(6*-a)}},m.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(a,b){t.Easings[b[0]]=i.apply(null,b[1])});var v=t.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var a=0;a<v.Lists.colors.length;a++){var b="color"===v.Lists.colors[a]?"0 0 0 1":"255 255 255 1";v.Hooks.templates[v.Lists.colors[a]]=["Red Green Blue Alpha",b]}var c,d,e;if(n)for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");var f=d[1].match(v.RegEx.valueSplit);"Color"===e[0]&&(e.push(e.shift()),f.push(f.shift()),v.Hooks.templates[c]=[e.join(" "),f.join(" ")])}for(c in v.Hooks.templates){d=v.Hooks.templates[c],e=d[0].split(" ");for(var a in e){var g=c+e[a],h=a;v.Hooks.registered[g]=[c,h]}}},getRoot:function(a){var b=v.Hooks.registered[a];return b?b[0]:a},cleanRootPropertyValue:function(a,b){return v.RegEx.valueUnwrap.test(b)&&(b=b.match(v.RegEx.valueUnwrap)[1]),v.Values.isCSSNullValue(b)&&(b=v.Hooks.templates[a][1]),b},extractValue:function(a,b){var c=v.Hooks.registered[a];if(c){var d=c[0],e=c[1];return b=v.Hooks.cleanRootPropertyValue(d,b),b.toString().match(v.RegEx.valueSplit)[e]}return b},injectValue:function(a,b,c){var d=v.Hooks.registered[a];if(d){var e,f,g=d[0],h=d[1];return c=v.Hooks.cleanRootPropertyValue(g,c),e=c.toString().match(v.RegEx.valueSplit),e[h]=b,f=e.join(" ")}return c}},Normalizations:{registered:{clip:function(a,b,c){switch(a){case"name":return"clip";case"extract":var d;return v.RegEx.wrappedValueAlreadyExtracted.test(c)?d=c:(d=c.toString().match(v.RegEx.valueUnwrap),d=d?d[1].replace(/,(\s+)?/g," "):c),d;case"inject":return"rect("+c+")"}},blur:function(a,b,c){switch(a){case"name":return t.State.isFirefox?"filter":"-webkit-filter";case"extract":var d=parseFloat(c);if(!d&&0!==d){var e=c.toString().match(/blur\(([0-9]+[A-z]+)\)/i);d=e?e[1]:0}return d;case"inject":return parseFloat(c)?"blur("+c+")":"none"}},opacity:function(a,b,c){if(8>=n)switch(a){case"name":return"filter";case"extract":var d=c.toString().match(/alpha\(opacity=(.*)\)/i);return c=d?d[1]/100:1;case"inject":return b.style.zoom=1,parseFloat(c)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(c),10)+")"}else switch(a){case"name":return"opacity";case"extract":return c;case"inject":return c}}},register:function(){9>=n||t.State.isGingerbread||(v.Lists.transformsBase=v.Lists.transformsBase.concat(v.Lists.transforms3D));for(var a=0;a<v.Lists.transformsBase.length;a++)!function(){var b=v.Lists.transformsBase[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return"transform";case"extract":return g(c)===d||g(c).transformCache[b]===d?/^scale/i.test(b)?1:0:g(c).transformCache[b].replace(/[()]/g,"");case"inject":var f=!1;switch(b.substr(0,b.length-1)){case"translate":f=!/(%|px|em|rem|vw|vh|\d)$/i.test(e);break;case"scal":case"scale":t.State.isAndroid&&g(c).transformCache[b]===d&&1>e&&(e=1),f=!/(\d)$/i.test(e);break;case"skew":f=!/(deg|\d)$/i.test(e);break;case"rotate":f=!/(deg|\d)$/i.test(e)}return f||(g(c).transformCache[b]="("+e+")"),g(c).transformCache[b]}}}();for(var a=0;a<v.Lists.colors.length;a++)!function(){var b=v.Lists.colors[a];v.Normalizations.registered[b]=function(a,c,e){switch(a){case"name":return b;case"extract":var f;if(v.RegEx.wrappedValueAlreadyExtracted.test(e))f=e;else{var g,h={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(e)?g=h[e]!==d?h[e]:h.black:v.RegEx.isHex.test(e)?g="rgb("+v.Values.hexToRgb(e).join(" ")+")":/^rgba?\(/i.test(e)||(g=h.black),f=(g||e).toString().match(v.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=n||3!==f.split(" ").length||(f+=" 1"),f;case"inject":return 8>=n?4===e.split(" ").length&&(e=e.split(/\s+/).slice(0,3).join(" ")):3===e.split(" ").length&&(e+=" 1"),(8>=n?"rgb":"rgba")+"("+e.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})},SVGAttribute:function(a){var b="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(n||t.State.isAndroid&&!t.State.isChrome)&&(b+="|transform"),new RegExp("^("+b+")$","i").test(a)},prefixCheck:function(a){if(t.State.prefixMatches[a])return[t.State.prefixMatches[a],!0];for(var b=["","Webkit","Moz","ms","O"],c=0,d=b.length;d>c;c++){var e;if(e=0===c?a:b[c]+a.replace(/^\w/,function(a){return a.toUpperCase()}),p.isString(t.State.prefixElement.style[e]))return t.State.prefixMatches[a]=e,[e,!0]}return[a,!1]}},Values:{hexToRgb:function(a){var b,c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d}),b=d.exec(a),b?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16)]:[0,0,0]},isCSSNullValue:function(a){return 0==a||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(a)},getUnitType:function(a){return/^(rotate|skew)/i.test(a)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(a)?"":"px"},getDisplayType:function(a){var b=a&&a.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(b)?"inline":/^(li)$/i.test(b)?"list-item":/^(tr)$/i.test(b)?"table-row":/^(table)$/i.test(b)?"table":/^(tbody)$/i.test(b)?"table-row-group":"block"},addClass:function(a,b){a.classList?a.classList.add(b):a.className+=(a.className.length?" ":"")+b},removeClass:function(a,b){a.classList?a.classList.remove(b):a.className=a.className.toString().replace(new RegExp("(^|\\s)"+b.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(a,c,e,f){function h(a,c){function e(){j&&v.setPropertyValue(a,"display","none")}var i=0;if(8>=n)i=m.css(a,c);else{var j=!1;if(/^(width|height)$/.test(c)&&0===v.getPropertyValue(a,"display")&&(j=!0,v.setPropertyValue(a,"display",v.Values.getDisplayType(a))),!f){if("height"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var k=a.offsetHeight-(parseFloat(v.getPropertyValue(a,"borderTopWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderBottomWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingTop"))||0)-(parseFloat(v.getPropertyValue(a,"paddingBottom"))||0);return e(),k}if("width"===c&&"border-box"!==v.getPropertyValue(a,"boxSizing").toString().toLowerCase()){var l=a.offsetWidth-(parseFloat(v.getPropertyValue(a,"borderLeftWidth"))||0)-(parseFloat(v.getPropertyValue(a,"borderRightWidth"))||0)-(parseFloat(v.getPropertyValue(a,"paddingLeft"))||0)-(parseFloat(v.getPropertyValue(a,"paddingRight"))||0);return e(),l}}var o;o=g(a)===d?b.getComputedStyle(a,null):g(a).computedStyle?g(a).computedStyle:g(a).computedStyle=b.getComputedStyle(a,null),"borderColor"===c&&(c="borderTopColor"),i=9===n&&"filter"===c?o.getPropertyValue(c):o[c],(""===i||null===i)&&(i=a.style[c]),e()}if("auto"===i&&/^(top|right|bottom|left)$/i.test(c)){var p=h(a,"position");("fixed"===p||"absolute"===p&&/top|left/i.test(c))&&(i=m(a).position()[c]+"px")}return i}var i;if(v.Hooks.registered[c]){var j=c,k=v.Hooks.getRoot(j);e===d&&(e=v.getPropertyValue(a,v.Names.prefixCheck(k)[0])),v.Normalizations.registered[k]&&(e=v.Normalizations.registered[k]("extract",a,e)),i=v.Hooks.extractValue(j,e)}else if(v.Normalizations.registered[c]){var l,o;l=v.Normalizations.registered[c]("name",a),"transform"!==l&&(o=h(a,v.Names.prefixCheck(l)[0]),v.Values.isCSSNullValue(o)&&v.Hooks.templates[c]&&(o=v.Hooks.templates[c][1])),i=v.Normalizations.registered[c]("extract",a,o)}if(!/^[\d-]/.test(i))if(g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c))if(/^(height|width)$/i.test(c))try{i=a.getBBox()[c]}catch(p){i=0}else i=a.getAttribute(c);else i=h(a,v.Names.prefixCheck(c)[0]);return v.Values.isCSSNullValue(i)&&(i=0),t.debug>=2&&console.log("Get "+c+": "+i),i},setPropertyValue:function(a,c,d,e,f){var h=c;if("scroll"===c)f.container?f.container["scroll"+f.direction]=d:"Left"===f.direction?b.scrollTo(d,f.alternateValue):b.scrollTo(f.alternateValue,d);else if(v.Normalizations.registered[c]&&"transform"===v.Normalizations.registered[c]("name",a))v.Normalizations.registered[c]("inject",a,d),h="transform",d=g(a).transformCache[c];else{if(v.Hooks.registered[c]){var i=c,j=v.Hooks.getRoot(c);e=e||v.getPropertyValue(a,j),d=v.Hooks.injectValue(i,d,e),c=j}if(v.Normalizations.registered[c]&&(d=v.Normalizations.registered[c]("inject",a,d),c=v.Normalizations.registered[c]("name",a)),h=v.Names.prefixCheck(c)[0],8>=n)try{a.style[h]=d}catch(k){t.debug&&console.log("Browser does not support ["+d+"] for ["+h+"]")}else g(a)&&g(a).isSVG&&v.Names.SVGAttribute(c)?a.setAttribute(c,d):a.style[h]=d;t.debug>=2&&console.log("Set "+c+" ("+h+"): "+d)}return[h,d]},flushTransformCache:function(a){function b(b){return parseFloat(v.getPropertyValue(a,b))}var c="";if((n||t.State.isAndroid&&!t.State.isChrome)&&g(a).isSVG){var d={translate:[b("translateX"),b("translateY")],skewX:[b("skewX")],skewY:[b("skewY")],scale:1!==b("scale")?[b("scale"),b("scale")]:[b("scaleX"),b("scaleY")],rotate:[b("rotateZ"),0,0]};m.each(g(a).transformCache,function(a){/^translate/i.test(a)?a="translate":/^scale/i.test(a)?a="scale":/^rotate/i.test(a)&&(a="rotate"),d[a]&&(c+=a+"("+d[a].join(" ")+") ",delete d[a])})}else{var e,f;m.each(g(a).transformCache,function(b){return e=g(a).transformCache[b],"transformPerspective"===b?(f=e,!0):(9===n&&"rotateZ"===b&&(b="rotate"),void(c+=b+e+" "))}),f&&(c="perspective"+f+" "+c)}v.setPropertyValue(a,"transform",c)}};v.Hooks.register(),v.Normalizations.register(),t.hook=function(a,b,c){var e=d;return a=f(a),m.each(a,function(a,f){if(g(f)===d&&t.init(f),c===d)e===d&&(e=t.CSS.getPropertyValue(f,b));else{var h=t.CSS.setPropertyValue(f,b,c);"transform"===h[0]&&t.CSS.flushTransformCache(f),e=h}}),e};var w=function(){function a(){return h?B.promise||null:i}function e(){function a(){function a(a,b){var c=d,e=d,g=d;return p.isArray(a)?(c=a[0],!p.isArray(a[1])&&/^[\d-]/.test(a[1])||p.isFunction(a[1])||v.RegEx.isHex.test(a[1])?g=a[1]:(p.isString(a[1])&&!v.RegEx.isHex.test(a[1])||p.isArray(a[1]))&&(e=b?a[1]:j(a[1],h.duration),a[2]!==d&&(g=a[2]))):c=a,b||(e=e||h.easing),p.isFunction(c)&&(c=c.call(f,y,x)),p.isFunction(g)&&(g=g.call(f,y,x)),[c||0,e,g]}function l(a,b){var c,d;return d=(b||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(a){return c=a,""}),c||(c=v.Values.getUnitType(a)),[d,c]}function n(){var a={myParent:f.parentNode||c.body,position:v.getPropertyValue(f,"position"),fontSize:v.getPropertyValue(f,"fontSize")},d=a.position===I.lastPosition&&a.myParent===I.lastParent,e=a.fontSize===I.lastFontSize;I.lastParent=a.myParent,I.lastPosition=a.position,I.lastFontSize=a.fontSize;var h=100,i={};if(e&&d)i.emToPx=I.lastEmToPx,i.percentToPxWidth=I.lastPercentToPxWidth,i.percentToPxHeight=I.lastPercentToPxHeight;else{var j=g(f).isSVG?c.createElementNS("http://www.w3.org/2000/svg","rect"):c.createElement("div");t.init(j),a.myParent.appendChild(j),m.each(["overflow","overflowX","overflowY"],function(a,b){t.CSS.setPropertyValue(j,b,"hidden")}),t.CSS.setPropertyValue(j,"position",a.position),t.CSS.setPropertyValue(j,"fontSize",a.fontSize),t.CSS.setPropertyValue(j,"boxSizing","content-box"),m.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(a,b){t.CSS.setPropertyValue(j,b,h+"%")}),t.CSS.setPropertyValue(j,"paddingLeft",h+"em"),i.percentToPxWidth=I.lastPercentToPxWidth=(parseFloat(v.getPropertyValue(j,"width",null,!0))||1)/h,i.percentToPxHeight=I.lastPercentToPxHeight=(parseFloat(v.getPropertyValue(j,"height",null,!0))||1)/h,i.emToPx=I.lastEmToPx=(parseFloat(v.getPropertyValue(j,"paddingLeft"))||1)/h,a.myParent.removeChild(j)}return null===I.remToPx&&(I.remToPx=parseFloat(v.getPropertyValue(c.body,"fontSize"))||16),null===I.vwToPx&&(I.vwToPx=parseFloat(b.innerWidth)/100,I.vhToPx=parseFloat(b.innerHeight)/100),i.remToPx=I.remToPx,i.vwToPx=I.vwToPx,i.vhToPx=I.vhToPx,t.debug>=1&&console.log("Unit ratios: "+JSON.stringify(i),f),i}if(h.begin&&0===y)try{h.begin.call(o,o)}catch(r){setTimeout(function(){throw r},1)}if("scroll"===C){var u,w,z,A=/^x$/i.test(h.axis)?"Left":"Top",D=parseFloat(h.offset)||0;h.container?p.isWrapped(h.container)||p.isNode(h.container)?(h.container=h.container[0]||h.container,u=h.container["scroll"+A],z=u+m(f).position()[A.toLowerCase()]+D):h.container=null:(u=t.State.scrollAnchor[t.State["scrollProperty"+A]],w=t.State.scrollAnchor[t.State["scrollProperty"+("Left"===A?"Top":"Left")]],z=m(f).offset()[A.toLowerCase()]+D),i={scroll:{rootPropertyValue:!1,startValue:u,currentValue:u,endValue:z,unitType:"",easing:h.easing,scrollData:{container:h.container,direction:A,alternateValue:w}},element:f},t.debug&&console.log("tweensContainer (scroll): ",i.scroll,f)}else if("reverse"===C){if(!g(f).tweensContainer)return void m.dequeue(f,h.queue);"none"===g(f).opts.display&&(g(f).opts.display="auto"),"hidden"===g(f).opts.visibility&&(g(f).opts.visibility="visible"),g(f).opts.loop=!1,g(f).opts.begin=null,g(f).opts.complete=null,s.easing||delete h.easing,s.duration||delete h.duration,h=m.extend({},g(f).opts,h);var E=m.extend(!0,{},g(f).tweensContainer);for(var F in E)if("element"!==F){var G=E[F].startValue;E[F].startValue=E[F].currentValue=E[F].endValue,E[F].endValue=G,p.isEmptyObject(s)||(E[F].easing=h.easing),t.debug&&console.log("reverse tweensContainer ("+F+"): "+JSON.stringify(E[F]),f)}i=E}else if("start"===C){var E;g(f).tweensContainer&&g(f).isAnimating===!0&&(E=g(f).tweensContainer),m.each(q,function(b,c){if(RegExp("^"+v.Lists.colors.join("$|^")+"$").test(b)){var e=a(c,!0),f=e[0],g=e[1],h=e[2];if(v.RegEx.isHex.test(f)){for(var i=["Red","Green","Blue"],j=v.Values.hexToRgb(f),k=h?v.Values.hexToRgb(h):d,l=0;l<i.length;l++){var m=[j[l]];g&&m.push(g),k!==d&&m.push(k[l]),q[b+i[l]]=m}delete q[b]}}});for(var H in q){var K=a(q[H]),L=K[0],M=K[1],N=K[2];H=v.Names.camelCase(H);var O=v.Hooks.getRoot(H),P=!1;if(g(f).isSVG||"tween"===O||v.Names.prefixCheck(O)[1]!==!1||v.Normalizations.registered[O]!==d){(h.display!==d&&null!==h.display&&"none"!==h.display||h.visibility!==d&&"hidden"!==h.visibility)&&/opacity|filter/.test(H)&&!N&&0!==L&&(N=0),h._cacheValues&&E&&E[H]?(N===d&&(N=E[H].endValue+E[H].unitType),P=g(f).rootPropertyValueCache[O]):v.Hooks.registered[H]?N===d?(P=v.getPropertyValue(f,O),N=v.getPropertyValue(f,H,P)):P=v.Hooks.templates[O][1]:N===d&&(N=v.getPropertyValue(f,H));var Q,R,S,T=!1;if(Q=l(H,N),N=Q[0],S=Q[1],Q=l(H,L),L=Q[0].replace(/^([+-\/*])=/,function(a,b){return T=b,""}),R=Q[1],N=parseFloat(N)||0,L=parseFloat(L)||0,"%"===R&&(/^(fontSize|lineHeight)$/.test(H)?(L/=100,R="em"):/^scale/.test(H)?(L/=100,R=""):/(Red|Green|Blue)$/i.test(H)&&(L=L/100*255,R="")),/[\/*]/.test(T))R=S;else if(S!==R&&0!==N)if(0===L)R=S;else{e=e||n();var U=/margin|padding|left|right|width|text|word|letter/i.test(H)||/X$/.test(H)||"x"===H?"x":"y";switch(S){case"%":N*="x"===U?e.percentToPxWidth:e.percentToPxHeight;break;case"px":break;default:N*=e[S+"ToPx"]}switch(R){case"%":N*=1/("x"===U?e.percentToPxWidth:e.percentToPxHeight);break;case"px":break;default:N*=1/e[R+"ToPx"]}}switch(T){case"+":L=N+L;break;case"-":L=N-L;break;case"*":L=N*L;break;case"/":L=N/L}i[H]={rootPropertyValue:P,startValue:N,currentValue:N,endValue:L,unitType:R,easing:M},t.debug&&console.log("tweensContainer ("+H+"): "+JSON.stringify(i[H]),f)}else t.debug&&console.log("Skipping ["+O+"] due to a lack of browser support.")}i.element=f}i.element&&(v.Values.addClass(f,"velocity-animating"),J.push(i),""===h.queue&&(g(f).tweensContainer=i,g(f).opts=h),g(f).isAnimating=!0,y===x-1?(t.State.calls.push([J,o,h,null,B.resolver]),t.State.isTicking===!1&&(t.State.isTicking=!0,k())):y++)}var e,f=this,h=m.extend({},t.defaults,s),i={};switch(g(f)===d&&t.init(f),parseFloat(h.delay)&&h.queue!==!1&&m.queue(f,h.queue,function(a){t.velocityQueueEntryFlag=!0,g(f).delayTimer={setTimeout:setTimeout(a,parseFloat(h.delay)),next:a}}),h.duration.toString().toLowerCase()){case"fast":h.duration=200;break;case"normal":h.duration=r;break;case"slow":h.duration=600;break;default:h.duration=parseFloat(h.duration)||1}t.mock!==!1&&(t.mock===!0?h.duration=h.delay=1:(h.duration*=parseFloat(t.mock)||1,h.delay*=parseFloat(t.mock)||1)),h.easing=j(h.easing,h.duration),h.begin&&!p.isFunction(h.begin)&&(h.begin=null),h.progress&&!p.isFunction(h.progress)&&(h.progress=null),h.complete&&!p.isFunction(h.complete)&&(h.complete=null),h.display!==d&&null!==h.display&&(h.display=h.display.toString().toLowerCase(),"auto"===h.display&&(h.display=t.CSS.Values.getDisplayType(f))),h.visibility!==d&&null!==h.visibility&&(h.visibility=h.visibility.toString().toLowerCase()),h.mobileHA=h.mobileHA&&t.State.isMobile&&!t.State.isGingerbread,h.queue===!1?h.delay?setTimeout(a,h.delay):a():m.queue(f,h.queue,function(b,c){return c===!0?(B.promise&&B.resolver(o),!0):(t.velocityQueueEntryFlag=!0,void a(b))}),""!==h.queue&&"fx"!==h.queue||"inprogress"===m.queue(f)[0]||m.dequeue(f)}var h,i,n,o,q,s,u=arguments[0]&&(arguments[0].p||m.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||p.isString(arguments[0].properties));if(p.isWrapped(this)?(h=!1,n=0,o=this,i=this):(h=!0,n=1,o=u?arguments[0].elements||arguments[0].e:arguments[0]),o=f(o)){u?(q=arguments[0].properties||arguments[0].p,s=arguments[0].options||arguments[0].o):(q=arguments[n],s=arguments[n+1]);var x=o.length,y=0;if(!/^(stop|finish|finishAll)$/i.test(q)&&!m.isPlainObject(s)){var z=n+1;s={};for(var A=z;A<arguments.length;A++)p.isArray(arguments[A])||!/^(fast|normal|slow)$/i.test(arguments[A])&&!/^\d/.test(arguments[A])?p.isString(arguments[A])||p.isArray(arguments[A])?s.easing=arguments[A]:p.isFunction(arguments[A])&&(s.complete=arguments[A]):s.duration=arguments[A]}var B={promise:null,resolver:null,rejecter:null};h&&t.Promise&&(B.promise=new t.Promise(function(a,b){B.resolver=a,B.rejecter=b}));var C;switch(q){case"scroll":C="scroll";break;case"reverse":C="reverse";break;case"finish":case"finishAll":case"stop":m.each(o,function(a,b){g(b)&&g(b).delayTimer&&(clearTimeout(g(b).delayTimer.setTimeout),g(b).delayTimer.next&&g(b).delayTimer.next(),delete g(b).delayTimer),"finishAll"!==q||s!==!0&&!p.isString(s)||(m.each(m.queue(b,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b()}),m.queue(b,p.isString(s)?s:"",[]))});var D=[];return m.each(t.State.calls,function(a,b){b&&m.each(b[1],function(c,e){var f=s===d?"":s;return f===!0||b[2].queue===f||s===d&&b[2].queue===!1?void m.each(o,function(c,d){d===e&&((s===!0||p.isString(s))&&(m.each(m.queue(d,p.isString(s)?s:""),function(a,b){p.isFunction(b)&&b(null,!0)
}),m.queue(d,p.isString(s)?s:"",[])),"stop"===q?(g(d)&&g(d).tweensContainer&&f!==!1&&m.each(g(d).tweensContainer,function(a,b){b.endValue=b.currentValue}),D.push(a)):("finish"===q||"finishAll"===q)&&(b[2].duration=1))}):!0})}),"stop"===q&&(m.each(D,function(a,b){l(b,!0)}),B.promise&&B.resolver(o)),a();default:if(!m.isPlainObject(q)||p.isEmptyObject(q)){if(p.isString(q)&&t.Redirects[q]){var E=m.extend({},s),F=E.duration,G=E.delay||0;return E.backwards===!0&&(o=m.extend(!0,[],o).reverse()),m.each(o,function(a,b){parseFloat(E.stagger)?E.delay=G+parseFloat(E.stagger)*a:p.isFunction(E.stagger)&&(E.delay=G+E.stagger.call(b,a,x)),E.drag&&(E.duration=parseFloat(F)||(/^(callout|transition)/.test(q)?1e3:r),E.duration=Math.max(E.duration*(E.backwards?1-a/x:(a+1)/x),.75*E.duration,200)),t.Redirects[q].call(b,b,E||{},a,x,o,B.promise?B:d)}),a()}var H="Velocity: First argument ("+q+") was not a property map, a known action, or a registered redirect. Aborting.";return B.promise?B.rejecter(new Error(H)):console.log(H),a()}C="start"}var I={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},J=[];m.each(o,function(a,b){p.isNode(b)&&e.call(b)});var K,E=m.extend({},t.defaults,s);if(E.loop=parseInt(E.loop),K=2*E.loop-1,E.loop)for(var L=0;K>L;L++){var M={delay:E.delay,progress:E.progress};L===K-1&&(M.display=E.display,M.visibility=E.visibility,M.complete=E.complete),w(o,"reverse",M)}return a()}};t=m.extend(w,t),t.animate=w;var x=b.requestAnimationFrame||o;return t.State.isMobile||c.hidden===d||c.addEventListener("visibilitychange",function(){c.hidden?(x=function(a){return setTimeout(function(){a(!0)},16)},k()):x=b.requestAnimationFrame||o}),a.Velocity=t,a!==b&&(a.fn.velocity=w,a.fn.velocity.defaults=t.defaults),m.each(["Down","Up"],function(a,b){t.Redirects["slide"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j=i.begin,k=i.complete,l={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},n={};i.display===d&&(i.display="Down"===b?"inline"===t.CSS.Values.getDisplayType(a)?"inline-block":"block":"none"),i.begin=function(){j&&j.call(g,g);for(var c in l){n[c]=a.style[c];var d=t.CSS.getPropertyValue(a,c);l[c]="Down"===b?[d,0]:[0,d]}n.overflow=a.style.overflow,a.style.overflow="hidden"},i.complete=function(){for(var b in n)a.style[b]=n[b];k&&k.call(g,g),h&&h.resolver(g)},t(a,l,i)}}),m.each(["In","Out"],function(a,b){t.Redirects["fade"+b]=function(a,c,e,f,g,h){var i=m.extend({},c),j={opacity:"In"===b?1:0},k=i.complete;i.complete=e!==f-1?i.begin=null:function(){k&&k.call(g,g),h&&h.resolver(g)},i.display===d&&(i.display="In"===b?"auto":"none"),t(this,j,i)}}),t}(window.jQuery||window.Zepto||window,window,document)});


/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.5",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",u="PAUSED",f=n.defaults,d=this,h=i.extend({},f,r),g=[],p=!1,v=0,m=u,w=!0,y=0,S=!0,b=function(){for(var e in h)f.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T),h.refreshInterval=parseInt(h.refreshInterval)||f.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=u),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=O(g),t.on("shift.controller_sort",function(){g=O(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=O(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",u=r.defaults,f=this,d=i.extend({},u,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)u.hasOwnProperty(e)||delete d[e];for(var t in u)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),f},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),f):f},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(f,new e.Event(i,t.namespace,f,n))})}return f},f.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&f.update())}).on("shift.internal",function(){S(),f.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(f),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(f),f.trigger("add",{controller:s}),f.update()),f},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,f.update(!0)),f):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(f),f.trigger("remove")}return f},this.destroy=function(e){return f.trigger("destroy",{reset:e}),f.remove(),f.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,f.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),f.progress(t)}else T&&h===l&&O(!0);else s.updateScene(f,!1);return f},this.refresh=function(){return b(),E(),f},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||O(),t){var o={progress:g,state:h,scrollDirection:r},u=h!=n,p=function(e){f.trigger(e,o)};u&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),u&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return f}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(f))&&!e&&(f.trigger("change",{what:t,newval:d[t]}),f.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&r){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=v;v=n,u&&!e&&f.trigger("shift",{reason:"triggerElementPosition"})},x=function(){d.triggerHook>0&&f.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(n){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=u[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){f[e]||(f[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(f.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&f.trigger("shift",{reason:e})),f):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*f.triggerHook()),e};var T,A;f.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&O(),t&&_()}).on("progress.internal",function(){O()}).on("add.internal",function(){_()}).on("destroy.internal",function(e){f.removePin(e.reset)});var O=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&_()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),_());var u=i.get.offset(A.spacer,!0),f=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;u[t.vertical?"top":"left"]+=f,i.css(A.spacer.firstChild,{top:u.top,left:u.left})}}},_=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},N=function(){s&&T&&h===l&&!s.info("isDocument")&&O()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&_()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return f;if("fixed"===i.css(e,"position"))return f;if(T){if(T===e)return f;f.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var u=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(u,d),u.setAttribute(t,""),i.addClass(u,n.spacerClass),A={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(u,{width:c.width}),A.relSize.height&&i.css(u,{height:c.height}),u.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",N),window.addEventListener("resize",N),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),O(),f},this.removePin=function(e){if(T){if(h===l&&O(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},o.forEach(function(e){margins[e]=r[e]||""}),i.css(n,margins)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",N),window.removeEventListener("resize",N),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return f};var R,k=[];return f.on("destroy.internal",function(e){f.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&f.removeClassToggle(),R=t,k=n,f.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),f):f},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),f.off("start.internal_class end.internal_class"),R=void 0,k=[],f},w(),f};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!f.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],u=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};f.String=function(e){return"string"===f(e)},f.Function=function(e){return"function"===f(e)},f.Array=function(e){return Array.isArray(e)},f.Number=function(e){return!f.Array(e)&&e-parseFloat(e)+1>=0},f.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(f.String(t))try{t=document.querySelectorAll(t)}catch(r){return n}if("nodelist"===f(t)||f.Array(t))for(var i=0,o=n.length=t.length;o>i;i++){var s=t[i];n[i]=f.DomElement(s)?s:d.elements(s)}else(f.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(f.String(t))return i(e)[s(t)];if(f.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});


/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,i){"function"==typeof define&&define.amd?define(["ScrollMagic","velocity"],i):"object"==typeof exports?i(require("scrollmagic"),require("velocity")):i(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.Velocity||e.jQuery&&e.jQuery.Velocity)}(this,function(e,i){"use strict";var t="animation.velocity",o=0;e.Scene.extend(function(){var r,u,n,c,l=this,s=e._util,a=0;l.on("progress.plugin_velocity",function(){v()}),l.on("destroy.plugin_velocity",function(e){l.off("*.plugin_velocity"),l.removeVelocity(e.reset)});var f=function(e,t,o){s.type.Array(e)?e.forEach(function(e){f(e,t,o)}):(i.Utilities.data(e,c)||i.Utilities.data(e,c,{reverseProps:s.css(e,Object.keys(u))}),i(e,t,o),void 0!==o.queue&&i.Utilities.dequeue(e,o.queue))},y=function(e,t){if(s.type.Array(e))e.forEach(function(e){y(e,t)});else{var o=i.Utilities.data(e,c);o&&o.reverseProps&&(i(e,o.reverseProps,t),void 0!==t.queue&&i.Utilities.dequeue(e,t.queue))}},v=function(){if(r){var e=l.progress();e!=a&&(0===l.duration()&&(e>0?f(r,u,n):y(r,n)),a=e)}};l.setVelocity=function(e,i,a){return r&&l.removeVelocity(),r=s.get.elements(e),u=i||{},n=a||{},c="ScrollMagic."+t+"["+o++ +"]",void 0!==n.queue&&(n.queue=c+"_queue"),v(),l},l.removeVelocity=function(e){return r&&(void 0!==n.queue&&i(r,"stop",n.queue),e&&y(r,{duration:0}),r.forEach(function(e){i.Utilities.removeData(e,c)}),r=u=n=c=void 0),l}})});


/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */

;(function ( $, window, document, undefined ) {

  // Polyfill for requestAnimationFrame
  // via: https://gist.github.com/paulirish/1579671

  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = function(callback) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() { callback(currTime + timeToCall); },
          timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = function(id) {
        clearTimeout(id);
      };
  }());


  // Parallax Constructor

  function Parallax(element, options) {
    var self = this;

    if (typeof options == 'object') {
      delete options.refresh;
      delete options.render;
      $.extend(this, options);
    }

    this.$element = $(element);

    if (!this.imageSrc && this.$element.is('img')) {
      this.imageSrc = this.$element.attr('src');
    }

    var positions = (this.position + '').toLowerCase().match(/\S+/g) || [];

    if (positions.length < 1) {
      positions.push('center');
    }
    if (positions.length == 1) {
      positions.push(positions[0]);
    }

    if (positions[0] == 'top' || positions[0] == 'bottom' || positions[1] == 'left' || positions[1] == 'right') {
      positions = [positions[1], positions[0]];
    }

    if (this.positionX !== undefined) positions[0] = this.positionX.toLowerCase();
    if (this.positionY !== undefined) positions[1] = this.positionY.toLowerCase();

    self.positionX = positions[0];
    self.positionY = positions[1];

    if (this.positionX != 'left' && this.positionX != 'right') {
      if (isNaN(parseInt(this.positionX))) {
        this.positionX = 'center';
      } else {
        this.positionX = parseInt(this.positionX);
      }
    }

    if (this.positionY != 'top' && this.positionY != 'bottom') {
      if (isNaN(parseInt(this.positionY))) {
        this.positionY = 'center';
      } else {
        this.positionY = parseInt(this.positionY);
      }
    }

    this.position =
      this.positionX + (isNaN(this.positionX)? '' : 'px') + ' ' +
      this.positionY + (isNaN(this.positionY)? '' : 'px');

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
      if (this.imageSrc && this.iosFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url("' + this.imageSrc + '")',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    if (navigator.userAgent.match(/(Android)/)) {
      if (this.imageSrc && this.androidFix && !this.$element.is('img')) {
        this.$element.css({
          backgroundImage: 'url("' + this.imageSrc + '")',
          backgroundSize: 'cover',
          backgroundPosition: this.position
        });
      }
      return this;
    }

    this.$mirror = $('<div />').prependTo(this.mirrorContainer);

    var slider = this.$element.find('>.parallax-slider');
    var sliderExisted = false;

    if (slider.length == 0)
      this.$slider = $('<img />').prependTo(this.$mirror);
    else {
      this.$slider = slider.prependTo(this.$mirror)
      sliderExisted = true;
    }

    this.$mirror.addClass('parallax-mirror').css({
      visibility: 'hidden',
      zIndex: this.zIndex,
      position: 'fixed',
      top: 0,
      left: 0,
      overflow: 'hidden'
    });

    this.$slider.addClass('parallax-slider').one('load', function() {
      if (!self.naturalHeight || !self.naturalWidth) {
        self.naturalHeight = this.naturalHeight || this.height || 1;
        self.naturalWidth  = this.naturalWidth  || this.width  || 1;
      }
      self.aspectRatio = self.naturalWidth / self.naturalHeight;

      Parallax.isSetup || Parallax.setup();
      Parallax.sliders.push(self);
      Parallax.isFresh = false;
      Parallax.requestRender();
    });

    if (!sliderExisted)
      this.$slider[0].src = this.imageSrc;

    if (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || slider.length > 0) {
      this.$slider.trigger('load');
    }

  }


  // Parallax Instance Methods

  $.extend(Parallax.prototype, {
    speed:    0.2,
    bleed:    0,
    zIndex:   -100,
    iosFix:   true,
    androidFix: true,
    position: 'center',
    overScrollFix: false,
    mirrorContainer: 'body',

    refresh: function() {
      this.boxWidth        = this.$element.outerWidth();
      this.boxHeight       = this.$element.outerHeight() + this.bleed * 2;
      this.boxOffsetTop    = this.$element.offset().top - this.bleed;
      this.boxOffsetLeft   = this.$element.offset().left;
      this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;

      var winHeight = Parallax.winHeight;
      var docHeight = Parallax.docHeight;
      var maxOffset = Math.min(this.boxOffsetTop, docHeight - winHeight);
      var minOffset = Math.max(this.boxOffsetTop + this.boxHeight - winHeight, 0);
      var imageHeightMin = this.boxHeight + (maxOffset - minOffset) * (1 - this.speed) | 0;
      var imageOffsetMin = (this.boxOffsetTop - maxOffset) * (1 - this.speed) | 0;
      var margin;

      if (imageHeightMin * this.aspectRatio >= this.boxWidth) {
        this.imageWidth    = imageHeightMin * this.aspectRatio | 0;
        this.imageHeight   = imageHeightMin;
        this.offsetBaseTop = imageOffsetMin;

        margin = this.imageWidth - this.boxWidth;

        if (this.positionX == 'left') {
          this.offsetLeft = 0;
        } else if (this.positionX == 'right') {
          this.offsetLeft = - margin;
        } else if (!isNaN(this.positionX)) {
          this.offsetLeft = Math.max(this.positionX, - margin);
        } else {
          this.offsetLeft = - margin / 2 | 0;
        }
      } else {
        this.imageWidth    = this.boxWidth;
        this.imageHeight   = this.boxWidth / this.aspectRatio | 0;
        this.offsetLeft    = 0;

        margin = this.imageHeight - imageHeightMin;

        if (this.positionY == 'top') {
          this.offsetBaseTop = imageOffsetMin;
        } else if (this.positionY == 'bottom') {
          this.offsetBaseTop = imageOffsetMin - margin;
        } else if (!isNaN(this.positionY)) {
          this.offsetBaseTop = imageOffsetMin + Math.max(this.positionY, - margin);
        } else {
          this.offsetBaseTop = imageOffsetMin - margin / 2 | 0;
        }
      }
    },

    render: function() {
      var scrollTop    = Parallax.scrollTop;
      var scrollLeft   = Parallax.scrollLeft;
      var overScroll   = this.overScrollFix ? Parallax.overScroll : 0;
      var scrollBottom = scrollTop + Parallax.winHeight;

      if (this.boxOffsetBottom > scrollTop && this.boxOffsetTop <= scrollBottom) {
        this.visibility = 'visible';
        this.mirrorTop = this.boxOffsetTop  - scrollTop;
        this.mirrorLeft = this.boxOffsetLeft - scrollLeft;
        this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed);
      } else {
        this.visibility = 'hidden';
      }

      this.$mirror.css({
        transform: 'translate3d('+this.mirrorLeft+'px, '+(this.mirrorTop - overScroll)+'px, 0px)',
        visibility: this.visibility,
        height: this.boxHeight,
        width: this.boxWidth
      });

      this.$slider.css({
        transform: 'translate3d('+this.offsetLeft+'px, '+this.offsetTop+'px, 0px)',
        position: 'absolute',
        height: this.imageHeight,
        width: this.imageWidth,
        maxWidth: 'none'
      });
    }
  });


  // Parallax Static Methods

  $.extend(Parallax, {
    scrollTop:    0,
    scrollLeft:   0,
    winHeight:    0,
    winWidth:     0,
    docHeight:    1 << 30,
    docWidth:     1 << 30,
    sliders:      [],
    isReady:      false,
    isFresh:      false,
    isBusy:       false,

    setup: function() {
      if (this.isReady) return;

      var self = this;

      var $doc = $(document), $win = $(window);

      var loadDimensions = function() {
        Parallax.winHeight = $win.height();
        Parallax.winWidth  = $win.width();
        Parallax.docHeight = $doc.height();
        Parallax.docWidth  = $doc.width();
      };

      var loadScrollPosition = function() {
        var winScrollTop  = $win.scrollTop();
        var scrollTopMax  = Parallax.docHeight - Parallax.winHeight;
        var scrollLeftMax = Parallax.docWidth  - Parallax.winWidth;
        Parallax.scrollTop  = Math.max(0, Math.min(scrollTopMax,  winScrollTop));
        Parallax.scrollLeft = Math.max(0, Math.min(scrollLeftMax, $win.scrollLeft()));
        Parallax.overScroll = Math.max(winScrollTop - scrollTopMax, Math.min(winScrollTop, 0));
      };

      $win.on('resize.px.parallax load.px.parallax', function() {
          loadDimensions();
          self.refresh();
          Parallax.isFresh = false;
          Parallax.requestRender();
        })
        .on('scroll.px.parallax load.px.parallax', function() {
          loadScrollPosition();
          Parallax.requestRender();
        });

      loadDimensions();
      loadScrollPosition();

      this.isReady = true;

      var lastPosition = -1;

      function frameLoop() {
        if (lastPosition == window.pageYOffset) {   // Avoid overcalculations
          window.requestAnimationFrame(frameLoop);
          return false;
        } else lastPosition = window.pageYOffset;

        self.render();
        window.requestAnimationFrame(frameLoop);
      }

      frameLoop();
    },

    configure: function(options) {
      if (typeof options == 'object') {
        delete options.refresh;
        delete options.render;
        $.extend(this.prototype, options);
      }
    },

    refresh: function() {
      $.each(this.sliders, function(){ this.refresh(); });
      this.isFresh = true;
    },

    render: function() {
      this.isFresh || this.refresh();
      $.each(this.sliders, function(){ this.render(); });
    },

    requestRender: function() {
      var self = this;
      self.render();
      self.isBusy = false;
    },
    destroy: function(el){
      var i,
          parallaxElement = $(el).data('px.parallax');
      parallaxElement.$mirror.remove();
      for(i=0; i < this.sliders.length; i+=1){
        if(this.sliders[i] == parallaxElement){
          this.sliders.splice(i, 1);
        }
      }
      $(el).data('px.parallax', false);
      if(this.sliders.length === 0){
        $(window).off('scroll.px.parallax resize.px.parallax load.px.parallax');
        this.isReady = false;
        Parallax.isSetup = false;
      }
    }
  });


  // Parallax Plugin Definition

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = typeof option == 'object' && option;

      if (this == window || this == document || $this.is('body')) {
        Parallax.configure(options);
      }
      else if (!$this.data('px.parallax')) {
        options = $.extend({}, $this.data(), options);
        $this.data('px.parallax', new Parallax(this, options));
      }
      else if (typeof option == 'object')
      {
        $.extend($this.data('px.parallax'), options);
      }
      if (typeof option == 'string') {
        if(option == 'destroy'){
            Parallax.destroy(this);
        }else{
          Parallax[option]();
        }
      }
    });
  }

  var old = $.fn.parallax;

  $.fn.parallax             = Plugin;
  $.fn.parallax.Constructor = Parallax;


  // Parallax No Conflict

  $.fn.parallax.noConflict = function () {
    $.fn.parallax = old;
    return this;
  };


  // Parallax Data-API

}(jQuery, window, document));


// tilt js for hover 3d
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=function(i,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(i)),t(s),s}:t(jQuery)}(function(t){return t.fn.tilt=function(i){var s=function(){this.ticking||(requestAnimationFrame(g.bind(this)),this.ticking=!0)},e=function(){var i=this;t(this).on("mousemove",o),t(this).on("mouseenter",a),this.settings.reset&&t(this).on("mouseleave",l),this.settings.glare&&t(window).on("resize",d.bind(i))},n=function(){var i=this;void 0!==this.timeout&&clearTimeout(this.timeout),t(this).css({transition:this.settings.speed+"ms "+this.settings.easing}),this.settings.glare&&this.glareElement.css({transition:"opacity "+this.settings.speed+"ms "+this.settings.easing}),this.timeout=setTimeout(function(){t(i).css({transition:""}),i.settings.glare&&i.glareElement.css({transition:""})},this.settings.speed)},a=function(i){this.ticking=!1,t(this).css({"will-change":"transform"}),n.call(this),t(this).trigger("tilt.mouseEnter")},r=function(i){return"undefined"==typeof i&&(i={pageX:t(this).offset().left+t(this).outerWidth()/2,pageY:t(this).offset().top+t(this).outerHeight()/2}),{x:i.pageX,y:i.pageY}},o=function(t){this.mousePositions=r(t),s.call(this)},l=function(){n.call(this),this.reset=!0,s.call(this),t(this).trigger("tilt.mouseLeave")},h=function(){var i=t(this).outerWidth(),s=t(this).outerHeight(),e=t(this).offset().left,n=t(this).offset().top,a=(this.mousePositions.x-e)/i,r=(this.mousePositions.y-n)/s,o=(this.settings.maxTilt/2-a*this.settings.maxTilt).toFixed(2),l=(r*this.settings.maxTilt-this.settings.maxTilt/2).toFixed(2),h=Math.atan2(this.mousePositions.x-(e+i/2),-(this.mousePositions.y-(n+s/2)))*(180/Math.PI);return{tiltX:o,tiltY:l,percentageX:100*a,percentageY:100*r,angle:h}},g=function(){return this.transforms=h.call(this),this.reset?(this.reset=!1,t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX(0deg) rotateY(0deg)"),void(this.settings.glare&&(this.glareElement.css("transform","rotate(180deg) translate(-50%, -50%)"),this.glareElement.css("opacity","0")))):(t(this).css("transform","perspective("+this.settings.perspective+"px) rotateX("+("x"===this.settings.disableAxis?0:this.transforms.tiltY)+"deg) rotateY("+("y"===this.settings.disableAxis?0:this.transforms.tiltX)+"deg) scale3d("+this.settings.scale+","+this.settings.scale+","+this.settings.scale+")"),this.settings.glare&&(this.glareElement.css("transform","rotate("+this.transforms.angle+"deg) translate(-50%, -50%)"),this.glareElement.css("opacity",""+this.transforms.percentageY*this.settings.maxGlare/100)),t(this).trigger("change",[this.transforms]),void(this.ticking=!1))},c=function(){var i=this.settings.glarePrerender;if(i||t(this).append('<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'),this.glareElementWrapper=t(this).find(".js-tilt-glare"),this.glareElement=t(this).find(".js-tilt-glare-inner"),!i){var s={position:"absolute",top:"0",left:"0",width:"100%",height:"100%"};this.glareElementWrapper.css(s).css({overflow:"hidden","pointer-events":"none"}),this.glareElement.css({position:"absolute",top:"50%",left:"50%","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth(),transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"})}},d=function(){this.glareElement.css({width:""+2*t(this).outerWidth(),height:""+2*t(this).outerWidth()})};return t.fn.tilt.destroy=function(){t(this).each(function(){t(this).find(".js-tilt-glare").remove(),t(this).css({"will-change":"",transform:""}),t(this).off("mousemove mouseenter mouseleave")})},t.fn.tilt.getValues=function(){var i=[];return t(this).each(function(){this.mousePositions=r.call(this),i.push(h.call(this))}),i},t.fn.tilt.reset=function(){t(this).each(function(){var i=this;this.mousePositions=r.call(this),this.settings=t(this).data("settings"),l.call(this),setTimeout(function(){i.reset=!1},this.settings.transition)})},this.each(function(){var s=this;this.settings=t.extend({maxTilt:t(this).is("[data-tilt-max]")?t(this).data("tilt-max"):20,perspective:t(this).is("[data-tilt-perspective]")?t(this).data("tilt-perspective"):300,easing:t(this).is("[data-tilt-easing]")?t(this).data("tilt-easing"):"cubic-bezier(.03,.98,.52,.99)",scale:t(this).is("[data-tilt-scale]")?t(this).data("tilt-scale"):"1",speed:t(this).is("[data-tilt-speed]")?t(this).data("tilt-speed"):"400",transition:!t(this).is("[data-tilt-transition]")||t(this).data("tilt-transition"),disableAxis:t(this).is("[data-tilt-disable-axis]")?t(this).data("tilt-disable-axis"):null,axis:t(this).is("[data-tilt-axis]")?t(this).data("tilt-axis"):null,reset:!t(this).is("[data-tilt-reset]")||t(this).data("tilt-reset"),glare:!!t(this).is("[data-tilt-glare]")&&t(this).data("tilt-glare"),maxGlare:t(this).is("[data-tilt-maxglare]")?t(this).data("tilt-maxglare"):1},i),null!==this.settings.axis&&(console.warn("Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"),this.settings.disableAxis=this.settings.axis),this.init=function(){t(s).data("settings",s.settings),s.settings.glare&&c.call(s),e.call(s)},this.init()})},t("[data-tilt]").tilt(),!0});


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(e){var o=/\+/g;function n(e){return r.raw?e:encodeURIComponent(e)}function i(n,i){var t=r.raw?n:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(o," ")),r.json?JSON.parse(e):e}catch(e){}}(n);return e.isFunction(i)?i(t):t}var r=e.cookie=function(o,t,c){if(void 0!==t&&!e.isFunction(t)){if("number"==typeof(c=e.extend({},r.defaults,c)).expires){var u=c.expires,a=c.expires=new Date;a.setTime(+a+864e5*u)}return document.cookie=[n(o),"=",(d=t,n(r.json?JSON.stringify(d):String(d))),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d,f,p=o?void 0:{},s=document.cookie?document.cookie.split("; "):[],m=0,v=s.length;m<v;m++){var x=s[m].split("="),k=(f=x.shift(),r.raw?f:decodeURIComponent(f)),l=x.join("=");if(o&&o===k){p=i(l,t);break}o||void 0===(l=i(l))||(p[k]=l)}return p};r.defaults={},e.removeCookie=function(o,n){return void 0!==e.cookie(o)&&(e.cookie(o,"",e.extend({},n,{expires:-1})),!e.cookie(o))}});


/* Theme Switcher
 /*
 * this plugin add theme switcher window
 * change layout color, fonts, background from parameters.
 * Use cookie
 *
 * author: bumbella
 * version:1.0
 * plugin page: https://github.com/bumbella/theme-switcher
 *
 */
/* Theme Switcher
 /*
 * this plugin add theme switcher window
 * change layout color, fonts, background from parameters.
 * Use cookie
 *
 * author: bumbella
 * version:1.0
 * plugin page: https://github.com/bumbella/theme-switcher
 *
 */
+function ($) {

    themeSwitcher = {
        window: null,
        opt: null,
        /*
         * Defaults options
         */
        defaults: {
            windowPos: 'left',
            layoutColors: {
                title: 'Colors',
                name: ['Default', 'Green', 'Purple', 'Blue', 'Cian', 'Orange', 'Yellow'],
                code: ['#ffffff', '#79B550', '#A4206B', '#13699A', '#59B2E5', '#D35400', '#F1C40F'],
                show: true
            },
            layoutBoxedWide: {
                title: 'Layout',
                show: true
            },
            layoutBackgrounds: {
                title: 'Backgrounds',
                show: true
            },
            layoutFonts: {
                title: 'Fonts',
                name: ['Bitter', 'PT Sans', 'Six Caps', 'Yanone Kaffeesatz', 'Syncopate'],
                code: ['bitter', 'ptsans', 'sixcaps', 'yanonekaffeesatz', 'syncopate'],
                show: true
            }
        },
        /*
         * Get theme window html
         * @returns {String}
         */
        getThemeWindow: function () {

            var _self = this;

            var html = '<div id="theme-switcher" class="theme-switcher ' + this.opt.windowPos + '">' +
                    '<a href="#" class="theme-switcher-toggle"></a>' +
                    '<div class="theme-switcher-inner">';

            /*Colors section*/

            if (this.opt.layoutColors.show) {
                html += '<h4>' + this.opt.layoutColors.title + '</h4>';

                html += '<ul class="layout-colors">';

                $.each(this.opt.layoutColors['code'], function (key, value) {

                    if (_self.opt.layoutColors['name'][key]) {
                        var closeIcon = '';
                        if (_self.opt.layoutColors['name'][key] == 'Default') {
                            closeIcon = '<i class="xsicon icon-cancel"></i>';
                        }
                        html += '<li><a href="#" data-toggle="tooltip" data-placement="top" title="' + _self.opt.layoutColors['name'][key] + ' color" data-name="' + _self.opt.layoutColors['name'][key].toLowerCase() + '" data-color="' + value + '" style="background:' + value + ';" class="setlayoutcolor tooltip">' + closeIcon + '</a></li>';
                    }
                });

                html += '</ul>';

            }

            /*Boxed or wide section*/

            if (this.opt.layoutBoxedWide.show) {
                html += '<h4>' + this.opt.layoutBoxedWide.title + '</h4>' +
                        '<div class="layout-style">' +
                        '<div class="img-radio-button"><input type="radio" name="layout-style-boxed" class="setlayoutstyle" data-name="boxed" value="boxed" id="layout-style-boxed"><label for="layout-style-boxed">Boxed</label></div>' +
                        '<div class="img-radio-button"><input type="radio" name="layout-style-wide" class="setlayoutstyle" data-name="wide" value="wide" id="layout-style-wide"><label for="layout-style-wide">Wide</label></div>' +
                        '</div>';
            }

            /*Backgrounds section*/

            if (this.opt.layoutBackgrounds.show) {

                html += '<h4>' + this.opt.layoutBackgrounds.title + '</h4>' +
                        '<ul class="layout-backgrounds">';

                html += '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Default background" data-name="default" data-bg="transparent" style="background-image:none;" class="setlayoutbackground tooltip"><i class="fa fa-times"></i></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Sand" data-name="sand" data-bg="#79b550" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Diamond" data-name="diamond" data-bg="#a4206b" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Diagonal narrow" data-name="diagonalnarrow" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Diamond wide" data-name="diamondwide" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Arabian" data-name="arabian" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Strange" data-name="strange" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Tile" data-name="tile" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Linen" data-name="linen" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Stripes" data-name="stripes" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Squares" data-name="squares" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>' +
                        '<li><a href="#" data-toggle="tooltip" data-placement="top" title="Image" data-name="image" data-bg="#13699a" style="" class="setlayoutbackground tooltip"></a></li>';

                html += '</ul>';

            }

            /*Fonts section*/

            if (this.opt.layoutFonts.show) {

                html += '<h4>' + this.opt.layoutFonts.title + ':</h4>' +
                        '<select class="form-control setlayoutfont">';

                /* layout fonts append */

                $.each(_self.opt.layoutFonts['name'], function (key, value) {
                    if (_self.opt.layoutFonts['code'][key]) {
                        html += '<option value="' + _self.opt.layoutFonts['code'][key] + '">' + value + '</option>'
                    }
                });

                html += '</select>';

            }

            html += '</div>' +
                    '</div>';

            return html;

        },
        /*
         * Initialize application
         * @returns {boolean}
         */
        init: function (attr) {

            this.opt = $.extend(this.defaults, attr);

            $('body').prepend(this.getThemeWindow());

            this.window = jQuery('#theme-switcher');

            $('.theme-switcher-toggle', this.window).on('click', function (e) {
                e.preventDefault();
                themeSwitcher.toggleWindow($(this));
            });

            $('.setlayoutcolor', this.window).on('click', function (e) {
                e.preventDefault();
                themeSwitcher.changeColorTo($(this).data('name'));
            });

            $('.setlayoutbackground', this.window).on('click', function (e) {
                e.preventDefault();
                themeSwitcher.changeBackgroundTo($(this).data('name'));
            });

            $('.setlayoutbackground', this.window).on('click', function (e) {
                e.preventDefault();
                themeSwitcher.changeBackgroundTo($(this).data('name'));
            });

            $('.setlayoutstyle', this.window).on('change', function (e) {
                e.preventDefault();
                themeSwitcher.changeStyleTo($(this).data('name'));
            });

            $('.setlayoutfont', this.window).on('change', function () {
                themeSwitcher.changeFontTo($(this).val());
            });

            return true;

        },
        /*
         * Run themeSwitcher
         *
         * @param {Array} $attr
         * @return {boolean}
         */
        run: function ($attr) {

            this.init($attr);

            if (jQuery.cookie('themeswitcher') == 'active') {
                this.window.addClass('active');
            } else {
                if (jQuery.cookie('themeswitcher') != undefined) {
                    this.window.removeClass('active');
                }
            }

            if (jQuery.cookie('layoutcolor') != undefined) {

                this.changeColorTo(jQuery.cookie('layoutcolor'))

            } else {

                if ($('body').attr('class') != undefined) {
                    var $match = $('body').attr('class').match(/layoutcolor-\w*(\b|$)/);
                    if ($match != null) {
                        var $colorname = $match[0].split('-');
                        this.changeColorTo($colorname[1]);
                    }
                }

            }

            if (jQuery.cookie('layoutbackground') != undefined) {

                this.changeBackgroundTo(jQuery.cookie('layoutbackground'))

            } else {

                if ($('body').attr('class') != undefined) {
                    var $match = $('body').attr('class').match(/layoutbackground-\w*(\b|$)/);
                    if ($match != null) {
                        var $bg = $match[0].split('-');
                        this.changeBackgroundTo($bg[1]);
                    }
                }

            }

            if (jQuery.cookie('layoutstyle') != undefined) {

                this.changeStyleTo(jQuery.cookie('layoutstyle'))

            } else {

                if ($('.xs-main-content').hasClass('boxed')) {
                    this.changeStyleTo('boxed');
                }

                if ($('.xs-main-content').hasClass('container-fluid')) {
                    this.changeStyleTo('wide');
                }

            }

            if (jQuery.cookie('layoutfont') != undefined) {

                this.changeFontTo(jQuery.cookie('layoutfont'))

            } else {

                if ($('body').attr('class') != undefined) {
                    var $match = $('body').attr('class').match(/layoutfont-\w*(\b|$)/);
                    if ($match != null) {
                        var $name = $match[0].split('-');
                        this.changeFontTo($name[1]);
                    }

                }

            }

            return true;

        },
        /*
         * Change boxed or wide layout style
         * Change .xs-main-content class container-fluid or container
         *
         * @param {String} $name
         * @returns {boolean}
         */
        changeStyleTo: function ($name) {

            if ($name == 'boxed') {
                $('.xs-main-content').removeClass('container-fluid');
                $('.xs-main-content').addClass('boxed');
            }

            if ($name == 'wide') {
                $('.xs-main-content').removeClass('boxed');
                $('.xs-main-content').addClass('container-fluid');
            }

            $('.layout-style input', this.window).each(function () {
                var $this = $(this);
                if ($this.data('name') == $name) {
                    $this.prop('checked', true);
                } else {
                    $this.prop('checked', false);
                }
            });

            jQuery.cookie('layoutstyle', $name, {path: '/'});

        },
        /*
         * Change layout color. Add or remove body class layoutcolor-*
         *
         * @param {String} $colorname
         * @returns {undefined}
         */
        changeColorTo: function ($colorname) {

            if ($('body').attr('class') != undefined) {
                var $match = $('body').attr('class').match(/layoutcolor-\w*(\b|$)/);
                if ($match != null) {
                    $('body').removeClass($match[0]);
                }
            }

            $('body').addClass('layoutcolor-' + $colorname);

            $('.setlayoutcolor', this.window).each(function () {
                var $this = $(this);
                if ($this.data('name') == $colorname) {
                    $this.addClass('active');
                } else {
                    $this.removeClass('active');
                }
            });

            jQuery.cookie('layoutcolor', $colorname, {path: '/'});

        },
        changeFontTo: function ($name) {

            if ($('body').attr('class') != undefined) {
                var $match = $('body').attr('class').match(/layoutfont-\w*(\b|$)/);

                if ($match != null) {
                    $('body').removeClass($match[0]);
                }
            }

            $('body').addClass('layoutfont-' + $name);

            $('.setlayoutfont option', this.window).each(function () {
                var $this = $(this);
                if ($this.val() == $name) {
                    $this.prop('selected', true);
                } else {
                    $this.prop('selected', false);
                }
            });

            jQuery.cookie('layoutfont', $name, {path: '/'});

        },
        changeBackgroundTo: function ($name) {

            if ($('body').attr('class') != undefined) {
                var $match = $('body').attr('class').match(/layoutbackground-\w*(\b|$)/);
                if ($match != null) {
                    $('body').removeClass($match[0]);
                }
            }

            $('body').addClass('layoutbackground-' + $name);

            $('.setlayoutbackground', this.window).each(function () {
                var $this = $(this);
                if ($this.data('name') == $name) {
                    $this.addClass('active');
                } else {
                    $this.removeClass('active');
                }
            });

            jQuery.cookie('layoutbackground', $name, {path: '/'});

        },
        toggleWindow: function ($this) {

            this.window.toggleClass('active');

            if (this.window.hasClass('active')) {
                jQuery.cookie('themeswitcher', 'active', {path: '/'});
            } else {
                jQuery.cookie('themeswitcher', 'noactive', {path: '/'});
            }
        }
    }

}(jQuery);

( function( $ ) {
  "use strict";
    /*------------------------------------------------------------------
     [Table of contents]
     
     
     beautypress custom function
     menu fixed function 
     email patern
     prelaoder
     beautypress portfolio grid
     another beautypress portfolio grid 4 items
     beautypress popular service grid
     image comperasion
     Date Picker
     welcome section slider
     welcome section slider version 2
     testimonial slider
     simple image slider
     team slider
     sync slider
     video pop up
     image pop up
     Ajaxchimp init
     Booking form init
     Booking form select field focus
     numeric number counter init
     counter up appear init
     back to top
     button with mouse pointer
     button pulse effect
     contact form init
     instagram feeds
     beautypress accordion add class
     beautypress hover add class
     mouse over and add class remove class
     flicker gallery
     hover 3d init for tilt
     mega menu
     ScrollMagic
     parallax bg
     social tigger icon
     input number increase
     theme switcher init
     meun scroll and add class
     snazzy maps 1
     snazzy maps 2
     
     -------------------------------------------------------------------*/
  
  
      /*=============================================================
       beautypress custom function
       =========================================================================*/
        function beautypress_function( ) {
        var header_height = $( '.header-height-calc-minus.kolkatacity-header-section' ),
          welcome_container = $( '.welcome-height-calc-minus .kolkatacity-welcome-container' ),
          window_height = $( window ).height( ),
          height_minus = window_height - header_height.height( ),
          comming_soon = $( '.beautypress-comming-soon-content' ),
          owl_prev = $( '.kolkatacity-welcome-slider .owl-nav .owl-prev' ),
          owl_next = $( '.kolkatacity-welcome-slider .owl-nav .owl-next' ),
          header_height_calc = ( header_height.height( ) ) / 2,
          welcome_wrapers = $( '.kolkatacity-welcome-wraper' );
          welcome_wrapers.css( 'margin-top', header_height.height( ) );
          owl_prev.css( 'top', 'calc(50% + ' + header_height_calc + 'px)' );
          owl_next.css( 'top', 'calc(50% + ' + header_height_calc + 'px)' );
          if ( window_height >= 600 ) {
        comming_soon.css( 'height', window_height );
        } else {
        comming_soon.css( 'height', '600px' );
        }
  
        if ( window_height >= 600 ) {
        welcome_container.css( 'height', window_height );
        } else {
        welcome_container.css( 'height', '600' );
        }
          }
  
  //  email patern 
      function email_pattern( email ) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test( email );
        }
  
  // menu fixed function 
      function muneFixed( ) {
  
      var scroll = $( document ).scrollTop( ),
        this_item = $( '.navbar-fixed' ),
        headerHeight = this_item.outerHeight( ),
        headerAnimation = $( '.menu-skew' ),
        classList = ['off-canvas', 'fixed', 'swingInX', 'swingOutX'];
        // console.log(classList);
  
        $( window ).scroll( function( ) {
  
      var scrolled = $( document ).scrollTop( );
        if ( scrolled > headerHeight ) {
      this_item.addClass( classList[0] );
      } else {
      this_item.removeClass( classList[0] );
      }
  
      if ( scrolled > scroll || headerAnimation.hasClass( classList[2][3] ) ) {
      this_item.removeClass( classList[1] );
        headerAnimation.removeClass( classList[2] );
        headerAnimation.addClass( classList[3] );
      } else {
      this_item.addClass( classList[1] );
        headerAnimation.addClass( classList[2] );
        headerAnimation.removeClass( classList[3] );
      }
      scroll = $( document ).scrollTop( );
      } );
        }
  
  // menu fixed anim class function 
      function menuFixedAnimClass( ) {
  
      var scroll = $( document ).scrollTop( ),
        this_item = $( '.navbar-fixed' ),
        headerHeight = this_item.outerHeight( ),
        headerAnimation = $( '.menu-skew' ),
        classList = ['off-canvas', 'fixed', 'swingInX', 'swingOutX'];
        // console.log(classList);
  
          function animationClassAdd( ) {
  
          if ( this_item.hasClass( classList[0][1] ) || headerAnimation.hasClass( classList[2][3] ) ) {
          this_item.addClass( classList[0] );
            this_item.removeClass( classList[1] );
            headerAnimation.removeClass( classList[2] );
            headerAnimation.addClass( classList[3] );
          } else {
          this_item.removeClass( classList[0] );
            this_item.addClass( classList[1] );
            headerAnimation.addClass( classList[2] );
            headerAnimation.removeClass( classList[3] );
          }
          }
  
        $( window ).on( 'load', function( ) {
        animationClassAdd( );
        } );
          $( window ).on( 'resize', function( ) {
        animationClassAdd( );
        } );
          }
  
  
      $( window ).on( 'load', function( ) {
      // Beautypress custom function init
      beautypress_function( );
        // menu fixed
        muneFixed( );
        // menu fixed anim class function 
        menuFixedAnimClass( );
  
        /*=============================================================
         prelaoder
         =========================================================================*/
  
        $('#preloader-cancel-btn').on('click', function (e) {
          e.preventDefault();
          $("#preloader").addClass('loaded');
        })
        setTimeout(function() {
          $("#preloader").addClass('loaded')
        }, 500);
        /*=============================================================
         beautypress portfolio grid
         =========================================================================*/
        if ( $( '.kolkatacity-photo-gallery-grid' ).length > 0 ) {
      var $container = $( '.kolkatacity-photo-gallery-grid' ),
        colWidth = function( ) {
        var w = $container.width( ),
          columnNum = 1,
          columnWidth = 0;
          if ( w > 1200 ) {
        columnNum = 3;
        } else if ( w > 900 ) {
        columnNum = 3;
        } else if ( w > 600 ) {
        columnNum = 3;
        } else if ( w > 450 ) {
        columnNum = 2;
        } else if ( w > 385 ) {
        columnNum = 1;
        }
        columnWidth = Math.floor( w / columnNum );
          $container.find( '.kolkatacity-photo-gallery-grid-item' ).each( function( ) {
        var $item = $( this ),
          multiplier_w = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-w(\d)/ ),
          multiplier_h = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-h(\d)/ ),
          width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css( {
          width: width
            //height: height
          } );
        } );
          return columnWidth;
        },
        isotope = function( ) {
        $container.isotope( {
        resizable: false,
          itemSelector: '.kolkatacity-photo-gallery-grid-item',
          masonry: {
          columnWidth: colWidth( ),
            gutterWidth: 3
          }
        } );
        };
        isotope( );
        $( window ).on( 'resize', isotope );
        var $optionSets = $( '.kolkatacity-portfolio-nav .option-set' ),
        $optionLinks = $optionSets.find( 'a' );
        $optionLinks.on( 'click', function( ) {
        var $this = $( this );
          var $optionSet = $this.parents( '.option-set' );
          $optionSet.find( '.selected' ).removeClass( 'selected' );
          $this.addClass( 'selected' );
          // make option object dynamically, i.e. { filter: '.my-filter-class' }
          var options = {},
          key = $optionSet.attr( 'data-option-key' ),
          value = $this.attr( 'data-option-value' );
          // parse 'false' as false boolean
          value = value === 'false' ? false : value;
          options[key] = value;
          if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
        } else {
        // creativewise, apply new options
        $container.isotope( options );
        }
        return false;
        } );
        }
  
      /*=============================================================
       another beautypress portfolio grid 4 items
       =========================================================================*/
      if ( $( '.beautypress-photo-gallery-grid-v3' ).length > 0 ) {
      var $container = $( '.beautypress-photo-gallery-grid-v3' ),
        colWidth = function( ) {
        var w = $container.width( ),
          columnNum = 1,
          columnWidth = 0;
          if ( w > 1200 ) {
        columnNum = 4;
        } else if ( w > 900 ) {
        columnNum = 4;
        } else if ( w > 600 ) {
        columnNum = 2;
        } else if ( w > 450 ) {
        columnNum = 2;
        } else if ( w > 385 ) {
        columnNum = 1;
        }
        columnWidth = Math.floor( w / columnNum );
          $container.find( '.beautypress-photo-gallery-grid-item-v3' ).each( function( ) {
        var $item = $( this ),
          multiplier_w = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-v3-w(\d)/ ),
          multiplier_h = $item.attr( 'class' ).match( /beautypress-photo-gallery-grid-item-v3-h(\d)/ ),
          width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css( {
          width: width
            //height: height
          } );
        } );
          return columnWidth;
        },
        isotope = function( ) {
        $container.isotope( {
        resizable: false,
          itemSelector: '.beautypress-photo-gallery-grid-item-v3',
          masonry: {
          columnWidth: colWidth( ),
            gutterWidth: 3
          }
        } );
        };
        isotope( );
        $( window ).on( 'resize', isotope );
        var $optionSets = $( '.kolkatacity-portfolio-nav .option-set' ),
        $optionLinks = $optionSets.find( 'a' );
        $optionLinks.on( 'click', function( ) {
        var $this = $( this );
          var $optionSet = $this.parents( '.option-set' );
          $optionSet.find( '.selected' ).removeClass( 'selected' );
          $this.addClass( 'selected' );
          // make option object dynamically, i.e. { filter: '.my-filter-class' }
          var options = {},
          key = $optionSet.attr( 'data-option-key' ),
          value = $this.attr( 'data-option-value' );
          // parse 'false' as false boolean
          value = value === 'false' ? false : value;
          options[key] = value;
          if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
        // changes in layout modes need extra logic
        changeLayoutMode( $this, options )
        } else {
        // creativewise, apply new options
        $container.isotope( options );
        }
        return false;
        } );
        }
  
      /*=============================================================
       beautypress popular service grid
       =========================================================================*/
      if ( $( '.beautypress-popular-service-grid' ).length > 0 ) {
      var $container = $( '.beautypress-popular-service-grid' ),
        colWidth = function( ) {
        var w = $container.width( ),
          columnNum = 1,
          columnWidth = 0;
          if ( w > 1200 ) {
        columnNum = 3;
        } else if ( w > 900 ) {
        columnNum = 3;
        } else if ( w > 600 ) {
        columnNum = 3;
        } else if ( w > 450 ) {
        columnNum = 2;
        } else if ( w > 385 ) {
        columnNum = 1;
        }
        columnWidth = Math.floor( w / columnNum );
          $container.find( '.beautypress-popular-service-grid-item' ).each( function( ) {
        var $item = $( this ),
          multiplier_w = $item.attr( 'class' ).match( /beautypress-popular-service-grid-item-w(\d)/ ),
          multiplier_h = $item.attr( 'class' ).match( /beautypress-popular-service-grid-item-h(\d)/ ),
          width = multiplier_w ? columnWidth * multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth * multiplier_h[1] * 0.4 - 12 : columnWidth * 0.5;
          $item.css( {
          width: width
            //height: height
          } );
        } );
          return columnWidth;
        },
        isotope = function( ) {
        $container.isotope( {
        resizable: false,
          itemSelector: '.beautypress-popular-service-grid-item',
          masonry: {
          columnWidth: colWidth( ),
            gutterWidth: 3
          }
        } );
        };
        isotope( );
        $( window ).on( 'resize', isotope );
        }
  
      /*=============================================================
       image comperasion
       =========================================================================*/
  
      if ( $( '.kolkatacity-before-after' ).length > 0 ) {
      $( '.kolkatacity-before-after' ).twentytwenty( {
      no_overlay: true,
        move_slider_on_hover: false,
        move_with_handle_only: true,
        click_to_move: false,
      } );
        }
  
      } ); // end on.load event
  
        $( document ).ready( function( ) {
  
  // Beautypress custom function init
      beautypress_function( );
  // menu fixed anim class function 
        menuFixedAnimClass( );
        /*=============================================================
         Date Picker
         =========================================================================*/
        if ( $( '.datepicker' ).length > 0 ) {
      $( '.datepicker' ).datepicker( ).on( 'changeDate', function( ) {
      $( this ).datepicker( 'hide' );
      } );
        }
  
      /*=============================================================
       welcome section slider
       =========================================================================*/
  
      if ( $( '.kolkatacity-welcome-slider' ).length > 0 ) {
      var owl1 = $( ".kolkatacity-welcome-slider" );
        owl1.owlCarousel( {
        items: 1,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          dots: false,
          nav: true,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          navText:
        [ '<i class="xsicon icon-left-arrow"></i>',
          '<i class="xsicon icon-right-arrow"></i>'],
          responsive : {
            // breakpoint from 0 up
            0 : {nav:false,},
            // breakpoint from 480 up
            480 : {nav:false,},
            // breakpoint from 768 up
            768 : {nav:true,}
          }
        });
        }
  
      /*=============================================================
       welcome section slider version 2
       =========================================================================*/
  
      if ( $( '.beautypress-welcome-slider-v2' ).length > 0 ) {
      var owl2 = $( ".beautypress-welcome-slider-v2" );
        owl2.owlCarousel( {
        items: 1,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          dots: false,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive : {
            // breakpoint from 0 up
            0 : {nav:false,},
            // breakpoint from 480 up
            480 : {nav:false,},
            // breakpoint from 768 up
            768 : {nav:true,}
          }
        } );
        $( "#prev" ).on( 'click', function( ) {
      owl2.trigger( 'prev.owl.carousel' );
      } );
        $( "#next" ).on( 'click', function( ) {
      owl2.trigger( 'next.owl.carousel' );
      } );
        }
  
      /*=============================================================
       testimonial slider
       =========================================================================*/
  
      if ( $( '.beautypress-testimonial-slider' ).length > 0 ) {
      var owl3 = $( ".beautypress-testimonial-slider" );
        owl3.owlCarousel( {
        items: 1,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
        } );
        }
  
      /*=============================================================
       simple image slider
       =========================================================================*/
  
      if ( $( '.beautypress-image-slider' ).length > 0 ) {
      var owl4 = $( ".beautypress-image-slider" );
        owl4.owlCarousel( {
        items: 1,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          dots: true,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
        } );
        }
  
      /*=============================================================
       simple image slider
       =========================================================================*/
  
      if ( $( '.beautypress-client-slider' ).length > 0 ) {
      var owl5 = $( ".beautypress-client-slider" );
        owl5.owlCarousel( {
        items: 6,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          dots: false,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive : {
          // breakpoint from 0 up
          0 : {
          items: 1,
          },
            // breakpoint from 480 up
            480 : {
            items: 2,
            },
            // breakpoint from 768 up
            768 : {
            items: 6,
            }
          }
        } );
        $( "#prev1" ).on( 'click', function( ) {
      owl5.trigger( 'prev.owl.carousel' );
      } );
        $( "#next1" ).on( 'click', function( ) {
      owl5.trigger( 'next.owl.carousel' );
      } );
        }
  
      /*=============================================================
       team slider
       =========================================================================*/
  
      if ( $( '.beautypress-team-slider' ).length > 0 ) {
      var owl6 = $( ".beautypress-team-slider" );
        owl6.owlCarousel( {
        items: 1,
          loop: true,
          mouseDrag: true,
          touchDrag: true,
          dots: false,
          nav: false,
          autoplay: true,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
        } );
        }
  
      /*=============================================================
       sync slider
       =========================================================================*/
  
      if ( ( $( '.beautypress-sync-slider-preview' ).length > 0 ) && ( $( '.beautypress-sync-slider-thumb' ).length > 0 ) ) {
      var sync1 = $( ".beautypress-sync-slider-preview" ),
        sync2 = $( ".beautypress-sync-slider-thumb" ),
        slidesPerPage = 3,
        syncedSecondary = true;
        sync1.owlCarousel( {
        items: 1,
          slideSpeed: 2000,
          nav: true,
          autoplay: true,
          dots: true,
          loop: true,
          responsiveRefreshRate: 200,
          navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        } ).on( 'changed.owl.carousel', syncPosition );
        sync2
        .on( 'initialized.owl.carousel', function( ) {
        sync2.find( ".owl-item" ).eq( 0 ).addClass( "current" );
        } )
        .owlCarousel( {
        items: slidesPerPage,
          dots: true,
          nav: false,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 100
        } ).on( 'changed.owl.carousel', syncPosition2 );
        function syncPosition( el ) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
  
        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
          var current = Math.round( el.item.index - ( el.item.count / 2 ) - .5 );
          if ( current < 0 ) {
        current = count;
        }
        if ( current > count )  {
        current = 0;
        }
  
        //end block
  
        sync2
          .find( ".owl-item" )
          .removeClass( "current" )
          .eq( current )
          .addClass( "current" );
          var onscreen = sync2.find( '.owl-item.active' ).length - 1;
          var start = sync2.find( '.owl-item.active' ).first( ).index( );
          var end = sync2.find( '.owl-item.active' ).last( ).index( );
          if ( current > end ) {
        sync2.data( 'owl.carousel' ).to( current, 100, true );
        }
        if ( current < start ) {
        sync2.data( 'owl.carousel' ).to( current - onscreen, 100, true );
        }
        }
  
      function syncPosition2( el ) {
      if ( syncedSecondary ) {
      var number = el.item.index;
        sync1.data( 'owl.carousel' ).to( number, 100, true );
      }
      }
  
      sync2.on( "click", ".owl-item", function( e ) {
      e.preventDefault( );
        var number = $( this ).index( );
        sync1.data( 'owl.carousel' ).to( number, 300, true );
      } );
        }
  
  
      /*=============================================================
       video pop up
       =========================================================================*/
      if ( $( '.beautypress-video-popup' ).length > 0 ) {
      $( '.beautypress-video-popup' ).magnificPopup( {
      disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
      } );
        }
      /*=============================================================
       image pop up
       =========================================================================*/
  
      if ( $( '.kolkatacity-image-popup' ).length > 0 ) {
      $( '.kolkatacity-image-popup' ).magnificPopup( {
      type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
        beforeOpen: function ( ) {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace( 'mfp-figure', 'mfp-figure mfp-with-anim' );
          this.st.mainClass = 'mfp-zoom-in';
        }
        },
        closeOnContentClick: true,
        midClick: true,
        gallery: {
        enabled: true,
        },
      } );
        }
  
      /*=============================================================
       Ajaxchimp init
       =========================================================================*/
      if ( $( '.mc-form' ).length > 0 ) {
      $( '.mc-form' ).ajaxChimp( {
      url: 'https://facebook.us8.list-manage.com/subscribe/post?u=85f515a08b87483d03fee7755&amp;id=66389dc38b'
      } );
        }
  
      /*=============================================================
       Booking form init
       =========================================================================*/
      if ( $( '#beautypress-booking-form' ).length > 0 ) {
      $( "#beautypress-booking-form" ).on( 'submit', function( ) {
      $( '#beautypress-form-msg' ).addClass( 'hidden' );
        $( '#beautypress-form-msg' ).removeClass( 'alert-success' );
        $( '#beautypress-form-msg' ).removeClass( 'alert-danger' );
        $.ajax( {
        type: "POST",
          url: "php/index.php",
          data: $( "#beautypress-booking-form" ).serialize( ),
          dataType: "json",
          success: function( data ) {
  
          if ( 'success' == data.result ) {
          $( '#beautypress-form-msg' ).css( 'visibility', 'visible' ).hide( ).fadeIn( ).removeClass( 'hidden' ).addClass( 'alert-success' );
            $( '#beautypress-form-msg' ).html( data.msg[0] );
            $( '#beautypress-booking-form' )[0].reset( );
          }
  
          if ( 'error' == data.result ) {
          $( '#beautypress-form-msg' ).css( 'visibility', 'visible' ).hide( ).fadeIn( ).removeClass( 'hidden' ).addClass( 'alert-danger' );
            $( '#beautypress-form-msg' ).html( data.msg[0] );
          }
  
          }
        } );
        return false;
      } );
        }
  
      /*=============================================================
       Booking form select field focus
       =========================================================================*/
  
      $( '#appointment-date ,#appointment-service, #appointment-time' ).on( 'focus', function( ) {
      $( this ).parent( ).addClass( 'actives' );
        } );
        $( '#appointment-date, #appointment-service, #appointment-time' ).on( 'blur', function( ) {
      $( this ).parent( ).removeClass( 'actives' );
        } );
        /*=============================================================
         numeric number counter init
         =========================================================================*/
  
        var number_animate = $( ".number-animate" );
        if ( number_animate.length > 0 ) {
      number_animate.appear( );
        $( document.body ).on( 'appear', '.numeric-count', function( ) {
      number_animate.each( function( ) {
      $( this ).animateNumbers( $( this ).attr( "data-value" ), true, parseInt( $( this ).attr( "data-animation-duration" ), 10 ) );
      } );
      } );
        } // End exists
  
      /*=============================================================
       counter up appear init
       =========================================================================*/
  
      var appear = $( '.appear' );
        appear.appear( );
        $.fn.animateNumbers = function( stop, commas, duration, ease ) {
        return this.each( function( ) {
        var $this = $( this );
          var start = parseInt( $this.text( ).replace( /,/g, "" ), 10 );
          commas = ( commas === undefined ) ? true : commas;
          $( {
          value: start
          } ).animate( {
        value: stop
        }, {
        duration: duration == undefined ? 500 : duration,
          easing: ease == undefined ? "swing" : ease,
          step: function( ) {
          $this.text( Math.floor( this.value ) );
            if ( commas ) {
          $this.text( $this.text( ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1," ) );
          }
          },
          complete: function( ) {
          if ( parseInt( $this.text( ), 10 ) !== stop ) {
          $this.text( stop );
            if ( commas ) {
          $this.text( $this.text( ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, "$1," ) );
          }
          }
          }
        } );
        } );
          };
        /*=============================================================
         back to top
         =========================================================================*/
        if ( $( '.back-to-top' ).length > 0 ) {
      $( '.back-to-top' ).on( 'click', function( event ) {
      event.preventDefault( );
        $( 'body, html' ).animate( {
      scrollTop: 0
      }, 1000 );
      } );
        }
  
      /*=============================================================
       button with mouse pointer
       =========================================================================*/
      if ( $( '.xs-btn' ).length > 0 ) {
      $( '.xs-btn' ).on( 'mouseenter', function ( e ) {
  
      var parentOffset = $( this ).offset( ),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        if ( $( this ).find( 'span' ) ) {
      $( '.xs-btn span' ).css( {
      top: relY,
        left: relX,
      } );
      }
      } );
        $( '.xs-btn' ).on( 'mouseout', function ( e ) {
  
      var parentOffset = $( this ).offset( ),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
        if ( $( this ).find( 'span' ) ) {
      $( '.xs-btn span' ).css( {
      top: relY,
        left: relX,
      } );
      }
      } );
        }
  
      /*=============================================================
       button pulse effect
       =========================================================================*/
      $( '.pulse-btn' ).hover( function( e ) {
      e.preventDefault( );
        var btns = $( this ).addClass( 'active' );
        setTimeout( function( ) {
        btns.removeClass( 'active' );
        }, 500 );
        } );
        /*=============================================================
         contact form init
         =========================================================================*/
  
        if ( $( '#beautypress-contact' ).length > 0 ) {
      $( '#beautypress-contact' ).on( 'submit', function( event ) {
  
      event.preventDefault( );
        var c_name = $( '#c_name' ),
        c_email = $( '#c_email' ),
        c_subject = $( '#c_subject' ),
        c_massage = $( '#c_massage' ),
        c_submit = $( '#c_submit' ),
        c_error = false;
        $( '.c_error_massage , .beautypress_success_message , .beautypress_loader' ).hide( ).fadeOut( 400 );
        if ( c_name.val( ) === '' ) {
      c_name.after( '<p class="c_error_massage">' + c_name.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
        c_error = true;
        c_name.focus( );
      }
      if ( c_email.val( ) === '' ) {
      c_email.after( '<p class="c_error_massage">' + c_email.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
        c_error = true;
        c_email.focus( );
      } else if ( !email_pattern( c_email.val( ).toLowerCase( ) ) ) {
      c_email.after( '<p class="c_error_massage">' + c_email.attr( 'placeholder' ) + ' filed is not vaild </p>' ).show( ).fadeIn( 500 );
        c_error = true;
        c_email.focus( );
      }
      if ( c_subject.val( ) === '' ) {
      c_subject.after( '<p class="c_error_massage">' + c_subject.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
        c_error = true;
        c_subject.focus( );
      }
      if ( c_massage.val( ) === '' ) {
      c_massage.after( '<p class="c_error_massage">' + c_massage.attr( 'placeholder' ) + ' filed is not empty </p>' ).show( ).fadeIn( 500 );
        c_error = true;
        c_massage.focus( );
      }
  
      if ( c_error === false ) {
      c_submit.before( ).hide( ).fadeIn( );
        $.ajax( {
        type: "POST",
          url: "php/contact-form.php",
          data: {
          'c_name' : c_name.val( ),
            'c_email' : c_email.val( ),
            'c_subject' : c_subject.val( ),
            'c_massage' : c_massage.val( )
          },
          success: function( result ){
          c_submit.after( '<span class="beautypress_success_message">' + result + '</span>' ).hide( ).fadeIn( );
            $( ".beautypress_loader" ).fadeOut( "normal", function( ) {
          $( this ).remove( );
          } );
            $( '#beautypress-contact' )[0].reset( );
          }
        } );
      }
      } );
        }
  
      /*=============================================================
       instagram feeds
       =========================================================================*/
  
      if ( $( '.beautypress-demoFeed' ).length > 0 ) {
      $.fn.spectragram.accessData = {
      accessToken: '1764162550.ba4c844.679392a432894982bf6a31ec20d8acb0',
        clientID: '289a98508b934dd49a68144b79209813'
      };
        $( '.beautypress-demoFeed' ).spectragram( 'getUserFeed', {
      query: 'natgeo',
        max: 9,
        size: 'small',
      } );
        }
  
      /*=============================================================
       beautypress accordion add class
       =========================================================================*/
  
      if ( $( '.beautypress-accordion .panel-heading' ).length > 0 ) {
      $( '.beautypress-accordion .panel-heading' ).on( 'click', function( event ) {
      event.preventDefault( );
        $( this ).parent( ).addClass( 'active' ).siblings( ).removeClass( 'active' );
      } );
        }
  
      /*=============================================================
       beautypress hover add class
       =========================================================================*/
  
      if ( $( '.beautypress-single-team-v3' ).length > 0 ) {
      $( '.beautypress-single-team-v3' ).hover( function( ) {
      if ( $( '.beautypress-single-team-v3' ).hasClass( 'hover' ) ) {
      $( this ).removeClass( 'hover' );
      } else {
      $( '.beautypress-team-col-v3' ).children( ).removeClass( 'hover' );
        $( this ).addClass( 'hover' );
      }
      } );
        }
  
  
      /*=============================================================
       mouse over and add class remove class
       =========================================================================*/
  
      if ( $( '.beautypress-single-new-pricing.beautypress-pricing-footer' ).length > 0 ) {
      $( '.beautypress-single-new-pricing.beautypress-pricing-footer' ).on( 'mouseover', function( ){
      $( this ).parent( ).addClass( 'active' );
      } ).on( 'mouseout', function( ){
      $( this ).parent( ).removeClass( 'active' );
      } );
        }
  
      /*=============================================================
       flicker gallery
       =========================================================================*/
  
      if ( $( '.beautypress-flickr' ).length > 0 ) {
      $( '.beautypress-flickr' ).jflickrfeed( {
      limit: 9,
        qstrings: {
        id: '95098787@N06'
        },
        itemTemplate: '<li>' + '<a rel="colorbox" href="{{image_b}}" title="{{title}}">' + '<img src="{{image_s}}" alt="{{title}}" />' + '</a>' + '</li>'
      } );
        }
  
  
      /*=============================================================
       mega menu
       =========================================================================*/
  
      if ( $( '.kolkatacity-mega-menu' ).length > 0 ) {
      $( '.kolkatacity-mega-menu' ).xs_nav( {
      mobileBreakpoint: 992,
      } );
        }
      if ( $( '.xs_nav_2' ).length > 0 ) {
      $( '.xs_nav_2' ).xs_nav( {
      mobileBreakpoint: 992,
      } );
        }
      if ( $( '.xs-navigation-middle-menu' ).length > 0 ) {
      $( '.xs-navigation-middle-menu' ).xs_nav( {
      mobileBreakpoint: 992,
      } );
        }
  
      /*=============================================================
       hover 3d init for tilt
       =========================================================================*/
  
      if ( $( '.kolkatacity-3d-project-card' ).length > 0 ) {
      $( '.kolkatacity-3d-project-card' ).tilt( {
      maxTilt:20,
        perspective: 700,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale:1,
        speed: 500,
        transition: true,
      } );
        }
  
      if ( $( '.kolkatacity-single-photo-gallery .kolkatacity-3d-project-card' ).length > 0 ) {
      $( '.kolkatacity-single-photo-gallery .kolkatacity-3d-project-card' ).tilt( {
      maxTilt:25,
        perspective: 700,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale:1,
        speed: 400,
        transition: true,
      } );
        }
  
      /*=============================================================
       ScrollMagic
       =========================================================================*/
  
      if ( $( '.beautypress-scoller-animation' ).length > 0 ) {
      var controller = new ScrollMagic.Controller( );
        new ScrollMagic.Scene( {triggerElement: ".beautypress-scoller-animation"} )
        .setVelocity( ".scoller-image-1 img", {opacity: 1, bottom: "0"}, 800 )
        .triggerHook( "onEnter" )
        .addTo( controller );
        new ScrollMagic.Scene( {triggerElement: ".beautypress-scoller-animation"} )
        .setVelocity( ".scoller-image-2 img", {opacity: 1, top: "270"}, 1000 )
        .triggerHook( 0.7 )
        .addTo( controller );
        }
  
      /*=============================================================
       parallax bg
       =========================================================================*/
  
     
  
      if ( $( '.parallax-bg' ).length > 0 ) {
      $( '.parallax-bg' ).parallax( {
      mirrorContainer: 'body',
      } );
        }
  
  
  
      /*=============================================================
       social tigger icon
       =========================================================================*/
  
      $( '.tigger-icon' ).on( 'click', function( event ) {
      event.preventDefault( );
        /* Act on the event */
  
        var this_item = $( '.beautypress-social-tigger' );
        if ( this_item.hasClass( 'active' ) ) {
      this_item.removeClass( 'active' );
      } else {
      this_item.addClass( 'active' );
      }
  
      } );
        /*=============================================================
         input number increase
         =========================================================================*/
  
        var thiss = $( '.beautypress_input_number' );
        thiss.append( '<span class="sub"><img src="img/minus-icon.png" alt="" /></span>' );
        thiss.append( '<span class="add"><img src="img/plus-icon.png" alt="" /></span>' );
        $( '.beautypress_input_number' ).each( function( ) {
  
      var spinner = $( this ),
        input = spinner.find( 'input[type="number"]' ),
        add = spinner.find( '.add' ),
        sub = spinner.find( '.sub' );
        input.parent( ).on( 'click', '.sub', function( event ) {
      event.preventDefault( );
        /* Act on the event */
        if ( input.val( ) > parseInt( input.attr( 'min' ) ) )
        input.val( function( i, oldval ) { return --oldval; } );
      } );
        input.parent( ).on( 'click', '.add', function ( ) {
      event.preventDefault( );
        if ( input.val( ) < parseInt( input.attr( 'max' ) ) )
        input.val( function( i, oldval ) { return ++oldval; } );
      } );
        } );
        /*=============================================================
         theme switcher init
         =========================================================================*/
  
        + function( $ ) {
        themeSwitcher.run( {
        windowPos: 'left',
          layoutColors: {
          title: 'Colors',
            name: ['Default', 'Green', 'Purple', 'Blue', 'Cian', 'Orange'],
            code: ['#ffffff', '', '', '', '', ''],
            show: true
          },
          layoutBoxedWide: {
          title: 'Layout',
            show: false
          },
          layoutBackgrounds: {
          title: '',
            show: false,
          },
          layoutFonts: {
          title: 'Fonts',
            name: ['Bitter', 'PT Sans', 'Six Caps', 'Yanone Kaffeesatz', 'Syncopate'],
            code: ['bitter', 'ptsans', 'sixcaps', 'yanonekaffeesatz', 'syncopate'],
            show: false,
          },
        } );
          }( jQuery );
  
  
      if ( $( '.layout-colors li a' ).length > 0 ) {
  
      $( document ).on( 'click', '.layout-colors li a[data-name="default"]', function( event ) {
      event.preventDefault( );
        /* Act on the event */
        $( 'html' ).removeAttr( 'style' );
      } );
        $( document ).on( 'click', '.layout-colors li a[data-name="green"]', function( event ) {
      event.preventDefault( );
        /* Act on the event */
  
        var colors = ['#00ADCB', '#2C3E50'],
        colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
        document.documentElement.style.setProperty( colorVar[0], colors[0] );
        document.documentElement.style.setProperty( colorVar[1], colors[0] );
        document.documentElement.style.setProperty( colorVar[2], colors[1] );
        document.documentElement.style.setProperty( colorVar[3], colors[1] );
        document.documentElement.style.setProperty( colorVar[4], colors[1] );
      } );
        $( document ).on( 'click', '.layout-colors li a[data-name="purple"]', function( event ) {
      event.preventDefault( );
        /* Act on the event */
  
        var colors = ['#FF956B', '#333333'],
        colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
        document.documentElement.style.setProperty( colorVar[0], colors[0] );
        document.documentElement.style.setProperty( colorVar[1], colors[0] );
        document.documentElement.style.setProperty( colorVar[2], colors[1] );
        document.documentElement.style.setProperty( colorVar[3], colors[1] );
        document.documentElement.style.setProperty( colorVar[4], colors[1] );
      } );
        $( document ).on( 'click', '.layout-colors li a[data-name="blue"]', function( event ) {
      event.preventDefault( );
        /* Act on the event */
  
        var colors = ['#00B4EF', '#2C3E50'],
        colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
        document.documentElement.style.setProperty( colorVar[0], colors[0] );
        document.documentElement.style.setProperty( colorVar[1], colors[0] );
        document.documentElement.style.setProperty( colorVar[2], colors[1] );
        document.documentElement.style.setProperty( colorVar[3], colors[1] );
        document.documentElement.style.setProperty( colorVar[4], colors[1] );
      } );
        $( document ).on( 'click', '.layout-colors li a[data-name="cian"]', function( event ) {
      event.preventDefault( );
        /* Act on the event */
  
        var colors = ['#6A1B9A', '#222222'],
        colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
        document.documentElement.style.setProperty( colorVar[0], colors[0] );
        document.documentElement.style.setProperty( colorVar[1], colors[0] );
        document.documentElement.style.setProperty( colorVar[2], colors[1] );
        document.documentElement.style.setProperty( colorVar[3], colors[1] );
        document.documentElement.style.setProperty( colorVar[4], colors[1] );
      } );
        $( document ).on( 'click', '.layout-colors li a[data-name="orange"]', function( event ) {
      event.preventDefault( );
        /* Act on the event */
  
        var colors = ['#E3BDA8', '#333333'],
        colorVar = ['--color-purple', '--color-cyan', '--color-pink', '--color-chocolate', '--light-red'];
        document.documentElement.style.setProperty( colorVar[0], colors[0] );
        document.documentElement.style.setProperty( colorVar[1], colors[0] );
        document.documentElement.style.setProperty( colorVar[2], colors[1] );
        document.documentElement.style.setProperty( colorVar[3], colors[1] );
        document.documentElement.style.setProperty( colorVar[4], colors[1] );
      } );
        }
        
        } );
        $( window ).on( 'scroll', function( ) {
  
      /*=============================================================
       meun scroll and add class
       =========================================================================*/
  
      var w_height = $( window ).height( ),
        d_height = $( document ).height( ),
        h_calc = d_height - w_height;
        // console.log(h_calc);
  
        var scrollTop = $( this ).scrollTop( );
        if ( scrollTop >= h_calc ) {
      $( '.beautypress-back-to-top-wraper.show-last-pos' ).addClass( 'active' );
        } else {
      $( '.beautypress-back-to-top-wraper.show-last-pos' ).removeClass( 'active' );
        }
  
      } ); // END Scroll Function 
  
        $( window ).on( 'resize', function( ) {
      // Beautypress custom function init
      beautypress_function( );
        } ); // End Resize
  
        /*=============================================================
         snazzy maps 1
         =========================================================================*/
  
        if ( $( '#beautypress_maps' ).length > 0 ) {
      // When the window has finished loading create our google map below
      google.maps.event.addDomListener( window, 'load', init );
        function init( ) {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: true,
          scaleControl: false,
          draggable: true,
          disableDefaultUI: true,
          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng( 40.6700, - 73.9400 ), // New York
  
          // How you would like to style the map. 
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"administrative", "elementType":"all", "stylers":[{"saturation":"-100"}]}, {"featureType":"administrative.province", "elementType":"all", "stylers":[{"visibility":"off"}]}, {"featureType":"landscape", "elementType":"all", "stylers":[{"saturation": - 100}, {"lightness":65}, {"visibility":"on"}]}, {"featureType":"poi", "elementType":"all", "stylers":[{"saturation": - 100}, {"lightness":"50"}, {"visibility":"simplified"}]}, {"featureType":"road", "elementType":"all", "stylers":[{"saturation":"-100"}]}, {"featureType":"road.highway", "elementType":"all", "stylers":[{"visibility":"simplified"}]}, {"featureType":"road.arterial", "elementType":"all", "stylers":[{"lightness":"30"}]}, {"featureType":"road.local", "elementType":"all", "stylers":[{"lightness":"40"}]}, {"featureType":"transit", "elementType":"all", "stylers":[{"saturation": - 100}, {"visibility":"simplified"}]}, {"featureType":"water", "elementType":"geometry", "stylers":[{"hue":"#ffff00"}, {"lightness": - 25}, {"saturation": - 97}]}, {"featureType":"water", "elementType":"labels", "stylers":[{"lightness": - 25}, {"saturation": - 100}]}]
        };
          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById( 'beautypress_maps' );
          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map( mapElement, mapOptions );
          // Let's also add a marker while we're at it
          var marker = new google.maps.Marker( {
          position: new google.maps.LatLng( 40.6700, - 73.9400 ),
            map: map,
            title: 'Beautypress'
          } );
        }
      }
  
      /*=============================================================
       snazzy maps 2
       =========================================================================*/
  
      if ( $( "#beautypress_maps_2" ).length > 0 ) {
      // When the window has finished loading create our google map below
      google.maps.event.addDomListener( window, 'load', init );
        function init( ) {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
          scrollwheel: false,
          navigationControl: false,
          mapTypeControl: true,
          scaleControl: false,
          draggable: true,
          disableDefaultUI: true,
          // The latitude and longitude to center the map (always required)
          center: new google.maps.LatLng( 40.6700, - 73.9400 ), // New York
  
          // How you would like to style the map. 
          // This is where you would paste any style found on Snazzy Maps.
          styles: [{"featureType":"all", "elementType":"all", "stylers":[{"visibility":"on"}]}, {"featureType":"all", "elementType":"labels", "stylers":[{"visibility":"off"}, {"saturation":"-100"}]}, {"featureType":"all", "elementType":"labels.text.fill", "stylers":[{"saturation":36}, {"color":"#000000"}, {"lightness":40}, {"visibility":"off"}]}, {"featureType":"all", "elementType":"labels.text.stroke", "stylers":[{"visibility":"off"}, {"color":"#000000"}, {"lightness":16}]}, {"featureType":"all", "elementType":"labels.icon", "stylers":[{"visibility":"off"}]}, {"featureType":"administrative", "elementType":"geometry.fill", "stylers":[{"color":"#000000"}, {"lightness":20}]}, {"featureType":"administrative", "elementType":"geometry.stroke", "stylers":[{"color":"#000000"}, {"lightness":17}, {"weight":1.2}]}, {"featureType":"landscape", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":20}]}, {"featureType":"landscape", "elementType":"geometry.fill", "stylers":[{"color":"#4d6059"}]}, {"featureType":"landscape", "elementType":"geometry.stroke", "stylers":[{"color":"#4d6059"}]}, {"featureType":"landscape.natural", "elementType":"geometry.fill", "stylers":[{"color":"#4d6059"}]}, {"featureType":"poi", "elementType":"geometry", "stylers":[{"lightness":21}]}, {"featureType":"poi", "elementType":"geometry.fill", "stylers":[{"color":"#4d6059"}]}, {"featureType":"poi", "elementType":"geometry.stroke", "stylers":[{"color":"#4d6059"}]}, {"featureType":"road", "elementType":"geometry", "stylers":[{"visibility":"on"}, {"color":"#7f8d89"}]}, {"featureType":"road", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.highway", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}, {"lightness":17}]}, {"featureType":"road.highway", "elementType":"geometry.stroke", "stylers":[{"color":"#7f8d89"}, {"lightness":29}, {"weight":0.2}]}, {"featureType":"road.arterial", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":18}]}, {"featureType":"road.arterial", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.arterial", "elementType":"geometry.stroke", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.local", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":16}]}, {"featureType":"road.local", "elementType":"geometry.fill", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"road.local", "elementType":"geometry.stroke", "stylers":[{"color":"#7f8d89"}]}, {"featureType":"transit", "elementType":"geometry", "stylers":[{"color":"#000000"}, {"lightness":19}]}, {"featureType":"water", "elementType":"all", "stylers":[{"color":"#2b3638"}, {"visibility":"on"}]}, {"featureType":"water", "elementType":"geometry", "stylers":[{"color":"#2b3638"}, {"lightness":17}]}, {"featureType":"water", "elementType":"geometry.fill", "stylers":[{"color":"#24282b"}]}, {"featureType":"water", "elementType":"geometry.stroke", "stylers":[{"color":"#24282b"}]}, {"featureType":"water", "elementType":"labels", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.text", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.text.fill", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.text.stroke", "stylers":[{"visibility":"off"}]}, {"featureType":"water", "elementType":"labels.icon", "stylers":[{"visibility":"off"}]}]
        };
          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById( 'beautypress_maps_2' );
          // Create the Google Map using our element and options defined above
          var map = new google.maps.Map( mapElement, mapOptions );
          // Let's also add a marker while we're at it
          var marker = new google.maps.Marker( {
          position: new google.maps.LatLng( 40.6700, - 73.9400 ),
            map: map,
            title: 'Beautypress!',
            icon: 'img/markar.png',
          } );
          marker.setAnimation( google.maps.Animation.BOUNCE );
          setTimeout( function( ){ marker.setAnimation( null ); }, 750 );
        }
      }
  
      } )( jQuery );