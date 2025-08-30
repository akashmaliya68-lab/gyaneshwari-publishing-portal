import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, ShoppingCart, Star, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: string;
  coverImage: string;
  rating?: number;
  reviews?: number;
}

interface OrderForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  quantity: number;
  bookId: number;
}

const PublishedBooks = () => {
  const { toast } = useToast();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [orderForm, setOrderForm] = useState<OrderForm>({
    name: '',
    email: '',
    phone: '',
    address: '',
    quantity: 1,
    bookId: 0
  });

  // Sample books data - you can easily update this array to add more books
  const books: Book[] = [
    {
      id: 1,
      title: "The Journey Within",
      author: "Dr. Rajesh Kumar",
      description: "A profound exploration of self-discovery and personal growth through ancient wisdom and modern psychology.",
      price: "₹299",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      title: "Vedic Mathematics Simplified",
      author: "Prof. Anita Sharma",
      description: "Master the ancient Indian system of mathematics with easy-to-follow techniques and practical examples.",
      price: "₹399",
      coverImage: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 203
    },
    {
      id: 3,
      title: "Stories of Wisdom",
      author: "Meera Patel",
      description: "A collection of inspiring tales that teach valuable life lessons through engaging narratives.",
      price: "₹249",
      coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop",
      rating: 4.7,
      reviews: 89
    }
  ];

  const whatsappNumber = "919876543210"; // Replace with your actual WhatsApp number

  const handleWhatsAppOrder = (book: Book) => {
    const message = `Hi! I'm interested in ordering "${book.title}" by ${book.author} (${book.price}). Please provide me with the ordering details.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleFormOrder = (book: Book) => {
    setSelectedBook(book);
    setOrderForm(prev => ({ ...prev, bookId: book.id }));
    setIsOrderDialogOpen(true);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedBook) return;

    // Create WhatsApp message with order details
    const orderDetails = `
*NEW BOOK ORDER*
Book: ${selectedBook.title}
Author: ${selectedBook.author}
Price: ${selectedBook.price}
Quantity: ${orderForm.quantity}

*Customer Details:*
Name: ${orderForm.name}
Email: ${orderForm.email}
Phone: ${orderForm.phone}
Address: ${orderForm.address}

Total: ₹${parseInt(selectedBook.price.replace('₹', '')) * orderForm.quantity}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form and close dialog
    setOrderForm({
      name: '',
      email: '',
      phone: '',
      address: '',
      quantity: 1,
      bookId: 0
    });
    setIsOrderDialogOpen(false);
    
    toast({
      title: "Order Submitted!",
      description: "Your order details have been sent via WhatsApp. We'll contact you soon!",
    });
  };

  const handleInputChange = (field: keyof OrderForm, value: string | number) => {
    setOrderForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold text-foreground">Published Books</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our collection of carefully crafted books that inspire, educate, and transform lives. 
            Each book represents years of research and dedication to bringing you the finest literature.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {books.map((book) => (
            <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={book.coverImage}
                  alt={`${book.title} cover`}
                  className="w-full h-64 object-cover"
                />
                {book.rating && (
                  <div className="absolute top-4 right-4 bg-background/90 rounded-full px-2 py-1 flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                )}
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold line-clamp-2">{book.title}</CardTitle>
                <CardDescription className="text-primary font-medium">by {book.author}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {book.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{book.price}</span>
                  {book.reviews && (
                    <span className="text-sm text-muted-foreground">
                      {book.reviews} reviews
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="flex gap-2">
                <Button
                  onClick={() => handleFormOrder(book)}
                  className="flex-1"
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Order Form
                </Button>
                <Button
                  onClick={() => handleWhatsAppOrder(book)}
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Order Form Dialog */}
        <Dialog open={isOrderDialogOpen} onOpenChange={setIsOrderDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Order Book</DialogTitle>
              <DialogDescription>
                {selectedBook && `Fill in your details to order "${selectedBook.title}"`}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={orderForm.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={orderForm.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={orderForm.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={orderForm.quantity}
                  onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea
                  id="address"
                  value={orderForm.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Enter your complete address..."
                  rows={3}
                  required
                />
              </div>
              
              <div className="flex gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsOrderDialogOpen(false)} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Submit Order
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>

        {/* Additional Info Section */}
        <div className="bg-muted rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">How to Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">1</div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Choose Your Book</h3>
                <p className="text-muted-foreground text-sm">Browse our collection and select the book you want to purchase.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">2</div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">Place Your Order</h3>
                <p className="text-muted-foreground text-sm">Use the order form or contact us directly via WhatsApp for quick ordering.</p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mt-6">
            📞 WhatsApp: +91 98765 43210 | 📧 Email: orders@gyaneshwariprakashan.com
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PublishedBooks;