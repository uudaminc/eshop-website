"use client"

import { useState } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon, TrashIcon } from "@heroicons/react/20/solid";
import ContactInformation from "@/components/checkout/ContactInformation";
import OrderSummary from "@/components/checkout/OrderSummary";



export default function CheckoutPage() {
  

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Checkout
        </h1>

        <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <ContactInformation/>

          {/* Order summary */}
          <OrderSummary/>
        </form>
      </div>
    </div>
  );
}
