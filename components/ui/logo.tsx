import Link from 'next/link'
import logo from '../images/logo.png'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <div>
      <img src = "../images/logo.png" width= '60px'></img>
      </div>
    </Link>
  )
}
