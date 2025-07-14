
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    manuscript: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      package: "",
      manuscript: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      details: "gyaneshwariprakashan1997@gmail.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      details: "+91 9119743698",
      subtitle: "Mon-Fri 9:00 AM - 6:00 PM"
    },
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Office",
      details: "Your City, State",
      subtitle: "Visit us for personal consultation"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      title: "Business Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      subtitle: "Saturday: 10:00 AM - 4:00 PM"
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your publishing journey? Get in touch with our team and let's discuss how we can help bring your book to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-700 font-medium mb-1">
                    {info.details}
                  </p>
                  <p className="text-sm text-gray-500">
                    {info.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Consultation
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below and we'll get back to you with a personalized publishing plan.
            </p>
          </div>
          
          <Card className="p-8">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="package">Interested Package</Label>
                    <Select onValueChange={(value) => handleInputChange("package", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">Student Package (₹8,500)</SelectItem>
                        <SelectItem value="basic">Basic Package (₹12,500)</SelectItem>
                        <SelectItem value="standard">Standard Package (₹20,500)</SelectItem>
                        <SelectItem value="premium">Premium Package (₹25,500)</SelectItem>
                        <SelectItem value="custom">Custom Solution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="manuscript">Manuscript Status</Label>
                  <Select onValueChange={(value) => handleInputChange("manuscript", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="What's the status of your manuscript?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed">Completed manuscript</SelectItem>
                      <SelectItem value="in-progress">Work in progress</SelectItem>
                      <SelectItem value="idea">Just an idea</SelectItem>
                      <SelectItem value="published">Previously published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your book, genre, target audience, and any specific requirements or questions you have..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-600">
              Here are some common questions we receive from authors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "How long does the publishing process take?",
                answer: "Depending on your package, it takes 4-10 weeks from manuscript submission to published book."
              },
              {
                question: "Do you accept all genres?",
                answer: "Yes, we work with fiction, non-fiction, academic texts, poetry, children's books, and more."
              },
              {
                question: "Can you help with marketing my book?",
                answer: "Absolutely! Our Standard and Premium packages include comprehensive marketing support."
              },
              {
                question: "What formats do you publish in?",
                answer: "We publish in both print (paperback/hardcover) and digital (ebook) formats for maximum reach."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <MessageCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
