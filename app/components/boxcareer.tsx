import Link from 'next/link';
import React from 'react'
import Button from './button';
import Image from 'next/image';

interface boxProps {
    imageSource: string
}

function button({ imageSource }: boxProps) {
    return (
        <div className='box-careers w-products w-full'>
            <Image className='mx-auto' src={imageSource} alt='Image' width={64} height={64} />
            <Button buttontext='Join Us' referenceLink='/career' />
        </div>
    )
}

export default button
