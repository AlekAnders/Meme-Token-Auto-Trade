import React, { useState } from 'react';
import { 
  Wallet, 
  Rocket,
  TrendingUp, 
  BarChart2, 
  Settings,
  DollarSign,
  AlertCircle,
  Brain,
  RefreshCw,
  LineChart,
  Wallet2,
  Grid,
  BarChart,
  Timer,
  PieChart,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [balance, setBalance] = useState("892.47");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTokens] = useState([
    { name: "BONK", price: "$0.00001428", change: "+8.2%", position: "4,827,193", value: "$68.93" },
    { name: "WIF", price: "$0.2371", change: "-3.4%", position: "1,247", value: "$295.67" },
    { name: "MYRO", price: "$0.1842", change: "+15.7%", position: "3,182", value: "$586.12" },
    { name: "TRUMP", price: "$0.0847", change: "+23.4%", position: "12,453", value: "$1,054.77" },
    { name: "POPCAT", price: "$0.00002156", change: "+5.8%", position: "2,847,921", value: "$61.40" },
    { name: "SLERF", price: "$0.00004721", change: "-2.1%", position: "1,523,674", value: "$71.93" },
    { name: "BOME", price: "$0.00000892", change: "+12.3%", position: "8,234,567", value: "$73.45" },
    { name: "SMOG", price: "$0.0534", change: "-1.7%", position: "15,234", value: "$813.49" }
  ]);

  const bots = [
    { name: "AI Trading Bot", icon: Brain, status: "active" },
    { name: "Triangular Arbitrage Bot", icon: RefreshCw, status: "active" },
    { name: "Pump & Dump Detection Bot", icon: LineChart, status: "idle" },
    { name: "Scalping Bot", icon: BarChart2, status: "active" },
    { name: "Margin Trading Bot", icon: Wallet2, status: "active" },
    { name: "Grid Trading Bot", icon: Grid, status: "idle" },
    { name: "DCA Bot", icon: BarChart, status: "active" },
    { name: "Futures Trading Bot", icon: Timer, status: "idle" },
    { name: "Portfolio Rebalancing Bot", icon: PieChart, status: "active" },
    { name: "New Token Listing Bot", icon: Sparkles, status: "active" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-200 ease-in-out w-64 bg-gray-800 border-r border-gray-700 p-6 overflow-y-auto`}>
        <div className="flex items-center space-x-2 mb-8">
          <Rocket className="text-purple-500" size={24} />
          <h1 className="text-xl font-bold">Meme Token Trading Bot</h1>
        </div>

        <nav className="space-y-2">
          {bots.map((bot, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="flex items-center space-x-3">
                <bot.icon size={20} className="text-purple-400" />
                <span className="text-sm">{bot.name}</span>
              </div>
              <span className={`px-2 py-1 rounded text-xs ${
                bot.status === 'active' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
              }`}>
                {bot.status === 'active' ? 'Active' : 'Idle'}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-gray-700 rounded-lg px-4 py-2">
                <Wallet className="text-purple-400 mr-2" size={20} />
                <span className="font-mono">{balance} SOL</span>
              </div>
              <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors">
                <Settings size={20} />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">24h Volume</h3>
                <BarChart2 className="text-purple-500" size={20} />
              </div>
              <p className="text-2xl font-bold">$127,849.32</p>
              <p className="text-green-400 text-sm">+9.3%</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Active Trades</h3>
                <TrendingUp className="text-purple-500" size={20} />
              </div>
              <p className="text-2xl font-bold">13</p>
              <p className="text-gray-400 text-sm">Last 24 hours</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-400">Total Profit</h3>
                <DollarSign className="text-purple-500" size={20} />
              </div>
              <p className="text-2xl font-bold">+$3,847.29</p>
              <p className="text-green-400 text-sm">+12.8% this week</p>
            </div>
          </div>

          {/* Active Positions */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-purple-500/50 transition-colors">
            <h2 className="text-xl font-bold mb-6">Active Positions</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-gray-400 border-b border-gray-700">
                    <th className="text-left pb-4">Token</th>
                    <th className="text-right pb-4">Price</th>
                    <th className="text-right pb-4">24h Change</th>
                    <th className="text-right pb-4">Position</th>
                    <th className="text-right pb-4">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTokens.map((token, index) => (
                    <tr key={index} className="border-b border-gray-700 last:border-0 hover:bg-gray-700/50 transition-colors">
                      <td className="py-4">{token.name}</td>
                      <td className="text-right py-4">{token.price}</td>
                      <td className={`text-right py-4 ${
                        token.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>{token.change}</td>
                      <td className="text-right py-4">{token.position}</td>
                      <td className="text-right py-4">{token.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Risk Warning */}
          <div className="mt-8 bg-red-900/20 border border-red-700 rounded-xl p-4 flex items-start space-x-3">
            <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
            <p className="text-sm text-red-400">
              Trading meme tokens involves substantial risk of loss. Past performance is not indicative of future results.
              Only trade with funds you can afford to lose.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;