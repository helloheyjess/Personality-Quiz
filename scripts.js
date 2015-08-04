// Spirit Animal Generator

$(function(){
	// Open credits when arrow is clicked in header
	$('header .fa').on('click', function(){
		$('header').toggleClass('down');
		$(this).toggleClass('fa-caret-down, fa-caret-up')
	});

	// Show next question and scroll down

	var scrollDown = function(sectionName){
		$(sectionName).addClass('questionShow');
		$('html,body').animate({
			scrollTop: $(sectionName).offset().top
		}, 1000);
	}

	// Animal score calculation
	var raccoon = 0;
	var sloth = 0;
	var dolphin = 0;
	var dog = 0;
	var bear = 0;
	var rabbit = 0;

	var calculate = function(){
		if (score === 10) {
			raccoon += 1;
		} else if (score === 20) {
			sloth += 1;
		} else if (score === 30) {
			dolphin += 1;
		} else if (score === 40) {
			dog += 1;
		} else if (score === 50) {
			bear += 1;
		} else if (score === 60) {
			rabbit += 1;
		}
	};

	// When Show Quiz button is clicked, show first question and scroll down
	$('.showQuiz').on('click', function(){
		$(this).removeClass('animated');
		scrollDown('.food');
	});

	// When question answer is submitted, show next question, scroll down, and add selected radio button's value to score
	$('.form1').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		scrollDown('.habitat');
				
	});

	$('.form2').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		scrollDown('.school');
	});

	$('.form3').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		scrollDown('.transportation');
	});

	$('.form4').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();
		scrollDown('.hobbies');
	});

	$('.form5').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		calculate();

		if (raccoon > sloth && raccoon > dolphin && raccoon > dog && raccoon > bear && raccoon > rabbit) {
			$('#raccoon, footer').addClass('questionShow');
		} else if (sloth > raccoon && sloth > dolphin && sloth > dog && sloth > bear && sloth > rabbit) {
			$('#sloth, footer').addClass('questionShow');
		} else if (dolphin > raccoon && dolphin > sloth && dolphin > dog && dolphin > bear && dolphin > rabbit) {
			$('#dolphin, footer').addClass('questionShow');
		} else if (dog > raccoon && dog > sloth && dog > dolphin && dog > bear && dog > rabbit) {
			$('#dog, footer').addClass('questionShow');
		} else if (bear > raccoon && bear > sloth && bear > dog && bear > dolphin && bear > rabbit) {
			$('#bear, footer').addClass('questionShow');
		} else if (rabbit > raccoon && rabbit > sloth && rabbit > dolphin && rabbit > dog && rabbit > bear) {
			$('#rabbit, footer').addClass('questionShow');
		} else {
			$('#chameleon, footer').addClass('questionShow');
		}

		$('html,body').animate({
			scrollTop: $(document).height()
		}, 1000);
	});
});
