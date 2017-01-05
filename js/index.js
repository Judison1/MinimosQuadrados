$(document).ready(function () {
    $('.add-coluna').click(function () {

        var i = $(this).data('count');
        i++;

        $('.vars').append('<div class="form-group col-xs-3 col-sm-2 col-md-1"><label>' + i +'</label>  <input type="number" step="0.1" class="form-control x" placeholder="x' + i + '"><input type="number" step="0.1" class="form-control y"  placeholder="y'+ i +'"> </div>');
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

        var somaX = soma(x);
        var somaY = soma(y);
        var somaQuadX = soma(quadrados(x));
        var somaCubX  = soma(cubicos(x));
        var somaQuatX = soma(quatruplos(x));
        var somaMulXY = soma(multiplicacao(x,y));
        var somaQuadXMultY = soma(quadradosXMultY(x,y));

        var i = x.length;
        var li = linear(i, somaX,somaY,somaQuadX, somaMulXY);
        var po2 = polinomial2(i,somaX,somaY,somaQuadX,somaCubX,somaQuatX,somaMulXY,somaQuadXMultY);


        var coord = coordenadas(x,y);
        var coordli = plotlineLinear(Math.min.apply(Math,x), Math.max.apply(Math,x), li);
        var coordpo2 = plotlinePolinomio2(Math.min.apply(Math,x), Math.max.apply(Math,x), po2);

        // console.log(coordpo2);

        $.plot("#grafico", [{
            data: coord,
            points: { show: true }
        }, {
            data: coordli,
            lines: { show: true }
        },{
            data: coordpo2,
            lines: { show: true }
        }
        ]);

    });

});