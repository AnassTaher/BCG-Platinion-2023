"use client"

import { Button, Select } from "@chakra-ui/react"
import Link from "next/link"
import QRCode from "qrcode"
import React, { useEffect, useRef, useState } from "react"
// Sample list of passengers (you can replace this with your data)

export function DropDown() {
  const passengers = [
    {
      ticket: "d8801993-70ed-4695-bbc8-4d38d96eda81",
      journey: ["Dusseldorf", "Wuppertal", "Berlin"],
      delay: [0, 0, 30],
      wait: [false, false, true],
      canceled: false,
      active: false,
    },
    {
      ticket: "ae1dadb4-40a4-46e1-bda0-0a89cf3f2436",
      journey: ["Munich", "Wuppertal", "Berlin"],
      delay: [0, 0, 60],
      wait: [true, true, true],
      canceled: true,
      active: false,
    },
    {
      ticket: "8b20906e-9036-4cfb-aab4-0ce0774f6072",
      journey: ["Berling", "Hamburg", "Wuppertal"],
      delay: [0, 0, 0],
      wait: [false, false, false],
      canceled: false,
      active: false,
    },
  ]
  const [selectedPassenger, setSelectedPassenger] = useState(null)
  const [displayQR, setDisplayQR] = useState(false)

  const [qrCodeData, setqrCodeData] = useState("294e8bb9-02ed-4d6a-8474-4b6946700dea") // Replace with your encoded QR code string
  const qrCodeRef = useRef()

  useEffect(() => {
    if (qrCodeData && qrCodeRef.current) {
      QRCode.toCanvas(
        qrCodeRef.current,
        qrCodeData,
        { width: 400, height: 400 },
        (error) => {
          if (error) {
            console.error("Error generating QR code:", error)
          }
        }
      )
    }
  }, [qrCodeData])


  const [ticket, setTicket] = useState(null)
  const [pass, setPass] = useState(passengers[0])
  const handleChange = (selectedOption) => {
    setSelectedPassenger(selectedOption)
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-4">
        <Select
          className="w-64"
          placeholder="Select option"
          onChange={(e) => {
            const selectedTicket = e.target.value
            const selectedPassenger = passengers.find(
              (passenger) => passenger.ticket === selectedTicket
            )

            if (selectedPassenger) {
              setTicket(selectedTicket)
              setPass(selectedPassenger)
              setqrCodeData(selectedTicket)
              setDisplayQR(true)
            }
          }}
        >
          {passengers.map((passenger, ind) => (
            <option key={passenger.ticket} value={passenger.ticket}>
              {passenger.journey[0]} {"->"} {passenger.journey[1]}
            </option>
          ))}
        </Select>
      </div>

      <div className="flex justify-center items-center" style={{
        display: displayQR ? "block" : "none"
      }}>
        <canvas ref={qrCodeRef} width="400" height="400" />
      </div>
      <Button
        colorScheme="teal"
        size="sm"
        className="mt-4 flex justify-center text-center items-center bg-teal-500"
      >
        <Link href={`/customer/${pass.ticket}`}>Go to ticket</Link>
      </Button>
    </div>
  )
}
