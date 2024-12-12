import { NewsletterSignUpForm } from "@/comp/forms/newsletter-signup-form";

export function NewsletterSection(): JSX.Element {
  return (
    <div className="mx-auto flex max-w-md justify-center p-6 xl:px-0">
      <NewsletterSignUpForm />
    </div>
  );
}
