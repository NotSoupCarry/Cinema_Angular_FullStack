package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.Film;
import com.example.backend.services.FilmService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/film")
@CrossOrigin(origins = "http://localhost:4200") 
@RequiredArgsConstructor
public class FilmController {
    private final FilmService filmService;

    @GetMapping()
    public List<Film> showAll() {
        return filmService.getAllFilm();
    }

    @GetMapping("/search")
    public List<Film> searchFilms(@RequestParam String title) {
        return filmService.searchFilmsByTitle(title);
    }

    @PostMapping
    public void addFilm(@RequestBody Film film) {
        filmService.addFilm(film);
    }

    @DeleteMapping("/{id}")
    public void deleteFilm(@PathVariable Long id) {
        filmService.deleteFilmById(id);
    }

    @PutMapping("/{id}")
    public void updateFilm(@PathVariable Long id, @RequestBody Film film) {
        filmService.updateFilm(id, film);
    }
}
