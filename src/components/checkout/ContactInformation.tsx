import { RadioGroup } from "@headlessui/react";
import React from "react";

const paymentMethods = [
  { id: "credit-card", title: "Credit card" },
  { id: "paypal", title: "PayPal" },
  { id: "etransfer", title: "eTransfer" },
];

const ContactInformation = () => {
  return (
    <div>
      <div>
        <h2 className="text-lg font-medium text-gray-900">
          Contact information
        </h2>

        <div className="mt-4">
          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              type="email"
              id="email-address"
              name="email-address"
              autoComplete="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-10">
        <h2 className="text-lg font-medium text-gray-900">
          Shipping information
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="first-name"
                name="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="last-name"
                name="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="street-address"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="apartment"
              className="block text-sm font-medium text-gray-700"
            >
              Apartment, suite, etc.
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="apartment"
                id="apartment"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <div className="mt-1">
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="region"
              className="block text-sm font-medium text-gray-700"
            >
              State / Province
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-gray-700"
            >
              Postal code
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="phone"
                id="phone"
                autoComplete="tel"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Payment */}
      <div className="mt-10 border-t border-gray-200 pt-10">
        <h2 className="text-lg font-medium text-gray-900">Payment</h2>

        <fieldset className="mt-4">
          <legend className="sr-only">Payment type</legend>
          <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
            {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
              <div key={paymentMethod.id} className="flex items-center">
                {paymentMethodIdx === 0 ? (
                  <input
                    id={paymentMethod.id}
                    name="payment-type"
                    type="radio"
                    defaultChecked
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                ) : (
                  <input
                    id={paymentMethod.id}
                    name="payment-type"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                )}

                <label
                  htmlFor={paymentMethod.id}
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  {paymentMethod.title}
                </label>
              </div>
            ))}
          </div>
        </fieldset>

        <div className="mt-6 grid grid-cols-4 gap-x-4 gap-y-6">
          <div className="col-span-4">
            <label
              htmlFor="card-number"
              className="block text-sm font-medium text-gray-700"
            >
              Card number
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="card-number"
                name="card-number"
                autoComplete="cc-number"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="col-span-4">
            <label
              htmlFor="name-on-card"
              className="block text-sm font-medium text-gray-700"
            >
              Name on card
            </label>
            <div className="mt-1">
              <input
                type="text"
                id="name-on-card"
                name="name-on-card"
                autoComplete="cc-name"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="col-span-3">
            <label
              htmlFor="expiration-date"
              className="block text-sm font-medium text-gray-700"
            >
              Expiration date (MM/YY)
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="expiration-date"
                id="expiration-date"
                autoComplete="cc-exp"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="cvc"
              className="block text-sm font-medium text-gray-700"
            >
              CVC
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="cvc"
                id="cvc"
                autoComplete="csc"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
