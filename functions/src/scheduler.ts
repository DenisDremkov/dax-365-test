import * as functions from "firebase-functions";
import {admin} from "./admin";

export const scheduledFunction = functions.pubsub
    .schedule("0 13 * * *")
    .timeZone("Australia/Brisbane")
    .onRun(async () => {
      const now = new Date().getTime();
      const list = await admin
          .firestore()
          .collection("items")
          .where("date", "<=", now)
          .get();
      list.docs.forEach((doc) => {
        doc.ref.delete();
      });
    });

