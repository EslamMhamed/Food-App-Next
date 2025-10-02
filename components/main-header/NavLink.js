"use client"

import { usePathname } from "next/navigation"
import classes from "./navlink.module.css"

import Link from "next/link"

function NavLink({href , children}) {

    const path = usePathname()


  return (
        <Link href={href} className={path.startsWith(href)? `${classes.active} ${classes.link}` : classes.link} >{children}</Link>       
  )
}

export default NavLink