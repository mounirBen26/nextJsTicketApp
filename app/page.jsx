import './globals.css'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quaerat commodi, sapiente expedita ex aliquam, impedit, suscipit sed modi soluta beatae. Cum earum temporibus quaerat ab accusamus reiciendis quas voluptate.</p>
      <div className='flex justify-center my-8'>
        <Link  href='/tickets'>
        <button className='btn-primary rounded-sm'>view Tickets</button>
        </Link>
      </div>
      <h2>Tickets Updates</h2>
      <div className='card'>
        <h3>New Tickets to magic destination</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus est tempore laboriosam quisquam magnam unde repellendus? Alias nesciunt ipsam vitae odio repellendus quos nihil eos repudiandae, id tenetur natus.</p>
      </div>
      <div className='card'>
        <h3>New Tickets to great destination</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus est tempore laboriosam quisquam magnam unde repellendus? Alias nesciunt ipsam vitae odio repellendus quos nihil eos repudiandae, id tenetur natus.</p>
      </div>
    </main>
  )
}
