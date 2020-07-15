
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Member {
  id: number,
  name: string,
  crewId: number,
  image: string,
  userId: number,
}

const MembersTable = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    api.get('members').then(response => {
      setMembers(response.data);
    })
  }, []);

  return (
    <div className={"MembersTable"}>
      <h1>User Table</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Image Url</th>
          <th>Crew ID</th>
          <th>User ID</th>
        </tr>
        {members.map(member => (
          <tr key={member.id}>
            <td>{member.name}</td>
            <td>{member.image}</td>
            <td>{member.crewId}</td>
            <td>{member.userId}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default MembersTable;
