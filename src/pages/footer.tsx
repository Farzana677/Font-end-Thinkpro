import logo from "../assets/Layer_1 (1).png";

import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Logo and Language Selection */}
      <div className="container mx-auto px-6  border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between items-center py-8">
          <div className="flex flex-col items-center sm:items-start mb-6 sm:mb-0">
            <img src={logo} alt="Think-Pro" className="h-12 mb-4" />

            <div className="w-32 h-0.5 bg-white" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded flex items-center justify-between">
              <span>ENGLISH</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded flex items-center justify-between">
              <span>CANADA</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation and Contact Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <nav className="space-y-3">
              <a href="#" className="block text-lg hover:text-gray-300">
                Home
              </a>
              <a href="#" className="block text-lg hover:text-gray-300">
                Project
              </a>
              <a href="#" className="block text-lg hover:text-gray-300">
                News
              </a>
              <a href="#" className="block text-lg hover:text-gray-300">
                Careers
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-9">
            <div>
              {/* Contact Header with Icons */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="font-semibold mb-4 sm:mb-0">CONTACT US:</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>

              {/* Contact Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-8">
                <div>
                  <h4 className="font-semibold mb-4">NORTH AMERICA</h4>
                  <div className="w-full h-0.5 bg-white mb-4" />
                  <div className="grid grid-cols-2 gap-x-16">
                    <div>
                      <h5 className="font-medium mb-2">United States</h5>
                      <ul className="space-y-2 text-white list-disc pl-4">
                        <li>Washington, DC</li>
                        <li>Los Angeles</li>
                        <li>New York</li>
                        <li>San Francisco</li>
                        <li>Seattle</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Canada</h5>
                      <ul className="space-y-2 text-white list-disc pl-4">
                        <li>Toronto</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">EUROPE</h4>
                  <div className="w-full h-0.5 bg-white mb-4" />
                  <h5 className="font-medium mb-2">United Kingdom</h5>
                  <ul className="space-y-2 text-white list-disc pl-4">
                    <li>London</li>
                    <li>Birmingham</li>
                    <li>Brighton</li>
                    <li>Glasgow</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-3xl mx-auto px-6 mb-4">
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0">
          <h2 className="text-lg font-medium mb-4 sm:mb-0 sm:mr-4">
            Subscribe to our Newsletter:
          </h2>
          <div className="flex flex-1">
            <input
              type="email"
              placeholder="Enter email/username.com"
              className="flex-1 px-4 py-3 border border-[#64AF37] rounded-l focus:outline-none text-gray-800 bg-white"
            />
            <button className="bg-[#64AF37] hover:bg-green-700 text-white px-8 py-3 rounded-r font-medium">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full h-0.5 bg-white" />
      <div className="container mx-auto px-6 py-4">
        <p className="text-sm text-white">
          Website Privacy Policy | Cookie Settings
        </p>
      </div>
    </footer>
  );
};

export default Footer;
