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
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Scrollable (custom scrollbar)</Button>
      </DialogTrigger>
      <DialogContent className="flex flex-col gap-0 p-0 sm:max-h-[min(640px,80vh)] sm:max-w-lg [&>button:last-child]:hidden">
        <ScrollArea className="flex max-h-full flex-col">
          <DialogHeader className="contents space-y-0 text-left">
            <DialogTitle className="px-6 pt-6">
              Frequently Asked Questions (FAQ)
            </DialogTitle>
            <DialogDescription asChild>
              <div className="p-6">
                <div className="space-y-4 [&_strong]:font-semibold [&_strong]:text-foreground">
                  <div className="space-y-1">
                    <p>
                      <strong>Design Project Management</strong>
                    </p>
                    <p>
                      Start your design journey by filling out the project
                      brief, sharing your vision, and providing any necessary
                      assets. Our team will collaborate with you every step of
                      the way.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Revision and Feedback Process</strong>
                    </p>
                    <p>
                      Clients can request revisions through the project
                      dashboard. Submit your feedback, and our designers will
                      quickly refine the work based on your input.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Design Package Tiers</strong>
                    </p>
                    <p>
                      We offer three design packages tailored to your needs:
                      Basic (concept sketches), Professional (fully refined
                      designs), and Premium (comprehensive branding and visual
                      identity).
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
                      We ensure your design files remain secure with encrypted
                      storage, regular data backups, and strict access controls.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Platform Compatibility</strong>
                    </p>
                    <p>
                      Our design platform works seamlessly across web browsers
                      like Chrome and Firefox and is optimized for mobile and
                      desktop applications.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Subscription and Project Plans</strong>
                    </p>
                    <p>
                      Choose between per-project pricing or a monthly
                      subscription for ongoing design support. Discounts are
                      available for long-term commitments.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Payment Methods</strong>
                    </p>
                    <p>
                      We accept payments through credit cards, PayPal, and bank
                      transfers, with regional options available depending on
                      your location.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>24/7 Design Support</strong>
                    </p>
                    <p>
                      Our support team is available around the clock to help
                      with any design inquiries or technical issues.
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p>
                      <strong>Confidentiality and Privacy</strong>
                    </p>
                    <p>
                      We respect your privacy and ensure your design projects
                      and personal data are protected according to industry
                      standards.
                    </p>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="px-6 pb-6 sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button type="button">Okay</Button>
            </DialogClose>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
