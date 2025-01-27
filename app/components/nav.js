import React from "react";
import Link from "next/link";

function Nav(){
    return <nav className="mainNav">
              <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              </ul>
            </nav>
}

export default Nav;