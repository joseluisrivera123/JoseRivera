package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vallegrande.edu.pe.recuperacion.Model.Teen;

import java.util.List;

public interface TeenRepository extends JpaRepository<Teen, Long> {

}
