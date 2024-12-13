package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.Functionary;
import vallegrande.edu.pe.recuperacion.Repository.FunctionaryRepository;

import java.util.List;

@Service
public class FunctionaryService {

    @Autowired
    private FunctionaryRepository functionaryRepository;

    public List<Functionary> listarTodos() {
        return functionaryRepository.findAll();
    }

    public Functionary buscarPorId(Long id) {
        return functionaryRepository.findById(id).orElse(null);
    }

    public Functionary guardar(Functionary functionary) {
        return functionaryRepository.save(functionary);
    }

    public Functionary actualizar(Long id, Functionary functionaryActualizado) {
        Functionary functionary = functionaryRepository.findById(id).orElse(null);
        if (functionary != null) {
            functionary.setName(functionaryActualizado.getName());
            functionary.setSurnamefather(functionaryActualizado.getSurnamefather());
            functionary.setSurnamemother(functionaryActualizado.getSurnamemother());
            functionary.setDni(functionaryActualizado.getDni());
            functionary.setPhonenumber(functionaryActualizado.getPhonenumber());
            functionary.setRange(functionaryActualizado.getRange());
            functionary.setConfirmation(functionaryActualizado.getConfirmation());
            functionary.setDepartment(functionaryActualizado.getDepartment());
            functionary.setAddress(functionaryActualizado.getAddress());
            functionary.setEmail(functionaryActualizado.getEmail());
            functionary.setStatus(functionaryActualizado.getStatus());
            return functionaryRepository.save(functionary);
        }
        return null;
    }

    public void eliminar(Long id) {
        Functionary functionary = functionaryRepository.findById(id).orElse(null);
        if (functionary != null) {
            functionary.setStatus('I');  // Cambiar el estado a Inactivo (I)
            functionaryRepository.save(functionary);
        }
    }
}

