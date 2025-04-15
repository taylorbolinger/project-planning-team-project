package com.team1.dev.entities

import jakarta.persistence.*
import java.time.LocalDateTime
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.userdetails.UserDetails

@Entity
@Table(name = "project_managers")
data class ProjectManager (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    val id: Int = 0,

    @Column(name = "email", nullable = false, unique = true)
    val email: String,

    @Column(name = "username", nullable = false, unique = true)
    val userName : String,

    @Column(name = "password", nullable = false)
    val passWord: String,

    @Column(name = "created_at", nullable = false, updatable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at", nullable = false)
    var updatedAt: LocalDateTime = LocalDateTime.now(),

    @OneToMany(mappedBy = "manager", cascade = [CascadeType.ALL], orphanRemoval = true)
    val projects: List<Project> = emptyList()
)

