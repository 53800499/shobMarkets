/** @format */

import { auth } from "@/config/firebase-config";
import { UserDocument, UserInterface } from "@/types/userTypes";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore"; // Assurez-vous que ces imports sont corrects
import { useEffect, useState } from "react";
import { db } from "@/config/firebase-config"; // Assurez-vous que `db` est correctement importé

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<UserInterface | null>(null);
  const [authUserIsLoading, setAuthUserIsLoading] = useState<boolean>(true);

  // Formatter l'objet utilisateur pour correspondre à `UserInterface`
  const formatAuthUser = (user: UserInterface) => ({
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    emailVerified: user.emailVerified,
    phoneNumber: user.phoneNumber,
    photoURL: user.photoURL, // Corrigé de photoUrl à photoURL
  });

  // Récupérer le document utilisateur Firestore
  const getUserDocument = async (user: UserInterface) => {
    if (auth.currentUser) {
      const documentRef = doc(db, "users", auth.currentUser.uid); // Récupérer le document Firestore
      const compactUser = { ...user }; // Cloner l'utilisateur pour le modifier

      // Écouter les changements dans le document
      const unsubscribe = onSnapshot(documentRef, async (doc) => {
        if (doc.exists()) {
          compactUser.userDocument = doc.data() as UserDocument;
        }
        setAuthUser((prevAuthUser) =>({
            ...prevAuthUser,
            ...compactUser,
        }));
        setAuthUserIsLoading(false);
      });

      return unsubscribe; // Retourner la fonction de désabonnement
    }
  };

  // Gérer les changements de statut d'authentification
  const authStateChanged = async (authState: UserInterface | User | null) => {
    if (!authState) {
      setAuthUser(null);
      setAuthUserIsLoading(false);
      return;
    }

    setAuthUserIsLoading(true);
    const formattedUser = formatAuthUser(authState);
    await getUserDocument(formattedUser);
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribeAuth(); // Nettoyage de l'abonnement Firebase Auth
  }, []);

  return {
    authUser,
    authUserIsLoading,
  };
}
