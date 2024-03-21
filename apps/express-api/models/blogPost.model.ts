import { Schema, model, Document, Types } from 'mongoose';

interface IBlogPost extends Document {
  title: string;
  articleImages: string[];
  articleBody: string;
  keywordSearch: string[];
  starRating: number;
  upVote: number;
  downVote: number;
  dateCreated: Date;
  dateUpdated: Date;
  relatedBlogs: Types.ObjectId[];
  // author: Types.ObjectId;
  // comments: Types.ObjectId[];
}

const blogPostSchema = new Schema<IBlogPost>({
  title: {
    type: String,
    required: true,
  },
  articleImages: {
    type: [String],
    default: [],
  },
  articleBody: {
    type: String,
    required: true,
  },
  keywordSearch: {
    type: [String],
    default: [],
  },
  starRating: {
    type: Number,
    default: 0,
  },
  upVote: {
    type: Number,
    default: 0,
  },
  downVote: {
    type: Number,
    default: 0,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
  relatedBlogs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'BlogPost',
    },
  ],
  // TODO: create models for User and BlogComment
  // author: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true,
  // },
  // comments: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'BlogComment',
  //   default: [],
  // }],
});

const BlogPost = model<IBlogPost>('BlogPost', blogPostSchema);

export default BlogPost;
