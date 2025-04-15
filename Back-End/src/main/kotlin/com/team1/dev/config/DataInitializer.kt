package com.team1.dev.config

import com.team1.dev.entities.*
import com.team1.dev.repositories.*
import jakarta.annotation.PostConstruct
import org.springframework.stereotype.Component
import java.time.LocalDate
import java.time.LocalDateTime

@Component
class DataInitializer(
    private val projectRepository: ProjectRepository,
    private val projectManagerRepository: ProjectManagerRepository,
    private val projectRiskRepository: ProjectRiskRepository,
    private val projectMemberRepository: ProjectMemberRepository,
    private val projectRequirementRepository: ProjectRequirementRepository,
    private val projectEffortRepository: ProjectEffortRepository
) {

    @PostConstruct
    fun initializeData() {
        // Purge the database
        projectEffortRepository.deleteAll()
        projectRequirementRepository.deleteAll()
        projectMemberRepository.deleteAll()
        projectRiskRepository.deleteAll()
        projectRepository.deleteAll()
        projectManagerRepository.deleteAll()

        // Add fake data
        val managers = (1..5).map {
            projectManagerRepository.save(ProjectManager(userName = "Manager $it", email = "manager$it@example.com", passWord = "password$it"))
        }

        val projects = (1..5).map {
            projectRepository.save(
                Project(
                    name = "Project $it",
                    description = "Description for Project $it",
                    startDate = "2025-01-01",
                    endDate = "2025-12-31",
                    status = "Active",
                    manager = managers[it % managers.size]
                )
            )
        }

        projects.forEach { project ->
            (1..3).forEach { i ->
                projectRiskRepository.save(
                    ProjectRisk(
                        project = project,
                        desc = "Risk $i for ${project.name}",
                        status = 0
                    )
                )

                projectMemberRepository.save(
                    ProjectMember(
                        project = project,
                        firstName = "MemberFirst$i",
                        lastName = "MemberLast$i",
                        email = "member$i@${project.name}.com"
                    )
                )

                projectRequirementRepository.save(
                    ProjectRequirement(
                        project = project,
                        description = "Requirement $i for ${project.name}",
                        priority = i,
                        type = i % 2
                    )
                )

                projectEffortRepository.save(
                    ProjectEffort(
                        project = project,
                        entryDate = LocalDate.now(),
                        reqsAnalysis = i * 2,
                        design = i * 3,
                        coding = i * 4,
                        testing = i * 5,
                        projMgmt = i * 6
                    )
                )
            }
        }
    }
}
