package com.team1.dev

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.runApplication

// We do not have a database yet. TODO: Remove exclude once we have a database.
@SpringBootApplication(exclude = [DataSourceAutoConfiguration::class])
class PmApplication

fun main(args: Array<String>) {
	runApplication<PmApplication>(*args)
}
