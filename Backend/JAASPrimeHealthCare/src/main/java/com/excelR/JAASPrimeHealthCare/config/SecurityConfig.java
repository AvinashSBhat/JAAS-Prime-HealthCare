package com.excelR.JAASPrimeHealthCare.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // disable CSRF for APIs
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/user/register", "/api/user/login", "/api/user/test").permitAll() // allow signup + login
                        .anyRequest().authenticated() // protect all others
                )
                .httpBasic(httpBasic -> httpBasic.disable()) // no basic auth
                .formLogin(form -> form.disable()); // no login form
        return http.build();
    }
}