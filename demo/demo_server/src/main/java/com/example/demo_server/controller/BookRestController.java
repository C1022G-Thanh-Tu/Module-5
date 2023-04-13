package com.example.demo_server.controller;

import com.example.demo_server.DTO.BookDTO;
import com.example.demo_server.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/books")
@CrossOrigin("*")
public class BookRestController {
    @Autowired
    private IBookService bookService;
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Page<BookDTO> getAllBooks (@PageableDefault(size = 3)Pageable pageable,
                                      @RequestParam(required = false, defaultValue = "") String name) {
        return bookService.findAll(name,pageable);
    }
}
