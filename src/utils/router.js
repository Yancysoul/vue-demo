import Layout from '@/views/layout'
export function setRouter (menus) {
  var routes = []
  // routes.push({
  //   path: '/',
  //   name: 'layout',
  //   component: Layout,
  //   meta: {
  //     title: '首页',
  //     requireAuth: true,
  //     hide: true
  //   }
  // })
  menus.forEach(menu => {
    if (menu.hasMenue) {
      var route = {}
      route = {
        path: menu.url,
        name: menu.url.split('/')[1],
        meta: {
          title: menu.menuName
        } 
      }
      if (menu.menuList.length > 0) {
        route.children = []
        menu.menuList.forEach(list => {
          if (list.hasMenue) {
            route.children.push([
              {
                path: list.url,
                name: list.url.split('/')[2],
                meta: {
                  title: list.menuName
                }
              }
            ])
          }
        })
      }
      routes.push(route)
    }
  });
  return routes
}