"use client";

import { useState } from 'react';
import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import { useWallet } from '@solana/wallet-adapter-react';
import { useMetaplex } from '@/hooks/useMetaplex';
import { Metaplex, bundlrStorage, toMetaplexFile, toMetaplexFileFromBrowser, walletAdapterIdentity } from '@metaplex-foundation/js';

const SOLANA_RPC = 'https://api.devnet.solana.com';
const SESSION_HASH = 'QNDEMO' + Math.ceil(Math.random() * 1e9); // Random unique identifier for your session
const SOLANA_CONNECTION = new Connection(SOLANA_RPC, { commitment: 'finalized', httpHeaders: { "x-session-hash": SESSION_HASH } });



async function createCollectionNft(nft_metadata, image, wallet, metaplex) {

    

    const nfts = Metaplex
        .make(SOLANA_CONNECTION, { cluster: 'devnet' })
        .use(walletAdapterIdentity(wallet))
        .use(
            bundlrStorage({
                address: "https://devnet.bundlr.network",
                providerUrl: "https://api.devnet.solana.com",
                timeout: 60000,
            }))
        .nfts();

    const uploadedMetadata = await nfts.uploadMetadata({
        name: nft_metadata.name,
        symbol: nft_metadata.symbol,
        description: nft_metadata.description,
        image: await toMetaplexFileFromBrowser(image), 
        sellerFeeBasisPoints: 0, //roytalties - 100 is 1%
        isCollection: true,
        properties: {
            files: [
                {
                    type: "image/jpeg",
                    uri: await toMetaplexFileFromBrowser(image),
                },
            ]
        }
    })

    console.log(`✅ - Minted Collection NFT: ${uploadedMetadata.uri.toString()}`);
    console.log(`     https://explorer.solana.com/address/${uploadedMetadata.uri.toString()}?cluster=devnet`);

    return uploadedMetadata.uri.toString();
}


export default function Home() {
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('NO');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [collectionUri, setCollectionUri] = useState(null);

    const wallet = useWallet();
    const metaplex = useMetaplex();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let nft_metadata = {
            name: name,
            description: description,
            symbol: symbol,

        }

        let res = await createCollectionNft(nft_metadata, image, wallet, metaplex);
        setCollectionUri(res);


        // Use Metaplex, Candymachine, and Sugar to deploy and upload
        // Follow the respective documentation for these operations
        // Gee, thanks chatGPT ^^ so very helpful the above instructions
    };

    return (
        <div className="rounded-lg animate__animated animate__slideInLeft animate__fadeIn duration-500 flex flex-col justify-center items-center h-full p-8">
            <h1 className="text-3xl font-bold mb-4">Mint NFT</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="NFT Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="symbol">Symbol:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="symbol"
                        type="text"
                        value={symbol}
                        onChange={(e) => setSymbol(e.target.value)}
                        placeholder="NFT Symbol"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="description"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="NFT Description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Mint
                </button>
            </form>
        </div>

    );
}