import React from 'react';
import { Button } from '../ui/button';
import { CreditCard, Users, Share2, BarChart } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Digital Business Cards</span>
                <span className="block text-gold-400">for Modern Businesses</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Create, share, and track professional digital business cards. Perfect for MSME owners looking to make a lasting impression in the digital age.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button size="lg" className="w-full">
                    Get Started
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button size="lg" variant="outline" className="w-full text-white border-white hover:bg-navy-800">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-navy-800 sm:h-72 md:h-96 lg:w-full lg:h-full p-8 flex items-center justify-center">
          <div className="grid grid-cols-2 gap-8">
            <Feature icon={CreditCard} title="Digital Cards" description="Create professional digital business cards" />
            <Feature icon={Share2} title="Easy Sharing" description="Share via QR code or direct link" />
            <Feature icon={BarChart} title="Analytics" description="Track views and engagement" />
            <Feature icon={Users} title="Networking" description="Expand your business network" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-16 h-16 mx-auto bg-navy-700 rounded-lg">
        <Icon className="w-8 h-8 text-gold-400" />
      </div>
      <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </div>
  );
}