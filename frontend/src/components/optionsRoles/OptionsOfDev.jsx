
import ButtonViewDetails from '../buttons/ButtonViewDetails';
import { canAddTask, canViewDetails } from '../../utils/roleValidations';
import ViewTaskAssigmentButton from '../buttons/ViewTaskAssigmentButton';

const OptionsOfDev = ({ userRole }) => {
  return (
    <div className="flex space-x-3">
      {canAddTask(userRole) && (
        <ViewTaskAssigmentButton 
          userRole={userRole} 
          onClick={() => console.log('Agregar tarea')} 
        />
      )}
      {canViewDetails(userRole) && (
        <ButtonViewDetails 
          userRole={userRole} 
          onClick={() => console.log('Ver detalles')} 
        />
      )}
    </div>
  );
};

export default OptionsOfDev;
