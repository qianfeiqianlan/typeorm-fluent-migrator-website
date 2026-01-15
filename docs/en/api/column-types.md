# Column Types

## Built-in Type Methods

### Numeric Types

- `.int` - Integer type
- `.integer` - Integer type (alias)
- `.smallint` - Small integer type
- `.bigint` - Big integer type
- `.float` - Float type
- `.real` - Real type
- `.decimal(precision?, scale?)` - Decimal type
- `.numeric(precision?, scale?)` - Numeric type

### String Types

- `.char(length?)` - Fixed-length character string
- `.varchar(length?)` - Variable character string
- `.text` - Text type

### JSON Type

- `.json` - JSON type

### Date and Time Types

- `.date` - Date type
- `.time` - Time type
- `.timestamp` - Timestamp type

## Database-Specific Types

Use database-specific types via the `type()` method:

```typescript
import { FL, ColumnTypes } from 'typeorm-fluent-migrator';

// MySQL-specific types
.column('id').type(ColumnTypes.MYSQL.BIGINT).primary.autoIncrement
.column('name').type(ColumnTypes.MYSQL.VARCHAR).notNull

// PostgreSQL-specific types
.column('metadata').type(ColumnTypes.POSTGRES.JSONB).nullable
.column('name').type(ColumnTypes.POSTGRES.CITEXT).notNull

// SQL Server-specific types
.column('price').type(ColumnTypes.SQL_SERVER.MONEY).nullable
.column('name').type(ColumnTypes.SQL_SERVER.NVARCHAR).notNull

// Oracle-specific types
.column('content').type(ColumnTypes.ORACLE.CLOB).nullable
.column('id').type(ColumnTypes.ORACLE.NUMBER).primary

// SQLite-specific types
.column('data').type(ColumnTypes.SQLITE.BLOB).nullable
.column('createdAt').type(ColumnTypes.SQLITE.DATETIME).default('CURRENT_TIMESTAMP')
```

## Supported Database Types

### MySQL

`ColumnTypes.MYSQL.*` includes: `INT`, `BIGINT`, `VARCHAR`, `TEXT`, `JSON`, `DATETIME`, `TIMESTAMP`, `ENUM`, `SET`, `BLOB`, `GEOMETRY`, `VECTOR`, and more.

### PostgreSQL

`ColumnTypes.POSTGRES.*` includes: `INT`, `BIGINT`, `TEXT`, `JSONB`, `CITEXT`, `UUID`, `TIMESTAMPTZ`, `ARRAY`, `GEOMETRY`, `VECTOR`, and more.

### SQL Server

`ColumnTypes.SQL_SERVER.*` includes: `INT`, `BIGINT`, `NVARCHAR`, `NTEXT`, `MONEY`, `DATETIME2`, `UNIQUEIDENTIFIER`, `XML`, `GEOMETRY`, `VECTOR`, and more.

### Oracle

`ColumnTypes.ORACLE.*` includes: `NUMBER`, `VARCHAR2`, `CLOB`, `NCLOB`, `BLOB`, `DATE`, `TIMESTAMP`, `JSON`, and more.

### SQLite

`ColumnTypes.SQLITE.*` includes: `INTEGER`, `TEXT`, `BLOB`, `REAL`, `NUMERIC`, `DATETIME`, and more.

### Other Databases

Also supports specific types for CockroachDB, SAP HANA, and more.

## Usage Example

```typescript
await FL.use(queryRunner)
    .create.table('products')
    .column('id').type(ColumnTypes.MYSQL.BIGINT).primary.autoIncrement
    .column('name').type(ColumnTypes.POSTGRES.TEXT).notNull
    .column('price').type(ColumnTypes.SQL_SERVER.MONEY).nullable
    .column('metadata').type(ColumnTypes.POSTGRES.JSONB).nullable
    .execute();
```
