import { useState, useEffect } from "react";


function generarEnlaceWhatsApp(numeroTelefono, mensaje) {
  // Formatear el número de teléfono
  const telefonoFormateado = encodeURIComponent(numeroTelefono);

  // Formatear el mensaje con saltos de línea
  const mensajeFormateado = encodeURIComponent(mensaje);
  // Crear el enlace de WhatsApp
  const enlaceWhatsApp = `https://api.whatsapp.com/send?phone=${telefonoFormateado}&text=${mensajeFormateado}`;

  return enlaceWhatsApp;
}

const useEnlaceWhatsApp = ({ numeroTelefono, cart }) => {
  //se obtiene la url de la página actual para luego generar los links a los productos asi el dueño a la hora de tazar los productos tiene acceso directo al catalogo
  const { hostname, port } = window.location;
  let url = "";
  if (hostname === "localhost") {
    url = `http://${hostname}:${port}`;
  } else {
    url = `https://${hostname}`;
  }
  const [mensaje, setMensaje] = useState("");
  const [enlaceWhatsApp, setEnlaceWhatsApp] = useState("");
  useEffect(() => {
    if (mensaje) {
      const enlace = generarEnlaceWhatsApp(`${numeroTelefono}`, mensaje);
      setEnlaceWhatsApp(enlace);
    }
  }, [mensaje]);
  useEffect(() => {
    if (cart.length > 0) {
      let string =
        "¡Hola Biotec! ¿como están? Estuve viendo su catalogo y quisiera saber el precio de los siguientes productos:\n";

      for (let i = 0; i < cart.length; i++) {
        const { name, amount, id } = cart[i];
        const productLink = `${url}/products/${id}`; // URL real del producto
        string += `- ${name} (${amount}): ${productLink}\n`;

        if (i === cart.length - 1) {
          string += "Desde ya muchas gracias";
        }
      }
      setMensaje(string);
    }
  }, [cart, url]);
  return [enlaceWhatsApp, mensaje];
};


export default useEnlaceWhatsApp;