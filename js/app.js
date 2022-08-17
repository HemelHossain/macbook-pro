
            // Update hardware part on html 
                   
function updateProductNumber( product, isIncreasing, price){
    let x = 180;
    let y = 100;
    let z = 20;

    let productInput = document.getElementById(product + '-cost');
    if(isIncreasing == true){
        productInput.innerText = 0;
    }
    else if(x == price){
        productInput.innerText = 180;
    }
    else if(y == price){
        productInput.innerText = 100;
    }
    else if(z == price){
        productInput.innerText = 20;
    } 

    // calculate total Money 
    calculateMoney();
    
}

function getPriceValue(product){
    let productInput = document.getElementById(product + '-cost');
    let productNumber = parseInt(productInput.innerText);
    return productNumber;
}

function calculateMoney(){
    let bestPrice = getPriceValue('best');
    let memoryCost = getPriceValue('memory');
    let stroageCost = getPriceValue('stroage');
    let deliveryCost = getPriceValue('delivery');
    let totalPrice = bestPrice + memoryCost + stroageCost + deliveryCost;
                   
                    // update html

    let totalAmount = document.getElementById('total-cost');
    totalAmount.innerText = totalPrice;
    let finalPrice = document.getElementById('total');
    finalPrice.innerText = totalPrice;

}


                // Memory increase and decrease Event


document.getElementById('memory-8gb').addEventListener('click', function(){
    updateProductNumber('memory', true);
})


document.getElementById('memory-16gb').addEventListener('click', function(){
     updateProductNumber('memory', false, 180);
})


            //    Storage increase and decrease Event


document.getElementById('stroage-256gb').addEventListener('click', function(){
    updateProductNumber('stroage', true);
})

document.getElementById('stroage-512gb').addEventListener('click', function(){
    updateProductNumber('stroage', false, 100);
})

document.getElementById('stroage-1tb').addEventListener('click', function(){
    updateProductNumber('stroage', false, 180);
})


            //  delivery increase and decrease Event


document.getElementById('delivery-free').addEventListener('click', function(){
    updateProductNumber('delivery', true );
})

document.getElementById('delivery-20$').addEventListener('click', function(){
    updateProductNumber('delivery', false, 20);
})


            // discount increase and decrease Event 


document.getElementById('apply-discount').addEventListener('click', function(){ 
    let promoInput = document.getElementById('discount-code');
    let discount = promoInput.value;
    let amount = document.getElementById('total');
    let amountNumber = parseInt(amount.innerText);
    let finalNumber = amountNumber * 0.2;
    if(discount == 'stevekaku'){
        let finalAmount = amountNumber - finalNumber;
       amount.innerText = finalAmount;
    }
    promoInput.value = '';
})




