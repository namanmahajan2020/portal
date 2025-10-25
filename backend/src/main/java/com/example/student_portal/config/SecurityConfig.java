package com.example.student_portal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // for testing, disable CSRF
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/books/admin/**").hasRole("ADMIN")
                .anyRequest().permitAll()
            )
            .httpBasic();
        return http.build();
    }
}
