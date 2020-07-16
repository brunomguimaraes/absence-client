
import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';

import api from '../../services/api';

import 'antd/dist/antd.css';
import './styles.css';

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
  const [absencesWithEmployee, setAbsencesWithEmployee] = useState<AbsenceWithMember[]| any>();
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

  
  const tableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => { return a.name.localeCompare(b.name)},
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type: string) => <Tag color={type === "vacation" ? "green" : "orange"}>{type}</Tag>,
      sorter: (a: any, b: any) => { return a.type.localeCompare(b.type)},
    },
    {
      title: 'From',
      dataIndex: 'startDate',
      key: 'startDate',
    },
    {
      title: 'To',
      dataIndex: 'endDate',
      key: 'endDate',
    },
    
  ];

  return (
    <div className={"AbsenceTable"}>
      <h1>Absences:</h1>
      {absencesWithEmployee && <Table columns={tableColumns} dataSource={absencesWithEmployee!} />}
    </div>
  );
};

export default AbsenceTable;