
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Crown, Gem, GraduationCap } from "lucide-react";

const Packages = () => {
  const handleWhatsAppContact = (packageName: string, price: string) => {
    const message = `Hi! I'm interested in the ${packageName} (${price}) for publishing my book. Could you please provide more details about the process and next steps?`;
    const whatsappUrl = `https://wa.me/+919119743698?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const packages = [
    {
      name: "Student Package",
      price: "₹8,500",
      icon: <GraduationCap className="h-8 w-8" />,
      badge: "Most Popular",
      badgeColor: "bg-green-500",
      description: "Perfect for students and first-time authors looking for affordable publishing solutions.",
      features: [
        "ISBN Allotment",
        "Basic Editing (up to 100 pages)",
        "Simple Cover Design",
        "Basic Formatting",
        "Amazon Listing",
        "Digital copies provided",
        "Email support"
      ],
      highlighted: true
    },
    {
      name: "Basic Package",
      price: "₹12,500",
      icon: <Star className="h-8 w-8" />,
      description: "Essential publishing services for authors who want professional quality at an affordable price.",
      features: [
        "ISBN Allotment",
        "Professional Editing (up to 150 pages)",
        "Custom Cover Design",
        "Professional Formatting",
        "Amazon Listing",
        "Print and digital copies",
        "Basic marketing consultation",
        "Phone and email support"
      ]
    },
    {
      name: "Standard Package", 
      price: "₹20,500",
      icon: <Crown className="h-8 w-8" />,
      description: "Comprehensive publishing solution with enhanced marketing and distribution support.",
      features: [
        "ISBN Allotment",
        "Advanced Editing (up to 250 pages)",
        "Premium Cover Design (3 concepts)",
        "Advanced Formatting",
        "Multi-platform Listing",
        "Author copies included",
        "Marketing strategy consultation",
        "Social media promotion",
        "Dedicated project manager",
        "Priority support"
      ]
    },
    {
      name: "Premium Package",
      price: "₹25,500",
      icon: <Gem className="h-8 w-8" />,
      badge: "Best Value",
      badgeColor: "bg-purple-500",
      description: "Complete publishing solution with maximum support and marketing reach.",
      features: [
        "ISBN Allotment",
        "Comprehensive Editing (unlimited pages)",
        "Premium Cover Design (5 concepts)",
        "Professional Formatting",
        "Global Distribution",
        "Printed author copies (50 units)",
        "Complete marketing campaign",
        "Author website creation",
        "Press release writing",
        "Book trailer creation",
        "Dedicated account manager",
        "24/7 Priority support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Publishing Packages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect package for your publishing needs. All packages include our quality guarantee and professional support.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  pkg.highlighted ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
              >
                {pkg.badge && (
                  <Badge className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${pkg.badgeColor} text-white`}>
                    {pkg.badge}
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`flex justify-center mb-4 ${
                    pkg.highlighted ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className={`text-3xl font-bold mb-2 ${
                    pkg.highlighted ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {pkg.price}
                  </div>
                  <p className="text-sm text-gray-600">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={() => handleWhatsAppContact(pkg.name, pkg.price)}
                    className={`w-full ${
                      pkg.highlighted 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    Choose This Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Still Not Sure Which Package to Choose?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what makes each package special and who they're designed for.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <GraduationCap className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Student Package - ₹8,500
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Perfect for:</strong> Students, researchers, first-time authors on a budget
                </p>
                <p className="text-gray-600">
                  Get all the essentials you need to publish your book professionally without breaking the bank. Ideal for academic works, thesis publications, and debut novels.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <Star className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Basic Package - ₹12,500
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Perfect for:</strong> Authors who want professional quality with essential services
                </p>
                <p className="text-gray-600">
                  Step up from the basics with professional editing and custom cover design. Great for fiction and non-fiction authors seeking quality publication.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <Crown className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Standard Package - ₹20,500
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Perfect for:</strong> Serious authors who want comprehensive publishing and marketing
                </p>
                <p className="text-gray-600">
                  Includes advanced editing, premium design options, and marketing consultation. Ideal for authors planning to build their brand.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <Gem className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Premium Package - ₹25,500
                </h3>
                <p className="text-gray-600 mb-4">
                  <strong>Perfect for:</strong> Authors who want the complete publishing experience
                </p>
                <p className="text-gray-600">
                  Our most comprehensive package with unlimited editing, global distribution, complete marketing campaign, and author website creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I upgrade my package later?",
                answer: "Yes, you can upgrade to a higher package at any time during the publishing process. You'll only pay the difference in price."
              },
              {
                question: "What if my book has more pages than the package limit?",
                answer: "Don't worry! We can accommodate books of any length. Additional charges for extra pages are very reasonable and will be discussed upfront."
              },
              {
                question: "How long does the publishing process take?",
                answer: "The timeline varies by package: Student & Basic (4-6 weeks), Standard (6-8 weeks), Premium (8-10 weeks). Rush services are available if needed."
              },
              {
                question: "Do you provide author copies?",
                answer: "Yes! Digital copies are included in all packages. Physical author copies are included in Standard and Premium packages, and available for purchase in others."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Publish Your Book?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose your package and let's start your publishing journey today. Our team is ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Have Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
