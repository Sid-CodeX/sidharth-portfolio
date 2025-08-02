import React from 'react';

const CertificateModal = ({ imageUrl, isOpen, onClose, name }) => {
  if (!isOpen) {
    return null;
  }

  return (
    // Outer overlay for the modal, covers the entire screen
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Inner container for the modal content with a white background */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-lg">
        {/* Close button with a distinct, easily visible style */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors z-50"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        
        {/* The certificate image itself */}
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-auto rounded-lg shadow-lg max-h-[85vh] object-contain"
        />
      </div>
    </div>
  );
};

export default CertificateModal;
