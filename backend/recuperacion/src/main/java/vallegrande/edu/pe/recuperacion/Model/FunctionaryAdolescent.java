package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "funcionarios_adolescente", schema = "recuperacion")
@Data
public class FunctionaryAdolescent {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "seq_detalle_generator")
    @SequenceGenerator(name = "seq_detalle_generator", sequenceName = "seq_detalle", allocationSize = 1)
    private Long idFuncionaryteend;

    private String description;
    private String estado;

    @Column(name = "id_adolescente")
    private Long idAdolescente;

    @Column(name = "id_funcionary")
    private Long idFunctionary;

    @Temporal(TemporalType.DATE)
    private Date startDate;

    @Temporal(TemporalType.DATE)
    private Date registerDate;
}

