import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface EthereumProvider {
  request: (args: { method: "eth_requestAccounts" }) => Promise<string[]>;
  on?: (event: "accountsChanged", handler: (accounts: string[]) => void) => void;
  removeListener?: (event: "accountsChanged", handler: (accounts: string[]) => void) => void;
}

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

export const useMetaMask = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const router = useRouter();

  const connect = async () => {
    if (typeof window !== "undefined" && window.ethereum?.request) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          setIsConnected(true);
          router.push("/users"); // redirige automáticamente
        }
      } catch (err) {
        console.error("Failed to connect to MetaMask:", err);
        alert("Error al conectar MetaMask. Asegúrate de tenerla instalada y desbloqueada.");
      }
    } else {
      alert("MetaMask no está instalado");
    }
  };

  useEffect(() => {
    const ethereum = window.ethereum;
    if (ethereum?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        if (accounts.length === 0) {
          setAccount(null);
          setIsConnected(false);
        } else {
          setAccount(accounts[0]);
          setIsConnected(true);
          router.push("/users"); // opcional: redirige si cambia la cuenta
        }
      };

      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    }
  }, [router]);

  return { account, isConnected, connect };
};
