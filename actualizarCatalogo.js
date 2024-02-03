import fs from "fs";
import path from "path";
import mammoth from "mammoth";
import { v4 as uuidv4 } from "uuid";
// Ruta de la carpeta principal que quieres analizar
const carpetaPrincipal = "./public/pagina_web";

// Función para recorrer las carpetas y generar el JSON
async function generarJson(ruta) {
  const archivos = fs.readdirSync(ruta);

  const registro = {
    carpetas: [],
  };

  for (const archivo of archivos) {
    const rutaCompleta = path.join(ruta, archivo);
    const esDirectorio = fs.statSync(rutaCompleta).isDirectory();

    if (esDirectorio) {
      const imagenes = obtenerImagenes(rutaCompleta);

      // Leer cualquier archivo DOCX si existe
      const archivosDocx = fs
        .readdirSync(rutaCompleta)
        .filter((file) => file.toLowerCase().endsWith(".docx"));

      let descripcion = "";

      if (archivosDocx.length > 0) {
        const text = await leerDocx(path.join(rutaCompleta, archivosDocx[0]));
        descripcion = text.replace(/\n\n/g, "\n");
      }

      registro.carpetas.push({
        id: uuidv4(),
        nombre: archivo,
        imagenes: imagenes,
        descripcion: descripcion,
      });
    }
  }

  // Guardar el registro como JSON
  const jsonRegistro = JSON.stringify(registro, null, 2);
  fs.writeFileSync("src/registro.json", jsonRegistro);

  console.log("Registro generado correctamente.");
}

// Función para obtener las imágenes de una carpeta
function obtenerImagenes(rutaCarpeta) {
  const archivos = fs.readdirSync(rutaCarpeta);
  const imagenes = archivos.filter((archivo) =>
    /\.(jpg|jpeg|png|gif)$/i.test(archivo)
  );
  return imagenes;
}

// Función para leer el contenido de un archivo DOCX
async function leerDocx(rutaDocx) {
  const contenido = await mammoth.extractRawText({ path: rutaDocx });
  return contenido.value.trim();
}

// Llamada a la función principal
generarJson(carpetaPrincipal);
