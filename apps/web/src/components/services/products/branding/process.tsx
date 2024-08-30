import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@designali/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@designali/ui/card";

export function Process() {
  return (
    <div id="process" className="mb-40 md:mb-20">
      <div className="flex justify-center">
        <h1 className="inline-flex items-baseline bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-clip-text py-6 text-xl font-semibold text-transparent dark:bg-gradient-to-r dark:from-slate-400 dark:via-slate-200 dark:to-slate-400 dark:bg-clip-text sm:text-3xl">
          Design Process
        </h1>
      </div>
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>01. Strategy.</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>1.1 Brand Evaluation</CardTitle>
                  <CardDescription>
                    We commence with a thorough analysis of your existing brand
                    to identify its core strengths, areas for enhancement, and
                    unique selling propositions amidst the competitive
                    landscape.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>1.2 Market Insights</CardTitle>
                  <CardDescription>
                    Through exhaustive market analysis, we pinpoint your brand’s
                    standing, understand your competitive arena, and identify
                    your audience, uncovering new customer avenues.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>1.3 Strategic Plan</CardTitle>
                  <CardDescription>
                    Our brainstorming sessions are aimed at defining a creative
                    direction that not only aligns with current trends but
                    strategically positions your brand for optimal growth.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>02. Concept.</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>2.1 Positioning</CardTitle>
                  <CardDescription>
                    We establish a clear direction and purpose for your brand,
                    setting emotional benchmarks and guidelines for success.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2.2 Personality</CardTitle>
                  <CardDescription>
                    We craft a verbal and visual identity brimming with
                    character, ensuring your team’s messaging remains consistent
                    and impactful.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2.3 Insights</CardTitle>
                  <CardDescription>
                    By aligning your brand positioning with customer needs, we
                    develop the necessary tools for attracting your target
                    audience and setting metrics for brand interaction and
                    consumer behavior.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>03. Design.</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>3.1 Big Idea Amplification</CardTitle>
                  <CardDescription>
                    We refine your core idea to establish a strong brand
                    identity, allowing for market acceptance and scalability.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3.2 Concept Validation</CardTitle>
                  <CardDescription>
                    Through prototyping and audience feedback, we ensure your
                    brand’s market readiness, identifying any areas for
                    improvement.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3.3 Brand Expansion</CardTitle>
                  <CardDescription>
                    We apply the refined brand across your business assets,
                    leveraging feedback to maximize brand identity potential.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>04. Execution.</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-3 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>4.1 Asset Creation</CardTitle>
                  <CardDescription>
                    Our design team crafts assets that embody your brand’s
                    essence, ensuring consistency across all platforms.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>4.2 Brand Guidelines</CardTitle>
                  <CardDescription>
                    We collaborate with your team to set clear branding
                    guidelines, preparing your projects for future success.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>4.3 Usage Rules Handoff</CardTitle>
                  <CardDescription>
                    Facilitating a smooth brand transition, we provide
                    comprehensive training on usage guidelines and performance
                    metrics.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
