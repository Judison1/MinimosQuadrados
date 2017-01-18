function exponencial(qtd,somaX, somaYl, somaQuadX, somaMulXYl) {
    var line1 = [qtd,somaX,somaYl];
    var	line2 = [somaX, somaQuadX, somaMulXYl];
    
    d = line1[0];
    for (var i = 0 ; i < line1.length; i++) {

        line1[i] = line1[i] / d;
    }

    m = line2[0] / line1[0];

    for (var i = 0 ; i < line1.length; i++) {
        line2[i] = line2[i]  - line1[i] * m;
    }

    var al = line2[2] / line2[1];
    var bl = line1[2] - (line1[1] * al);
 
    var a = al;
    var b = Math.exp(bl);
    console.log(a);
    console.log(b);
    return [a,b];
}
