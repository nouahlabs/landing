"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { AppProduct } from "@/types";

type ComplianceFormKind = "support" | "accountDeletion" | "report";
type SubmitState = "idle" | "submitting" | "success" | "error";

interface ComplianceFormProps {
  kind: ComplianceFormKind;
  subject: string;
  endpoint?: string;
  apps: AppProduct[];
  categories?: string[];
  categoryLabel?: string;
  labels: {
    appLabel: string;
    appPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    accountLabel: string;
    accountPlaceholder: string;
    contentUrlLabel: string;
    contentUrlPlaceholder: string;
    sending: string;
    send: string;
    success: string;
    failure: string;
    setupError: string;
  };
}

function endpointFromEnv(kind: ComplianceFormKind) {
  if (kind === "support") {
    return (
      process.env.NEXT_PUBLIC_FORMSPREE_SUPPORT_ENDPOINT ??
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
      ""
    );
  }

  if (kind === "accountDeletion") {
    return (
      process.env.NEXT_PUBLIC_FORMSPREE_ACCOUNT_DELETION_ENDPOINT ??
      process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
      ""
    );
  }

  return (
    process.env.NEXT_PUBLIC_FORMSPREE_REPORT_ENDPOINT ??
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    ""
  );
}

export function ComplianceForm({
  kind,
  subject,
  endpoint,
  apps,
  categories = [],
  categoryLabel,
  labels,
}: ComplianceFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const formEndpoint = useMemo(
    () => endpoint ?? endpointFromEnv(kind),
    [endpoint, kind]
  );
  const disabled = state === "submitting";
  const showAccountField = kind === "accountDeletion";
  const showContentField = kind === "report";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formEndpoint) {
      setState("error");
      setMessage(labels.setupError);
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("form_kind", kind);
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setState("success");
      setMessage(labels.success);
    } catch {
      setState("error");
      setMessage(labels.failure);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value={subject} />

      <div>
        <label htmlFor={`${kind}-app`} className="block text-sm font-medium text-text">
          {labels.appLabel}
        </label>
        <select
          id={`${kind}-app`}
          name="app"
          disabled={disabled}
          required
          className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-text outline-none transition-colors focus:border-text disabled:cursor-not-allowed disabled:bg-card-muted"
        >
          <option value="">{labels.appPlaceholder}</option>
          {apps.map((app) => (
            <option key={app.slug} value={app.name}>
              {app.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${kind}-name`} className="block text-sm font-medium text-text">
            {labels.nameLabel}
          </label>
          <input
            id={`${kind}-name`}
            name="name"
            type="text"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-text disabled:cursor-not-allowed disabled:bg-card-muted"
            placeholder={labels.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor={`${kind}-email`} className="block text-sm font-medium text-text">
            {labels.emailLabel}
          </label>
          <input
            id={`${kind}-email`}
            name="email"
            type="email"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-text disabled:cursor-not-allowed disabled:bg-card-muted"
            placeholder="you@example.com"
          />
        </div>
      </div>

      {categories.length > 0 && categoryLabel && (
        <div>
          <label
            htmlFor={`${kind}-category`}
            className="block text-sm font-medium text-text"
          >
            {categoryLabel}
          </label>
          <select
            id={`${kind}-category`}
            name="category"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-text outline-none transition-colors focus:border-text disabled:cursor-not-allowed disabled:bg-card-muted"
          >
            <option value="">{categoryLabel}</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      )}

      {showAccountField && (
        <div>
          <label
            htmlFor={`${kind}-account`}
            className="block text-sm font-medium text-text"
          >
            {labels.accountLabel}
          </label>
          <input
            id={`${kind}-account`}
            name="account_identifier"
            type="text"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-text disabled:cursor-not-allowed disabled:bg-card-muted"
            placeholder={labels.accountPlaceholder}
          />
        </div>
      )}

      {showContentField && (
        <div>
          <label
            htmlFor={`${kind}-content`}
            className="block text-sm font-medium text-text"
          >
            {labels.contentUrlLabel}
          </label>
          <input
            id={`${kind}-content`}
            name="content_reference"
            type="text"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-text disabled:cursor-not-allowed disabled:bg-card-muted"
            placeholder={labels.contentUrlPlaceholder}
          />
        </div>
      )}

      <div>
        <label
          htmlFor={`${kind}-message`}
          className="block text-sm font-medium text-text"
        >
          {labels.messageLabel}
        </label>
        <textarea
          id={`${kind}-message`}
          name="message"
          rows={6}
          required
          disabled={disabled}
          className="mt-2 block w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-text disabled:cursor-not-allowed disabled:bg-card-muted"
          placeholder={labels.messagePlaceholder}
        />
      </div>

      {message && (
        <p
          className={
            state === "success"
              ? "rounded-lg bg-accent-soft px-4 py-3 text-sm text-text"
              : "rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
          }
          role="status"
        >
          {message}
        </p>
      )}

      <Button type="submit" className="w-full justify-center sm:w-auto" disabled={disabled}>
        {disabled ? labels.sending : labels.send}
      </Button>
    </form>
  );
}
