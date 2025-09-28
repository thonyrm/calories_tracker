#  Calorie Tracker con React + TypeScript

Aplicación práctica de **Rastreador de Calorías**, desarrollada con **React + TypeScript** para reforzar conceptos clave de hooks, patrones de estado y buenas prácticas en desarrollo frontend.
La app permite:

- **Registrar calorias consumidas**

- **Registrar calorias perdidas**

- **Ver resumen ejecutivo**

- **Visualizar registros de las actividades**

- **Editar o eliminar registros**

---

## 🚀 Características principales

- 💸 **Visualización de calorías**: Listado dinámico con el registro de todas las actividades realizadas. 
- ⚡ **Rendimiento optimizado** con `useMemo` para cálculos derivados.  
- 🧩 **Gestión de estado avanzada** con  `useReducer`.  
- 🌍 **Estado global centralizado** con `useContext`.  
- 🎨 **UI responsive y moderna** con  **TailwindCSS**.  

---

**Hooks de React aplicados:**
- `useState` → Manejo de estados locales (inputs, selección de categorias, etc).  
- `useReducer` → Lógica del controlador de calorías (añadir, quitar, actualizar ).  
- `useMemo` → Optimización en cálculos de totales(totales).  
- `useContext` → Estado global sin necesidad de prop drilling..
---

## 📂 Estructura del proyecto

```
├─ components/ # Componentes reutilizables 
├─ context/ # Lógica para manejar el estado global ActivityContext
├─ helpers/ # Funciones auxiliares
├─ Hooks/ # Custom hooks (useActivity)
├─ reducer/ # Reducer principal  (activityReducer)
├─ types/ # Definición de types (Category, Expenses, etc.)
├─ data/ # Data local (categorías.)
└─ App.jsx # Punto de entrada principal
```
---

## 🛠️ Tecnologías utilizadas
- [Vite](https://vitejs.dev/) — entorno de desarrollo rápido.
- [React](https://react.dev/) — librería principal.
- [UUID](https://www.npmjs.com/package/uuid) — Identificadores únicos.


---

## 🔧 Setup del proyecto

1. Clonar el repositorio:
   ```
   git clone https://github.com/thonyrm/calories_tracker.git
   ```
2. Instalar dependencias:

    ```
    npm install
    ```

3. Ejecutar en modo desarrollo:
    ```
    npm run dev
    ```

---

## 🌐 Demo en línea
Puedes probar el proyecto funcionando aquí:  
👉 [Calorie Tracker en Netlify](https://https://calories-tracker-thonydev.netlify.app/)