package com.example.demo_server.repository;

import com.example.demo_server.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select * from book where name like concat('%', :name, '%') " +
            "and book_type_id like concat('%', :id, '%')", nativeQuery = true)
    Page<Book> findAllBooks(@Param("name") String name, @Param("id") String bookTypeId, Pageable pageable);

    @Modifying
    @Transactional
    @Query(value = "insert into book (code, imported_date, `name`, quantity, book_type_id) " +
            "values (:code, :importedDate, :name, :quantity, :bookTypeId)", nativeQuery = true)
    void addBook (@Param("code") String code,
                  @Param("importedDate") String importedDate,
                  @Param("name") String name,
                  @Param("quantity") Integer quantity,
                  @Param("bookTypeId") Integer bookTypeId);

    @Modifying
    @Transactional
    @Query(value = "delete from book where id = :id", nativeQuery = true)
    void deleteBook(@Param("id") Integer id);
}
