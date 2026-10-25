const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");

const appSource = readFileSync(
  join(__dirname, "..", "src", "App.tsx"),
  "utf8",
);

test("foundation preview is clearly labelled as non-production", () => {
  assert.match(appSource, /Foundation preview · Not production/);
});

test("preview explains that core product capabilities are not implemented", () => {
  assert.match(appSource, /does not yet provide accounts, saved progress/);
  assert.match(appSource, /No learner\s+data is collected by this screen/);
});
