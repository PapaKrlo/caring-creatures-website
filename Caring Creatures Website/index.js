
// let currPrice = 0.01;
// function updatePriceLabel(value) {
//   document.getElementById("priceLabel").innerText = value + " ETH";
//   let qty = document.getElementById("nftQuantity").value;
//   currPrice = value;
//   let mintConfigObj = {
//     type: "erc-721",
//     totalPrice: Number(qty*value).toFixed(3),
//     quantity: qty
//   }
//   let mintConfigJson = JSON.stringify(mintConfigObj);

//   // finally update the button config
//   document.getElementById('xmint-btn').setAttribute('mintConfig', mintConfigJson);
//   document.getElementById('totalToPay').textContent = `${Number(qty*value).toFixed(2)} ETH`
//   console.log(mintConfigJson)
// }

// function updateQuantityLabel(value) {
//   document.getElementById("quantityLabel").innerText =
//     value + " NFT" + (value > 1 ? "s" : "");
//   let price = currPrice;

//     let mintConfigObj = {
//       type: "erc-721",
//       totalPrice: Number(price*value).toFixed(3),
//       quantity: value.toString()
//     }
//     let mintConfigJson = JSON.stringify(mintConfigObj);
  
//     // finally update the button config
//     document.getElementById('xmint-btn').setAttribute('mintConfig', mintConfigJson);
//     document.getElementById('totalToPay').textContent = `${Number(price*value).toFixed(2)} ETH`
//     console.log(mintConfigJson)

// }




