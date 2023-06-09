import {
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { Redis } from 'ioredis';

export class InvalidatedRefreshTokenError extends Error {}

@Injectable()
export class RefreshTokenIdsStorage
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  private redisClient: Redis;

  onApplicationBootstrap() {
    this.redisClient = new Redis({
      host: 'localhost',
      port: 6379,
    });
  }

  onApplicationShutdown(signal?: string) {
    return this.redisClient.quit();
  }

  async insert(userId: number, tokenId: string): Promise<void> {
    await this.redisClient.set(this.getkey(userId), tokenId);
  }

  async validate(userId: number, tokenId: string): Promise<boolean> {
    const storedId = await this.redisClient.get(this.getkey(userId));

    if (storedId !== tokenId) {
      throw new InvalidatedRefreshTokenError();
    }

    return storedId === tokenId;
  }

  async invalidate(userId: number): Promise<void> {
    await this.redisClient.del(this.getkey(userId));
  }

  private getkey(userId: number): string {
    return `user-${userId}`;
  }
}
