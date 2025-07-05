import React, { useState } from 'react';

function ManageCounsellors() {
  const [counsellors, setCounsellors] = useState([
    { id: 1, name: 'Dr. Jane Doe', speciality: 'Anxiety' },
    { id: 2, name: 'Dr. John Smith', speciality: 'Depression' },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Counsellors</h1>
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Speciality</th>
          </tr>
        </thead>
        <tbody>
          {counsellors.map(c => (
            <tr key={c.id}>
              <td className="px-4 py-2 border">{c.name}</td>
              <td className="px-4 py-2 border">{c.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCounsellors;
