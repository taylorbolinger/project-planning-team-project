package com.team1.dev.config

import com.team1.dev.services.ProjectManagerService
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain

@Configuration
class SecurityConfig {

//    @Bean
//    fun passwordEncoder(): PasswordEncoder = BCryptPasswordEncoder()
//
//    @Bean
//    fun authenticationManager(authManagerBuilder: AuthenticationManagerBuilder): AuthenticationManager {
//        authManagerBuilder.userDetailsService(projectManagerService).passwordEncoder(passwordEncoder())
//        return authManagerBuilder.build()
//    }
//
    @Bean
    fun securityFilterChain(http: HttpSecurity): SecurityFilterChain {
        http
            .csrf { csrf -> csrf.disable() } // Updated CSRF configuration
            .authorizeHttpRequests { auth ->
                auth
                    .requestMatchers("/api/project-managers/**").authenticated()
                    .anyRequest().permitAll()
            } // Updated request authorization
            .httpBasic { httpBasic -> httpBasic } // Updated HTTP Basic authentication
        return http.build()
    }
}
