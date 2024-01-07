

// 1er desafio backend 

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
            id: ++ProductManager.ultid,
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
           const producto = this.prod.find(item => item.id ===id);
           if(!producto) {
            console.log("Not Found");
           } else {
            console.log(producto);
           }

    }

    

    }

// testing

const vinos = new ProductManager;
const cervezas = new ProductManager;


//console.log(vinos.getProducts());

//se llama al metodo addProduct con los campos:
// title: “los pasos”
// description:”tinto malbec”
// price:200,
// thumbnail:”Sin imagen”
// code:”abc123”,
// stock:25

//vinos.addProduct("los pasos","tinto malbec", 2000, "sin imagen", "abc123", 25);
cervezas.addProduct("barba roja","scotch", 1500, "sin imagen", "abc125",25);
//console.log(vinos.getProducts());


console.log(cervezas.getProductsById(3));


//console.log(cervezas.getProductsById(1));
console.log(cervezas.getProductsById(3));