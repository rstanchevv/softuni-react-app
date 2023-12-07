import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "../lib/init-firebase";

export const getAllOffers = async () => {
  const offersCollectionRef = collection(db, "offers");
  try {
    const res = await getDocs(offersCollectionRef);
    const data = res.docs.map((off) => ({
      data: off.data(),
      id: off.id,
    }));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPersonalOffer = async (userId) => {
  const offersCollectionRef = collection(db, "offers");
  try {
    const res = await getDocs(offersCollectionRef);
    const data = res.docs.map((off) => ({
      data: off.data(),
      id: off.id,
    }));
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getAnOffer = async (offerId) => {
  const offerData = doc(db, "offers", offerId);
  try {
    const res = await getDoc(offerData);
    return res.data();
  } catch (err) {
    console.log(err);
  }
};

export const createOffer = async (data) => {
  await addDoc(collection(db, "offers"), data);
};

export const deleteOffer = async (offerId) => {
  await deleteDoc(doc(db, "offers", offerId));
};

export const editOffer = async (offerId, data) => {
  await setDoc(doc(db, "offers", offerId), data);
};

export const buyOffer = async (offerId, data, userId) => {
    await setDoc(doc(db, "offers", offerId), {...data, bought: true, boughtBy: userId} )
}
