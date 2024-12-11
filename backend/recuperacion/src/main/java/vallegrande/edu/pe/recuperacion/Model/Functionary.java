package vallegrande.edu.pe.recuperacion.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "funcionary", schema = "recuperacion")
@Data
public class Functionary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private String status;
}