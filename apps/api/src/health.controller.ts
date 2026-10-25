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
    // Database and external dependency checks will be added when those
    // integrations are provisioned. This endpoint currently confirms only
    // that the API process is responding.
    return {
      status: "ready",
      checks: {
        database: "not-configured",
        identityProvider: "not-configured",
        coachProvider: "not-configured",
      },
    };
  }
}
