import { getCurrentUser } from "@/lib/session";
import { deleteUserShortUrl } from "@/lib/validations/url";
import { checkUserStatus } from "@/lib/validations/user";

export async function POST(req: Request) {
  try {
    const user = checkUserStatus(await getCurrentUser());
    if (user instanceof Response) return user;

    const { url_id } = await req.json();
    if (!url_id) {
      return Response.json("url id is required", {
        status: 400,
        statusText: "url id is required",
      });
    }

    await deleteUserShortUrl(user.id, url_id);
    return Response.json("success");
  } catch (error) {
    return Response.json(error?.statusText || error, {
      status: error.status || 500,
      statusText: error.statusText || "Server error",
    });
  }
}
