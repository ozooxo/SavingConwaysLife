function random_initialization (a, me) {
	for (var i = 0; i < grid_size; ++i) {
		for (var j = 0; j < grid_size; ++j) {
			a[i][j] = Math.floor(Math.random()*2);
		}
	}
	for (var i = 0; i < stable_loop; ++i) conway_evaluation(a, undefined);
	a[me[0]][me[1]] = 1;
}

function draw_squares (a, me) {
	ctx.fillStyle = background_color;
	for (var i = 0; i < grid_size; ++i) {
		for (var j = 0; j < grid_size; ++j) 
			roundRect(ctx, i*gap_len+i*square_len, j*gap_len+j*square_len, square_len, square_len, square_round, true, false);
	}
	ctx.fillStyle = live_color;
	for (var i = 0; i < grid_size; ++i) {
		for (var j = 0; j < grid_size; ++j) {
			if (a[i][j] == 1) {
				roundRect(ctx, i*gap_len+i*square_len, j*gap_len+j*square_len, square_len, square_len, square_round, true, false);
				//ctx.fillRect(i*gap_len+i*square_len, j*gap_len+j*square_len, square_len, square_len); 
			}
		}
	}
	if (me != undefined) {
		ctx.fillStyle = me_color;
		roundRect(ctx, me[0]*gap_len+me[0]*square_len, me[1]*gap_len+me[1]*square_len, square_len, square_len, square_round, true, false);
		//ctx.fillRect(me[0]*gap_len+me[0]*square_len, me[1]*gap_len+me[1]*square_len, square_len, square_len); 
	}
}
