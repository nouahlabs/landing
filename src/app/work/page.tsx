import { redirect } from "next/navigation";
import { defaultLocale, localizedPath } from "@/i18n/config";

export default function WorkPage() {
  redirect(localizedPath("/work", defaultLocale));
}
