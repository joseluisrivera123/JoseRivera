package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.Teen;
import vallegrande.edu.pe.recuperacion.Service.TeenService;

import java.util.List;

@RestController
@RequestMapping("/api/teens")
public class TeenRestController {

    @Autowired
    private TeenService teenService;

    @GetMapping
    public List<Teen> listarTeens() {
        return teenService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Teen> obtenerTeen(@PathVariable Long id) {
        Teen teen = teenService.buscarPorId(id);
        return teen != null ? ResponseEntity.ok(teen) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Teen> crearTeen(@RequestBody Teen teen) {
        try {
            teen.setEstado('A');  // Asegurando que el estado sea 'A'
            Teen nuevoTeen = teenService.guardar(teen);
            return ResponseEntity.ok(nuevoTeen);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Teen> actualizarTeen(@PathVariable Long id, @RequestBody Teen teen) {
        Teen teenActualizado = teenService.actualizar(id, teen);
        return teenActualizado != null ? ResponseEntity.ok(teenActualizado) : ResponseEntity.notFound().build();
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarTeen(@PathVariable Long id) {
        teenService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
