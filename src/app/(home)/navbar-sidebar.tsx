import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link"; // Assuming Next.js is used

interface NavbarItems {
    href: string;
    children: React.ReactNode;
}

interface Props {
    items: NavbarItems[];
    open: boolean;
    setOpenChange: (open: boolean) => void;
}

const NavbarItems = [
    {
        href: '/',
        children: 'Home',
    },
    {
        href: '/about',
        children: 'About',
    },
    {
        href: '/features',
        children: 'Features',
    },
    {
        href: '/pricing',
        children: 'Pricing',
    },
    {
        href: '/contact',
        children: 'Contact',
    },
]


export const NavbarSidebar = ({ items, open, setOpenChange }: Props) => {
    return (
        <Sheet open={open} onOpenChange={setOpenChange}>
            <SheetContent side="left" className="p-0 transition-none">
                <SheetHeader className="p-4 border-b">
                    <SheetTitle className="flex items-center">Menu</SheetTitle>
                </SheetHeader>
                <ScrollArea className="h-full px-4 py-2">
                    <div className="flex flex-col space-y-2">
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            >
                                {item.children}
                            </Link>
                        ))}

                        <div className="border-t">
                            <Link href={"/sign-in"} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">Login</Link>
                            <Link href={"/sign-up"} className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium">Start Selling</Link>
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};
