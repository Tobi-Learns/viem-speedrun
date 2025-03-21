import { createPublicClient, formatEther, http, parseEther } from "viem"
import { privateKeyToAccount } from "viem/accounts"
import { baseSepolia } from "viem/chains"

import dotenv from "dotenv"

dotenv.config();

const privateKey = process.env.pKey?.trim() as `0x${string}`; 
console.log(privateKey)

const account = privateKeyToAccount(privateKey);

console.log(account.address);

(async () => {
    const client = createPublicClient({
        chain: baseSepolia,
        transport: http(process.env.API_URL), 
    });

    try {
        // ✅ Ensure address is valid
        const balance = await client.getBalance({
            address: account.address,
        });

        console.log("Balance:", formatEther(balance));

        const nonce = await client.getTransactionCount({
            address: account.address
        });

        console.log(nonce)
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
})();

