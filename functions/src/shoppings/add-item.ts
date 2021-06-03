import * as functions from "firebase-functions";
import {admin} from "../admin";

interface AddItemPayload {
  name: string;
  description: string;
  categoryId: string;
}

export const addItem = functions.https.onCall((data: AddItemPayload, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "only authenticated users can add items"
    );
  }
  return admin.firestore().collection("items").add({
    name: data.name,
    description: data.description,
    categoryId: data.categoryId,
    ownerUid: context.auth.uid,
    date: new Date().toUTCString(),
  });
});
