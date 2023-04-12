package com.example.demo_server.repository;

import com.example.demo_server.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductRepository extends JpaRepository<Product, Integer> {
}
