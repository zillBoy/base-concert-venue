// Extenral Dependencies
import { render, screen } from "@testing-library/react";

import { readFakeData } from "@/__tests__/__mocks__/fakeData/index";
import BandComponent from "@/pages/bands/[bandId]";

describe("Band", () => {
  test("band component displays correct band information", async () => {
    const { fakeBands } = await readFakeData();
    render(<BandComponent band={fakeBands[0]} error={null} />);

    const heading = screen.getByRole("heading", {
      name: /the wandering bunnies/i,
    });
    expect(heading).toBeInTheDocument();
  });

  test("band component display error information", async () => {
    const { fakeBands } = await readFakeData();
    render(<BandComponent band={fakeBands[0]} error="EVERYTHING IS FINE!" />);

    const errorMessage = screen.getByRole("heading", {
      name: /could not retrieve band data: everything is fine!/i,
    });
    expect(errorMessage).toBeInTheDocument();
  });
});
