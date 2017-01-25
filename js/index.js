$(document).ready(function () {
    $('.add-coluna').click(function () {

        var i = $(this).data('count');
        i++;

        $('.vars').append('<div class="form-group col-xs-3 col-sm-2 col-md-1 text-md-center"><label>' + i + '</label>  <input type="number" step="0.1" class="form-control x" placeholder="x' + i + '"><input type="number" step="0.1" class="form-control y"  placeholder="y'+ i +'"> </div>');
        $(this).data('count', i);

    });

    $('.btn-remove').click(function () {

        i = $('.add-coluna').data('count');

        if(i > 1) {
            $('.vars .form-group:last-child').remove();
            $('.add-coluna').data('count', i - 1);
        }
    });

    $('.btn-calculo').click(function () {

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

        var ma = melhorAjuste(x,y,li,po2,exp);

        switch (ma[0]) {
            case "linear":
                $.plot("#melhor-grafico", [{
                    label: "Coordenadas Passadas",
                    data: coord,
                    points: { show: true },
                    color: "rgb(0,0,0)"
                }, {
                    label: "Linear",
                    data: coordli,
                    lines: {show: true},
                    color: "rgb(171,41,36)"
                }]);
                break;
            case "exponencial":
                $.plot("#melhor-grafico", [{
                    label: "Coordenadas Passadas",
                    data: coord,
                    points: { show: true },
                    color: "rgb(0,0,0)"
                }, {
                    label: "Exponencial",
                    data: coordexp,
                    lines: { show: true },
                    color: "rgb(100,1,236)"
                }]);
                break;
            case "polinomial":
                $.plot("#melhor-grafico", [{
                    label: "Coordenadas Passadas",
                    data: coord,
                    points: { show: true },
                    color: "rgb(0,0,0)"
                }, {
                    label: "Polinomial",
                    data: coordpo2,
                    lines: { show: true },
                    color: "rgb(12,100,56)"
                }]);
                break;
        }
        if(ma[0] == "linear") {

        }
        $.plot("#grafico", [{
            label: "Coordenadas Passadas",
            data: coord,
            points: { show: true },
            color: "rgb(0,0,0)"
        }, {
            label: "Linear",
            data: coordli,
            lines: { show: true },
            color: "rgb(171,41,36)"
        },{
            label: "Polinomial",
            data: coordpo2,
            lines: { show: true },
            color: "rgb(12,100,56)"
        },{
            label: "Exponencial",
            data: coordexp,
            lines: { show: true },
            color: "rgb(100,1,236)"
        }
        ]);
        table = "<table class='table'><thead><th>i</th><th>x<sub>i</sub></th><th>y<sub>i</sub></th></thead><tbody>";
        for(var i = 0; i < x.length; i++){
            table += "<tr><td>" + (i+1) + "</td><td>" + x[i] + "</td><td>" + y[i] + "</td></tr>";
        }
        table += "</tbody>";
        $('.info').html("<p><strong>Linear: </strong> <em> y = " + li[0].toFixed(2) +"x+("+li[1].toFixed(2)+")</em></p>" +
            "<p><strong>Polinomial: </strong><em>y = " + po2[0].toFixed(2) + "x² + ("+po2[1].toFixed(2)+"x) + (" + po2[2].toFixed(2) + ")</em></p>" +
            "<p><strong>Exponencial: </strong><em>y = " + exp[1].toFixed(2) + "e<sup>"+exp[0].toFixed(2)+"x</sup></em></p> <hr> " +
            "<p><strong>Melhor ajuste:</strong> caso " + ma[0] + "</p>" +
            "<p><strong>Soma dos Quadrados das Diferenças:</strong> " + ma[1] + "</p>" +
            " <hr> " + table);

    });

});