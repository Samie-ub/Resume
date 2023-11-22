import React from 'react'
import styles from "../navbar.module.css"
import Link from 'next/link'
function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <Link href={"/"}>
        <h1>Resume <img width="10" height="10" src="https://img.icons8.com/material-sharp/24/14a800/filled-circle.png" alt="filled-circle"/></h1>
      </Link>
    </div>
  )
}

export default Navbar