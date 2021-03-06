const DEPARTMENT_SUPER_ADMIN_ID = require('./constants').DEPARTMENT_SUPER_ADMIN_ID;
const USER_SUPER_ADMIN_ID = require('./constants').USER_SUPER_ADMIN_ID;
// roles
const SUPER_ADMIN = require('../../src/constants/roles').SUPER_ADMIN;

module.exports = {
  _id: USER_SUPER_ADMIN_ID,
  name: 'YouPin Super Admin',
  phone: '081-985-2586',
  fb_id: 'youpin_fb_id',
  // hash of 'youpin_admin' password
  password: '$2a$10$iorOMFOPboPeF20W20DKruey2UXXa4eOQSuReOMlxXnqNe5t6Egaq',
  email: 'super_admin@youpin.city',
  department: DEPARTMENT_SUPER_ADMIN_ID,
  role: SUPER_ADMIN,
};
