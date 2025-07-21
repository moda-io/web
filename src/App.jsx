import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-pink-200 via-rose-100 to-blue-200 p-4">
      <h1 className="text-5xl font-extrabold text-rose-600 mt-8 mb-2 tracking-tight">moda</h1>
      <h2 className="text-xl text-rose-400 mb-6 font-bold text-center">One Destination. All your favorite stores. Perfectly for you.</h2>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-6">
        Moda brings everything together — every brand you love, every store you browse — into a single, beautifully streamlined experience.<br /><br />
        No more hopping between tabs, apps, or wishlists. Moda is your personalized gateway to the entire world of fashion.
      </p>
      <div className="text-rose-500 text-lg font-semibold mb-8">Coming Soon</div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 w-full max-w-md flex flex-col items-center mb-8">
        <h2 className="text-2xl font-semibold text-rose-500 mb-2">Join the Waitlist</h2>
        <p className="text-gray-600 mb-4 text-center">Be the first to get updates and learn more about Moda's launch and features!</p>
        {submitted ? (
          <div className="text-green-600 font-medium">Thank you for your interest! We'll keep you updated.</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-300"
            />
            <button
              type="submit"
              className="rounded-lg bg-rose-500 text-white font-semibold py-2 hover:bg-rose-600 transition-colors"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
      <section className="w-full max-w-2xl mb-8 px-2">
        <h3 className="text-2xl font-bold text-rose-500 mb-4 text-center">Why Moda?</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-rose-600 mb-1">All Your Stores, One Place</h4>
            <p className="text-gray-700">Access thousands of brands and retailers through a single platform. From luxury labels to emerging designers to your everyday favorites.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rose-600 mb-1">Personalized to You</h4>
            <p className="text-gray-700">Moda learns your style over time — and faster if you tell us what you love. From color analysis to fit preferences, we surface options you are more likely to love, not what algorithms think everyone wants.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-rose-600 mb-1">Smarter Shopping</h4>
            <p className="text-gray-700">No more endless scrolling. Moda curates your feed with precision, bringing you what matters most and helping you discover what’s next.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 