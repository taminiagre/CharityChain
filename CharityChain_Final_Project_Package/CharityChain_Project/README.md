# CharityChain — Transparent Charity Donation Tracking Using Blockchain

CharityChain is an educational decentralized application (DApp) that demonstrates how a Solidity smart contract can record charity campaigns and donations on an Ethereum-compatible blockchain. The project is designed for a college mini-project and local test-network demonstration.

## Features
- Owner creates a campaign with a beneficiary, title, description, and ETH goal.
- Any connected wallet can donate ETH to an active campaign.
- Donation totals and per-wallet contributions are recorded on-chain.
- Only the campaign beneficiary can withdraw collected funds.
- Events make campaign creation, donations, and withdrawals visible in transaction logs.
- Frontend connects to MetaMask using ethers.js.

## Technology
- Solidity `^0.8.20`
- Remix IDE for compiling/deploying the contract
- Ethereum-compatible local/test network
- MetaMask wallet
- HTML, CSS, JavaScript
- ethers.js v6 via CDN

## Project structure
```text
CharityChain_Project/
├── contracts/CharityChain.sol
├── frontend/index.html
├── frontend/style.css
├── frontend/app.js
├── docs/TESTING_CHECKLIST.md
└── README.md
```

## Run the smart contract (Remix — beginner-friendly)
1. Open https://remix.ethereum.org/
2. Create `CharityChain.sol` and paste the contract from `contracts/CharityChain.sol`.
3. In **Solidity Compiler**, select compiler `0.8.20` or a compatible `0.8.x` version and compile.
4. In **Deploy & Run Transactions**, choose **Remix VM** for a quick local demonstration, then click **Deploy**.
5. Expand the deployed contract. As the deploying account is the owner, call `createCampaign` with:
   - `beneficiary`: an address from the Remix VM accounts
   - `title`: `Flood Relief`
   - `description`: `Demo campaign for flood-affected families`
   - `goalWei`: `1000000000000000000` (1 ETH in wei)
6. Call `donate` with campaign ID `1`, set the **Value** field to e.g. `0.1` and unit `ether`, then transact.
7. Switch the Remix account to the beneficiary account and call `withdrawFunds(1)`.
8. Check transaction receipts/events and call `getCampaign(1)` to inspect campaign state.

**Important:** Remix VM is a simulated development environment. Its accounts and funds are test-only and do not represent real donations.

## Run the optional browser frontend
1. Deploy the contract to a local network or testnet that MetaMask can access.
2. Copy the deployed contract address into `frontend/app.js` as `CONTRACT_ADDRESS`.
3. Copy the compiled ABI from Remix into the `ABI` array in `frontend/app.js`. The starter file includes a small ABI template; ensure it matches the compiled contract ABI before use.
4. Serve `frontend/` using VS Code Live Server or another local static server. Opening `index.html` directly may be blocked by browser settings.
5. Install/unlock MetaMask and select the same network used for deployment.
6. Connect wallet. The frontend can list campaigns only when the contract address and ABI are configured.

## Security and scope
- This is a classroom prototype, not audited production software.
- Use only a local chain or testnet. Never enter a seed phrase into the app and never use real funds.
- The owner can create/close campaigns; the beneficiary is fixed at creation.
- The example uses Solidity `transfer` for a simple demonstration. Production contracts should undergo independent security review and consider robust withdrawal patterns, pausing, reentrancy protections, and formal tests.
- Blockchain records are public and generally permanent. Do not store personal or confidential donor information on-chain.

## Submission checklist
- [ ] Replace student/college placeholders in the Word report.
- [ ] Compile and deploy the contract yourself.
- [ ] Capture genuine screenshots of compilation, deployment, campaign creation, donation, and withdrawal.
- [ ] Update report with your actual transaction details and deployed address.
- [ ] Push the project folder to your own GitHub repository.

## GitHub publishing
See `GITHUB_UPLOAD_GUIDE.md` for steps to publish this project to your own GitHub account. No hosted repository URL is included because it must be created under your account.

## Screenshots
The `screenshots/` folder contains clearly labelled illustrative UI/architecture previews. They are not transaction evidence. Capture actual Remix transaction screenshots after running the contract.
