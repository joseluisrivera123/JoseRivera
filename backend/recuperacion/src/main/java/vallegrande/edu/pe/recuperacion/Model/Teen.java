package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "teen", schema = "recuperacion")
@Data
public class Teen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_adolescente")
    private Long idAdolescente;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "surnamefather", nullable = false, length = 80)
    private String surnamefather;

    @Column(name = "surnamemother", nullable = false, length = 80)
    private String surnamemother;

    @Column(name = "dni", length = 8)
    private String dni;

    @Column(name = "estado", nullable = false)
    private char estado = 'A'; // Predeterminado como 'A' (Activo)

    // Relación Many-to-One con Functionary
    @ManyToOne
    @JoinColumn(name = "id_funcionary", referencedColumnName = "id_funcionary")  // Asegúrate de que el nombre coincida
    private Functionary functionary;
}


