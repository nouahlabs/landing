"use client";

import { useState } from "react";
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

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-surface p-12 text-center">
        <h3 className="text-xl font-semibold font-[family-name:var(--font-plus-jakarta)]">
          Thank you!
        </h3>
        <p className="mt-3 text-text-secondary">
          We&apos;ve received your message and will get back to you within 24
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-text"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-text"
        >
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent"
          placeholder="Your company name"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
            className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
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
          <label
            htmlFor="budget"
            className="block text-sm font-medium text-text"
          >
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            className="mt-2 block w-full rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
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
        <label
          htmlFor="message"
          className="block text-sm font-medium text-text"
        >
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 block w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-text-tertiary focus:border-accent"
          placeholder="Tell us about your project — what are you building, who is it for, and what are your goals?"
        />
      </div>

      <Button type="submit" className="w-full justify-center sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
