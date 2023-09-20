import Link from 'next/link'
import Button from './components/button'
import React from 'react'
import ProductList from './components/productslist'
import BoxCareer from './components/boxcareer'
import app from '../public/app.png'
import webdevelopment from '../public/webdevelopment.png'
import videoanimation from '../public/videoanimation.png'
import virtualassistant from '../public/virtualassistant.png'
import salesexecutive from '../public/salesexecutive.png'
import graphicdesigne from '../public/graphicdesigne.png'
import contentwriter from '../public/contentwriter.png'
import account from '../public/account.png'


const page = async () => {
  return (
    <>
      <section className='bannerSection mb-10'>

      </section>
      <section className='mt-10'>
        <div className='container mx-auto'>
          <div className='text-center py-4'>
            <h1 className='text-7xl font-bold uppercase text-orange-600 my-5 mb-10'>Welcome To Thunder Clothings</h1>
          </div>
          <ProductList limit={3} showAll={false} />
          <div className='text-center'>
            <Link className='bg-orange-600 px-5 py-3 rounded-lg text-1xl inline-block' href={'/products'}>
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="joinUs my-10">
        <div className='container mx-auto'>
          <div className='text-center py-4'>
            <h1 className='text-7xl font-bold uppercase text-orange-600 my-5 mb-10'>Careers</h1>
          </div>
          <div className='flex flex-wrap gap-1 justify-between'>
            <BoxCareer imageSource={app} />
            <BoxCareer imageSource={webdevelopment} />
            <BoxCareer imageSource={videoanimation} />
            <BoxCareer imageSource={virtualassistant} />
            <BoxCareer imageSource={salesexecutive} />
            <BoxCareer imageSource={graphicdesigne} />
            <BoxCareer imageSource={contentwriter} />
            <BoxCareer imageSource={account} />
            <BoxCareer imageSource={app} />
          </div>
        </div>
      </section>
    </>
  )
}

export default page

