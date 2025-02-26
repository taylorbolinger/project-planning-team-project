package com.team1.dev

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class PmApplication

fun main(args: Array<String>) {
	runApplication<PmApplication>(*args)
}
