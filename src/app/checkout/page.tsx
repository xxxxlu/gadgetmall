import CheckoutPage from "@/components/checkout/cart-checkout";
import CheckoutSteps from "@/components/cart/checkout-steps";
export default function ShopPage() {
    return (
        <div className="py-16">
            <div className="container mx-auto px-4">
                <CheckoutSteps currentStep={2} />
                <CheckoutPage />
            </div>
        </div>
    );
}
