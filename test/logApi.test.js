'use strict';

const {
  DobLogApi
} = require('../index');

test(
  'configure',
  () => {
    let ret = DobLogApi.configure(
      {
        config: {
          appenders: {
            out: {
              type: 'console'
            }
          },
          categories: {
            default: {
              appenders: ['out'],
              level: 'info'
            }
          }
        }
      }
    );
    expect(ret).toBe(true);
  }
);