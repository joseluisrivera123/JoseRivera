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
        teen.setEstado('A'); // Estado predeterminado como activo
        return teenRepository.save(teen);
    }

    public Teen actualizar(Long id, Teen teenActualizado) {
        Teen teen = teenRepository.findById(id).orElse(null);
        if (teen != null) {
            teen.setName(teenActualizado.getName());
            teen.setSurnamefather(teenActualizado.getSurnamefather());
            teen.setSurnamemother(teenActualizado.getSurnamemother());
            teen.setDni(teenActualizado.getDni());
            teen.setEstado(teenActualizado.getEstado());
            return teenRepository.save(teen);
        }
        return null;
    }

    public void eliminar(Long id) {
        Teen teen = teenRepository.findById(id).orElse(null);
        if (teen != null) {
            teen.setEstado('I'); // Cambiar el estado a inactivo
            teenRepository.save(teen); // Guardar los cambios
        }
    }
}