package com.example.demo_server.controller;

import com.example.demo_server.DTO.ProductTypeDTO;
import com.example.demo_server.entity.ProductType;
import com.example.demo_server.service.IProductTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/productTypes")
public class ProductTypeRestController {
    @Autowired
    private IProductTypeService productTypeService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<ProductTypeDTO> findAll() {
        return productTypeService.findAll();
    }
}
