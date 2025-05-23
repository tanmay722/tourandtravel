import { motion } from "framer-motion";
//images
import heroImg from "../assets/sectionhero.jpg";

const RefundPolicy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="pt-12 md:pt-16 bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative py-12 sm:py-16 lg:py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroImg})`,
        }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Refund Policy
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white max-w-3xl mx-auto">
              Our guidelines for cancellations, refunds, and rescheduling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Refund Policy Content */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8"
          >
            <div className="space-y-6 text-gray-800 text-sm sm:text-base leading-relaxed">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                1. General Policy
              </h2>
              <p>
                This Refund Policy outlines the terms and conditions for
                cancellations, refunds, and rescheduling of services booked
                through Varanasi Tour and Travels. We understand that plans can
                change, and we strive to offer fair and transparent refund
                policies.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                2. Cancellation and Refund Schedule
              </h2>
              <p>
                The following refund schedule applies to standard tour packages,
                transportation services, and accommodation bookings:
              </p>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                2.1. Standard Tour Packages
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cancellation 30+ days before the scheduled tour date: Full
                  refund minus processing fee (₹1,000 or 5% of the booking
                  amount, whichever is higher)
                </li>
                <li>
                  Cancellation 15-29 days before the scheduled tour date: 75%
                  refund
                </li>
                <li>
                  Cancellation 7-14 days before the scheduled tour date: 50%
                  refund
                </li>
                <li>
                  Cancellation 3-6 days before the scheduled tour date: 25%
                  refund
                </li>
                <li>
                  Cancellation within 48 hours of the scheduled tour date: No
                  refund
                </li>
              </ul>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                2.2. Transportation Services
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cancellation 7+ days before the scheduled service: Full refund
                  minus processing fee (₹500 or 5% of the booking amount,
                  whichever is higher)
                </li>
                <li>
                  Cancellation 3-6 days before the scheduled service: 75% refund
                </li>
                <li>
                  Cancellation 24-72 hours before the scheduled service: 50%
                  refund
                </li>
                <li>
                  Cancellation within 24 hours of the scheduled service: No
                  refund
                </li>
              </ul>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                2.3. Accommodation Bookings
              </h3>
              <p>
                Accommodation refunds are subject to the policies of individual
                hotels and accommodations partners. Generally:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cancellation 30+ days before check-in: Full refund minus
                  processing fee (₹1,000 or 5% of the booking amount, whichever
                  is higher)
                </li>
                <li>Cancellation 15-29 days before check-in: 75% refund</li>
                <li>Cancellation 7-14 days before check-in: 50% refund</li>
                <li>Cancellation within 7 days of check-in: No refund</li>
              </ul>
              <p>
                Note: Some premium or special accommodations may have stricter
                cancellation policies, which will be clearly communicated at the
                time of booking.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                3. Special Circumstances
              </h2>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                3.1. Festival and Peak Season Bookings
              </h3>
              <p>
                Bookings made for festival periods (such as Dev Deepawali, Holi,
                etc.) or peak season (October to March) are subject to special
                cancellation policies:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cancellation 60+ days before the scheduled date: 75% refund
                </li>
                <li>
                  Cancellation 30-59 days before the scheduled date: 50% refund
                </li>
                <li>
                  Cancellation within 30 days of the scheduled date: No refund
                </li>
              </ul>

              <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                3.2. Group Bookings
              </h3>
              <p>For group bookings (6 or more people):</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Cancellation 60+ days before the scheduled date: 90% refund
                </li>
                <li>
                  Cancellation 30-59 days before the scheduled date: 75% refund
                </li>
                <li>
                  Cancellation 15-29 days before the scheduled date: 50% refund
                </li>
                <li>
                  Cancellation within 15 days of the scheduled date: No refund
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                4. Rescheduling
              </h2>
              <p>
                4.1. Rescheduling requests must be made in writing at least 7
                days before the scheduled service date.
              </p>
              <p>
                4.2. A rescheduling fee may apply, depending on the notice
                provided:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Rescheduling 15+ days in advance: No fee</li>
                <li>Rescheduling 7-14 days in advance: ₹500 per person</li>
                <li>
                  Rescheduling within 7 days: Treated as a cancellation and new
                  booking
                </li>
              </ul>
              <p>
                4.3. Rescheduled bookings are subject to availability and any
                price differences between the original and new dates.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                5. Force Majeure
              </h2>
              <p>
                5.1. In case of cancellations due to circumstances beyond our
                control (natural disasters, political unrest, pandemic
                restrictions, etc.), we will offer:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>A full credit voucher valid for 18 months, or</li>
                <li>Rescheduling without additional fees, or</li>
                <li>
                  A refund minus administrative costs (10% of the booking
                  amount)
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                6. No-Show Policy
              </h2>
              <p>
                If you fail to arrive for a scheduled service without prior
                notification, it will be considered a "no-show" and no refund
                will be provided.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                7. Partial Utilization of Services
              </h2>
              <p>
                No refunds will be provided for services partially utilized or
                for unused services that were part of a package (such as meals,
                activities, or accommodations).
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                8. Refund Process
              </h2>
              <p>
                8.1. All refund requests must be submitted in writing to
                officialtoursup@gmail.com.
              </p>
              <p>
                8.2. Refunds will be processed within 15 business days from the
                date of approval.
              </p>
              <p>
                8.3. Refunds will be issued using the original payment method
                unless otherwise specified.
              </p>
              <p>
                8.4. Bank charges or currency conversion differences may be
                deducted from the refund amount for international transactions.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                9. Exceptions
              </h2>
              <p>
                We reserve the right to make exceptions to this policy on a
                case-by-case basis, at our sole discretion. Any exceptions
                granted do not constitute a waiver of our right to enforce this
                policy in the future.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                10. Changes to This Policy
              </h2>
              <p>
                We may update this Refund Policy from time to time. The updated
                version will be effective as of the date stated at the top of
                this policy.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                11. Contact Information
              </h2>
              <p>
                For questions or concerns regarding this Refund Policy, please
                contact us at:
              </p>
              <p className="text-sm sm:text-xs text-gray-600">
                Varanasi Tour and Travels
                <br />
                2nd Floor, Plot No - 52, Patel Nagar, Mint Road, Nadesar,
                Varanasi, Uttar Pradesh 221002, India
                <br />
                Email: officialtoursup@gmail.com
                <br />
                Phone: +91 9415255168
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
