import { createWalletClient, getContract, http, publicActions, toHex } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";
import dotenv from "dotenv";
import funJson from "../artifacts/Fun.json";

dotenv.config();

const { abi, bin } = funJson["contracts"]["contracts/Fun.sol:Fun"];

const privateKey = process.env.pKey?.trim() as `0x${string}`;
const account = privateKeyToAccount(privateKey);

(async () => {
  const client = createWalletClient({
    account,
    chain: baseSepolia,
    transport: http(process.env.API_URL),
  }).extend(publicActions);

  const hash = await client.deployContract({
    abi,
    bytecode: `0x${bin}`,
    gas: BigInt(10_000_000),
    args: [123n],
  });
  
  const { contractAddress } = await client.waitForTransactionReceipt({ hash });


if (contractAddress) {
  const contract = getContract({
    address: contractAddress,
    abi,
    client,
  });
  
  console.log(await contract.read.x());
  const changeTxHash = await contract.write.changeX([132n])
  await client.waitForTransactionReceipt ({
    hash: changeTxHash });
  console.log(await contract.read.x());

  console.log({contractAddress});
}

})();
