# Task-Manager

Este es un proyecto de aplicación web construido con Django y React.

## Descripción

Este proyecto es una aplicación web que utiliza Django como backend y React como frontend. El archivo `main.jsx` es el punto de entrada de la aplicación React, donde se renderiza el componente principal `App`.

## Instalación

Para instalar y ejecutar este proyecto, sigue estos pasos:

1. Clona el repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias necesarias.

Para el backend:

```sh
pip install -r requirements.txt
```

Para el frontend:

```sh
cd client
npm install
```

## Ejecución

Para ejecutar este proyecto, sigue estos pasos:

1. Asegúrate de que tu entorno virtual esté activado. Si no lo está, puedes activarlo con el siguiente comando en la terminal:

```sh
source venv/bin/activate  # en Linux/Mac
venv\Scripts\activate     # en Windows
```

2. Navega hasta el directorio donde se encuentra el archivo `manage.py` y ejecuta el servidor Django con el siguiente comando:

```sh
python manage.py runserver
```

3. En una nueva terminal, navega hasta el directorio `client/` y ejecuta el cliente con el siguiente comando:

```sh
npm run dev
```

## Contribución

Las contribuciones son bienvenidas. Para contribuir, por favor, haz un fork del repositorio y crea una pull request.
