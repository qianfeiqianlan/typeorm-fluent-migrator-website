# 快速开始

## 安装

```bash
npm install typeorm-fluent-migrator
```

**注意：** 本库需要 `typeorm` 作为对等依赖：

```bash
npm install typeorm
```

## 基本用法

### 创建表

```typescript
import { MigrationInterface, QueryRunner } from 'typeorm';
import { FL } from 'typeorm-fluent-migrator';

export class CreateUsersTable1623456789000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.table('users')
            .column('id').int.primary.autoIncrement
            .column('name').varchar(255).notNull
            .column('email').varchar(255).unique.notNull
            .column('age').int.nullable.execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.table('users');
    }
}
```

### 修改表

```typescript
export class AlterUsersTable1623456790000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('users')
            .dropColumn('oldStatus')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('users')
            .addColumn('oldStatus').varchar(50).nullable
            .execute();
    }
}
```

### 添加列

```typescript
export class AddPhoneColumn1623456791000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('users')
            .addColumn('phone').varchar(20).nullable
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('users')
            .dropColumn('phone')
            .execute();
    }
}
```

### 修改列

```typescript
export class AlterNameColumn1623456792000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('users')
            .alterColumn('name').varchar(100).notNull
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('users')
            .alterColumn('name').varchar(255).notNull
            .execute();
    }
}
```

### 添加索引

```typescript
export class CreateIndexes1623456793000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).create.index('idx_users_email').on('users').column('email').unique.execute();

        await FL.use(queryRunner)
            .create.index('idx_posts_author_status')
            .on('posts')
            .columns('authorId', 'status')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.index('users', 'idx_users_email');
        await FL.use(queryRunner).drop.index('posts', 'idx_posts_author_status');
    }
}
```

### 外键

```typescript
export class CreatePostsTable1623456794000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.table('posts')
            .column('id').int.primary.autoIncrement
            .column('title').varchar(100).notNull
            .column('content').text.nullable
            .column('authorId').int.notNull.references('users', 'id').onDelete('CASCADE').onUpdate('RESTRICT')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.table('posts');
    }
}
```

## 下一步

- 查看 [API 参考](/zh/api/column-types) 了解所有可用的列类型和约束
- 查看 [示例](/zh/examples/create-table) 了解更多使用场景
- 查看 [对比](/zh/guide/comparison) 了解与原生 TypeORM 的区别
