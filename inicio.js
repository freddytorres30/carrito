document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add')

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const productSection = button.closest('.product')
        
            const productId = productSection.id
            const productName = productSection.querySelector('h2').innerText
            const productPrice = productSection.querySelector('.price').innerText

            const product = {
                id: productId,
                name: productName,
                price: productPrice
            }

            let cart = JSON.parse(localStorage.getItem('carrito')) || []

            cart.push(product);

        
            localStorage.setItem('carrito', JSON.stringify(cart))

        })
    })
})


