import React, { createContext, useState } from 'react'

const defaultValues = {
  projectData: [],
  setProjectData: () => {},
  buttonPushed: false,
  setButtonPushed: () => {},
  modalOpen: false,
  setModalOpen: () => {},
}

export const ProjectContext = createContext(defaultValues)

export const ProjectProvider = ({ children }) => {
  
  const [projectData, setProjectData] = useState([])
  const [buttonPushed, setButtonPushed] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <ProjectContext.Provider
      value={{
        projectData,
        setProjectData,
        modalOpen, 
        setModalOpen,
        buttonPushed,
        setButtonPushed
      }}
    >
      {children}
    </ProjectContext.Provider>
  )
}
