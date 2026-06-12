package com.example.productintro.controller;

import com.example.productintro.service.ProductService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public String list(Model model) {
        model.addAttribute("products", productService.findAll());
        return "products/list";
    }

    @GetMapping("/{id}")
    public String detail(@PathVariable Long id, Model model) {
        return productService.findById(id)
                .map(product -> {
                    model.addAttribute("product", product);
                    return "products/detail";
                })
                .orElse("redirect:/products");
    }
}
