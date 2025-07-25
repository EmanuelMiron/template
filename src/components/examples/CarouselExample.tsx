import { useEffect, useState } from "react";
import { Card, CardContent } from "../Card";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "../Carousel";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";

export const CarouselExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Carousel Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Carousel Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Carousel Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Carousel Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">Normal Carousel</h5>
                  <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-4xl font-semibold">
                                  {index + 1}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Carousel with Different Sizes
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Small Size:
                      </p>
                      <Carousel carouselSize="sm" className="w-full max-w-xs">
                        <CarouselContent>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-2xl font-semibold">
                                      {index + 1}
                                    </span>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious buttonSize="sm" />
                        <CarouselNext buttonSize="sm" />
                      </Carousel>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Large Size:
                      </p>
                      <Carousel carouselSize="lg" className="w-full max-w-lg">
                        <CarouselContent>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card>
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-5xl font-semibold">
                                      {index + 1}
                                    </span>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious buttonSize="lg" />
                        <CarouselNext buttonSize="lg" />
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Carousel Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Advanced Carousel Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">
                    Carousel with Multiple Items Visible
                  </h5>
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full max-w-sm"
                  >
                    <CarouselContent>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                          key={index}
                          className="md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-3xl font-semibold">
                                  {index + 1}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Carousel with Custom Spacing
                  </h5>
                  <Carousel className="w-full max-w-sm">
                    <CarouselContent className="-ml-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem
                          key={index}
                          className="pl-1 md:basis-1/2 lg:basis-1/3"
                        >
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                <span className="text-2xl font-semibold">
                                  {index + 1}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Vertical Carousel</h5>
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    orientation="vertical"
                    className="w-full max-w-xs"
                  >
                    <CarouselContent className="-mt-1 h-[200px]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pt-1 md:basis-1/2">
                          <div className="p-1">
                            <Card>
                              <CardContent className="flex items-center justify-center p-6">
                                <span className="text-3xl font-semibold">
                                  {index + 1}
                                </span>
                              </CardContent>
                            </Card>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>

            {/* Interactive Carousel Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive Carousel Examples
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2">
                    Carousel with API Control
                  </h5>
                  <CarouselApiDemo />
                </div>

                <div>
                  <h5 className="font-medium mb-2">
                    Carousel with Different Variants
                  </h5>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Primary Variant:
                      </p>
                      <Carousel variant="primary" className="w-full max-w-xs">
                        <CarouselContent>
                          {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card variant="primary">
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">
                                      P{index + 1}
                                    </span>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious variant="primary" />
                        <CarouselNext variant="primary" />
                      </Carousel>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Secondary Variant:
                      </p>
                      <Carousel variant="secondary" className="w-full max-w-xs">
                        <CarouselContent>
                          {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card variant="secondary">
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">
                                      S{index + 1}
                                    </span>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious variant="secondary" />
                        <CarouselNext variant="secondary" />
                      </Carousel>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Outline Variant:
                      </p>
                      <Carousel variant="outline" className="w-full max-w-xs">
                        <CarouselContent>
                          {Array.from({ length: 3 }).map((_, index) => (
                            <CarouselItem key={index}>
                              <div className="p-1">
                                <Card variant="outline">
                                  <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-3xl font-semibold">
                                      O{index + 1}
                                    </span>
                                  </CardContent>
                                </Card>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious variant="outline" />
                        <CarouselNext variant="outline" />
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

// Carousel API Demo Component
const CarouselApiDemo = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  );
};
