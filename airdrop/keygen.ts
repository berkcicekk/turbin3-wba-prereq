import { Keypair } from "@solana/web3.js";
import * as fs from "fs";

// Generate a new keypair
let kp = Keypair.generate();
const output = `You've generated a new Solana wallet: ${kp.publicKey.toBase58()}\nSolana Wallet Secret Key: ${kp.secretKey}`;

// Write to file
fs.writeFileSync('wallet-output.txt', output);

console.log("Wallet details saved to wallet-output.txt");
