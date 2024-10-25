
import { toast } from 'react-toastify';

const SuccessAlert = ({ message }) => {
  // Show the success toast when the component is rendered
  toast.success(message, {
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

export default SuccessAlert;
