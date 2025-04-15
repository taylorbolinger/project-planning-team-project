package com.team1.dev.entities

import jakarta.persistence.*
import java.time.LocalDate

@Entity
@Table(name = "project_efforts")
data class ProjectEffort(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Int = 0,

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    val project: Project,

    @Column(name = "entry_date", nullable = false)
    val entryDate: LocalDate,

    @Column(name = "reqs_analysis", nullable = false)
    val reqsAnalysis: Int,

    @Column(name = "design", nullable = false)
    val design: Int,

    @Column(name = "coding", nullable = false)
    val coding: Int,

    @Column(name = "testing", nullable = false)
    val testing: Int,

    @Column(name = "proj_mgmt", nullable = false)
    val projMgmt: Int
)
