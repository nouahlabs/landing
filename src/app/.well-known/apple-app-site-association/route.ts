import { NextResponse } from "next/server";
import { getAppProducts } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  const apps = await getAppProducts();
  const details = apps
    .filter((app) => app.ios?.teamId && app.ios.bundleId)
    .map((app) => ({
      appID: `${app.ios?.teamId}.${app.ios?.bundleId}`,
      paths: app.ios?.paths?.length ? app.ios.paths : ["*"],
    }));

  return NextResponse.json(
    {
      applinks: {
        apps: [],
        details,
      },
    },
    {
      headers: {
        "Cache-Control": "public, max-age=300, s-maxage=300",
        "Content-Type": "application/json",
      },
    }
  );
}
