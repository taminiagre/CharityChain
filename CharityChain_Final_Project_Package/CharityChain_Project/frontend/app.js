// CharityChain frontend starter. Set CONTRACT_ADDRESS and paste the full compiled ABI below.
const CONTRACT_ADDRESS = "PASTE_DEPLOYED_CONTRACT_ADDRESS_HERE";
const ABI = [
  "function owner() view returns (address)",
  "function campaignCount() view returns (uint256)",
  "function createCampaign(address payable beneficiary,string title,string description,uint256 goalWei) returns (uint256)",
  "function donate(uint256 campaignId) payable",
  "function withdrawFunds(uint256 campaignId)",
  "function getCampaign(uint256 campaignId) view returns (uint256 id,address beneficiary,string title,string description,uint256 goalWei,uint256 totalDonatedWei,bool active,bool withdrawn)",
  "function donations(uint256,address) view returns (uint256)",
  "event CampaignCreated(uint256 indexed campaignId,address indexed beneficiary,string title,uint256 goalWei)",
  "event DonationReceived(uint256 indexed campaignId,address indexed donor,uint256 amountWei,uint256 timestamp)",
  "event FundsWithdrawn(uint256 indexed campaignId,address indexed beneficiary,uint256 amountWei)"
];

let provider, signer, contract, account;
const $ = id => document.getElementById(id);
function log(message) { $("activity").textContent = message; }
function validContract() {
  if (!window.ethers) throw new Error("ethers.js did not load. Check your internet connection.");
  if (!/^0x[a-fA-F0-9]{40}$/.test(CONTRACT_ADDRESS)) throw new Error("First set a valid deployed contract address in frontend/app.js.");
}
async function connect() {
  try {
    if (!window.ethereum) throw new Error("MetaMask is not detected. Install/unlock MetaMask first.");
    validContract();
    await window.ethereum.request({method:"eth_requestAccounts"});
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    account = await signer.getAddress();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    $("walletStatus").textContent = "Connected: " + account.slice(0,6) + "…" + account.slice(-4);
    $("connectBtn").textContent = "Wallet connected";
    await loadCampaigns();
  } catch (e) { log(e.shortMessage || e.message || String(e)); }
}
async function loadCampaigns() {
  try {
    validContract();
    if (!contract) {
      if (!window.ethereum) throw new Error("Install MetaMask, connect a wallet, and configure the contract address.");
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
      account = await signer.getAddress();
    }
    const count = Number(await contract.campaignCount());
    const list = $("campaignList"); list.innerHTML = "";
    if (!count) { list.innerHTML = '<p class="muted">No campaigns yet. The contract owner can create the first campaign below.</p>'; return; }
    for (let id=1; id<=count; id++) {
      const c = await contract.getCampaign(id);
      const goal = Number(ethers.formatEther(c.goalWei));
      const raised = Number(ethers.formatEther(c.totalDonatedWei));
      const pct = goal > 0 ? Math.min(100, raised / goal * 100) : 0;
      const card = document.createElement("article"); card.className="campaign";
      const title = document.createElement("h3"); title.textContent = c.title; card.appendChild(title);
      const desc = document.createElement("p"); desc.textContent = c.description; card.appendChild(desc);
      const amount = document.createElement("div"); amount.className="amount"; amount.textContent = raised.toFixed(4)+" ETH"; card.appendChild(amount);
      const detail = document.createElement("p"); detail.textContent = "of "+goal+" ETH goal · Beneficiary "+c.beneficiary.slice(0,6)+"…"+c.beneficiary.slice(-4); card.appendChild(detail);
      const bar = document.createElement("div"); bar.className="progress"; const fill=document.createElement("span"); fill.style.width=pct+"%"; bar.appendChild(fill); card.appendChild(bar);
      const state=document.createElement("p"); state.textContent = c.withdrawn ? "Funds withdrawn" : c.active ? "Active campaign" : "Closed campaign"; card.appendChild(state);
      if (c.active && !c.withdrawn) {
        const row=document.createElement("div"); row.className="donate-row";
        const input=document.createElement("input"); input.type="number"; input.min="0.000001"; input.step="any"; input.placeholder="ETH amount";
        const btn=document.createElement("button"); btn.textContent="Donate";
        btn.onclick=async()=>{ try { const value=input.value; if(!value || Number(value)<=0) throw new Error("Enter a donation amount greater than zero."); const tx=await contract.donate(id,{value:ethers.parseEther(value)}); log("Donation submitted: "+tx.hash); await tx.wait(); log("Donation confirmed: "+tx.hash); await loadCampaigns(); } catch(e){log(e.shortMessage||e.message||String(e));} };
        row.append(input,btn); card.appendChild(row);
      }
      if (account && account.toLowerCase()===c.beneficiary.toLowerCase() && !c.withdrawn && raised>0) {
        const btn=document.createElement("button"); btn.style.marginTop="12px"; btn.textContent="Withdraw funds";
        btn.onclick=async()=>{try{const tx=await contract.withdrawFunds(id);log("Withdrawal submitted: "+tx.hash);await tx.wait();log("Withdrawal confirmed: "+tx.hash);await loadCampaigns();}catch(e){log(e.shortMessage||e.message||String(e));}};
        card.appendChild(btn);
      }
      list.appendChild(card);
    }
  } catch(e) { $("campaignList").innerHTML='<p class="muted">Unable to load campaigns. Configure the contract address, deploy the contract, and select the correct MetaMask network.</p>'; log(e.shortMessage||e.message||String(e)); }
}
$("connectBtn").addEventListener("click", connect);
$("refreshBtn").addEventListener("click", loadCampaigns);
$("createForm").addEventListener("submit", async e=>{
  e.preventDefault();
  try {
    if(!contract) await connect();
    if(!contract) return;
    const beneficiary=$("beneficiary").value.trim(), title=$("title").value.trim(), description=$("description").value.trim(), goal=$("goal").value;
    if(!ethers.isAddress(beneficiary)) throw new Error("Enter a valid beneficiary wallet address.");
    if(!goal || Number(goal)<=0) throw new Error("Goal must be greater than zero.");
    const tx=await contract.createCampaign(beneficiary,title,description,ethers.parseEther(goal));
    log("Campaign creation submitted: "+tx.hash); await tx.wait(); log("Campaign created: "+tx.hash);
    e.target.reset(); await loadCampaigns();
  } catch(err) { log(err.shortMessage||err.message||String(err)); }
});
if(window.ethereum) window.ethereum.on("accountsChanged",()=>location.reload());
