import { createWalletClient, getContract, http, publicActions, toHex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import dotenv from "dotenv";
import funJson from "../artifacts/Fun.json";

dotenv.config();

const { abi, bin } = funJson["contracts"]["contracts/Fun.sol:Fun"];

const privateKey = process.env.pKey?.trim() as `0x${string}`;
const account = privateKeyToAccount(privateKey);

const contractAddress = "0x8d455bb08755b90e42109233d78a46dcf8515b37";

(async () => {
  const client = await createWalletClient({
    account,
    transport: http(process.env.API_URL),
    chain: baseSepolia,
  });

  const contract = await getContract({
    address: contractAddress,
    abi,
    client,
  });

  await contract.watchEvent.XWasChanged({
    onLogs: (logs) => console.log(logs),
  });

  let x = 55n;
  setInterval(async () => {
    await contract.write.changeX([x]);
    x++;
  }, 3000);
})();