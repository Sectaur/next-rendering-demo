'use client';
import { useState } from 'react';

export default function ClientComponentTwo({ children }: { children: React.ReactNode }) {
  const [name, setName] = useState('Batman');
  return (
    <div>
      <h1>Client Component Two</h1>
      {children}
    </div>
  );
}
