import { BrowserRouter as Router } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MeetingsProvider } from './context/MeetingsContext';
import { TaskAssignmentsProvider } from './context/TaskAssignmentsContext';
import { ProjectProvider } from "./context/ProjectContext"; // Asegúrate de importar el contexto correcto
import { PlannProvider } from "./context/PlannContext"; 
import { TestCaseProvider } from './context/TestsCasesContext';

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <ProjectProvider>
        <MeetingsProvider>
          <TaskAssignmentsProvider>
            <PlannProvider>
              <TestCaseProvider>
                <Router>
                  <AnimatePresence mode="wait">
                    <AppRoutes />
                  </AnimatePresence>
                </Router>
              </TestCaseProvider>
            </PlannProvider>
          </TaskAssignmentsProvider>
        </MeetingsProvider>
      </ProjectProvider>
    </>
  );
}

export default App;
