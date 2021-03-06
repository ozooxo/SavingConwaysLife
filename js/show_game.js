function new_game () {
	score = 0;
	game_over = false;

	ctx.clearRect(0, 0, (square_len+gap_len)*grid_size-gap_len, (square_len+gap_len)*grid_size-gap_len);

	live_squares = new Array(grid_size);
	for (var i = 0; i < grid_size; i++) live_squares[i] = new Array(grid_size);

	me_square = [(grid_size-1)/2, (grid_size-1)/2];

	random_initialization(live_squares, me_square);
	draw_squares(live_squares, me_square);
}

var game_over;
var alive;
var live_squares;
var me_square;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

new_game();
//game_over = true;

//setTimeout(evaluation, 3000);

