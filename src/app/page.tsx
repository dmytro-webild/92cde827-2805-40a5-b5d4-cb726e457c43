"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import { Award, CheckCircle, Shield, Zap } from "lucide-react";

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
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Legacy",
          id: "#legacy",
        },
        {
          name: "Visit",
          id: "#contact",
        },
      ]}
      brandName="Bates & Thigpen"
      button={{
        text: "Get Fitted Today",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars",
      }}
      title="Tailoring Done Right — The First Time."
      description="Since the 1920s, Bates & Thigpen has delivered expert fittings, quality garments, and dependable service."
      tag="Established 1920"
      buttons={[
        {
          text: "Book a Fitting",
          href: "#contact",
        },
        {
          text: "Visit the Store",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-suit-choosing-near-mannequin-boutique_7502-4398.jpg?_wi=1",
          imageAlt: "tailor fitting man suit luxury interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fabric-textured-background_53876-17999.jpg?_wi=1",
          imageAlt: "bespoke tailoring fabric textures",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-image-man-holding-smartphone_171337-19091.jpg",
          imageAlt: "Vertical image of man holding smartphone",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/craftsman-tailoring-studio_482257-84190.jpg",
          imageAlt: "Craftsman in tailoring studio",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegantly-dressed-bearded-male-with-tattoos-hands-neck-chooses-new-suit-menswear-store_613910-19733.jpg",
          imageAlt: "Elegantly dressed bearded male with tattoos on hands and neck chooses new suit in a menswear store.",
        },
      ]}
      rating={5}
      ratingText="Generations of trust"
    />
  </div>

  <div id="trust" data-section="trust">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="The Bates & Thigpen Promise"
      tag="Why Generations Trust Us"
      metrics={[
        {
          id: "m1",
          value: "100+",
          description: "Years of heritage",
        },
        {
          id: "m2",
          value: "30m",
          description: "Expert fit time",
        },
        {
          id: "m3",
          value: "1-on-1",
          description: "Personalized service",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Guided, Measured, and Served.",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/fabric-texture-background_1385-1236.jpg",
          alt: "bespoke tailoring fabric textures",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Custom Fitting",
          description: "Precision measurements for an impeccable look.",
          icon: CheckCircle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/fabric-textured-background_53876-42285.jpg",
              imageAlt: "bespoke tailoring fabric textures",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/fashion-designer-taking-measurement-male-customer-s-pant-shop_23-2148180365.jpg",
              imageAlt: "tailor fitting man suit luxury interior",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-suit-choosing-near-mannequin-boutique_7502-4398.jpg?_wi=2",
          imageAlt: "bespoke tailoring fabric textures",
        },
        {
          title: "Suits & Dress Wear",
          description: "Timeless designs for every professional occasion.",
          icon: Award,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-businessman-model-dressed-elegant-checkered-suit-posing-near-brick-wall-street-background_158538-2651.jpg",
              imageAlt: "classic men suits hanging rack",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-gray-checkered-suit_158538-4211.jpg",
              imageAlt: "classic men suits hanging rack",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fabric-textured-background_53876-17999.jpg?_wi=2",
          imageAlt: "bespoke tailoring fabric textures",
        },
        {
          title: "Shoes & Accessories",
          description: "Premium leather shoes, ties, and belts.",
          icon: Shield,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-man-sitting-antique-arm-chair-looking-magazine-clothes-shop_23-2148175638.jpg?_wi=1",
              imageAlt: "luxury leather men shoes collection",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/male-brown-footwear-close-up_1303-10302.jpg",
              imageAlt: "luxury leather men shoes collection",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-retired-man_23-2147562098.jpg?_wi=1",
          imageAlt: "bespoke tailoring fabric textures",
        },
        {
          title: "Work Uniforms",
          description: "High-quality, durable garments for your team.",
          icon: Zap,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/elegantly-dressed-bearded-shop-assistant-with-standing-near-mannequin-menswear-store_613910-19737.jpg",
              imageAlt: "classic men suits hanging rack",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-choosing-clothes-shop_1303-19713.jpg",
              imageAlt: "classic men suits hanging rack",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-successful-businessman-standing-restaurant-with-crossed-arm_23-2147955259.jpg?_wi=1",
          imageAlt: "bespoke tailoring fabric textures",
        },
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
        {
          title: "Real Support",
          description: "A live person answers every phone call.",
          icon: CheckCircle,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/expert-suitmaker-checking-custom-suit_482257-78349.jpg",
              imageAlt: "tailor fitting man suit luxury interior",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hands-creating-clothes-close-up_23-2149007421.jpg",
              imageAlt: "tailor fitting man suit luxury interior",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/man-suit-choosing-near-mannequin-boutique_7502-4398.jpg?_wi=3",
          imageAlt: "tailor fitting man suit luxury interior",
        },
        {
          title: "Immediate Assistance",
          description: "No appointments needed, walk-ins welcome.",
          icon: Zap,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-making-origami-with-japanese-paper_23-2149048365.jpg",
              imageAlt: "bespoke tailoring fabric textures",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/line-three-different-zips_23-2148212680.jpg",
              imageAlt: "bespoke tailoring fabric textures",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/fabric-textured-background_53876-17999.jpg?_wi=3",
          imageAlt: "tailor fitting man suit luxury interior",
        },
        {
          title: "Expert Guidance",
          description: "Honest advice with zero upselling tactics.",
          icon: Award,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-sexy-handsome-fashion-male-model-man-dressed-elegant-suit-black-studio-lights-background_158538-9677.jpg",
              imageAlt: "classic men suits hanging rack",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-groom-s-suit-with-flowers-red-patterned-tie-with-trees-background_181624-32725.jpg",
              imageAlt: "classic men suits hanging rack",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-man-sitting-antique-arm-chair-looking-magazine-clothes-shop_23-2148175638.jpg?_wi=2",
          imageAlt: "tailor fitting man suit luxury interior",
        },
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
        {
          id: "p1",
          name: "Bespoke Suit",
          price: "$1,200",
          variant: "Premium Wool",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-male-tailor-cutting-piece-cloth-table-his-shop_23-2148180318.jpg",
        },
        {
          id: "p2",
          name: "Classic Dress Shirt",
          price: "$150",
          variant: "Cotton Twill",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-designer-s-studio-with-essential-elements_23-2150414739.jpg",
        },
        {
          id: "p3",
          name: "Leather Oxfords",
          price: "$300",
          variant: "Hand-stitched",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-plus-size-male-social-media-influencer_23-2151396788.jpg",
        },
        {
          id: "p4",
          name: "Silk Ties",
          price: "$85",
          variant: "Various Colors",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-casual-leather-men-shoes_1203-7707.jpg",
        },
        {
          id: "p5",
          name: "Leather Belt",
          price: "$95",
          variant: "Top Grain",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-five-trendy-red-white-blue-burgundy-women-s-bags-laying-white-wall_7502-5650.jpg",
        },
        {
          id: "p6",
          name: "Work Trousers",
          price: "$120",
          variant: "Heavy Duty",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-gray-checkered-suit_158538-4247.jpg",
        },
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
      testimonials={[
        {
          id: "t1",
          name: "John Doe",
          role: "Corporate Lead",
          testimonial: "Old school service you don’t get anymore. Simply fantastic.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiling-retired-man_23-2147562098.jpg?_wi=2",
        },
        {
          id: "t2",
          name: "Michael Smith",
          role: "Architect",
          testimonial: "In and out in under 30 minutes every single time.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-successful-businessman-standing-restaurant-with-crossed-arm_23-2147955259.jpg?_wi=2",
        },
        {
          id: "t3",
          name: "Robert Brown",
          role: "Financial Advisor",
          testimonial: "The attention to detail here is truly unmatched.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-mature-businessman-showing-thumb-up_1262-3024.jpg",
        },
        {
          id: "t4",
          name: "David Wilson",
          role: "Lawyer",
          testimonial: "Friendly, helpful staff that really cares.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-going-out-shopping-various-consumer-goods_23-2151669758.jpg",
        },
        {
          id: "t5",
          name: "James Taylor",
          role: "Entrepreneur",
          testimonial: "Heritage quality and service I rely on every year.",
          imageSrc: "http://img.b2bpic.net/free-photo/senior-business-man-showing-emotions_1303-23584.jpg",
        },
      ]}
      title="Trusted by Generations"
    />
  </div>

  <div id="legacy" data-section="legacy">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "History",
          content: "Family-owned and operated since 1920 in our original storefront.",
        },
        {
          id: "f2",
          title: "Process",
          content: "We prioritize efficient, expert fitting for busy professionals.",
        },
        {
          id: "f3",
          title: "Service",
          content: "Every customer is treated like a member of our extended family.",
        },
      ]}
      title="Legacy of Consistency"
      description="Answers about our history and commitment since the 1920s."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to Get Fitted? Visit our store today or give us a call."
      buttons={[
        {
          text: "Visit Store",
          href: "#",
        },
        {
          text: "Call Now",
          href: "tel:5555555555",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Store",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Visit Us",
              href: "#",
            },
            {
              label: "Call Us",
              href: "tel:5555555555",
            },
          ],
        },
      ]}
      bottomLeftText="© 1920 - 2024 Bates & Thigpen."
      bottomRightText="Built on heritage."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
