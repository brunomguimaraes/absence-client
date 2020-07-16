import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import api from '../../services/api';

import './styles.css';

type AbscenceType = "sickness" | "vacation";

interface Member {
  id: number,
  name: string,
  userId: number,
}

interface Absence {
  id: number;
  userId: number;
  type: AbscenceType;
  startDate: Date;
  endDate: Date;
}

interface Event {
  userId: number;
  name: string;
  start: Date;
  end: Date;
  title: string;
}

const CalendarComponent = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [absences, setAbsences] = useState<Absence[]>([]);
  const localizer = momentLocalizer(moment);

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
      const eventWithTitle = absences.map(absence => ({
        start: absence.startDate,
        end: absence.endDate,
        userId: absence.userId,
        title: `${members.find(
          member => member.userId === absence.userId)!.name} is 
          ${absence.type === "vacation" ?
            "on vacation"
            : "sick"}`,
        name: members.find(member => member.userId === absence.userId)!.name,
      }));

      setEvents(eventWithTitle);
    }
  }, [members, absences]);

  return (
    <>
      <div className={"CalendarContainer"}>
        {events && <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          popup
        />}
      </div>
      <a className={"DownloadLink"} href="http://localhost:3333/calendar">
        <button>
          Import Calendar
        </button>
      </a>
    </>
  )
}

export default CalendarComponent;