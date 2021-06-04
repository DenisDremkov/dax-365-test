import * as functions from "firebase-functions";
import {admin} from "../admin";

interface RequestParams {
  categoryId: string;
}

export const getItems = functions.https.onCall(async (data: RequestParams, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
        "unauthenticated",
        "only authenticated users can get items"
    );
  }
  const request = admin
      .firestore()
      .collection("items")
      .where("ownerUid", "==", context.auth.uid);
  // todo - don't work - ???
  // if (data.categoryId) {
  //   request.where("categoryId", "==", data.categoryId);
  // }
  const res = await request.get();
  const result = res.docs
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .map((i): any => {
        return {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...i.data() as any,
          id: i.id,
        };
      })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .filter((i: any) => data.categoryId ? i.categoryId === data.categoryId : true);
  return result;
});

