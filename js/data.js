/* ==========================================================================
   HUKEAZ PRODUCTS — PRODUCT & SERVICE DATA
   ==========================================================================

   PRODUCTS → each has its own Snipe payment link (buyLink)
   SERVICES → each also has its own Snipe payment link (buyLink)

   HOW TO SET PAYMENT LINKS:
   1. Create a payment page in Snipe for that product/service
   2. Copy the unique link
   3. Paste it in the "buyLink" field below
   ========================================================================== */

const productsCatalogue = [
    {
        sku: "HC-001",
        name: "Vitamin E Moisture Day Cream",
        category: "Hair Care",
        sub: "Shampoo",
        price: 90000,
        image: "IMG_2990.jpg",
        description: "Gentle daily moisturizing shampoo for soft, healthy hair.",
        buyLink: "https://snippe.me/pay/vitamin-e-moisture-day-cream"
    },

    {
        sku: "HC-002",
        name: "Dove",
        category: "Hair Care",
        sub: "Shampoo",
        price: 35000,
         
        image: "IMG_2991.jpg",
        description: "Clinically proven formula that targets dandruff and scalp irritation.",
        buyLink: "https://snippe.me/pay/dove"
    },
    {
        sku: "HC-005",
        name: "Kojic Acid",
        category: "Hair Care",
        sub: "Shampoo",
        price: 40000,
        image: "IMG_2992.jpg",
        description: "Strengthening keratin shampoo for smoother, frizz-free hair.",
        buyLink: "https://snippe.me/pay/kojic-acid"
    },
    {
        sku: "HC-010",
        name: "Jergens",
        category: "Hair Care",
        sub: "Oil",
        price: 60000,
        image: "IMG_2993.jpg",
        description: "Pure Moroccan argan oil for shine and deep nourishment.",
        buyLink: "https://snippe.me/pay/jergens"
    },
    {
        sku: "MU-200",
        name: "Soriko",
        category: "Makeup & Cosmetics",
        sub: "Eye Makeup",
        price: 40000,
        
        image: "IMG_2994.jpg",
        description: "Professional 24-shade palette with matte and shimmer finishes.",
        buyLink: "https://snippe.me/pay/soriko"
    },
    {
        sku: "MU-201",
        name: "Vaseline",
        category: "Makeup & Cosmetics",
        sub: "Eye Makeup",
        price: 35000,
        minStock: 5,
        stock: 3,
         
        image: "IMG_2995.jpg",
        description: "Dramatic volume and length in one stroke. Smudge-proof.",
        buyLink: "https://snippe.me/pay/vaseline"
    },
    {
        sku: "MU-208",
        name: "Pantene",
        category: "Makeup & Cosmetics",
        sub: "Lip Makeup",
        price: 45000,
        
       
        image: "IMG_2996.jpg",
        description: "Long-lasting matte finish in a classic red velvet shade.",
        buyLink: "https://snippe.me/pay/pantene"
    },
    {
        sku: "MU-215",
        name: "AHA Smoothing",
        category: "Makeup & Cosmetics",
        sub: "Face",
        price: 50000,
         
        image: "IMG_2999.jpg",
        description: "Full coverage matte foundation that lasts all day.",
        buyLink: "https://snippe.me/pay/aha"
    },
    {
        sku: "SK-301",
        name: "Loreal Paris",
        category: "Skin Care",
        sub: "Face Serum",
        price: 40000,
        minStock: 5,
        stock: 9,
        
        image: "IMG_2998.jpg",
        description: "Hyaluronic acid serum for intense hydration and plump skin.",
        buyLink: "https://snippe.me/pay/loreal-paris"
    },
    {
        sku: "SK-305",
        name: "Tea Tree",
        category: "Skin Care",
        sub: "Moisturizer",
        price: 30000,
        minStock: 5,
        stock: 7,
        vat: "18%",
        image: "IMG_3001.jpg",
        description: "Brightens dull skin and reduces dark spots with pure Vitamin C.",
        buyLink: "https://snippe.me/pay/tea-tree"
    },
    {
        sku: "BC-402",
        name: "LUX",
        category: "Body Care",
        sub: "Body Lotion",
        price: 30000,
        
        
        image: "IMG_3002.jpg",
        description: "Rich shea butter formula for deep moisture and soft skin.",
        buyLink: "https://snippe.me/pay/lux"
    },
    {
        sku: "BC-405",
        name: "Sense White Cocoon & Rose Oil Serum",
        category: "Body Care",
        sub: "Body Lotion",
        price: 45000,
        
        image: "IMG_3008.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/sense-white-cocoon"
    },

 {
        sku: "BC-405",
        name: "Dettol",
        category: "Body Care",
        sub: "Body Lotion",
        price: 30000,
        image: "IMG_3009.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/dettol"
    },

     {
        sku: "BC-405",
        name: "Red Heaven",
        category: "Body Care",
        sub: "Body Lotion",
        price: 40000,
        
        image: "IMG_3010.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/red-heaven"
    },

     {
        sku: "BC-405",
        name: "Nivae",
        category: "Body Care",
        sub: "Body Lotion",
        price: 35000,
       
        image: "IMG_3011.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/nivae"
    },

     {
        sku: "BC-405",
        name: "Rich Nourishing",
        category: "Body Care",
        sub: "Body Lotion",
        price: 35000,
       
        image: "IMG_3012.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/rich-nourishing"
    },

     {
        sku: "BC-405",
        name: "Men's Cream",
        category: "Body Care",
        sub: "Body Lotion",
        price: 35000,
        image: "IMG_3013.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/mens-cream"
    },

     {
        sku: "BC-405",
        name: "EXO",
        category: "Body Care",
        sub: "Body Lotion",
        price: 35000,
        image: "IMG_3014.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/exo"
    },

     {
        sku: "BC-405",
        name: "Marula Glow",
        category: "Body Care",
        sub: "Body Lotion",
        price: 35000,
 
        image: "IMG_3015.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/marula-glow"
    },

     {
        sku: "BC-405",
        name: "LUX Botanicals",
        category: "Body Care",
        sub: "Body Lotion",
        price: 25000,
        
        image: "IMG_3016.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/lux-botanicals"
    },

     {
        sku: "BC-405",
        name: "Nivae EvenTone",
        category: "Body Care",
        sub: "Body Lotion",
        price: 70000,
        
        image: "IMG_3017.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/nivae-eventone"
    },

     {
        sku: "BC-405",
        name: "Nivae Luminous Skin Glow",
        category: "Body Care",
        sub: "Body Lotion",
        price: 35000,
 
        image: "IMG_3018.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/nivae-luminous-skin-glow"
    },


 {
        sku: "BC-405",
        name: "Gluta C&E",
        category: "Body Care",
        sub: "Body Lotion",
        price: 40000,
 
        image: "IMG_3019.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/gluta-ce"
    },

     {
        sku: "BC-405",
        name: "ALPHA ARBUTIN",
        category: "Body Care",
        sub: "Body Lotion",
        price: 50000,
 
        image: "IMG_3020.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/alpha-arbutin"
    },


     {
        sku: "BC-405",
        name: "TEA TREE",
        category: "Body Care",
        sub: "Body Lotion",
        price: 30000,
 
        image: "IMG_3021.jpg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/tea-tree"
    },

    
     {
        sku: "BC-405",
        name: "Nivae Wash Gel",
        category: "Body Care",
        sub: "Body Lotion",
        price: 45000,
 
        image: "IMG_3022.jpeg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/nivae-wash-gel"
    },

    
     {
        sku: "BC-405",
        name: "Nivae Cream Wash",
        category: "Body Care",
        sub: "Body Lotion",
        price: 40000,
 
        image: "IMG_3023.jpeg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/nivae-cream-wash"
    },

    
     {
        sku: "BC-405",
        name: "Nivae",
        category: "Body Care",
        sub: "Body Lotion",
        price: 35000,
 
        image: "IMG_3024.jpeg",
        description: "Even-tone body lotion with natural brightening ingredients.",
        buyLink: "https://snippe.me/pay/nivae-luminous-skin-glow"
    }



];

/* ==========================================================================
   SERVICES — each has its own price + Snipe payment link
   ========================================================================== */

const servicesData = [
    {
        id: "s1",
        name: "Keratin Hair Smoothing",
        category: "hair",
        price: 120000,
      
        tag: "HAIR CARE",
        desc: "Deep protein reconstruction for silky, smooth, and manageable hair.",
        image: "long hair.jpg",
        buyLink: "https://snippe.me/pay/hukeaz"
    },
    {
        id: "s2",
        name: "Knotless Braids (Medium)",
        category: "hair",
        price: 65000,
        
        tag: "BRAIDING",
        desc: "Painless knotless braid styling with lightweight pre-stretched extension hair.",
        image: "knotless.jpg",
        buyLink: "https://snippe.me/pay/knotless-braids-medium"
    },
    {
        id: "s3",
        name: "Luxury Gel Manicure & Pedicure",
        category: "nails",
        price: 45000,
      
        tag: "NAILS",
        desc: "Full cuticle care, exfoliation, polish application, and relaxing massage.",
        image: "manicure.jpg",
        buyLink: "https://snippe.me/pay/luxury-gel-manicure-pedicure"
    },
    {
        id: "s4",
        name: "Deep Cleansing Hydrating Facial",
        category: "skin",
        price: 80000,
     
        tag: "SKINCARE",
        desc: "Pore extraction, hydration mask, and LED facial therapy for radiant skin.",
        image: "facial.jpg",
        buyLink: "https://YOUR-SNIPE-LINK-HERE/deep-cleansing-facial"
    },
    {
        id: "s5",
        name: "Bridal Glam Makeup Special",
        category: "makeup",
        price: 150000,
        
        tag: "MAKEUP",
        desc: "Long-lasting high-definition wedding makeup with premium false lashes.",
        image: "bride.jpg",
        buyLink: "https://snippe.me/pay/bridal-glam-makeup-special"
    },
    {
        id: "s6",
        name: "Russian Volume Lash Extensions",
        category: "makeup",
        price: 70000,
      
        tag: "LASHES",
        desc: "Full handcrafted volume lashes for a glamorous eye-enhancing look.",
        image: "lashes.jpg",
        buyLink: "https://snippe.me/pay/russian-volume-lash-extensions"
    },
    {
        id: "s7",
        name: "Silk Press & Blowout",
        category: "hair",
        price: 55000,
        
        tag: "HAIR CARE",
        desc: "Professional silk press for sleek, shiny, heat-protected natural hair.",
        image: "Silk Press.jpg",
        buyLink: "https://snippe.me/pay/silk-press-blowout"
    },
    {
        id: "s8",
        name: "Acrylic Full Set",
        category: "nails",
        price: 50000,
      
        tag: "NAILS",
        desc: "Durable acrylic extensions with custom design options and gel top coat.",
        image: "nails.jpg",
        buyLink: "https://snippe.me/pay/acrylic-full-set"
    }
];
