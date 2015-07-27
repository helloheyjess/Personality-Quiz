// Spirit Animal Generator

$(function(){

	var raccoon = 0;
	var sloth = 0;
	var dolphin = 0;
	var dog = 0;

	// When Show Quiz button is clicked, show first question
	$('.showQuiz').on('click', function(){
		$(this).removeClass('animated');
		$('.food').addClass('questionShow');
	});

	$('.question img').on('click', function(){
		$(this).addClass('selected');
	})

	// When question answer is submitted, show next question and add selected radio button's value to score
	$('.form1').on('submit', function(e){
		e.preventDefault();
		$('.habitat').addClass('questionShow');
		score = parseInt($(this).find('input[type="radio"]:checked').val());

		if (score === 10) {
			raccoon += 1;
		} else if (score === 20) {
			sloth += 1;
		} else if (score === 30) {
			dolphin += 1;
		} else if (score === 40) {
			dog += 1;
		}
	});

	$('.form2').on('submit', function(e){
		e.preventDefault();
		$('.school').addClass('questionShow');
		score = parseInt($(this).find('input[type="radio"]:checked').val());

		if (score === 10) {
			raccoon += 1;
		} else if (score === 20) {
			sloth += 1;
		} else if (score === 30) {
			dolphin += 1;
		} else if (score === 40) {
			dog += 1;
		}
	});

	$('.form3').on('submit', function(e){
		e.preventDefault();
		$('.transportation').addClass('questionShow');
		score = parseInt($(this).find('input[type="radio"]:checked').val());

		if (score === 10) {
			raccoon += 1;
		} else if (score === 20) {
			sloth += 1;
		} else if (score === 30) {
			dolphin += 1;
		} else if (score === 40) {
			dog += 1;
		}
	});

	$('.form4').on('submit', function(e){
		e.preventDefault();
		$('.hobbies').addClass('questionShow');
		score = parseInt($(this).find('input[type="radio"]:checked').val());

		if (score === 10) {
			raccoon += 1;
		} else if (score === 20) {
			sloth += 1;
		} else if (score === 30) {
			dolphin += 1;
		} else if (score === 40) {
			dog += 1;
		}
	});

	$('.form5').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());

		if (score === 10) {
			raccoon += 1;
		} else if (score === 20) {
			sloth += 1;
		} else if (score === 30) {
			dolphin += 1;
		} else if (score === 40) {
			dog += 1;
		}

		if (raccoon > sloth && raccoon > dolphin && raccoon > dog) {
			$('#raccoon, footer').addClass('questionShow');
		} else if (sloth > raccoon && sloth > dolphin && sloth > dog) {
			$('#sloth, footer').addClass('questionShow');
		} else if (dolphin > raccoon && dolphin > sloth && dolphin > dog) {
			$('#dolphin, footer').addClass('questionShow');
		} else if (dog > raccoon && dog > sloth && dog > dolphin) {
			$('#dog, footer').addClass('questionShow');
		};

	});

});
