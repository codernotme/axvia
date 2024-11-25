"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import { Card } from "@nextui-org/card";
import { Input } from "@nextui-org/input";

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Subscribed:", email);
    // Add additional subscription handling logic here
  };

  const features = [
    {
      icon: "bi-people-fill",
      title: "Collaborative Community",
      description: "Connect with like-minded developers and build amazing projects together.",
      color: "text-blue-500",
    },
    {
      icon: "bi-calendar-event",
      title: "Tech Events",
      description: "Participate in workshops, hackathons, and networking events.",
      color: "text-purple-500",
    },
    {
      icon: "bi-shield-check",
      title: "Secure Platform",
      description: "Your data is protected with blockchain technology and encryption.",
      color: "text-green-500",
    },
  ];

  return (
    <div className="font-poppins bg-background text-foreground">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect. Collaborate. <span className="gradient-text">Create.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the next generation of developers in building amazing open-source projects
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Button variant="solid" className="gradient-bg">
              Get Started
            </Button>
            <Button variant="bordered">Browse Projects</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Axvia?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6">
                <i className={`bi ${feature.icon} text-4xl ${feature.color} mb-4`}></i>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest updates on projects and events.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-md"
            />
            <Button type="submit" variant="solid" className="gradient-bg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Add footer links or content here */}
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Axvia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
