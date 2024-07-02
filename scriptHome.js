$(document).ready(function() {

    var userRole = "Administrador"; // o "Cliente"
    $('body').attr('data-user-role', userRole);

    var tabsVerticalInner = $('#accordian');
    var selectorVerticalInner = $('#accordian').find('li').length;
    var activeItemVerticalInner = tabsVerticalInner.find('.active');
    var activeWidthVerticalHeight = activeItemVerticalInner.innerHeight();
    var activeWidthVerticalWidth = activeItemVerticalInner.innerWidth();
    var itemPosVerticalTop = activeItemVerticalInner.position();
    var itemPosVerticalLeft = activeItemVerticalInner.position();
    $(".selector-active").css({
        "top": itemPosVerticalTop.top + "px",
        "left": itemPosVerticalLeft.left + "px",
        "height": activeWidthVerticalHeight + "px",
        "width": activeWidthVerticalWidth + "px",
    });

    $("#accordian").on("click", "li", function(e) {
        e.preventDefault();
        $('#accordian ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthVerticalHeight = $(this).innerHeight();
        var activeWidthVerticalWidth = $(this).innerWidth();
        var itemPosVerticalTop = $(this).position();
        var itemPosVerticalLeft = $(this).position();
        $(".selector-active").css({
            "top": itemPosVerticalTop.top + "px",
            "left": itemPosVerticalLeft.left + "px",
            "height": activeWidthVerticalHeight + "px",
            "width": activeWidthVerticalWidth + "px",
        });
    });

     // Manejar clics en los enlaces de navegación
     $('.nav-link').click(function() {
        var target = $(this).data('target');

        // Ocultar todas las secciones
        $('.content-section').removeClass('active');

        // Mostrar la sección objetivo
        $(target).addClass('active');
    });

    // Resaltar la pestaña activa según la URL
    var path = window.location.pathname.split("/").pop();
    if (path == '') {
        path = 'index.html';
    }
    var target = $('#accordian ul li a[href="' + path + '"]');
    target.parent().addClass('active');
});