// controllers/social.js
exports.createPostWithWorkout = async (req, res) => {
  const { content, workoutId } = req.body;
  
  const post = await Post.create({
    user: req.user._id,
    content,
    workout: workoutId,
    likes: [],
    comments: []
  });
  
  res.status(201).json(post);
};