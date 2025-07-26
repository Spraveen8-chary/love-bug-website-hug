import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Moon, Star, Sparkles, Gift, Camera, MessageCircle, X } from "lucide-react";
import loveHero from "@/assets/love-hero.jpg";
import cuteHearts from "@/assets/cute-hearts.jpg";
import loveMemories from "@/assets/love-memories.jpg";
import teddyBearRose from "@/assets/teddy-bear-rose.jpg";
import duduBubu1 from "@/assets/dudu-bubu-1.jpg";
import duduBubu2 from "@/assets/dudu-bubu-2.jpg";
import duduBubu3 from "@/assets/dudu-bubu-3.jpg";

const Index = () => {
  const [showApology, setShowApology] = useState(false);
  const [showMemories, setShowMemories] = useState(false);

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

  const duduBubuImages = [duduBubu1, duduBubu2, duduBubu3];

  const personalMessage = `Hello Kasturi, I know I have no right to message you again..not after what I said, kani I need to say this..nee mind ni Edo change cheyataniki kadhu..just truth. I'm so sorry for what I did, But adi nenu kadhu..nen ekkada ninnu purtiga lose ayita emo ani ana bhayam tho nen ala matladanu..and I never wanted to hurt the person I cared adore most..nenu edi ayite avvadhu anukunanno ade ayindi... you're always so precious to me..em jarigina jaragaka poyina..evaru ochina rakapoyina naa life.. you'll be always the first important..I'm so so sorry for what I did.. i never wanted to make you feel like i didn't respected your feelings or freedom..I'm just stupid around you. Nee deggara ela behave cheyalo kuda naku teliyadu antha istam nuv ante..kani nen nijam ga regret avutunna neetho ala behave chesinanduku.. i know this is not first time..but I'm willing to do anything that makes you forgive me..i always wanted to give you my best but i given you my worst, I'm so sorry for that..because all I wanted is to make happy the one person i adore most of my life and I was not the person i was .. I'll be the friend you will deserve this time.. i promise you that. I really do.i never really realised reality untill I completely lost it . Again..I'm sorry for what I did.. i regret it every second of my life. I want our friendship be stronger again..I'll be the friend you deserved from the first..I will be always with you..i never want to hurt you again..I want your forgiveness more than anything..I'm willing to do everything for it..`;

  return (
    <div className="min-h-screen gradient-soft">
      {/* Floating Stars Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-stars absolute top-10 left-10 w-20 h-20"></div>
        <div className="floating-stars absolute top-32 right-20 w-16 h-16"></div>
        <div className="floating-stars absolute bottom-32 left-1/4 w-24 h-24"></div>
        <div className="floating-stars absolute bottom-20 right-1/3 w-18 h-18"></div>
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
            <Moon className="w-16 h-16 text-moon-blue animate-pulse-moon mx-auto mb-4" />
            <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              I'm Sorry &
              <span className="text-moon-blue block">Miss You</span>
            </h1>
            
            {/* Personal Message Block */}
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/30 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-white leading-relaxed text-left whitespace-pre-line">
                Hello kasturi, i know I have no right to message you again..not after what I said, kani I need to say this..nee mind ni Edo change cheyataniki kadhu..just truth. I'm so sorry for what I did, But adi nenu kadhu..nen ekkada ninnu purtiga lose ayita emo ani ana bhayam tho nen ala matladanu..and I never wanted to hurt the person I cared adore most..nenu edi ayite avvadhu anukunanno ade ayindi... you're always so precious to me..em jarigina jaragaka poyina..evaru ochina rakapoyina naa life.. you'll be always the first important..I'm so so sorry for what I did.. i never wanted to make you feel like i didn't respected your feelings or freedom..I'm just stupid around you. Nee deggara ela behave cheyalo kuda naku teliyadu antha istam nuv ante..kani nen nijam ga regret avutunna neetho ala behave chesinanduku.. i know this is not first time..but I'm willing to do anything that makes you forgive me..i always wanted to give you my best but i given you my worst, I'm so sorry for that..because all I wanted is to make happy the one person i adore most of my life and I was not the person i was .. I'll be the friend you will deserve this time.. i promise you that. I really do.i never really realised reality untill I completely lost it . Again..I'm sorry for what I did.. i regret it every second of my life.
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed drop-shadow-md">
              I made this to share my feelings, apologize for my mistakes,
              <br className="hidden md:block" />
              and ask for a chance to make things right between us
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="night" 
              size="lg" 
              className="text-lg px-8 py-4"
              onClick={() => setShowApology(true)}
            >
              <Moon className="w-5 h-5" />
              My Heartfelt Apology
            </Button>
            <Button 
              variant="nightOutline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm"
              onClick={() => setShowMemories(true)}
            >
              <Camera className="w-5 h-5" />
              Our Precious Memories
            </Button>
          </div>
        </div>
      </section>

      {/* Teddy Bear Apology Section */}
      {showApology && (
        <section className="py-20 px-6 bg-night-soft">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                onClick={() => setShowApology(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              
              <div className="night-card text-center">
                <img 
                  src={teddyBearRose} 
                  alt="Teddy bear with rose" 
                  className="w-64 h-64 mx-auto mb-8 rounded-full shadow-moon animate-pulse-moon object-cover"
                />
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-moon-blue mb-6">
                  My Deepest Apology to Kasturi 🌙💔
                </h2>
                
                <div className="bg-white/60 rounded-2xl p-8 shadow-soft mb-6">
                  <p className="text-base md:text-lg text-foreground leading-relaxed text-left whitespace-pre-line">
                    {personalMessage}
                  </p>
                </div>
                
                <div className="flex justify-center space-x-3 mb-6">
                  <div className="text-3xl animate-bounce" style={{ animationDelay: '0s' }}>😔</div>
                  <div className="text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>💔</div>
                  <div className="text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>🙏</div>
                  <div className="text-3xl animate-bounce" style={{ animationDelay: '0.6s' }}>💕</div>
                </div>
                
                <p className="text-xl text-moon-blue font-medium mb-4">
                  I am feeling sorry for how I behaved
                </p>
                <p className="text-lg text-muted-foreground mb-2">I know I was wrong</p>
                <p className="text-lg text-muted-foreground mb-2">I failed to be a good friend</p>
                <p className="text-lg text-muted-foreground mb-4">The worst thing I did was texting that at the end - that will be my regret entirely</p>
                <p className="text-lg text-moon-blue font-medium">
                  You are the most important person to me, and I want you to come back 🌙💕
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dudu Bubu Memories Section */}
      {showMemories && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white"
                onClick={() => setShowMemories(false)}
              >
                <X className="w-6 h-6" />
              </Button>
              
              <div className="night-card text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-moon-blue mb-8">
                  Our Sweet Dudu Bubu Memories 🌙🥰
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {duduBubuImages.map((image, index) => (
                    <div key={index} className="night-card group">
                      <img 
                        src={image} 
                        alt={`Dudu Bubu ${index + 1}`}
                        className="w-full h-64 object-cover rounded-2xl shadow-soft group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="mt-4">
                        <div className="text-2xl mb-2">💕</div>
                        <p className="text-moon-blue font-medium">
                          {index === 0 && "Us Together 🤗"}
                          {index === 1 && "Holding Hands 👫"} 
                          {index === 2 && "Sharing Hearts 💖"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="bg-night-soft rounded-2xl p-6">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                    These cute characters remind me of us - how we used to care for each other, 
                    support one another, and share beautiful moments together. 
                  </p>
                  <p className="text-moon-blue font-medium">
                    I miss being your Dudu, and I hope I can be again someday 🌙🥺💕
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Love Messages Section */}
      <section className="py-20 px-6">{showApology || showMemories ? '' : ''}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <img 
              src={cuteHearts} 
              alt="Cute hearts" 
              className="w-24 h-24 mx-auto mb-6 rounded-full shadow-moon animate-pulse-moon"
            />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-moon-blue mb-4">
              From My Heart to Yours
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These are my honest feelings, my regrets, and my hopes for us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {heartfeltMessages.map((msg, index) => (
              <Card key={index} className="night-card group cursor-pointer">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2 group-hover:animate-bounce">
                    {msg.emoji}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-moon-blue mb-3">
                    {msg.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  {msg.message}
                </p>
                <div className="flex justify-center mt-6">
                  <Sparkles className="w-6 h-6 text-night-purple opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-20 px-6 bg-night-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-moon-blue mb-4">
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
              className="w-full rounded-3xl shadow-moon mb-12"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {memories.map((memory, index) => (
                <div key={index} className="flex items-center space-x-4 night-card">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-night flex items-center justify-center">
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
          <div className="night-card">
            <Gift className="w-16 h-16 text-moon-blue mx-auto mb-6 animate-pulse-moon" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-moon-blue mb-6">
              Can We Try Again?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I know I hurt you, and I know trust isn't easily rebuilt. But you mean too much to me to give up without trying. 
              I've learned from my mistakes, I've grown as a person, and I'm ready to do whatever it takes to earn your 
              friendship back. Even if we can't be what we once were, I hope we can find a way to be in each other's lives again. 
              You deserve the world, and I want to be better for you.
            </p>
            <div className="flex justify-center space-x-2 mb-8">
              <Moon className="w-6 h-6 text-moon-blue animate-pulse-moon" />
              <Star className="w-6 h-6 text-star-yellow animate-pulse-moon" style={{ animationDelay: '0.5s' }} />
              <Sparkles className="w-6 h-6 text-night-purple animate-pulse-moon" style={{ animationDelay: '1s' }} />
            </div>
            <Button variant="night" size="lg" className="text-lg px-12 py-4">
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
            <Moon className="w-5 h-5 text-moon-blue" />
            <Sparkles className="w-5 h-5 text-night-purple" />
            <Star className="w-5 h-5 text-star-yellow" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
