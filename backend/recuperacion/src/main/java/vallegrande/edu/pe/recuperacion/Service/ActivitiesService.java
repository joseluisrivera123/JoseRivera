package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.Activities;
import vallegrande.edu.pe.recuperacion.Repository.ActivitiesRepository;

import java.util.List;

@Service
public class ActivitiesService {
    @Autowired
    private ActivitiesRepository activitiesRepository;

    public List<Activities> listarTodos() {
        return activitiesRepository.findAll();
    }

    public Activities buscarPorId(Long id) {
        return activitiesRepository.findById(id).orElse(null);
    }

    public Activities guardar(Activities activity) {
        return activitiesRepository.save(activity);
    }

    public Activities actualizar(Long id, Activities activityActualizada) {
        Activities activity = activitiesRepository.findById(id).orElse(null);
        if (activity != null) {
            activity.setName(activityActualizada.getName());
            activity.setDescription(activityActualizada.getDescription());
            activity.setActivityDate(activityActualizada.getActivityDate());
            activity.setDuration(activityActualizada.getDuration());
            activity.setLocation(activityActualizada.getLocation());
            activity.setActive(activityActualizada.getActive());
            activity.setTypePronacej(activityActualizada.getTypePronacej());
            activity.setTypeSoa(activityActualizada.getTypeSoa());
            return activitiesRepository.save(activity);
        }
        return null;
    }

    public void eliminar(Long id) {
        activitiesRepository.deleteById(id);
    }
}