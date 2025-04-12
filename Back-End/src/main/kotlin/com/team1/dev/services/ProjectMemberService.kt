package com.team1.dev.Services

import com.team1.dev.Entities.ProjectMember
import com.team1.dev.repositories.ProjectMemberRepository
import org.springframework.stereotype.Service

@Service
class ProjectMemberService(private val repository: ProjectMemberRepository) {
    fun findAll(): List<ProjectMember> = repository.findAll()
    fun findById(id: Int): ProjectMember? = repository.findById(id).orElse(null)
    fun save(projectMember: ProjectMember): ProjectMember = repository.save(projectMember)
    fun deleteById(id: Int) = repository.deleteById(id)
}
