package com.example.backend.models;

import com.example.backend.enums.Genere;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "films")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String titolo;

    @Column(nullable = false)
    private String regista;

    @Column(nullable = false)
    private int annoUscita;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Genere genere;

    @Column(nullable = false)
    private String descrizione;

    @Column(nullable = true)
    private Double valutazione;
}
