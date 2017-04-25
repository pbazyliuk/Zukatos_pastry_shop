(function() {
    "use strict";

    var module = angular.module("zkPastry");

   
    function controller() {
    	var model = this;
			

		$(".gallery__next-btn").on('click', function() {
			var firstEl = $(".gallery__images img:first-child");
			firstEl.addClass("modal");
			//firstEl.trigger("click");

			$(firstEl).remove().appendTo(".gallery__images");

		});

		$(".gallery__prev-btn").on('click', function() {
			var lastEl = $(".gallery__images img:last-child");
			lastEl.addClass("modal");
			$(lastEl).remove().prependTo(".gallery__images");

		});


		$(".gallery__images").on('click', '.gallery__item', showModal);
		
		 function showModal() {
		  $("#modal").addClass("isShown");
		  var cur = this;
		  /*console.log(cur)*/
		  $(document).off();
		  $( cur ).clone().toggleClass("gallery__item").appendTo( $( ".modal-window__image-wrapper" ) );
		}


		$(".modal-window__close").on("click", function() {
		  $("#modal").toggleClass("isShown");
		  $(".modal-window__image-wrapper").empty();
		  $(document).on('click', '.gallery__item', showModal);
		});

		window.onclick = function(event) {
		  var modal = $("#modal")[0];
		  var modalCalculator = $("#modal-calculator")[0];
		  // console.log(modal)
		    if (event.target == modal) {
		        $("#modal").toggleClass("isShown");
		  		$(".modal-window__image-wrapper").empty();
		  		$(document).on('click', '.gallery__item', showModal);
		    }
		    else if(event.target == modalCalculator) {
		    	$(".modal-window-calculator").toggleClass("isShown");
		    	
		    }
		};


		$("#calculator").on('click', function() {
			$(".modal-window-calculator").addClass("isShown");
			
		})
        
        $(".modal-window-calculator__close").on('click', function() {
			$(".modal-window-calculator").toggleClass("isShown");
			
		})
    }

    module.component("orderInfo", {
        templateUrl: "/js/components/order-info/order-info.component.html",
        controllerAs: "model",
        controller: [controller]
    });

} ());