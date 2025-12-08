package com.example.project.controller;

import com.example.project.model.User;
import com.example.project.security.JwtUtil;
import com.example.project.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;
    private final JwtUtil jwtUtil;

    public AuthController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        String email = body.get("email"); // collect email from request

        try {
            User u = userService.register(username, password, "ROLE_USER", email);
            return ResponseEntity.ok(Map.of("username", u.getUsername(), "email", u.getEmail()));
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(Map.of("error", ex.getMessage()));
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");

        try {
            var opt = userService.findByUsername(username);
            if (opt.isEmpty()) return ResponseEntity.status(401).body("Invalid credentials");

            User u = opt.get();
            if (!userService.passwordMatches(password, u.getPassword())) {
                return ResponseEntity.status(401).body("Invalid credentials");
            }

            String token = jwtUtil.generateToken(u.getUsername(), u.getRole());
            return ResponseEntity.ok(Map.of("token", token, "role", u.getRole()));
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Login error");
        }
    }
}
