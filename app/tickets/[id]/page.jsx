async function  getTicketDetail(id){
    const res = await fetch('http://localhost:4000/tickets/'+ id,
    {
        next:{
            revalidate:60
        }
    })
    return res.json()
}


export default async function TicketsDetails({params}) {
    const ticketDetails = await getTicketDetail(params.id)
  return (
    <div className="card">
        <h2>{ticketDetails.title}</h2>
        <small className="font-bold">created by: {ticketDetails.user_email}</small>
        <p>{ticketDetails.body}</p>
        <div className={`pill ${ticketDetails.priority}`}>
            {ticketDetails.priority}
            </div>
        </div>
  )
}
