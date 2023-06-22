package com.example.demo_server.service.impl;

import com.example.demo_server.DTO.BookDTO;
import com.example.demo_server.DTO.BookTypeDTO;
import com.example.demo_server.entity.Book;
import com.example.demo_server.repository.IBookRepository;
import com.example.demo_server.repository.IBookTypeRepository;
import com.example.demo_server.service.IBookService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository bookRepository;
    @Autowired
    private IBookTypeRepository bookTypeRepository;
    public BookDTO mapToBookDTO(Book book) {
        BookDTO bookDTO = new BookDTO();
        bookDTO.setBookTypeDTO(new BookTypeDTO());
        BeanUtils.copyProperties(book.getBookType(), bookDTO.getBookTypeDTO());
        BeanUtils.copyProperties(book, bookDTO);
        return bookDTO;
    }

    @Override
    public Page<BookDTO> findAll(String name, String bookTypeId, Pageable pageable) {
        Page<Book> bookPage = bookRepository.findAllBooks(name, bookTypeId, pageable);
        List<BookDTO> bookDTOList = bookPage.stream().map(this::mapToBookDTO).collect(Collectors.toList());
        return new PageImpl<>(bookDTOList, pageable, bookPage.getTotalElements());
    }

    @Override
    public void save(BookDTO bookDTO) {
        Book book = new Book();
        book.setBookType(bookTypeRepository.findTypeOfBookById(bookDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(bookDTO, book);
        bookRepository.save(book);
    }

    @Override
    public void delete(Integer id) {
        bookRepository.deleteById(id);
    }

    @Override
    public BookDTO findById(Integer id) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Cannot find the book required"));
        return mapToBookDTO(book);
    }

    @Override
    public void update(BookDTO bookDTO) {
        Book book = new Book();
        book.setBookType(bookTypeRepository.findTypeOfBookById(bookDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(bookDTO, book);
        bookRepository.save(book);
    }
}
