
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Member {
  id: number,
  name: string,
  crewId: number,
  image: string,
  userId: number,
}

interface Absence {
  id: number;
  admitterId: number;
  crewId: number;
  userId: number;
  admitterNote: string;
  memberNote: string;
  type: "sickness" | "vacation";
  createdAt: Date;
  rejectedAt: Date;
  confirmedAt: Date;
  startDate: Date;
  endDate: Date;
}

type AbsenceWithMember = Member & Absence;


const AbsenceTable = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [absencesWithEmployee, setAbsencesWithEmployee] = useState<AbsenceWithMember[]| any>([]);
  const [absences, setAbsences] = useState<Absence[]>([]);

  useEffect(() => {
    api.get('members').then(response => {
      setMembers(response.data);
    })
    api.get('absences').then(response => {
      setAbsences(response.data);
    })
  }, []);

  useEffect(() => {
    if (members && absences) {
      const absencesWithMembers = absences.map(absence => ({
        ...absence,
        ...members.find((member) => (member.userId === absence.userId && member))
    }));
    setAbsencesWithEmployee(absencesWithMembers);
    }
  }, [members, absences]);

  return (
    <div className={"AbsenceTable"}>
      <h1>Absences:</h1>
      <table>
        <tbody>
          {absencesWithEmployee!.map((obj: AbsenceWithMember) => (
            <tr key={obj.id}>
              <td>{obj.name}</td>
              <td>{obj.type}</td>
              <td>{obj.startDate}</td>
              <td>{obj.endDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AbsenceTable;