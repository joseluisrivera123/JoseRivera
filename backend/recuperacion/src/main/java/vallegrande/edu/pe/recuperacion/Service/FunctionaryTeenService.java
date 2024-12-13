package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vallegrande.edu.pe.recuperacion.Model.FunctionaryTeen;
import vallegrande.edu.pe.recuperacion.Repository.FunctionaryTeenRepository;
import vallegrande.edu.pe.recuperacion.Repository.FunctionaryRepository;
import vallegrande.edu.pe.recuperacion.Repository.TeenRepository;

import java.sql.Date;
import java.util.List;

@Service
public class FunctionaryTeenService {

    @Autowired
    private FunctionaryTeenRepository functionaryTeenRepository;

    @Autowired
    private FunctionaryRepository functionaryRepository;

    @Autowired
    private TeenRepository teenRepository;

    @Transactional
    public FunctionaryTeen asociarFunctionaryTeen(Long idFunctionary, Long idTeen, String description) {
        var functionary = functionaryRepository.findById(idFunctionary).orElseThrow(() -> new IllegalArgumentException("Functionary no encontrado"));
        var teen = teenRepository.findById(idTeen).orElseThrow(() -> new IllegalArgumentException("Teen no encontrado"));

        FunctionaryTeen functionaryTeen = new FunctionaryTeen();
        functionaryTeen.setFunctionary(functionary);
        functionaryTeen.setTeen(teen);
        functionaryTeen.setDescription(description);
        functionaryTeen.setStartDate(new Date(System.currentTimeMillis()));
        functionaryTeen.setRegisterDate(new Date(System.currentTimeMillis()));

        return functionaryTeenRepository.save(functionaryTeen);
    }

    public FunctionaryTeen findById(Long id) {
        return functionaryTeenRepository.findById(id).orElse(null);  // Retorna null si no lo encuentra
    }

    // Método findAll agregado
    public List<FunctionaryTeen> findAll() {
        return functionaryTeenRepository.findAll();
    }

    @Transactional
    public void eliminarAsociacion(Long id) {
        functionaryTeenRepository.deleteById(id);
    }
}
