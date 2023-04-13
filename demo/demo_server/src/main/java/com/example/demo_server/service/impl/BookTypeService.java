package com.example.demo_server.service.impl;
import com.example.demo_server.DTO.BookTypeDTO;
import com.example.demo_server.entity.BookType;
import com.example.demo_server.repository.IBookTypeRepository;
import com.example.demo_server.service.IBookTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookTypeService implements IBookTypeService {
    @Autowired
    private IBookTypeRepository bookTypeRepository;

    @Override
    public List<BookTypeDTO> findAll() {
        List<BookType> bookTypeList = bookTypeRepository.findAllBookTypes();
        List<BookTypeDTO> bookTypeDTOList = new ArrayList<>();
        BookTypeDTO bookTypeDTO;
        for (BookType bookType: bookTypeList) {
            bookTypeDTO = new BookTypeDTO();
            BeanUtils.copyProperties(bookType, bookTypeDTO);
            bookTypeDTOList.add(bookTypeDTO);
        }
        return bookTypeDTOList;
    }
}
