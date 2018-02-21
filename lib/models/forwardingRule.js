/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ForwardingRule.
 */
class ForwardingRule {
  /**
   * Create a ForwardingRule.
   * @member {string} [field] Possible values include: 'from', 'to', 'subject'
   * @member {string} [operator] Possible values include: 'endsWith',
   * 'startsWith', 'contains'
   * @member {string} [value]
   * @member {string} [forwardTo]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ForwardingRule
   *
   * @returns {object} metadata of ForwardingRule
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ForwardingRule',
      type: {
        name: 'Composite',
        className: 'ForwardingRule',
        modelProperties: {
          field: {
            required: false,
            serializedName: 'field',
            type: {
              name: 'String'
            }
          },
          operator: {
            required: false,
            serializedName: 'operator',
            type: {
              name: 'String'
            }
          },
          value: {
            required: false,
            serializedName: 'value',
            type: {
              name: 'String'
            }
          },
          forwardTo: {
            required: false,
            serializedName: 'forwardTo',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ForwardingRule;