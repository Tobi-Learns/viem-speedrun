# viem-speedrun
An updated version of Alchemy's "Learn How To Use Viem" tutorial
https://www.youtube.com/watch?v=P9oUqVsHBkA
Check out the viem docs: viem.sh

Install dependencies
pnpm i

Run p-key.js to generate a Private Key
node src/p-key

Paste your private key and API in an .env file
Get your free Alchemy API by signing up here https://dashboard.alchemy.com/?a=youtube-signup

Compile contract
solc --optimize --combined-json abi,bin contracts/Fun.sol | jq . > artifacts/Fun.json
// Slight difference from video for formatting 

Run 1-account.ts
npx ts-node src/1-account
//output: privateKey, accountAddress, Balance

Run 2-contracts.ts
npx ts-node src/2-contracts
//output: contract address

Paste contract address in this line:
const contractAddress = "contract address";

Run 3-events.ts
npx ts-node src/3-events
//output: event changes
//it runs but it's a little bit broken and i can't solve it
