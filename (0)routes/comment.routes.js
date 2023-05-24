const express = require('express');
const router = express.Router();

const CommentController = require("../(1)controllers/comment.controller.js");
const authMiddleware = require("../middlewares/auth-middleware.js");
const commentPhoto = require("../modules/s3.js")

const commentController = new CommentController();

// 댓글 생성
router.post(
    "/:postId/comments",
    authMiddleware,
    commentPhoto.single("photoUrl"), // field 값
    commentController.createComment
);

// 댓글 조회
router.get("/:postId/comments", authMiddleware, commentController.readComments);

// 댓글 수정
router.put("/:postId/comments/:commentId", authMiddleware, commentController.fixComment);

// 댓글 삭제
router.delete("/:postId/comments/:commentId", authMiddleware, commentController.deleteComment);


module.exports = router;