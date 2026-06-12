package com.example.productintro.model;

import java.util.List;

public class TeamMember {

    private final String name;
    private final List<String> roles;
    private final String avatarStyle;

    public TeamMember(String name, List<String> roles, String avatarStyle) {
        this.name = name;
        this.roles = roles;
        this.avatarStyle = avatarStyle;
    }

    public String getName() {
        return name;
    }

    public List<String> getRoles() {
        return roles;
    }

    public String getAvatarStyle() {
        return avatarStyle;
    }
}
