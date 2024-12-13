package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.Teen;
import vallegrande.edu.pe.recuperacion.Repository.TeenRepository;

import java.util.List;

@Service
public class TeenService {

    @Autowired
    private TeenRepository teenRepository;

    public List<Teen> listarTodos() {
        return teenRepository.findAll();
    }

    public Teen buscarPorId(Long id) {
        return teenRepository.findById(id).orElse(null);
    }

    public Teen guardar(Teen teen) {
        // Verifica que el estado por defecto sea 'A'
        teen.setEstado('A');
        return teenRepository.save(teen);
    }

    public Teen actualizar(Long id, Teen teen) {
        return teenRepository.findById(id).map(existingTeen -> {
            existingTeen.setName(teen.getName());
            existingTeen.setSurnamefather(teen.getSurnamefather());
            existingTeen.setSurnamemother(teen.getSurnamemother());
            existingTeen.setDni(teen.getDni());
            existingTeen.setEstado(teen.getEstado());
            return teenRepository.save(existingTeen);
        }).orElse(null);
    }

    public void eliminar(Long id) {
        Teen teen = teenRepository.findById(id).orElse(null);
        if (teen != null) {
            teen.setEstado('I'); // Cambiar el estado a inactivo
            teenRepository.save(teen);
        }
    }
}
