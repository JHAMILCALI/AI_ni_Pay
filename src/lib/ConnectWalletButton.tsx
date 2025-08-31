"use client";

import { useMetaMask } from "./useMetaMask";

export default function ConnectWalletButton() {
  const { account, isConnected, connect } = useMetaMask();

  return (
    <button
      onClick={connect}
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      {isConnected
        ? `${account?.slice(0, 6)}...${account?.slice(-4)}`
        : "Conect wallet"}
    </button>
  );
}
