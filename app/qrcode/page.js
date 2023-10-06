"use client"

import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function QRCodePage() {
  const qrCodeData = '294e8bb9-02ed-4d6a-8474-4b6946700dea'; // Replace with your encoded QR code string
  const qrCodeRef = useRef();

  useEffect(() => {
    if (qrCodeData && qrCodeRef.current) {
      QRCode.toCanvas(qrCodeRef.current, qrCodeData, { width: 800, height: 800 }, (error) => {
        if (error) {
          console.error('Error generating QR code:', error);
        }
      });
    }
  }, [qrCodeData]);

  return (
    <div>
      <canvas ref={qrCodeRef} width="800" height="800"/>
    </div>
  );
}
