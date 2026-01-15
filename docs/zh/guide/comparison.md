# 对比

## 代码量对比

| 维度         | 原生 TypeORM               | typeorm-fluent-migrator |
| ------------ | -------------------------- | ----------------------- |
| **代码量**   | 冗长，需手动 `new Table()` | 精简，减少 50-70%       |
| **可读性**   | 嵌套深，属性分散           | 线性，像读英文句子      |
| **类型安全** | 可能运行时错误             | 编译期检查              |
| **IDE 支持** | 有限的自动补全             | 完整的 IntelliSense     |
| **可维护性** | 高认知负担                 | 低，结构清晰            |

## 示例对比

### 原生 TypeORM

```typescript
await queryRunner.createTable(
    new Table({
        name: 'users',
        columns: [
            {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
            },
            {
                name: 'name',
                type: 'varchar',
                length: '255',
                isNullable: false,
            },
            {
                name: 'email',
                type: 'varchar',
                length: '255',
                isUnique: true,
                isNullable: false,
            },
        ],
    }),
    true
);
```

### typeorm-fluent-migrator

```typescript
await FL.use(queryRunner)
    .create.table('users')
    .column('id').int.primary.autoIncrement
    .column('name').varchar(255).notNull
    .column('email').varchar(255).unique.notNull
    .execute();
```

## 优势

### 1. 更少的代码

原生 TypeORM 需要创建 `Table` 对象并配置所有属性，而 fluent-migrator 使用链式调用，代码更简洁。

### 2. 更好的可读性

链式调用让代码读起来像自然语言，更容易理解。

### 3. 类型安全

完整的 TypeScript 支持，编译时就能发现错误。

### 4. 更好的 IDE 支持

IntelliSense 自动补全让编写迁移更加轻松。

### 5. 更易维护

结构清晰，修改和扩展更容易。
