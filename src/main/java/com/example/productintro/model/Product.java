package com.example.productintro.model;

public class Product {

    private final Long id;
    private final String name;
    private final String tagline;
    private final String description;
    private final String category;
    private final String priceLabel;
    private final String imageKey;
    private final boolean featured;

    public Product(
            Long id,
            String name,
            String tagline,
            String description,
            String category,
            String priceLabel,
            String imageKey,
            boolean featured) {
        this.id = id;
        this.name = name;
        this.tagline = tagline;
        this.description = description;
        this.category = category;
        this.priceLabel = priceLabel;
        this.imageKey = imageKey;
        this.featured = featured;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getTagline() {
        return tagline;
    }

    public String getDescription() {
        return description;
    }

    public String getCategory() {
        return category;
    }

    public String getPriceLabel() {
        return priceLabel;
    }

    public String getImageKey() {
        return imageKey;
    }

    public boolean isFeatured() {
        return featured;
    }
}
