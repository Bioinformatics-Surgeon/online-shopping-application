$('#test').on('click', function(){
    $.get('/products', function(data){
        console.log(data, "items we are getting back")
        $('#display').empty();
        data.forEach(ele => {
            $('#display').append(`<div>${ele.name}</div>`)
        })
    })
})


$("#add").on('click', function(){
    const name = $('#itemInput').val()


    $.post('/items',{ name: name} , function(res){
        console.log(res)
    })
})
