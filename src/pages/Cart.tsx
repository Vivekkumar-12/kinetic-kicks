import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StarsBackground from "@/components/StarsBackground";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isOrdering, setIsOrdering] = useState(false);

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    
    setIsOrdering(true);
    // Simulate order placement
    setTimeout(() => {
      toast.success("Order placed successfully! Thank you for shopping with us.");
      clearCart();
      setIsOrdering(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <StarsBackground />
      <Navigation />
      
      <div className="container mx-auto px-6 pt-32 pb-20 min-h-[80vh]">
        <h1 className="text-5xl lg:text-7xl font-black mb-12 text-center">
          <span className="text-foreground">YOUR </span>
          <span className="bg-gradient-fire bg-clip-text text-transparent">CART</span>
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-muted-foreground opacity-50" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
            <Link to="/">
              <Button size="lg" className="rounded-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-card border border-border rounded-2xl p-6 flex gap-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.name}</h3>
                    <p className="text-muted-foreground mb-4">{item.category}</p>
                    <p className="text-2xl font-black text-primary">{item.price}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFromCart(item.id)}
                      className="text-destructive hover:text-destructive hover:bg-destructive/10"
                    >
                      <Trash2 className="h-5 w-5" />
                    </Button>
                    <div className="flex items-center gap-2 border border-border rounded-full px-2 py-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 rounded-full"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full rounded-full"
              >
                Clear Cart
              </Button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-32">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Order Summary</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Items ({totalItems})</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-green-500">FREE</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-foreground">Total</span>
                      <span className="text-primary">₹{totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button
                  className="w-full rounded-full mb-4"
                  size="lg"
                  onClick={handlePlaceOrder}
                  disabled={isOrdering}
                >
                  {isOrdering ? "Processing..." : "Place Order"}
                </Button>
                
                <Link to="/">
                  <Button variant="outline" className="w-full rounded-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
