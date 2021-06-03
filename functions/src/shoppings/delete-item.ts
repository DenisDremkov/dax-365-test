import * as functions from "firebase-functions";
import {admin} from "../admin";

interface Payload {
  id: string
}

export const deleteItem = functions.https.onCall(async (data: Payload, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "only authenticated users can delete items"
    );
  }
  const res = await admin.firestore()
      .collection("items")
      .doc(data.id)
      .get();
  if (!res || (res && res.get("ownerUid") !== context.auth.uid)) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "you don't have permission delete this item or current item don't exist"
    );
  }
  await admin.firestore()
      .collection("items")
      .doc(data.id)
      .delete();
  return Promise.resolve(true);
});
