import { rest } from "msw";

import { readFakeData } from "../fakeData";
import { fakeUserReservations } from "../fakeData/userReservations";

export const handlers = [
  rest.get("http://localhost:3000/api/shows/:showId", async (req, res, ctx) => {
    const { fakeShows } = await readFakeData();
    const { showId } = req.params as { showId: string };

    // index / showId = 0 has seats avaiable in fake data
    // index / showId = 1 has NO seats avaiable
    return res(ctx.json({ show: fakeShows[Number(showId)] }));
  }),
  rest.get(
    "http://localhost:3000/api/users/:userId/reservations",
    (req, res, ctx) => res(ctx.json({ userReservations: fakeUserReservations }))
  ),
];
