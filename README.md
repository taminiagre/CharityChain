# CharityChain — Transparent Charity Donation Tracking Using Blockchain

CharityChain is a blockchain-based charity donation tracking system designed to improve transparency and trust in charitable fundraising. It uses smart contracts to record donations on the blockchain, allowing campaign information and donation activity to be verified.

## 📌 Project Overview

Traditional charity systems may make it difficult for donors to independently verify how donations are collected and managed. CharityChain demonstrates how blockchain technology and smart contracts can provide a transparent and tamper-resistant record of donation transactions.

The project allows campaign organizers to create charity campaigns, donors to contribute Ether (ETH), and authorized beneficiaries to withdraw the collected funds according to the smart contract rules.

## 🎯 Objectives

- To demonstrate the practical application of blockchain technology.
- To create and manage charity fundraising campaigns.
- To record donations transparently on the blockchain.
- To restrict fund withdrawals to the authorized campaign beneficiary.
- To demonstrate the use of Solidity smart contracts and a Web3 frontend.

## ✨ Features

- **Campaign Creation:** Create a campaign with details such as its title, description, beneficiary, and fundraising goal.
- **Blockchain Donations:** Donate ETH to a campaign through a connected wallet.
- **Transparent Records:** Track campaign information and donation transactions on-chain.
- **Secure Withdrawals:** Only the designated beneficiary can withdraw funds, subject to the smart contract rules.
- **Wallet Integration:** Connect to a compatible wallet using MetaMask.
- **Event Logging:** Smart contract events provide records of campaign creation, donations, and withdrawals.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Solidity | Writing the smart contract |
| Ethereum-compatible blockchain | Recording transactions |
| Remix IDE | Compiling and deploying the contract |
| MetaMask | Connecting a wallet and authorizing transactions |
| HTML | Frontend structure |
| CSS | Frontend styling |
| JavaScript | Frontend functionality |
| ethers.js v6 | Connecting the frontend to the blockchain |

## 🏗️ System Architecture

1. **User Interface:** Users view campaigns and interact with the frontend.
2. **Wallet:** MetaMask connects the user's account and requests transaction approval.
3. **Smart Contract:** The CharityChain contract creates campaigns, accepts donations, maintains records, and enforces withdrawal permissions.
4. **Blockchain:** Transactions and contract state are stored on the selected blockchain network.

## 📂 Project Structure

```text
CharityChain/
├── contracts/
│   └── CharityChain.sol
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── docs/
│   ├── TESTING_CHECKLIST.md
│   └── CharityChain_Project_Report.docx
├── screenshots/
│   ├── 01_frontend_preview.png
│   ├── 02_campaign_form_preview.png
│   └── 03_system_architecture.png
├── README.md
└── GITHUB_UPLOAD_GUIDE.md
```

*The exact folder names may vary slightly depending on how the project ZIP was uploaded.*

## 🚀 Getting Started

### Prerequisites

- A web browser such as Google Chrome.
- A MetaMask wallet for wallet-connected testing.
- Remix IDE access.
- Basic knowledge of Solidity and blockchain transactions.

### Step 1: Open the Smart Contract

1. Visit [Remix IDE](https://remix.ethereum.org/).
2. Open or create `CharityChain.sol`.
3. Copy the code from `contracts/CharityChain.sol` into the file.

### Step 2: Compile the Contract

1. Open the Solidity Compiler panel in Remix.
2. Select a compiler version compatible with the pragma declared in the contract.
3. Click **Compile CharityChain.sol**.
4. Confirm that compilation succeeds.

### Step 3: Deploy the Contract

1. Open the **Deploy & Run Transactions** panel.
2. Select **Remix VM** for a local demonstration.
3. Select the CharityChain contract.
4. Click **Deploy**.
5. Copy the deployed contract address.

Remix VM is a simulated environment. Its transactions are not published to the public Ethereum network.

### Step 4: Configure the Frontend

1. Open `frontend/app.js`.
2. Follow the configuration instructions in the file.
3. Add the deployed contract address and the matching contract ABI wherever required.
4. Open `frontend/index.html` using a local web server.
5. Connect MetaMask and select the network where the contract was deployed.

**Important:** A Remix VM deployment does not automatically connect to MetaMask. For MetaMask-based testing, deploy the contract to a compatible local network or test network and configure MetaMask and the frontend to use that same network.

### Step 5: Test the Application

- Create a charity campaign.
- Check that the campaign details are recorded.
- Donate a small test amount of ETH.
- Verify that the campaign's donation total changes.
- Test withdrawal using the authorized beneficiary account.
- Confirm that an unauthorized account cannot withdraw funds.

Refer to `docs/TESTING_CHECKLIST.md` for additional test cases.

## 🧪 Testing

Testing should cover:

- Successful campaign creation.
- Successful donations.
- Correct updates to donation totals.
- Authorized beneficiary withdrawals.
- Rejection of unauthorized withdrawals.
- Correct campaign status and transaction events.

Record actual results during testing before reporting that a test has passed. Screenshots included in the initial package are illustrative previews, not proof of successful blockchain transactions.

## 🔐 Security and Limitations

- This project is an educational prototype, not a production-ready charity platform.
- Use Remix VM or a test network for demonstrations.
- Never use real donations or valuable cryptocurrency for unreviewed code.
- Smart contracts should undergo appropriate security review before real-world use.
- Blockchain records may be public and generally cannot be edited after confirmation.
- The application does not independently verify the legitimacy of a charity or beneficiary.

## 🔮 Future Scope

- Add campaign search and category filters.
- Display donation history and transaction links.
- Add a campaign verification process.
- Improve frontend validation and error handling.
- Add automated smart contract tests.
- Deploy to a suitable public testnet for demonstration.
- Improve accessibility and mobile responsiveness.

## 📄 Project Report

The project report is available in the `docs/` folder as `CharityChain_Project_Report.docx`.

## 👩‍💻 Academic Project

**Project Name:** CharityChain — Transparent Charity Donation Tracking Using Blockchain  
**Project Type:** Blockchain Technology Mini Project  
**Domain:** Blockchain and Decentralized Applications

## ⚠️ Disclaimer

CharityChain is developed for educational and demonstration purposes only. It does not guarantee the legitimacy of charities or the proper use of donated funds. Do not use it to collect real donations without thorough testing, security audits, and appropriate legal and operational safeguards.

## 📚 References

- [Ethereum Documentation](https://ethereum.org/en/developers/docs/)
- [Solidity Documentation](https://docs.soliditylang.org/)
- [Remix IDE](https://remix.ethereum.org/)
- [MetaMask Documentation](https://docs.metamask.io/)
- [ethers.js Documentation](https://docs.ethers.org/)
