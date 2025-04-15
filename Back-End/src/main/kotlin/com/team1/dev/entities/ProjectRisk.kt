package com.team1.dev.entities

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "project_risks")
data class ProjectRisk(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    val project: Project,

    @Column(name = "risk_description", nullable = false)
    val desc: String,

    @Column(name = "risk_status", nullable = false,)
    val status: Int, // 0 = active, 1 = mitigated, etc.

    @Column(name = "created_at", nullable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at", nullable = false)
    var updatedAt: LocalDateTime = LocalDateTime.now()
)
