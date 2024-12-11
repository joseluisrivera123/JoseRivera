package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.FunctionaryAdolescent;
import vallegrande.edu.pe.recuperacion.Service.FunctionaryAdolescentService;

import java.util.List;

@RestController
@RequestMapping("/api/functionary-adolescents")
public class FunctionaryAdolescentRestController {

    @Autowired
    private FunctionaryAdolescentService service;

    @GetMapping
    public List<FunctionaryAdolescent> listar() {
        return service.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FunctionaryAdolescent> obtener(@PathVariable Long id) {
        FunctionaryAdolescent entity = service.buscarPorId(id);
        return entity != null ? ResponseEntity.ok(entity) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public FunctionaryAdolescent crear(@RequestBody FunctionaryAdolescent entity) {
        return service.guardar(entity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable Long id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}

