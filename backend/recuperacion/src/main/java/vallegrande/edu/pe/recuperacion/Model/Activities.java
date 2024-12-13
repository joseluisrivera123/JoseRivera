package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "activities", schema = "recuperacion")
@Data
public class Activities {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false, length = 100)
    private String name;

    @Column(name = "description", nullable = false, length = 250)
    private String description;

    @Column(name = "activity_date", nullable = false)
    private String activityDate;

    @Column(name = "duration", length = 50)
    private String duration;

    @Column(name = "location", length = 255)
    private String location;

    @Column(name = "active", nullable = false)
    private String active = "A";

    @Column(name = "type_pronacej", length = 50)
    private String typePronacej;

    @Column(name = "type_soa", length = 50)
    private String typeSoa;
}