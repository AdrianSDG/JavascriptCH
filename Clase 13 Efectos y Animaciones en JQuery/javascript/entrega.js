$('#btn1').click(()=>{
    $('#lorem').animate({
        marginLeft: '+=300px',
        opacity: '0.5',
        height: '200px',
        widht: '300px',
        }, 'slow');$('#lorem').animate({marginTop: '+=300', height: '300px', widht: '200px', opacity: '1'}, 'slow');
        $('#lorem').animate({marginLeft: '-=300px',height: '200px',widht: '400px', opacity: '0.3'}, 'slow');
        $('#lorem').animate({marginTop: '-=300', height: '300px', widht: '200px', opacity: '1'}, 'slow');
});      


