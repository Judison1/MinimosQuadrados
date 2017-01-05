function polinomial2(qtd,somaX,somaY,somaQuadX, somaCubX, somaQuatX, somaMulXY, somaQuadXMultY) {
    var l1 = [qtd,somaX,somaQuadX,somaY];
    var l2 = [somaX,somaQuadX,somaCubX,somaMulXY];
    var l3 = [somaQuadX,somaCubX,somaQuatX,somaQuadXMultY];

    var pivo = l1[0];
    for (var i = 0; i < l1.length; i++) {
        l1[i] = l1[i] / pivo;
    }

    var m21 = l2[0] / l1[0];
    var m31 = l3[0] / l1[0];
    // console.log(m31);
    for (var i = 0; i < l2.length; i++) {
        l2[i] = l2[i] - (l1[i] * m21);
        l3[i] = l3[i] - (l1[i] * m31);
    }

    pivo = l2[1];
    for (var i = 0; i < l2.length; i++) {
        l2[i] = l2[i] / pivo;
    }

    var m32 = l3[1] / l2[1];

    for (var i = 0; i < l3.length; i++) {

        l3[i] = l3[i] - (l2[i] * m32);

    }

    pivo = l3[2];
    for (var i = 0; i < l3.length; i++) {
        l3[i] = l3[i] / pivo;
    }
    // console.log(l3);
    var a = l3[3];
    var b = l2[3] - (l2[2] * a);
    var c = l1[3] - (l1[2] * a + l1[1] * b);


    return [a,b,c];
}