package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vallegrande.edu.pe.recuperacion.Model.Asignacion;

public interface AsignacionRepository extends JpaRepository<Asignacion, Long> {
}