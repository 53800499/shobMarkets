import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, setDoc, updateDoc } from "firebase/firestore";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const firestoreCreateDoc = async(collectionName: string, docId: string, data: any) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await setDoc(docRef, data);
        return { data: true };
    } catch (error) {
        if (error instanceof FirebaseError) {
            return {
                error: {
                    code: error.code,
                    message: error.message,
                }
            };
        } else {
            return {
                error: {
                    code: "unknown",
                    message: "An unknown error occurred."
                }
            };
        }
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const firestoreUpdateDoc = async(collectionName: string, docId: string, data: any) => {
    try {
        const docRef = doc(db, collectionName, docId);
        await updateDoc(docRef, data);
        return { data: true };
    } catch (error) {
        if (error instanceof FirebaseError) {
            return {
                error: {
                    code: error.code,
                    message: error.message,
                }
            };
        } else {
            return {
                error: {
                    code: "unknown",
                    message: "An unknown error occurred."
                }
            };
        }
    }
};
