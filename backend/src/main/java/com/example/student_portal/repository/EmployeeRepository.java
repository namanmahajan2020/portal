package com.example.student_portal.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public class EmployeeRepository {

    private final List<Map<String, String>> employees = new ArrayList<>();

    public EmployeeRepository() {
        // Add some sample data
        employees.add(Map.of("id", "1", "name", "Alice", "role", "Developer"));
        employees.add(Map.of("id", "2", "name", "Bob", "role", "Designer"));
        employees.add(Map.of("id", "3", "name", "Charlie", "role", "Manager"));
    }

    public List<Map<String, String>> findAll() {
        return employees;
    }

    public void addEmployee(Map<String, String> emp) {
        employees.add(emp);
    }

    public void deleteEmployee(String id) {
        employees.removeIf(e -> e.get("id").equals(id));
    }
}
