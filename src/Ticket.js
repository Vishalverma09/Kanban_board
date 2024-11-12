// Ticket.js
import React from 'react';

function Ticket({ ticket }) {
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
      <p>Priority: {ticket.priority}</p>
      <p>User: {ticket.user}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default Ticket;
