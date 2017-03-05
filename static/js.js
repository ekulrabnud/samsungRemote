$('.btn').on('click',function(){
    console.log(this)
    let href = $(this).attr('id');
    $('#logger').empty().html(href)
})