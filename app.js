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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=Cps_hCHJiYg" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=6QnVZRY7gCc" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=VoJGJjjsKI0" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=rQgXHQdDDRM" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=R-1UxCHqGBQ" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=K0vKlgFBOj8" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=6QnVZRY7gCc" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=LTW3YhC-_C0" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=Sva8S_g3xSA" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=1WGjgO03TmQ" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
            <p style="margin: 1rem 0; text-align: center;"><a href="https://www.youtube.com/watch?v=8EMW7ih4Zac" target="_blank" style="color: #6366f1; text-decoration: none; font-weight: 600; font-size: 0.95rem;">🎥 Ver video en YouTube</a></p>
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
// Estado de usuario y progreso
let currentUser = null;
let progress = {}; // { moduleId: true }
let currentPlayer = null;
let quizResult = null;

function getParticipants() {
    try {
        return JSON.parse(localStorage.getItem('smartd_participants') || '[]');
    } catch (error) {
        return [];
    }
}

function addParticipant(email) {
    if (!email) return;
    const participants = getParticipants();
    if (!participants.includes(email)) {
        participants.push(email);
        localStorage.setItem('smartd_participants', JSON.stringify(participants));
    }
}

function getParticipantSummary(email) {
    let progressData = {};
    const rawProgress = localStorage.getItem(`smartd_progress_${email}`);
    try {
        progressData = rawProgress ? JSON.parse(rawProgress) : {};
    } catch (error) {
        progressData = {};
    }
    const modulesCompleted = Object.values(progressData).filter(v => v).length;
    let quizData = null;
    try {
        quizData = JSON.parse(localStorage.getItem(`smartd_quiz_result_${email}`) || 'null');
    } catch (error) {
        quizData = null;
    }
    return {
        email,
        modulesCompleted,
        quizPassed: quizData ? (quizData.passed ? 'Aprobada' : 'No aprobada') : 'Pendiente',
        score: quizData ? quizData.score : '-',
        date: quizData ? new Date(quizData.date).toLocaleString() : '-'
    };
}

function renderParticipantsTable() {
    const participants = getParticipants();
    const tbody = document.getElementById('participantsTableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    if (!participants.length) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:1rem;">Aún no hay participantes registrados.</td></tr>`;
        return;
    }
    participants.forEach(email => {
        const summary = getParticipantSummary(email);
        tbody.innerHTML += `
            <tr>
                <td>${summary.email}</td>
                <td>${summary.modulesCompleted}/12</td>
                <td>${summary.score}</td>
                <td>${summary.quizPassed}</td>
                <td>${summary.date}</td>
            </tr>
        `;
    });
}

const quizQuestions = [
    {
        question: "¿Cuál es el rol principal de un Data Engineer?",
        options: [
            { text: "Construir y mantener pipelines de datos", correct: true },
            { text: "Diseñar dashboards de negocio", correct: false },
            { text: "Crear modelos de machine learning", correct: false },
            { text: "Realizar auditorías financieras", correct: false }
        ]
    },
    {
        question: "¿Qué etapa describe mejor la ingesta de datos?",
        options: [
            { text: "Extraer datos de fuentes y llevarlos al sistema", correct: true },
            { text: "Visualizar datos en un dashboard", correct: false },
            { text: "Crear modelos predictivos", correct: false },
            { text: "Enviar reportes a los clientes", correct: false }
        ]
    },
    {
        question: "¿Cuál es una ventaja clave del procesamiento streaming?",
        options: [
            { text: "Procesar datos en tiempo real conforme llegan", correct: true },
            { text: "Reducir el tamaño de los datos crudos", correct: false },
            { text: "Eliminar la necesidad de almacenamiento", correct: false },
            { text: "Garantizar que no haya errores", correct: false }
        ]
    },
    {
        question: "¿Qué significa ETL?",
        options: [
            { text: "Extract, Transform, Load", correct: true },
            { text: "Encrypt, Transfer, Log", correct: false },
            { text: "Extract, Transfer, Link", correct: false },
            { text: "Evaluate, Transform, Load", correct: false }
        ]
    },
    {
        question: "¿Qué describe mejor un Data Lakehouse?",
        options: [
            { text: "Una arquitectura híbrida entre data lake y data warehouse", correct: true },
            { text: "Un tipo de base de datos relacional", correct: false },
            { text: "Un pipeline batch", correct: false },
            { text: "Un servicio de visualización", correct: false }
        ]
    },
    {
        question: "¿Cuál es el objetivo de la idempotencia en datos?",
        options: [
            { text: "Permitir ejecutar procesos múltiples veces sin efectos duplicados", correct: true },
            { text: "Aumentar la velocidad de procesamiento", correct: false },
            { text: "Reducir el volumen de datos", correct: false },
            { text: "Eliminar la validación de datos", correct: false }
        ]
    },
    {
        question: "¿Qué representa la capa Raw en una arquitectura por capas?",
        options: [
            { text: "Datos en su forma original, sin transformar", correct: true },
            { text: "Datos listos para consumo", correct: false },
            { text: "Reportes entregables", correct: false },
            { text: "Modelos analíticos", correct: false }
        ]
    },
    {
        question: "¿Qué es un DAG en orquestación?",
        options: [
            { text: "Un grafo acíclico dirigido que define dependencias", correct: true },
            { text: "Un tipo de almacén de datos", correct: false },
            { text: "Un modelo de visualización", correct: false },
            { text: "Una plataforma de streaming", correct: false }
        ]
    },
    {
        question: "¿Cuál es el principal beneficio de un data warehouse?",
        options: [
            { text: "Consultas analíticas rápidas sobre datos estructurados", correct: true },
            { text: "Almacenamiento sin esquema", correct: false },
            { text: "Procesamiento en tiempo real", correct: false },
            { text: "Generar logs de eventos", correct: false }
        ]
    },
    {
        question: "¿Qué busca la trazabilidad de datos?",
        options: [
            { text: "Seguir el origen y transformaciones de un dato", correct: true },
            { text: "Reducir el número de fuentes de datos", correct: false },
            { text: "Aumentar la velocidad de carga", correct: false },
            { text: "Crear dashboards automáticamente", correct: false }
        ]
    },
    {
        question: "¿Cuál es el propósito principal de la operación en un pipeline?",
        options: [
            { text: "Supervisar y mantener la ejecución correcta del flujo de datos", correct: true },
            { text: "Diseñar modelos de datos", correct: false },
            { text: "Almacenar archivos en disco", correct: false },
            { text: "Transformar informes en gráficos", correct: false }
        ]
    },
    {
        question: "¿Cuál es la mejor descripción de consumo de datos?",
        options: [
            { text: "Uso de datos por usuarios finales, dashboards y APIs", correct: true },
            { text: "Almacenamiento de datos crudos", correct: false },
            { text: "Creación de ETLs", correct: false },
            { text: "Auditoría de datos", correct: false }
        ]
    }
];

function renderModules() {
    const modulesGrid = document.getElementById('modulesGrid');
    modulesGrid.innerHTML = '';
    
    modules.forEach(module => {
        const done = progress[module.id];
        const card = document.createElement('div');
        card.className = 'module-card';
        card.innerHTML = `
            <div class="module-number">Módulo ${module.number}</div>
            <div class="module-icon"><i class="${module.icon}"></i></div>
            <h3>${module.title}</h3>
            <p>${module.description}</p>
            ${done ? '<div style="margin:8px 0; color:var(--success); font-weight:700;">✅ Completado</div>' : ''}
            <button class="btn btn-secondary" onclick="openModal(${module.id})">Ver Contenido</button>
        `;
        modulesGrid.appendChild(card);
    });
    updateUserArea();
    renderParticipantsTable();
}

// Abrir modal
function openModal(moduleId) {
    const module = modules.find(m => m.id === moduleId);
    if (module) {
        // add a mark-as-seen button and data attribute so we can init the player
        const content = module.content + `
            <div style="text-align:center; margin-top:1rem;">
                <button id="markSeenBtn" class="btn btn-primary">Marcar como visto</button>
            </div>
        `;
        document.getElementById('modalBody').innerHTML = content;
        document.getElementById('modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
        // initialize video player detection and button handler
        setTimeout(() => initModuleModal(moduleId), 300);
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

// -------------------------
// Auth / Progress helpers
// -------------------------
function storageKeyFor(email) {
    return `smartd_progress_${email}`;
}

function saveProgress() {
    if (!currentUser) return;
    const key = storageKeyFor(currentUser);
    localStorage.setItem(key, JSON.stringify(progress));
    renderParticipantsTable();
}

function saveQuizResult() {
    if (!currentUser || !quizResult) return;
    const key = `smartd_quiz_result_${currentUser}`;
    localStorage.setItem(key, JSON.stringify(quizResult));
    renderParticipantsTable();
}

async function loadProgressFor(email) {
    const key = storageKeyFor(email);
    const raw = localStorage.getItem(key);
    try {
        progress = raw ? JSON.parse(raw) : {};
    } catch (e) {
        progress = {};
    }
    loadQuizResultFor(email);
}

function loadQuizResultFor(email) {
    const key = `smartd_quiz_result_${email}`;
    const raw = localStorage.getItem(key);
    try {
        quizResult = raw ? JSON.parse(raw) : null;
    } catch (e) {
        quizResult = null;
    }
}

function updateUserArea() {
    const ua = document.getElementById('userArea');
    if (!ua) return;
    ua.innerHTML = '';
    if (currentUser) {
        const completed = Object.keys(progress).filter(k => progress[k]).length;
        const quizLabel = quizResult && quizResult.passed ? 'Prueba aprobada' : 'Prueba pendiente';
        const quizColor = quizResult && quizResult.passed ? 'var(--success)' : 'var(--primary-color)';
        ua.innerHTML = `<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span style="font-weight:600;color:var(--secondary-color)">${currentUser}</span><span style="background:var(--primary-color);color:white;padding:6px 10px;border-radius:20px;font-size:0.9rem">${completed}/12</span><span style="background:${quizColor};color:white;padding:6px 10px;border-radius:20px;font-size:0.9rem">${quizLabel}</span><button class="btn" id="logoutBtn">Salir</button></div>`;
        document.getElementById('logoutBtn').addEventListener('click', () => { logout(); });
    } else {
        ua.innerHTML = `<button class="btn btn-primary" id="loginBtn">Iniciar sesión</button>`;
        const b = document.getElementById('loginBtn');
        if (b) b.addEventListener('click', promptLogin);
    }
}

async function promptLogin() {
    const email = prompt('Ingresa tu correo SMARTD para identificarte:');
    if (!email || !email.includes('@')) return alert('Correo inválido');
    currentUser = email.trim().toLowerCase();
    addParticipant(currentUser);
    await loadProgressFor(currentUser);
    rememberUser(currentUser);
    updateUserArea();
    renderModules();
}

function logout() {
    currentUser = null;
    progress = {};
    quizResult = null;
    localStorage.removeItem('smartd_user_email');
    updateUserArea();
    renderModules();
}

// Initialize login area on load
document.addEventListener('DOMContentLoaded', async function() {
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) loginBtn.addEventListener('click', promptLogin);
    const testLink = document.getElementById('testLink');
    if (testLink) testLink.addEventListener('click', function(e){ e.preventDefault(); openQuizModal(); });
    // If already have a saved user (optional), try to restore
    const savedUser = localStorage.getItem('smartd_user_email');
    if (savedUser) {
        currentUser = savedUser;
        addParticipant(currentUser);
        await loadProgressFor(currentUser);
    }
    updateUserArea();
    renderParticipantsTable();
});

// Keep a record of logged email (optional)
function rememberUser(email) {
    localStorage.setItem('smartd_user_email', email);
}

// -------------------------
// Video player integration
// -------------------------
function initModuleModal(moduleId) {
    // attach mark button
    const markBtn = document.getElementById('markSeenBtn');
    if (markBtn) {
        markBtn.onclick = function() {
            markModuleComplete(moduleId);
        };
    }

    // find iframe and attach YT player
    const iframe = document.querySelector('#modal iframe');
    if (iframe) {
        // ensure id
        iframe.id = 'ytplayer';
        if (window.YT && YT.Player) {
            if (currentPlayer && currentPlayer.destroy) currentPlayer.destroy();
            currentPlayer = new YT.Player('ytplayer', {
                events: {
                    'onStateChange': function(event) {
                        if (event.data === YT.PlayerState.ENDED) {
                            markModuleComplete(moduleId);
                        }
                    }
                }
            });
        } else {
            // wait for API
            const t = setInterval(() => {
                if (window.YT && YT.Player) {
                    clearInterval(t);
                    initModuleModal(moduleId);
                }
            }, 300);
        }
    }
}

function markModuleComplete(moduleId) {
    if (!currentUser) {
        const ok = confirm('Debes iniciar sesión para guardar tu progreso. ¿Deseas iniciar sesión ahora?');
        if (ok) { promptLogin(); }
        return;
    }
    progress[moduleId] = true;
    saveProgress();
    renderModules();
    // give feedback
    const markBtn = document.getElementById('markSeenBtn');
    if (markBtn) markBtn.textContent = 'Visto ✅';
    checkOnboardingComplete();
}

function checkOnboardingComplete() {
    const total = modules.length;
    const done = Object.keys(progress).filter(k => progress[k]).length;
    if (done >= total) {
        // require passing quiz to mark onboarding complete
        alert('Has completado los 12 módulos. Ahora realiza la prueba final (Prueba).');
    }
}

// -------------------------
// Quiz / Test final
// -------------------------
function openQuizModal() {
    if (!currentUser) {
        const ok = confirm('Debes iniciar sesión para realizar la prueba. ¿Deseas iniciar sesión ahora?');
        if (ok) promptLogin();
        return;
    }
    let html = `<h2 class="module-title">Prueba Final - Onboarding</h2>`;
    html += `<form id="quizForm">`;
    quizQuestions.forEach((q, idx) => {
        const qid = `q${idx+1}`;
        html += `<div class="content-section"><h4>Pregunta ${idx+1}: ${q.question}</h4>`;
        q.options.forEach((opt, optionIndex) => {
            html += `<label style="display:block; margin-bottom:0.5rem;"><input type="radio" name="${qid}" value="${optionIndex}" required> ${opt.text}</label>`;
        });
        html += `</div>`;
    });
    html += `<div style="text-align:center;margin-top:1rem;"><button type="submit" class="btn btn-secondary">Enviar Prueba</button></div>`;
    html += `</form>`;

    document.getElementById('modalBody').innerHTML = html;
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';

    document.getElementById('quizForm').addEventListener('submit', function(e){
        e.preventDefault();
        gradeQuiz();
    });
}

function gradeQuiz() {
    const form = document.getElementById('quizForm');
    if (!form) return;
    const total = quizQuestions.length;
    let correct = 0;
    quizQuestions.forEach((q, idx) => {
        const qid = `q${idx+1}`;
        const val = form[qid] && parseInt(form[qid].value, 10);
        if (typeof val === 'number' && q.options[val] && q.options[val].correct) correct++;
    });
    const score = Math.round((correct / total) * 100);
    quizResult = {
        passed: score >= 70,
        score,
        correct,
        total,
        date: new Date().toISOString()
    };
    saveQuizResult();
    updateUserArea();
    alert(`Obtuviste ${score}% (${correct}/${total}).`);
    if (score >= 70) {
        localStorage.setItem(`smartd_onboarding_complete_${currentUser}`, 'true');
        alert('¡Felicidades! Has aprobado la prueba. Onboarding completado.');
        closeModal();
    } else {
        alert('No alcanzaste el puntaje mínimo (70%). Revisa los módulos y vuelve a intentar.');
    }
}

