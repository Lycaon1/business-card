import React from 'react';
import { Phone, Mail, Globe, MapPin, Linkedin, Facebook, Instagram, Share2 } from 'lucide-react';
import { Button } from '../ui/button';
import { QRCodeSVG } from 'qrcode.react';
import { useBusinessCard } from '../../context/BusinessCardContext';
import { useNavigate } from 'react-router-dom';

export function BusinessCardView({ editable = false }) {
  const navigate = useNavigate();
  const { businessCard } = useBusinessCard();

  if (!businessCard) {
    return (
      <div className="text-center">
        <p className="text-gray-600">No business card found. Please create one first.</p>
        <Button onClick={() => navigate('/create-profile')} className="mt-4">
          Create Business Card
        </Button>
      </div>
    );
  }

  // Create a JSON string of the business card data for the QR code
  const cardData = JSON.stringify({
    businessName: businessCard.businessName,
    ownerName: businessCard.ownerName,
    designation: businessCard.designation,
    contact: businessCard.contact,
    socialMedia: businessCard.socialMedia,
    description: businessCard.description
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-navy-600 p-6 text-white">
          <h1 className="text-2xl font-bold">{businessCard.businessName}</h1>
          <p className="text-gold-300">{businessCard.designation}</p>
          <p className="mt-1">{businessCard.ownerName}</p>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-navy-600" />
              <span>{businessCard.contact.phone}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-navy-600" />
              <span>{businessCard.contact.email}</span>
            </div>
            {businessCard.contact.website && (
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-navy-600" />
                <span>{businessCard.contact.website}</span>
              </div>
            )}
            {businessCard.contact.address && (
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-navy-600" />
                <span>{businessCard.contact.address}</span>
              </div>
            )}
          </div>

          <div className="border-t pt-6">
            <p className="text-gray-600">{businessCard.description}</p>
          </div>

          <div className="border-t pt-6">
            <div className="flex space-x-4">
              {businessCard.socialMedia.linkedin && <Linkedin className="w-6 h-6 text-navy-600" />}
              {businessCard.socialMedia.facebook && <Facebook className="w-6 h-6 text-navy-600" />}
              {businessCard.socialMedia.instagram && <Instagram className="w-6 h-6 text-navy-600" />}
            </div>
          </div>

          <div className="border-t pt-6 flex justify-between items-center">
            <div className="text-center">
              <QRCodeSVG 
                value={cardData}
                size={128}
                level="H"
                includeMargin={true}
                className="bg-white p-2 rounded-lg"
              />
              <p className="text-sm text-gray-500 mt-2">Scan to view card</p>
            </div>
            <div className="space-x-3">
              {editable && (
                <Button variant="outline" onClick={() => navigate('/edit')}>
                  Edit Card
                </Button>
              )}
              <Button onClick={() => {
                navigator.clipboard.writeText(cardData);
                alert('Business card details copied to clipboard!');
              }}>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}