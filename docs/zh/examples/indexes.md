# 索引示例

## 创建简单索引

在单个列上创建索引：

```typescript
import { MigrationInterface, QueryRunner } from 'typeorm';
import { FL } from 'typeorm-fluent-migrator';

export class CreateIndex1623456792000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.index('idx_users_email')
            .on('users')
            .column('email')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.index('users', 'idx_users_email');
    }
}
```

## 创建唯一索引

创建唯一索引：

```typescript
export class CreateUniqueIndex1623456793000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.index('idx_products_sku')
            .on('products')
            .column('sku')
            .unique
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.index('products', 'idx_products_sku');
    }
}
```

## 创建复合索引

在多个列上创建复合索引：

```typescript
export class CreateCompositeIndex1623456794000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.index('idx_orders_user_status')
            .on('orders')
            .column('userId')
            .column('status')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.index('orders', 'idx_orders_user_status');
    }
}
```

## 使用 columns() 方法

使用 `columns()` 方法创建复合索引：

```typescript
export class CreateCompositeIndexWithColumns1623456795000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.index('idx_posts_author_category')
            .on('posts')
            .columns('authorId', 'categoryId')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.index('posts', 'idx_posts_author_category');
    }
}
```

## 删除索引

删除索引：

```typescript
export class DropIndex1623456796000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.index('users', 'idx_users_email');
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.index('idx_users_email')
            .on('users')
            .column('email')
            .execute();
    }
}
```
