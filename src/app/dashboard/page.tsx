"use client";
import { useState } from "react";

export default function Dashboard() {


  const [name, setName] = useState('');

  console.log('client rendering dashboard');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Dashboard Page</h1>
      <input
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p className="mt-4 text-lg">Hello {name}</p>
    </div>
  );
}