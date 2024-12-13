package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.Activities;
import vallegrande.edu.pe.recuperacion.Repository.ActivitiesRepository;

import java.util.List;
import java.util.Optional;

@Service
public class ActivitiesService {

    @Autowired
    private ActivitiesRepository repository;

    public List<Activities> findAll() {
        return repository.findAll();
    }

    public Optional<Activities> findById(Long id) {
        return repository.findById(id);
    }

    public Activities save(Activities activity) {
        return repository.save(activity);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}
