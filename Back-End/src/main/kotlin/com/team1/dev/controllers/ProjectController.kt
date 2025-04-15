package com.team1.dev.controllers

import com.team1.dev.entities.Project
import com.team1.dev.entities.ProjectRisk
import com.team1.dev.services.ProjectService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/projects")
class ProjectController @Autowired constructor(
    private val projectService: ProjectService
) {

    @GetMapping("/all")
    fun getAllProjects(): List<Project> = projectService.getAllProjects()

    @GetMapping("/{id}")
    fun getProjectById(@PathVariable id: Long): Project? = projectService.getProjectById(id)

    @PostMapping("/create")
    fun createProject(@RequestBody project: Project): Project = projectService.createProject(project)

    @PutMapping("/update/{id}")
    fun updateProject(@PathVariable id: Long, @RequestBody project: Project): Project? = projectService.updateProject(id, project)

    @DeleteMapping("/delete/{id}")
    fun deleteProject(@PathVariable id: Long): String {
        return if (projectService.deleteProject(id)) {
            "Project with id $id deleted"
        } else {
            "Project with id $id not found"
        }
    }

    @PostMapping("/{projectId}/risks")
    fun addRiskToProject(@PathVariable projectId: Long, @RequestBody risk: ProjectRisk): ProjectRisk? {
        return projectService.addRiskToProject(projectId, risk)
    }

    @GetMapping("/{projectId}/risks")
    fun getRisksByProject(@PathVariable projectId: Long): List<ProjectRisk> {
        return projectService.getRisksByProject(projectId)
    }
}
