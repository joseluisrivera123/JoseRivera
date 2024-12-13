package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.FunctionaryTeen;
import vallegrande.edu.pe.recuperacion.Service.FunctionaryTeenService;

import java.util.List;

@RestController
@RequestMapping("/api/functionary-teen")
public class FunctionaryTeenRestController {

    @Autowired
    private FunctionaryTeenService functionaryTeenService;

    @PostMapping
    public ResponseEntity<FunctionaryTeen> asociarFunctionaryTeen(@RequestParam Long idFunctionary, @RequestParam Long idTeen, @RequestParam String description) {
        try {
            FunctionaryTeen functionaryTeen = functionaryTeenService.asociarFunctionaryTeen(idFunctionary, idTeen, description);
            return ResponseEntity.ok(functionaryTeen);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
    // Obtener un FunctionaryTeen por ID
    @GetMapping
    public List<FunctionaryTeen> getAllFunctionaryTeens() {
        return functionaryTeenService.findAll();  // Llamamos al servicio para obtener todos los registros
    }

    // Obtener un FunctionaryTeen por ID
    @GetMapping("/{id}")
    public ResponseEntity<FunctionaryTeen> getFunctionaryTeenById(@PathVariable Long id) {
        FunctionaryTeen functionaryTeen = functionaryTeenService.findById(id);
        return functionaryTeen != null ? ResponseEntity.ok(functionaryTeen) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarAsociacion(@PathVariable Long id) {
        functionaryTeenService.eliminarAsociacion(id);
        return ResponseEntity.noContent().build();
    }
}
