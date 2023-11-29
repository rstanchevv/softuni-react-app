import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../lib/init-firebase"

export const getAllOffers = async() => {
    const offersCollectionRef = collection(db, 'offers');
    try {
        const res = await getDocs(offersCollectionRef)
        const data = res.docs.map(off => ({
            data: off.data(),
            id: off.id
        }))
        return data;
    }
    catch(err){
        console.log(err)
    }
}

export function createNewOffer(){
    const offersCollectionRef = collection(db, 'offers');
    const today = new Date()
    const newOffer = {
        category: 'Tools',
        comment: 'a great chair',
        img: 'https://cdn11.bigcommerce.com/s-fj5u5hhzyb/images/stencil/1280x1280/products/27344/15554/NEW_Boucle_Occasional_Chair_Lores_01__99432.1675195686.jpg?c=1',
        price: 250,
        title: 'Great Chair',
        _createdOn: today
    }
    addDoc(offersCollectionRef, newOffer)
    .then(res => console.log(res))
    .catch(err => console.log(err.message))

  }