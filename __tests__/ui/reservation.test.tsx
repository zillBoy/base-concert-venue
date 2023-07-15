import { render, screen } from "@testing-library/react";

import { Reservation } from "@/components/reservations/Reservation";

describe("Reservation", () => {
  test("reservation page shows correct number of avaiable seats", async () => {
    render(<Reservation showId={0} submitPurchase={jest.fn()} />);

    const seatCountText = await screen.findByText(/10 seats left/i);
    expect(seatCountText).toBeInTheDocument();
  });

  test("reservation page show 'sold out' message and NO purchase if there are no seats avaiable", async () => {
    render(<Reservation showId={1} submitPurchase={jest.fn()} />);

    const soldOutMessage = await screen.findByRole("heading", {
      name: /show is sold out!/i,
    });
    expect(soldOutMessage).toBeInTheDocument();

    const purchaseButton = screen.queryByRole("button", {
      name: /purchase/i,
    });
    expect(purchaseButton).not.toBeInTheDocument();
  });
});
