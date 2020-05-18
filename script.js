$('.page-scroll').on('click', function(e) {
    let tujuan = $(this).attr('href');
    let elemenTujuan = $(tujuan);

    /* $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    })

    e.preventDefault(); */

    $('html,body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1200);
    
    e.preventDefault();

});