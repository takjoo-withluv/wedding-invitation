// firebase.ts
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";

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
  const snapshot = await getDocs(collection(db, "guestbook"));

  // 숫자가 아닌 id는 무시하고 숫자로 변환
  const ids = snapshot.docs
  .map(doc => doc.data().id)
  .filter(id => id !== undefined && id !== null); // 0도 포함

  const nextId = ids.length ? Math.max(...ids) + 1 : 1;

  await addDoc(collection(db, "guestbook"), {
    id: nextId,
    ...data,
    createdAt: new Date(),
  });
};

// 🔹 export 추가
export { db, collection, query, orderBy, getDocs, doc, deleteDoc };