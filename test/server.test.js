import express from 'express';
import { createServer, startServer } from '../src/server';

const fakePort = 1234;

jest.mock('express', () => {
  const express = {
    get: jest.fn(),
    listen: jest.fn()
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
  describe('startServer', () => {
    test('should call listen with value ', () => {
      startServer(fakePort);

      expect(fakeApp.listen).toHaveBeenCalledWith(fakePort);
    });
  });
});
