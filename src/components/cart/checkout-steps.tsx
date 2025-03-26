import Link from "next/link";

interface CheckoutStepsProps {
  currentStep: number;
}

const CheckoutSteps = ({ currentStep }: CheckoutStepsProps) => {
  const steps = [
    { number: 1, name: "Cart", href: "/cart" },
    { number: 2, name: "Checkout", href: "/checkout" },
    { number: 3, name: "Order", href: "#" },
  ];

  return (
    <div className="mb-12">
      <div className="flex justify-center">
        <ul className="mfn-checkout-steps flex items-center justify-center w-full max-w-3xl">
          {steps.map((step) => {
            const isActive = step.number <= currentStep;
            const isCurrent = step.number === currentStep;

            return (
              <li
                key={step.number}
                className={`flex-1 relative ${isActive ? "text-black" : "text-gray-400"}`}
              >
                <div className="flex items-center">
                  {step.number > 1 && (
                    <div
                      className={`absolute left-0 right-1/2 h-0.5 -translate-y-1/2 ${
                        step.number <= currentStep ? "bg-black" : "bg-gray-300"
                      }`}
                    ></div>
                  )}

                  <span
                    className={`
                      relative flex items-center justify-center w-8 h-8 rounded-full border text-sm font-medium
                      ${isCurrent
                        ? "bg-black text-white border-black"
                        : isActive
                          ? "border-black bg-white text-black"
                          : "border-gray-300 bg-white"
                      }
                    `}
                  >
                    {step.number}
                  </span>

                  {step.number < steps.length && (
                    <div
                      className={`absolute left-1/2 right-0 h-0.5 -translate-y-1/2 ${
                        step.number < currentStep ? "bg-black" : "bg-gray-300"
                      }`}
                    ></div>
                  )}
                </div>

                <div className="text-center mt-2">
                  {isActive && step.number !== 3 ? (
                    <Link
                      href={step.href}
                      className={`text-sm font-medium ${isCurrent ? "font-bold" : ""}`}
                    >
                      {step.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-medium">
                      {step.name}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CheckoutSteps;
