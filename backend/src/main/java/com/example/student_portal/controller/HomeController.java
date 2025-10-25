package com.example.student_portal.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "🚀 Student Portal Backend is Running Successfully!";
    }

    @GetMapping("/api/status")
    public Map<String, String> status() {
        return Map.of("status", "running", "version", "1.0");
    }
}
