package com.example.productintro.service;

import com.example.productintro.model.TeamMember;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeamService {

    private final List<TeamMember> members = List.of(
            new TeamMember(
                    "Dr. MAX",
                    List.of(
                            "Ph. D. In HCI Design",
                            "Creative Director",
                            "Experience Design Expert",
                            "Industrial Designer"),
                    "avatar-hoodie"),
            new TeamMember(
                    "Noah",
                    List.of("Design Director", "Industrial Designer"),
                    "avatar-apron"),
            new TeamMember(
                    "MARI",
                    List.of("Strategy Director", "Business Manager"),
                    "avatar-coat"),
            new TeamMember(
                    "Fong",
                    List.of("Engineer", "Structural Development"),
                    "avatar-work"),
            new TeamMember(
                    "Gao",
                    List.of("Electronic Engineer", "Hardware Manager"),
                    "avatar-casual"),
            new TeamMember(
                    "Moon",
                    List.of("Digital Designer", "3D Designer", "Motion Director"),
                    "avatar-vest"));

    public List<TeamMember> findAll() {
        return members;
    }
}
