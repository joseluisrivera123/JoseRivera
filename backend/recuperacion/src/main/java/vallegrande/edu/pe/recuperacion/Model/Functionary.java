package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "funcionary", schema = "recuperacion")
@Data
public class Functionary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_funcionary")  // Asegúrate de que el nombre de la columna sea "id_funcionary"
    private Long idFuncionary;

    private String name;
    private String surnamefather;
    private String surnamemother;
    private String dni;
    private String phonenumber;
    private String range;
    private String confirmation;
    private String department;
    private String address;
    private String email;

    @Column(nullable = false)
    private char status = 'A';  // A para Activo, I para Inactivo

    // Relación con Teen (One-to-Many)
    @OneToMany(mappedBy = "functionary", fetch = FetchType.LAZY)
    private List<Teen> teens;
}


