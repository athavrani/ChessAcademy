import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  getLiveness() {
    return {
      status: "ok",
      service: "kids-chess-academy-api",
      mode: "foundation",
    };
  }

  @Get("ready")
  getReadiness() {
    // A readiness probe must not advertise production readiness while
    // required infrastructure integrations are still unconfigured.
    return {
      status: "not-ready",
      checks: {
        database: "not-configured",
        identityProvider: "not-configured",
        coachProvider: "not-configured",
      },
    };
  }
}
