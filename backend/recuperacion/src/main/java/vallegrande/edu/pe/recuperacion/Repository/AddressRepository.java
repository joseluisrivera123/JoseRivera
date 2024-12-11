package vallegrande.edu.pe.recuperacion.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vallegrande.edu.pe.recuperacion.Model.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}