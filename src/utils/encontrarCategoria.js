export default function obtenerCategoriaDesdeString(inputString) {
  const indiceInicio = inputString.indexOf("Categoría: ");

  if (indiceInicio !== -1) {
    const categoria = inputString.substring(
      indiceInicio + "Categoría: ".length
    );
    return categoria.trim(); // Elimina posibles espacios en blanco al principio o al final
  } else {
    return "No se encontró 'Categoría: ' en el string";
  }
}


