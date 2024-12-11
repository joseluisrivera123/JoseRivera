package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.Programs;
import vallegrande.edu.pe.recuperacion.Service.ProgramsService;

import java.util.List;

@RestController
@RequestMapping("/api/programs")
public class ProgramsRestController {
    @Autowired
    private ProgramsService programsService;

    @GetMapping
    public List<Programs> listarPrograms() {
        return programsService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Programs> obtenerProgram(@PathVariable Long id) {
        Programs program = programsService.buscarPorId(id);
        return program != null ? ResponseEntity.ok(program) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Programs crearProgram(@RequestBody Programs program) {
        return programsService.guardar(program);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Programs> actualizarProgram(@PathVariable Long id, @RequestBody Programs program) {
        Programs programActualizado = programsService.actualizar(id, program);
        return programActualizado != null ? ResponseEntity.ok(programActualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProgram(@PathVariable Long id) {
        programsService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
