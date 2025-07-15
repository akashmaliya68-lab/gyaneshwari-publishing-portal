import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Star, Quote, Award, BookOpen } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      quote: "Gyaneshwari Prakashan transformed my manuscript into a beautiful published book. Their attention to detail and professional service exceeded my expectations.",
      author: "Dr. Priya Sharma",
      role: "Academic Author",
      book: "Research Methodologies in Modern Science",
      rating: 5,
      featured: true
    },
    {
      quote: "The team guided me through every step of the publishing process. From editing to Amazon listing, everything was handled professionally.",
      author: "Rajesh Kumar",
      role: "First-time Author",
      book: "Journey Through the Himalayas",
      rating: 5,
      featured: true
    },
    {
      quote: "Excellent formatting and cover design services. My poetry collection looks absolutely stunning thanks to their creative team.",
      author: "Meera Agarwal",
      role: "Poet & Writer",
      book: "Whispers of the Heart",
      rating: 5,
      featured: true
    },
    {
      quote: "Professional editing services helped refine my novel. The editors understood my vision and enhanced it beautifully.",
      author: "Arjun Patel",
      role: "Fiction Writer",
      book: "Shadows of Tomorrow",
      rating: 5,
      featured: false
    },
    {
      quote: "Fast turnaround time and excellent customer support. They made the publishing process smooth and stress-free.",
      author: "Sunita Devi",
      role: "Self-Help Author",
      book: "Finding Inner Peace",
      rating: 5,
      featured: false
    },
    {
      quote: "The ISBN registration and Amazon listing services saved me so much time. Highly recommend their complete package.",
      author: "Vikram Singh",
      role: "Business Author",
      book: "Leadership in the Digital Age",
      rating: 5,
      featured: false
    },
    {
      quote: "Their cover design team created something beyond my imagination. The book cover perfectly captures the essence of my story.",
      author: "Kavya Sharma",
      role: "Romance Novelist",
      book: "Love in the Time of Monsoons",
      rating: 5,
      featured: false
    },
    {
      quote: "Affordable pricing without compromising on quality. Best decision I made for my publishing journey.",
      author: "Dr. Ramesh Gupta",
      role: "Medical Writer",
      book: "Modern Healthcare Practices",
      rating: 5,
      featured: false
    },
    {
      quote: "The team's dedication to quality and timely delivery is commendable. They truly care about authors' success.",
      author: "Anita Verma",
      role: "Children's Author",
      book: "Adventures in Dreamland",
      rating: 5,
      featured: false
    }
  ];

  const featuredReviews = reviews.filter(review => review.featured);
  const allReviews = reviews.filter(review => !review.featured);

  const stats = [
    { number: "500+", label: "Books Published", icon: BookOpen },
    { number: "4.9/5", label: "Average Rating", icon: Star },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "450+", label: "Happy Authors", icon: Quote }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Author Reviews & Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover what our published authors say about their experience with Gyaneshwari Prakashan. 
            Read genuine testimonials from writers who have successfully brought their literary dreams to life.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Reviews */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Highlighted testimonials from our most successful publishing partnerships
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Quote className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  
                  <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
                    "{review.quote}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-semibold text-foreground text-lg">{review.author}</h4>
                    <p className="text-muted-foreground text-sm mb-1">{review.role}</p>
                    <p className="text-primary text-xs font-medium">"{review.book}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Reviews Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              More Author Testimonials
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read more reviews from our diverse community of published authors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Quote className="h-4 w-4 text-muted-foreground mt-1 mr-2 flex-shrink-0" />
                    <blockquote className="text-foreground leading-relaxed italic">
                      "{review.quote}"
                    </blockquote>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex mb-2">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <h4 className="font-semibold text-foreground text-sm">{review.author}</h4>
                      <p className="text-muted-foreground text-xs">{review.role}</p>
                      <p className="text-primary text-xs font-medium">"{review.book}"</p>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">
                        {review.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Join Our Success Stories?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Let us help you transform your manuscript into a professionally published book. 
            Start your publishing journey today!
          </p>
          <div className="space-x-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/packages">
                View Publishing Packages
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;