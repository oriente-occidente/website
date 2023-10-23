import resolveLink from "@/lib/resolveLink";

describe("Resolve link for model Page", () => {
  it("resolve a root page link", () => {
    const locale = "it";
    const item = {
      apiKey: "page",
      slug: "supportaci",
      section: "",
    };
    const path = resolveLink({ ...item, locale });
    console.log("path:", path);
    expect(path).toBe("/supportaci");
  });

  it("resolve a festivaò page link", () => {
    const locale = "en";
    const item = {
      apiKey: "page",
      slug: "tickets",
      section: "festival",
    };
    const path = resolveLink({ ...item, locale });
    console.log("path:", path);
    expect(path).toBe("/en/festival/p/tickets");
  });

  it("resolve a festivaò page link", () => {
    const locale = "it";
    const item = {
      apiKey: "page",
      slug: "sostenibilita",
      section: "info",
    };
    const path = resolveLink({ ...item, locale });
    console.log("path:", path);
    expect(path).toBe("/info/sostenibilita");
  });
});
