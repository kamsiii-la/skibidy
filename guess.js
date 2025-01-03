const num_generator = document.getElementById("num_random");
const btn = document.getElementById("rollBtn_Id");
const input_guess = document.getElementById("guess_num")



let random_num = Math.floor(Math.random() * 100) + 1;


function containGuess(){
	const guess = Number(input_guess.value);

	if(isNaN(guess) || input_guess.value.trim() === ""){
		num_generator.textContent = `Enter a valid number`;
		input_guess.focus();
		input_guess.value= "";
		return;
	}
	

	if(guess === random_num){
		num_generator.textContent = `Correct!`;
	}
	else if(guess < random_num){
		num_generator.textContent = `Too Low Biatch!`;
	}
	else if(guess > random_num){
		num_generator.textContent = `Too High Biatch!`;
	}

		input_guess.focus();
		input_guess.value= "";
}


input_guess.addEventListener("keydown",function(event){
	if(event.key === "Enter"){
		containGuess();
	}
})

btn.onclick = function(){
	containGuess();
}

