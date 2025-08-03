const Post = require('../models/Post');

// GET all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 })
      .populate("user", "username profileImage")
      .populate("comments.user", "username profileImage")
      .populate("likes", "username profileImage");

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching posts" });
  }
};

// GET posts by a specific user
const getPostsByUser = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.userId })
      .sort({ createdAt: -1 })
      .populate("user", "username profileImage")
      .populate("comments.user", "username profileImage")
      .populate("likes", "username profileImage");

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error while fetching user's posts" });
  }
};

// CREATE new post
const createPost = async (req, res) => {
  try {
    const text = req.body.text?.trim() || '';
    const imageUrl = req.file ? `uploads/${req.file.filename}` : '';

    // 🔴 Check: reject if both are empty
    if (!text && !imageUrl) {
      return res.status(400).json({ message: "Text or image required" });
    }

    const newPost = new Post({
      user: req.user._id,
      text,
      imageUrl,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

// LIKE / UNLIKE post
const toggleLike = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const userId = req.user._id;
    const liked = post.likes.includes(userId);

    if (liked) post.likes.pull(userId);
    else post.likes.push(userId);

    await post.save();
    res.json({ liked: !liked, totalLikes: post.likes.length });
  } catch (err) {
    res.status(500).json({ message: 'Server error toggling like' });
  }
};

// ADD comment
const addComment = async (req, res) => {
  try {
    const { text } = req.body;
    const imageUrl = req.file ? `uploads/${req.file.filename}` : '';

    if (!text?.trim() && !imageUrl) {
      return res.status(400).json({ message: 'Comment text or image required' });
    }

    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    post.comments.push({
      user: req.user._id,
      text: text?.trim() || '',
      imageUrl,
      createdAt: new Date(),
    });

    await post.save();
    res.status(201).json({ message: 'Comment added' });
  } catch (err) {
    res.status(500).json({ message: 'Error adding comment' });
  }
};

// UPDATE comment
const updateComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { text } = req.body;
    const imageUrl = req.file ? `uploads/${req.file.filename}` : null;

    if (!text?.trim() && !imageUrl) {
      return res.status(400).json({ message: 'Updated comment text or image required' });
    }

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (!comment.user.equals(req.user._id)) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    if (text?.trim()) comment.text = text.trim();
    if (imageUrl) comment.imageUrl = imageUrl;
    comment.updatedAt = new Date();

    await post.save();
    res.json({ message: 'Comment updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error updating comment' });
  }
};

// DELETE comment
const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const userId = req.user._id;

    console.log("➡️ Delete comment called");
    console.log("Post ID:", postId);
    console.log("Comment ID:", commentId);
    console.log("Authenticated user ID:", userId);

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = post.comments.id(commentId);
    if (!comment) return res.status(404).json({ message: 'Comment not found' });

    if (comment.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized: not your comment' });
    }

    // ✅ Proper way to remove embedded subdocument
    post.comments.pull(commentId);
    await post.save();

    console.log("✅ Comment deleted successfully");
    res.json({ message: 'Comment deleted successfully' });
  } catch (err) {
    console.error("❌ Server error deleting comment:", err);
    res.status(500).json({ message: 'Server error deleting comment' });
  }
};



// DELETE a post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    if (!post.user.equals(req.user._id)) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await post.deleteOne();
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error deleting post' });
  }
};

module.exports = {
  getPosts,
  getPostsByUser,
  createPost,
  toggleLike,
  addComment,
  updateComment,
  deleteComment,
   deletePost,
};
