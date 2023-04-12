package com.example.demo_server.service.impl;

import com.example.demo_server.DTO.ProductDTO;
import com.example.demo_server.DTO.ProductTypeDTO;
import com.example.demo_server.entity.Product;
import com.example.demo_server.repository.IProductRepository;
import com.example.demo_server.repository.IProductTypeRepository;
import com.example.demo_server.service.IProductService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class ProductService implements IProductService {
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IProductTypeRepository productTypeRepository;
    @Override
    public List<ProductDTO> findAll() {
        List<Product> productList =productRepository.findAll();
        List<ProductDTO> productDTOList = new ArrayList<>();
        ProductDTO productDTO;
        for (Product product: productList) {
            productDTO = new ProductDTO();
            productDTO.setProductTypeDTO(new ProductTypeDTO());
            BeanUtils.copyProperties(product.getProductType(), productDTO.getProductTypeDTO());
            BeanUtils.copyProperties(product, productDTO);
            productDTOList.add(productDTO);
        }
        return productDTOList;
    }

    @Override
    public void save(ProductDTO productDTO) {
        Product product = new Product();
        product.setProductType(productTypeRepository.findById(productDTO.getProductTypeDTO().getId()).get());
        BeanUtils.copyProperties(productDTO, product);
        productRepository.save(product);
    }

    @Override
    public void remove(Integer id) {
        productRepository.deleteById(id);
    }

    @Override
    public ProductDTO findById(Integer id) {
        Product product = productRepository.findById(id).get();
        ProductDTO productDTO = new ProductDTO();
        productDTO.setProductTypeDTO(new ProductTypeDTO());
        BeanUtils.copyProperties(product.getProductType(), productDTO.getProductTypeDTO());
        BeanUtils.copyProperties(product, productDTO);
        return productDTO;
    }

    @Override
    public void edit(ProductDTO productDTO) {
        Product product = new Product();
        product.setProductType(productTypeRepository.findById(productDTO.getProductTypeDTO().getId()).get());
        BeanUtils.copyProperties(productDTO, product);
        productRepository.save(product);
    }
}
