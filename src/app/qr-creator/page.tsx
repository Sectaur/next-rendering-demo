'use client';

import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export default function QRCreator() {
  const [url, setUrl] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = async () => {
    try {
      const qrDataUrl = await QRCode.toDataURL(url);
      setQrCode(qrDataUrl);
    } catch (err) {
      console.error('Error generating QR code:', err);
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">QR Code Generator</h1>
      <div className="space-y-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL here"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={generateQRCode}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Generate QR Code
        </button>
        {qrCode && (
          <div className="mt-4">
            <img src={qrCode} alt="QR Code" className="mx-auto" />
          </div>
        )}
      </div>
    </div>
  );
}