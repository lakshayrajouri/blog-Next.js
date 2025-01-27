import React from "react";

const d = new Date();
let year = d.getFullYear();


function Footer(){
    return <footer className="mainFooter">
              <p>© {year} Blog</p>
              <a href="https://www.instagram.com/__lakshay__rajoria__/">Instagram</a>
            </footer>
}

export default Footer;