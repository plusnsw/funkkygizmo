package com.example.productintro.controller;

import com.example.productintro.service.TeamService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TeamController {

    private final TeamService teamService;

    public TeamController(TeamService teamService) {
        this.teamService = teamService;
    }

    @GetMapping("/team")
    public String team(Model model) {
        model.addAttribute("teamMembers", teamService.findAll());
        return "team";
    }
}
