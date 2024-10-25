
import { toast } from 'react-toastify';

const InfoAlert = ({ message }) => {
  // Show the info toast when the component is rendered
  toast.info(message, {
    position: 'top-right',  // Correct position adjustment
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  return null;
};

export default InfoAlert;
