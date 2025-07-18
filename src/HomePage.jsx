import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Collected email:", email);
    setEmail("");
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-gray-900 p-8 bg-gradient-to-b from-pink-50 via-pink-100 to-rose-200">
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-light tracking-wide mb-6 text-rose-400">
          moda
        </h1>
        <p className="text-lg text-gray-500 mb-10 max-w-xl">
          Discover clothes you love, without the hassle. moda is a personalized, centralized shopping platform built to make finding your next favorite outfit effortless.
        </p>

        <Card className="w-full max-w-md rounded-2xl shadow-lg bg-white/80">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h2 className="text-xl font-light text-center mb-2 text-rose-500">Join the Waitlist</h2>
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 rounded-xl border border-gray-300 focus:ring-rose-300"
                required
              />
              <Button type="submit" className="rounded-xl bg-rose-400 text-white hover:bg-rose-500">
                Notify Me
              </Button>
            </form>
          </CardContent>
        </Card>

        <section className="mt-20 max-w-3xl">
          <h2 className="text-3xl font-light mb-4 text-rose-400">What is moda?</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            moda is your gateway to curated fashion. We bring together your favorite brands and emerging designers into one seamless platform. With moda, you’ll receive personalized recommendations tailored to your style, making every shopping experience feel as effortless and enjoyable as finding something you love at first sight.
          </p>
        </section>
      </div>
    </main>
  );
}