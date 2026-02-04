export type SiteItemType = 'pagina' | 'seccion';

export type SiteItem = {
    id: string;
    title: string;
    description: string;
    path: string;  //ruta angular ejemplo: '/menu'
    type: string;  //para filtrar (busqueda avanzada)
    section: string;  //para filtrar por tema o seccion
    keywords: string[];  //busqueda simple
    otro?: string;  //el simbolo de ? indica que el atributo puede ser opocional
};

export const SITE_INDEX: SiteItem[] = [
    {
        id: 'inicio',
        title: 'Inicio',
        description: 'Pagina principal del sitio de practica',
        path: '/',
        type: 'pagina',
        section: 'estructura del sitio',
        keywords: ['incio', 'home','principal','estructura'],
        otro: "asdasd"
    },
    {
       id: 'elementos',
        title: 'elementos del sitio',
        description: 'Identifica los elementos que componen el sitio web',
        path: '/elementos',
        type: 'pagina',
        section: 'estructura del sitio',
        keywords: ['elemetos', 'sitio','header','footer','main','layout'],
        otro: "asdasd" 
    },
    {
        id: 'menu',
        title: 'Menu',
        description: 'Elementos principales del menu web y su utilidad',
        path: '/menu',
        type: 'pagina',
        section: 'Navegacion',
        keywords: ['menu', 'navegacion','navbar','links','persistente'],
    },
    {
         id: 'breadcrumbs',
        title: 'BreadCrumbs',
        description: 'Describe el uncionamiento y utilidad de los breadcrumbs',
        path: '/breadcrumbs',
        type: 'pagina',
        section: 'Navegacion',
        keywords: ['breadcrumbs', 'migas','ruta','navegacion','ux'],
    },
    {
         id: 'mapa',
        title: 'Mapa del sitio',
        description: 'Diseño del mapa del sitio y relación con la navegación',
        path: '/mapa-sitio',
        type: 'pagina',
        section: 'Estructura del sitio',
        keywords: ['mapa', 'sitio','sistemap','navegacion','ux'],

    },
    {
     id: 'error404',
        title: 'Error 404',
        description: 'Pagina para utas existentes. (404)',
        path: '/no-existe',
        type: 'seccion',
        section: 'Errores',
        keywords: ['404', 'error','no encontrado','ruta'],
    }


]