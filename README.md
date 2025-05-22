# FT - RN Frontend 

React Native con Expo y React Navigation.

---

## 📱 Funcionalidad

La aplicación permite:

- Buscar usuarios en GitHub en tiempo real
- Ver detalles de un usuario seleccionado
- Marcar y desmarcar usuarios como favoritos
- Filtrar la lista por favoritos desde la barra superior
- Borrar rápidamente el input de búsqueda con un botón claro

---

## 🧰 Tecnologías utilizadas

- React Native (Expo)
- React Navigation (Native Stack)
- Context API para estado global de favoritos
- Axios para consumir la API de GitHub
- Lodash (debounce)
- @expo/vector-icons (Ionicons)

---

## 📦 Estructura del proyecto

  src/
  api/               # llamadas a la API de GitHub
  components/        # componentes reutilizables como UserCard
  context/           # manejo de favoritos
  screens/           # Home, Detail, Favorites
  navigation/        # configuración de navegación



## 🚀 Instalación

1. Cloná este repositorio:
....
2. Instalá las dependencias:
    npm install

3. Iniciá el proyecto con Expo:
    npx expo start


## 🧪 Testing 

npm run test         # corre los tests
npm run test:coverage  # corre tests y muestra cobertura











```bash

