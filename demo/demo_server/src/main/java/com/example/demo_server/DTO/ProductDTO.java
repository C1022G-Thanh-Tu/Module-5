package com.example.demo_server.DTO;

import javax.validation.constraints.NotBlank;

public class ProductDTO {
    private Integer id;
    @NotBlank(message = "Required")
    private String name;
    @NotBlank(message = "Required")
    private ProductTypeDTO productTypeDTO;

    public ProductDTO() {
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

    public ProductTypeDTO getProductTypeDTO() {
        return productTypeDTO;
    }

    public void setProductTypeDTO(ProductTypeDTO productTypeDTO) {
        this.productTypeDTO = productTypeDTO;
    }
}
