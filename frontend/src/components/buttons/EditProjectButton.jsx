
import { canEditProject } from '../../utils/roleValidations';

const EditProjectButton = ({ userRole, pm_id, userId, onClick }) => {
  if (!canEditProject(userRole, pm_id, userId)) return null;

  return (
    <div className="relative group">
      <button onClick={onClick} className="rounded-full p-2 bg-[#b4c6e4] hover:bg-white transition">
        <img src="icon/config.svg" height="30" width="30" alt="Editar Proyecto" />
        <span className="tooltip-text group-hover:opacity-100 transition-opacity duration-300">
          Configurar Proyecto
        </span>
      </button>
    </div>
  );
};

export default EditProjectButton;
