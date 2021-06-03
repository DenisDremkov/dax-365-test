import * as functions from "firebase-functions";
import {admin} from "../admin";

interface Payload {
  id: string;
  categoryId: string;
  name: string;
  description: string;
}

export const updateItem = functions.https.onCall(async (data: Payload, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "only authenticated users can update items"
    );
  }
  const res = await admin.firestore()
      .collection("items")
      .doc(data.id)
      .get();
  if (!res.exists || (res && res.get("ownerUid") !== context.auth.uid)) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "you don't have permission delete this item or current item don't exist"
    );
  }
  await res.ref.update({
    categoryId: data.categoryId,
    name: data.name,
    description: data.description,
  });
  return Promise.resolve(true);
});
