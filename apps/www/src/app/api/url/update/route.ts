import { getCurrentUser } from "@/lib/session";
import { createUrlSchema, updateUserShortUrl } from "@/lib/validations/url";
import { checkUserStatus } from "@/lib/validations/user";

export async function POST(req: Request) {
  try {
    const user = checkUserStatus(await getCurrentUser());
    if (user instanceof Response) return user;

    const { data } = await req.json();
    if (!data?.id) {
      return Response.json(`Url id is required`, {
        status: 400,
        statusText: `Url id is required`,
      });
    }

    const { target, url, visible, active, id, expiration } =
      createUrlSchema.parse(data);
    const res = await updateUserShortUrl({
      id,
      userId: user.id,
      userName: user.name || "Anonymous",
      target,
      url,
      visible,
      active,
      expiration,
    });
    if (res.status !== "success") {
      return Response.json(res.status, {
        status: 400,
        statusText: `An error occurred. ${res.status}`,
      });
    }
    return Response.json(res.data);
  } catch (error) {
    return Response.json(error?.statusText || error, {
      status: error.status || 500,
      statusText: error.statusText || "Server error",
    });
  }
}
