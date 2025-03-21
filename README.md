# **Viem Speedrun 🚀**  
An updated version of Alchemy's **"Learn How to Use Viem"** tutorial.  
📺 Watch the tutorial: [YouTube](https://www.youtube.com/watch?v=P9oUqVsHBkA)  
📚 Read the **Viem docs**: [viem.sh](https://viem.sh)

---

## 📦 **Setup**
### 1️⃣ Install Dependencies  
```sh
pnpm install
```

### 2️⃣ Generate a Private Key  
```sh
node src/p-key
```

### 3️⃣ Set Up Your Environment Variables  
- Get a free Alchemy API Key: [Sign Up Here](https://dashboard.alchemy.com/?a=youtube-signup)  
- Paste your **private key** and **API key** into a `.env` file.

---

## ⚙️ **Compile the Smart Contract**
```sh
solc --optimize --combined-json abi,bin contracts/Fun.sol | jq . > artifacts/Fun.json
```
> 💡 *This formatting is slightly different from the tutorial video.*

---

## 🚀 **Run the Scripts**
### **1️⃣ Create an Account**
```sh
npx ts-node src/1-account
```
✅ **Output:** `privateKey, accountAddress, Balance`

### **2️⃣ Deploy the Contract**
```sh
npx ts-node src/2-contracts
```
✅ **Output:** `contract address`

✏️ **Paste the contract address** into this line inside your script:
```ts
const contractAddress = "your_contract_address";
```

### **3️⃣ Track Contract Events**
```sh
npx ts-node src/3-events
```
✅ **Output:** `Event changes`  
⚠️ *This runs but has some minor issues—currently debugging!*

---

## 🎯 **What's Next?**
- [ ] Fix `3-events.ts` script  
- [ ] Improve error handling  
- [ ] Optimize contract deployment  
