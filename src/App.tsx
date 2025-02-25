import React from 'react';
import { Lock, Download, Settings, Wallet, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Lock className="h-6 w-6" />
            <span className="ml-2 font-bold text-xl">TREZOR</span>
          </div>
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800">
            Get your Trezor
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-4">
          Get started
          <span className="block text-green-700">with your new Trezor</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Download the Trezor Suite app and follow the steps to get started.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-md hover:bg-green-800 flex items-center">
            <Download className="mr-2" /> Download for desktop
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300">
            Continue in browser
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Introduction to Trezor Hardware Wallets</h2>
          <p className="text-gray-700 mb-8">
            Trezor hardware wallets are designed to provide top-notch security for your cryptocurrencies by keeping your private keys offline. This offline storage, known as cold storage, ensures that your assets are protected from online threats such as hacking and malware. With a user-friendly interface and robust security features, Trezor devices are suitable for both beginners and seasoned crypto enthusiasts.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-2 mr-4">1</span>
                  <div>
                    <h4 className="font-bold mb-2">Accessing Trezor.io/Start</h4>
                    <p className="text-gray-600">Navigate to Trezor.io/Start for comprehensive setup instructions. Always verify you're on the authentic Trezor website.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-2 mr-4">2</span>
                  <div>
                    <h4 className="font-bold mb-2">Downloading Trezor Suite</h4>
                    <p className="text-gray-600">Download and install the official desktop application for secure cryptocurrency management.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Security Setup</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-2 mr-4">3</span>
                  <div>
                    <h4 className="font-bold mb-2">Creating a Wallet Backup</h4>
                    <p className="text-gray-600">Generate and securely store your recovery seed—essential for wallet recovery.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 text-green-700 rounded-full p-2 mr-4">4</span>
                  <div>
                    <h4 className="font-bold mb-2">Establishing PIN Protection</h4>
                    <p className="text-gray-600">Set up a secure PIN for additional device protection and access control.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Lock className="h-6 w-6 mb-4" />
              <p className="text-sm text-gray-400">© 2024 Trezor</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Trezor Safe</li>
                <li>Model One</li>
                <li>Model T</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Learn</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Blog</li>
                <li>Support</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;