package vallegrande.edu.pe.recuperacion.Model;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "programs", schema = "recuperacion")
@Data
public class Programs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Column(name = "program_type")
    private String programType;

    private String beneficiary;
    private String responsible;

    @Lob
    private String description;

    private Integer duration;

    @Column(name = "program_condition")
    private String programCondition;

    @Column(name = "program_level")
    private String programLevel;
}