import { PostModel } from '@/models/post/post-models';
import { PostRepository } from './post-repository';
import { resolve } from 'path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

export class JsonPostRepository implements PostRepository {
  findById(id: string): Promise<PostModel> {
    throw new Error('Method not implemented.');
  }
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_POST_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    return this.readFromDisk();
  }
}

export const postRepository = new JsonPostRepository();

// (async () => {
//   const posts = await postRepository.findAll();
//   posts.forEach(post => {
//     console.log(post.id);
//   });
// })();
