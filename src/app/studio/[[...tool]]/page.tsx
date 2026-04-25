"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { isSanityConfigured } from "@/sanity/env";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return (
      <div className="min-h-screen bg-background px-6 py-28 text-text">
        <div className="mx-auto max-w-2xl rounded-lg border border-border bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            CMS Setup
          </p>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight">
            Sanity is ready to connect.
          </h1>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Add your Sanity project ID and dataset to the environment variables,
            then redeploy or restart the dev server to open the embedded Studio.
          </p>
          <div className="mt-6 rounded-md bg-surface p-4 font-mono text-sm text-text-secondary">
            NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
            <br />
            NEXT_PUBLIC_SANITY_DATASET=production
          </div>
        </div>
      </div>
    );
  }

  return (
    <div data-studio-route="true" className="min-h-screen">
      <NextStudio config={config} />
    </div>
  );
}
