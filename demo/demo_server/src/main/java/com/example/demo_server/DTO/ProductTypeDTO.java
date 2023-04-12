package com.example.demo_server.DTO;

import javax.validation.constraints.NotBlank;
import java.util.Set;

public class ProductTypeDTO {
    private Integer id;
    @NotBlank(message = "Required")
    private String name;
    private Set<ProductDTO> productDTOSet;

    public ProductTypeDTO() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<ProductDTO> getProductDTOSet() {
        return productDTOSet;
    }

    public void setProductDTOSet(Set<ProductDTO> productDTOSet) {
        this.productDTOSet = productDTOSet;
    }
}
