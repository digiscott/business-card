import { portfolioUseCase } from "./portfolio";
import { tabletopUseCase } from "./tabletop";
// import { desktopBuddyUseCase } from "./desktopBuddy";
import { examRoomUseCase } from "./examRoom";
import { practiceEngagementUseCase } from "./practiceEngagement";
import { precisionEngagementUseCase } from "./precisionEngagement";
// import { ticTacProUseCase } from "./ticTacPro";

export const useCases = [
  portfolioUseCase,
  tabletopUseCase,
  // desktopBuddyUseCase,
  examRoomUseCase,
  practiceEngagementUseCase,
  precisionEngagementUseCase,
  // ticTacProUseCase,
];
