import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Check, Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SERVICES, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

type Fields = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  service: string;
  address: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  service: "",
  address: "",
  message: "",
};

function buildBody(f: Fields) {
  return [
    `New service request from ${f.name}`,
    "",
    `Phone: ${f.phone}`,
    f.email ? `Email: ${f.email}` : null,
    `Property: ${f.propertyType}`,
    `Service: ${f.service}`,
    f.address ? `Address: ${f.address}` : null,
    "",
    f.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

export function QuoteForm({ className }: { className?: string }) {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {},
  );
  const [sent, setSent] = useState<Fields | null>(null);

  function set<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((prev) => ({ ...prev, [key]: value }));
  }

  function validate(f: Fields) {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (f.name.trim().length < 2) next.name = "Please enter your name.";
    if (f.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a 10-digit phone number.";
    if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      next.email = "Enter a valid email, or leave it blank.";
    if (!f.propertyType) next.propertyType = "Select a property type.";
    if (!f.service) next.service = "Select a service.";
    if (f.message.trim().length < 8)
      next.message = "Tell us a little about the work.";
    return next;
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next = validate(fields);
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(fields);
  }

  const links = useMemo(() => {
    if (!sent) return null;
    const body = buildBody(sent);
    const subject = `Service request — ${sent.service}`;
    return {
      mail: `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      sms: `sms:+1${SITE.phone}?body=${encodeURIComponent(body)}`,
      tel: SITE.phoneHref,
    };
  }, [sent]);

  if (sent && links) {
    return (
      <div
        className={cn(
          "rounded-xl bg-navy p-6 text-paper shadow-card sm:p-8",
          className,
        )}
      >
        <div className="flex size-12 items-center justify-center rounded-lg bg-paper/10">
          <Check className="size-6" />
        </div>
        <h3 className="mt-4 font-display text-3xl font-semibold uppercase tracking-[0.04em]">
          Request ready
        </h3>
        <p className="mt-2 text-paper/75">
          Thanks, {sent.name.split(" ")[0]}. Send this to Kaleb by text or
          email, or call now — he will take it from there.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <Button asChild variant="cream" size="lg">
            <a href={links.tel}>
              <Phone />
              Call {SITE.phoneDisplay}
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={links.sms}>
              <MessageSquare />
              Text this request
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={links.mail}>
              <Mail />
              Email this request
            </a>
          </Button>
        </div>
        <button
          type="button"
          className="mt-5 font-display text-[0.72rem] uppercase tracking-[0.16em] text-paper/60 hover:text-paper"
          onClick={() => {
            setSent(null);
            setFields(EMPTY);
          }}
        >
          Start another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-4", className)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          error={errors.name}
          htmlFor="q-name"
        >
          <Input
            id="q-name"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Phone" error={errors.phone} htmlFor="q-phone">
          <Input
            id="q-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="(904) 555-0123"
          />
        </Field>
      </div>
      <Field label="Email (optional)" error={errors.email} htmlFor="q-email">
        <Input
          id="q-email"
          name="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => set("email", e.target.value)}
          placeholder="you@email.com"
        />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="I am a"
          error={errors.propertyType}
          htmlFor="q-type"
        >
          <Select
            id="q-type"
            value={fields.propertyType}
            onChange={(v) => set("propertyType", v)}
          >
            <option value="">Select…</option>
            <option>Homeowner / resident</option>
            <option>Apartment community</option>
            <option>Property manager</option>
          </Select>
        </Field>
        <Field label="Service needed" error={errors.service} htmlFor="q-service">
          <Select
            id="q-service"
            value={fields.service}
            onChange={(v) => set("service", v)}
          >
            <option value="">Select…</option>
            {SERVICES.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
            <option>Not sure / other</option>
          </Select>
        </Field>
      </div>
      <Field label="Property address (optional)" htmlFor="q-address">
        <Input
          id="q-address"
          name="address"
          autoComplete="street-address"
          value={fields.address}
          onChange={(e) => set("address", e.target.value)}
          placeholder="Jacksonville address"
        />
      </Field>
      <Field label="Tell us about the work" error={errors.message} htmlFor="q-msg">
        <Textarea
          id="q-msg"
          name="message"
          value={fields.message}
          onChange={(e) => set("message", e.target.value)}
          placeholder="What needs to be done, and when do you need it?"
        />
      </Field>
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Prepare request
      </Button>
      <p className="text-sm text-muted">
        Prefer to skip the form? Call or text{" "}
        <a href={SITE.phoneHref} className="font-semibold text-navy">
          {SITE.phoneDisplay}
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
      {error ? <p className="text-sm text-red">{error}</p> : null}
    </div>
  );
}

function Select({
  id,
  value,
  onChange,
  children,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  children: ReactNode;
}) {
  return (
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex h-12 w-full rounded-md bg-paper px-3.5 text-base text-ink shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
    >
      {children}
    </select>
  );
}
