import "../index";

declare const global: any;

it(`doesn't mock out matchMedia API`, () => {
  expect(global.matchMedia).not.toBeDefined();
});
