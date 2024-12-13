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

    // Listar todos los funcionarios
    @GetMapping
    public List<Functionary> listarFunctionaries() {
        return functionaryService.listarTodos();
    }

    // Obtener un funcionario por su ID
    @GetMapping("/{id}")
    public ResponseEntity<Functionary> obtenerFunctionary(@PathVariable Long id) {
        Functionary functionary = functionaryService.buscarPorId(id);
        return functionary != null ? ResponseEntity.ok(functionary) : ResponseEntity.notFound().build();
    }

    // Crear un nuevo funcionario
    @PostMapping
    public Functionary crearFunctionary(@RequestBody Functionary functionary) {
        return functionaryService.guardar(functionary);
    }

    // Actualizar un funcionario
    @PutMapping("/{id}")
    public ResponseEntity<Functionary> actualizarFunctionary(@PathVariable Long id, @RequestBody Functionary functionary) {
        Functionary functionaryActualizado = functionaryService.actualizar(id, functionary);
        return functionaryActualizado != null ? ResponseEntity.ok(functionaryActualizado) : ResponseEntity.notFound().build();
    }

    // Eliminar un funcionario (cambiar su estado a 'I' - inactivo)
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarFunctionary(@PathVariable Long id) {
        functionaryService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

