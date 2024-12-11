package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.Address;
import vallegrande.edu.pe.recuperacion.Repository.AddressRepository;

import java.util.List;

@Service
public class AddressService {
    @Autowired
    private AddressRepository addressRepository;

    public List<Address> listarTodos() {
        return addressRepository.findAll();
    }

    public Address buscarPorId(Long id) {
        return addressRepository.findById(id).orElse(null);
    }

    public Address guardar(Address address) {
        return addressRepository.save(address);
    }

    public Address actualizar(Long id, Address addressActualizado) {
        Address address = addressRepository.findById(id).orElse(null);
        if (address != null) {
            address.setAddress(addressActualizado.getAddress());
            address.setIdadolescent(addressActualizado.getIdadolescent());
            address.setActive(addressActualizado.getActive());
            address.setUbigeo(addressActualizado.getUbigeo());
            return addressRepository.save(address);
        }
        return null;
    }

    public void eliminar(Long id) {
        addressRepository.deleteById(id);
    }
}
