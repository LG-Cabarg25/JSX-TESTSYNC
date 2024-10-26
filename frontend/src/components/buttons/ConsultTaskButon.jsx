

const ConsultTaskButton = ({ userRole, onClick }) => {
  // Si el rol no tiene acceso para consultar tareas, no mostramos el botón
  if (userRole !== 'PM' && userRole !== 'QA' && userRole !== 'Developer') return null;

  return (
    <button onClick={onClick} className="rounded-full p-2 bg-[#b4c6e4] hover:bg-white transition">
      <img src="icon/consulttask.svg" height="30" width="30" alt="Consultar Tareas" />
    </button>
  );
};

export default ConsultTaskButton;
