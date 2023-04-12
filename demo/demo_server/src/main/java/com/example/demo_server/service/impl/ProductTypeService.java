package com.example.demo_server.service.impl;

import com.example.demo_server.DTO.ProductDTO;
import com.example.demo_server.DTO.ProductTypeDTO;
import com.example.demo_server.entity.Product;
import com.example.demo_server.entity.ProductType;
import com.example.demo_server.repository.IProductTypeRepository;
import com.example.demo_server.service.IProductTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductTypeService implements IProductTypeService {
    @Autowired
    private IProductTypeRepository productTypeRepository;

    @Override
    public List<ProductTypeDTO> findAll() {
        List<ProductType> productTypeList =productTypeRepository.findAll();
        List<ProductTypeDTO> productTypeDTOList = new ArrayList<>();
        ProductTypeDTO productTypetDTO;
        for (ProductType productType: productTypeList) {
            productTypetDTO = new ProductTypeDTO();
            BeanUtils.copyProperties(productType, productTypetDTO);
            productTypeDTOList.add(productTypetDTO);
        }
        return productTypeDTOList;
    }
}
