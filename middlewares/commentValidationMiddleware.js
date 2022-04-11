import { isHyperlinks } from '../validators/isHyperlinks.js';
import { commentSchema } from '../validators/joiCommentSchema.js';

import { statusCodes } from '../constants/statusCodes.js';
import { ErrorMessagesConstant } from '../constants/errorMessagesConstant.js';

export const commentValidationMiddleware = (req, res, next) => {
  const { error } = commentSchema.validate(req.body);
  const valid = error == null;

  if (!valid) {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');

    return res.status(statusCodes.BAD_REQUEST).json(message);
  } else if (isHyperlinks(req.body.comment)) {
    return res
      .status(statusCodes.BAD_REQUEST)
      .json(ErrorMessagesConstant.commentNoHyperlink);
  }

  next();
};
