import { Schema, model, Document, Types } from 'mongoose';

// Define the Comment interface
export interface IComment extends Document {
  content: string;
  author: Types.ObjectId;
  createdAt: Date;
  postId: Types.ObjectId;
  subComments: Types.ObjectId[];
  flagged: boolean;
  reported: number;
}

// Define the Comment schema
const commentSchema = new Schema<IComment>({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'BlogPost',
    required: true,
  },
  subComments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  flagged: {
    type: Boolean,
    default: false,
  },
  reported: {
    type: Number,
    default: 0,
  },
});

const Comment = model<IComment>('Comment', commentSchema);

export default Comment;
