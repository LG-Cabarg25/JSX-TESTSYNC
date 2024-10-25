import React, { createContext, useState, useContext } from 'react';
import { getMeetingsByUserId } from '../services/meetingService'; // Importar servicio
import { AuthContext } from './AuthContext';

const MeetingsContext = createContext(undefined);

export const MeetingsProvider = ({ children }) => {
  const { token } = useContext(AuthContext) || {};
  const [meetings, setMeetings] = useState([]);

  const fetchMeetings = async (userId) => {
    if (!token) {
      return [];
    }

    try {
      const meetingsData = await getMeetingsByUserId(userId, token);
      setMeetings(meetingsData);
      return meetingsData;
    } catch (error) {
      return [];
    }
  };

  return (
    <MeetingsContext.Provider value={{ meetings, fetchMeetings, setMeetings }}>
      {children}
    </MeetingsContext.Provider>
  );
};

export const useMeetings = () => {
  const context = useContext(MeetingsContext);
  if (!context) {
    throw new Error('useMeetings debe usarse dentro de un MeetingsProvider');
  }
  return context;
};
