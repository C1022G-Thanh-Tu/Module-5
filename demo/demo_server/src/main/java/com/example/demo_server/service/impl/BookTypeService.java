package com.example.demo_server.service.impl;
import com.example.demo_server.DTO.BookTypeDTO;
import com.example.demo_server.entity.BookType;
import com.example.demo_server.repository.IBookTypeRepository;
import com.example.demo_server.service.IBookTypeService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookTypeService implements IBookTypeService {
    @Autowired
    private IBookTypeRepository bookTypeRepository;

    @Override
    public List<BookTypeDTO> findAll() {
        List<BookType> bookTypeList = bookTypeRepository.findAllBookTypes();
        return bookTypeList.stream().map(bookType -> {
            BookTypeDTO bookTypeDTO = new BookTypeDTO();
            BeanUtils.copyProperties(bookType, bookTypeDTO);
            return bookTypeDTO;
        }).collect(Collectors.toList());
    }
}
