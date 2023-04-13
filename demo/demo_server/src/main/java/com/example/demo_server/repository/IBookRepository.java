package com.example.demo_server.repository;
import com.example.demo_server.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select * from book where name like concat('%', :name, '%')", nativeQuery = true)
    Page<Book> findAllBooks(@Param("name") String name, Pageable pageable);
}
