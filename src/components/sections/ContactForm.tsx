"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

const projectTypes = [
  "Mobile App",
  "Website",
  "Web Application",
  "MVP / Product Development",
  "Design Only",
  "Other",
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $15,000",
  "$15,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

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

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");
  const endpoint = useMemo(() => getFormspreeEndpoint(), []);
  const disabled = state === "submitting";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!endpoint) {
      setState("error");
      setMessage(
        "Formspree is not configured yet. Add NEXT_PUBLIC_FORMSPREE_FORM_ID or NEXT_PUBLIC_FORMSPREE_ENDPOINT."
      );
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
        throw new Error("Formspree rejected the submission.");
      }

      form.reset();
      setState("success");
      setMessage("Thanks. Your message was sent and we will reply soon.");
    } catch {
      setState("error");
      setMessage(
        "The message could not be sent. Please email hello@nouahlabs.com directly."
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="_subject" value="New Nouah Labs project lead" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-text">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          disabled={disabled}
          className="mt-2 block w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          placeholder="Your company name"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="projectType"
            className="block text-sm font-medium text-text"
          >
            Project Type <span className="text-accent">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            disabled={disabled}
            className="mt-2 block w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          >
            <option value="">Select a type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-text">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            disabled={disabled}
            className="mt-2 block w-full rounded-md border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          >
            <option value="">Select a range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text">
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={disabled}
          className="mt-2 block w-full resize-none rounded-md border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent disabled:cursor-not-allowed disabled:bg-surface"
          placeholder="Tell us what you are building, who it is for, and what you want to launch."
        />
      </div>

      {message && (
        <p
          className={
            state === "success"
              ? "rounded-md bg-accent-soft px-4 py-3 text-sm text-accent"
              : "rounded-md bg-red-50 px-4 py-3 text-sm text-red-700"
          }
          role="status"
        >
          {message}
        </p>
      )}

      <Button type="submit" className="w-full justify-center sm:w-auto">
        {state === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
