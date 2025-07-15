import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Star, ArrowRight, CheckCircle, Quote } from "lucide-react";
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
  
  const testimonials = [
    {
      quote: "Gyaneshwari Prakashan transformed my manuscript into a beautiful published book. Their attention to detail and professional service exceeded my expectations.",
      author: "Dr. Priya Sharma",
      role: "Academic Author",
      rating: 5
    },
    {
      quote: "The team guided me through every step of the publishing process. From editing to Amazon listing, everything was handled professionally.",
      author: "Rajesh Kumar",
      role: "First-time Author",
      rating: 5
    },
    {
      quote: "Excellent formatting and cover design services. My poetry collection looks absolutely stunning thanks to their creative team.",
      author: "Meera Agarwal",
      role: "Poet & Writer",
      rating: 5
    }
  ];
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[url('https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center bg-no-repeat py-20 relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-[#74b0fa]">Gyaneshwari Prakashan</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Authors Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of satisfied authors who have successfully brought their literary dreams to life with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <Quote className="h-8 w-8 text-muted-foreground" />
                  </div>
                  
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground text-lg">{testimonial.author}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="bg-card hover:bg-accent">
              <Link to="/contact">
                Read More Reviews
              </Link>
            </Button>
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