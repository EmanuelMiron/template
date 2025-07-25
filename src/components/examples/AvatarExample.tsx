import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../Collapsible";

export const AvatarExample = () => {
  return (
    <div className="space-y-8">
      {/* Custom Avatar Examples */}
      <Collapsible>
        <CollapsibleTrigger variant="primary" size="lg">
          <h2 className="text-2xl font-semibold">
            Custom Avatar Component Examples
          </h2>
        </CollapsibleTrigger>
        <CollapsibleContent variant="outline" padding="lg">
          <div className="space-y-6">
            {/* Basic Avatar Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Basic Avatar Examples
              </h4>
              <div className="flex flex-row flex-wrap items-center gap-6">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Variant Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Variant Examples</h4>
              <div className="flex flex-row flex-wrap items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="primary">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">Primary</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="secondary">
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">
                    Secondary
                  </span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar variant="outline">
                    <AvatarImage
                      src="https://github.com/leerob.png"
                      alt="@leerob"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">Outline</span>
                </div>
              </div>
            </div>

            {/* Size Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Size Examples</h4>
              <div className="flex flex-row flex-wrap items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Avatar avatarSize="sm">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">Small</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar avatarSize="md">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">Medium</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar avatarSize="lg">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">Large</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Avatar avatarSize="xl">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="text-xs text-muted-foreground">
                    Extra Large
                  </span>
                </div>
              </div>
            </div>

            {/* Fallback Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Fallback Examples</h4>
              <div className="flex flex-row flex-wrap items-center gap-6">
                <Avatar variant="primary">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar variant="secondary">
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <Avatar variant="outline">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar avatarSize="lg" variant="primary">
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <Avatar avatarSize="xl" variant="secondary">
                  <AvatarFallback>MK</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Grouped Avatars */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Grouped Avatars</h4>
              <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarFallback>+2</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Different Shapes */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Different Shapes</h4>
              <div className="flex flex-row flex-wrap items-center gap-6">
                <Avatar className="rounded-full">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-lg">
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-md">
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <Avatar className="rounded-none">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>

            {/* Interactive Examples */}
            <div>
              <h4 className="font-semibold text-lg mb-4">
                Interactive Examples
              </h4>
              <div className="flex flex-row flex-wrap items-center gap-6">
                <Avatar className="cursor-pointer hover:scale-110 transition-transform">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar
                  className="cursor-pointer hover:scale-110 transition-transform"
                  variant="secondary"
                >
                  <AvatarImage
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                  />
                  <AvatarFallback>ER</AvatarFallback>
                </Avatar>
                <Avatar
                  className="cursor-pointer hover:scale-110 transition-transform"
                  variant="outline"
                >
                  <AvatarImage
                    src="https://github.com/leerob.png"
                    alt="@leerob"
                  />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
