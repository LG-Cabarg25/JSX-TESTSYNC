

const ButtonMoveTask = ({ onClick }) => {
  return (
    <div className="relative group">
      <button 
        onClick={onClick} 
        className="rounded-full p-2 bg-[#b4c6e4] hover:bg-white transition"
      >
        <img 
          src="icon/movedTask.svg" 
          height="30" 
          width="30" 
          alt="Mover Tarea" 
        />
      </button>
      <span className="tooltip-text group-hover:opacity-100 transition-opacity duration-300">
        Mover tarea
      </span>
    </div>
  );
};

export default ButtonMoveTask;
