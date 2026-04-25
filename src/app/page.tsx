import { redirect } from "next/navigation";
import { defaultLocale, localizedPath } from "@/i18n/config";

export default function HomePage() {
  redirect(localizedPath("/", defaultLocale));
}
