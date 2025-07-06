import React, { useState } from 'react';

function ManageCounsellors() {
  const [counsellors, setCounsellors] = useState([
    { id: 1, name: 'Dr. Jane Doe', speciality: 'Anxiety' },
    { id: 2, name: 'Dr. John Smith', speciality: 'Depression' },
  ]);

  const [newName, setNewName] = useState('');
  const [newSpeciality, setNewSpeciality] = useState('');

  const addCounsellor = (e) => {
    e.preventDefault();
    const newId = counsellors.length + 1;
    setCounsellors([...counsellors, { id: newId, name: newName, speciality: newSpeciality }]);
    setNewName('');
    setNewSpeciality('');
  };

  const deleteCounsellor = (id) => {
    setCounsellors(counsellors.filter(c => c.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Counsellors</h1>

      <form onSubmit={addCounsellor} className="mb-6 flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border rounded px-3 py-2"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Speciality"
          className="border rounded px-3 py-2"
          value={newSpeciality}
          onChange={(e) => setNewSpeciality(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#3E4227] text-white px-4 py-2 rounded hover:bg-green-800 transition"
        >
          Add
        </button>
      </form>

      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Speciality</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {counsellors.map(c => (
            <tr key={c.id}>
              <td className="px-4 py-2 border">{c.name}</td>
              <td className="px-4 py-2 border">{c.speciality}</td>
              <td className="px-4 py-2 border">
                <button
                  onClick={() => deleteCounsellor(c.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-800 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageCounsellors;
