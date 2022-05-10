import db from './firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { async } from '@firebase/util';


//funcion para traerse productos de la misma categoria
export const firestoreC = async (idCategory) =>{
let q;
if (idCategory){
    q =query(collection(db, "products"), where("idCategory", "==", idCategory));
}
 else {
    q = query(collection(db, "products"));
}
const querySnapshot = await getDocs(q);
const dataFromFirestore = querySnapshot.docs.map(document => ({
    id: document.id,
    ...document.data()
}));
return dataFromFirestore;;
}

//funcion para traer un solo producto
export const firestoreUno = async (itemId) => {
    const docRef = doc(db, "products", itemId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return{  id: itemId,
        ...docSnap.data()
      }
    } else {
      console.log("No existe el objeto!");
    }
}
//crear nueva coleccion para usuarios
export const createOrderInFirestore = async (order) => {
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    return newOrderRef;
}