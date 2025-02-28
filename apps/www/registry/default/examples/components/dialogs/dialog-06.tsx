import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Scrollable (sticky footer)</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <div className="overflow-y-auto">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="px-6 pt-6 text-base">
              Frequently Asked Questions (FAQ)
            </DialogTitle>
            <DialogDescription asChild>
              <div className="px-6 py-4">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-1">
                    <p>
                      <strong>Design Project Management</strong>
                    </p>
                    <p>
                      Kick off your design journey by submitting a detailed
                      project brief. Share your vision, goals, and any necessary
                      assets to help our team create designs that align with
                      your expectations.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Creative Revision Process</strong>
                    </p>
                    <p>
                      Clients can request revisions through the project
                      dashboard. Provide clear feedback, and our designers will
                      quickly refine the work to meet your needs.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Design Package Options</strong>
                    </p>
                    <p>
                      We offer three design packages tailored to your needs:
                      Basic (conceptual sketches), Professional (refined
                      visuals), and Premium (complete branding and visual
                      identity solutions).
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Communication Channels</strong>
                    </p>
                    <p>
                      Stay connected with your design team through email, live
                      chat during business hours, and an integrated project
                      discussion board.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Design File Security</strong>
                    </p>
                    <p>
                      We prioritize file security with encrypted storage,
                      regular data backups, and strict access controls, ensuring
                      your designs remain safe.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Platform Compatibility</strong>
                    </p>
                    <p>
                      Our design platform is optimized for various devices and
                      operating systems, including popular web browsers, iOS and
                      Android apps, and desktop environments.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Flexible Project Plans</strong>
                    </p>
                    <p>
                      Choose between per-project pricing or a monthly
                      subscription for ongoing design support. We offer special
                      discounts for annual commitments.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Payment Methods</strong>
                    </p>
                    <p>
                      We accept payments through major credit cards, PayPal, and
                      direct bank transfers. Regional payment options may be
                      available based on your location.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>24/7 Design Support</strong>
                    </p>
                    <p>
                      Our support team is available around the clock to help
                      with any design-related inquiries or technical issues.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Confidentiality and Privacy</strong>
                    </p>
                    <p>
                      We respect your privacy and ensure your design projects
                      and personal data remain protected according to industry
                      standards.
                    </p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </div>
        <DialogFooter className="border-t border-border px-6 py-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="button">Okay</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
