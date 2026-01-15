# Index Examples

## Create Simple Index

Create an index on a single column:

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

## Create Unique Index

Create a unique index:

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

## Create Composite Index

Create a composite index on multiple columns:

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

## Using columns() Method

Create a composite index using the `columns()` method:

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

## Drop Index

Drop an index:

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
