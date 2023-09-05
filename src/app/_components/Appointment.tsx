import * as React from 'react';
import { List, ListItem, ListItemText, ListSubheader, Typography } from '@mui/material';
import * as _ from 'lodash';
import type { IAppointment } from '../_types/IAppointment';

interface IProps {
  items: IAppointment[];
}

interface FormatAppointment {
  date: string;
  items: IAppointment[];
}

const formatAppointmentData = (appointments: IAppointment[]): FormatAppointment[] => {
  let result = [];
  const sortedObj = _.chain(appointments)
  .sortBy((appointment) => appointment.appointmentDate)
  .groupBy((appointment) => appointment.appointmentDate).value();

  for(const [key, value] of Object.entries(sortedObj)) {
    const appointment: FormatAppointment = {
      date: key,
      items: value,
    }
    result.push(appointment);
  }
  return result;
}

export default function Appointment(props: IProps) {

  const { items } = props;

  const formatItems: FormatAppointment[] = formatAppointmentData(items);

  return (
    formatItems.length > 0 ?
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {formatItems.map((appointmentGroup) => (
        <li key={`section-${appointmentGroup.date}`} className='appointment-date'>
          <ul>
            <ListSubheader>{`${appointmentGroup.date}`}</ListSubheader>
            {appointmentGroup.items.map((item) => (
              <ListItem key={`item-${appointmentGroup.date}-${item.appointmentTime}-${item.consultTopic}`}>
                <ListItemText primary={item.consultantName} secondary={item.consultTopic}/>
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    : (<Typography component='h3' variant='h4' align='center' width='100%'>
        There is no booking to show
      </Typography>)
  )
}
