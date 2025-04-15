package com.team1.dev.entities

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "project_requirements")
data class ProjectRequirement(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @Column(name = "description") // Renamed from "desc" to "description"
    val description: String,

    @Column(name = "priority", nullable = false)
    val priority: Int,

    @Column(name = "type", nullable = false)
    val type: Int,

    @Column(name = "created_at", nullable = false, updatable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at", nullable = false)
    var updatedAt: LocalDateTime = LocalDateTime.now(),

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    val project: Project
)
