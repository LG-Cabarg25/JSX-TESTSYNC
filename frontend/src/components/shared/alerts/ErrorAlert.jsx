
import { toast } from 'react-toastify';

const ErrorAlert = ({ message }) => {
  // Show the error toast when the component is rendered
  toast.error(message, {
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

export default ErrorAlert;
