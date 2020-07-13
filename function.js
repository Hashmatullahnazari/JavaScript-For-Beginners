

const productInfoObj1 =
{
     productName: 'potato', 
     productPrice:30, 
     productQuantity:3,
     productAvailable:true
}


const productInfoObj2 =
{
     productName: 'wheat', 
     productPrice:25, 
     productQuantity:5,
     productAvailable:false
};

function showProdutInfo(productObj)
{
     console.log
     (
    `productName- ${productObj.productName} 
     productPrice- ${productObj.productPrice} 
     productQuantity- ${productObj.productQuantity} 
     productIsAvailabel- ${productObj.productAvailable}
     
    `);

}

showProdutInfo(productInfoObj1);
showProdutInfo(productInfoObj2);



