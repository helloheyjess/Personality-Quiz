// Spirit Animal Generator

$(function(){
	// Open credits when arrow is clicked in header
	$('header .fa').on('click', function(){
		$('header').toggleClass('down');
		$(this).toggleClass('fa-caret-down, fa-caret-up')
	});

	// Functions

	var scrollDown = function(sectionName){
		$(sectionName).addClass('questionShow');
		$('html,body').animate({
			scrollTop: $(sectionName).offset().top
		}, 1000);
	}

	// Animal scores
	var raccoon = 0;
	var sloth = 0;
	var dolphin = 0;
	var dog = 0;

	var calculate = function(){
		if (score === 10) {
			raccoon += 1;
		} else if (score === 20) {
			sloth += 1;
		} else if (score === 30) {
			dolphin += 1;
		} else if (score === 40) {
			dog += 1;
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

		if (raccoon > sloth && raccoon > dolphin && raccoon > dog) {
			$('#raccoon, footer').addClass('questionShow');
		} else if (sloth > raccoon && sloth > dolphin && sloth > dog) {
			$('#sloth, footer').addClass('questionShow');
		} else if (dolphin > raccoon && dolphin > sloth && dolphin > dog) {
			$('#dolphin, footer').addClass('questionShow');
		} else if (dog > raccoon && dog > sloth && dog > dolphin) {
			$('#dog, footer').addClass('questionShow');
		};

		$('html,body').animate({
			scrollTop: $(document).height()
		}, 1000);
	});
});
