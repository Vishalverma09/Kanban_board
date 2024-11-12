import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css';


function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [groupBy, setGroupBy] = useState('priority'); // Default grouping by 'priority'

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        setTickets(response.data.tickets || response.data); // Adjust according to actual data structure
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];
      if (!acc[key]) acc[key] = [];
      acc[key].push(ticket);
      return acc;
    }, {});
  };


  const groupedTickets = groupTickets(tickets, groupBy);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Kanban Board</h1>
      
      {/* Dropdown to change grouping */}
      <label style={{padding:'5px', bottom:'5px'}}>Display:</label>
      <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)} style={{bottom:'5px',border: '2px solid #555555',}}>
        <option value="priority">Priority</option>
        <option value="user">User</option>
        <option value="status">Status</option>
      </select>

      <div style={{ display: 'flex', gap: '20px' }}>
        {Object.keys(groupedTickets).map((group) => (
          <div key={group} style={{ border: '1px solid #ddd', padding: '10px', minWidth: '200px',backgroundColor:"whitesmoke"}}>
            <h2>{group}</h2>
            {groupedTickets[group].map((ticket) => (
              <div key={ticket.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px', borderRadius:'5px'}}>
                <h3>{ticket.title}</h3>
                <p>{ticket.description}</p>
                <p><strong>Priority:</strong> {ticket.priority}</p>
                <p><strong>Status:</strong> {ticket.status}</p>
                <p><strong>User:</strong> {ticket.userId}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default KanbanBoard;
