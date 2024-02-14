import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About",
  description: "Seo About",
  keywords: ['tes']
}

const AboutPage = () => {
  return (
    <div className='flex flex-col items-center p-24'>
      <span className='text-7xl'>About Page</span>
    </div>
  )
}

export default AboutPage