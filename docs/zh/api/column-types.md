# 列类型

## 内置类型方法

### 数值类型

- `.int` - 整数类型
- `.integer` - 整数类型（别名）
- `.smallint` - 小整数类型
- `.bigint` - 大整数类型
- `.float` - 浮点类型
- `.real` - 实数类型
- `.decimal(precision?, scale?)` - 小数类型
- `.numeric(precision?, scale?)` - 数值类型

### 字符串类型

- `.char(length?)` - 固定长度字符串
- `.varchar(length?)` - 可变长度字符串
- `.text` - 文本类型

### JSON 类型

- `.json` - JSON 类型

### 日期时间类型

- `.date` - 日期类型
- `.time` - 时间类型
- `.timestamp` - 时间戳类型

## 数据库特定类型

通过 `type()` 方法使用数据库特定类型：

```typescript
import { FL, ColumnTypes } from 'typeorm-fluent-migrator';

// MySQL 特定类型
.column('id').type(ColumnTypes.MYSQL.BIGINT).primary.autoIncrement
.column('name').type(ColumnTypes.MYSQL.VARCHAR).notNull

// PostgreSQL 特定类型
.column('metadata').type(ColumnTypes.POSTGRES.JSONB).nullable
.column('name').type(ColumnTypes.POSTGRES.CITEXT).notNull

// SQL Server 特定类型
.column('price').type(ColumnTypes.SQL_SERVER.MONEY).nullable
.column('name').type(ColumnTypes.SQL_SERVER.NVARCHAR).notNull

// Oracle 特定类型
.column('content').type(ColumnTypes.ORACLE.CLOB).nullable
.column('id').type(ColumnTypes.ORACLE.NUMBER).primary

// SQLite 特定类型
.column('data').type(ColumnTypes.SQLITE.BLOB).nullable
.column('createdAt').type(ColumnTypes.SQLITE.DATETIME).default('CURRENT_TIMESTAMP')
```

## 支持的数据库类型

### MySQL

`ColumnTypes.MYSQL.*` 包括：`INT`, `BIGINT`, `VARCHAR`, `TEXT`, `JSON`, `DATETIME`, `TIMESTAMP`, `ENUM`, `SET`, `BLOB`, `GEOMETRY`, `VECTOR` 等。

### PostgreSQL

`ColumnTypes.POSTGRES.*` 包括：`INT`, `BIGINT`, `TEXT`, `JSONB`, `CITEXT`, `UUID`, `TIMESTAMPTZ`, `ARRAY`, `GEOMETRY`, `VECTOR` 等。

### SQL Server

`ColumnTypes.SQL_SERVER.*` 包括：`INT`, `BIGINT`, `NVARCHAR`, `NTEXT`, `MONEY`, `DATETIME2`, `UNIQUEIDENTIFIER`, `XML`, `GEOMETRY`, `VECTOR` 等。

### Oracle

`ColumnTypes.ORACLE.*` 包括：`NUMBER`, `VARCHAR2`, `CLOB`, `NCLOB`, `BLOB`, `DATE`, `TIMESTAMP`, `JSON` 等。

### SQLite

`ColumnTypes.SQLITE.*` 包括：`INTEGER`, `TEXT`, `BLOB`, `REAL`, `NUMERIC`, `DATETIME` 等。

### 其他数据库

还支持 CockroachDB、SAP HANA 等数据库的特定类型。

## 使用示例

```typescript
await FL.use(queryRunner)
    .create.table('products')
    .column('id').type(ColumnTypes.MYSQL.BIGINT).primary.autoIncrement
    .column('name').type(ColumnTypes.POSTGRES.TEXT).notNull
    .column('price').type(ColumnTypes.SQL_SERVER.MONEY).nullable
    .column('metadata').type(ColumnTypes.POSTGRES.JSONB).nullable
    .execute();
```
