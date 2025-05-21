package com.ngictennis.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ngictennis.ecommerce.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
