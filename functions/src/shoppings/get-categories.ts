import * as functions from "firebase-functions";
import {admin} from "../admin";

export const getCategories = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "only authenticated users can get categories"
    );
  }
  const res = await admin.firestore().collection("categories").get();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result = res.docs.map((i): any => {
    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ...i.data() as any,
      id: i.id,
    };
  });
  return result;
});

