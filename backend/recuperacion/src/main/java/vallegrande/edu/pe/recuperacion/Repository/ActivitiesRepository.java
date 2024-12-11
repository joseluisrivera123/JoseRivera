package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vallegrande.edu.pe.recuperacion.Model.Activities;

@Repository
public interface ActivitiesRepository extends JpaRepository<Activities, Long> {
}
