export default {

    hostname: 'http://rapapi.org/mockjsdata/18498',

    //    - AppAPI.recipes.get()
    //    - AppAPI.users.post()
    //    - AppAPI.favourites.patch()
    //    - AppAPI.blog.delete()
    endpoints: new Map([
          ['recipes', '/recipes'],
          ['meals', '/meals']
    ]),

    // Which 'endpoint' key deals with our tokens?
    tokenKey: 'login',
};
