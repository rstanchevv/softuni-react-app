import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore"
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

export async function getAnOffer(offerId){
    const offerData = doc(db, 'offers', offerId)
    try{
        const res = await getDoc(offerData)
        return res.data()
    } catch(err){
        console.log(err)
    }
  }