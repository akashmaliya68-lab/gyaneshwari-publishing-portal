import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Star, Quote, Award, BookOpen, Send } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [formData, setFormData] = useState({
    name: '',
    bookTitle: '',
    rating: 5,
    feedback: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here - could integrate with backend
    console.log('Review submitted:', formData);
    // Reset form
    setFormData({ name: '', bookTitle: '', rating: 5, feedback: '' });
    // Show success message (could use toast)
    alert('Thank you for your review! We appreciate your feedback.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const reviews = [
    {
      quote: "Working with Gyaneshwari Prakashan was a dream come true. They brought my poetry to life with beautiful formatting and professional editing.",
      author: "Sonika Sharma",
      role: "Poet & Writer",
      book: "Wakt ka Daur",
      rating: 5,
      featured: true
    },
    {
      quote: "The team understood my vision perfectly and helped me create a compelling narrative. Excellent support throughout the publishing journey.",
      author: "Kavya",
      role: "Fiction Writer",
      book: "The Decree",
      rating: 5,
      featured: true
    },
    {
      quote: "From manuscript to published book, every step was handled with care and professionalism. Highly recommended for all authors.",
      author: "Ramchander Jhatwal",
      role: "Literary Author",
      book: "Veera ki Ardaas",
      rating: 5,
      featured: true
    },
    {
      quote: "Outstanding editing and publishing services. My poetry collection received the attention it deserved thanks to their expert team.",
      author: "Dr. Vinay Kumar Srivastava",
      role: "Academic & Poet",
      book: "Nav Kaavy Prasoon",
      rating: 5,
      featured: false
    },
    {
      quote: "The publishing process was seamless and efficient. They helped transform my ideas into a professionally bound book.",
      author: "Krishiv Mahajan",
      role: "Motivational Author",
      book: "Rise Without End",
      rating: 5,
      featured: false
    },
    {
      quote: "Exceptional quality and attention to detail. The team made my philosophical thoughts accessible to readers through excellent formatting.",
      author: "Priti Motilal Sukheja",
      role: "Philosopher & Writer",
      book: "Though on everything",
      rating: 5,
      featured: false
    },
    {
      quote: "Beautiful cover design and professional layout. My nature-themed book looks exactly as I envisioned it would.",
      author: "Priya Shrivastav",
      role: "Nature Writer",
      book: "Ek safar purana aur kudrat",
      rating: 5,
      featured: false
    },
    {
      quote: "Their understanding of emotional writing is remarkable. They helped enhance the depth of my work while maintaining authenticity.",
      author: "Sonika Sharma",
      role: "Psychology Writer",
      book: "Emotional Empathy",
      rating: 5,
      featured: false
    },
    {
      quote: "Professional editing and thoughtful suggestions improved my manuscript significantly. Grateful for their literary expertise.",
      author: "Ramchander Jhatwal",
      role: "Cultural Writer",
      book: "Kaumaaryavatee",
      rating: 5,
      featured: false
    },
    {
      quote: "The team helped me express my inner voice through proper structuring and beautiful presentation. Truly satisfied with the outcome.",
      author: "Amit Meghnad",
      role: "Spiritual Writer",
      book: "Antaratma ki Awaj",
      rating: 5,
      featured: false
    },
    {
      quote: "They transformed my scattered thoughts and dreams into a coherent, beautiful book. The editing process was enlightening.",
      author: "Mita Das",
      role: "Creative Writer",
      book: "Scribblings of dreamer",
      rating: 5,
      featured: false
    },
    {
      quote: "Exceptional care in handling spiritual content. The team respected the sanctity of the subject while enhancing readability.",
      author: "Kamla Shastry",
      role: "Spiritual Author",
      book: "Amazing Grace",
      rating: 5,
      featured: false
    },
    {
      quote: "Beautiful typography and layout for my poetry collection. They understood the emotional depth and presented it perfectly.",
      author: "Manisha Kumari",
      role: "Poet",
      book: "Ashk Ae Ishq",
      rating: 5,
      featured: false
    },
    {
      quote: "The team's sensitivity to poetic expression is commendable. They preserved the essence while improving the presentation.",
      author: "Amit Meghnad",
      role: "Poet & Writer",
      book: "Aah se apjate shabd",
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

      {/* Submit Review Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Share Your Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have you published with us? We'd love to hear about your experience! 
              Your review helps other authors discover our services.
            </p>
          </div>
          
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-background border-input"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bookTitle" className="text-sm font-medium text-foreground">
                      Book Title *
                    </Label>
                    <Input
                      id="bookTitle"
                      name="bookTitle"
                      type="text"
                      value={formData.bookTitle}
                      onChange={handleInputChange}
                      placeholder="Enter your book title"
                      className="bg-background border-input"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-foreground">
                    Rating *
                  </Label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating })}
                        className="focus:outline-none transition-colors"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            rating <= formData.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({formData.rating} star{formData.rating !== 1 ? 's' : ''})
                    </span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-sm font-medium text-foreground">
                    Your Review *
                  </Label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    value={formData.feedback}
                    onChange={handleInputChange}
                    placeholder="Share your experience with our publishing services..."
                    className="bg-background border-input min-h-[120px] resize-none"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    Tell us about your publishing journey, the quality of services, and what you loved most about working with us.
                  </p>
                </div>
                
                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit Review
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
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