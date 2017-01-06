/*pegar os valores de x*/
function getX() {
    var x = new Array();
    $('.x').each(function () {
       x.push(Number($(this).val()));
    });
    return x;
}
/*pegar os valores de y*/
function getY() {
    var y = new Array();
    $('.y').each(function () {
        y.push(Number($(this).val()));
    });
    return y;
}
/* Soma os valores */
function soma(valores) {
    var soma = 0;
    for (var i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
    return soma;
}
/* Encontra os quadrados dos valores */
function quadrados(valores) {
    var quad = new Array();
    for (var i = 0; i < valores.length; i++) {
        quad.push(Math.pow(valores[i], 2));
    }
    return quad;
}
function cubicos(valores) {
    var cub = new Array();
    for (var i = 0; i < valores.length; i++) {
        cub.push(Math.pow(valores[i], 3));
    }
    return cub;
}

function quatruplos(valores) {
    var quat = new Array();
    for (var i = 0; i < valores.length; i++) {
        quat.push(Math.pow(valores[i], 4));
    }
    return quat;
}
/* Encontra a multiplicao de x e y */
function multiplicacao(x,y) {
    var mult = new Array();

    for (var i = 0; i < x.length; i++) {
        mult.push(x[i] * y[i]);
    }
    return mult;
}
function quadradosXMultY(x,y) {
    var quadXMultY = new Array();

    for (var i = 0; i < x.length; i++) {
        quadXMultY.push(Math.pow(x[i],2) * y[i]);
    }
    return quadXMultY;
}

function coordenadas(x,y) {
    var coord = new Array();

    for (var i = 0; i < x.length; i++) {
        coord.push([x[i],y[i]]);
    }
    return coord;
}

function logn(valores) {
    var ln = new Array();
    for (var i = 0; i < valores.length; i++) {
        ln.push(Math.log(valores[i]));
    }
    return ln;
}

function plotlineLinear(pri, ult, p) {
    var coord = new Array();

        coord.push([pri,(p[0] * pri) + p[1]]);
        coord.push([ult,(p[0] * ult) + p[1]]);

    return coord;
}
function plotlinePolinomio2(pri, ult, p) {
    var coord = new Array();

    var e = (ult - pri) /100.0;
    if(e < 0){
        e = e * -1;
    }

    for (var x = pri; x <= ult; x = x+e){

        y = (p[0] * Math.pow(x,2)) + (p[1] * x) + p[2];
        coord.push([x,y.toFixed(3)]);
    }

    return coord;
}

function plotlineExponecial(pri, ult, p) {
    var coord = new Array();

    var e = (ult - pri) /100.0;
    if(e < 0){
        e = e * -1;
    }

    for (var x = pri; x <= ult; x = x+e){
        c =  p[0] * x;

        y = Math.pow(p[1],c);

        coord.push([x,y.toFixed(3)]);
    }

    return coord;
}