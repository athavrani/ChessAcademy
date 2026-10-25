const assert = require("node:assert/strict");
const test = require("node:test");

const { HealthController } = require("../dist/health.controller.js");

test("liveness reports the API process as responding", () => {
  const controller = new HealthController();

  assert.deepEqual(controller.getLiveness(), {
    status: "ok",
    service: "kids-chess-academy-api",
    mode: "foundation",
  });
});

test("readiness does not claim production readiness before dependencies are configured", () => {
  const controller = new HealthController();
  const result = controller.getReadiness();

  assert.equal(result.status, "not-ready");
  assert.deepEqual(result.checks, {
    database: "not-configured",
    identityProvider: "not-configured",
    coachProvider: "not-configured",
  });
});
