package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "teen", schema = "recuperacion")
@Data // Lombok generará los getters, setters, toString, equals y hashCode
public class Teen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_adolescente")
    private Long idAdolescente;

    private String name;
    private String surnamefather;
    private String surnamemother;
    private String dni;
    @Column(nullable = false)
    private char estado = 'A'; // Predeterminado como 'A' (Activo)


}
