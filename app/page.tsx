import Image from 'next/image'
import ProductCard from './components/productcard'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>hello</h1>
      <Link href="/user/new">Users</Link>
      <ProductCard/>
    </main>
  )
}
