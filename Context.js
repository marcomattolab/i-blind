import React, { createContext, useState } from "react";

const AppItems = createContext();

const AppContext = ({ children }) => {
  const [completed, setCompleted] = useState([]);
  const [workout, setWorkout] = useState(0);
  return (
    <AppItems.Provider
      value={{
        completed,
        setCompleted,
        workout,
        setWorkout
      }}
    >
      {children}
    </AppItems.Provider>
  );
};

export { AppContext, AppItems }