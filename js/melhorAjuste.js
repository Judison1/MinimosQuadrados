function melhorAjuste(x, y,linear, polinomial2, exponencial) {

    var valLinear = new Array();
    var valPolinomial2 = new Array();
    var valExponencial = new Array();
    var min = new Array();
    var somaLinear = 0;
    var somaPolinomial2 = 0;
    var somaExponencial = 0;

    for(var i = 0; i < x.length; i++) {
        valLinear.push(Math.abs(y[i] - ((linear[0] * x[i]) + linear[1])));
        valPolinomial2.push(Math.abs(y[i] - ((polinomial2[0] * Math.pow(x[i],2)) + (polinomial2[1] * x[i]) + polinomial2[2])));
        valExponencial.push(Math.abs(y[i] - (exponencial[1] * Math.pow(Math.E,exponencial[0] * x[i]))));
    }

    somaLinear = soma(quadrados(valLinear));
    somaPolinomial2 = soma(quadrados(valPolinomial2));
    somaExponencial = soma(quadrados(valExponencial));

    if(somaLinear <= somaPolinomial2 && somaLinear <= somaExponencial){
        min = ["linear", somaLinear];
    } else{
        if(somaExponencial < somaLinear && somaExponencial < somaPolinomial2){
            min = ["exponencial", somaExponencial];
        } else {
            min = ["polinomial", somaPolinomial2];
        }
    }
    return min;
}
