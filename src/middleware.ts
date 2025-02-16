import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export default withAuth(
  async function middleware(req: AuthenticatedRequest) {
    const kindeAuth = req.kindeAuth;
    console.log(kindeAuth);
  },
  {
    isReturnToCurrentPage: true,
    publicPaths: ["/", "/dashboard-demo"],

    // isAuthorized: ({token} : {token: any}) => {
    //   // The user will be considered authorized if they have the permission 'eat:chips'
    //   return token.permissions.includes("eat:chips");
    // }
  }
);
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};
