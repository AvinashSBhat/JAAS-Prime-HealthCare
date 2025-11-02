package com.excelR.JAASPrimeHealthCare.controller;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excelR.JAASPrimeHealthCare.entity.User;
import com.excelR.JAASPrimeHealthCare.repository.UserRepository;
import com.excelR.JAASPrimeHealthCare.service.JwtService;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000") // allows React to connect
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtService jwtService;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @PostMapping("/register")
    public Map<String, Object> registerUser(@RequestBody Map<String, String> body) {
        Map<String, Object> response = new HashMap<>();

        try {
            String name = body.get("name");
            String email = body.get("email");
            String password = body.get("password");

            if (userRepository.findByEmail(email).isPresent()) {
                response.put("success", false);
                response.put("message", "Email already registered");
                return response;
            }

            User user = new User();
            user.setName(name);
            user.setEmail(email);
            user.setPassword(passwordEncoder.encode(password));

            userRepository.save(user);

            String token = jwtService.generateToken(email);

            response.put("success", true);
            response.put("token", token);
        } catch (Exception e) {
            response.put("success", false);
            response.put("message", e.getMessage());
        }

        return response;
    }
}