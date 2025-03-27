"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, User, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/image/logo.png"

const Header = () => {
  const { itemCount, subtotal } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header id="Header" className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div id="Top_bar" className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="logo">
              <Link href="/" className="flex items-center">
                <Image
                  src={Logo}
                  alt="The TV Home"
                  width={80}
                  height={30}
                  className="h-5 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="font-medium text-gray-800 hover:text-black">
                HOME
              </Link>
              <Link href="/about" className="font-medium text-gray-800 hover:text-black">
                ABOUT US
              </Link>
              <Link href="/shop" className="font-medium text-gray-800 hover:text-black">
                SHOP
              </Link>
              <Link href="/contact" className="font-medium text-gray-800 hover:text-black">
                CONTACT US
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link href="/my-account">My Account</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-account/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-account/login">Login</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}

              {/* Cart */}
              <Link href="/cart" className="relative">
                <Button variant="ghost" size="icon">
                  <ShoppingBag className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
                {itemCount > 0 && (
                  <span className="hidden md:inline-block ml-1 text-sm">
                    Rs.{subtotal.toLocaleString()}
                  </span>
                )}
              </Link>

              {/* Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(!searchOpen)}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Mobile Menu Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[250px]">
                  <div className="flex flex-col h-full">
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-lg font-bold">Menu</h2>
                      <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </SheetTrigger>
                    </div>
                    <nav className="flex flex-col space-y-4">
                      <Link href="/" className="font-medium text-gray-800 hover:text-black">
                        HOME
                      </Link>
                      <Link href="/about" className="font-medium text-gray-800 hover:text-black">
                        ABOUT US
                      </Link>
                      <Link href="/shop" className="font-medium text-gray-800 hover:text-black">
                        SHOP
                      </Link>
                      <Link href="/contact" className="font-medium text-gray-800 hover:text-black">
                        CONTACT US
                      </Link>
                    </nav>
                    <div className="mt-auto pt-8">
                      <Button asChild className="w-full">
                        <Link href="/my-account">MY ACCOUNT</Link>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Search Form */}
      {searchOpen && (
        <div className="absolute inset-x-0 top-full bg-white shadow-md p-4 transition-all">
          <div className="container mx-auto">
            <form className="flex items-center relative">
              <input
                type="text"
                placeholder="Enter your search"
                className="w-full p-2 pr-10 border border-gray-300 rounded"
              />
              <Button type="submit" size="icon" variant="ghost" className="absolute right-2">
                <Search className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="ml-2"
                onClick={() => setSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
