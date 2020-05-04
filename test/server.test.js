import express from 'express';
import { createServer } from '../src/server';

jest.mock('express', () => {
  const express = {
    get: jest.fn()
  };
  return jest.fn(() => express);
});

let fakeApp = express();

describe('server.js', () => {
  describe('createServer', () => {
    it('should call get', () => {
      createServer();

      expect(fakeApp.get).toHaveBeenCalled();
    });
  });
});
