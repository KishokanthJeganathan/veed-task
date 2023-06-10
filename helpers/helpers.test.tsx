import { getLastWeekDate } from "./helpers";

describe("getLastWeekDate", () => {
  it("returns a date seven days in the past", () => {
    const mockDate = new Date("2023-06-10");

    jest.useFakeTimers();
    jest.setSystemTime(mockDate);

    const expectedDate = "2023-06-03";
    const actualDate = getLastWeekDate();

    expect(actualDate).toBe(expectedDate);
  });
});
