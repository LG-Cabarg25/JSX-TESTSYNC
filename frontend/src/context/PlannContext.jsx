import React, { createContext, useState, useContext } from "react";
import { registerTestPlan, updateTestPlan } from '../services/planService';
import { AuthContext } from './AuthContext';

const PlannContext = createContext(undefined);

export const PlannProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext) || {};

  const addPlan = async (formData) => {
    if (!token) {
      console.error('Token no disponible');
      return;
    }

    setLoading(true);
    try {
      const newPlan = await registerTestPlan(formData, token);
      setPlans([...plans, newPlan]); // Añadir el nuevo plan al estado
      console.log('Plan de prueba registrado exitosamente');
    } catch (error) {
      console.error('Error al registrar el plan de prueba');
    } finally {
      setLoading(false);
    }
  };

  const updatePlan = async (testPlanId, formData) => {
    if (!token) {
      console.error('Token no disponible');
      return;
    }

    setLoading(true);
    try {
      const updatedPlan = await updateTestPlan(testPlanId, formData, token);
      setPlans((prevPlans) =>
        prevPlans.map((plan) => (plan.test_plan_id === testPlanId ? updatedPlan : plan))
      );
      console.log('Plan de prueba actualizado exitosamente');
    } catch (error) {
      console.error('Error al actualizar el plan de prueba');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PlannContext.Provider value={{ plans, addPlan, updatePlan, loading }}>
      {children}
    </PlannContext.Provider>
  );
};

export const usePlannContext = () => {
  const context = useContext(PlannContext);
  if (!context) {
    throw new Error('usePlannContext debe usarse dentro de un PlannProvider');
  }
  return context;
};
