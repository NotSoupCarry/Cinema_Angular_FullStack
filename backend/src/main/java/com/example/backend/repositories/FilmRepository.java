package com.example.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

import com.example.backend.models.Film;

public interface FilmRepository extends JpaRepository<Film, Long> {
    List<Film> findByTitoloContainingIgnoreCase(String titolo);
}
