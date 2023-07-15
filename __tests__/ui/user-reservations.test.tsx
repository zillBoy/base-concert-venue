import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

describe("UserReservations", () => {
  test("user has reservations shows the 'purchase more ticket' text", async () => {
    render(<UserReservations userId={1} />);

    const purchaseButtonText = await screen.findByText(
      /purchase more tickets/i
    );

    expect(purchaseButtonText).toBeInTheDocument();
  });

  test("display no reservations and 'purchase' button when no reservations exist", async () => {
    render(<UserReservations userId={0} />);

    const purchaseTicketButton = await screen.findByRole("button", {
      name: /purchase tickets/i,
    });
    expect(purchaseTicketButton).toBeInTheDocument();

    const ticketsHeading = screen.queryByRole("heading", {
      name: /your tickets/i,
    });
    expect(ticketsHeading).not.toBeInTheDocument();
  });
});
