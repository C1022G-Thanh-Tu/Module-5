package com.example.demo_server.controller;

import com.example.demo_server.DTO.ProductDTO;
import com.example.demo_server.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/products")
public class ProductRestController {
    @Autowired
    private IProductService productService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductDTO> findAll() {
        return productService.findAll();
    }

    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody ProductDTO productDTO) {
        productService.save(productDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void remove(@PathVariable Integer id) {
        productService.remove(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ProductDTO findById(@PathVariable Integer id) {
        return productService.findById(id);
    }

    @PutMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void edit(@RequestBody ProductDTO productDTO) {
        productService.edit(productDTO);
    }
}
