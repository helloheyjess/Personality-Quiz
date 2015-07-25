// Spirit Animal Generator

$(function(){

	raccoon = 0;
	sloth = 0;
	dolphin = 0;
	dog = 0;

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

		console.log(score);
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

		console.log(score);
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

		console.log(score);
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

		console.log(score);
	});

	$('.form5').on('submit', function(e){
		e.preventDefault();
		score = parseInt($(this).find('input[type="radio"]:checked').val());
		console.log(score);

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
			console.log('raccoon wins');
			$('#raccoon').addClass('questionShow');
		} else if (sloth > raccoon && sloth > dolphin && sloth > dog) {
			console.log('sloth wins');
			$('#sloth').addClass('questionShow');
		} else if (dolphin > raccoon && dolphin > sloth && dolphin > dog) {
			console.log('dolphin wins');
			$('#dolphin').addClass('questionShow');
		} else if (dog > raccoon && dog > sloth && dog > dolphin) {
			console.log('dog wins');
			$('#dog').addClass('questionShow');
		};

	});

});
