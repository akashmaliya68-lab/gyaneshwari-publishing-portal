
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  PenTool, 
  FileText, 
  Palette, 
  ShoppingCart, 
  Hash,
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Hash className="h-12 w-12 text-blue-600" />,
      title: "ISBN Allotment",
      description: "We handle the complete ISBN registration process for your book, ensuring it gets a unique identifier recognized worldwide.",
      features: [
        "Complete ISBN registration",
        "Barcode generation",
        "Legal compliance",
        "Worldwide recognition"
      ]
    },
    {
      icon: <PenTool className="h-12 w-12 text-blue-600" />,
      title: "Manuscripting",
      description: "Our expert writers help you develop your ideas into a complete manuscript, ensuring your story flows perfectly.",
      features: [
        "Story development",
        "Content structuring",
        "Research assistance",
        "Collaborative writing"
      ]
    },
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Professional Editing",
      description: "Comprehensive editing services including proofreading, copy editing, and developmental editing for your manuscript.",
      features: [
        "Grammar and spelling check",
        "Content flow improvement",
        "Style consistency",
        "Multiple revision rounds"
      ]
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Book Formatting",
      description: "Professional formatting for both print and digital versions, ensuring your book looks great on all platforms.",
      features: [
        "Print-ready formatting",
        "E-book formatting",
        "Typography selection",
        "Layout optimization"
      ]
    },
    {
      icon: <Palette className="h-12 w-12 text-blue-600" />,
      title: "Cover Designing",
      description: "Eye-catching cover designs that attract readers and represent your book's content perfectly.",
      features: [
        "Custom cover design",
        "Multiple concept options",
        "Print and digital versions",
        "Market research-based design"
      ]
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-blue-600" />,
      title: "Amazon Listing",
      description: "Complete setup of your book on Amazon and other major platforms with optimized listings for maximum visibility.",
      features: [
        "Amazon KDP setup",
        "Product description optimization",
        "Category selection",
        "Keywords optimization"
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
              Our Publishing Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive publishing solutions designed to transform your manuscript into a professionally published book
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Publishing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A step-by-step approach that ensures quality and efficiency at every stage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your vision, requirements, and select the right package for your needs."
              },
              {
                step: "02", 
                title: "Manuscript Review",
                description: "Our team reviews your manuscript and provides detailed feedback and recommendations."
              },
              {
                step: "03",
                title: "Production",
                description: "We work on editing, formatting, cover design, and all technical aspects of your book."
              },
              {
                step: "04",
                title: "Publication",
                description: "Your book is published and listed on major platforms with full marketing support."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quality Assurance
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                We maintain the highest standards in every aspect of book production.
              </p>
              <div className="space-y-4">
                {[
                  "Multiple rounds of editing and proofreading",
                  "Professional design standards compliance",
                  "Print quality testing and verification",
                  "Digital format optimization",
                  "Author approval at every major milestone"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Choose from our carefully crafted packages or contact us for a custom solution tailored to your specific needs.
              </p>
              <div className="space-y-3">
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/packages">
                    View Packages <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white hover:text-blue-600">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
