# 列约束

## 主键约束

使用 `.primary` 将列设置为主键：

```typescript
.column('id').int.primary.autoIncrement
```

## 自增

使用 `.autoIncrement` 设置自增列：

```typescript
.column('id').int.primary.autoIncrement
```

## 可空性

- `.nullable` - 允许 NULL 值
- `.notNull` - 不允许 NULL 值

```typescript
.column('name').varchar(255).notNull
.column('email').varchar(255).nullable
```

## 唯一约束

使用 `.unique` 设置唯一约束：

```typescript
.column('email').varchar(255).unique.notNull
```

## 默认值

使用 `.default(value)` 设置默认值：

```typescript
.column('status').smallint.default(0)
.column('createdAt').timestamp.default('CURRENT_TIMESTAMP')
.column('name').varchar(255).default('Unknown')
```

## 外键约束

### 基本用法

```typescript
.column('authorId').int.notNull.references('users', 'id')
```

### 删除操作

使用 `.onDelete(action)` 设置删除时的操作：

```typescript
.column('authorId').int.notNull
    .references('users', 'id')
    .onDelete('CASCADE')
```

支持的操作：
- `'CASCADE'` - 级联删除
- `'SET NULL'` - 设置为 NULL
- `'RESTRICT'` - 限制删除
- `'NO ACTION'` - 无操作

### 更新操作

使用 `.onUpdate(action)` 设置更新时的操作：

```typescript
.column('authorId').int.notNull
    .references('users', 'id')
    .onUpdate('CASCADE')
```

支持的操作：
- `'CASCADE'` - 级联更新
- `'SET NULL'` - 设置为 NULL
- `'RESTRICT'` - 限制更新
- `'NO ACTION'` - 无操作

### 完整示例

```typescript
.column('authorId').int.notNull
    .references('users', 'id')
    .onDelete('CASCADE')
    .onUpdate('RESTRICT')
```

## 组合使用

可以组合多个约束：

```typescript
.column('id').int.primary.autoIncrement
.column('email').varchar(255).unique.notNull
.column('status').smallint.default(0).notNull
.column('authorId').int.notNull.references('users', 'id').onDelete('CASCADE')
```
