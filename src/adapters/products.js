/* const oli = [
    {
      "id": "d7a182c0-ddc5-4f8b-9e4a-db0209a53b05",
      "nombre": "Cocina vintage 1",
      "imagenes": [
        "Adobe_Express_20231012_2335370_1.png",
        "Adobe_Express_20231012_2337150_1.png",
        "Adobe_Express_20231012_2337490_1.png",
        "Adobe_Express_20231012_2338140_1.png",
        "Adobe_Express_20231012_2338450_1.png",
        "Adobe_Express_20231012_2339050_1.png",
        "Adobe_Express_20231012_2340510_1.png",
        "Adobe_Express_20231012_2341140_1.png",
        "Adobe_Express_20231012_2341430_1.png",
        "Adobe_Express_20231012_2342060_1.png",
        "Adobe_Express_20231012_2342270_1.png"
      ],
      "descripcion": "Cocina vintage simple sin manijas \nEstilo: vintage \nColor: blanco \nHerrajes: herrajes con freno tanto en bisagras y telescopicas, incluye basurero.\nSeca plato en alacena."
    },
    {
      "id": "f0667551-8a3d-4ead-b75c-a666ee4173d8",
      "nombre": "Cocina vintage 3",
      "imagenes": [
        "Adobe_Express_20231113_2030330_1.png",
        "Adobe_Express_20231113_2031010_1.png",
        "Adobe_Express_20231113_2031410_1.png",
        "Adobe_Express_20231113_2032250_1.png",
        "Adobe_Express_20231113_2032570_1.png",
        "Adobe_Express_20231113_2033240_1.png",
        "Adobe_Express_20231113_2033520_1.png",
        "Adobe_Express_20231113_2034230_1.png"
      ],
      "descripcion": "Cocina vintage fresado \nEstilo: vintage \nColor: blanco interior puertas azul\nHerrajes: herrajes con freno tanto en bisagras y telescopicas, incluye basurero.\nTirador ochava."
    }
]; */
import encontrarCategoria from "../utils/encontrarCategoria";

export const adapterAll = (arrayProducts) => {
  return arrayProducts.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: 0,
      image: product.image,
      colors: ["#ffffff"],
      company: "Biotec",
      description: product.description,
      category: product.category,
      shipping: true,
    };
  });
};

export const adapterAlljson = (arrayProducts) => {
  const newArray = arrayProducts.map((product) => {
    const categoria = encontrarCategoria(product.descripcion);
    return {
      id: product.id,
      name: product.nombre,
      price: 0,
      image: `/pagina_web/${product.nombre}/${product.imagenes[0]}`,
      colors: ["#ffffff"],
      company: "Biotec",
      description: product.descripcion,
      category: categoria,
      shipping: true,
    };
  });
  return newArray;
};

export const adapterSingle = (product) => {
  //este mapeo toma la informacion necesaria solamente para el producto.
  const arrayImages = product.images.map((image) => {
    return { url: image.url, filename: image.filename };
  });
  return {
    name: product.name,
    description: product.description,
    stock: 999,
    images: arrayImages,
    colors: ["#ffffff"],
  };
};

export const adapterSinglejson = (product) => {
  //este mapeo toma la informacion necesaria solamente para el producto.
  /* 
    `/pagina_web/${product.nombre}/${product.imagenes[0]}`
    */
  const arrayImages = product.imagenes.map((image) => {
    return {
      url: `/pagina_web/${product.nombre}/${image}`,
      filename: image,
    };
  });
  return {
    name: product.nombre,
    description: product.descripcion,
    stock: 999,
    images: arrayImages,
    colors: ["#ffffff"],
  };
};

const objeto = {
  id: "recZkNf2kwmdBcqd0",
  stock: 3,
  price: 25999,
  shipping: true,
  colors: ["#ff0000", "#00ff00", "#0000ff"],
  category: "office",
  images: [
    {
      url: "https://www.course-api.com/images/store/product-1.jpeg",
      filename: "product-4.jpeg",
    },
    {
      url: "https://www.course-api.com/images/store/extra-product-1.jpeg",
      filename: "extra-1.jpeg",
    },
    {
      url: "https://www.course-api.com/images/store/extra-product-2.jpeg",
      filename: "extra-2.jpeg",
    },
    {
      url: "https://www.course-api.com/images/store/extra-product-3.jpeg",
      filename: "extra-3.jpeg",
    },
    {
      url: "https://www.course-api.com/images/store/extra-product-4.jpeg",
      filename: "extra-4.jpeg",
    },
  ],
  name: "accent chair",
  description:
    "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
  company: "marcos",
};
