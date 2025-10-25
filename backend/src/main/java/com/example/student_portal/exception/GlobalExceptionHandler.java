package com.example.student_portal.exception;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {

    // Handle invalid URL (404)
    @ExceptionHandler(NoHandlerFoundException.class)
    public String handle404(NoHandlerFoundException ex, Model model) {
        model.addAttribute("errorTitle", "404 - Page Not Found");
        model.addAttribute("errorMessage", "The page you’re looking for doesn’t exist.");
        model.addAttribute("errorDetails", ex.getMessage());
        return "error-404"; // Thymeleaf view name
    }

    // Handle all other generic exceptions (500)
    @ExceptionHandler(Exception.class)
    public String handleGeneral(Exception ex, Model model) {
        model.addAttribute("errorTitle", "Unexpected Error");
        model.addAttribute("errorMessage", "Something went wrong! Please try again later.");
        model.addAttribute("errorDetails", ex.getMessage());
        return "error-500";
    }
}
