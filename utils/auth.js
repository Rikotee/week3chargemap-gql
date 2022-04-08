// dummy function to check authentication (irl: e.g. passport-jwt)
const checkAuth = (req) => {
    return new Promise((resolve, reject) => {
           const user = {
             username: 'tester',
           };
          //const user = false;
          resolve(user);
       });
    };
 
export {checkAuth};