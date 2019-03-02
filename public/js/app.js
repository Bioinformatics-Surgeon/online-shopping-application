$(function () {

    // $('#test').on('click', function () {
    //     $.get('/api/products', function (data) {
    //         console.log(data, "items we are getting back")
    //         $('#display').empty();
    //         data.forEach(ele => {
    //             $('#display').append(`<div>${ele.name}</div>`)
    //         })
    //     })
    // })


    // $("#add").on('click', function () {
    //     const name = $('#itemInput').val()


    //     $.post('/items', { name: name }, function (res) {
    //         console.log(res)
    //     })
    // })

    const render = function (data) {

        console.log(data)
        // data.forEach(function (data) {

        // })insert into a table using jquery
    }


    const getProducts = function () {
        $.get('/api/products').then(render)
    }

    getProducts()
})
