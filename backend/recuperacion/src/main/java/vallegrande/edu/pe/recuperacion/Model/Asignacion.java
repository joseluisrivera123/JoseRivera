package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "funcionarios_adolescente", schema = "recuperacion")
@Data
public class Asignacion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_funcionaryteend")
    private Long id;
    
    @Column(name = "description")
    private String description;

    @Column(name = "estado", nullable = false)
    private char estado = 'A'; // Estado por defecto Activo (A)

    @Column(name = "id_adolescente", nullable = false)
    private Long idAdolescente;

    @Column(name = "id_funcionary", nullable = false)
    private Long idFuncionary;

    @Temporal(TemporalType.DATE)
    @Column(name = "register_date")
    private Date registerDate = new Date();
}
