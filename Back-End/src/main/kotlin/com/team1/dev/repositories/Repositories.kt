package com.team1.dev.repositories

import com.team1.dev.Entities.Project
import com.team1.dev.Entities.ProjectEffort
import com.team1.dev.Entities.ProjectManager
import com.team1.dev.Entities.ProjectMember
import com.team1.dev.Entities.ProjectRequirement
import com.team1.dev.Entities.ProjectRisk
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ProjectRepository : JpaRepository<Project, Long>

@Repository
interface ProjectEffortRepository : JpaRepository<ProjectEffort, Int>

@Repository
interface ProjectManagerRepository : JpaRepository<ProjectManager, Long>

@Repository
interface ProjectMemberRepository : JpaRepository<ProjectMember, Int>

@Repository
interface ProjectRequirementRepository : JpaRepository<ProjectRequirement, Int>

@Repository
interface ProjectRiskRepository : JpaRepository<ProjectRisk, Int>
