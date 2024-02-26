import Link from "next/link"
async function getTickets(){
  const res = await fetch('http://localhost:4000/tickets',{
    next:{
        revalidate:30
    }
  })

  return  res.json()
  
}
export default async function TicketsList() {
  const tickets = await getTickets()
  return (
    <main>
      {tickets.map((ticket)=>{
        return <div className='card' key={ticket.id}>
            <Link href={`/tickets/${ticket.id}`}>
            <h2>{ticket.title}</h2>
            <p>{ticket.body.slice(0,200)}...</p>
            <div className={`pill ${ticket.priority}`}>
            {ticket.priority}
            </div>
            </Link>
        </div>
      })}
    </main>
  )
}
