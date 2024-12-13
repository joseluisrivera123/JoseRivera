package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.Activities;
import vallegrande.edu.pe.recuperacion.Service.ActivitiesService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/activities")
public class ActivitiesRestController {

    @Autowired
    private ActivitiesService service;

    @GetMapping
    public List<Activities> getAllActivities() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activities> getActivityById(@PathVariable Long id) {
        Optional<Activities> activity = service.findById(id);
        return activity.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Activities createActivity(@RequestBody Activities activity) {

        return service.save(activity);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Activities> updateActivity(@PathVariable Long id, @RequestBody Activities activityDetails) {
        Optional<Activities> existingActivity = service.findById(id);
        if (existingActivity.isPresent()) {
            Activities activity = existingActivity.get();
            activity.setName(activityDetails.getName());
            activity.setDescription(activityDetails.getDescription());
            activity.setActivityDate(activityDetails.getActivityDate());
            activity.setDuration(activityDetails.getDuration());
            activity.setLocation(activityDetails.getLocation());
            activity.setActive(activityDetails.getActive());
            activity.setTypePronacej(activityDetails.getTypePronacej());
            activity.setTypeSoa(activityDetails.getTypeSoa());
            return ResponseEntity.ok(service.save(activity));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteActivity(@PathVariable Long id) {
        if (service.findById(id).isPresent()) {
            service.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
