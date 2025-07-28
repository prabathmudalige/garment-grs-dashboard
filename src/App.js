import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Modal Component for displaying detailed information
const InfoModal = ({ title, content, onClose }) => {
  if (!content) return null; // Don't render if no content

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 opacity-100">
        <div className="flex justify-between items-center mb-4 border-b pb-3">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <p className="text-gray-700 leading-relaxed text-base">{content}</p>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// ProgressBar Component for visual indicators
const ProgressBar = ({ value, max, colorClass = 'bg-blue-500' }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
      <div
        className={`${colorClass} h-2.5 rounded-full`}
        style={{ width: `${percentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      ></div>
    </div>
  );
};


// Main App component
const App = () => {
  // State for managing the modal
  const [modalInfo, setModalInfo] = useState(null); // { title: '', content: '' }

  // Function to open the modal
  const openModal = (title, content) => {
    setModalInfo({ title, content });
  };

  // Function to close the modal
  const closeModal = () => {
    setModalInfo(null);
  };

  // Data for Certification Tiers Bar Chart
  const tiersData = [
    { name: '20% (Basic)', value: 20 },
    { name: '50%', value: 50 },
    { name: '70%', value: 70 },
    { name: '100%', value: 100 },
  ];

  // Data for Consumer Trust Pie Chart
  const consumerTrustData = [
    { name: 'View GRS as Proof', value: 72 },
    { name: 'Other', value: 28 },
  ];

  // Colors for the Pie Chart
  const COLORS = ['#10B981', '#E5E7EB']; // A vibrant green for certified, light gray for other

  // Detailed content for various sections (for modal)
  const detailedContent = {
    // Supply Chain Traceability
    tc: "For a garment factory, Transaction Certificates (TCs) are crucial documents that verify the flow of recycled textile materials through each production stage within your facility and between your factory and fabric suppliers/buyers. Every transaction must be accompanied by a TC. TCs must link to valid Scope Certificates (SCs), which authorize your garment factory to produce GRS-certified apparel. Failure to provide TCs at any stage breaks the chain of custody, invalidating your factory's certification.",
    sc: "As a garment factory, you must obtain a Scope Certificate (SC). This is an official document that authorizes your facility to produce GRS-certified garments and textiles. SCs are essential for establishing the credibility of your supply chain, as Transaction Certificates (TCs) must always link back to valid SCs issued to your factory and its partners.",
    recordKeeping: "Your garment factory is required to maintain detailed documentation, including purchase invoices for recycled fabrics and yarns, shipping records, and internal production logs (e.g., cutting, sewing, finishing). These records must align precisely with the data provided in the Transaction Certificates (TCs) to ensure full transparency and traceability throughout your factory's operations.",
    separateStorage: "To prevent cross-contamination with virgin or non-certified materials, your garment factory is required to maintain separate storage areas for all recycled textile materials (e.g., recycled polyester, cotton scraps). This ensures the purity and integrity of the recycled content used in your apparel products.",
    traceabilityIssue: "A common challenge for garment factories in GRS certification is managing the complexity of their textile supply chains, which often lack transparent and easily verifiable records, making it difficult to track recycled fabrics and yarns effectively from source to finished garment within the factory.",
    traceabilitySolution: "To overcome traceability issues within your garment factory's supply chain, implementing advanced technologies like blockchain can help track textile materials from recycling centers to your factory floor, providing an immutable and transparent record of the entire process.",

    // Environmental & Social Compliance
    wastewaterTreatment: "Your garment factory must treat wastewater from dyeing and finishing processes to meet stringent standards, specifically a Chemical Oxygen Demand (COD) of ≤ 80mg/L. This standard is often lower (more stringent) than many national regulations, emphasizing GRS's commitment to environmental protection in garment factory operations.",
    chemicalRestrictions: "The GRS strictly prohibits the use of hazardous substances in your garment factory's production processes, including harmful chemicals like AZO dyes and PFAS (per- and polyfluoroalkyl substances) often found in textile treatments. This ensures a safer product and a healthier environment for your workers and the surrounding community.",
    energyEfficiency: "As a certified garment facility, your factory is required to monitor and actively work to reduce its energy and water usage in processes like dyeing, washing, and steam generation. This focus on resource efficiency aims to minimize the environmental footprint of your factory's production processes, leading to both ecological and economic benefits.",
    laborRights: "The GRS mandates strict adherence to international labor laws and ethical practices within your garment factory. This includes prohibiting forced labor, child labor, and discrimination, while ensuring fair wages, safe working conditions, and the right to collective bargaining for your employees involved in garment production.",
    audits: "Compliance with both social and environmental standards within your garment factory is verified through regular, independent third-party audits. These inspections ensure that your facility consistently meets all GRS requirements and maintains its certification status.",

    // Benefits
    marketAccessBrands: "For your garment factory, GRS certification is increasingly a prerequisite for becoming a supplier to major international apparel brands such as H&M, Zara, and IKEA, providing essential market access and opening new business opportunities in the sustainable fashion sector.",
    marketAccessTrade: "By meeting GRS standards, your garment factory can avoid potential trade barriers in markets like the EU and U.S., which are increasingly prioritizing products that align with circular economy goals, giving your factory a competitive edge in the global textile market.",
    brandReputationTrust: "GRS certification significantly enhances your garment factory's reputation, with 72% of buyers viewing it as tangible proof of a brand's genuine commitment to sustainability, which can directly benefit your factory's partnerships and client relationships in the apparel industry.",
    brandReputationPremium: "Garments manufactured by your certified factory can command a 15–30% price premium in eco-conscious fashion markets, reflecting consumers' willingness to pay more for verified sustainable apparel, which translates to better margins for your factory.",
    costReductionResource: "GRS encourages practices within your garment factory that reduce reliance on virgin textile materials, leading to lower procurement costs for fabrics and yarns, and more efficient resource utilization in your apparel production lines.",
    costReductionWaste: "Effective recycling practices for textile scraps and waste management within your garment factory cut landfill fees and energy consumption, contributing to overall cost savings and improved operational efficiency for your certified business.",
    costReductionSubsidies: "Some governments offer incentives, such as China's 30–50% certification fee rebates, which can significantly reduce the financial burden of obtaining and maintaining GRS certification for your garment factory.",

    // FAQs
    faqBlendedMaterials: "Yes, blended materials are permitted in GRS-certified garments manufactured by your factory. However, non-recycled components, such as dyes, trims, or certain finishing agents, must not exceed 20% of the total product weight to maintain certification eligibility for your factory's apparel output.",
    faqCertificationDuration: "GRS certificates for your garment factory are valid for a period of 1 year. To maintain continuous certification, your facility is required to undergo annual audits for renewal, ensuring ongoing compliance with the standard.",
    faqIsMandatory: "While GRS certification is not legally mandatory for garment factories, it is highly recommended for businesses that aim to enter international markets or cater to sustainability-focused consumers in the apparel sector. It serves as a crucial benchmark for environmental and social responsibility for your factory's operations.",
    faqSupplierFailsTCs: "If a supplier to your garment factory fails to provide the necessary Transaction Certificates (TCs) for textile materials at any stage of the supply chain, the entire chain of custody for your apparel products is broken. This invalidates the GRS eligibility for all subsequent garments from your factory until the issue is resolved and proper documentation is provided.",
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-200 font-sans antialiased p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <header className="bg-white shadow-xl rounded-2xl p-6 mb-8 transform transition-all duration-300 hover:scale-[1.01]">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">GRS Certification Dashboard <span className="text-green-600">(For Garment Factories)</span></h1>
        <p className="text-gray-700 text-lg">
          A quick overview of Global Recycled Standard (GRS) certification requirements, benefits, and key insights tailored for garment manufacturing facilities.
        </p>
      </header>

      {/* Key Metrics Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Card 1: Minimum Content Threshold */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <span className="text-5xl mb-2">♻️</span> {/* Emoji for recycled content */}
          <div className="text-6xl font-extrabold text-green-600 drop-shadow-md">20%</div>
          <p className="text-xl font-bold text-gray-800 mt-2">Minimum Recycled Content in Garments</p>
          <p className="text-sm text-gray-500">Required for garments manufactured by your factory to be GRS eligible.</p>
        </div>

        {/* Card 2: Non-Recycled Additives Limit */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <span className="text-5xl mb-2">🧵</span> {/* Emoji for textile/additives */}
          <div className="text-6xl font-extrabold text-red-500 drop-shadow-md">20%</div>
          <p className="text-xl font-bold text-gray-800 mt-2">Max Non-Recycled Additives</p>
          <p className="text-sm text-gray-500">Allowed in garments (e.g., dyes, trims, finishing agents).</p>
        </div>

        {/* Card 3: Certification Validity */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <span className="text-5xl mb-2">🗓️</span> {/* Emoji for calendar/time */}
          <div className="text-6xl font-extrabold text-blue-600 drop-shadow-md">1 Year</div>
          <p className="text-xl font-bold text-gray-800 mt-2">Factory Certificate Validity</p>
          <p className="text-sm text-gray-500">Requires annual audits for your garment factory's renewal.</p>
        </div>

        {/* Card 4: rPET Cost Savings */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <span className="text-5xl mb-2">✂️</span> {/* Emoji for cutting/savings in textile */}
          <div className="text-6xl font-extrabold text-purple-600 drop-shadow-md">15-20%</div>
          <p className="text-xl font-bold text-gray-800 mt-2">Recycled Material Cost Savings</p>
          <p className="text-sm text-gray-500">Less than virgin textiles, beneficial for your factory's material costs.</p>
        </div>

        {/* Card 5: EU Mandate for Recycled Plastic */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <span className="text-5xl mb-2">🇪🇺</span> {/* Emoji for EU */}
          <div className="text-6xl font-extrabold text-orange-500 drop-shadow-md">30%</div>
          <p className="text-xl font-bold text-gray-800 mt-2">EU Recycled Textile Mandate</p>
          <p className="text-sm text-gray-500">In apparel by 2030, driving GRS adoption for your factory's products.</p>
          <ProgressBar value={30} max={100} colorClass="bg-orange-500" />
        </div>

        {/* Card 6: Brand Recycled Content Target */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          <span className="text-5xl mb-2">👕</span> {/* Emoji for garment/apparel */}
          <div className="text-6xl font-extrabold text-indigo-600 drop-shadow-md">100%</div>
          <p className="text-xl font-bold text-gray-800 mt-2">Brand Recycled Content Target</p>
          <p className="text-sm text-gray-500">Many brands target 100% GRS-certified recycled content by 2025, impacting your factory.</p>
          <ProgressBar value={100} max={100} colorClass="bg-indigo-600" />
        </div>
      </section>

      {/* Charts and Key Information */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Certification Tiers Bar Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">GRS Certification Tiers for Garment Products</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={tiersData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} className="text-sm" />
              <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} className="text-sm" />
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: 'none' }}
                labelStyle={{ fontWeight: 'bold', color: '#333' }}
              />
              <Legend />
              <Bar dataKey="value" fill="#3B82F6" name="Recycled Content" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4 text-center">
            Garments manufactured by your factory with 50%+ recycled content can use the "GRS Recycled" label.
          </p>
        </div>

        {/* Consumer Trust Pie Chart */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Consumer Perception & Market Demand for Garments</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={consumerTrustData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {consumerTrustData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{ borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', border: 'none' }}
                labelStyle={{ fontWeight: 'bold', color: '#333' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          <p className="text-sm text-gray-600 mt-4 text-center">
            72% of buyers view GRS certification as proof of genuine sustainability, impacting demand for your factory's apparel products.
          </p>
        </div>
      </section>

      {/* Detailed Information Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Supply Chain Traceability */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Supply Chain Traceability for Your Garment Factory</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Transaction Certificates (TCs) for Garment Factories", detailedContent.tc)}><span className="font-semibold">Transaction Certificates (TCs):</span> Verify material flow at each production stage.</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Scope Certificates (SCs) for Garment Factories", detailedContent.sc)}><span className="font-semibold">Scope Certificates (SCs):</span> Authorize your factory to produce GRS-certified apparel.</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Record-Keeping for Garment Factories", detailedContent.recordKeeping)}><span className="font-semibold">Record-Keeping:</span> Purchase invoices, shipping records, and production logs must align with TC data.</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Separate Storage for Garment Factories", detailedContent.separateStorage)}><span className="font-semibold">Separate Storage:</span> Recycled materials must be stored separately to avoid contamination.</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Traceability Issue for Garment Factories", detailedContent.traceabilityIssue)}><span className="font-semibold">Issue:</span> Complex supply chains often lack transparent records.</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Traceability Solution for Garment Factories", detailedContent.traceabilitySolution)}><span className="font-semibold">Solution:</span> Implement blockchain technology for end-to-end tracking.</li>
          </ul>
        </div>

        {/* Environmental & Social Compliance */}
        <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Environmental & Social Compliance for Your Garment Factory</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Wastewater Treatment for Garment Factories", detailedContent.wastewaterTreatment)}><span className="font-semibold">Wastewater Treatment:</span> COD ≤ 80mg/L (stricter than many national standards).</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Chemical Restrictions for Garment Factories", detailedContent.chemicalRestrictions)}><span className="font-semibold">Chemical Restrictions:</span> Prohibits hazardous substances (e.g., AZO dyes, PFAS).</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Energy Efficiency for Garment Factories", detailedContent.energyEfficiency)}><span className="font-semibold">Energy Efficiency:</span> Monitor energy and water usage.</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Labor Rights in Garment Factories", detailedContent.laborRights)}><span className="font-semibold">Labor Rights:</span> Prohibits forced/child labor, discrimination; ensures fair wages, safe conditions.</li>
            <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Audits for Garment Factories", detailedContent.audits)}><span className="font-semibold">Audits:</span> Third-party inspections verify compliance.</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6 mb-8 transform transition-all duration-300 hover:scale-[1.005] hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of GRS Certification for Your Garment Factory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Benefit 1: Market Access */}
          <div className="border border-gray-200 rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Market Access</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Market Access: Required by Brands (for Garment Factories)", detailedContent.marketAccessBrands)}>Required by major brands (H&M, Zara, IKEA).</li>
              <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Market Access: Trade Barrier Avoidance (for Garment Factories)", detailedContent.marketAccessTrade)}>Avoids trade barriers in EU and U.S. markets.</li>
            </ul>
          </div>
          {/* Benefit 2: Brand Reputation */}
          <div className="border border-gray-200 rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Brand Reputation</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Brand Reputation: Consumer Trust (for Garment Factories)", detailedContent.brandReputationTrust)}>Builds consumer trust (72% view as proof of genuine sustainability).</li>
              <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Brand Reputation: Premium Pricing (for Garment Factories)", detailedContent.brandReputationPremium)}>Enables premium pricing (15-30% price premium).</li>
            </ul>
          </div>
          {/* Benefit 3: Cost Reduction */}
          <div className="border border-gray-200 rounded-xl p-4 transform transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Cost Reduction</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Cost Reduction: Resource Efficiency (for Garment Factories)", detailedContent.costReductionResource)}>Reduces reliance on virgin materials.</li>
              <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Cost Reduction: Waste Minimization (for Garment Factories)", detailedContent.costReductionWaste)}>Minimizes waste, cutting landfill fees and energy consumption.</li>
              <li className="hover:text-green-700 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Cost Reduction: Government Subsidies (for Garment Factories)", detailedContent.costReductionSubsidies)}>Potential government subsidies (e.g., China offers 30-50% rebates).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white rounded-2xl shadow-lg p-6 transform transition-all duration-300 hover:scale-[1.005] hover:shadow-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">FAQs About GRS Certification for Garment Factories</h2>
        <div className="space-y-4">
          {/* FAQ 1 */}
          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Can blended materials be used? (for Garment Factories)", detailedContent.faqBlendedMaterials)}>
            <h3 className="text-lg font-semibold text-gray-700">Can blended materials be used?</h3>
            <p className="text-gray-600">Yes, but non-recycled components must not exceed 20% of the total weight.</p>
          </div>
          {/* FAQ 2 */}
          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer" onClick={() => openModal("How long does GRS certification last? (for Garment Factories)", detailedContent.faqCertificationDuration)}>
            <h3 className="text-lg font-semibold text-gray-700">How long does GRS certification last?</h3>
            <p className="text-gray-600">Certificates are valid for 1 year and require annual audits for renewal.</p>
          </div>
          {/* FAQ 3 */}
          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer" onClick={() => openModal("Is GRS certification mandatory? (for Garment Factories)", detailedContent.faqIsMandatory)}>
            <h3 className="text-lg font-semibold text-gray-700">Is GRS certification mandatory?</h3>
            <p className="text-gray-600">No, but it’s highly recommended for businesses targeting international markets or sustainability-focused consumers.</p>
          </div>
          {/* FAQ 4 */}
          <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer" onClick={() => openModal("What happens if a supplier fails to provide TCs? (for Garment Factories)", detailedContent.faqSupplierFailsTCs)}>
            <h3 className="text-lg font-semibold text-gray-700">What happens if a supplier fails to provide TCs?</h3>
            <p className="text-gray-600">The entire supply chain loses GRS eligibility until the issue is resolved.</p>
          </div>
        </div>
      </section>

      {/* Render the modal if modalInfo is not null */}
      {modalInfo && (
        <InfoModal
          title={modalInfo.title}
          content={modalInfo.content}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default App;
