import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import './index.css';

export default function PaymentSuccessPage() {
    return (
        <div className="payment-success">
            <div className="success-container">
                <div className="success-icon">
                    <CheckCircle size={80} className="check-icon" />
                </div>
                <h1 className="success-title">Payment Successful!</h1>
                <p className="success-message">Your order has been placed successfully.</p>
                <div className="order-info">
                    <p>Thank you for your purchase. Your order details have been sent to your email.</p>
                    <p>You will receive a confirmation shortly.</p>
                </div>
                <div className="action-buttons">
                    <Link href="/" className="btn home-btn">
                        Return to Home
                    </Link>
                    <Link href="/shop" className="btn shop-btn">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    );
}