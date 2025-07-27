const express = require("express");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware");
const upload = require("../middlewares/uploadMiddleware");

const {
  getPosts,
  getPostsByUser,
  createPost,
  toggleLike,
  addComment,
  updateComment,
  deleteComment,
   deletePost
} = require("../controllers/postController");

router.get("/", getPosts);
router.get("/user/:userId", getPostsByUser);
router.post("/", protect, upload.single("image"), createPost);
router.post("/:id/like", protect, toggleLike);
router.post("/:id/comments", protect, upload.single("image"), addComment);
router.put("/:postId/comments/:commentId", protect, upload.single("image"), updateComment);
router.delete("/:postId/comments/:commentId", protect, deleteComment);
router.delete("/:id", protect, deletePost);

module.exports = router;
