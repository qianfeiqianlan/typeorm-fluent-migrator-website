# Create Table Examples

## Basic Table

Create a simple users table:

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
            .column('age').int.nullable
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.table('users');
    }
}
```

## Various Column Types

Create a table with various column types:

```typescript
export class CreatePostsTable1623456790000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.table('posts')
            .column('id').int.primary.autoIncrement
            .column('title').varchar(100).notNull
            .column('content').text.nullable
            .column('isPublished').smallint.default(0)
            .column('createdAt').timestamp.default('CURRENT_TIMESTAMP')
            .column('price').decimal(10, 2).nullable
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.table('posts');
    }
}
```

## Table with Foreign Key

Create a table with foreign key relationships:

```typescript
export class CreatePostsTable1623456791000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        // Create users table first
        await FL.use(queryRunner)
            .create.table('users')
            .column('id').int.primary.autoIncrement
            .column('name').varchar(255).notNull
            .execute();

        // Create posts table referencing users table
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
        await FL.use(queryRunner).drop.table('users');
    }
}
```

## Using Database-Specific Types

Use database-specific types:

```typescript
import { FL, ColumnTypes } from 'typeorm-fluent-migrator';

export class CreateProductsTable1623456792000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.table('products')
            .column('id').type(ColumnTypes.MYSQL.BIGINT).primary.autoIncrement
            .column('name').type(ColumnTypes.POSTGRES.TEXT).notNull
            .column('price').type(ColumnTypes.SQL_SERVER.MONEY).nullable
            .column('metadata').type(ColumnTypes.POSTGRES.JSONB).nullable
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.table('products');
    }
}
```

## Date Types

Use date and time types:

```typescript
export class CreateEventsTable1623456793000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .create.table('events')
            .column('id').int.primary.autoIncrement
            .column('name').varchar(255).notNull
            .column('eventDate').date.nullable
            .column('startTime').time.nullable
            .column('createdAt').timestamp.default('CURRENT_TIMESTAMP')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner).drop.table('events');
    }
}
```
