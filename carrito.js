
document.addEventListener('DOMContentLoaded', () => {
    const displayCartItems = () => {
        const cart = JSON.parse(localStorage.getItem('carrito')) || []
        const productosDiv = document.getElementById('productos')

        if (cart.length === 0) {
            productosDiv.innerHTML = '<p>No hay productos en el carrito.</p>'
            return
        }

        productosDiv.innerHTML = ''

        cart.forEach(product => {
    
            const productElement = document.createElement('div')
            productElement.className = 'productItem'

            const productHTML = `
                <h3>${product.name}</h3>
                <p>${product.id}</p>
                <p>${product.price}</p>
                <button>x</button>
            `
            //meter el eliminar en item
            /*const eliminarT = document.createElement("button")
            eliminarT.textContent = "X"
            eliminarT.className = "btnEliminar"
            eliminarT.id = "btnEliminar"*/

            productElement.innerHTML = productHTML
            productosDiv.appendChild(productElement)
            //productosDiv.appendChild(eliminarT)
        })
    }
    displayCartItems()
})

