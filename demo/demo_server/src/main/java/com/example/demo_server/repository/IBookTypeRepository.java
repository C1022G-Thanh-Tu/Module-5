package com.example.demo_server.repository;

import com.example.demo_server.entity.BookType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IBookTypeRepository extends JpaRepository<BookType, Integer> {
    @Query(value = "select * from book_type", nativeQuery = true)
    List<BookType> findAllBookTypes();
}
