package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.FunctionaryAdolescent;
import vallegrande.edu.pe.recuperacion.Repository.FunctionaryAdolescentRepository;

import java.util.List;

@Service
public class FunctionaryAdolescentService {

    @Autowired
    private FunctionaryAdolescentRepository repository;

    public List<FunctionaryAdolescent> listarTodos() {
        return repository.findAll();
    }

    public FunctionaryAdolescent buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public FunctionaryAdolescent guardar(FunctionaryAdolescent entity) {
        return repository.save(entity);
    }

    public void eliminar(Long id) {
        repository.deleteById(id);
    }
}
