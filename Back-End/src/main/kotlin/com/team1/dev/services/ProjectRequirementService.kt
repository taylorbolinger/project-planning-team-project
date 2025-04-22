package com.team1.dev.services

import com.team1.dev.entities.ProjectRequirement
import com.team1.dev.repositories.ProjectRequirementRepository
import org.springframework.stereotype.Service

@Service
class ProjectRequirementService(private val repository: ProjectRequirementRepository) {

    // Fetch all requirements
    fun getAllRequirements(): List<ProjectRequirement> {
        return repository.findAll()
    }

    // Fetch requirements by project ID
    fun getRequirementsByProjectId(projectId: Int): List<ProjectRequirement> {
        return repository.findByProjectId(projectId)
    }

    // Create a new requirement
    fun createRequirement(requirement: ProjectRequirement): ProjectRequirement {
        return repository.save(requirement)
    }
}