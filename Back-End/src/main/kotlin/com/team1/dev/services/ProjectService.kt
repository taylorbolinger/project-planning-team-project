package com.team1.dev.services

import com.team1.dev.entities.Project
import com.team1.dev.entities.ProjectRisk
import com.team1.dev.repositories.ProjectRiskRepository
import com.team1.dev.repositories.ProjectRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class ProjectService @Autowired constructor(
    private val projectRepository: ProjectRepository,
    private val projectRiskRepository: ProjectRiskRepository


) {

    fun getAllProjects(): List<Project> = projectRepository.findAll()

    fun getProjectById(id: Long): Project? = projectRepository.findById(id).orElse(null)

    fun createProject(project: Project): Project = projectRepository.save(project)

    fun updateProject(id: Long, updatedProject: Project): Project? {
        return if (projectRepository.existsById(id)) {
            projectRepository.save(updatedProject)
        } else {
            null
        }
    }

    fun deleteProject(id: Long): Boolean {
        return if (projectRepository.existsById(id)) {
            projectRepository.deleteById(id)
            true
        } else {
            false
        }
    }

    fun addRiskToProject(projectId: Long, risk: ProjectRisk): ProjectRisk? {
        val project = projectRepository.findById(projectId).orElse(null) ?: return null
        val newRisk = risk.copy(project = project)
        return projectRiskRepository.save(newRisk)
    }

    fun getRisksByProject(projectId: Long): List<ProjectRisk> {
        return projectRiskRepository.findAll().filter { it.project.id == projectId }
    }
}
