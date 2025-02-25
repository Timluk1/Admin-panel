import { capitalize } from "@/utils/capitalize";

test("Capitalize function", () => {
    expect(capitalize("name")).toBe("Name")
    expect(capitalize("")).toBe("")
    expect(capitalize("My name")).toBe("My name")
    expect(capitalize("a")).toBe("A")
})