import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

describe("Reservation", () => {
  test("reservation page shows correct number of avaiable seats", async () => {
    render(<Reservation showId={0} submitPurchase={jest.fn()} />);

    const seatCountText = await screen.findByText(/10 seats left/i);
    expect(seatCountText).toBeInTheDocument();
  });
});
