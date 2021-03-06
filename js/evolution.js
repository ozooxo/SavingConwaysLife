function conway_live (a, i, j) {
	var sum = 0;
	if (a[(i-1+grid_size)%grid_size][(j-1+grid_size)%grid_size] == 1) sum += 1;
	if (a[i][(j-1+grid_size)%grid_size] == 1) sum += 1;
	if (a[(i+1)%grid_size][(j-1+grid_size)%grid_size] == 1) sum += 1;
	if (a[(i-1+grid_size)%grid_size][j] == 1) sum += 1;
	if (a[(i+1)%grid_size][j] == 1) sum += 1;
	if (a[(i-1+grid_size)%grid_size][(j+1)%grid_size] == 1) sum += 1;
	if (a[i][(j+1)%grid_size] == 1) sum += 1;
	if (a[(i+1)%grid_size][(j+1)%grid_size] == 1) sum += 1;

	if (a[i][j] == 0) {
		if (sum == 3) return 1;
		else return 0;
	}
	else {
		if (sum == 2 || sum == 3) return 1;
		else return 0;
	}
}

function conway_evaluation (a, me) {
	var copy = new Array(grid_size);
	var scorepp = 0;
	for (var i = 0; i < grid_size; i++) copy[i] = new Array(grid_size);
	for (var i = 0; i < grid_size; ++i) {
		for (var j = 0; j < grid_size; ++j) {
			copy[i][j] = conway_live(a, i, j);
		}
	}
	if (me != undefined) {
		var i = me[0];
		var j = me[1];
		if (copy[(i-1+grid_size)%grid_size][(j-1+grid_size)%grid_size] - a[(i-1+grid_size)%grid_size][(j-1+grid_size)%grid_size] == 1) scorepp += 1;
		if (copy[i][(j-1+grid_size)%grid_size] - a[i][(j-1+grid_size)%grid_size] == 1) scorepp += 1;
		if (copy[(i+1)%grid_size][(j-1+grid_size)%grid_size] - a[(i+1)%grid_size][(j-1+grid_size)%grid_size] == 1) scorepp += 1;
		if (copy[(i-1+grid_size)%grid_size][j] - a[(i-1+grid_size)%grid_size][j] == 1) scorepp += 1;
		if (copy[(i+1)%grid_size][j] - a[(i+1)%grid_size][j] == 1) scorepp += 1;
		if (copy[(i-1+grid_size)%grid_size][(j+1)%grid_size] - a[(i-1+grid_size)%grid_size][(j+1)%grid_size] == 1) scorepp += 1;
		if (copy[i][(j+1)%grid_size] - a[i][(j+1)%grid_size] == 1) scorepp += 1;
		if (copy[(i+1)%grid_size][(j+1)%grid_size] - a[(i+1)%grid_size][(j+1)%grid_size] == 1) scorepp += 1;
	}
	for (var i = 0; i < grid_size; ++i) {
		for (var j = 0; j < grid_size; ++j) {
			a[i][j] = copy[i][j];
		}
	}
	return scorepp;
}
