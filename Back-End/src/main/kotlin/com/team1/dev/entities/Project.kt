package com.team1.dev.entities

import jakarta.persistence.*

@Entity
@Table(name = "projects")
data class Project(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,
    val name: String,
    val description: String,
    val startDate: String,
    val endDate: String,
    val status: String,

    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = false)
    val manager: ProjectManager,

    @OneToMany(mappedBy = "project", cascade = [CascadeType.ALL], orphanRemoval = true)
    val risks: List<ProjectRisk> = emptyList(),

    @OneToMany(mappedBy = "project", cascade = [CascadeType.ALL], orphanRemoval = true)
    val members: List<ProjectMember> = emptyList(),

    @OneToMany(mappedBy = "project", cascade = [CascadeType.ALL], orphanRemoval = true)
    val projectRequirements: List<ProjectRequirement> = emptyList(),

    @OneToMany(mappedBy = "project", cascade = [CascadeType.ALL], orphanRemoval = true)
    val efforts: List<ProjectEffort> = emptyList()
)

