export interface BusinessCard {
  id?: string;
  businessName: string;
  ownerName: string;
  designation: string;
  profilePhoto?: string;
  businessLogo?: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
    address: string;
  };
  socialMedia: {
    linkedin?: string;
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
  businessHours: string;
  description: string;
  products: string[];
  paymentQR?: string;
}