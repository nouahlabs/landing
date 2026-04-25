"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Dictionary } from "@/i18n/dictionaries";

type SubmitState = "idle" | "submitting" | "success" | "error";

function getFormspreeEndpoint() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;

  if (endpoint) {
    return endpoint;
  }

  if (formId) {
    return `https://formspree.io/f/${formId}`;
  }

  return "";
}

interface ContactFormProps {
  t: Dictionary;
}

export function ContactForm({ t }: ContactFormProps) {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const endpoint = useMemo(() => getFormspreeEndpoint(), []);
  const disabled = state === "submitting";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!endpoint) {
      setState("error");
      setMessage(t.contactForm.setupError);
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(t.contactForm.rejectedError);
      }

      form.reset();
      setState("success");
      setMessage(t.contactForm.success);
    } catch {
      setState("error");
      setMessage(t.contactForm.failure);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value={t.contactForm.subject} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text">
            {t.contactForm.name} <span className="text-accent-foreground">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
            placeholder={t.contactForm.namePlaceholder}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text">
            {t.common.email} <span className="text-accent-foreground">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text">
          {t.contactForm.company}
        </label>
        <input
          id="company"
          name="company"
          type="text"
          disabled={disabled}
          className="mt-2 block w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          placeholder={t.contactForm.companyPlaceholder}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-text"
          >
            {t.contactForm.projectType}{" "}
            <span className="text-accent-foreground">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          >
            <option value="">{t.contactForm.selectType}</option>
            {t.contactForm.projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-text">
            {t.contactForm.budget}
          </label>
          <select
            id="budget"
            name="budget"
            disabled={disabled}
            className="mt-2 block w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          >
            <option value="">{t.contactForm.selectBudget}</option>
            {t.contactForm.budgets.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          {t.contactForm.message}{" "}
          <span className="text-accent-foreground">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={disabled}
          className="mt-2 block w-full resize-none rounded-2xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          placeholder={t.contactForm.messagePlaceholder}
        />
      </div>

      {message && (
        <p
          className={
            state === "success"
              ? "rounded-2xl bg-accent-soft px-4 py-3 text-sm text-dark"
              : "rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
          }
          role="status"
        >
          {message}
        </p>
      )}

      <Button type="submit" className="w-full justify-center sm:w-auto">
        {state === "submitting" ? t.contactForm.sending : t.contactForm.send}
      </Button>
    </form>
  );
}
