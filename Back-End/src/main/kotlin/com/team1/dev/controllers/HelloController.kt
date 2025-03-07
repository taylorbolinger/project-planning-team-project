package com.team1.dev.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.CrossOrigin

data class Greeting(val message: String)

@RestController
@CrossOrigin(origins = ["http://localhost:4200" ])
@RequestMapping("/api")
class HelloController {

    @GetMapping("/hello")
    fun sayHello(): Greeting {
        return Greeting("Hello world!")
    }
}