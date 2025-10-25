package com.example.student_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.student_portal.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}

