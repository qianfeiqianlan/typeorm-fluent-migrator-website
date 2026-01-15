# 修改表示例

## 添加列

向现有表添加新列：

```typescript
import { MigrationInterface, QueryRunner } from 'typeorm';
import { FL } from 'typeorm-fluent-migrator';

export class AddPhoneColumn1623456790000 implements MigrationInterface {
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

## 添加多个列

一次添加多个列：

```typescript
export class AddMultipleColumns1623456791000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('posts')
            .addColumn('content').text.nullable
            .addColumn('author').varchar(255).notNull
            .addColumn('createdAt').timestamp.default('CURRENT_TIMESTAMP')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('posts')
            .dropColumn('content')
            .dropColumn('author')
            .dropColumn('createdAt')
            .execute();
    }
}
```

## 删除列

从表中删除列：

```typescript
export class DropColumn1623456792000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('products')
            .dropColumn('oldStatus')
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('products')
            .addColumn('oldStatus').varchar(50).nullable
            .execute();
    }
}
```

## 修改列

修改现有列的类型和约束：

```typescript
export class AlterColumn1623456793000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('customers')
            .alterColumn('name').varchar(255).nullable
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('customers')
            .alterColumn('name').varchar(50).notNull
            .execute();
    }
}
```

## 组合操作

在一个迁移中组合添加、删除和修改列：

```typescript
export class ComplexAlter1623456794000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('orders')
            .addColumn('total').decimal(10, 2).nullable
            .dropColumn('oldStatus')
            .alterColumn('orderNo').varchar(100).notNull
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('orders')
            .dropColumn('total')
            .addColumn('oldStatus').varchar(20).nullable
            .alterColumn('orderNo').varchar(50).notNull
            .execute();
    }
}
```

## 修改列类型

将列从一种类型改为另一种类型：

```typescript
export class ChangeColumnType1623456795000 implements MigrationInterface {
    async up(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('products')
            .alterColumn('price').decimal(10, 2).nullable
            .alterColumn('isActive').smallint.default(1)
            .execute();
    }

    async down(queryRunner: QueryRunner): Promise<void> {
        await FL.use(queryRunner)
            .alter.table('products')
            .alterColumn('price').int.nullable
            .alterColumn('isActive').int.default(0)
            .execute();
    }
}
```
