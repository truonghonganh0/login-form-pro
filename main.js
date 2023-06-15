
$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open')
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prevAll().eq(1).attr('type', 'text');
        }else{
            $(this).prevAll().eq(1).attr('type', 'password');
        }
    });
});