const products = [{
    id: 1,
    nombre: "Doctor Who | Revoluciones de terror",
    nuevo: false,
    descuento: 0, //0%
    descripcion: "Nueva aventura del Décimo Doctor",
    precio: 25,
    stock: 10,
    imagen: "https://fandogamia.com/724-large_default/doctor-who-revoluciones-de-terror.jpg"
  },{
    nombre: "Rick y Morty VS Dungeons and Dragons",
    descripcion: "¡Dos gigantes de la cultura popular forman equipo y ninguno de sus multiversos está listo para lo que vaya a ocurrir!",
    precio: 19,
    stock: 0,
    nuevo: true,
    descuento: 0,
    imagen: "https://cdn.normacomics.com/media/catalog/product/cache/1/image/588x473/9df78eab33525d08d6e5fb8d27136e95/r/i/rick_y_morty_vs_dungeons___dragons.jpg"
  },{
    nombre: "Historias del Multiverso Oscuro",
    descripcion: "¡Los momentos más memorables de la historia de DC, reinventados para historias del Multiverso Oscuro!",
    precio: 31,
    stock: 5,
    descuento: 0.1,
    nuevo: false,
    imagen: "https://cdn.normacomics.com/media/catalog/product/cache/1/image/588x473/9df78eab33525d08d6e5fb8d27136e95/h/i/historias_multiverso.jpg"
  },{
    nombre: "Doctor Who | Vida tras la muerte",
    descripcion: "Primera aventura del decimoprimer Doctor",
    precio: 12,
    stock: 3,
    descuento: 0,
    nuevo: true,
    imagen: "https://cdn.normacomics.com/media/catalog/product/cache/1/image/588x473/9df78eab33525d08d6e5fb8d27136e95/d/r/dr_who_3.jpg"
  },{
    nombre: "Comic 1",
    descripcion: "Comic 1",
    precio: 12,
    stock: 3,
    descuento: 0,
    nuevo: false,
    imagen: "https://cdn5.vectorstock.com/i/1000x1000/52/39/comic-book-cover-template-vector-17835239.jpg"
  },{
    nombre: "Comic 2",
    descripcion: "Comic 2",
    precio: 12,
    stock: 3,
    descuento: 0,
    nuevo: false,
    imagen: "https://cdn5.vectorstock.com/i/1000x1000/52/39/comic-book-cover-template-vector-17835239.jpg"
  },{
    nombre: "Comic 3",
    descripcion: "Comic 3",
    precio: 12,
    stock: 3,
    descuento: 0,
    nuevo: false,
    imagen: "https://cdn5.vectorstock.com/i/1000x1000/52/39/comic-book-cover-template-vector-17835239.jpg"
  },{
    nombre: "Comic 4",
    descripcion: "Comic 4",
    precio: 12,
    stock: 3,
    descuento: 0,
    nuevo: false,
    imagen: "https://cdn5.vectorstock.com/i/1000x1000/52/39/comic-book-cover-template-vector-17835239.jpg"
  }];

export function getProducts(){
    return products; 
}
