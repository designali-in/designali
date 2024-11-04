import { getCurrentUser } from "@/lib/session";
import { getUserUrlMetaInfo } from "@/lib/validations/url";
import { checkUserStatus } from "@/lib/validations/user";

export async function GET(req: Request) {
  try {
    const user = checkUserStatus(await getCurrentUser());
    if (user instanceof Response) return user;

    const url = new URL(req.url);
    const urlId = url.searchParams.get("id");

    if (!urlId) {
      return Response.json("url id is required", {
        status: 400,
        statusText: "url id is required",
      });
    }

    const data = await getUserUrlMetaInfo(urlId);

    return Response.json(data);
  } catch (error) {
    return Response.json(error?.statusText || error, {
      status: error.status || 500,
      statusText: error.statusText || "Server error",
    });
  }
}
