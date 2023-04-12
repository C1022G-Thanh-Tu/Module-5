package com.example.demo_server.service;

import com.example.demo_server.DTO.ProductDTO;

import java.util.List;

public interface IProductService {
    List<ProductDTO> findAll();
    void save(ProductDTO productDTO);
    void remove(Integer id);
    ProductDTO findById(Integer id);
    void edit (ProductDTO productDTO);
}
