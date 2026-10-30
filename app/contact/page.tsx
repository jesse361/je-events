import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Contact J&E Events about a gathering, a program, or a question.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        current="Contact"
        eyebrow="Inquiries"
        title="Contact"
        description="Tell us what you are planning. The form validates your note, and it will say clearly if a message cannot be delivered."
      />
      <section className="py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <Suspense fallback={<p className="text-sm text-muted">Loading the form…</p>}>
            <ContactForm />
          </Suspense>
          <aside className="h-fit rounded-3xl bg-navy p-6 text-white">
            <h2 className="text-lg font-semibold">Placeholder details</h2>
            <dl className="mt-5 space-y-5 text-sm">
              <div>
                <dt className="text-white/60">Email</dt>
                <dd className="mt-1">
                  {site.emailPlaceholder}
                  <span className="mt-1 block text-white/65">Not a monitored inbox.</span>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">Phone</dt>
                <dd className="mt-1">
                  {site.phonePlaceholder}
                  <span className="mt-1 block text-white/65">Not a working number.</span>
                </dd>
              </div>
              <div>
                <dt className="text-white/60">Social</dt>
                <dd className="mt-1 text-white/75">Profiles have not been supplied.</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>
    </>
  );
}
