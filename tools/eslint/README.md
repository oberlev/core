# 🛡️ ESLint config

Ультимативный конфиг для проектов Oberlev. Базируется на пресете `antfu`, включает в себя кастомные правила и строгую типизацию.

## Использование

```bash
pnpm add -D eslint @oberlev/eslint
```

Затем создайте `eslint.config.js`:

```javascript
import { eslint } from '@oberlev/eslint';

export default eslint({
  typescript: 'engine', // Включает Type-Aware правила
  stylistic: true // Включает правила форматирования
});
```

## Пресеты для фреймворков

Чтобы не раздувать конфиг, специфичные правила вынесены в отдельные точки входа:

- Next.js

  ```javascript
  import { next } from '@oberlev/eslint/next';
  export default next();
  ```

- Vue

```javascript
import { vue } from '@oberlev/eslint/vue';
export default vue();
```

## Особенности

- **Rewrite:** Все правила плагинов (tailwind, playwright, css) переписаны под префикс `oberlev/` для чистоты.
- **Engine Mode:** Режим `typescript: 'engine'` автоматически подключает сервис типов (требует `tsconfig.json`).
- **Custom Rules:** Включает `oberlev/function-component-definition` для принудительного использования стрелочных функций в компонентах.

## Настройка правил

Вы можете легко расширять конфиг:

```javascript
export default eslint(
  {
    react: true
  },
  {
    rules: {
      'no-console': 'error'
    }
  }
);
```
