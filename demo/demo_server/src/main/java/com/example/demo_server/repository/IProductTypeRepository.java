package com.example.demo_server.repository;

import com.example.demo_server.entity.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProductTypeRepository extends JpaRepository<ProductType, Integer> {
}
