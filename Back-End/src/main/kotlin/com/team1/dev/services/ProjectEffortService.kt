package com.team1.dev.Services

import com.team1.dev.Entities.ProjectEffort
import com.team1.dev.repositories.ProjectEffortRepository
import org.springframework.stereotype.Service

@Service
class ProjectEffortService(private val repository: ProjectEffortRepository) {
    fun findAll(): List<ProjectEffort> = repository.findAll()
    fun findById(id: Int): ProjectEffort? = repository.findById(id).orElse(null)
    fun save(projectEffort: ProjectEffort): ProjectEffort = repository.save(projectEffort)
    fun deleteById(id: Int) = repository.deleteById(id)
}
