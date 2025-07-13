import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Star, ArrowRight, CheckCircle } from "lucide-react";
const Index = () => {
  const features = [{
    icon: <BookOpen className="h-12 w-12 text-blue-600" />,
    title: "Complete Publishing Solution",
    description: "From manuscript to market, we handle every aspect of your book publication journey."
  }, {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Expert Team",
    description: "Our experienced professionals ensure your book meets the highest industry standards."
  }, {
    icon: <Award className="h-12 w-12 text-blue-600" />,
    title: "Quality Assured",
    description: "We maintain strict quality control throughout the entire publication process."
  }];
  const services = ["ISBN Allotment", "Manuscripting", "Professional Editing", "Book Formatting", "Cover Designing", "Amazon Listing"];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 bg-[#b1b1b8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">Gyaneshwari Prakashan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your trusted partner in bringing your literary dreams to life. Professional book publication services with end-to-end support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/packages">
                  View Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gyaneshwari Prakashan?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive publishing solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive publishing services to transform your manuscript into a professionally published book.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>)}
              </div>
              <Button asChild className="mt-8 bg-blue-600 hover:bg-blue-700">
                <Link to="/services">
                  Learn More About Our Services
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg p-8 text-white">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-yellow-400 mr-2" />
                  <span className="text-2xl font-bold">Special Offer</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Student Package</h3>
                <p className="text-blue-100 mb-4">
                  Special discounted package designed specifically for students and first-time authors.
                </p>
                <div className="text-3xl font-bold mb-4">₹8,500/-</div>
                <Button asChild variant="secondary" className="w-full">
                  <Link to="/packages">View All Packages</Link>
                </Button>
              </div>
            </div>
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
            Join hundreds of satisfied authors who have successfully published their books with us.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">
              Get Started Today
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Index;