import BadgeList from "@/components/BadgeList";

export type ProductStatus =
  | "In Stock"
  | "Made to Order"
  | "Custom Order"
  | "Out of Stock"
  | "Coming Soon";

export type Product = {
  id: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  imageCount?: number;
  images?: string[];
  price: number;
  pricePrefix?: string;
  currency?: string;

  // Optional extras
  badges?: string[];
  status?: ProductStatus;
  whatsappMessage?: string;

  // New automatic properties
  material?: "PLA" | "PETG" | "TPU" | "ABS" | "ASA" | "PA-Nylon";
  multiColour?: boolean;
  variousSizes?: boolean;
};

const DEFAULT_PRODUCT = {
  pricePrefix: "From",
  currency: "R",
  badges: [] as string[],
  status: "Made to Order" as ProductStatus,
};

const products: Product[] = [
  
    {
  id: "dragon",
  category: "popular",
  title: "Dragon",
  description:
    "Flexible articulated dragon printed in PLA.",
  fullDescription:
    "The Dragon is one of our most popular articulated models. Printed in PLA with fully movable joints, it makes an excellent gift, display piece or collector's item. Available in multiple colours and sizes, each dragon is printed to order with great attention to detail.",
  imageCount: 1,
  price: 100,
  material: "PLA",
  multiColour: true,
  variousSizes: true,

},

{
  id: "deultooth",
  category: "home",
  title: "Duel Toothbrush Holder",
  description:
    "2 Removable toothbrush Holder printed in PLA.",
  fullDescription:
    "Keep your bathroom neat while adding a touch of coastal charm with our 3D Printed Double Toothbrush Holder. Designed with a stylish vertical ribbed finish and finished with elegant white anchor emblems, this holder is both practical and decorative. You can replace the white anchors to suite your style. The dual-compartment design comfortably holds multiple toothbrushes, toothpaste, or other bathroom essentials while the integrated base keeps everything stable and organized on your bathroom counter. Each holder is precision 3D printed using high-quality PLA filament, ensuring a durable, lightweight, and beautifully finished product. Available in a variety of colors to match your bathroom décor.",
  imageCount: 3,
  price: 110,
  material: "PLA",
  multiColour: true,
  variousSizes: false,

},

 {
  id: "earbud",
  category: "home",
  title: "Ribbed Ear bud Holder",
  description:
    "Ribbed Ear Bud Holder",
  fullDescription:
    "Keep your cotton buds neat, clean, and easily accessible with this stylish 3D-printed storage container. Designed with a modern layered appearance and a convenient front access opening, it allows you to grab a cotton bud without removing the lid, while the removable top makes refilling quick and effortless.",
  imageCount: 3,
  price: 90,
  material: "PLA",
  multiColour: true,

},

 {
  id: "ford-switch",
  category: "automotive",
  title: "2015 - 2019 Ford Ranger Switch Pannel",
  description:
    "Accessory switch Panel Ford Ranger T7 & T8 printed in PETG.",
  fullDescription:
    "Upgrade your Ford Ranger's interior with this custom 3D-printed accessory switch panel, designed specifically for 2015–2019 Ford Ranger models. This panel is made to accommodate four standard Toyota-style 20x20mm switches, providing a clean, factory-style solution for controlling accessories such as spotlights, light bars, air compressors, or other aftermarket equipment. Designed for a precise fit, this durable panel installs neatly into the factory location, giving your vehicle a professional OEM-inspired appearance while eliminating the need for untidy switch installations. ",
  imageCount: 3,
  price: 400,
  material: "PETG",
  multiColour: true,

},


 {
  id: "ford-intercooler",
  category: "automotive",
  title: "2022 - 2026 Ford Ranger Intercooler Grill",
  description:
    "Intercooler Grill for the Next Gen Ford Rangers printed in PETG.",
  fullDescription:
    "Cover the big opening that the New Rangers have in front of the Intercooler with this Grill Printed in PETG, it does not just look good but it also help protect the Intercooler from unwanted damage. It simply just clips into place with 8 clips that will hold it securely.",
  imageCount: 3,
  price: 750,
  pricePrefix: "Coming Soon",
  material: "PETG",
  multiColour: true,
  status: "Coming Soon"
},

 {
  id: "ford-trayclip",
  category: "automotive",
  title: "Ford Ranger - Hook Cover",
  description:
   "Ford Ranger T6 - T8 Tray Hook Cover printed in PETG.",
  fullDescription:
    "Give your Ford Ranger a cleaner, more finished look with these custom 3D-printed Tray Hook Covers, designed to fit Ford Ranger T6, T7 and T8 models. Designed for a secure fit and easy installation, they simply clip into place with no modifications required. ",
  imageCount: 4,
  price: 15,
  material: "PETG",
  multiColour: true,
  status: "In Stock",

},

 {
  id: "hang",
  category: "popular",
  title: "Hang in There Fridge Magnet",
  description:
    "Adorable Fridge Magnet printed in PLA.",
  fullDescription:
    "Add a touch of humour to your kitchen with this adorable Hanging Cat Fridge Magnet! Designed to look like a mischievous cat hanging from your notes, photos, or shopping lists, this fun magnet is sure to grab attention and bring a smile to everyone who sees it. ",
  imageCount: 2,
  price: 30,
  material: "PLA",
  multiColour: true,

},

 {
  id: "planter",
  category: "popular",
  title: "Succulent Planter",
  description:
    "Small Planter, Mainly used for Succulents, printed in PLA.",
  fullDescription:
    "Bring a modern touch to your home or office with this stylish 3D-printed Ribbed Planter Pot. Featuring a contemporary ribbed design and a matching drainage tray, this planter is perfect for succulents, cacti, herbs, and other small indoor plants.",
  imageCount: 8,
  price: 50,
  material: "PLA",
  multiColour: true,
  variousSizes: true,

},

 {
  id: "ruler",
  category: "popular",
  title: "Custom Name Ruler",
  description:
    "Custom Named Ruler printed in PLA.",
  fullDescription:
    "Make school, work, or creative projects more personal with a custom 30cm Name Ruler. Each ruler is 3D printed and personalised with the name of your choice, creating a practical item that's uniquely yours. Perfect for students, teachers, artists, and as a thoughtful personalised gift.",
  imageCount: 4,
  price: 20,
  material: "PLA",
  multiColour: true,
  status: "Custom Order",

},

  {
  id: "tissue",
  category: "home",
  title: "Tissue Box",
  description:
    "Tissue Box printed in PLA.",
  fullDescription:
    "Add a stylish touch to your home with a Custom 3D-Printed Tissue Box Holder. Designed to fit standard rectangular tissue boxes, this holder transforms an everyday essential into an elegant décor piece. Whether you prefer a modern, minimalist look or a fun personalised design, each holder is carefully 3D printed to complement your space. Available in a range of colours and custom designs, these tissue box holders are perfect for living rooms, bedrooms, bathrooms, offices, or as a unique personalised gift.",
  imageCount: 3,
  price: 270,
  material: "PLA",
  multiColour: true,
  
},

 {
  id: "tooth",
  category: "home",
  title: "Desktop & Bathroom Organizer",
  description:
    "Ribbed Bathroom/Desktop Accessory Organizer printed in PLA.",
  fullDescription:
    "Keep your bathroom neat and organised with this stylish 3D-Printed Bathroom Organizer Cup. Featuring a modern ribbed design, it's perfect for storing everyday essentials while adding a contemporary touch to your bathroom décor. Whether you use it for toothbrushes, toothpaste, combs, razors, makeup brushes, tweezers, or other daily accessories, this versatile organiser helps keep everything within easy reach and your countertop clutter-free. ",
  imageCount: 3,
  price: 60,
  material: "PLA",
  multiColour: true,
 
 },

 {
  id: "key",
  category: "popular",
  title: "Custom Key Chain",
  description:
    "Fully Custom Keychain printed in PLA.",
  fullDescription:
    "Show off your personality with a Custom 3D Printed Keychain, designed just the way you want it. Whether you're looking for a personalised name keychain, your favourite logo, a fun character, business branding, or a completely unique design, we can create a keychain that suits your style.",
  imageCount: 8,
  price: 20,
  material: "PLA",
  multiColour: true,
  variousSizes: true,
  status: "Custom Order",

 },

{
  id: "ice",
  category: "popular",
  title: "ICE Tag - In Case of Emergency Tag",
  description:
    "NFC enabled ICE Tag printed in PLA.",
  fullDescription:
    "Be prepared for the unexpected with a Custom ICE (In Case of Emergency) Medical Keychain. Designed to provide first responders, paramedics, and medical professionals with quick access to your important medical information, this keychain features a scannable NFC tag that can store essential details when you need them most. In the event that you're unconscious, unable to communicate, or can't remember important medical information, emergency personnel can simply scan the NFC tag with a compatible smartphone to access the information you've chosen to share, such as emergency contacts, medical conditions, allergies, medications, or other critical details. Compact, durable, and always within reach, it's an ideal safety accessory for everyday carry.",
  imageCount: 1,
  price: 25,
  pricePrefix: "",
  badges: [
    "NFC",
  ],
  material: "PLA",
  multiColour: true,
  status: "In Stock"

 },

 {
  id: "microgreen",
  category: "popular",
  title: "Microgreen Tray Clip",
  description:
    "Microgreen Tray Clip printed in PLA.",
  fullDescription:
    "Make handling your microgreen trays easier with this 3D-Printed Microgreen Tray Lift & Label Clip. Designed to clip securely onto the edge of your growing tray, it provides a convenient grip for lifting, moving, and repositioning trays with ease. The built-in label tab also gives you a simple way to identify your crops. Add the variety name, sowing date, or harvest date using a sticker or marker, making it easy to keep track of multiple trays during the growing process. Perfect for both home growers and commercial microgreen farms, this practical accessory helps improve organisation and simplifies daily tray handling. Comes in a Small and Large size",
  imageCount: 2,
  price: 8,
  material: "PLA",
  multiColour: true,
  variousSizes: true,
  status: "In Stock"

},

 {
  id: "paw",
  category: "automotive",
  title: "Paw Cover",
  description:
    "Flip top style cover for GD6/Ranger Centre console switches printed in PETG.",
  fullDescription:
    "Protect your vehicle's accessory switches with the Paw Switch Cover – a clever 3D-printed cover designed to help prevent accidental button presses. Whether it's curious little hands, playful paws, or items shifting around in your vehicle, this cover helps keep your switches protected while still allowing quick and easy access when needed. Designed to fit Toyota GD-6 and Ford Ranger, the hinged cover flips open effortlessly and closes securely to help prevent unwanted activation of things like Power modes in the Toyota or your Diff locker in the Ford Ranger. Featuring a fun paw print design, it's the perfect addition for pet lovers and off-road enthusiasts alike. We also do sell this as a Plain cover for a more OEM feel. The Paw Covers are secured in place with double sided tape so it does not damage your interior",
  imageCount: 2,
  price: 50,
  material: "PETG",
  multiColour: true,
  variousSizes: true,

 },

 {
  id: "cad",
  category: "cad",
  title: "Custome Product Design",
  description:
    "Need something different? Let me design something for you.",
  fullDescription:
    "If you need a Custom designed product, speak to me and let us bring your idee to live one layer at a time. You can have a look at my Gallery / Instagram or Facebook for some of my custome work already done for other customers.",
  imageCount: 8,
  price: 50,
  badges: [ "Simple Designs - Less than 30 min Free" , "Standard Designs - From R100", "Complex Designs - From R250+"],
  status: "Custom Order",
  whatsappMessage:
    "Hi Jaco, I am looking for a Custom designed product.",
 },


  {
  id: "repaire",
  category: "repairs",
  title: "Printer Repairs",
  description:
    "Diagnose and repaire service for your 3D Printer.",
  fullDescription:
    "I begin by performing a thorough diagnostic on your 3D printer to identify the cause of the problem. Once the issue has been identified, I will provide you with a detailed quotation for any parts that may need to be replaced. No parts will be ordered or installed without your approval. After approval, the required parts will be ordered and fitted. Once the repairs are complete, I will fully test your printer to ensure it is operating correctly. If any additional faults are discovered during testing, further diagnostics will be carried out, and I will discuss the next steps with you before proceeding. The basic diagnostic fee is R250, which includes a complete fault diagnosis, a basic printer cleaning, general maintenance, and a full inspection of your printer. If replacement parts are required, a quotation will be provided before any work is carried out. Please note that the R250 diagnostic fee does not include the cost of replacement parts or additional repairs. Any extra work will only be completed after you have approved the quotation.",
  imageCount: 1,
  price: 250,
  badges: [
   ],
   status: "Custom Order",
  whatsappMessage:
    "Hi Jaco, My 3D Priner is giving me some issues, it is a (What printer Make and Model) and i am having issues with (what is wrong? does it not switch on, feed Filament, give out an error, prints not sticking to the bed? please discribe the issues here).",

  },

  {
  id: "cargo",
  category: "automotive",
  title: "Cargo Seatblet Clip",
  description:
    "Cargo Seatbeld Clip to be used only for Cargo",
  fullDescription:
    "This device is to be only used for Cargo, Not to be used to bypass safety alarm for your Car/Bakkie",
  imageCount: 1,
  price: 8,
  material: "PETG",
  multiColour: true,
  
  }

];

export type ProductWithDefaults = Product & {
  images: string[];
  badges: string[];
  status: ProductStatus;
  whatsappMessage: string;
  pricePrefix: string;
  currency: string;
};

const productsWithDefaults: ProductWithDefaults[] = products.map((product) => ({
  ...DEFAULT_PRODUCT,
  ...product,

  images:
    product.images ??
    Array.from(
      { length: product.imageCount ?? 1 },
      (_, i) => `/images/products/${product.id}${i + 1}.jpg`
    ),

  whatsappMessage:
    product.whatsappMessage ??
    `Hi Jaco, I'm interested in the ${product.title}.`,
}));

export default productsWithDefaults;

