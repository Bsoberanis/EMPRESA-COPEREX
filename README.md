# 🏢 COPEREX_EMPRESAS_MANAGER 🏢
**API para la gestión de empresas y clientes que desean participar en INTERFER**

---

## 🔑 VARIABLES DE ENTORNO 🔑

Crea un archivo `.env` en el directorio raíz y agrega las siguientes variables:

```env
MONGO_URI=<tu_cadena_de_conexión_mongodb>
PORT=<tu_puerto_del_servidor>
JWT_SECRET=<tu_secreto_jwt>
```

---

## 🚀 PRERREQUISITOS 🚀

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14+ recomendado)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

---

## 🔧 INSTALACIÓN 🔧

Sigue estos pasos para configurar el proyecto localmente:

1. **Crea una carpeta local para el proyecto**
   ```cmd
   mkdir nombre-carpeta  
   ```
2. **Accede a la carpeta creada**
   ```cmd
   cd nombre-carpeta
   ```
3. **Clona el repositorio**
   ```cmd
   git clone <ENLACE_REPOSITORIO_GITHUB>
   ```
4. **Entra al directorio del proyecto clonado**
   ```cmd
   cd nombre-del-proyecto
   ```
5. **Abre el código fuente en tu editor**
   ```cmd
   code .
   ```
6. **Instala las dependencias**
   ```cmd
   npm i
   ```
7. **Inicia el proyecto en modo desarrollo**
   ```cmd
   npm run dev
   ```

---

## 🌐 ENDPOINTS DE LA API 🌐

### 📝 Registrar Administrador(es)
- **URL:** `/empresasManager/v1/auth/registerusers`
- **Método:** `POST`
- **Cuerpo:**
  ```json
  {
    "name": "string",
    "surname": "string",
    "username": "string",
    "email": "string",
    "password": "string",
    "role": "string"
  }
  ```

### 🔓 Inicio de Sesión
- **URL:** `/empresasManager/v1/auth/login`
- **Método:** `POST`
- **Cuerpo:**
  ```json
  {
    "email": "string",
    "username": "string",
    "password": "string"
  }
  ```

### 💼 Gestión de Empresas 💼

#### 📋 Registro de Empresa
- **URL:** `/empresasManager/v1/company/registerCompany`
- **Método:** `POST`
- **Cuerpo:**
  ```json
  {
    "nivelImpacto": "string",
    "anosTrayectoria": "string",
    "categoriaEmpresarial": "string",
    "nombreEmpresa": "string"
  }
  ```

#### ➤ Listado de Empresas
- **URL:** `/empresasManager/v1/company/listCompanies`
- **Método:** `GET`

#### ✏️ Edición de Empresa
- **URL:** `/empresasManager/v1/company/editCompany/:uid`
- **Método:** `PUT`
- **Cuerpo:**
  ```json
  {
    "nombreEmpresa": "string",
    "nivelImpacto": "string",
    "anosTrayectoria": "string",
    "categoriaEmpresarial": "string"
  }
  ```

#### 🔍 Filtro de Empresas
- **URL:** `/empresasManager/v1/company/filtroEmpresas`
- **Método:** `GET`
- **Parámetros:**
  - **Filtrar por años de trayectoria:** `?anosTrayectoria=numero`
  - **Orden ascendente (A-Z):** `?orden=asc`
  - **Orden descendente (Z-A):** `?orden=desc`

#### 📊 Exportar Listado de Empresas en Excel
- **URL:** `/empresasManager/v1/company/listCompaniesExcel`
- **Método:** `GET`
- **Descripción:** Exporta todas las empresas en un archivo Excel. Guarda la respuesta del endpoint como un archivo con extensión `.xlsx`.

---

## 🛣️🌐 Rutas Generales de la API 🛣️🌐

- **Registrar Administrador(es):** `http://localhost:3001/empresasManager/v1/auth/registerusers`
- **Inicio de Sesión:** `http://localhost:3001/empresasManager/v1/auth/login`
- **Registro de Empresa:** `http://localhost:3001/empresasManager/v1/company/registerCompany`
- **Listado de Empresas:** `http://localhost:3001/empresasManager/v1/company/listCompanies`
- **Editar Empresa:** `http://localhost:3001/empresasManager/v1/company/editCompany/:uid`
- **Exportar Empresas en Excel:** `http://localhost:3001/empresasManager/v1/company/listCompaniesExcel`
- **Filtrar Empresas:** `http://localhost:3001/empresasManager/v1/company/filtroEmpresas`

-------------------------------------------------------------------------

👨🏻‍💼 **Desarrollador Principal:** [GitHub](https://github.com/Bsoberanis)

