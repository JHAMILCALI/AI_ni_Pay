// src/lib/wallet-config.js
export const SUPPORTED_CHAINS = [
  {
    id: 1,
    name: 'Ethereum Mainnet',
    network: 'homestead',
    rpc: 'https://mainnet.infura.io/v3/YOUR_INFURA_KEY'
  },
  {
    id: 8453,
    name: 'Base',
    network: 'base',
    rpc: 'https://mainnet.base.org'
  }
];

export const checkMetaMaskInstalled = () => {
  return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
};