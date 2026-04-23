# 💄 Prettier config

Официальные правила форматирования для проектов Oberlev. Строго, чисто, предсказуемо.

## Использование

```bash
pnpm add -D prettier @oberlev/prettier
```

Затем создайте `.prettierrc.js` (или `.mjs`):

```javascript
import { prettier } from '@oberlev/prettier';

export default prettier;
```

## Особенности

- **Hybrid:** Работает в ESM и CJS проектах.
- **Strict:** Одинарные кавычки, точка с запятой и отсутствие лишних запятых.
- **Typed:** Полная поддержка типов из коробки.

## Кастомизация

Если нужно что-то подкрутить под конкретный проект:

```javascript
import { prettier } from '@oberlev/prettier';

export default {
  ...prettier,
  printWidth: 120
};
```
