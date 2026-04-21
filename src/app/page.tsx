"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, CheckCircle, Zap } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        { name: "About", id: "#about" },
        { name: "Services", id: "#services" },
        { name: "Legacy", id: "#legacy" },
        { name: "Visit", id: "#contact" },
      ]}
      brandName="Bates & Thigpen"
      button={{ text: "Call Us Now", href: "tel:5555555555" }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "gradient-bars" }}
      title="Tailoring Done Right — The First Time."
      description="Since the 1920s, Bates & Thigpen has delivered expert fittings, quality garments, and dependable service."
      tag="Established 1920"
      buttons={[{ text: "Visit Our Store", href: "#contact" }]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/man-suit-choosing-near-mannequin-boutique_7502-4398.jpg", imageAlt: "tailor fitting man suit luxury interior" },
        { imageSrc: "http://img.b2bpic.net/free-photo/fabric-textured-background_53876-17999.jpg", imageAlt: "bespoke tailoring fabric textures" },
      ]}
      rating={5}
      ratingText="Generations of trust"
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardFourteen
      title="The Bates & Thigpen Promise"
      tag="Why Generations Trust Us"
      useInvertedBackground={false}
      metrics={[
        { id: "m1", value: "100+", description: "Years of heritage" },
        { id: "m2", value: "30m", description: "Expert fit time" },
        { id: "m3", value: "1-on-1", description: "Personalized service" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        { type: "text", content: "Guided, Measured, and Served." },
        { type: "image", src: "http://img.b2bpic.net/free-photo/fabric-texture-background_1385-1236.jpg", alt: "bespoke tailoring fabric textures" },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Custom Fitting", description: "Precision measurements for an impeccable look.", icon: CheckCircle, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/fabric-textured-background_53876-42285.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/fashion-designer-taking-measurement-male-customer-s-pant-shop_23-2148180365.jpg" }] },
        { title: "Suits & Dress Wear", description: "Timeless designs for every professional occasion.", icon: Award, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-businessman-model-dressed-elegant-checkered-suit-posing-near-brick-wall-street-background_158538-2651.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-gray-checkered-suit_158538-4211.jpg" }] }
      ]}
      title="Our Menswear Services"
      description="Comprehensive care for the modern gentleman, from bespoke fittings to durable work uniforms."
    />
  </div>

  <div id="differentiation" data-section="differentiation">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Real Support", description: "A live person answers every phone call.", icon: CheckCircle, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/expert-suitmaker-checking-custom-suit_482257-78349.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/hands-creating-clothes-close-up_23-2149007421.jpg" }] },
        { title: "Immediate Assistance", description: "No appointments needed, walk-ins welcome.", icon: Zap, mediaItems: [{ imageSrc: "http://img.b2bpic.net/free-photo/woman-making-origami-with-japanese-paper_23-2149048365.jpg" }, { imageSrc: "http://img.b2bpic.net/free-photo/line-three-different-zips_23-2148212680.jpg" }] }
      ]}
      title="We don’t sell clothes. We solve problems."
      description="Experience personal, human-led service that puts your needs first, without guesswork."
    />
  </div>

  <div id="experience" data-section="experience">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "p1", name: "Bespoke Suit", price: "$1,200", variant: "Premium Wool", imageSrc: "http://img.b2bpic.net/free-photo/senior-male-tailor-cutting-piece-cloth-table-his-shop_23-2148180318.jpg" },
        { id: "p2", name: "Classic Dress Shirt", price: "$150", variant: "Cotton Twill", imageSrc: "http://img.b2bpic.net/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414739.jpg" },
        { id: "p3", name: "Leather Oxfords", price: "$300", variant: "Hand-stitched", imageSrc: "http://img.b2bpic.net/free-photo/portrait-plus-size-male-social-media-influencer_23-2151396788.jpg" },
      ]}
      title="Walk In. Walk Out Ready."
      description="Precision fitting in under 30 minutes. Reliability you can depend on."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      description="Our clients tell our story better than we ever could."
      testimonials={[
        { id: "t1", name: "John Doe", role: "Corporate Lead", testimonial: "Old school service you don’t get anymore. Simply fantastic.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-retired-man_23-2147562098.jpg" },
        { id: "t2", name: "Michael Smith", role: "Architect", testimonial: "In and out in under 30 minutes every single time.", imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-successful-businessman-standing-restaurant-with-crossed-arm_23-2147955259.jpg" },
      ]}
      title="Trusted by Generations"
    />
  </div>

  <div id="legacy" data-section="legacy">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        { id: "f1", title: "History", content: "Family-owned and operated since 1920 in our original storefront." },
        { id: "f2", title: "Process", content: "We prioritize efficient, expert fitting for busy professionals." },
      ]}
      title="Legacy of Consistency"
      description="Answers about our history and commitment since the 1920s."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      tag="Contact Us"
      title="Visit or Call Anytime"
      description="We believe in the power of a personal conversation. Feel free to visit our storefront or call us during business hours."
      buttons={[
        { text: "Call Us: 555-555-5555", href: "tel:5555555555" },
        { text: "Directions", href: "#" }
      ]}
      useInvertedBackground={false}
      background={{ variant: "plain" }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Bates & Thigpen"
      leftLink={{ text: "© 1920-2024", href: "#" }}
      rightLink={{ text: "Privacy Policy", href: "#" }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
