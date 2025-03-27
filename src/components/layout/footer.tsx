import Link from "next/link";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import frame from '@/image/Frame.png'
import easypaisa from '@/image/easypaisa.png'

const Footer = () => {
  return (
    <footer id="Footer" className="bg-gray-100 pt-12 pb-4">
      <div className="widgets_wrapper text-center">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h6 className="text-gray-500 uppercase text-sm mb-3">FEEL FREE TO CONTACT US</h6>
            <div className="flex items-center justify-center mb-2">
              <PhoneCall className="h-5 w-5 mr-2 text-gray-700" />
              <h4 className="text-xl font-medium">+92 320 9972624</h4>
            </div>
            <p className="text-base mb-8">inspireinnosmc@gmail.com</p>

            <h6 className="text-gray-500 uppercase text-sm mb-3">ACCEPTED PAYMENT METHODS</h6>
            <div className="flex justify-center" style={{ height: '60px' }}>
              <Image
                src={frame}
                alt="Payment Methods"
                width={120}
                height={50}
              />
              <Image
                src={easypaisa}
                alt="Payment Methods"
                width={120}
                height={50}
              />
            </div>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-medium mb-4">Useful links</h5>
            <div className="flex flex-col space-y-2">
              <Link href="/privacy-policy" className="text-gray-700 hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-gray-700 hover:text-black transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Delivery Info */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-medium mb-4">Delivery</h5>
            <div className="flex flex-col space-y-2">
              <Link href="/refund-return-policy" className="text-gray-700 hover:text-black transition-colors">
                Refund & Return Policy
              </Link>
              <Link href="/faqs" className="text-gray-700 hover:text-black transition-colors">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Copyright Section */}
      <div className="footer_copy">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="copyright text-sm text-gray-600">
              Copyright © 2025 | Powered by Data Network Solutions
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
