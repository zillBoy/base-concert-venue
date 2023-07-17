import { filenames, writeJSONToFile } from "@/lib/db/db-utils";

import { readFakeData } from "../../fakeData";

export const resetDB = async () => {
  // failsafe against resetting production db!
  const safeToReset = process.env.NODE_ENV === "test";
  if (!safeToReset) {
    // eslint-disable-next-line no-console
    console.log("WARNING: database reset outside test environment!");
    return;
  }

  const { fakeShows, fakeBands, fakeUsers, fakeReservations } =
    await readFakeData();

  // overwrite data in files
  await Promise.all([
    writeJSONToFile(filenames.bands, fakeBands),
    writeJSONToFile(filenames.shows, fakeShows),
    writeJSONToFile(filenames.reservations, fakeReservations),
    writeJSONToFile(filenames.users, fakeUsers),
  ]);
};
