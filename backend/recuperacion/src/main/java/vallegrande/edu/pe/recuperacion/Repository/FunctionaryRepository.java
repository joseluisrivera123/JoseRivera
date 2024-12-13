package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vallegrande.edu.pe.recuperacion.Model.Functionary;

public interface FunctionaryRepository extends JpaRepository<Functionary, Long> {
}
