package com.example.student_portal.service;

import com.example.student_portal.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
@Scope("singleton")  // Ensures one shared instance for the entire app
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired  // ✅ Dependency Injection
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    public List<Map<String, String>> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public void addEmployee(Map<String, String> employee) {
        employeeRepository.addEmployee(employee);
    }

    public void deleteEmployee(String id) {
        employeeRepository.deleteEmployee(id);
    }
}
