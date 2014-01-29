$(document).ready(function(){

		$("#quotationform").on("submit", function(e) {
			e.preventDefault();
			// var newDiv = $("<div>");
			// $("#parentdiv").append(newDiv);
			$("#newquotetext").text($("#quotationarea").val());
		});

		$("#authorform").on("submit", function(e){
			e.preventDefault();
			$("#newquoteauthor").text($("#authorsubmit").val());
		});

		var generalArray = [];
		var n = 1;
		randomarray = [];

		$("#submission").click(function(){
			var poetry = $("#quotationarea").val();
			var creditauthor = $("#authorsubmit").val();
			// $(".parentdiv").css("display","block");
			var clone = $("#parentdiv").clone(true);
			$("#parentdiv").after(clone);
			clone.removeClass("parentdiv").addClass("clone");
			clone.find(".quotecontainer").text(poetry);
			clone.find(".authorcontainer").text(creditauthor);
			clone.attr('id', 'clone-' + n);
			clone.attr("counter", n++);
          	// clone.data('index', n);
			clone.attr("rating", 0);
			generalArray.push(clone);

			var random = Math.floor(Math.random()*generalArray.length);
			randomarray.push(random);
			console.log(generalArray);
			console.log(generalArray.length);
			console.log(randomarray)


		});

		console.log($("#rating-1").length);


		$(".rating-1").on("click" , function(){
			console.log('working');
			// $(".star-rating-widget").append("<p>one star</p>");
			
			var value = $("input[name=rating]:checked").val();
			$(this).closest(".clone").attr("rating", value);
			console.log($(this).closest(".clone").attr("rating", value));

		    // alert("The user selected; " + value);

		    // // generalArray[0].rating = value;
		    // // generalArray.($(this).data("rating", 1);
		    // console.log(generalArray[3].rating)
		    // console.log(generalArray[0].rating);
		});

		$(".rating-2").on("click" , function(){
			var value = $("input[name=rating]:checked").val();
			$(this).closest(".clone").attr("rating", value);
			console.log($(this).closest(".clone").attr("rating", value));
		});

		$(".rating-3").on("click" , function(){
			var value = $("input[name=rating]:checked").val();
			$(this).closest(".clone").attr("rating", value);
			console.log($(this).closest(".clone").attr("rating", value));
		});

		$(".rating-4").on("click" , function(){
			var value = $("input[name=rating]:checked").val();
			$(this).closest(".clone").attr("rating", value);
			console.log($(this).closest(".clone").attr("rating", value));

		});

		$(".rating-5").on("click" , function(){
			var value = $("input[name=rating]:checked").val();
			$(this).closest(".clone").attr("rating", value);
			console.log($(this).closest(".clone").attr("rating", value));
		});

		// var random = Math.floor(Math.random()*generalArray.length);
		// console.log(random)
		// var randomquote = $(".clone").eq(random);
	//	console.log(randomquote);
	console.log(generalArray.length);
				// var random = Math.floor(Math.random()*generalArray.length);
	//		console.log(randomarray);
			var randomquote = $(".clone:eq(1)");
		$("#randombutton").click(function(){
			$("#randombutton").closest('div').append(randomquote);
		});










		// $("parentdiv").append($("revealquote").clone());


		});