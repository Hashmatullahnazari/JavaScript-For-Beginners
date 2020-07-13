const productInfoObj =
{
     productName: 'potato', 
     productPrice:30, 
     productQuantity:3,
     productAvailable:true
}

//Accessing Object Properties
//You can access object properties in two ways:

console.log(productInfoObj['productName']);
console.log(productInfoObj.productName);



console.log(productInfoObj['productQuantity']);
console.log(productInfoObj.productQuantity);

//easy access with temaplate string 

console.log(`
productName- ${productInfoObj.productName} 
productPrice- ${productInfoObj.productPrice} 
productQuantity- ${productInfoObj.productQuantity} 
productIsAvailabel- ${productInfoObj.productAvailable}
`);

