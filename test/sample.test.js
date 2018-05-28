const { expect } = require('chai')
const sinon = require('sinon')

const Sample = require('../lib/sample')

describe('Unit | Class | Sample', () => {
  describe('#hello', () => {
    it('should return "Hello, World!"', () => {
      // Given
      const expected = 'Hello, World!'
      // When
      const result = Sample.hello()
      // Then
      expect(result).to.equal(expected)
    })
  })
})
