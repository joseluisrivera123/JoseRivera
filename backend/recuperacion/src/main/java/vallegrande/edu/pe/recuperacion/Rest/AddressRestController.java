package vallegrande.edu.pe.recuperacion.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import vallegrande.edu.pe.recuperacion.Model.Address;
import vallegrande.edu.pe.recuperacion.Service.AddressService;

import java.util.List;

@RestController
@RequestMapping("/api/address")
public class AddressRestController {
    @Autowired
    private AddressService addressService;

    @GetMapping
    public List<Address> listarAddresses() {
        return addressService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Address> obtenerAddress(@PathVariable Long id) {
        Address address = addressService.buscarPorId(id);
        return address != null ? ResponseEntity.ok(address) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public Address crearAddress(@RequestBody Address address) {
        return addressService.guardar(address);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Address> actualizarAddress(@PathVariable Long id, @RequestBody Address address) {
        Address addressActualizado = addressService.actualizar(id, address);
        return addressActualizado != null ? ResponseEntity.ok(addressActualizado) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarAddress(@PathVariable Long id) {
        addressService.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}