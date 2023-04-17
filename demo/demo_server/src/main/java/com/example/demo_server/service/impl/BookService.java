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

@Service
public class BookService implements IBookService {
    @Autowired
    private IBookRepository bookRepository;
    @Autowired
    private IBookTypeRepository bookTypeRepository;

    @Override
    public Page<BookDTO> findAll(String name, String bookTypeId ,Pageable pageable) {
        Page<Book> bookPage = bookRepository.findAllBooks(name,bookTypeId,pageable);
        List<BookDTO> bookDTOList = new ArrayList<>();
        BookDTO bookDTO;
        for (Book book: bookPage) {
            bookDTO = new BookDTO();
            bookDTO.setBookTypeDTO(new BookTypeDTO());
            BeanUtils.copyProperties(book.getBookType(), bookDTO.getBookTypeDTO());
            BeanUtils.copyProperties(book, bookDTO);
            bookDTOList.add(bookDTO);
        }
        return new PageImpl<>(bookDTOList, pageable, bookPage.getTotalElements());
    }

    @Override
    public void save(BookDTO bookDTO) {
        Book book = new Book();
        book.setBookType(bookTypeRepository.findTypeOfBookById(bookDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(bookDTO, book);
        bookRepository.addBook(book.getCode(),
                book.getImportedDate(),
                book.getName(),
                book.getQuantity(),
                book.getBookType().getId());
    }

    @Override
    public void delete(Integer id) {
        bookRepository.deleteBook(id);
    }

    @Override
    public BookDTO findById(Integer id) {
        Book book = bookRepository.findBookWithId(id);
        BookDTO bookDTO = new BookDTO();
        bookDTO.setBookTypeDTO(new BookTypeDTO());
        BeanUtils.copyProperties(book.getBookType(), bookDTO.getBookTypeDTO());
        BeanUtils.copyProperties(book, bookDTO);
        return bookDTO;
    }

    @Override
    public void update(BookDTO bookDTO) {
        Book book = new Book();
        book.setBookType(bookTypeRepository.findTypeOfBookById(bookDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(bookDTO, book);
        bookRepository.updateBook(book.getCode(),
                book.getImportedDate(),
                book.getName(),
                book.getQuantity(),
                book.getBookType().getId(),
                book.getId());
    }
}
