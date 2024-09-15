import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";
import wallet from "./dev-wallet.json"; // dev-wallet.json'daki keypair'ı içe aktarıyoruz.

const keypair = Keypair.fromSecretKey(new Uint8Array(wallet)); // Keypair'i private key'den yeniden oluşturuyoruz.

const connection = new Connection("https://api.devnet.solana.com"); // Solana Devnet'e bağlanıyoruz.

(async () => {
    try {
        // 2 SOL devnet tokenı talep ediyoruz.
        const txhash = await connection.requestAirdrop(keypair.publicKey, 2 * LAMPORTS_PER_SOL);
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    } catch (e) {
        console.error(`Oops, something went wrong: ${e}`);
    }
})();
