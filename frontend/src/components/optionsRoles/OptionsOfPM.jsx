
import EditProjectButton from '../buttons/EditProjectButton';
import ButtonAddTask from '../buttons/ButtonAddTask';
import DeleteProjectButton from '../buttons/DeleteProjectButton';
import AddTeamProject from '../buttons/AddTeamProject';

const OptionsOfPM = ({
  userRole,
  p_pm_id,
  userId,
  onOpenModal,
  onOpenTeamModal,
  onOpenConfirmDelete,
  onOpenTaskModal, // Recibir la función para abrir el modal de tareas
}) => {
  return (
    <div className="flex space-x-3">
      <EditProjectButton 
        userRole={userRole} 
        pm_id={p_pm_id} 
        userId={userId} 
        onClick={onOpenModal} 
      />
      {/* Usar la función onOpenTaskModal en ButtonAddTask */}
      <ButtonAddTask 
        userRole={userRole} 
        onClick={onOpenTaskModal} 
      /> 
      <DeleteProjectButton onClick={onOpenConfirmDelete} />
      <AddTeamProject userRole={userRole} onClick={onOpenTeamModal} />
    </div>
  );
};

export default OptionsOfPM;
