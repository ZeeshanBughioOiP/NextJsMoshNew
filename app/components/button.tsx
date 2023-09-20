'use client';
import Link from 'next/link';
import React from 'react'

interface buttonProps {
  buttontext: string
  referenceLink: string
}

function button({ buttontext, referenceLink }: buttonProps) {
  return (
    <Link className='bg-orange-600 px-3 py-2 text-white inline-block mt-4 rounded-lg' href={referenceLink}>
      {buttontext}
    </Link>
  )
}

export default button
