import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How can I post my property on HomeNest?",
      answer:
        "To post your property, click on 'Post Property' in the app or website, fill out the property details, upload images, and submit. Your listing will be verified and published shortly."
    },
    {
      question: "Is HomeNest free to use?",
      answer:
        "Yes! Browsing, searching, and filtering properties is completely free. Posting a property may have optional premium features for enhanced visibility."
    },
    {
      question: "Can I search properties by location?",
      answer:
        "Absolutely. Our Advanced Property Search allows you to filter listings by city, area, price range, property type, and number of bedrooms."
    },
    {
      question: "How do I contact property owners?",
      answer:
        "Each property listing has a contact button. You can message or call the property owner directly through our platform once logged in."
    },
    {
      question: "Can I save properties I like?",
      answer:
        "Yes! You can create an account and save your favorite properties to revisit them anytime."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 mt-10">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mt-2">
        Common questions about posting, searching, and using HomeNest
      </p>

      <div className="mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200 focus:outline-none"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
