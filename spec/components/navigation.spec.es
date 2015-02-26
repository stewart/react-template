const Navigation = source("components/navigation");

describe("Navigation", () => {
  it("is a React component", () => {
    expect(TestUtils.isElement(<Navigation />)).to.be.eql(true);
  });
});
