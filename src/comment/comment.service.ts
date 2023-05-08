import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  findUsercomments(userId: string) {
    return 'this is the comments of the user';
  }
}
