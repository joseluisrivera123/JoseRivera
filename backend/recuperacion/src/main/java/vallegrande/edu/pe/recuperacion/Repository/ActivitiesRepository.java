package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vallegrande.edu.pe.recuperacion.Model.Activities;

public interface ActivitiesRepository extends JpaRepository<Activities, Long> {
}