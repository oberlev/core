# 🔮 TypeScript config

Официальные TypeScript-конфиги для проектов Oberlev

## Использование

```bash
npm install @oberlev/tsconfig
```

## Варианты

- **React + Vite / Bun / modern bundler**

  ```json
  { "extends": "@oberlev/tsconfig/react" }
  ```

- **Node.js**

  ```json
  { "extends": "@oberlev/tsconfig/node" }
  ```

- **Базовый**

  ```json
  { "extends": "@oberlev/tsconfig" }
  ```

_Можно миксовать:_

```json
{
  "extends": ["@oberlev/tsconfig/base", "@oberlev/tsconfig/react"]
}
```
