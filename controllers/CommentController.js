import CommentService from '../services/CommentService.js';

import { statusCodes } from '../constants/statusCodes.js';

class CommentController {
  async create(req, res) {
    try {
      const comment = await CommentService.create(req.body);
      return res.status(statusCodes.CREATED).json(comment);
    } catch (err) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  }

  async getAll(req, res) {
    try {
      const comments = await CommentService.getAll();
      return res.status(statusCodes.OK).json(comments);
    } catch (err) {
      return res.status(statusCodes.INTERNAL_SERVER_ERROR).json(err);
    }
  }
}

export default new CommentController();
