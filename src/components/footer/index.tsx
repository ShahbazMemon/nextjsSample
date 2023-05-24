import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div style={{ textAlign:"center",backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <Link className='text-white' href='/' prefetch={false}>
          MDBootstrap.com
        </Link>
      </div>
  )
}

export default Footer