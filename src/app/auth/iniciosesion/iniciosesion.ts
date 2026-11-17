// Importa Component, que permite definir un componente de Angular. 
import { Component } from "@angular/core"; 
 
// Importa AuthService, que contiene el método para iniciar sesión 
// y comunicarse con la API REST en PHP. 

 
// Importa Router, que permite navegar entre las páginas 
// de la aplicación sin tener que recargarla. 
import { Router } from "@angular/router"; 
import { AuthServiceTs } from "../../servicios/auth.service.ts";
 
// Define las características principales del componente. 
@Component({ 
 
  // Nombre que identifica al componente en Angular. 
  selector: "app-inicio-sesion", 
 
  // Indica el archivo HTML que contiene el formulario 
  // que verá el usuario en la pantalla. 
  templateUrl: "./inicio-sesion.component.html" 
}) 
 
// Declara y exporta la clase del componente. 
// Export permite utilizar esta clase desde otros archivos. 
export class Iniciosesion {
   // Almacena el correo electrónico ingresado en el formulario. 
  // Comienza como una cadena vacía. 
  email = ""; 
 
  // Almacena la contraseña ingresada por el usuario. 
  // Comienza como una cadena vacía. 
  contraseña = ""; 
 
  // Almacena el mensaje de error que se mostrará 
  // si el inicio de sesión falla. 
  error = ""; 
 
  // Inyecta AuthService para realizar el inicio de sesión 
  // y Router para navegar después de recibir la respuesta. 
  constructor(private auth: AuthServiceTs, private router: Router) {} 
 
  // Método que se ejecuta cuando el usuario intenta ingresar. 
  // void indica que el método no devuelve un valor directamente. 
  ingresar(): void { 
 
    // Llama al método login del servicio de autenticación. 
    // Le envía el correo y la contraseña ingresados. 
    // subscribe permite recibir y procesar la respuesta del servidor. 
    this.auth.login(this.email, this.contraseña).subscribe({ 
 
      // Se ejecuta si la petición se completa correctamente. 
      next: () => 
 
        // Redirige al usuario a la página de inicio. 
        // El servicio AuthService guarda el token y los datos 
        // del usuario cuando recibe la respuesta correcta. 
        this.router.navigate(["/inicio"]), 
 
      // Se ejecuta si ocurre un error en la petición, 
      // por ejemplo, si las credenciales son incorrectas. 
      error: () => 
 
        // Guarda el mensaje que se mostrará en el formulario. 
        this.error = "Email o contraseña incorrectos" 
    }); 
  } 
} 

