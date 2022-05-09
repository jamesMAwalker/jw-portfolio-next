import React, { createContext, useState } from 'react'

const defaultValues = {
  projectData: [],
  setProjectData: () => {},
}

export const ProjectContext = createContext(defaultValues)

export const ProjectProvider = ({ children }) => {
  
  const [projectData, setProjectData] = useState([])
  
  return (
    <ProjectContext.Provider
      value={{
        projectData,
        setProjectData
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
