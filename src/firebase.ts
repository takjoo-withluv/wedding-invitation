// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// 🔹 Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyCSSK1KZDSOdtNWTy3PwDagfMI4d05J0LY",
  authDomain: "dbwedding-invitation.firebaseapp.com",
  projectId: "dbwedding-invitation",
  storageBucket: "dbwedding-invitation.firebasestorage.app",
  messagingSenderId: "912408759210",
  appId: "1:912408759210:web:2fd5dec4e8ff1345b0b9d3",
};

// 🔹 Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ======================================
// Attendance 저장
// ======================================
export interface AttendanceData {
  side: "groom" | "bride";
  name: string;
  meal: "yes" | "undecided" | "no";
  count: number;
}

export const saveAttendance = async (data: AttendanceData) => {
  await addDoc(collection(db, "attendance"), {
    ...data,
    createdAt: new Date(),
  });
};

// ======================================
// GuestBook 저장
// ======================================
export interface GuestBookData {
  name: string;
  content: string;
  password: string;
}

export const saveGuestBook = async (data: GuestBookData) => {
  await addDoc(collection(db, "guestbook"), {
    ...data,
    createdAt: new Date(),
  });
};