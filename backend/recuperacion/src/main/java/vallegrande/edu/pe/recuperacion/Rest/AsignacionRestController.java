package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.Asignacion;
import vallegrande.edu.pe.recuperacion.Service.AsignacionService;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/asignaciones")
public class AsignacionRestController {

    @Autowired
    private AsignacionService asignacionService;

    // Crear una nueva asignación
    @PostMapping
    public ResponseEntity<Asignacion> crearAsignacion(@RequestBody Asignacion asignacion) {
        try {
            Asignacion nuevaAsignacion = asignacionService.asignarTeenAFunctionary(asignacion);
            return ResponseEntity.ok(nuevaAsignacion);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Obtener todas las asignaciones
    @GetMapping
    public ResponseEntity<List<Map<String, Object>>> getAllAsignacionesConNombres() {
        return ResponseEntity.ok(asignacionService.listarAsignacionesConNombres());
    }


}
