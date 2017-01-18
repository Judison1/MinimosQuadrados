function minimosQuadrados() {
	     var x = getX();
        var y = getY();
        var i = x.length;

        var somaX = soma(x);
        var somaY = soma(y);
        var somaQuadX = soma(quadrados(x));
        var somaMulXY = soma(multiplicacao(x,y));

        var li = linear(i, somaX,somaY,somaQuadX, somaMulXY);

        var somaCubX  = soma(cubicos(x));
        var somaQuatX = soma(quatruplos(x));
        var somaQuadXMultY = soma(quadradosXMultY(x,y));

        var po2 = polinomial2(i,somaX,somaY,somaQuadX,somaCubX,somaQuatX,somaMulXY,somaQuadXMultY);

        var Yl = logn(y);
        var somaYl = soma(Yl);
        var somaMultXYl = soma(multiplicacao(x, Yl));        
        var exp = exponencial(i,somaX,somaYl,somaQuadX,somaMultXYl);

        var coord = coordenadas(x,y);
        var coordli = plotlineLinear(Math.min.apply(Math,x), Math.max.apply(Math,x), li);
        var coordpo2 = plotlinePolinomio2(Math.min.apply(Math,x), Math.max.apply(Math,x), po2);
        var coordexp = plotlineExponecial(Math.min.apply(Math,x), Math.max.apply(Math,x), exp);

        return [coord,coordli, coordpo2, coordexp];
}