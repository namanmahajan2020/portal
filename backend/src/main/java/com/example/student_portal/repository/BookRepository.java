package com.example.student_portal.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.student_portal.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
}
