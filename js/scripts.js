$(function() {

    $('.galeria .contenedor-imagen').on('click', function() {
       $('#modal').modal;
       const ruta_imagen = ($(this).find('img').attr('src'));
       $('#imagen-modal').attr('src', ruta_imagen);
    });

    $('#modal').on('click', function() {
        $('#modal').modal('hide');
    });

});