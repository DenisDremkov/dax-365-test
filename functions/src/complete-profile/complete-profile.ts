import * as functions from "firebase-functions";
import {admin} from "../admin";

interface Payload {
  firstName: string;
  lastName: string;
  email: string;
}

export const completeProfile = functions.https.onCall(async (data: Payload, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "only authenticated users can complete profile"
    );
  }
  const res = await admin
      .firestore()
      .collection("users")
      .add({
        uid: context.auth.uid,
        firstName: data.firstName,
        lastName: data.lastName,
        fullName: `${data.firstName} ${data.lastName}`,
        isProfileCompleted: true,
        email: data.email,
      });
  return res;
});

