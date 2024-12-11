package vallegrande.edu.pe.recuperacion.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vallegrande.edu.pe.recuperacion.Model.Programs;
import vallegrande.edu.pe.recuperacion.Repository.ProgramsRepository;

import java.util.List;

@Service
public class ProgramsService {
    @Autowired
    private ProgramsRepository programsRepository;

    public List<Programs> listarTodos() {
        return programsRepository.findAll();
    }

    public Programs buscarPorId(Long id) {
        return programsRepository.findById(id).orElse(null);
    }

    public Programs guardar(Programs program) {
        return programsRepository.save(program);
    }

    public Programs actualizar(Long id, Programs programActualizado) {
        Programs program = programsRepository.findById(id).orElse(null);
        if (program != null) {
            program.setName(programActualizado.getName());
            program.setProgramType(programActualizado.getProgramType());
            program.setBeneficiary(programActualizado.getBeneficiary());
            program.setResponsible(programActualizado.getResponsible());
            program.setDescription(programActualizado.getDescription());
            program.setDuration(programActualizado.getDuration());
            program.setProgramCondition(programActualizado.getProgramCondition());
            program.setProgramLevel(programActualizado.getProgramLevel());
            return programsRepository.save(program);
        }
        return null;
    }

    public void eliminar(Long id) {
        programsRepository.deleteById(id);
    }
}

