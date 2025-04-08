package com.team1.dev

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication
import org.springframework.data.jpa.repository.config.EnableJpaRepositories

// We do not have a database yet. TODO: Remove exclude once we have a database.
//@SpringBootApplication(exclude = [DataSourceAutoConfiguration::class])
@SpringBootApplication
@EnableJpaRepositories(basePackages = ["com.team1.dev.repositories"])
class PmApplication

fun main(args: Array<String>) {
	runApplication<PmApplication>(*args)
}
