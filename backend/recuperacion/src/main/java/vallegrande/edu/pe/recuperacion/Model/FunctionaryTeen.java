package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "funcionarios_adolescente", schema = "recuperacion")
@Data
public class FunctionaryTeen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_funcionaryteend")
    private Long id;

    @Column(name = "description", length = 255)
    private String description;

    @Column(name = "estado", nullable = false)
    private char estado = 'A';  // Predeterminado a 'A' (Activo)

    @ManyToOne
    @JoinColumn(name = "id_adolescente", referencedColumnName = "id_adolescente", nullable = false)
    private Teen teen;

    @ManyToOne
    @JoinColumn(name = "id_funcionary", referencedColumnName = "id_funcionary", nullable = false)
    private Functionary functionary;

    @Column(name = "start_date")
    private java.sql.Date startDate;

    @Column(name = "register_date")
    private java.sql.Date registerDate;
}
