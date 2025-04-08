package com.team1.dev.services

import com.team1.dev.Entities.ProjectManager
import com.team1.dev.repositories.ProjectManagerRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ProjectManagerService @Autowired constructor(
    private val projectManagerRepository: ProjectManagerRepository
) {

    fun getAllProjectManagers(): List<ProjectManager> = projectManagerRepository.findAll()

    fun getProjectManagerById(id: Long): ProjectManager? = projectManagerRepository.findById(id).orElse(null)

    fun createProjectManager(projectManager: ProjectManager): ProjectManager = projectManagerRepository.save(projectManager)

    fun updateProjectManager(id: Long, updatedProjectManager: ProjectManager): ProjectManager? {
        return if (projectManagerRepository.existsById(id)) {
            projectManagerRepository.save(updatedProjectManager)
        } else {
            null
        }
    }

    fun deleteProjectManager(id: Long): Boolean {
        return if (projectManagerRepository.existsById(id)) {
            projectManagerRepository.deleteById(id)
            true
        } else {
            false
        }
    }
}
