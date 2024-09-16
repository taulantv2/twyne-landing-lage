"use client";
import { Coins, Users, TrendingUp, Shield } from "lucide-react";
import Link from 'next/link';
import { useEffect, useRef, useState, useMemo } from 'react';

export default function Component() {
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const [currentProtocol, setCurrentProtocol] = useState(0);
  const protocols = useMemo(() => ['Aave', 'Morpho', 'Euler', 'Onchain Lending'], []);

  useEffect(() => {
    const animate = () => {
      if (circle1Ref.current && circle2Ref.current) {
        const time = Date.now() / 1000;
        const amplitude = 100; // Amplitude to ensure circles stay within view
        const translateY1 = Math.sin(time * 0.5) * amplitude;
        const translateX1 = Math.cos(time * 0.5) * amplitude;
        const translateY2 = Math.sin(time * 0.5 + Math.PI) * amplitude;
        const translateX2 = Math.cos(time * 0.5 + Math.PI) * amplitude;
        circle1Ref.current.style.transform = `translate(${translateX1}px, ${translateY1}px)`;
        circle2Ref.current.style.transform = `translate(${translateX2}px, ${translateY2}px)`;
      }
      requestAnimationFrame(animate);
    };
    animate();
  
    const intervalId = setInterval(() => {
      setCurrentProtocol((prev) => (prev + 1) % protocols.length);
    }, 3000);
  
    return () => clearInterval(intervalId);
  }, [protocols]);

  return (
    <div className="relative flex flex-col min-h-screen overflow-hidden bg-white text-gray-800">
      {/* Animated Circles */}
      <div
        ref={circle1Ref}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-300 opacity-30 blur-3xl"
        style={{ transition: 'transform 0.5s ease-out' }}
      />
      <div
        ref={circle2Ref}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-200 opacity-30 blur-3xl"
        style={{ transition: 'transform 0.5s ease-out' }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="px-4 lg:px-6 h-16 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Coins className="h-6 w-6 text-purple-600" />
            <span className="ml-2 text-2xl font-bold text-purple-600">Twyne</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#get-started">
              <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-full shadow-md hover:bg-purple-700 transition-colors">
                Coming Soon
              </button>
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p className="text-lg md:text-xl text-purple-600 mb-4">
              Earn, Borrow and Liquidate
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4 text-gray-900">
              Unlocking
              <br />
              <span className="relative inline-block h-[1.2em] w-full overflow-hidden">
                {protocols.map((protocol, index) => (
                  <span
                    key={protocol}
                    className="absolute inset-0 w-full flex items-center justify-center transition-all duration-300 ease-in-out"
                    style={{
                      opacity: currentProtocol === index ? 1 : 0,
                      transform: `translateY(${(index - currentProtocol) * 100}%)`,
                    }}
                  >
                    {protocol}
                  </span>
                ))}
              </span>
            </h1>
            <p className="text-md md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Restaking Service for Onchain Lending Markets
            </p>
            <div className="flex justify-center">
              <Link href="#get-started">
                <button className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full shadow-md hover:bg-purple-700 transition-colors">
                  Coming Soon
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Second Page */}
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Lenders Section */}
            <div className="bg-purple-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Lender</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Gives up borrowing power for more yield
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <strong>Earn dual rewards:</strong> 
                <li>Aave deposit rates</li>
                <li>Twyne credit delegation rates</li>
              </ul>
            </div>

            {/* Borrowers Section */}
            <div className="bg-purple-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Borrower</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Gives up yield for more borrowing power
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <strong>Use Aave, but better:</strong> 
                <li>Boost Borrowing power on existing Aave collateral</li>
                <li>Use more Tokens as Collateral</li>
              </ul>
            </div>

            {/* Liquidators Section */}
            <div className="bg-purple-50 rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-900">Liquidator</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Earns yield while securing the protocol
              </p>
              <ul className="list-disc list-inside text-gray-600">
                <strong>Buy assets at a Discount:</strong> 
                <li>Liquidate without a technical setup</li>
                <li>Earn dual rewards until liquidation</li>
              </ul>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            These functionalities are fully permissionless built on top, requiring no governance votes or changes within the Aave protocol, ensuring a seamless and efficient user experience.
          </p>
        </div>
      </div>
    </div>
  );
}