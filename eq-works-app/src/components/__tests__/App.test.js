import { render } from "@testing-library/react";
import App from "../App";

test("renders App", async () => {
  await render(<App />);
});
