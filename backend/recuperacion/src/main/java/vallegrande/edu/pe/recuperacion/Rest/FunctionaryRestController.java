package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.Functionary;
import vallegrande.edu.pe.recuperacion.Service.FunctionaryService;

import java.util.List;

@RestController
@RequestMapping("/api/functionaries")
public class FunctionaryRestController {

    @Autowired
    private FunctionaryService functionaryService;

    @GetMapping
    public List<Functionary> listarFunctionaries() {
        return functionaryService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Functionary> obtenerFunctionary(@PathVariable Long id) {
        Functionary functionary = functionaryService.buscarPorId(id);
        return functionary != null ? ResponseEntity.ok(functionary) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Functionary crearFunctionary(@RequestBody Functionary functionary) {
        return functionaryService.guardar(functionary);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Functionary> actualizarFunctionary(@PathVariable Long id, @RequestBody Functionary functionary) {
        Functionary functionaryActualizado = functionaryService.actualizar(id, functionary);
        return functionaryActualizado != null ? ResponseEntity.ok(functionaryActualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarFunctionary(@PathVariable Long id) {
        functionaryService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
