const CONFIG = {
  MATERY_HOME_BANNER_ENABLE: false,
  // 3.14.1以后的版本中，欢迎语在blog.config.js中配置，用英文逗号','隔开多个。
  MATERY_HOME_BANNER_GREETINGS: [
    'Hi，我是一个程序员',
    'Hi，我是一个打工人',
    'Bienvenidos al catalogo 🎉🎉'
  ], // Iconos grandes y texto en la página de inicio

  MATERY_HOME_NAV_BUTTONS: true, // ¿Deberían mostrarse los botones con iconos de categorías grandes en la página de inicio?
  MATERY_HOME_NAV_BACKGROUND_IMG_FIXED: false, // Indica si la imagen de fondo de la página de inicio permanece fija al desplazarse: verdadero significa que la imagen no cambia durante el desplazamiento; falso significa que se desplaza con el ratón.

  // ¿Debería mostrarse el botón "Comenzar a leer"?
  MATERY_SHOW_START_READING: true,

  // Configuración del menú
  MATERY_MENU_CATEGORY: true, // Mostrar categorías
  MATERY_MENU_TAG: true, // Mostrar etiquetas
  MATERY_MENU_ARCHIVE: true, // Mostrar archivos
  MATERY_MENU_SEARCH: true, // Mostrar búsqueda

  MATERY_POST_LIST_COVER: true, // Portada del artículo
  MATERY_POST_LIST_SUMMARY: true, // Resumen del artículo
  MATERY_POST_LIST_PREVIEW: true, // Lea la vista previa del artículo

  MATERY_ARTICLE_ADJACENT: true, // Mostrar artículo anterior, artículo siguiente, recomendaciones
  MATERY_ARTICLE_COPYRIGHT: false, // Aviso de derechos de autor del artículo: verdadero Mostrar todo; falso Ocultar todo; personalizado Mostrar solo cuando se ingresen los derechos de autor.
  MATERY_ARTICLE_NOT_BY_AI: false, // Mostrar escritura no generada por IA
  MATERY_ARTICLE_RECOMMEND: true, // Artículos relacionados

  MATERY_WIDGET_LATEST_POSTS: true, // Mostrar tarjeta de artículos más recientes
  MATERY_WIDGET_ANALYTICS: false, // Tarjeta de estadísticas de visualización
  MATERY_WIDGET_TO_TOP: true,
  MATERY_WIDGET_TO_COMMENT: false, // 跳到评论区
  WIDGET_DARK_MODE: true, // Modo nocturno
  MATERY_WIDGET_TOC: true // Directorio flotante móvil
}
export default CONFIG
