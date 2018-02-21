/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a SpamAnalysisResult.
 */
class SpamAnalysisResult {
  /**
   * Create a SpamAnalysisResult.
   * @member {object} [spamFilterResults]
   * @member {array} [spamFilterResults.spamAssassin]
   * @member {number} [score]
   */
  constructor() {
  }

  /**
   * Defines the metadata of SpamAnalysisResult
   *
   * @returns {object} metadata of SpamAnalysisResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SpamAnalysisResult',
      type: {
        name: 'Composite',
        className: 'SpamAnalysisResult',
        modelProperties: {
          spamFilterResults: {
            required: false,
            serializedName: 'spamFilterResults',
            type: {
              name: 'Composite',
              className: 'SpamFilterResults'
            }
          },
          score: {
            required: false,
            serializedName: 'score',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = SpamAnalysisResult;