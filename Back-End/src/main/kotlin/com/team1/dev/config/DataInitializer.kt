package com.team1.dev.Config

import com.team1.dev.Entities.*
import com.team1.dev.repositories.ProjectManagerRepository
import com.team1.dev.repositories.ProjectRepository
import jakarta.annotation.PostConstruct
import org.springframework.stereotype.Component
import java.time.LocalDateTime

@Component
class DataInitializer(
    private val projectManagerRepository: ProjectManagerRepository
    ,
    private val projectRepository: ProjectRepository
) {

}
