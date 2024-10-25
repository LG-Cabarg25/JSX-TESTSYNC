import { useState, useContext } from "react";
import { registerMeeting } from "../services/meetingService"; // Importa el servicio
import { AuthContext } from "../context/AuthContext";

const useMeetingCreate = () => {
  const [meetingId, setMeetingId] = useState(null);
  const { token } = useContext(AuthContext); // Obtén el token desde el contexto

  const createMeeting = async (newMeeting) => {
    if (!token) {
      console.error("Token no disponible");
      return { success: false };
    }

    try {
      const data = await registerMeeting(newMeeting, token); // Usa el servicio
      setMeetingId(data.meetingId); // Asumiendo que 'meetingId' está en la respuesta
      return { success: true, meetingId: data.meetingId };
    } catch (error) {
      console.error("Error creando la reunión:", error);
      return { success: false };
    }
  };

  return { meetingId, createMeeting };
};

export default useMeetingCreate;
