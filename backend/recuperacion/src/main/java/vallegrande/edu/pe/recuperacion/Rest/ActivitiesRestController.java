package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.Activities;
import vallegrande.edu.pe.recuperacion.Service.ActivitiesService;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
public class ActivitiesRestController {
    @Autowired
    private ActivitiesService activitiesService;

    @GetMapping
    public List<Activities> listarActivities() {
        return activitiesService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activities> obtenerActivity(@PathVariable Long id) {
        Activities activity = activitiesService.buscarPorId(id);
        return activity != null ? ResponseEntity.ok(activity) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Activities crearActivity(@RequestBody Activities activity) {
        return activitiesService.guardar(activity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Activities> actualizarActivity(@PathVariable Long id, @RequestBody Activities activity) {
        Activities activityActualizada = activitiesService.actualizar(id, activity);
        return activityActualizada != null ? ResponseEntity.ok(activityActualizada) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarActivity(@PathVariable Long id) {
        activitiesService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}