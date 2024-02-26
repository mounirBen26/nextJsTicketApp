import Link from "next/link"
import Image from "next/image"
import logo from './airplane-ticket.png'
export default function Navbar() {
  return (
    <nav>
        <Image 
        src={logo}
        alt="logo"
        width={50}
        placeholder="blur"
        quality={100}
        />
        <h1>Tickets Manager</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}
