"use client"

import Link from "next/link"
import QRCode from "qrcode"
import React, { useEffect, useRef } from "react"

export default function Page() {
  const qrCodeData = "294e8bb9-02ed-4d6a-8474-4b6946700dea" // Replace with your encoded QR code string
  const qrCodeRef = useRef()

  useEffect(() => {
    if (qrCodeData && qrCodeRef.current) {
      QRCode.toCanvas(
        qrCodeRef.current,
        qrCodeData,
        { width: 800, height: 800 },
        (error) => {
          if (error) {
            console.error("Error generating QR code:", error)
          }
        }
      )
    }
  }, [qrCodeData])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-4">
        <Link href="/customer">
          <div className="bg-blue-500 p-8 rounded-lg text-white text-center cursor-pointer hover:bg-blue-600">
            Customer
          </div>
        </Link>
        <Link href="/carrier">
          <div className="bg-green-500 p-8 rounded-lg text-white text-center cursor-pointer hover:bg-green-600">
            Carrier
          </div>
        </Link>
      </div>
    </div>
  )
}
