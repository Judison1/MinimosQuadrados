function linear(qtd,somaX,somaY,somaQuadX, somaMulXY) {
	var line1 = [qtd,somaX,somaY];
	var	line2 = [somaX, somaQuadX, somaMulXY];


	d = line1[0];
	for (var i = 0 ; i < line1.length; i++) {

		line1[i] = line1[i] / d;
	}

	m = line2[0] / line1[0];

	for (var i = 0 ; i < line1.length; i++) {
		line2[i] = line2[i]  - line1[i] * m;
	}

	var a = line2[2] / line2[1];
	var b = line1[2] - (line1[1] * a);
	return [a,b];
}
