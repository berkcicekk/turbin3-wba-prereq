# turbin3-wba-prereq
Turbin3 Prerequisites Project Code


Turbin3 Airdrop Project
TX Link: https://explorer.solana.com/tx/3tUrETEP5SrZFRhXAmnG73Wghb4YypoaQzeCFWsK6JhK7DUzA9cAhM7MbvQbZpmdv1DpMEJe7adHWUr5oDjanNpR?cluster=devnet

wb_prereq: This code defines the configuration of a programme and the way it interacts with the Solana blockchain. The WbaPrereq type specifies the version, name, and address of the programme. The instructions it contains (for example, complete and update) define the required accounts and arguments. It also contains the account structure Q2Prereq2024, the error code InvalidGithubAccount, and the data types. This IDL provides structure and information to be used when interacting with the programme.

We can run the script with the command yarn wba_prereq


airdrop.ts: This code aims to transfer 2 SOLs to a wallet on the Solana blockchain. It imports the modules Connection, Keypair, and LAMPORTS_PER_SOL. It gets the private key of the wallet from the JSON file wallet and creates a Keypair. Solana uses a Connection object to connect to the devnet network. Within an anonymous asynchronous function, it requests 2 SOLs to the specified wallet with the requestAirdrop method. If the transaction succeeds, it provides the transaction hash and the discovery connection; otherwise it prints the error message to the console.

we can run the code with the command yarn airdrop 


enroll.ts: This code is intended to send a complete instruction to a programme on the Solana blockchain. Imports the Connection, Keypair, and PublicKey modules from the @solana/web3.js library. Imports the Program, Wallet, and AnchorProvider modules from the @coral-xyz/anchor library. Imports IDL and WbaPrereq from the file containing the programme description. Gets the private key of the wallet from the JSON file wallet and creates a Keypair. Solana uses a Connection object to connect to the devnet network. It prepares the github data with a Buffer. Sets the connection and wallet with an AnchorProvider. Determines the account address of the programme with findProgramAddressSync. Sends the complete instruction with the github data in an anonymous asynchronous function. If the transaction succeeds, it provides the transaction hash and the discovery link; otherwise it prints the error message to the console.

we can run the code with the command yarn enroll


keygen.ts: This script aims to create a new Solana wallet and print its information. Imports the Keypair module from the @solana/web3.js library. Generates a new wallet (key pair) with Keypair.generate(). Prints the public key of the wallet with publicKey.toBase58() and the secret key with secretKey to the console. This creates a new Solana wallet and displays the key information.

we can run the code with the command yarn keygen


transfer.ts: This code aims to transfer SOL from one wallet to another on the Solana blockchain. It imports the Transaction, SystemProgram, Connection, Keypair, LAMPORTS_PER_SOL, sendAndConfirmTransaction, and PublicKey modules from the @solana/web3.js library. Gets the wallet's private key from the JSON file named wallet and creates a Keypair. Determines the public key of a second wallet. Solana uses a Connection object to connect to the devnet network. Within an asynchronous function, it creates a transfer transaction with the SystemProgram.transfer method. It signs, publishes and validates the transaction. If the transaction is successful, it provides the transaction hash and the discovery connection; otherwise it prints the error message to the console.

we can run the code with the command ‘yarn transfer


dev-wallet.json & dev-wallet2.json & dev-wallet3.json: The files dev-wallet.json, dev-wallet2.json and dev-wallet.json are byte arrays representing the secret key of the Solana wallet. In Solana, this type of secret key is typically used to generate Keypair.

package.json: Defines the project's information and dependencies.

package-lock.json: Locks the exact versions and structure of dependencies, ensuring consistent installation.

yarn.lock file locks the full versions of dependencies and the structures of sub-dependencies. This file ensures that the dependencies are in the same versions on every installation, thus guaranteeing that the project runs consistently in every environment.

