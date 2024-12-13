package vallegrande.edu.pe.recuperacion.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AssignmentDTO {
    private String teenName;
    private String teenSurname;
    private String functionaryName;
    private String description;
}
