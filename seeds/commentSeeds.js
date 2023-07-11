const { Comment } = require('../models');

const comments = [
  {
    body: 'Wow, what an amazing adventure! I can almost feel the vibrant atmosphere of the rainforest. Nature truly is a wonder.',
    likes: 10,
    dislikes: 3,
    user_id: 1,
    post_id: 1,
  },
  {
    body: 'That restaurant sounds incredible! I love when different cuisines come together to create unique and exciting flavors.',
    dislikes: 5,
    user_id: 2,
    post_id: 2,
  },
  {
    body: "Quantum physics can be mind-boggling, but it's fascinating to dive into the mysteries of the universe. Keep up the exploration!",
    likes: 20,
    dislikes: 3,
    user_id: 3,
    post_id: 3,
  },
  {
    body: 'Congratulations on conquering the mountain! The view must have been absolutely breathtaking. What an achievement!',
    likes: 15,
    user_id: 4,
    post_id: 4,
  },
  {
    body: 'I can almost taste the salty air and feel the warm sand beneath my feet. Sunset serenades on the beach are pure bliss.',
    dislikes: 2,
    user_id: 5,
    post_id: 5,
  },
  {
    body: "Yoga and meditation have truly transformed my life as well. It's amazing how a few moments of inner reflection can bring so much peace.",
    likes: 12,
    dislikes: 7,
    user_id: 6,
    post_id: 6,
  },
  {
    body: 'Exploring ancient ruins is like stepping back in time. I can almost hear the whispers of history echoing through the walls.',
    likes: 8,
    user_id: 7,
    post_id: 7,
  },
  {
    body: 'Volunteering is such a rewarding experience. Your kindness and selflessness inspire others to make a difference too!',
    dislikes: 10,
    user_id: 8,
    post_id: 8,
  },
  {
    body: 'Underwater life is truly enchanting. I can spend hours diving and marveling at the beauty of marine creatures.',
    likes: 4,
    dislikes: 3,
    user_id: 9,
    post_id: 9,
  },
  {
    body: 'Your photography skills are incredible! You have a gift for capturing precious moments and creating lasting memories.',
    likes: 6,
    user_id: 10,
    post_id: 10,
  },
  {
    body: 'Astronomy is a window to the wonders of the universe. Keep exploring the cosmos and unraveling its mysteries!',
    dislikes: 8,
    user_id: 11,
    post_id: 11,
  },
  {
    body: "Immersing ourselves in different cultures opens our eyes to the richness of our world. It's a beautiful experience.",
    likes: 18,
    dislikes: 4,
    user_id: 12,
    post_id: 12,
  },
  {
    body: 'Live performances have a way of transporting us to a different world. The energy and emotions are truly captivating.',
    likes: 2,
    user_id: 13,
    post_id: 13,
  },
  {
    body: 'Nature has a remarkable way of healing and restoring our spirits. Your serene forest adventure sounds magical!',
    dislikes: 6,
    user_id: 14,
    post_id: 14,
  },
  {
    body: 'Vintage train rides are like a journey through time itself. I can almost imagine the bygone era and its charm.',
    likes: 9,
    dislikes: 1,
    user_id: 15,
    post_id: 15,
  },
];

const seedComments = async () => await Comment.bulkCreate(comments);

module.exports = seedComments;
