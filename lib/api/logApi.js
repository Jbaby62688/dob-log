'use strict';

const log4js = require('log4js');

class LogApi {
  /**
   * @description 配置日志
   * 
   * @static
   * 
   * @param {Object} param1
   * @param {Object} param1.config 配置
   * @param {Object} param2
   * @param {Boolean} [param2.throwErrorFlag = true] 抛出错误标志
   * 
   * @returns {Boolean} 是否配置成功
   */
  static configure(
    {
      config
    },
    {
      throwErrorFlag = true
    } = {}
  ) {
    try {
      //配置日志
      log4js.configure(config);

      //返回
      return true;
    }
    catch (error) {
      if(throwErrorFlag === true) {
        throw error;
      }
      else {
        return false;
      }
    }
  }


  /**
   * @description 获取日志器
   * 
   * @static
   * 
   * @param {Object} param1
   * @param {String} [param1.category = 'default'] 日志分类
   * @param {Object} param2
   * @param {Boolean} [param2.throwErrorFlag = true] 抛出错误标志
   * 
   * @returns {Object} 日志器
   */
  static getLogger(
    {
      category = 'default'
    } = {},
    {
      throwErrorFlag = true,
    } = {}
  ) {
    try {
      //处理参数
      if (Object.prototype.toString.call(category) !== '[object String]') {
        category = 'default';
      }

      //返回
      return log4js.getLogger(category);
    }
    catch(error) {
      if(throwErrorFlag === true) {
        throw error;
      }
      else {
        return null;
      }
    }
  }
}

module.exports = LogApi;