package com.team1.dev.Entities

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "project_managers")
data class ProjectManager(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int = 0,

    @Column(name = "email", nullable = false, unique = true)
    val email: String,

    @Column(name = "username", nullable = false, unique = true)
    val username: String,

    @Column(name = "password", nullable = false)
    val password: String,

    @Column(name = "created_at", nullable = false, updatable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at", nullable = false)
    var updatedAt: LocalDateTime = LocalDateTime.now(),

    @OneToMany(mappedBy = "manager", cascade = [CascadeType.ALL], orphanRemoval = true)
    val projects: List<Project> = emptyList()
)
