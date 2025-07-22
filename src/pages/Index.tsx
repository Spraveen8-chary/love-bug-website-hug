import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Sparkles, Gift, Camera, MessageCircle } from "lucide-react";
import loveHero from "@/assets/love-hero.jpg";
import cuteHearts from "@/assets/cute-hearts.jpg";
import loveMemories from "@/assets/love-memories.jpg";

const Index = () => {
  const loveMessages = [
    {
      title: "You're My Sunshine ☀️",
      message: "Every day with you feels like a warm, bright morning. You light up my world in ways I never knew were possible.",
      emoji: "🌞"
    },
    {
      title: "Forever & Always 💕",
      message: "In a world full of temporary things, you are my constant. My heart beats for you, today and always.",
      emoji: "💖"
    },
    {
      title: "My Safe Haven 🏠",
      message: "In your arms, I found my home. With you, I can be completely myself, loved and accepted.",
      emoji: "🤗"
    },
    {
      title: "You're Amazing 🌟",
      message: "Your kindness, your smile, your gentle soul - everything about you makes my heart skip a beat.",
      emoji: "✨"
    },
    {
      title: "Thank You 🙏",
      message: "Thank you for choosing me, for loving me, for being patient with me. You make me want to be better every day.",
      emoji: "💝"
    },
    {
      title: "Sweet Dreams 🌙",
      message: "Every night I fall asleep grateful for you, and every morning I wake up excited to love you more.",
      emoji: "🌙"
    }
  ];

  const memories = [
    "Our first date 💑",
    "That funny moment when we both... 😂",
    "Our favorite song together 🎵",
    "That time we got lost but found each other 🗺️",
    "Our inside jokes that no one else gets 🤫",
    "All the little things that make us 'us' 💕"
  ];

  return (
    <div className="min-h-screen gradient-soft">
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-hearts absolute top-10 left-10 w-20 h-20"></div>
        <div className="floating-hearts absolute top-32 right-20 w-16 h-16"></div>
        <div className="floating-hearts absolute bottom-32 left-1/4 w-24 h-24"></div>
        <div className="floating-hearts absolute bottom-20 right-1/3 w-18 h-18"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${loveHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-love-pink animate-pulse-love mx-auto mb-4" />
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              For My Beautiful
              <span className="text-love-pink block">Love</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
              This little corner of the internet is dedicated to you, 
              <br className="hidden md:block" />
              the most wonderful person in my world
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="love" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5" />
              Read My Messages
            </Button>
            <Button variant="loveOutline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm">
              <Camera className="w-5 h-5" />
              Our Memories
            </Button>
          </div>
        </div>
      </section>

      {/* Love Messages Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <img 
              src={cuteHearts} 
              alt="Cute hearts" 
              className="w-24 h-24 mx-auto mb-6 rounded-full shadow-love animate-pulse-love"
            />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-love-pink mb-4">
              Messages from My Heart
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every word written with love, every message crafted with care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loveMessages.map((msg, index) => (
              <Card key={index} className="love-card group cursor-pointer">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">
                    {msg.emoji}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-love-pink mb-3">
                    {msg.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {msg.message}
                </p>
                <div className="flex justify-center mt-6">
                  <Sparkles className="w-6 h-6 text-love-purple opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-20 px-6 bg-love-blush">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-love-pink mb-4">
              Our Beautiful Memories
            </h2>
            <p className="text-xl text-muted-foreground">
              Every moment with you is a treasure I hold close to my heart
            </p>
          </div>

          <div className="relative">
            <img 
              src={loveMemories} 
              alt="Our memories" 
              className="w-full rounded-3xl shadow-love mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memories.map((memory, index) => (
                <div key={index} className="flex items-center space-x-4 love-card">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-love flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-medium text-foreground">{memory}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Love Note */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="love-card">
            <Gift className="w-16 h-16 text-love-pink mx-auto mb-6 animate-pulse-love" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-love-pink mb-6">
              You Are My Everything
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              This website is just a small token of my love for you. 
              Words can never fully capture how much you mean to me, but I hope this gives you a glimpse 
              into the depth of my feelings. You make every day brighter, every moment more meaningful, 
              and every dream more beautiful.
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <Heart className="w-6 h-6 text-love-pink animate-pulse-love" />
              <Heart className="w-6 h-6 text-love-rose animate-pulse-love" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-6 h-6 text-love-purple animate-pulse-love" style={{ animationDelay: '1s' }} />
            </div>
            <Button variant="love" size="lg" className="text-lg px-12 py-4">
              <MessageCircle className="w-5 h-5" />
              I Love You More Every Day
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-4">
            Made with 💕 for the most amazing person in the world
          </p>
          <div className="flex justify-center space-x-4">
            <Heart className="w-5 h-5 text-love-pink" />
            <Sparkles className="w-5 h-5 text-love-purple" />
            <Star className="w-5 h-5 text-love-rose" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
