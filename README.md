# BingoApp

BingoApp es una aplicación interactiva diseñada para gestionar partidas de bingo de 90 números. Permite realizar las siguientes funciones:

- 🎲 Mostrar las bolas sorteadas y llevar un registro visual de los números salidos.
- ✅ Comprobar si una línea o un bingo es válido según los cartones almacenados en un archivo JSON.
- 💰 Proporcionar un cálculo automático del premio basado en el total recaudado por la venta de tickets.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes:
- 📦 Node.js (v18 o superior)
- 🚀 PNPM (v8 o superior)

## Instalación

1. 🛠️ Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/daljo25/BingoApp.git
   ```

2. 📂 Navega al directorio del proyecto:
   ```bash
   cd BingoApp
   ```

3. 📥 Instala las dependencias utilizando PNPM:
   ```bash
   pnpm install
   ```

## Ejecución en desarrollo

Para correr la aplicación localmente, ejecuta el siguiente comando:
```bash
pnpm dev
```

Esto iniciará el servidor de desarrollo. Por defecto, la aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Construcción para producción

Si deseas construir la aplicación para producción, utiliza:
```bash
pnpm build
```

## Previsualización de la versión construida

Después de construir la aplicación, puedes previsualizarla con:
```bash
pnpm preview
```

## Notas importantes

- ❌ Esta aplicación **no incluye un generador de tickets**. Para jugar, necesitas tener tickets físicos que cumplan con el formato de Bingo Inglés:
  - 90 números.
  - 3 filas y 9 columnas.
  - Cada fila contiene 5 números y 4 espacios en blanco.
  - Los tickets deben estar **serializados**.
- 🗂️ Si deseas utilizar los botones de validación, debes cargar los tickets en el archivo `libs/tickets.ts`.

## Tecnologías utilizadas

- ⚛️ **Next.js**: Framework de React para aplicaciones web modernas.
- 🎨 **Tailwind CSS**: Framework para diseño de interfaces.
- 🧩 **ShadCN**: Componentes accesibles y personalizables.

## Contribución

Si deseas contribuir al desarrollo de BingoApp, sigue estos pasos:
1. 🍴 Haz un fork del repositorio.
2. 🌱 Crea una rama para tu funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. ✏️ Realiza tus cambios y confirma los commits:
   ```bash
   git commit -m "Descripción de los cambios"
   ```
4. 🔄 Envía tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. 📬 Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [Licencia MIT con atribución](LICENSE).

Es importante mantener los créditos al autor original al utilizar, modificar o distribuir este software. ¡Gracias por respetarlo! 😊

---

¡Gracias por usar BingoApp! 🎉 Si tienes alguna duda o sugerencia, no dudes en abrir un issue en el repositorio.
