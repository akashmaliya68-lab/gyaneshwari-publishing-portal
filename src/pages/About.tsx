
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Users, Target, Heart, Award, Clock } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      title: "Quality First",
      description: "We never compromise on quality and ensure every book meets professional publishing standards."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Author-Centric",
      description: "Your vision is our priority. We work closely with authors to bring their unique stories to life."
    },
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Results Driven",
      description: "We focus on delivering measurable results and successful book launches for our authors."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-600" />,
      title: "Passionate Team",
      description: "Our team is passionate about books and committed to helping authors succeed."
    }
  ];

  const stats = [
    { number: "500+", label: "Books Published" },
    { number: "450+", label: "Happy Authors" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Gyaneshwari Prakashan
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dedicated team of publishing professionals committed to helping authors transform their manuscripts into beautifully published books.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  Gyaneshwari Prakashan was founded with a simple yet powerful vision: to make quality book publishing accessible to every author, regardless of their background or experience.
                </p>
                <p>
                  We understand that every author has a unique story to tell, and we believe that every story deserves to be heard. Our team of experienced professionals is dedicated to providing comprehensive publishing services that transform your manuscript into a professionally published book.
                </p>
                <p>
                  From first-time authors to seasoned writers, we have helped hundreds of authors navigate the complex world of book publishing. Our personalized approach ensures that each author receives the attention and support they need to succeed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-amber-600 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-gray-700 text-lg">
                  To empower authors by providing professional, affordable, and comprehensive publishing services that help bring their literary dreams to reality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape our relationship with every author we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Authors Choose Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Quick Turnaround
                </h3>
                <p className="text-gray-600">
                  We understand the excitement of seeing your book in print. Our efficient processes ensure quick delivery without compromising quality.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Personal Support
                </h3>
                <p className="text-gray-600">
                  Every author gets a dedicated project manager who guides them through the entire publishing journey.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Professional Quality
                </h3>
                <p className="text-gray-600">
                  Our books meet international publishing standards and are indistinguishable from traditionally published titles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Publishing Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your book to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/packages">View Our Packages</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
