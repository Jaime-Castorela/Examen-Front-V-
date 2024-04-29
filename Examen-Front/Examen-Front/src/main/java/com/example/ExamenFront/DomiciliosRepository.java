package com.example.ExamenFront;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DomiciliosRepository extends JpaRepository<Domicilios, Long>{

}
