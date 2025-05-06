// History.jsx
import React, { useState, useEffect } from 'react';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('https://cms-2-6zsp.onrender.com/history', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setHistory(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching history:', err);
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) return <p>Loading history...</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">History</h2>
      <ul>
        {history.map((event) => (
          <li key={event._id} className="mb-4">
            <p><strong>Event:</strong> {event.event}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
