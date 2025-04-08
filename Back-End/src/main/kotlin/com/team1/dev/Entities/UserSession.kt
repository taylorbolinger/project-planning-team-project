package com.team1.dev.Entities

import jakarta.persistence.*

@Entity
@Table(name = "user_sessions")
data class UserSession(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @Column(name = "session_token", nullable = false, unique = true)
    val sessionToken: String,

//    @ManyToOne
//    @JoinColumn(name = "user_id", nullable = false)
//    val user: ManagerUser
//
)
