package com.ngictennis.ecommerce.services;

import org.springframework.beans.factory.annotation.Autowired;

//import java.util.List;

import org.springframework.stereotype.Service;

import com.ngictennis.ecommerce.model.Product;
import com.ngictennis.ecommerce.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    public ProductRepository productRepository;

    // public List<Product> getProducts() {
    // return productRepository.findAll();
    // }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }
}
