# GitHub Upload Guide — CharityChain

Repository: https://github.com/taminiagre/CharityChain

## Option A: Upload using the GitHub website (beginner-friendly)

1. Download `CharityChain_Final_Project_Package.zip` and extract it on your computer.
2. Open the repository: https://github.com/taminiagre/CharityChain
3. If the repository page says it is empty, click **Add file → Upload files**. If you see a README or other existing files, you can still use **Add file → Upload files**.
4. Open the extracted `CharityChain_Project` folder on your computer.
5. Select the project files and folders inside it: `README.md`, `contracts`, `frontend`, `docs`, and `screenshots`. Also include this guide if you want. Upload the contents of the folder, not just the ZIP file.
6. Drag the selected files/folders into the GitHub upload area. GitHub supports folders when you drag them in using a desktop browser; if that does not work, create the folders and upload their files one folder at a time.
7. Wait until the upload finishes. In **Commit changes**, enter `Add CharityChain mini project files` and click **Commit changes**.
8. Refresh the repository page and confirm you can see `contracts`, `frontend`, `docs`, `screenshots`, and `README.md`.

## Option B: Upload one folder at a time

If your browser doesn't upload folders, create each folder with **Add file → Create new file** and a path such as `contracts/CharityChain.sol`, then paste the matching file content. For image and Word files, use **Add file → Upload files** because they are binary files.

## How to run the project after upload

1. Open https://remix.ethereum.org/.
2. Copy `contracts/CharityChain.sol` into Remix and compile with a compatible Solidity 0.8.x compiler.
3. Deploy to **Remix VM** for a classroom demo; do not use real funds.
4. Test campaign creation, donation, campaign state, and beneficiary withdrawal using the checklist in `docs/TESTING_CHECKLIST.md`.
5. To run the frontend, open `frontend/index.html` with a local server, install MetaMask, then configure `frontend/app.js` with the deployed contract address and matching ABI as described in the source comments/report.
6. Capture your own screenshots of compilation, deployment, transactions, and frontend. The included images are clearly labelled illustrative previews and must not be presented as real transaction proof.

## If GitHub says 403 / access denied

Check that you are signed into the correct GitHub account, that the repository exists, and that the connected GitHub app has access to this repository. You can still upload manually through the website even if ChatGPT's GitHub connection cannot write to the repository.
