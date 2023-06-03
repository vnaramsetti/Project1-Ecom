// Hambergun menu bar in mobile mode

const bar   = document.getElementById('bar')
const close = document.getElementById('close')
const nav   = document.getElementById('navbar')

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}


// Adding items to cart
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else {
    ready()
}

function ready(){
 var removeCartItems = document.getElementsByClassName('rem')
   for(i=0;i<removeCartItems.length;i++){
    button = removeCartItems[i]
    button.addEventListener('click',removeCartItem)
    
    }

var quantityInputs = document.getElementsByClassName('quantity')
for(i=0;i<quantityInputs.length;i++){
    var input = quantityInputs[i]
    input.addEventListener('change',quantityChanged)
}


// var addtocarbuttons = document.getElementsByClassName('addtocart')
// for(i=0;i<addtocarbuttons.length;i++){
//  var button = addtocarbuttons[i]
//  button.addEventListener('click',addtocartclicked)
// }

}




function removeCartItem(event){
   var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    UpdateCartTotal()
}
function quantityChanged(event) {
   var  input = event.target
   if(isNaN(input.value) || input.value <= 0 ){
    input.value = 1
   }
   UpdateCartTotal()
}
// function addtocartclicked(event){
//     var button = event.target
//     var shopitem = button.parentElement.parentElement
//     var title = shopitem.getElementsByClassName('title')[0].innerText
//     var price = shopitem.getElementsByClassName('price')[0].innerText
//     var imageSrc = shopitem.getElementsByClassName('image')[0].src
//     console.log(title,price,imageSrc);
//      addItemToCart(title,price,imageSrc)
// }
// function addItemToCart(title,price,imageSrc){
    
//  var cartRow = document.createElement('div')
//  cartRow.innerText = title
//  var cartItems = document.getElementsByClassName('cart-container')[0]
//  cartItems.appendChild(cartRow)
//  }





function UpdateCartTotal(){
var CartItemContainer = document.getElementsByClassName('cart-container')[0]
var cartRows = CartItemContainer.getElementsByClassName('cart-row')
var total = 0
for(i=0;i<cartRows.length;i++){
    cartRow = cartRows[i]
    var priceElement = cartRow.getElementsByClassName('price')[0]
    var quantityElement = cartRow.getElementsByClassName('quantity')[0]
    var price = parseFloat(priceElement.innerText.replace('Rs.',''))
    var quantity = quantityElement.value
    console.log(price,quantity);
    total = total+ (price * quantity)
}
 total = Math.round(total * 100)/100
 document.getElementsByClassName('tot')[0].innerText = 'Rs.'+ total

}