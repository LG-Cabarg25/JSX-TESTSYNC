import  { useState, useEffect, useContext } from 'react';
import ButtonCommentAdd from '../../buttons/ButtonCommentAdd';
import {
  fetchProjectAssignmentComments,
  registerProjectAssignmentComment,
  deleteProjectAssignmentComment,
} from '../../../services/assignmentsCommentService';
import { AuthContext } from '../../../context/AuthContext';

const ViewTaskModal = ({
  taskDescription,
  taskStatus,
  comments,
  assignmentId,
  assignedToUserName,
  token,
  onClose,
}) => {
  const { user } = useContext(AuthContext);
  const [newComment, setNewComment] = useState('');
  const [localComments, setLocalComments] = useState([]);

  useEffect(() => {
    const loadComments = async () => {
      if (!assignmentId) return;

      try {
        const fetchedComments = await fetchProjectAssignmentComments(assignmentId, token);

        if (fetchedComments && fetchedComments.length > 0) {
          const formattedComments = fetchedComments.map((comment) => ({
            username: comment.username || 'Usuario desconocido',
            comment: comment.comments || 'Sin comentario',
            createdAt: comment.created_at || new Date().toISOString(),
            commentId: comment.commentId,
            userId: comment.user_id,
          }));

          setLocalComments(formattedComments);
        } else {
          console.log('No se recibieron comentarios del backend');
        }
      } catch (error) {
        console.error('Error al cargar los comentarios:', error);
      }
    };

    loadComments();
  }, [assignmentId, token]);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const response = await registerProjectAssignmentComment(
          {
            p_user_id: user?.user_id || 0,
            p_assignment_id: assignmentId,
            p_comments: newComment,
          },
          token
        );

        const newCommentData = {
          username: user?.username || 'Usuario actual',
          comment: newComment,
          createdAt: response.created_at || new Date().toISOString(),
          commentId: response.commentId || 0,
          userId: user?.user_id || 0,
        };

        setLocalComments((prevComments) => [...prevComments, newCommentData]);
        setNewComment('');
      } catch (error) {
        console.error('Error al agregar el comentario:', error);
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteProjectAssignmentComment(commentId, token);
      setLocalComments((prevComments) => prevComments.filter((comment) => comment.commentId !== commentId));
    } catch (error) {
      console.error('Error al eliminar el comentario:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Detalles de la Tarea</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            X
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Detalles de la tarea */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Detalles de la Tarea</h3>
            <p className="text-sm text-gray-600 mb-2">{taskDescription || 'Sin descripción'}</p>
            <p className="text-sm text-gray-500 mb-2">Estado: {taskStatus}</p>
            <p className="text-sm text-gray-500 mb-4">Asignado a: {assignedToUserName || 'Usuario desconocido'}</p>
            <div className="bg-[#e0e0e0] p-3 rounded-lg">
              <p className="text-xs font-semibold text-gray-700 mb-1">Comentario Inicial</p>
              <p className="text-sm text-gray-600">{comments || 'No hay comentario inicial'}</p>
            </div>
          </div>

          {/* Sección de comentarios */}
          <div className="p-4 border border-gray-300 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Comentarios</h3>
            <div className="max-h-60 overflow-y-auto space-y-4 mb-4">
              {localComments.length > 0 ? (
                localComments.map((comment) => (
                  <div key={comment.commentId} className="bg-[#b4c6e4] p-3 rounded-lg">
                    <p className="text-xs font-semibold text-gray-700 mb-1">{comment.username}</p>
                    <p className="text-sm text-gray-600">{comment.comment}</p>
                    <p className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
                    {comment.userId === user?.user_id && (
                      <button
                        onClick={() => handleDeleteComment(comment.commentId)}
                        className="text-xs text-red-500 hover:text-red-700"
                      >
                        Eliminar
                      </button>
                    )}
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-500">Sin comentarios</p>
              )}
            </div>

            <textarea
              className="w-full p-4 border rounded-lg mt-4"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Escribe un comentario..."
            ></textarea>

            <ButtonCommentAdd onClick={handleAddComment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskModal;