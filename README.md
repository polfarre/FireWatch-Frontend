# FireWatch-Frontend
FireWatch Frontend es la interfaz de usuario de la plataforma FireWatch, diseñada para la monitorización y alerta de incendios a nivel mundial en tiempo real. Utilizando datos de la API de NASA FIRMS, esta aplicación web permite a los usuarios visualizar información actualizada sobre incendios activos.


## Descripción del Proyecto

La página de FireWatch es una herramienta para el seguimiento de casos de incendios en todo España
FireWatch es una aplicación web diseñada para proporcionar información actualizada sobre la situación de los incendios en diferentes regiones de España. Utiliza datos en tiempo real de fuentes confiables para mostrar datos clave como latitud, longitud, temperatura, tamaño, intensidad y la fecha del incendio correspondiente.

## Tecnologías Utilizadas

- Front-end: HTML, CSS, JS, React + Vite.
- API de datos: 
- Página de referencia:
- Mapas: 
- Tablas: fastAPI
- Código Limpio
- Docker
- Vitest: npm install -D vitest
- Leaflet: npm install leaflet 
- Leaflet-geosearch: npm i leaflet-geosearch
- React-leaflet-cluster: npm i react-leaflet-cluster

    
## Guía de instalación 
Como instalar el repo por primera vez:

    Clonar el repositorio de git

    Instalar Docker y Docker Compose:

        Para ubuntu: sudo apt-get update sudo apt-get install
        ca-certificates
        curl
        gnupg
        lsb-release

        sudo mkdir -p /etc/apt/keyrings curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

        echo
        "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu
        $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

        sudo apt-get update sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin

        Para Windows y macOS: Descargar e instalar Docker Desktop desde Docker.

        Instalar Docker Compose (si no está incluido): sudo curl -L "https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose sudo chmod +x /usr/local/bin/docker-compose

        Construir y Ejecutar la Aplicación con Docker:
            Construir y ejecutar los contenedores: docker-compose up --build
            Verificar que la API esté en funcionamiento: Abre tu navegador y navega a http://localhost:8000. Deberías ver la respuesta JSON {"Hello": "World"}.

## Integrantes
- [Asdrubal Bello]@https://github.com/abelloch
- [Ziortza Rey]https://github.com/indiakka
- [Isabel Afonso Guizado]https://github.com/IsaLagu
- [Nacho Rodríguez Martín]https://github.com/NachoR9
- [Paola Perdomo Suarez]https://github.com/Paola077
- [Pol Farré Burgos]https://github.com/polfarre
- [Sofía Ramírez Leiva]https://github.com/sofiaramirez157




