
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

// Set random number & count //

var randomNum = Math.floor(Math.random()*100+1);

var count = 0

// Add guess into guessList // 

$('form').submit(function(e){
		e.preventDefault();
		var guess = $('#userGuess').val();

	if(guess <= 100 && guess >=1){
		incrCount();
		$('#count').text(count);
		$('#userGuess').val('');
		addGuess(guess);
		compareGuess(guess);
	}
	else{
		alert('Only numbers between 1 and 100');
	}

});

// Compare input to random number //

function compareGuess(guess){
	var difference = Math.abs(guess - randomNum);
	if (difference == 0){
		$('#feedback').text('You Won! Click +New Game to play again!');
		$('html').css("background-color","#cc324b");
	}
	else if (difference < 3){
		$('#feedback').text('YOU ARE SO CLOSE!');
	}
	else if (difference < 10){
		$('#feedback').text('Very Hot!');
	}
	else if (difference < 20){
		$('#feedback').text('Hot');
	}
	else if (difference < 40){
		$('#feedback').text('Cold - Come on!');
	}
	else {
		$('#feedback').text('Coldest - Are you even trying?');
	}
}

// New Game Button //

$('.new').on('click', function(){
	count = 0;
	$('#count').text(count);
	$('ul#guessList').children().remove();
	$('#feedback').text('Make your Guess!');
	$('html').css("background-color","#394264")
	newRandom();
});

// Add guess to list //

function addGuess(guess) {
	$('ul#guessList').prepend('<li>' + guess + ' </li>');
}

// Allows increment to be reset when New Game is clicked //

function incrCount(){
	count++
}

// Sets new random number //

function newRandom(){
	randomNum = Math.floor(Math.random()*100+1);
}

