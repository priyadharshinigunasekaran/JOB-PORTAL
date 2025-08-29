package com.jobportal.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data   // Lombok: getters, setters, toString, equals, hashCode
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fullName;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;

    private String role; // jobseeker / employer
}
