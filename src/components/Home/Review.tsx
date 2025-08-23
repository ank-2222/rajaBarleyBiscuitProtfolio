import { useState } from "react";
import { motion } from "framer-motion";
import InstagramEmbed from "./InstagramEmbedProps";
import { Hash, Heart } from "lucide-react";

const ReviewSection = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  return (
    <section className="py-16 px-4bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-10  right-10 w-4 h-4 bg-accent rounded-full opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-3 h-3 bg-primary rounded-full opacity-20"
        animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="max-w-screen mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-[britney] text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-primary leading-none mb-6">
            What Our
          </h2>
          <h3 className="font-[britney] text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-none mb-8">
            Customers Say
          </h3>
          <motion.div
            className="w-24 sm:w-28 md:w-32 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <p className="font-[satoshi] text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-semibold max-w-3xl mx-auto px-2 sm:px-0">
            Nearly a century of crafting premium biscuits has earned us
            countless smiles and loyal customers. Here's what they have to say
            about our traditional recipes and quality.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-muted rounded-full p-2 flex flex-wrap gap-2 justify-center max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-4 sm:px-6 py-2 rounded-full font-[clash] font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "reviews"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Customer Reviews
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`px-4 sm:px-6 py-2 rounded-full font-[clash] font-semibold text-sm sm:text-base transition-all duration-300 ${
                activeTab === "products"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              Behind the Scenes
            </button>
          </div>
        </motion.div>

        {/* Reviews Section */}
        {activeTab === "reviews" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
              <InstagramEmbed url="https://www.instagram.com/reel/DMsTDdcS-I7/?utm" />
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
              <InstagramEmbed url="https://www.instagram.com/reel/DMSxO0pSsj6/?utm_source=ig_web_copy_link&igsh=MTl5cXB3ZGFhdzlteQ==" />
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
              <InstagramEmbed url="https://www.instagram.com/reel/DGDcfU4SNsr/?utm_source=ig_web_copy_link&igsh=MXRwbnZ4b2l3cXdoeQ==" />
            </div>
          </motion.div>
        )}

        {/* Products Section */}
        {activeTab === "products" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
              <InstagramEmbed url="https://www.instagram.com/reel/DHgIrD4ytMc/?utm_source=ig_web_copy_link&igsh=MWphOWpieTVpcTF6bA==" />
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
              <InstagramEmbed url="https://www.instagram.com/reel/DLr9fCDypDg/?utm_source=ig_web_copy_link&igsh=MXFuMXNiczdrZThjNg==" />
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
              <InstagramEmbed url="https://www.instagram.com/reel/DLfHWEXSReK/?utm_source=ig_web_copy_link&igsh=MWMwMW12eGthMWMycQ==" />
            </div>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
              <InstagramEmbed url="https://www.instagram.com/reel/DHoDNGSSMid/?utm_source=ig_web_copy_link&igsh=Nmo1bzlsa2dpdWdl" />
            </div>
        
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16 px-4 sm:px-0"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-accent/20 rounded-3xl p-6 sm:p-8 max-w-3xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-6 right-6 text-4xl opacity-10 select-none">👑</div>
            <div className="absolute bottom-6 left-6 text-3xl opacity-10 select-none">🧁</div>

            <h3 className="font-[clash] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-6">
              Join The Royal Family
            </h3>

            <p className="font-[satoshi] text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto px-4 sm:px-0">
              Share your Raja Barley moments and become part of our sweet
              legacy. Tag us and watch your experience inspire others to taste
              the royal difference!
            </p>

            {/* Instagram Handle */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-4 mb-8 max-w-md mx-auto border border-accent/30">
              <p className="font-[satoshi] text-primary font-bold text-lg mb-2">📸 @rajabarleybiscuitcompany</p>
              <p className="font-[satoshi] text-muted-foreground text-sm mb-4">
                Follow us for daily fresh bakes, behind-the-scenes content, and customer features
              </p>
            </div>

            {/* Hashtag Grid */}
            <div className="mb-8 px-4 sm:px-0">
              <h4 className="font-[clash] text-primary font-semibold mb-4 flex justify-center items-center text-md sm:text-lg">
                Use These Hashtags <Hash className="ml-2 inline-block h-5 w-5" />
              </h4>
              <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto">
                {[
                  "#RajaBarleyBakery",
                  "#FreshlyBaked",
                  "#CakeFitForAQueen",
                  "#BakeryDelights",
                  "#SoftAndMoist",
                  "#DesiBakeryLove",
                  "#SweetRoyalty",
                  "#CrownTheMoment",
                  "#DailyFreshBakes",
                  "#TiramisuLove",
                  "#RajaBarleyTiramisu",
                  "#TiramisuDelight",
                  "#DessertRoyalty",
                  "#LayersOfHappiness",
                  "#CoffeeCreamCrave",
                  "#IndulgeWithRaja",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 hover:bg-primary/20 text-primary px-3 py-1 rounded-full text-xs sm:text-sm font-[satoshi] font-medium transition-all duration-300 cursor-pointer hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://www.instagram.com/rajabarleybiscuitcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-[clash] font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Follow on Instagram
              </a>
              <button className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-full font-[satoshi] font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2 justify-center">
                <Heart className="h-8" /> Share Your Story
              </button>
            </div>

            {/* Feature Promise */}
            <div className="mt-8 bg-accent/10 rounded-2xl p-4 max-w-md mx-auto">
              <p className="font-[satoshi] text-muted-foreground text-sm leading-relaxed">
                <span className="text-primary font-semibold">✨ Get Featured:</span> Best posts get featured on our page and stories! Share your Raja
                Barley experience and inspire others to taste the royal tradition.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
