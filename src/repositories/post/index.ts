import { JsonPostRepository } from "./json-post-repositoy";
import { PostRepository } from "./post-repository";

export const postRepository: PostRepository = new JsonPostRepository();
