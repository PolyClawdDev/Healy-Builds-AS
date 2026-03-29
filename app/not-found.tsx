'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-5">
      <div className="text-center">
        <div className="text-[#c0392b] text-9xl font-black leading-none mb-4">404</div>
        <h1 className="text-white text-3xl font-bold mb-3 tracking-tight">Page Not Found</h1>
        <p className="text-white/40 mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/" className="btn-primary inline-flex">
          <ArrowRight size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
