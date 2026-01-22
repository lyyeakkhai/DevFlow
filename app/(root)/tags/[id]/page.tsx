'use client';
import React from 'react'
import { usePathname } from 'next/navigation';

const Tags = () => {
  const pathname = usePathname();
  return (
    <div>tags page {pathname}</div>
  )
}

export default Tags