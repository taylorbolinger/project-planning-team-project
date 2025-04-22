package com.team1.dev.controllers

import com.team1.dev.entities.ProjectRequirement
import com.team1.dev.services.ProjectRequirementService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/project-requirements")
class ProjectRequirementController(private val service: ProjectRequirementService) {

    // Get all requirements
    @GetMapping
    fun getAllRequirements(): ResponseEntity<List<ProjectRequirement>> {
        val requirements = service.getAllRequirements()
        return ResponseEntity.ok(requirements)
    }

    // Get requirements by project ID
    @GetMapping("/{projectId}")
    fun getRequirementsByProjectId(@PathVariable projectId: Int): ResponseEntity<List<ProjectRequirement>> {
        val requirements = service.getRequirementsByProjectId(projectId)
        return ResponseEntity.ok(requirements)
    }

    // Create a new requirement
    @PostMapping
    fun createRequirement(@RequestBody requirement: ProjectRequirement): ResponseEntity<ProjectRequirement> {
        val createdRequirement = service.createRequirement(requirement)
        return ResponseEntity.ok(createdRequirement)
    }
}