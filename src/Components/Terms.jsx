import React, { useState } from "react";

const TermsPrivacy = () => {
  const sections = [
    {
      title: "Terms of Service",
      content: `Welcome to HomeNest. By accessing or using our platform, you agree to comply with these Terms of Service. Users must provide accurate and up-to-date information when posting properties, and are responsible for the content they share. Fraudulent activity, misleading listings, or violation of local laws is strictly prohibited. HomeNest reserves the right to remove listings, suspend accounts, or deny access if users violate these terms. We provide the platform as-is and are not liable for user transactions or decisions. By using our services, you confirm that you understand and accept these terms.`
    },
    {
      title: "Privacy Policy",
      content: `At HomeNest, your privacy is our priority. We collect personal information such as name, email, phone number, and property details to provide our services effectively. This data helps us manage listings, send notifications, and improve user experience. We do not sell or share your personal information with third-party advertisers. Users may access, modify, or request deletion of their data at any time. All collected data is stored securely, and we implement strict measures to prevent unauthorized access. By using HomeNest, you consent to the collection and usage of your information as described in this policy.`
    },
    {
      title: "Cookie Policy",
      content: `HomeNest uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help remember your preferences, login sessions, and collect analytics data to improve our services. Disabling cookies may limit certain functionality on the platform. By continuing to use HomeNest, you consent to our use of cookies in accordance with this policy. We regularly update our cookie practices to maintain compliance and transparency.`
    },
    {
      title: "User Responsibilities",
      content: `As a user of HomeNest, you are expected to act responsibly while using the platform. This includes providing accurate information, respecting intellectual property, refraining from abusive or harmful behavior, and complying with all applicable laws and regulations. Users should verify property details before making any transactions. HomeNest does not guarantee accuracy of listings and is not responsible for any disputes between users.`
    },
    {
      title: "Limitation of Liability",
      content: `HomeNest strives to maintain reliable and accurate services but does not assume responsibility for errors, omissions, or inaccuracies in property listings. We are not liable for financial losses, property disputes, or damages resulting from transactions conducted through the platform. Users are responsible for conducting due diligence and seeking professional advice where necessary.`
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 ">
      <h2 className="text-3xl font-bold text-center mb-4">Terms & Privacy</h2>
      <p className="text-center text-gray-600 mb-10">
        Detailed information about HomeNest policies, user responsibilities, and privacy practices.
      </p>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center   focus:outline-none"
            >
              <span className="font-medium">{section.title}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-white text-gray-700 text-sm">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TermsPrivacy;
