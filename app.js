// Datos de los módulos
const modules = [
    {
        id: 1,
        number: "01",
        title: "Introducción a Data Engineering",
        icon: "fas fa-rocket",
        description: "Conceptos fundamentales y rol del Data Engineer",
        content: `
            <h2 class="module-title">Introducción a Data Engineering</h2>
            <div class="content-section">
                <h4>¿Qué es Data Engineering?</h4>
                <ul>
                    <li>Disciplina que se enfoca en diseñar, construir y mantener sistemas de datos</li>
                    <li>Prepara datos crudos para análisis y consumo de negocio</li>
                    <li>Garantiza calidad, confiabilidad y escalabilidad de pipelines de datos</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Diferenciación de Roles</h4>
                <ul>
                    <li><strong>Data Engineer:</strong> Construye y mantiene infraestructura de datos</li>
                    <li><strong>Data Analyst:</strong> Explora datos para generar insights</li>
                    <li><strong>Data Scientist:</strong> Desarrolla modelos predictivos</li>
                    <li><strong>BI Specialist:</strong> Crea reportes y dashboards</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>💡 Punto Clave:</strong> El dato necesita ingeniería, no solo consultas. Se requiere gestión de volumen, velocidad y variedad.
            </div>
            <div class="content-section">
                <h4>Video Introductorio</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Cps_hCHJiYg" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 2,
        number: "02",
        title: "Rol y Responsabilidades",
        icon: "fas fa-user-tie",
        description: "Qué hace un Data Engineer en la organización",
        content: `
            <h2 class="module-title">Rol y Responsabilidades del Data Engineer</h2>
            <div class="content-section">
                <h4>Responsabilidades Principales</h4>
                <ul>
                    <li>Diseñar y construir pipelines de datos robustos</li>
                    <li>Seleccionar tecnologías y herramientas apropiadas</li>
                    <li>Optimizar rendimiento y escalabilidad</li>
                    <li>Garantizar calidad y confiabilidad de datos</li>
                    <li>Documentar procesos y arquitectura</li>
                    <li>Colaborar con stakeholders diversos</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Relaciones Interdepartamentales</h4>
                <ul>
                    <li><strong>Con Negocio:</strong> Entender requisitos y traducir a soluciones técnicas</li>
                    <li><strong>Con Analistas:</strong> Proporcionar datos limpios y accesibles</li>
                    <li><strong>Con Científicos de Datos:</strong> Garantizar datos de calidad para modelos</li>
                    <li><strong>Con Arquitectos:</strong> Alinearse con estrategia de plataforma</li>
                    <li><strong>Con DevOps/Plataforma:</strong> Coordinar infraestructura y deployment</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>🎯 Diferencia Clave:</strong> Un pipeline es el código; una solución de datos es todo el ecosistema que permite consumo confiable.
            </div>
            <div class="content-section">
                <h4>Video: Rol del Data Engineer</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/6QnVZRY7gCc" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 3,
        number: "03",
        title: "Ciclo de Vida del Dato",
        icon: "fas fa-sync-alt",
        description: "Journey completo del dato en la organización",
        content: `
            <h2 class="module-title">Ciclo de Vida del Dato</h2>
            <div class="content-section">
                <h4>Etapas del Ciclo</h4>
                <ul>
                    <li><strong>Origen:</strong> Identificar fuentes de datos en la organización</li>
                    <li><strong>Ingesta:</strong> Extraer datos de fuentes heterogéneas</li>
                    <li><strong>Almacenamiento:</strong> Guardar datos de manera segura y eficiente</li>
                    <li><strong>Transformación:</strong> Limpiar, enriquecer y estruturar datos</li>
                    <li><strong>Validación:</strong> Garantizar calidad y consistencia</li>
                    <li><strong>Publicación:</strong> Poner datos disponibles para consumo</li>
                    <li><strong>Consumo:</strong> Utilizar datos en reportes, dashboards, modelos</li>
                    <li><strong>Operación y Monitoreo:</strong> Supervisar health de pipelines</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>Flujo Visual:</strong><br>
                Fuente → Ingesta → Storage → Transformación → Calidad → Consumo → Monitoreo
            </div>
            <div class="content-section">
                <h4>Video: Data Lifecycle</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/VoJGJjjsKI0" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 4,
        number: "04",
        title: "Fuentes y Formatos de Datos",
        icon: "fas fa-database",
        description: "Tipos de datos que ingerimos",
        content: `
            <h2 class="module-title">Tipos de Fuentes de Datos</h2>
            <div class="content-section">
                <h4>Fuentes de Datos Comunes</h4>
                <ul>
                    <li><strong>Bases de Datos:</strong> SQL (PostgreSQL, MySQL), NoSQL (MongoDB)</li>
                    <li><strong>APIs:</strong> REST, GraphQL, SOAP</li>
                    <li><strong>Archivos:</strong> CSV, JSON, Parquet, Avro, Excel</li>
                    <li><strong>Eventos/Mensajería:</strong> Kafka, RabbitMQ, EventHub</li>
                    <li><strong>Logs:</strong> Aplicaciones, sistemas, infraestructura</li>
                    <li><strong>Sistemas Transaccionales:</strong> ERP, CRM, Contabilidad</li>
                    <li><strong>Aplicaciones Externas:</strong> SaaS, marketplaces, redes sociales</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Características de los Formatos</h4>
                <ul>
                    <li><strong>CSV:</strong> Simple, ampliamente soportado, sin esquema fuerte</li>
                    <li><strong>JSON:</strong> Flexible, anidable, ideal para APIs</li>
                    <li><strong>Parquet:</strong> Comprimido, columnar, eficiente para analytics</li>
                    <li><strong>Avro:</strong> Serialización binaria, esquema integrado</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Video: Fuentes de Datos</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/rQgXHQdDDRM" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 5,
        number: "05",
        title: "Batch, Streaming y Event-Driven",
        icon: "fas fa-stream",
        description: "Diferentes paradigmas de procesamiento",
        content: `
            <h2 class="module-title">Tipos de Procesamiento</h2>
            <div class="content-section">
                <h4>Batch Processing</h4>
                <ul>
                    <li>Procesa grandes volúmenes de datos en bloques</li>
                    <li>Ejecución programada (diaria, horaria)</li>
                    <li>Latencia: minutos a horas</li>
                    <li>Ejemplo: procesar logs del día anterior cada mañana</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Streaming Processing</h4>
                <ul>
                    <li>Procesa datos en tiempo real conforme llegan</li>
                    <li>Latencia: milisegundos a segundos</li>
                    <li>Ejemplo: alertas en transacciones fraudulentas</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Event-Driven</h4>
                <ul>
                    <li>Procesamiento disparado por eventos específicos</li>
                    <li>Puede ser batch o streaming</li>
                    <li>Ejemplo: cuando llega un archivo, inicia pipeline</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>💡 Punto Clave:</strong> No todos los procesos necesitan ser en tiempo real. La frecuencia debe responder a la necesidad del negocio.
            </div>
            <div class="content-section">
                <h4>Video: Batch vs Streaming</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/R-1UxCHqGBQ" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 6,
        number: "06",
        title: "ETL vs ELT",
        icon: "fas fa-exchange-alt",
        description: "Paradigmas de integración de datos",
        content: `
            <h2 class="module-title">ETL vs ELT</h2>
            <div class="content-section">
                <h4>ETL (Extract-Transform-Load)</h4>
                <ul>
                    <li>Extraer datos de fuentes</li>
                    <li>Transformar (limpiar, enriquecer) antes de cargar</li>
                    <li>Cargar datos procesados en destino</li>
                    <li>Flujo: Fuente → Transformación → Destino</li>
                    <li>Usado cuando capacidad de transformación es limitada o datos son sensibles</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>ELT (Extract-Load-Transform)</h4>
                <ul>
                    <li>Extraer datos de fuentes</li>
                    <li>Cargar datos crudos rápidamente en destino</li>
                    <li>Transformar dentro del destino (data lake/warehouse)</li>
                    <li>Flujo: Fuente → Almacenamiento → Transformación</li>
                    <li>Aproveча poder de compute moderno (Snowflake, BigQuery, Redshift)</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>📊 Comparación:</strong><br>
                • ETL: Tradicional, transformación fuera de destino, más control<br>
                • ELT: Moderno, aproveча cloud, mejor rendimiento, más flexible
            </div>
            <div class="content-section">
                <h4>Video: ETL vs ELT</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/K0vKlgFBOj8" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 7,
        number: "07",
        title: "Pipelines de Datos",
        icon: "fas fa-sitemap",
        description: "Anatomía y diseño de pipelines",
        content: `
            <h2 class="module-title">Pipelines de Datos</h2>
            <div class="content-section">
                <h4>¿Qué es un Pipeline?</h4>
                <ul>
                    <li>Flujo de trabajo automatizado que mueve y transforma datos</li>
                    <li>Secuencia de tareas interconectadas</li>
                    <li>Puede tener dependencias entre componentes</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Componentes de un Pipeline</h4>
                <ul>
                    <li><strong>Entrada (Source):</strong> Origen del dato</li>
                    <li><strong>Tareas/Jobs:</strong> Unidades de procesamiento</li>
                    <li><strong>Salida (Sink):</strong> Destino del dato</li>
                    <li><strong>Estados:</strong> Éxito, fallo, reintento</li>
                    <li><strong>Logs y Monitoreo:</strong> Traza de ejecución</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Dependencias y DAGs</h4>
                <ul>
                    <li>DAG = Directed Acyclic Graph</li>
                    <li>Tareas se ejecutan basadas en dependencias</li>
                    <li>Permite paralelización donde es posible</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Video: Data Pipelines</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/6QnVZRY7gCc" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 8,
        number: "08",
        title: "Capas de Datos",
        icon: "fas fa-layer-group",
        description: "Arquitectura de capas en data warehouses",
        content: `
            <h2 class="module-title">Capas de Datos</h2>
            <div class="content-section">
                <h4>Estructura de Capas</h4>
                <ul>
                    <li><strong>Raw/Landing:</strong> Datos ingresados sin transformación, estado original</li>
                    <li><strong>Staging:</strong> Limpieza y validación básica, preparación</li>
                    <li><strong>Standard/Trusted:</strong> Datos validados, transformados, confiables</li>
                    <li><strong>Consumption/Data Mart:</strong> Datos adaptados para casos de uso específicos</li>
                    <li><strong>Analytics/Reporting:</strong> Agregaciones y vistas para usuarios finales</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>Flujo Visual:</strong><br>
                Raw → Staging → Standard → Consumption → Reporting
            </div>
            <div class="content-section">
                <h4>Beneficios de la Arquitectura de Capas</h4>
                <ul>
                    <li>Separación de responsabilidades</li>
                    <li>Trazabilidad desde origen a consumo</li>
                    <li>Facilita auditoría y debugging</li>
                    <li>Permite reprocesamiento selectivo</li>
                    <li>Mejora mantenibilidad</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Video: Data Warehouse Architecture</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/LTW3YhC-_C0" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 9,
        number: "09",
        title: "Data Warehouse, Lake y Lakehouse",
        icon: "fas fa-warehouse",
        description: "Arquitecturas de almacenamiento modernas",
        content: `
            <h2 class="module-title">Data Warehouse vs Data Lake vs Lakehouse</h2>
            <div class="content-section">
                <h4>Data Warehouse</h4>
                <ul>
                    <li>Datos estructurados y esquematizados</li>
                    <li>Optimizado para consultas analíticas (OLAP)</li>
                    <li>Alto costo de almacenamiento</li>
                    <li>Requiere ETL previo</li>
                    <li>Ejemplo: Snowflake, Redshift, BigQuery</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Data Lake</h4>
                <ul>
                    <li>Datos estructurados, semiestructurados y no estructurados</li>
                    <li>Bajo costo de almacenamiento</li>
                    <li>Requiere más procesamiento para consumo</li>
                    <li>Riesgo de convertirse en "data swamp" sin gobernanza</li>
                    <li>Ejemplo: HDFS, S3, Data Lake Storage</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Lakehouse (Híbrido)</h4>
                <ul>
                    <li>Combina ventajas de Data Lake y Warehouse</li>
                    <li>Almacenamiento económico con rendimiento de warehouse</li>
                    <li>Esquema en lectura con gobernanza</li>
                    <li>Ejemplo: Delta Lake, Apache Iceberg, Hudi</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Video: Data Warehouse Architecture</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/Sva8S_g3xSA" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 10,
        number: "10",
        title: "Calidad, Trazabilidad e Idempotencia",
        icon: "fas fa-check-circle",
        description: "Pilares de confiabilidad en datos",
        content: `
            <h2 class="module-title">Calidad, Trazabilidad e Idempotencia</h2>
            <div class="content-section">
                <h4>Dimensiones de Calidad de Datos</h4>
                <ul>
                    <li><strong>Completitud:</strong> ¿Están presentes todos los registros esperados?</li>
                    <li><strong>Consistencia:</strong> ¿Los datos son coherentes entre sistemas?</li>
                    <li><strong>Unicidad:</strong> ¿No hay duplicados no intencionales?</li>
                    <li><strong>Validez:</strong> ¿Cumplen los datos el formato esperado?</li>
                    <li><strong>Exactitud:</strong> ¿Los datos representan la realidad?</li>
                    <li><strong>Oportunidad:</strong> ¿Los datos están disponibles cuando se necesitan?</li>
                    <li><strong>Trazabilidad:</strong> ¿Se puede seguir el origen y transformaciones?</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Lineage (Trazabilidad)</h4>
                <ul>
                    <li>Documenta: ¿De dónde viene el dato?</li>
                    <li>Registra: ¿Qué transformaciones sufrió?</li>
                    <li>Mapea: ¿Dónde se consume?</li>
                    <li>Importancia: soporte, auditoría, análisis de impacto</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Idempotencia</h4>
                <ul>
                    <li>Un proceso es idempotente si puede ejecutarse múltiples veces con mismo resultado</li>
                    <li>Fundamental para reintentos y reprocesamiento</li>
                    <li>Evita duplicados y inconsistencias</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>🔑 Frase Clave:</strong> Un pipeline confiable debe poder reejecutarse sin generar inconsistencias.
            </div>
        `
    },
    {
        id: 11,
        number: "11",
        title: "Orquestación y Operación",
        icon: "fas fa-project-diagram",
        description: "Gestión de workflows y operación de datos",
        content: `
            <h2 class="module-title">Orquestación Básica y Operación</h2>
            <div class="content-section">
                <h4>¿Qué es Orquestar?</h4>
                <ul>
                    <li>Ejecutar múltiples tareas siguiendo reglas de dependencia</li>
                    <li>Gestionar timing, reintentos y alertas</li>
                    <li>Diferencia: Script = ejecución única; Orquestador = operación continua</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Aspectos Clave</h4>
                <ul>
                    <li><strong>Scheduling:</strong> Cuándo ejecutar (diario, horario, evento)</li>
                    <li><strong>Dependencias:</strong> Orden de ejecución entre tareas</li>
                    <li><strong>Estados:</strong> Éxito, fallo, skipped, ejecutando</li>
                    <li><strong>Reintentos:</strong> Lógica de reintento ante fallos</li>
                    <li><strong>Alertas:</strong> Notificación de problemas</li>
                    <li><strong>Logs:</strong> Auditoría de ejecuciones</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Herramientas Populares</h4>
                <ul>
                    <li>Apache Airflow - DAGs, flexible, Python</li>
                    <li>dbt - transformaciones, testing, documentación</li>
                    <li>Prefect - cloud-native, flujos modernos</li>
                    <li>Dagster - data engineering framework</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Video: Apache Airflow Basics</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/1WGjgO03TmQ" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    {
        id: 12,
        number: "12",
        title: "Consumo de Datos",
        icon: "fas fa-chart-bar",
        description: "Cómo los usuarios finales utilizan los datos",
        content: `
            <h2 class="module-title">Consumo de Datos y Usuarios Finales</h2>
            <div class="content-section">
                <h4>Formas de Consumo</h4>
                <ul>
                    <li><strong>Reportes:</strong> Documentos estáticos, exportables</li>
                    <li><strong>Dashboards:</strong> Visualizaciones interactivas, KPIs en tiempo real</li>
                    <li><strong>APIs:</strong> Acceso programático para aplicaciones</li>
                    <li><strong>Archivos:</strong> Exportaciones CSV, Parquet para análisis local</li>
                    <li><strong>Modelos Analíticos:</strong> Entrada para machine learning</li>
                    <li><strong>Sistemas Downstream:</strong> Integración con otras plataformas</li>
                </ul>
            </div>
            <div class="content-section">
                <h4>Tipos de Usuarios</h4>
                <ul>
                    <li><strong>Usuarios Técnicos:</strong> Analistas, científicos de datos, engineers</li>
                    <li><strong>Usuarios de Negocio:</strong> Ejecutivos, gerentes, analistas de negocio</li>
                    <li><strong>Sistemas Downstream:</strong> Aplicaciones, ML models, APIs</li>
                </ul>
            </div>
            <div class="highlight">
                <strong>💡 Punto Importante:</strong> El valor del dato aparece cuando puede ser consumido de forma confiable, accesible y a tiempo.
            </div>
            <div class="content-section">
                <h4>Video: Data Visualization Best Practices</h4>
                <div class="video-container">
                    <iframe src="https://www.youtube.com/embed/8EMW7ih4Zac" allowfullscreen></iframe>
                </div>
            </div>
        `
    }
];

// Renderizar módulos
function renderModules() {
    const modulesGrid = document.getElementById('modulesGrid');
    modulesGrid.innerHTML = '';
    
    modules.forEach(module => {
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <div class="module-number">Módulo ${module.number}</div>
            <div class="module-icon"><i class="${module.icon}"></i></div>
            <h3>${module.title}</h3>
            <p>${module.description}</p>
            <button class="btn btn-secondary" onclick="openModal(${module.id})">Ver Contenido</button>
        `;
        modulesGrid.appendChild(card);
    });
}

// Abrir modal
function openModal(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (module) {
        document.getElementById('modalBody').innerHTML = module.content;
        document.getElementById('modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Cerrar modal
function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners para modal
document.addEventListener('DOMContentLoaded', function() {
    renderModules();
    
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    
    closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
});

// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Scroll a módulos
function scrollToModules() {
    document.getElementById('modulos').scrollIntoView({ behavior: 'smooth' });
}

// Smooth scroll para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
