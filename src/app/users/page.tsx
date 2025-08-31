"use client";

import React, { useState } from 'react';

export default function AyniPayDashboard() {
  const [showBalance, setShowBalance] = useState(true);
  const [paymentCommand, setPaymentCommand] = useState('');

  const handleDisconnectWallet = () => {
    // Simular desconexión y redirección
    alert('Wallet desconectada. Redirigiendo al inicio...');
    // En una app real, aquí harías la redirección
    window.location.href = '/';
  };

  const handleSendPayment = () => {
    if (paymentCommand.trim()) {
      // Simular procesamiento de pago con IA
      alert(`Procesando pago: "${paymentCommand}"`);
      setPaymentCommand('');
    }
  };

  const quickCommands = [
    'Pay josé 25 USDC',
    'Pay mom 25 USDT',
    'Pay sarah 10 ETH'
  ];

  const recentTransactions = [
    {
      id: 1,
      name: 'José Martinez',
      avatar: '👨‍💼',
      amount: '-25 USDT',
      status: 'completed',
      time: '2m ago',
      type: 'sent'
    },
    {
      id: 2,
      name: 'Sarah Chen',
      avatar: '👩‍💻',
      amount: '+0.05 ETH',
      status: 'completed',
      time: '1h ago',
      type: 'received'
    },
    {
      id: 3,
      name: 'Mom',
      avatar: '👩‍🦳',
      amount: '-100 USDT',
      status: 'pending',
      time: '3h ago',
      type: 'sent'
    }
  ];

  const balances = [
    { symbol: 'USDT', amount: '8,500.00' },
    { symbol: 'ETH', amount: '2.45' },
    { symbol: 'BTC', amount: '0.12' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
            📱
          </div>
          <h1 className="text-2xl font-bold text-gray-900">AyniPay</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
          <button 
            onClick={handleDisconnectWallet}
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            💳
            Desconectar
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Section */}
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">✨</span>
            <h2 className="text-xl font-semibold text-gray-900">Natural Language Payment</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Type or speak your payment command naturally, like <strong>Pay José 10 USDT</strong>
        </p>


          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={paymentCommand}
              onChange={(e) => setPaymentCommand(e.target.value)}
              placeholder="e.g., Send 50 USDT to Maria for dinner"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-black"
              onKeyPress={(e) => e.key === 'Enter' && handleSendPayment()}
            />
            <button className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-xl">
              🎤
            </button>
            <button 
              onClick={handleSendPayment}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors flex items-center gap-2 text-lg"
            >
              ➤
            </button>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-3">Quick examples:</p>
            <div className="flex flex-wrap gap-2">
              {quickCommands.map((command, index) => (
                <button
                  key={index}
                  onClick={() => setPaymentCommand(command)}
                  className="px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700 transition-colors"
                >
                  {command}
                </button>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
              <button className="p-1 hover:bg-gray-100 rounded text-lg">
                ⋯
              </button>
            </div>

            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-lg">
                      {transaction.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.name}</p>
                      <p className="text-sm text-gray-500">{transaction.time}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${
                      transaction.type === 'received' ? 'text-green-600' : 'text-gray-900'
                    }`}>
                      {transaction.amount}
                    </p>
                    <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                      transaction.status === 'completed' 
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Balance Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Total Balance</h3>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="p-1 hover:bg-gray-100 rounded text-lg"
              >
                {showBalance ? '👁️' : '🙈'}
              </button>
            </div>

            <div className="mb-2">
              <p className="text-3xl font-bold text-gray-900">
                {showBalance ? '$12,847.32' : '••••••'}
              </p>
              <div className="flex items-center gap-1 text-sm text-green-600">
                📈
                <span>+2.5% from last week</span>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              {balances.map((balance, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-600">{balance.symbol}</span>
                  <span className="font-medium">
                    {showBalance ? balance.amount : '••••'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <button className="w-full flex items-center justify-center gap-2 p-3 border-2 border-dashed border-gray-200 rounded-lg hover:border-gray-300 transition-colors text-gray-600">
              📱
              Scan QR Code
            </button>
          </div>

          {/* AI Status */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">AI Assistant Active</span>
            </div>
            <p className="text-sm opacity-90">
              Ready to process natural language payments with maximum security on BASE network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}