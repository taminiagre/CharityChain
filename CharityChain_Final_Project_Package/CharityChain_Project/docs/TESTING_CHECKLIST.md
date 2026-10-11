# CharityChain testing checklist

Use Remix VM or another test network. Do not use real funds.

| Test | Steps | Expected result |
|---|---|---|
| Compile | Compile `CharityChain.sol` with Solidity 0.8.20 | No compiler errors |
| Create campaign | Contract owner calls `createCampaign` with a valid beneficiary, title, description, and positive goal | CampaignCreated event; campaign count increases |
| Reject empty title | Call createCampaign with an empty title | Transaction reverts |
| Reject zero goal | Call createCampaign with goalWei = 0 | Transaction reverts |
| Donate | Send positive ETH to `donate(1)` | DonationReceived event; total and donor contribution increase |
| Reject zero donation | Call donate with transaction value 0 | Transaction reverts |
| Reject missing campaign | Call donate with a non-existent ID | Transaction reverts |
| Withdraw as beneficiary | Switch to beneficiary and call withdrawFunds | FundsWithdrawn event; campaign becomes inactive/withdrawn |
| Reject wrong withdrawer | Switch to a different account and call withdrawFunds | Transaction reverts |
| Prevent repeat withdrawal | Call withdrawFunds again after a successful withdrawal | Transaction reverts |
| Close campaign | Owner calls closeCampaign on an active campaign | CampaignClosed event; campaign becomes inactive |
