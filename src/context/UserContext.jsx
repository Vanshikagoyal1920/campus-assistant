import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {

  const [studentName, setStudentName] = useState("Vanshika");

  return (
    <UserContext.Provider
      value={{ studentName, setStudentName }}
    >
      {children}
    </UserContext.Provider>
  );
}
