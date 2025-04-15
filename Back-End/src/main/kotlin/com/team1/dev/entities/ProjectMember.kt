package com.team1.dev.entities

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "project_members")
data class ProjectMember(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    val project: Project,

    @Column(name = "fname", nullable = false)
    val firstName: String,

    @Column(name = "lname", nullable = false)
    val lastName: String,

    @Column(name = "email", nullable = false, unique = true)
    val email: String,

    @Column(name = "created_at", nullable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at", nullable = false)
    var updatedAt: LocalDateTime = LocalDateTime.now()
)
