import Comment from '../models/Comment.js';

class CommentService {
  async create(comment) {
    return Comment.create(comment);
  }

  async getAll() {
    return Comment.find().sort({ date: -1 });
  }
}

export default new CommentService();
