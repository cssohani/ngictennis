package com.ngictennis.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ngictennis.ecommerce.model.Product;

public interface ProductRepository extends JpaRepository<Product, String> {

}
