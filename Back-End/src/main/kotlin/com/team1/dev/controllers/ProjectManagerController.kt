package com.team1.dev.controllers

import com.team1.dev.Entities.ProjectManager
import com.team1.dev.services.ProjectManagerService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/project-managers")
class ProjectManagerController @Autowired constructor(
    private val projectManagerService: ProjectManagerService
) {

    @GetMapping("/all")
    fun getAllProjectManagers(): List<ProjectManager> = projectManagerService.getAllProjectManagers()

    @GetMapping("/{id}")
    fun getProjectManagerById(@PathVariable id: Long): ProjectManager? = projectManagerService.getProjectManagerById(id)

    @PostMapping("/create")
    fun createProjectManager(@RequestBody projectManager: ProjectManager): ProjectManager = projectManagerService.createProjectManager(projectManager)

    @PutMapping("/update/{id}")
    fun updateProjectManager(@PathVariable id: Long, @RequestBody projectManager: ProjectManager): ProjectManager? = projectManagerService.updateProjectManager(id, projectManager)

    @DeleteMapping("/delete/{id}")
    fun deleteProjectManager(@PathVariable id: Long): String {
        return if (projectManagerService.deleteProjectManager(id)) {
            "Project Manager with id $id deleted"
        } else {
            "Project Manager with id $id not found"
        }
    }
}
