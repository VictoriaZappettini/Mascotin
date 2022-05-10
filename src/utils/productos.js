const products = [
    {
        id:1,
        nombre: "CAMA ANTIESTRÉS",
        precio: 700 ,
        stock: 20,
       
        idCategory:"comfort",
        img: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1622200113-33032-IMG00067142.jpg?crop=1xw:1.00xh;center,top&resize=768:*"] ,
        descrip: "El diseño redondo y con el borde súper acolchado estarán muy cómodos.",
    },
    {
        id:2,
        nombre: "CAMA LURVIG",
        precio: 300 ,
        stock: 25,
        
        idCategory:"comfort",
        img: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632318102-cama-perros-ikea-1632318059.jpg?crop=0.760xw:0.760xh;0.122xw,0.122xh&resize=768:*"] ,
        descrip: "Esta camita tipo puf es súper cómoda.",
    },
    {
        id:3,
        nombre: "CESTA DE ALGODÓN",
        precio: 370,
        stock: 16,
        idCategory:"comfort",
        img: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632318215-cesta-para-perro-de-algodon-blanco-roto-con-estampado-1000-10-14-197142_1.jpg?crop=1xw:1.00xh;center,top&resize=768:*"],
        descrip: "En algodón y con un bonito estampado esta camita tiene su propio cojín.",
    },
    {
        id:4,
        nombre: "EL CORTE INGLÉS",
        precio: 720,
        stock: 8,
        idCategory:"comfort",
        img: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632318738-cama-perros-gris-el-corte-ingles-1632318684.jpg?crop=0.678xw:0.678xh;0.167xw,0.159xh&resize=768:*"],
        descrip: "Un diseño muy moderno en gris y con asa.",
    },
    {
        id:5,
        nombre: "CAMA CUEVA",
        precio: 550,
        stock: 22,
        idCategory:"comfort",
        img: ["https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632320039-accesorios_perro_cama_ombala_cueva_azul_OMB00359.jpg?crop=0.825xw:0.825xh;0.103xw,0.103xh&resize=768:*"],
        descrip: "El modelo es una cueva súper acogedora y cálida.",
    },
    {
        id:6,
        nombre: "CAMA PARA PERROS GRANDES",
        precio: 800,
        stock: 33,
        idCategory:"comfort",
        img:[ "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1632319447-31LvwnDw-MS._SL500_.jpg?crop=1xw:1.00xh;center,top&resize=768:*"],
        descrip: "Esta cama mide 110 x 80 cm.",
    },
    {
        id:7,
        nombre: "VITAL CAN BALANCED",
        precio: 1800,
        stock: 20,
        idCategory:"alimento",
        img:[ "https://miprecio.com.ar/wp-content/uploads/vital-can-1-1-183x300.jpg"],
        descrip: "Sabor y nutrición completa para tu mascota",
    },
    {
        id:8,
        nombre: "NUTRIQUE",
        precio: 1660,
        stock: 25,
        idCategory:"alimento",
        img:[ "https://miprecio.com.ar/wp-content/uploads/nutrique-201x300.jpg"],
        descrip: "73 % de proteína de origen animal. 43 % de Pavo y 30 % de cerdo.",
    },
    {
        id:9,
        nombre: "PEDIGREE",
        precio: 1590,
        stock: 18,
        
        idCategory:"alimento",
        img:["https://miprecio.com.ar/wp-content/uploads/pedigree.jpg"],
        descrip: "Elaborado con carne, pollo, trigo, maíz, zanahoria y espinaca sin saborizantes artificiales. ",
    },
    {
        id:10,
        nombre: "BREKKIES",
        precio: 1590,
        stock: 34,
        
        idCategory:"alimento",
        img:["https://m.media-amazon.com/images/I/51H4pJT4FgL._SL500_.jpg"],
        descrip: "100% Completo y Equilibrado ",
    },
    {
        id:11,
        nombre: "ADVANCE",
        precio: 1390,
        stock: 21,
        
        idCategory:"alimento",
        img:["https://m.media-amazon.com/images/I/41T0Ab43DML._SL500_.jpg"],
        descrip: "Favorece una piel sana y un pelo brillante ",
    },
    {
        id:12,
        nombre: "ULTIMA",
        precio: 1440,
        stock: 22,
        
        idCategory:"alimento",
        img:["https://m.media-amazon.com/images/I/41-QKK3YXNL._SL500_.jpg"],
        descrip: "Sabor óptimo: Selección de ingredientes de alta palatabilidad ",
    },{
        id:13,
        nombre: "PECUTE JUGUETE MASTICABLE ",
        precio: 2100,
        stock: 8,
       
        idCategory:"juguetes",
        img:["https://m.media-amazon.com/images/I/41v54bMhKuL._SL500_.jpg"],
        descrip: "Ayuda a desarrollar la inteligencia del perro!",
    },{
        id:14,
        nombre: "FUNNY REMOTE CONTROL RAT",
        precio: 1500,
        stock: 10,
      
        idCategory:"juguetes",
        img:["https://img.joomcdn.net/538aef9aca211fac1f79c7cdbefb2cccf789c82e_original.jpeg"],
        descrip: "Lindo juguete de ratón electrónico que puede ir hacia adelante, hacia atrás y girar. ",
    },
    {
        id:15,
        nombre: "COMFORTIS CHICO",
        precio: 1600,
        stock: 8,
      
        idCategory:"medicamentos",
        img:["https://www.timberline.com.ar/1397-home_default/comfortis-gato-2-a-5-kg-perro-4-a-9-kg.jpg"],
        descrip: "Comfortis Gato 2,8 a 5,4 KG / Perro 4 a 9 KG ",
    },{
        id:16,
        nombre: "COMFORTIS GRANDE",
        precio: 1700,
        stock: 12,
        
        idCategory:"medicamentos",
        img:["https://www.timberline.com.ar/625-home_default/comfortis-gato-5-a-11-kg-perro-9-a-18-kg.jpg"],
        descrip: "Comfortis Gato 5,5 a 11 KG / Perro 9 a 18 KG ",
    }

]; module.exports = {
    products,
  }