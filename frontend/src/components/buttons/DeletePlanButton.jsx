

const DeletePlanButton = ({ onClick }) => {
  return (
    <div className="relative group">
      <button onClick={onClick} className="rounded-full p-2 bg-[#b4c6e4] hover:bg-white transition">
        <img src="icon/trash.svg" height="30" width="30" alt="Eliminar Proyecto" />
      </button>
      <span className="tooltip-text group-hover:opacity-100 transition-opacity duration-300">
        Eliminar Plan
      </span>
    </div>
  );
};

export default DeletePlanButton;
