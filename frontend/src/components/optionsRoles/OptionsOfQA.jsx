
import { canDeleteTestPlan, canManageTestPlan } from '../../utils/roleValidations';
import DeletePlanButton from '../buttons/DeletePlanButton';
import EditPlanButton from '../buttons/EditTestPlanButton';

const OptionsOfQA = ({
  userRole,
  onClickUpdateTestPlan, // Este prop se utiliza para abrir el modal
  onOpenConfirmDelete, // Prop para manejar la confirmación de eliminación
}) => {
  return (
    <div className="flex space-x-3">
      {canManageTestPlan(userRole) && (
        <EditPlanButton userRole={userRole} onClick={onClickUpdateTestPlan} />
      )}
      {canDeleteTestPlan(userRole) && (
        <DeletePlanButton onClick={onOpenConfirmDelete} />
      )}
    </div>
  );
};

export default OptionsOfQA;
