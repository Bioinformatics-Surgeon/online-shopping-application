function validateQuantity(requested, actual){
    return requested <= actual;
}

function submitForm(e, buttonElement){
    let form = buttonElement.form;
    let requested = form[0].value;
    let actual = form[2].value;
    let productName = form[1].value;
    
    let shouldSendForm = validateQuantity(requested, actual);
    console.log(productName + ': Quantity ' + requested + ' is less than ' + actual + ': ' + shouldSendForm)
    
    if(shouldSendForm)
        form.submit();
    else    
        alert("Invalid quantity!");
}

$(function () {

    

    const render = function (data) {
        
        let newContent = data.map(function(row){
            return `
            <tr>
                <td>
                    ${row.product_name} 
                </td>
                <td>
                    ${row.price}
                </td>
                <td>
                    ${row.stock_quantity}
                </td>
                <td>
                    <form action="/api/products" method="POST">
                        <input type="number" id="quantity" name="quantity" />
                        <input name="product_name" type="hidden" value="${row.product_name}" />
                        <input name="stock_quantity" type="hidden" value="${row.stock_quantity}" />
                        <input type="button" onclick="submitForm(event, this)" value="Add to Cart!" />
                    </form>
                </td>
            </tr>
            `
        }).join('')

        $('#products-table tr:last').after(newContent);

        console.log(data)
        // data.forEach(function (data) {

        // })insert into a table using jquery
    }

    const getProducts = function () {
        $.get('/api/products').then(render)
    }

    getProducts()
})
