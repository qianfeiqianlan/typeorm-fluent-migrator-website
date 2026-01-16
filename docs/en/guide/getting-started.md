# Getting Started

## Installation

```bash
npm install typeorm-fluent-migrator
```

**Note:** This library requires `typeorm` as a peer dependency:

```bash
npm install typeorm
```

## Basic Usage

### Create a Table

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

### Alter a Table

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

### Add a Column

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

### Modify a Column

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

### Add an Index

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

### Foreign Keys

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

## Next Steps

- Check out the [API Reference](/en/api/column-types) to see all available column types and constraints
- Browse [Examples](/en/examples/create-table) for more use cases
- See [Comparison](/en/guide/comparison) to understand the differences from native TypeORM
