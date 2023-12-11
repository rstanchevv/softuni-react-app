import { Timestamp } from "firebase/firestore";

export default function dateConverter(timestamp) {
  // Date to Timestamp
  const t = Timestamp.fromDate(new Date());
  // console.log(t)
  // Timestamp to Date
  const d = t.toDate();
}
