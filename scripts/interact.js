// scripts/interact.js
const ethers = require('ethers');

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with the actual deployed address

  // Replace with the actual ABI
  const contractABI = [
    // Paste your ABI here
    {
      "constant": true,
      "inputs": [],
      "name": "someFunction",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
    // ... other ABI entries
  ];

  const provider = new ethers.providers.JsonRpcProvider('http://localhost:5000'); // Update with your node URL

  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  // Interact with the contract (e.g., call functions)
  const result = await contract.someFunction();

  console.log("Result:", result);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
