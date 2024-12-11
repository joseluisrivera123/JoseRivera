package vallegrande.edu.pe.recuperacion.Model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexion {
    private static Connection cnx = null;
    public static Connection conectar() throws Exception {
        try{
            String user = "recuperacion";
            String pwd = "Joserivera_123";
            String driver = "oracle.jdbc.driver.OracleDriver";
            String url = "jdbc:oracle:thin:@jdsj0yxohcnefhp2_medium?TNS_ADMIN=wallet";
            Class.forName(driver).newInstance();
            cnx = DriverManager.getConnection(url, user, pwd);
        }catch (Exception ex){
            System.out.println("Error de Conexion/Conectar " + ex.getMessage());
        }
        return cnx;
    }

    public static Connection getCnx(){
        return cnx;
    }
    public static void setCnx(Connection aCnx){
        cnx = aCnx;
    }

    public void cerrar() throws Exception {
        if (cnx != null) {
            cnx.close();
        }
    }

    public static void main(String[] args) throws Exception {
        conectar();
        try{
            if (cnx != null) {
                System.out.println("CONEXION EXITOSA");
            } else {
                System.out.println("SIN CONEXION REVISA");
            }
        } catch (Exception e) {
            System.out.println("Error en" + e.getMessage());
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, e);
        }
    }
    public Connection getCn(){
        return cnx;
    }
    public void setCn(Connection Cnx){
        this.cnx = Cnx;
    }
}
