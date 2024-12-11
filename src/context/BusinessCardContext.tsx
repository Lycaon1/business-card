import React, { createContext, useContext, useState } from 'react';
import type { BusinessCard } from '../types/business-card';

interface BusinessCardContextType {
  businessCard: BusinessCard | null;
  setBusinessCard: (card: BusinessCard) => void;
}

const BusinessCardContext = createContext<BusinessCardContextType | undefined>(undefined);

export function BusinessCardProvider({ children }: { children: React.ReactNode }) {
  const [businessCard, setBusinessCard] = useState<BusinessCard | null>(null);

  return (
    <BusinessCardContext.Provider value={{ businessCard, setBusinessCard }}>
      {children}
    </BusinessCardContext.Provider>
  );
}

export function useBusinessCard() {
  const context = useContext(BusinessCardContext);
  if (context === undefined) {
    throw new Error('useBusinessCard must be used within a BusinessCardProvider');
  }
  return context;
}