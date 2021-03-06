// Action constants for activity logging
module.exports = {
  // action types
  types: {
    MERGING: 'ACTION_TYPE/MERGING',
    METADATA: 'ACTION_TYPE/METADATA',
    PROGRESS: 'ACTION_TYPE/PROGRESS',
    STATE_TRANSITION: 'ACTION_TYPE/STATE_TRANSITION',
  },
  // actions for state transition type
  ASSIGN: 'STATE_TRANSITION/ASSIGN', // PENDING -> ASSIGNED
  DENY: 'STATE_TRANSITION/DENY', // ASSIGNED -> PENDING
  PROCESS: 'STATE_TRANSITION/PROCESS', // ASSIGNED -> PROCESSING
  REJECT: 'STATE_TRANSITION/REJECT', // PENDING -> REJECT
  RE_OPEN: 'STATE_TRANSITION/RE_OPEN', // RESOLVED/REJECTED -> PENDING
  RE_PROCESS: 'STATE_TRANSITION/RE_PROCESS', // RESOLVED -> PROCESSING
  RESOLVE: 'STATE_TRANSITION/RESOLVE', // PROCESSING -> RESOLVED
  // actions for metadata type
  CREATE_PIN: 'METADATA/CREATE_PIN',
  DELETE_PIN: 'METADATA/DELETE_PIN',
  UPDATE_PIN: 'METADATA/UPDATE_PIN',
  // actions for progress type
  CREATE_PROGRESS: 'PROGRESS/CREATE_PROGRESS',
  DELETE_PROGRESS: 'PROGRESS/DELETE_PROGRESS',
  UPDATE_PROGRESS: 'PROGRESS/UPDATE_PROGRESS',
  // actions for pin merging type
  MERGE_PIN: 'MERGING/MERGE_PIN',
};
