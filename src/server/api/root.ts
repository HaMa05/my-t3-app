import { createTRPCRouter } from "~/server/api/trpc";
import { postRoute } from "./routers/post";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRoute,
});

// export type definition of API
export type AppRouter = typeof appRouter;
