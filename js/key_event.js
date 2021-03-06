function draw_game_over () {
	ctx.fillStyle = game_over_color;
	ctx.font="70px Arial";
	ctx.textAlign="center"; 
	ctx.fillText("Game Over!", (square_len+gap_len)*grid_size/2-gap_len/2, (square_len+gap_len)*grid_size/2-gap_len/2);
}

function evaluation () {
	var scorepp;
	scorepp = conway_evaluation(live_squares, me_square);
	score += scorepp*scorepp*scorepp;
	if (live_squares[me_square[0]][me_square[1]] == 0) {
		game_over = true;
		me_square = undefined;
	}
	draw_squares(live_squares, me_square);
	if (game_over == true) draw_game_over();
}

function key_event(event) {
	if (game_over == false) {
		if (!event) event = window.event;
		var key = event.keyCode;
		if (event.charCode && key == 0) key = event.charCode;
		//alert("Key pressed " + key);
		if (key != 37 && key != 38 && key != 39 && key != 40) {
			evaluation(); // not left-up-right-down
			document.getElementById('score').value="Score: "+score;
		}
		else move(live_squares, me_square, key);
		//alert("center position " + me_square[0]  + me_square[1]);
		event.preventDefault();
	}
}
