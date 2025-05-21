package com.ngictennis.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.ngictennis.ecommerce.model.Product;
import com.ngictennis.ecommerce.services.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    public ProductService productService;

    // @GetMapping
    // public List<Product> getProducts() {
    // return productService.getProducts();
    // }

    @PostMapping()
    public Product addProduct(@RequestBody Product product) {

        return productService.addProduct(product);
    }

}
