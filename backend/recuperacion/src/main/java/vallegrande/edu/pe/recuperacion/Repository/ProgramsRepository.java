package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vallegrande.edu.pe.recuperacion.Model.Programs;

@Repository
public interface ProgramsRepository extends JpaRepository<Programs, Long> {
}
