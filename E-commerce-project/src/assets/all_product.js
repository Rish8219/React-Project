import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p1_img,
    size:["S","M","L","XL","XXL"],
    new_price: 50.0,
    old_price: 80.5,
    available_stock:20,

    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 1, comment: "Great quality and my son loves it!" },
      { user: "Lisa", rating: 2, comment: "Nice fabric, but runs a little big." },
      { user: "Lisa", rating: 2, comment: "Nice fabric, but runs a little big." }

    ],
    total_reviews: 3

  },
  {
    id: 2,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    available_stock:70,
    size:["S","M","L","XL","XXL"],
    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son loved it " },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 3, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 5, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 2, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 3, comment: "Nice fabric, but runs not more than a year" },
      { user: "Lisa", rating: 1, comment: "Nice fabric, but runs not more than a year" },
    ],
    total_reviews: 11
  },
  {
    id: 3,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    available_stock:39,
    old_price: 100.5,
    size:["S","M","L","XL","XXL"],
    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Tom", rating: 5, comment: "Great quality and my son loved it!" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year." },
      { user: "John", rating: 3, comment: "Decent product, but the stitching could be better." },
      { user: "Emily", rating: 5, comment: "Absolutely loved it! Perfect fit and amazing design." },
      { user: "Sophia", rating: 4, comment: "Good value for money, but delivery was delayed." },
      { user: "Michael", rating: 2, comment: "Not what I expected. The material feels cheap." },
      { user: "Olivia", rating: 5, comment: "Exceeded my expectations! Will buy again." },
      { user: "Daniel", rating: 3, comment: "Average product. The color faded after a few washes." },
      { user: "Emma", rating: 4, comment: "Comfortable and stylish, but slightly overpriced." },
      { user: "James", rating: 1, comment: "Terrible experience. The product arrived damaged." }


    ],
    total_reviews: 2
  },
  {
    id: 4,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    available_stock:77,
    size:["S","M","L","XL","XXL"],

    old_price: 150.0,
    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Tom", rating: 5, comment: "Great quality and my son loved it!" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year." },
      { user: "John", rating: 3, comment: "Decent product, but the stitching could be better." },
      { user: "Emily", rating: 5, comment: "Absolutely loved it! Perfect fit and amazing design." },
      { user: "Sophia", rating: 4, comment: "Good value for money, but delivery was delayed." },
      { user: "Michael", rating: 2, comment: "Not what I expected. The material feels cheap." },
      { user: "Olivia", rating: 5, comment: "Exceeded my expectations! Will buy again." },
      { user: "Daniel", rating: 3, comment: "Average product. The color faded after a few washes." },
      { user: "Emma", rating: 4, comment: "Comfortable and stylish, but slightly overpriced." },
      { user: "James", rating: 1, comment: "Terrible experience. The product arrived damaged." }

    ],
    total_reviews: 9

  },
  {
    id: 5,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    
    description: "A fun and cozy hooded top designed for women with nice color.",
    size:["S","M","L","XL","XXL"],

    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Tom", rating: 5, comment: "Great quality and my son loved it!" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year." },
      { user: "John", rating: 3, comment: "Decent product, but the stitching could be better." },
      { user: "Emily", rating: 5, comment: "Absolutely loved it! Perfect fit and amazing design." },
      { user: "Sophia", rating: 4, comment: "Good value for money, but delivery was delayed." },
      { user: "Michael", rating: 2, comment: "Not what I expected. The material feels cheap." },
      { user: "Olivia", rating: 5, comment: "Exceeded my expectations! Will buy again." },
      { user: "Daniel", rating: 3, comment: "Average product. The color faded after a few washes." },
      { user: "Emma", rating: 4, comment: "Comfortable and stylish, but slightly overpriced." },
      { user: "James", rating: 1, comment: "Terrible experience. The product arrived damaged." }


    ],
    total_reviews: 2
  },
  {
    id: 6,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],
    available_stock:20,

    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Ryan", rating: 5, comment: "Absolutely fantastic! The material feels premium." },
      { user: "Jessica", rating: 3, comment: "It's decent, but I expected better quality at this price." },
      { user: "Nathan", rating: 4, comment: "Nice design! Comfortable and fits well." },
      { user: "Sophia", rating: 2, comment: "Not impressed. The stitching came undone after two wears." },
      { user: "David", rating: 5, comment: "Worth every penny! I will definitely buy more." },
      { user: "Emma", rating: 1, comment: "Terrible experience. Arrived late and was the wrong size." },
      { user: "Oliver", rating: 4, comment: "Looks stylish, but runs slightly smaller than expected." },
      { user: "Lucas", rating: 5, comment: "Perfect for everyday use! Soft and comfortable." },
      { user: "Chloe", rating: 3, comment: "The fit is okay, but the fabric feels thinner than expected." },
      { user: "Mason", rating: 4, comment: "Great product overall. Just wish it had more color options." }


    ],
    total_reviews: 2
  },
  {
    id: 7,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],
    available_stock:20,


    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Ryan", rating: 5, comment: "Absolutely fantastic! The material feels premium." },
      { user: "Jessica", rating: 3, comment: "It's decent, but I expected better quality at this price." },
      { user: "Nathan", rating: 4, comment: "Nice design! Comfortable and fits well." },
      { user: "Sophia", rating: 2, comment: "Not impressed. The stitching came undone after two wears." },
      { user: "David", rating: 5, comment: "Worth every penny! I will definitely buy more." },
      { user: "Emma", rating: 1, comment: "Terrible experience. Arrived late and was the wrong size." },
      { user: "Oliver", rating: 4, comment: "Looks stylish, but runs slightly smaller than expected." },
      { user: "Lucas", rating: 5, comment: "Perfect for everyday use! Soft and comfortable." },
      { user: "Chloe", rating: 3, comment: "The fit is okay, but the fabric feels thinner than expected." },
      { user: "Mason", rating: 4, comment: "Great product overall. Just wish it had more color options." }


    ],
    total_reviews: 2
  },
  {
    id: 8,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p8_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ryan", rating: 5, comment: "Absolutely fantastic! The material feels premium." },
      { user: "Jessica", rating: 3, comment: "It's decent, but I expected better quality at this price." },
      { user: "Nathan", rating: 4, comment: "Nice design! Comfortable and fits well." },
      { user: "Sophia", rating: 2, comment: "Not impressed. The stitching came undone after two wears." },
      { user: "David", rating: 5, comment: "Worth every penny! I will definitely buy more." },
      { user: "Emma", rating: 1, comment: "Terrible experience. Arrived late and was the wrong size." },
      { user: "Oliver", rating: 4, comment: "Looks stylish, but runs slightly smaller than expected." },
      { user: "Lucas", rating: 5, comment: "Perfect for everyday use! Soft and comfortable." },
      { user: "Chloe", rating: 3, comment: "The fit is okay, but the fabric feels thinner than expected." },
      { user: "Mason", rating: 4, comment: "Great product overall. Just wish it had more color options." }

    ],
    total_reviews: 2
  },
  {
    id: 9,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p9_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }


    ],
    total_reviews: 2
  },
  {
    id: 10,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p10_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 11,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p11_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy hooded top designed for women with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 12,
    name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
    category: "women",
    image: p12_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],


    description: "A cozy top for women flaunt your look to the world",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 13,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p13_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy hooded top designed for men with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Aiden", rating: 5, comment: "The quality is superb! Definitely worth the money." },
      { user: "Ella", rating: 4, comment: "Very stylish, but the fabric could be a bit softer." },
      { user: "Jacob", rating: 3, comment: "Not bad, but it doesn't look exactly like the picture." },
      { user: "Lily", rating: 5, comment: "Absolutely in love with this! Feels premium and fits well." },
      { user: "Matthew", rating: 2, comment: "Disappointed. The stitching started coming undone." },
      { user: "Zoe", rating: 4, comment: "Great design, but runs a little small." },
      { user: "Evan", rating: 5, comment: "Perfect for everyday wear! Will be buying again." },
      { user: "Grace", rating: 3, comment: "Decent quality but expected a thicker fabric." },
      { user: "Luke", rating: 1, comment: "Wouldn't recommend. Arrived damaged and late." },
      { user: "Madison", rating: 4, comment: "Nice overall, just wish it had more color options." }


    ],
    total_reviews: 2
  },
  {
    id: 14,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],
    available_stock:20,


    description: "A fun and cozy hooded top designed for men with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Ella", rating: 5, comment: "Absolutely amazing! The quality is fantastic." },
      { user: "Liam", rating: 4, comment: "Good product, but I wish the fabric was a little thicker." },
      { user: "Avery", rating: 3, comment: "Decent, but didn't quite meet my expectations." },
      { user: "Mason", rating: 5, comment: "This exceeded all my expectations! Perfect buy." },
      { user: "Charlotte", rating: 2, comment: "The color faded quickly after just a few washes." },
      { user: "Samuel", rating: 4, comment: "Great value for money, but shipping took too long." },
      { user: "Zoey", rating: 5, comment: "Super comfortable and stylish—definitely worth it!" },
      { user: "Isaac", rating: 3, comment: "It's okay, but I wouldn't buy it again." },
      { user: "Emily", rating: 1, comment: "Totally disappointed. Wrong size and poor quality." },
      { user: "Connor", rating: 4, comment: "Nice fit, looks great, just wish there were more colors available." }


    ],
    total_reviews: 2
  },
  {
    id: 15,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],
    available_stock:20,


    description: "A fun and cozy hooded top designed for men with nice color.",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Ella", rating: 5, comment: "Absolutely amazing! The quality is fantastic." },
      { user: "Liam", rating: 4, comment: "Good product, but I wish the fabric was a little thicker." },
      { user: "Avery", rating: 3, comment: "Decent, but didn't quite meet my expectations." },
      { user: "Mason", rating: 5, comment: "This exceeded all my expectations! Perfect buy." },
      { user: "Charlotte", rating: 2, comment: "The color faded quickly after just a few washes." },
      { user: "Samuel", rating: 4, comment: "Great value for money, but shipping took too long." },
      { user: "Zoey", rating: 5, comment: "Super comfortable and stylish—definitely worth it!" },
      { user: "Isaac", rating: 3, comment: "It's okay, but I wouldn't buy it again." },
      { user: "Emily", rating: 1, comment: "Totally disappointed. Wrong size and poor quality." },
      { user: "Connor", rating: 4, comment: "Nice fit, looks great, just wish there were more colors available." }


    ],
    total_reviews: 2
  },
  {
    id: 16,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
    available_stock:20,

    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Aiden", rating: 5, comment: "The quality is superb! Definitely worth the money." },
      { user: "Ella", rating: 4, comment: "Very stylish, but the fabric could be a bit softer." },
      { user: "Jacob", rating: 3, comment: "Not bad, but it doesn't look exactly like the picture." },
      { user: "Lily", rating: 5, comment: "Absolutely in love with this! Feels premium and fits well." },
      { user: "Matthew", rating: 2, comment: "Disappointed. The stitching started coming undone." },
      { user: "Zoe", rating: 4, comment: "Great design, but runs a little small." },
      { user: "Evan", rating: 5, comment: "Perfect for everyday wear! Will be buying again." },
      { user: "Grace", rating: 3, comment: "Decent quality but expected a thicker fabric." },
      { user: "Luke", rating: 1, comment: "Wouldn't recommend. Arrived damaged and late." },
      { user: "Madison", rating: 4, comment: "Nice overall, just wish it had more color options." }


    ],
    total_reviews: 2
  },
  {
    id: 17,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p17_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Aiden", rating: 5, comment: "The quality is superb! Definitely worth the money." },
      { user: "Ella", rating: 4, comment: "Very stylish, but the fabric could be a bit softer." },
      { user: "Jacob", rating: 3, comment: "Not bad, but it doesn't look exactly like the picture." },
      { user: "Lily", rating: 5, comment: "Absolutely in love with this! Feels premium and fits well." },
      { user: "Matthew", rating: 2, comment: "Disappointed. The stitching started coming undone." },
      { user: "Zoe", rating: 4, comment: "Great design, but runs a little small." },
      { user: "Evan", rating: 5, comment: "Perfect for everyday wear! Will be buying again." },
      { user: "Grace", rating: 3, comment: "Decent quality but expected a thicker fabric." },
      { user: "Luke", rating: 1, comment: "Wouldn't recommend. Arrived damaged and late." },
      { user: "Madison", rating: 4, comment: "Nice overall, just wish it had more color options." }


    ],
    total_reviews: 2
  },
  {
    id: 18,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Aiden", rating: 5, comment: "The quality is superb! Definitely worth the money." },
      { user: "Ella", rating: 4, comment: "Very stylish, but the fabric could be a bit softer." },
      { user: "Jacob", rating: 3, comment: "Not bad, but it doesn't look exactly like the picture." },
      { user: "Lily", rating: 5, comment: "Absolutely in love with this! Feels premium and fits well." },
      { user: "Matthew", rating: 2, comment: "Disappointed. The stitching started coming undone." },
      { user: "Zoe", rating: 4, comment: "Great design, but runs a little small." },
      { user: "Evan", rating: 5, comment: "Perfect for everyday wear! Will be buying again." },
      { user: "Grace", rating: 3, comment: "Decent quality but expected a thicker fabric." },
      { user: "Luke", rating: 1, comment: "Wouldn't recommend. Arrived damaged and late." },
      { user: "Madison", rating: 4, comment: "Nice overall, just wish it had more color options." }


    ],
    total_reviews: 2
  },
  {
    id: 19,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Aiden", rating: 5, comment: "The quality is superb! Definitely worth the money." },
      { user: "Ella", rating: 4, comment: "Very stylish, but the fabric could be a bit softer." },
      { user: "Jacob", rating: 3, comment: "Not bad, but it doesn't look exactly like the picture." },
      { user: "Lily", rating: 5, comment: "Absolutely in love with this! Feels premium and fits well." },
      { user: "Matthew", rating: 2, comment: "Disappointed. The stitching started coming undone." },
      { user: "Zoe", rating: 4, comment: "Great design, but runs a little small." },
      { user: "Evan", rating: 5, comment: "Perfect for everyday wear! Will be buying again." },
      { user: "Grace", rating: 3, comment: "Decent quality but expected a thicker fabric." },
      { user: "Luke", rating: 1, comment: "Wouldn't recommend. Arrived damaged and late." },
      { user: "Madison", rating: 4, comment: "Nice overall, just wish it had more color options." }


    ],
    total_reviews: 2
  },
  {
    id: 20,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p20_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 21,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p21_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 22,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 23,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" }
      ,
      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 24,
    name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
    available_stock:20,

    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy jacket for men to make sure you look awesome and cool in winters",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
    available_stock:20,

    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 26,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    available_stock:20,

    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 27,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }



    ],
    total_reviews: 2
  },
  {
    id: 28,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },

      { user: "Benjamin", rating: 5, comment: "Absolutely love it! The material is top-notch." },
      { user: "Sophia", rating: 3, comment: "Not bad, but I expected better quality for the price." },
      { user: "Dylan", rating: 4, comment: "Looks great! Slightly snug fit, but overall nice." },
      { user: "Emma", rating: 2, comment: "Color faded after washing. Disappointed." },
      { user: "William", rating: 5, comment: "Super comfortable! Feels amazing to wear." },
      { user: "Hannah", rating: 3, comment: "Decent, but could have better stitching." },
      { user: "Daniel", rating: 4, comment: "Great style! Would recommend, but check sizing first." },
      { user: "Olivia", rating: 1, comment: "Poor packaging, arrived damaged." },
      { user: "Liam", rating: 5, comment: "Perfect! I'm buying another one!" },
      { user: "Isabella", rating: 4, comment: "Really stylish, but took too long to arrive." }


    ],
    total_reviews: 2
  },
  {
    id: 29,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
    available_stock:20,

    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 30,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p30_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 31,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 32,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 33,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p33_img,
    available_stock:20,

    new_price: 85.0,
    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 34,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
    available_stock:20,

    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 35,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p35_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
  {
    id: 36,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    available_stock:20,

    old_price: 120.5,
    size:["S","M","L","XL","XXL"],

    description: "A fun and cozy sweatshirt for children to keep them flaunt their style",
    reviews: [
      { user: "Tom", rating: 5, comment: "Great quality and my son found it great he loved this" },
      { user: "Lisa", rating: 4, comment: "Nice fabric, but runs not more than a year" },
      { user: "Ethan", rating: 5, comment: "Amazing quality! Exceeded my expectations." },
      { user: "Sarah", rating: 4, comment: "Really nice, but took a while to be delivered." },
      { user: "Jake", rating: 3, comment: "Decent for the price, but nothing special." },
      { user: "Mia", rating: 5, comment: "Soft and comfortable—perfect for daily wear!" },
      { user: "Liam", rating: 2, comment: "Not worth the hype. Fabric feels rough." },
      { user: "Olivia", rating: 4, comment: "Stylish design, but I wish it was slightly cheaper." },
      { user: "Noah", rating: 5, comment: "Absolutely love it! Planning to buy more." },
      { user: "Ava", rating: 3, comment: "Looks good, but the stitching isn’t the best." },
      { user: "James", rating: 1, comment: "Disappointed. Arrived damaged and unwearable." },
      { user: "Charlotte", rating: 4, comment: "Great product, but sizing runs a bit small." }

    ],
    total_reviews: 2
  },
];

export default all_product;
