import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCSSK1KZDSOdtNWTy3PwDagfMI4d05J0LY",
  authDomain: "dbwedding-invitation.firebaseapp.com",
  projectId: "dbwedding-invitation",
  storageBucket: "dbwedding-invitation.firebasestorage.app",
  messagingSenderId: "912408759210",
  appId: "1:912408759210:web:2fd5dec4e8ff1345b0b9d3",
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const saveAttendance = async (data: any) => {
  await addDoc(collection(db, "attendance"), {
    ...data,
    createdAt: new Date(),
  })
}