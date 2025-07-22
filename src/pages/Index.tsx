import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Star, Sparkles, Gift, Camera, MessageCircle } from "lucide-react";
import loveHero from "@/assets/love-hero.jpg";
import cuteHearts from "@/assets/cute-hearts.jpg";
import loveMemories from "@/assets/love-memories.jpg";

const Index = () => {
  const heartfeltMessages = [
    {
      title: "I'm Truly Sorry 😔",
      message: "I know I made mistakes that hurt you, and I carry that regret every day. I'm genuinely sorry for the pain I caused and the trust I broke.",
      emoji: "😢"
    },
    {
      title: "You Mean Everything 💕",
      message: "I've realized how much you mean to me. Your friendship, your presence in my life - it made everything better, and I miss it terribly.",
      emoji: "💖"
    },
    {
      title: "I Miss Us 🌟",
      message: "I miss our conversations, our laughs, the way we understood each other. I miss having you as my friend, my confidant, my person.",
      emoji: "🥺"
    },
    {
      title: "I've Changed 🌱",
      message: "I've taken time to reflect on my actions and work on myself. I'm not the same person who hurt you - I'm trying to be better every day.",
      emoji: "🌱"
    },
    {
      title: "Give Me a Chance? 🙏",
      message: "I'm not asking for everything to go back to how it was instantly. I just want a chance to show you I've changed and earn your trust again.",
      emoji: "🤞"
    },
    {
      title: "You're Special 🌟",
      message: "In all my life, I've never met someone like you. Your kindness, intelligence, and beautiful soul - you're irreplaceable to me.",
      emoji: "✨"
    }
  ];

  const memories = [
    "The first time we talked and clicked instantly 💬",
    "All those late night conversations that meant everything 🌙", 
    "When you helped me through tough times 🤗",
    "Our shared interests and dreams we talked about ✨",
    "The way you always understood me like no one else 💭",
    "All the moments I wish I could relive with you 💕"
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
              I'm Sorry &
              <span className="text-love-pink block">Miss You</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
              I made this to share my feelings, apologize for my mistakes,
              <br className="hidden md:block" />
              and ask for a chance to make things right between us
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="love" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5" />
              My Heartfelt Apology
            </Button>
            <Button variant="loveOutline" size="lg" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm">
              <Camera className="w-5 h-5" />
              Our Precious Memories
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
              From My Heart to Yours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These are my honest feelings, my regrets, and my hopes for us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heartfeltMessages.map((msg, index) => (
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
              The Memories We Shared
            </h2>
            <p className="text-xl text-muted-foreground">
              These moments meant the world to me, and I hope they did to you too
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
              Can We Try Again?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I know I hurt you, and I know trust isn't easily rebuilt. But you mean too much to me to give up without trying. 
              I've learned from my mistakes, I've grown as a person, and I'm ready to do whatever it takes to earn your 
              friendship back. Even if we can't be what we once were, I hope we can find a way to be in each other's lives again. 
              You deserve the world, and I want to be better for you.
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <Heart className="w-6 h-6 text-love-pink animate-pulse-love" />
              <Heart className="w-6 h-6 text-love-rose animate-pulse-love" style={{ animationDelay: '0.5s' }} />
              <Heart className="w-6 h-6 text-love-purple animate-pulse-love" style={{ animationDelay: '1s' }} />
            </div>
            <Button variant="love" size="lg" className="text-lg px-12 py-4">
              <MessageCircle className="w-5 h-5" />
              Please Give Me Another Chance
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-muted-foreground mb-4">
            Made with hope, regret, and love for someone I never want to lose
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
