import Link from 'next/link'
import React from 'react'
import style from './page.module.css';

const Header = () => {
  return (
    <div style={{backgroundColor:"ButtonFace", width: "100%", padding: "20px 10px" }}>
        <Link href='/'>Home</Link>
    </div>
  )
}

export default Header