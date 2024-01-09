

// 1er desafio backend   
// alumno : LEZCANO JAVIER 

class ProductManager {

    static ultid = 0; // ultid : variable estatica que pertenece a la clase Productmanager que se incrementara en 1 ,cuando se ingresa un producto
    constructor(){
        this.prod = [];  // se crea un array vacio llamado prod,donde se agregaran los productos
    }

    addProduct(title,description,price,img,code,stock){
            //validamos que se agreagron todos los campos
            if(!title || !description || !price || !img || !code || !stock){
                console.log("todos los campos son obligatorios");
            }
            // validamos que el code sea unico
            if (this.prod.some(item => item.code === code)){
                console.log("el codigo debe ser unico");
            }


        const newproductos = {
            id: ++ProductManager.ultid,  // se incrementa en 1 la variable ultid y se la asigna al campo id
            title,
            description,
            price,
            img,
            code,
            stock

        }
        // agregar al array
        this.prod.push(newproductos);

    }

    getProducts(){
          return this.prod;

    }

    getProductsById(id){
           const producto = this.prod.find(item => item.id ===id); //con el metodo find ,busca el elemento por su id
           if(!producto) {
            console.log("Not Found");
           } else {
            console.log(producto);
           }

    }

    

    }

// testing

const productos1 = new ProductManager;  // se crea una instancia de ProductManager

const productos2 = new ProductManager;  // se crea otra instancia productos2


//console.log(producto1.getProducts());   // se llama al metodo getProduts con el array vacio

//se llama al metodo addProduct con los campos:
// title: “vinos”
// description:”tinto malbec”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

// agregar un producto al array productos1, generando un id autoincrementable
//productos1.addProduct("los pasos","tinto malbec", 2000, "sin imagen", "abc123", 25); 


//agregar un  producto al array productos2, con su id autoincrementable y unico
productos2.addProduct("barba roja","scotch", 1500, "sin imagen", "abc125",25); 


//console.log(productos1.getProducts());  // muestra los productos del array productos1


//console.log(productos2.getProductsById());  //  muestra los productos del array produtos2


//console.log(productos1.getProductsById(1)); // devuelve el producto con id = 1

//console.log(productos2.getProductsById(3));   // devuelve "NOT FOUND", al no existir ese producto con id=3

// falta completar el campo stock, devuelve el msj "todos los campos son obligatorios  "
// devuelve tambien "el codigo debe ser unico", esta repetido el campo code
productos2.addProduct("barba roja","scotch", 1500, "sin imagen", "abc125");


   
