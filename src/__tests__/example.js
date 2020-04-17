import React from "react";
import { render } from "@testing-library/react";
import CalculatorWindow from "../components/CalculatorWindow";

test("renders", () => {
  const { container } = render(<CalculatorWindow value="0" />);
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      background: #a6a1a0;
      text-align: right;
      height: 24vh;
      font-size: 15vmin;
    }

    <div>
      <div
        class="emotion-0"
      >
        0
      </div>
    </div>
  `);
});
