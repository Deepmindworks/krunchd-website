export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: { name: string; purpose: string }[];
  nutrition: { label: string; value: string }[];
}

export const productData: Record<string, Product> = {
  "almond-crunch": {
    slug: "almond-crunch",
    name: "Almond Crunch",
    tagline: "The OG. Roasted almonds, a touch of honey, zero nonsense.",
    description:
      "Our flagship product. California almonds, slow-roasted in small batches and lightly kissed with raw honey. Every handful delivers 22g of protein with nothing to hide. This is the snack that started the movement.",
    benefits: [
      "22g protein per serving",
      "No refined sugar — sweetened with raw honey",
      "Whole almonds, not fragments or meal",
      "Cold-pressed coconut oil — no seed oils",
      "Small-batch roasted for maximum nutrient retention",
    ],
    ingredients: [
      { name: "California Almonds", purpose: "Core protein & healthy fats" },
      { name: "Raw Honey", purpose: "Natural sweetness & energy" },
      {
        name: "Virgin Coconut Oil",
        purpose: "Healthy MCT fats, crunch factor",
      },
      {
        name: "Himalayan Pink Salt",
        purpose: "Electrolytes & flavor balance",
      },
    ],
    nutrition: [
      { label: "Calories", value: "210 kcal" },
      { label: "Protein", value: "22g" },
      { label: "Healthy Fats", value: "14g" },
      { label: "Fiber", value: "4g" },
      { label: "Sugar", value: "3g (natural)" },
    ],
  },
  "cocoa-power-bites": {
    slug: "cocoa-power-bites",
    name: "Cocoa Power Bites",
    tagline: "Dark cocoa meets real nuts. Indulgence without the regret.",
    description:
      "For when you want something rich without the guilt trip. Raw cacao blended with whole almonds and dates — a dense, satisfying bite that fuels you through the afternoon slump.",
    benefits: [
      "18g protein per serving",
      "Raw cacao — rich in antioxidants",
      "Dates for natural sweetness",
      "No artificial flavoring",
      "Energy-dense, portion-controlled",
    ],
    ingredients: [
      { name: "Whole Almonds", purpose: "Protein base & texture" },
      { name: "Organic Dates", purpose: "Natural binding & sweetness" },
      { name: "Raw Cacao (72%)", purpose: "Antioxidants & rich flavor" },
      {
        name: "Virgin Coconut Oil",
        purpose: "Smooth texture & healthy fats",
      },
      { name: "Sea Salt", purpose: "Flavor enhancer" },
    ],
    nutrition: [
      { label: "Calories", value: "190 kcal" },
      { label: "Protein", value: "18g" },
      { label: "Healthy Fats", value: "12g" },
      { label: "Fiber", value: "5g" },
      { label: "Sugar", value: "6g (from dates)" },
    ],
  },
  "seeds-trail-mix": {
    slug: "seeds-trail-mix",
    name: "Seeds & Trail Mix",
    tagline:
      "Pumpkin, sunflower, chia, flax. A powerhouse in every handful.",
    description:
      "Six seeds, perfectly portioned and lightly roasted. This mix is engineered for omega-3s, zinc, magnesium, and clean energy. A daily essential for anyone serious about nutrition.",
    benefits: [
      "15g protein per serving",
      "Rich in Omega-3 fatty acids",
      "6-seed blend for complete nutrition",
      "Lightly roasted, not fried",
      "No added sugar whatsoever",
    ],
    ingredients: [
      { name: "Pumpkin Seeds", purpose: "Zinc & magnesium" },
      { name: "Sunflower Seeds", purpose: "Vitamin E & selenium" },
      { name: "Chia Seeds", purpose: "Omega-3 & fiber" },
      { name: "Flax Seeds", purpose: "Lignans & omega-3" },
      { name: "Almonds", purpose: "Protein & calcium" },
      { name: "Raw Honey", purpose: "Light binding & natural sweetness" },
    ],
    nutrition: [
      { label: "Calories", value: "180 kcal" },
      { label: "Protein", value: "15g" },
      { label: "Healthy Fats", value: "11g" },
      { label: "Fiber", value: "6g" },
      { label: "Sugar", value: "2g (natural)" },
    ],
  },
  "peanut-power-bar": {
    slug: "peanut-power-bar",
    name: "Peanut Power Bar",
    tagline: "Dense. Crunchy. Built for those who move.",
    description:
      "Our highest-protein offering. Whole roasted peanuts bound with oats and honey, delivering 24g of plant protein. Built for athletes, founders, and anyone who burns fuel fast.",
    benefits: [
      "24g protein — highest in our lineup",
      "Whole peanuts, not peanut paste",
      "Oat-based for sustained energy",
      "No protein isolates or fillers",
      "Satisfying crunch in every bite",
    ],
    ingredients: [
      { name: "Whole Peanuts", purpose: "Primary protein source" },
      { name: "Rolled Oats", purpose: "Complex carbs & fiber" },
      { name: "Raw Honey", purpose: "Natural binding & energy" },
      {
        name: "Organic Dates",
        purpose: "Additional sweetness & texture",
      },
      { name: "Virgin Coconut Oil", purpose: "Healthy fats & crunch" },
    ],
    nutrition: [
      { label: "Calories", value: "240 kcal" },
      { label: "Protein", value: "24g" },
      { label: "Healthy Fats", value: "13g" },
      { label: "Fiber", value: "5g" },
      { label: "Sugar", value: "5g (natural)" },
    ],
  },
  "classic-granola": {
    slug: "classic-granola",
    name: "Classic Granola",
    tagline:
      "Breakfast or snack. Rolled oats, nuts, seeds — done right.",
    description:
      "Granola the way it should be. Rolled oats, real almonds, pumpkin seeds, and coconut — baked slow with just a touch of honey. No added sugar, no canola oil, no clusters of disappointment.",
    benefits: [
      "12g protein per serving",
      "High fiber for sustained energy",
      "No added sugar — honey only",
      "Versatile: bowl, yogurt, or straight from the bag",
      "Baked, not fried",
    ],
    ingredients: [
      { name: "Rolled Oats", purpose: "Complex carbs & beta-glucan" },
      { name: "Almonds", purpose: "Protein & crunch" },
      { name: "Pumpkin Seeds", purpose: "Minerals & texture" },
      { name: "Coconut Flakes", purpose: "Healthy fats & flavor" },
      { name: "Raw Honey", purpose: "Natural sweetness & binding" },
    ],
    nutrition: [
      { label: "Calories", value: "170 kcal" },
      { label: "Protein", value: "12g" },
      { label: "Healthy Fats", value: "8g" },
      { label: "Fiber", value: "7g" },
      { label: "Sugar", value: "3g (natural)" },
    ],
  },
  "spiced-nut-mix": {
    slug: "spiced-nut-mix",
    name: "Spiced Nut Mix",
    tagline: "Indian spices, premium nuts. Bold flavor, clean profile.",
    description:
      "A uniquely Indian take on the premium nut mix. Cashews, almonds, and peanuts roasted with turmeric and black pepper for bioavailability. Bold, warm, and unapologetically flavorful.",
    benefits: [
      "20g protein per serving",
      "Turmeric + black pepper for curcumin absorption",
      "6-nut blend for diverse nutrition",
      "Roasted with Himalayan pink salt",
      "No MSG, no artificial flavoring",
    ],
    ingredients: [
      { name: "Cashews", purpose: "Copper & creamy texture" },
      { name: "Almonds", purpose: "Protein & vitamin E" },
      { name: "Peanuts", purpose: "Protein density & crunch" },
      { name: "Turmeric", purpose: "Anti-inflammatory curcumin" },
      {
        name: "Black Pepper",
        purpose: "Curcumin bioavailability booster",
      },
      {
        name: "Himalayan Pink Salt",
        purpose: "Electrolytes & flavor",
      },
    ],
    nutrition: [
      { label: "Calories", value: "200 kcal" },
      { label: "Protein", value: "20g" },
      { label: "Healthy Fats", value: "14g" },
      { label: "Fiber", value: "3g" },
      { label: "Sugar", value: "1g (natural)" },
    ],
  },
};

export function getProduct(slug: string): Product | undefined {
  return productData[slug];
}

export function getAllSlugs(): string[] {
  return Object.keys(productData);
}
