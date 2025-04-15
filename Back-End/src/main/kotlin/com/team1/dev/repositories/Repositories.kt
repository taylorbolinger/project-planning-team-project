package com.team1.dev.repositories

import com.team1.dev.entities.Project
import com.team1.dev.entities.ProjectEffort
import com.team1.dev.entities.ProjectManager
import com.team1.dev.entities.ProjectMember
import com.team1.dev.entities.ProjectRequirement
import com.team1.dev.entities.ProjectRisk

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProjectRepository : JpaRepository<Project, Long>

@Repository
interface ProjectEffortRepository : JpaRepository<ProjectEffort, Int>

@Repository
interface ProjectManagerRepository : JpaRepository<ProjectManager, Long> {
}

@Repository
interface ProjectMemberRepository : JpaRepository<ProjectMember, Int>

@Repository
interface ProjectRequirementRepository : JpaRepository<ProjectRequirement, Int>

@Repository
interface ProjectRiskRepository : JpaRepository<ProjectRisk, Int>
