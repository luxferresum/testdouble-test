import dummy from './dummy.js';
import express from 'express';

const data = {
  dummyValue: dummy(),
  express: express,
};

export default data;