import { createContext, useState } from "react";

export const ProjectContext = createContext({} as any);

const ProjectContextProvider = ({children}: any) => {
    const [selectedProject, setSelectedProject] = useState({});

    return (
      <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
        {children}
      </ProjectContext.Provider>
    );
};

export default ProjectContextProvider;

