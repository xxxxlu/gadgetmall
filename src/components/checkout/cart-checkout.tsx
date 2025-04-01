"use client";
import React, { useState } from "react";
import Link from "next/link";
import frame from '@/image/Frame.png'
import easypaisa from '@/image/easypaisa.png'
import Image from "next/image";
import './index.css'
import { useCart } from "@/context/cart-context";

const CheckoutPage: React.FC = () => {
    const { subtotal, clearCart } = useCart();

    const shipping = subtotal > 0 ? 1500 : 0;
    const total = subtotal + shipping;
    const [billingDetails, setBillingDetails] = useState({
        firstName: '',
        lastName: '',
        company: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
        notes: '',
    });

    // State for payment method and terms agreement
    const [paymentMethod, setPaymentMethod] = useState<'cod' | 'bank-transfer'>('cod');

    // Example cart data (replace with actual cart state)
    const cart = [
        { id: 1, title: 'Product 1', quantity: 2, price: 500 },
        { id: 2, title: 'Product 2', quantity: 1, price: 300 },
    ];

    // Place order function
    const placeOrder = () => {
        // 验证必填字段
        const requiredFields = ['firstName', 'lastName', 'street', 'city', 'state', 'zip', 'phone', 'email'];
        const emptyFields = requiredFields.filter(field => !billingDetails[field as keyof typeof billingDetails]);
        
        if (emptyFields.length > 0) {
            alert('Please fill in all required fields marked with *');
            return;
        }

        if (!paymentMethod) {
            alert('Please select a payment method.');
            return;
        }

        if (cart.length === 0) {
            alert('Your cart is empty. Please add some products before placing an order.');
            return;
        }
        clearCart();
    };

    return (
        <div className="checkout-page">

            <div className="container">
                <div className="checkout-content">
                    {/* Billing Details Form */}
                    <div className="checkout-form">
                        <h2>Billing Details</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="first-name">First name *</label>
                                    <input
                                        type="text"
                                        id="first-name"
                                        value={billingDetails.firstName}
                                        onChange={(e) =>
                                            setBillingDetails({ ...billingDetails, firstName: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="last-name">Last name *</label>
                                    <input
                                        type="text"
                                        id="last-name"
                                        value={billingDetails.lastName}
                                        onChange={(e) =>
                                            setBillingDetails({ ...billingDetails, lastName: e.target.value })
                                        }
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="company">Company name (optional)</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={billingDetails.company}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, company: e.target.value })
                                    }
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="street">Street address *</label>
                                <input
                                    type="text"
                                    id="street"
                                    placeholder="House number and street name"
                                    value={billingDetails.street}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, street: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">Town / City *</label>
                                <input
                                    type="text"
                                    id="city"
                                    value={billingDetails.city}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, city: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="state">State *</label>
                                <input
                                    type="text"
                                    id="state"
                                    value={billingDetails.state}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, state: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="zip">ZIP / Postal code *</label>
                                <input
                                    type="text"
                                    id="zip"
                                    value={billingDetails.zip}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, zip: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone *</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={billingDetails.phone}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, phone: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address *</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={billingDetails.email}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, email: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="notes">Order notes (optional)</label>
                                <textarea
                                    id="notes"
                                    value={billingDetails.notes}
                                    onChange={(e) =>
                                        setBillingDetails({ ...billingDetails, notes: e.target.value })
                                    }
                                    placeholder="Notes about your order, e.g. special delivery instructions"
                                    rows={4}
                                />
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="order-summary">
                        <h2>Your Order</h2>
                        <div className="order-details">

                            <div className="order-subtotal">
                                <span>Subtotal</span>
                                <span>Rs.{subtotal.toLocaleString()}</span>
                            </div>

                            <div className="order-shipping">
                                <span>Shipping</span>
                                <span>Rs.{shipping.toLocaleString()}</span>
                            </div>

                            <div className="order-total">
                                <span>Total</span>
                                <span>Rs.{total.toLocaleString()}</span>
                            </div>
                        </div>
                        {/* Payment Methods */}
                        <div className="payment-methods">
                            <h3>Payment Methods</h3>
                            <div className="payment-options">
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="cod"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                    />
                                    <label htmlFor="cod">
                                        <Image
                                            src={frame}
                                            alt="Payment Methods"
                                            width={120}
                                            height={50}
                                        />
                                    </label>
                                </div>

                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="bank-transfer"
                                        value="bank-transfer"
                                        checked={paymentMethod === 'bank-transfer'}
                                        onChange={() => setPaymentMethod('bank-transfer')}
                                    />
                                    <label htmlFor="bank-transfer">
                                        <Image
                                            src={easypaisa}
                                            alt="Payment Methods"
                                            width={120}
                                            height={50}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <button
                            onClick={placeOrder}
                            className="btn place-order-btn"
                            disabled={!paymentMethod || !billingDetails.firstName || !billingDetails.lastName || 
                                    !billingDetails.street || !billingDetails.city || !billingDetails.state || 
                                    !billingDetails.zip || !billingDetails.phone || !billingDetails.email}
                        >
                            <Link href="/loading">
                                Place Order
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;