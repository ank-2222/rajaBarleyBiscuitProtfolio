import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Clock, Heart, Sparkles, Users, Zap } from "lucide-react";

const OurSignature: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Simplified parallax effect - small upward subtle movement
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const features = [
    {
      icon: <Award className="w-7 h-7" />,
      title: "Century of Mastery",
      description:
        "98+ years of perfecting recipes, passed down through generations of master bakers.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Handpicked Ingredients",
      description:
        "Only the finest, premium ingredients sourced directly from trusted suppliers across India.",
    },
    {
      icon: <Heart className="w-7 h-7" />,
      title: "Made with Love",
      description:
        "Every biscuit, every sweet crafted with the same care we'd give to our own family.",
    },
    {
      icon: <Clock className="w-7 h-7" />,
      title: "Fresh Every Day",
      description:
        "Daily production ensures you get the crispiest biscuits and freshest treats, always.",
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Trusted by Generations",
      description:
        "Four generations of families have grown up with our taste. That trust is our legacy.",
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Innovation Meets Tradition",
      description:
        "Traditional recipes enhanced with modern techniques and uncompromising hygiene standards.",
    },
  ];

  return (
    <section className="relative pt-8  md:py-10 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden wavePattern">
      {/* Parallax Background Elements - reduced opacity and blur for minimalism */}
      <motion.div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]) }}
      >
        <div className="absolute top-12 left-12 w-28 h-28 bg-primary rounded-full blur-xl" />
        <div className="absolute top-1/3 right-16 w-36 h-36 bg-accent rounded-full blur-xl" />
        <div className="absolute bottom-16 left-1/4 w-32 h-32 bg-orange-300 rounded-full blur-xl" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 max-w-[1440px]">
        {/* Header */}
        <motion.div className="text-center mb-12 lg:mb-20" style={{ y: textY }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-[clash] text-xs sm:text-sm font-medium rounded-full mb-4">
              EST. 1926 • OUR SIGNATURE
            </span>
          </motion.div>

          <motion.h2
            className="font-[britney] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            The Barley
            <span className="block text-accent">Difference</span>
          </motion.h2>
<img src={"/images/divider.png"} className="h-30 aspect-video m-auto my-[-30px]  " />
          <motion.p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-[satoshi]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            What transforms simple ingredients into extraordinary experiences?
            It's not just our recipes—it's our relentless pursuit of perfection.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ y: cardY }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative  bg-white rounded-xl border border-primary/30 p-6 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                // delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-14 h-14 bg-accent text-secondary rounded-xl mb-5"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
              </motion.div>

              {/* Content */}
              <h3 className="font-[satoshi] text-lg font-bold text-primary mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed font-[satoshi] text-sm">
                {feature.description}
              </p>

              {/* Minimal hover effect underline */}
              <motion.div
                className="absolute bottom-0 left-6 right-6 h-[2px] bg-primary rounded-full scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center md:mt-8 max-w-3xl mx-auto px-4"
        //   initial={{ opacity: 0, y: 30 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //   transition={{ duration: 0.8, delay: 0.4 }}
        //   viewport={{ once: true }}
        >
          <p className="text-lg sm:text-xl text-primary font-[clash] font-medium text-center w-full leading-relaxed">
            At Raja Barley Biscuit Company, tradition and innovation blend
            seamlessly to bring you timeless flavors crafted with quality and
            care. Join us in celebrating a legacy that continues to inspire
            every bite.
          </p>
        </motion.div>
      </div>

      {/* Floating elements - subtle small vertical float, reduced size and opacity */}
      <motion.div
        className="absolute top-1/4 left-10 w-3 h-3 bg-accent rounded-full opacity-40 pointer-events-none"
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-16 w-2 h-2 bg-primary rounded-full opacity-30 pointer-events-none"
        animate={{
          y: [0, 10, 0],
          x: [0, 6, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
};

export default OurSignature;
