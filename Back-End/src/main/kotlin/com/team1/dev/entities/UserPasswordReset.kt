package com.team1.dev.entities

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "user_password_resets")
data class UserPasswordReset(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @Column(name = "user_id", nullable = false)
    val userId: Int,

    @Column(name = "reset_token", nullable = false)
    val resetToken: String,

    @Column(name = "created_at", nullable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    @Column(name = "updated_at", nullable = false)
    var updatedAt: LocalDateTime = LocalDateTime.now()
)
