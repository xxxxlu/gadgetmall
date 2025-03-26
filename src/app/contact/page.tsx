import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-secondary py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-comfortaa font-bold text-black text-center">
            Contact Us
          </h1>
          <p className="text-black/90 text-center mt-4 max-w-2xl mx-auto">
            Have questions about our products or services? We're here to help! Get in touch with us through any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-comfortaa font-bold text-primary mb-6">
                Do you have any questions?
              </h2>
              <p className="text-gray-600 mb-8">
                We value your questions and feedback. Our team is ready to assist you with any inquiries about our products, orders, or services.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Phone</h3>
                    <p className="text-gray-600"> +92 (0) 320 9972624</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <p className="text-gray-600">inspireinnosmc@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Location</h3>
                    <p className="text-gray-600">Islamabad, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-comfortaa font-bold text-primary mb-6">
                Send us a message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className="border-gray-300 focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="border-gray-300 focus:border-secondary focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Message subject"
                    className="border-gray-300 focus:border-secondary focus:ring-secondary"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Your message"
                    className="w-full rounded-md border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  ></textarea>
                </div>

                <Button className="bg-secondary hover:bg-secondary/90 text-white w-full py-6">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
