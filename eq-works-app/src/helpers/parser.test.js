import { toTimestamp } from "./parser";

describe("toTimestamp", () => {
  test("it should return timestamp from date", () => {
    expect(toTimestamp({ date: "2017-01-01" })).toBe(1483228800000);
  });
  test("it should return timestamp from date and hour", () => {
    expect(toTimestamp({ date: "2017-01-01", hour: 1 })).toBe(1483250400000);
  });
});
