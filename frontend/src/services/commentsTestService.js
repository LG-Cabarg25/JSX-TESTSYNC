import axios from "axios";
import { SERVIDOR } from "./Servidor";

// Función para publicar un comentario
export const postComment = async (commentData, token) => {
  try {
    const response = await axios.post(
      `${SERVIDOR}/api/test-comments/register`,
      {
        p_test_case_id: commentData.test_case_id, // Cambiar a p_test_case_id
        p_comment_text: commentData.comment_text, // Cambiar a p_comment_text
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error al agregar comentario", error.message);
    }
    throw error;
  }
};

// Función para obtener los comentarios de un caso de prueba
export const fetchComments = async (testCaseId, token) => {
  try {
    const response = await axios.get(
      `${SERVIDOR}/api/test-comments/test-case/${testCaseId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error", error.message);
    }
    throw error;
  }
};
