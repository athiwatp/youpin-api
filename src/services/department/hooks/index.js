const auth = require('feathers-authentication').hooks;

const validateObjectId = require('../../../utils/hooks/validate-object-id-hook');
const {
  EXECUTIVE_ADMIN,
  ORGANIZATION_ADMIN,
  SUPER_ADMIN,
} = require('../../../constants/roles');

exports.before = {
  all: [],
  find: [],
  get: [validateObjectId()],
  create: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToRoles({
      roles: [SUPER_ADMIN, ORGANIZATION_ADMIN, EXECUTIVE_ADMIN],
      fieldName: 'role',
    }),
  ],
  update: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToRoles({
      roles: [SUPER_ADMIN, ORGANIZATION_ADMIN, EXECUTIVE_ADMIN],
      fieldName: 'role',
    }),
  ],
  patch: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToRoles({
      roles: [SUPER_ADMIN, ORGANIZATION_ADMIN, EXECUTIVE_ADMIN],
      fieldName: 'role',
    }),
  ],
  remove: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToRoles({
      roles: [SUPER_ADMIN, ORGANIZATION_ADMIN, EXECUTIVE_ADMIN],
      fieldName: 'role',
    }),
  ],
};

exports.after = {
  all: [],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: [],
};
