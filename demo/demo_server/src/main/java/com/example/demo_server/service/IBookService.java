package com.example.demo_server.service;

import com.example.demo_server.DTO.BookDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookService {
    Page<BookDTO> findAll(String name, Pageable pageable);
}
