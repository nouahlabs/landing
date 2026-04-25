import { redirect } from "next/navigation";
import { defaultLocale, localizedPath } from "@/i18n/config";

interface WorkDetailRedirectProps {
  params: Promise<{ slug: string }>;
}

export default async function WorkDetailRedirect({
  params,
}: WorkDetailRedirectProps) {
  const { slug } = await params;
  redirect(localizedPath(`/work/${slug}`, defaultLocale));
}
