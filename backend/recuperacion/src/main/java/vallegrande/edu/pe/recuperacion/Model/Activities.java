package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "activities", schema = "recuperacion")
@Data
public class Activities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Lob
    private String description;

    @Column(name = "activity_date")
    @Temporal(TemporalType.DATE)
    private Date activityDate;

    private String duration;

    private String location;

    private String active;

    @Column(name = "type_pronacej")
    private String typePronacej;

    @Column(name = "type_soa")
    private String typeSoa;


}