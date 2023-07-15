import { render, screen } from "@testing-library/react";

import { UserReservations } from "@/components/user/UserReservations";

describe("UserReservations", () => {
  test("user has reservations shows the 'purchase more ticket' text", async () => {
    render(<UserReservations userId={0} />);

    const purchaseButtonText = await screen.findByText(
      /purchase more tickets/i
    );

    expect(purchaseButtonText).toBeInTheDocument();
  });
});
