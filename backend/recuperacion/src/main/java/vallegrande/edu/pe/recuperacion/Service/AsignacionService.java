package vallegrande.edu.pe.recuperacion.Service;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.Asignacion;
import vallegrande.edu.pe.recuperacion.Model.Functionary;
import vallegrande.edu.pe.recuperacion.Model.Teen;
import vallegrande.edu.pe.recuperacion.Repository.AsignacionRepository;
import vallegrande.edu.pe.recuperacion.Repository.FunctionaryRepository;
import vallegrande.edu.pe.recuperacion.Repository.TeenRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class AsignacionService {

    @Autowired
    private AsignacionRepository asignacionRepository;

    @Autowired
    private TeenRepository teenRepository;

    @Autowired
    private FunctionaryRepository functionaryRepository;

    @Transactional
    public Asignacion asignarTeenAFunctionary(Asignacion asignacion) {
        // Validar que Teen existe
        Teen teen = teenRepository.findById(asignacion.getIdAdolescente())
                .orElseThrow(() -> new IllegalArgumentException("Adolescente no encontrado"));

        // Validar que Functionary existe
        Functionary functionary = functionaryRepository.findById(asignacion.getIdFuncionary())
                .orElseThrow(() -> new IllegalArgumentException("Funcionario no encontrado"));

        // Guardar en la tabla funcionarios_adolescente
        asignacion.setDescription("Asignación entre " + teen.getName() + " y " + functionary.getName());
        return asignacionRepository.save(asignacion);
    }

    // Nuevo método para listar todas las asignaciones
    public List<Map<String, Object>> listarAsignacionesConNombres() {
        return asignacionRepository.findAll().stream()
                .map(a -> {
                    Map<String, Object> map = new HashMap<>();
                    map.put("id", a.getId());
                    map.put("description", a.getDescription());
                    map.put("funcionarioName", functionaryRepository.findById(a.getIdFuncionary())
                            .map(f -> f.getName() + " " + f.getSurnamefather())
                            .orElse("Desconocido"));
                    map.put("adolescenteName", teenRepository.findById(a.getIdAdolescente())
                            .map(t -> t.getName() + " " + t.getSurnamefather())
                            .orElse("Desconocido"));
                    return map;
                }).collect(Collectors.toList());
    }


}
