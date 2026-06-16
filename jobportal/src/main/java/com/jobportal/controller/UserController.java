package com.jobportal.controller;

import com.jobportal.dto.LoginRequest;
import com.jobportal.model.User;
import com.jobportal.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
//@CrossOrigin("*")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public User register(
            @RequestBody User user
    ) {
        return userService.register(user);
    }

    @PostMapping("/login")
    public User login(
            @RequestBody LoginRequest request
    ) {
        return userService.login(
                request.getEmail(),
                request.getPassword()
        );
    }

}
