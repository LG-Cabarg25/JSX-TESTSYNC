import React, { createContext, useContext, useState } from 'react';

// Crea el contexto
const TestCaseContext = createContext(undefined);

// Proveedor del contexto
export const TestCaseProvider = ({ children }) => {
  const [testCases, setTestCases] = useState([]);

  const addTestCase = (testCase) => {
    setTestCases((prev) => [...prev, testCase]);
  };

  const updateTestCase = (updatedTestCase) => {
    setTestCases((prevTestCases) =>
      prevTestCases.map((testCase) =>
        testCase.test_case_id === updatedTestCase.test_case_id ? updatedTestCase : testCase
      )
    );
  };

  return (
    <TestCaseContext.Provider value={{ testCases, addTestCase, updateTestCase }}>
      {children}
    </TestCaseContext.Provider>
  );
};

// Hook para usar el contexto
export const useTestCaseContext = () => {
  const context = useContext(TestCaseContext);
  if (!context) {
    throw new Error('useTestCaseContext debe usarse dentro de un TestCaseProvider');
  }
  return context;
};
