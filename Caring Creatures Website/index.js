// function updateTimer() {
//   const countdownDate = new Date("2023-04-16T11:00:00").getTime();
//   const now = new Date().getTime();
//   const distance = countdownDate - now;

//   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//   );
//   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.querySelector(".days").innerHTML = days + " <span>Days</span>";
//   document.querySelector(".hours").innerHTML = hours + " <span>Hours</span>";
//   document.querySelector(".minutes").innerHTML =
//     minutes + " <span>Minutes</span>";
//   document.querySelector(".seconds").innerHTML =
//     seconds + " <span>Seconds</span>";

//   if (distance < 0) {
//     clearInterval(timerInterval);
//     document.querySelector("#timer").innerHTML = "The event has started!";
//   }
// }

// updateTimer();
// const timerInterval = setInterval(updateTimer, 1000);

function updatePriceLabel(value) {
  document.getElementById("priceLabel").innerText = value + " ETH";
}

function updateQuantityLabel(value) {
  document.getElementById("quantityLabel").innerText =
    value + " NFT" + (value > 1 ? "s" : "");
}

// Connect to MetaMask
async function connectMetaMask() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.enable();
      return true;
    } catch (error) {
      console.error("User denied account access");
      return false;
    }
  } else {
    console.error("No web3 provider detected");
    return false;
  }
}

// Mint NFT function
async function mintNFT() {
  const connected = await connectMetaMask();
  if (!connected) {
    alert("Please connect to MetaMask");
    return;
  }

  const contractAddress = "YOUR_CONTRACT_ADDRESS";
  const abi = YOUR_CONTRACT_ABI;
  const price = document.getElementById("priceRange").value;
  const quantity = document.getElementById("quantityRange").value;

  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const contract = new web3.eth.Contract(abi, contractAddress);

  try {
    const value = web3.utils.toWei(price, "ether");
    await contract.methods
      .mint(quantity)
      .send({ from: accounts[0], value: value * quantity });

    alert("Mint successful!");
  } catch (error) {
    console.error("Mint failed:", error.message);
    alert("Mint failed. Please check the console for more information.");
  }

  // Add event listener to mint button
  document.getElementById("mintButton").addEventListener("click", mintNFT);

}
// Get the button:
let mybutton = document.getElementById("btt-button");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function changeImage(id) {
  document.getElementById(id).classList.toggle("tag");
  document.getElementById(id).classList.toggle("tag-open");
}