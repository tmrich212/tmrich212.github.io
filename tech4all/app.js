let productsInCart = [];
const parentElement = document.querySelector('.btn');
const cartSumPrice = document.querySelector('#sum-prices');
const products = querySelectorAll('.products');

const updateProductsInCart = (product) => {
    for(let i = 0; i < productsInCart.length; i ++){
        if(productsInCart[i].id == product.id){
            productsInCart[i].count += 1;
            productsInCart[i].price = productsInCart[i].basePrice * productsInCart[i].count;
            return;
        }
    }
    productsInCart.push(product);
}


products.forEach(product => {
    product.addEventListener('click', (e)=> {
        if(e.target.class.containers('addToCart')){
            const productID = e.target.dataset.productId;
            const productName = product.querySelector('.productName').innerHTML;
            const productPrice = product.querySelector('.priceValue').innerHTML;
            const productImage = product.querySelector('img').src;

            let productToCart = {
                name: productName,
                image: productImage,
                id: productId,
                price: +productPrice,
                basePrice: +productPrice
            }

            updateProductsInCart(productToCart);
            updateShoppingCartHTML();
        }
    })
})