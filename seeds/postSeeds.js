const { Post } = require('../models');

const posts = [
  {
    title: 'Exploring the Wonders of Nature',
    body: 'Today, I had the most incredible adventure in a dense rainforest. The lush greenery and vibrant wildlife left me in awe. I spotted colorful birds, playful monkeys, and elusive jaguars. Nature truly is a masterpiece!',
    likes: 10,
    user_id: 1,
  },
  {
    title: 'A Culinary Delight: Spicy Fusion Cuisine',
    body: 'I recently discovered a hidden gem of a restaurant that specializes in blending different cuisines. The flavors were mind-blowing! From the fiery spices of Indian curries to the delicate textures of Japanese sushi, every dish was an explosion of taste and creativity.',
    dislikes: 5,
    user_id: 2,
  },
  {
    title: 'In Pursuit of Knowledge',
    body: "Learning is a lifelong journey, and I'm passionate about expanding my horizons. I've been engrossed in a captivating book about quantum physics. The concepts are mind-bending, but I'm determined to unravel the mysteries of the universe!",
    likes: 20,
    dislikes: 3,
    user_id: 3,
  },
  {
    title: 'Reflections on a Mountain Summit',
    body: 'After months of training and preparation, I finally reached the peak of a majestic mountain. The panoramic view from the top was breathtaking. Standing amidst the clouds, I felt a profound sense of accomplishment and a renewed connection with nature.',
    likes: 15,
    user_id: 4,
  },
  {
    title: 'Sunset Serenade on the Beach',
    body: 'As the sun dipped below the horizon, casting a warm glow across the tranquil beach, a talented musician started playing soul-stirring melodies on his guitar. The soothing music combined with the rhythmic sound of crashing waves created an enchanting atmosphere that touched my heart.',
    dislikes: 2,
    user_id: 5,
  },
  {
    title: 'Finding Balance: Yoga and Meditation',
    body: "In the chaos of everyday life, I've discovered the power of yoga and meditation. The serene practice of connecting mind, body, and soul brings inner peace and harmony. With every breath, I release stress and embrace the present moment.",
    likes: 12,
    dislikes: 7,
    user_id: 6,
  },
  {
    title: "Uncovering History's Hidden Gems",
    body: 'Exploring ancient ruins and historical sites is like stepping back in time. Each artifact tells a story of civilizations long gone. The crumbling walls, intricate carvings, and mysterious symbols ignite my imagination, reminding me of the fascinating tapestry of human history.',
    likes: 8,
    user_id: 7,
  },
  {
    title: 'The Joy of Volunteering',
    body: "There's immense satisfaction in lending a helping hand to those in need. I spent the weekend volunteering at a local shelter, and the smiles on people's faces were priceless. The simple act of giving back can create a ripple effect of kindness and compassion.",
    dislikes: 10,
    user_id: 8,
  },
  {
    title: 'Marvels of Underwater Life',
    body: 'Diving into the azure depths of the ocean, I encountered a mesmerizing world beneath the waves. Vibrant coral reefs teemed with colorful fish, while graceful sea turtles glided through the water. It was a humbling experience that reminded me of the wonders of marine biodiversity.',
    likes: 4,
    dislikes: 3,
    user_id: 9,
  },
  {
    title: 'Capturing Moments Through Photography',
    body: "With my camera in hand, I ventured into picturesque landscapes, seeking to freeze fleeting moments in time. The soft golden light at sunrise, the candid laughter of children, and the beauty of nature in every frame—it's a passion that allows me to express my creativity.",
    likes: 6,
    user_id: 10,
  },
  {
    title: 'The Enchanting World of Astronomy',
    body: "Gazing at the starry night sky, I felt a sense of wonder and insignificance. Astronomy has opened my eyes to the vastness of the universe and the countless mysteries that lie beyond our planet. It's a humbling reminder of how much there is left to explore.",
    dislikes: 8,
    user_id: 11,
  },
  {
    title: 'Savoring Authentic Cultural Experiences',
    body: "Immersing myself in different cultures has enriched my life in unimaginable ways. Whether it's learning traditional dances, trying exotic dishes, or participating in local festivals, each experience is a gateway to understanding and appreciating the diversity that makes our world so fascinating.",
    likes: 18,
    dislikes: 4,
    user_id: 12,
  },
  {
    title: 'The Magic of Live Performances',
    body: "There's something truly magical about live performances. The energy of the crowd, the skill of talented performers, and the shared emotions create an unforgettable experience. From theater productions to music concerts, these moments become cherished memories that stay with me forever.",
    likes: 2,
    user_id: 13,
  },
  {
    title: "Discovering Serenity in Nature's Embrace",
    body: 'Escaping the hustle and bustle of the city, I found solace in the tranquility of a hidden forest. The gentle rustling of leaves, the soft chirping of birds, and the scent of wildflowers transported me to a place of serenity. Nature has a remarkable way of rejuvenating the soul.',
    dislikes: 6,
    user_id: 14,
  },
  {
    title: 'Journeying Through Time: Historic Train Rides',
    body: 'Stepping aboard a vintage steam train, I embarked on a nostalgic journey through time. The rhythmic chug of the locomotive and the picturesque landscapes passing by the window evoked a sense of nostalgia for a bygone era. It was a delightful experience that ignited my imagination.',
    likes: 9,
    dislikes: 1,
    user_id: 15,
  },
  {
    title: 'The Art of Creative Writing',
    body: 'Writing is a form of self-expression that allows me to share my thoughts and feelings with the world. Whether it’s a poem, a short story, or a personal essay, each piece is a reflection of my unique perspective. It’s a passion that has helped me grow as a person.',
    likes: 3,
    dislikes: 2,
    user_id: 16,
  },
];

const seedPosts = async () => await Post.bulkCreate(posts);

module.exports = seedPosts;
