# Column Constraints

## Primary Key Constraint

Use `.primary` to set a column as primary key:

```typescript
.column('id').int.primary.autoIncrement
```

## Auto Increment

Use `.autoIncrement` to set an auto-increment column:

```typescript
.column('id').int.primary.autoIncrement
```

## Nullability

- `.nullable` - Allow NULL values
- `.notNull` - Disallow NULL values

```typescript
.column('name').varchar(255).notNull
.column('email').varchar(255).nullable
```

## Unique Constraint

Use `.unique` to set a unique constraint:

```typescript
.column('email').varchar(255).unique.notNull
```

## Default Value

Use `.default(value)` to set a default value:

```typescript
.column('status').smallint.default(0)
.column('createdAt').timestamp.default('CURRENT_TIMESTAMP')
.column('name').varchar(255).default('Unknown')
```

## Foreign Key Constraints

### Basic Usage

```typescript
.column('authorId').int.notNull.references('users', 'id')
```

### Delete Action

Use `.onDelete(action)` to set the action on delete:

```typescript
.column('authorId').int.notNull
    .references('users', 'id')
    .onDelete('CASCADE')
```

Supported actions:
- `'CASCADE'` - Cascade delete
- `'SET NULL'` - Set to NULL
- `'RESTRICT'` - Restrict delete
- `'NO ACTION'` - No action

### Update Action

Use `.onUpdate(action)` to set the action on update:

```typescript
.column('authorId').int.notNull
    .references('users', 'id')
    .onUpdate('CASCADE')
```

Supported actions:
- `'CASCADE'` - Cascade update
- `'SET NULL'` - Set to NULL
- `'RESTRICT'` - Restrict update
- `'NO ACTION'` - No action

### Complete Example

```typescript
.column('authorId').int.notNull
    .references('users', 'id')
    .onDelete('CASCADE')
    .onUpdate('RESTRICT')
```

## Combining Constraints

You can combine multiple constraints:

```typescript
.column('id').int.primary.autoIncrement
.column('email').varchar(255).unique.notNull
.column('status').smallint.default(0).notNull
.column('authorId').int.notNull.references('users', 'id').onDelete('CASCADE')
```
