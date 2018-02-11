'use strict';
module.exports = {
  NODE_ENV: '"production"',
  LYNLAB_BACKEND_HOST: `"${process.env.LYNLAB_BACKEND_HOST}"` || '"https://backend.lynlab.co.kr"',
};
