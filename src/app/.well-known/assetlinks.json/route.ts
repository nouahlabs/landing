import { NextResponse } from "next/server";
import { getAppProducts } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  const apps = await getAppProducts();
  const statements = apps
    .filter(
      (app) =>
        app.android?.packageName &&
        app.android.sha256CertFingerprints?.length > 0
    )
    .map((app) => ({
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: app.android?.packageName,
        sha256_cert_fingerprints: app.android?.sha256CertFingerprints,
      },
    }));

  return NextResponse.json(statements, {
    headers: {
      "Cache-Control": "public, max-age=300, s-maxage=300",
      "Content-Type": "application/json",
    },
  });
}
