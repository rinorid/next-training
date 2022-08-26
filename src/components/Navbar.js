import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
        <style jsx>{`
            ul.nav {
                margin:0;
                padding:0px;
                list-style:none;
                height:36px; line-height:36px;
                background:#0070f3;
                font-family:Arial, Helvetica, sans-serif;
                font-size:13px;
            }
            ul.nav li {
                border-right:1px solid #0070f3;
                float:left;
            }
            ul.nav a {
                display:block;
                padding:0 28px;
                color:#fff;
                text-decoration:none;
            }
            ul.nav a:hover,
            ul.nav li.current a {
                background:#013b7e;
            }
        `}
        </style>
        <ul className="nav">
            <li>
                <Link href="/">
                <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/avatars">
                <a>Avatar</a>
                </Link>
            </li>
            <li>
                <Link href="/backoffice">
                <a>Backoffice</a>
                </Link>
            </li>
            <li>
                <Link href="/backoffice/superadmin">
                <a>Superadmin</a>
                </Link>
            </li>
            <li>
                <Link href="/login">
                <a>Login</a>
                </Link>
            </li>
            <li>
                <Link href="/meals/csr">
                <a>CSR</a>
                </Link>
            </li>
            <li>
                <Link href="/meals/ssr">
                <a>SSR</a>
                </Link>
            </li>
            <li>
                <Link href="/meals/ssg">
                <a>SSG</a>
                </Link>
            </li>
            <li>
                <Link href="/meals/isg">
                <a>ISG</a>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar