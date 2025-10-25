package com.example.student_portal.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.context.annotation.Scope;

@Configuration
public class AppConfig {

    @Bean
    @Scope("prototype") // ✅ new instance each time it's injected
    public String prototypeBean() {
        return "Prototype Bean instance created at " + System.currentTimeMillis();
    }

    @Bean
    @Profile("dev")
    public String devProfileBean() {
        return "Running in DEV profile 🚧";
    }

    @Bean
    @Profile("prod")
    public String prodProfileBean() {
        return "Running in PROD profile 🚀";
    }
}
