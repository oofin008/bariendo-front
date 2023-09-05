'use client';
import React from 'react'
import Appointment from '@/app/_components/Appointment'
import { IAppointment } from '@/app/_types/IAppointment';

const mockAppointments: IAppointment[] = [
  {
    appointmentDate: '2023-08-01',
    appointmentTime: '18:00',
    consultantName: 'test name',
    consultTopic: 'test topic',
  },
  {
    appointmentDate: '2023-08-01',
    appointmentTime: '19:00',
    consultantName: 'real person',
    consultTopic: '!@#$89p9',
  },
  {
    appointmentDate: '2023-08-02',
    appointmentTime: '18:00',
    consultantName: 'jake sparta',
    consultTopic: 'test',
  },
  {
    appointmentDate: '2023-08-03',
    appointmentTime: '18:00',
    consultantName: 'taksin lovetu',
    consultTopic: 'love topic',
  }
]

const page = () => {
  return (
    <Appointment
      items={mockAppointments}
    />
  )
}

export default page