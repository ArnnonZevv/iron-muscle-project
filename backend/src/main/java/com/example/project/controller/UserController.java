package com.example.project.controller;

import com.example.project.model.User;
import com.example.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:5173") // allow your React frontend
public class UserController {

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // ===== Register endpoint =====
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {

        // Check if email or username already exists
        Optional<User> existingEmail = userRepository.findByEmail(user.getEmail());
        Optional<User> existingUsername = userRepository.findByUsername(user.getUsername());

        if (existingEmail.isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", "Email already in use"));
        }

        if (existingUsername.isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(Map.of("message", "Username already in use"));
        }

        // Encrypt password before saving
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Assign default role if not provided
        if (user.getRole() == null || user.getRole().isEmpty()) {
            user.setRole("ROLE_USER");
        }

        userRepository.save(user);
        return ResponseEntity.ok(Map.of("message", "User registered successfully"));
    }

    // ===== Login endpoint =====
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isPresent()) {
            User user = userOpt.get();

            // Check password using BCrypt
            if (passwordEncoder.matches(password, user.getPassword())) {
                // Success — return user info without password
                return ResponseEntity.ok(Map.of(
                        "id", user.getId(),
                        "username", user.getUsername(),
                        "email", user.getEmail(),
                        "role", user.getRole()
                ));
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(Map.of("message", "Invalid password"));
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(Map.of("message", "User not found"));
        }
    }

    // ===== CHANGE PASSWORD ENDPOINT =====
    @PostMapping("/change-password")
public ResponseEntity<?> changePassword(@RequestBody Map<String, String> data) {
    String email = data.get("email");
    String currentPassword = data.get("currentPassword");
    String newPassword = data.get("newPassword");

    Optional<User> userOpt = userRepository.findByEmail(email);
    if (userOpt.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "User not found"));
    }

    User user = userOpt.get();

    // Check current password
    if (!passwordEncoder.matches(currentPassword, user.getPassword())) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                .body(Map.of("message", "Current password is incorrect"));
    }

    // Update password
    user.setPassword(passwordEncoder.encode(newPassword));
    userRepository.save(user);

    return ResponseEntity.ok(Map.of("message", "Password changed successfully"));
}
}
