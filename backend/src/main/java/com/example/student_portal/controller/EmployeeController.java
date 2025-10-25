package com.example.student_portal.controller;

import com.example.student_portal.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Map<String, String>> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public Map<String, String> addEmployee(@RequestBody Map<String, String> employee) {
        employeeService.addEmployee(employee);
        return Map.of("message", "Employee added successfully");
    }

    @DeleteMapping("/{id}")
    public Map<String, String> deleteEmployee(@PathVariable String id) {
        employeeService.deleteEmployee(id);
        return Map.of("message", "Employee deleted successfully");
    }
}
