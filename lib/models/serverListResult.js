/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * The result of a server listing request.
 *
 */
class ServerListResult {
  /**
   * Create a ServerListResult.
   * @member {array} [items] The individual servers forming the result. Servers
   * are returned sorted by creation date, with the most recently-created
   * server appearing first.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ServerListResult
   *
   * @returns {object} metadata of ServerListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ServerListResult',
      type: {
        name: 'Composite',
        className: 'ServerListResult',
        modelProperties: {
          items: {
            required: false,
            serializedName: 'items',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ServerElementType',
                  type: {
                    name: 'Composite',
                    className: 'Server'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ServerListResult;