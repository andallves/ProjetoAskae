
$( function() {
    var limite = $('#janela img').length * $('#janela img').width() * -1;
    var largura = (limite * (-1)) + $('#janela img').width();

    $('#janela').append('<img>');
    $('#janela img:last').attr('src', '../imagens/Exame.jpg')
    $('#janela').css('width', largura)

    function moverBanner() {
        $('#janela').animate({left:"-=450"}, 1000, function(e) {
            if($('#janela').position().left <= limite){
                $('#janela').css('left', 0)
            }
        });
    }

    setInterval(moverBanner, 3000)
 
})

