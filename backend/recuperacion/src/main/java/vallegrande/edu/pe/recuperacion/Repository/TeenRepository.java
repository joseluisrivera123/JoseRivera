package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vallegrande.edu.pe.recuperacion.Model.Teen;

public interface TeenRepository extends JpaRepository<Teen, Long> {
}
