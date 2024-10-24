import * as React from "react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Bungesliga",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Premier league",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Serie A",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Liga española",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Ligue 1",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Uefa Champions League",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export const NavbarDsk = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
             <NavigationMenuTrigger>Nike</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full hover:bg-gray-200 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Offers
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      40% OFF
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <Link to='/category/2'>
              <ListItem  className="hover:bg-gray-200" title="Mercurial">
              </ListItem> 
                 </Link>

                 <Link to='/category/4'>
              <ListItem href="/docs/installation" className="hover:bg-gray-200" title="Phantom">
              </ListItem>
              </Link>
              
              <Link to='/category/1'> 
              <ListItem href="/docs/primitives/typography" className="hover:bg-gray-200" title="Tiempo">
              </ListItem>
              </Link>

              <Link to='/category/3'>
               <ListItem href="/docs/primitives/typography" className="hover:bg-gray-200" title="Society Nike">  
              </ListItem>
               </Link>

                <Link to='/category/5'>
               
                 <ListItem href="/docs/primitives/typography" className="hover:bg-gray-200" title="Futsal Nike"> 
              </ListItem>
               </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Adidas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3  p-6 md:w-[400px] lg:w-[500px] grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full hover:bg-gray-200 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Offers
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      20%
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>

              <Link to='/category/5'>
              <ListItem href="/card" className="hover:bg-gray-200" title="Adidas X">
              </ListItem>
                </Link>

              <Link to='/category/7'>
                <ListItem href="/card" className="hover:bg-gray-200" title="Predator">
              </ListItem>
              </Link>

              <Link to='/category/6'>
                   <ListItem href="/card" className="hover:bg-gray-200" title="Copa">  
              </ListItem>
               </Link>


              <ListItem href="/docs/installation" className="hover:bg-gray-200" title="Futsal Adidas">
              </ListItem>

              
              <ListItem href="/docs/primitives/typography" className="hover:bg-gray-200" title="Society Adidas">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
             <NavigationMenuTrigger>Puma</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3  p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                       <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full hover:bg-gray-200 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Offers
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      20%
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/card" className="hover:bg-gray-200" title="Campo Puma">
                
              </ListItem>
                <ListItem href="/card" className="hover:bg-gray-200" title="Society Puma">
                
              </ListItem>
                   <ListItem href="/card" className="hover:bg-gray-200" title="Futsal Puma">
                
              </ListItem>
         
            </ul>
      
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Camisetas</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                  className="hover:bg-gray-200"
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/" >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Mas recientes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
